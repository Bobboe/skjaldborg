// @ts-nocheck
// M2: tid (10 min per speldag, 06–22), sömn, dagsljus, väder med prognos, regn/snö,
// telefonen (beställ material, väder, kalender), leveranser och marknadspriser.
import * as THREE from "three";
import { storyDiary } from "./story";
import { scene, sun, hemi, camera } from "./engine";
import { water } from "./water";
import { ST, pop, SFX, updHud, save } from "./build";
import { player } from "./player";
import { camS } from "./input";
import { fade, DLG, GAMEON, BOATM } from "./jobs";
import { $ } from "./util";
import { INTERACT_PROVIDERS, DAY_HOOKS } from "./hooks";

// ---------- Konstanter ----------
export const DAY_START = 6 * 60, DAY_END = 22 * 60, MIDNIGHT = 24 * 60;
const RATE = (DAY_END - DAY_START) / 600;            // speldagens 16 timmar på 10 minuter
export const SEASON_LEN = 18;
const SEASONS = ["Vår", "Sommar", "Höst", "Vinter"];
const WEEK = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
const WX = {
  sol:   { name: "Sol",      icon: "☀️", cloud: 0,   sun: 1,   fog: [110, 460], rain: 0, wind: 1,   info: "Bra dag för allt arbete" },
  moln:  { name: "Molnigt",  icon: "⛅", cloud: .45, sun: .7,  fog: [90, 400],  rain: 0, wind: 1.1, info: "Grått men lugnt" },
  regn:  { name: "Regn",     icon: "🌧️", cloud: .8,  sun: .45, fog: [60, 300],  rain: 1, wind: 1.3, info: "Måla inte utomhus" },
  dimma: { name: "Dimma",    icon: "🌫️", cloud: .7,  sun: .5,  fog: [12, 120],  rain: 0, wind: .7,  info: "Svårt att hitta till sjöss" },
  blast: { name: "Blåsigt",  icon: "💨", cloud: .3,  sun: .85, fog: [100, 440], rain: 0, wind: 2,   info: "Höga vågor för små båtar" },
  storm: { name: "Storm",    icon: "⛈️", cloud: 1,   sun: .3,  fog: [40, 220],  rain: 2, wind: 3,   info: "Stanna i land" },
};
const WX_P = [ // sol, moln, regn, dimma, blåst, storm per årstid
  [.35, .25, .15, .12, .10, .03], [.50, .20, .10, .05, .12, .03], [.20, .25, .20, .12, .15, .08], [.20, .30, .15, .15, .12, .08]];
const BASE_PRICE = { virke: 30, skrot: 20 };
const EVENTS = [
  { s: 0, d: 12, name: "Båtmässan i Kvarnvik" }, { s: 1, d: 3, name: "Midsommar på Grannön" }, { s: 1, d: 12, name: "Regattan" },
  { s: 2, d: 5, name: "Skaldjursfest" }, { s: 3, d: 8, name: "Lucia" }, { s: 3, d: 14, name: "Julmarknad" }];

// ---------- Tillstånd (sparas i ST.life) ----------
let L = null;
const rnd = () => Math.random();
function rollWx(day) { const s = Math.floor(day / SEASON_LEN) % 4, p = WX_P[s]; let r = rnd(), i = 0; for (; i < p.length - 1; i++) { r -= p[i]; if (r < 0) break } return Object.keys(WX)[i]; }
function fresh() { return { day: 0, min: DAY_START, wx: "sol", fc: [rollWx(1), rollWx(2), rollWx(3)], price: { virke: 1, skrot: 1 }, prev: { virke: 1, skrot: 1 }, orders: { virke: 0, skrot: 0 }, delivery: null, warned: false }; }
export function setDay(d, min = 8 * 60) { L.day = d; L.min = min; L.warned = false; L.fc = [rollWx(d + 1), rollWx(d + 2), rollWx(d + 3)]; L.wx = "sol"; applyWeather(true); clockHud(); }
export function lifeInit() {
  L = ST.life || fresh(); ST.life = L;
  if (!L.fc) L.fc = [rollWx(L.day + 1), rollWx(L.day + 2), rollWx(L.day + 3)];
  buildRain(); buildCrate(); phoneInit();
  INTERACT_PROVIDERS.push(list => {
    list.push({ x: 4, z: 41.6, r: 2.6, label: L.min >= 18 * 60 ? "Sova i boden" : "Vila till i morgon", fn: () => sleep(false) });
    if (L.delivery) list.push({ x: 14.8, z: 58.4, r: 2.2, label: "Hämta leverans", fn: takeDelivery });
  });
  applyWeather(true); clockHud();
}
export const timeOf = () => L;
export function season() { return Math.floor(L.day / SEASON_LEN) % 4; }
export function weather() { return WX[L.wx]; }
const ICON = k => `<img class="wxi" src="${import.meta.env.BASE_URL}ui/wx_${k}.png" alt="${WX[k].name}">`;
const hhmm = m => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(Math.floor(m % 60)).padStart(2, "0")}`;
export function dateText(d = L.day) { return `${WEEK[d % 7]} · ${SEASONS[Math.floor(d / SEASON_LEN) % 4]} dag ${d % SEASON_LEN + 1}, år ${Math.floor(d / (SEASON_LEN * 4)) + 1}`; }

// ---------- Tid ----------
let clockT = 0;
export function lifeTick(dt) {
  if (!L) return;
  const paused = DLG || GAMEON || phoneOpen || sleeping;
  if (!paused) {
    L.min += dt * RATE;
    if (!L.warned && L.min >= DAY_END) { L.warned = true; pop("Klockan är tio på kvällen – dags att sova", 3200); }
    if (L.min >= MIDNIGHT) sleep(true);
  }
  light(dt); rainTick(dt);
  clockT -= dt; if (clockT <= 0) { clockT = 1; clockHud(); }
}
let sleeping = false;
function sleep(passedOut) {
  if (sleeping) return;
  if (BOATM.on && !passedOut) { pop("Lägg till vid en brygga först"); return; }
  if (BOATM.on && BOATM.forceHome) BOATM.forceHome();
  sleeping = true;
  fade(() => {
    sleeping = false;
    if (passedOut) { const fee = Math.min(ST.kr, 150); ST.kr -= fee; pop(fee ? `Du somnade utomhus och vaknade stel och frusen (−${fee} kr för värktabletter och kaffe)` : "Du somnade utomhus och vaknade stel och frusen", 4200); }
    newDay();
    player.pos.set(4, 1.3, 42.4); player.yaw = 0; camS.tYaw = camS.yaw = 0;
    updHud(); save();
    setTimeout(() => pop(`${dateText()} · ${WX[L.wx].name}`, 3600), passedOut ? 4400 : 300);
  });
}
function newDay() {
  L.day++; L.min = DAY_START; L.warned = false;
  L.wx = L.fc.shift(); L.fc.push(rollWx(L.day + 3));
  L.prev = { ...L.price };
  const s = season();
  for (const k of Object.keys(BASE_PRICE)) { const drift = (rnd() - .5) * .16 + (1 - L.price[k]) * .25; L.price[k] = Math.min(1.35, Math.max(.75, L.price[k] + drift + (s === 3 ? .02 : 0))); }
  if (L.orders.virke || L.orders.skrot) { L.delivery = { ...L.orders }; L.orders = { virke: 0, skrot: 0 }; }
  applyWeather(true);
  for (const f of DAY_HOOKS) try { f(); } catch (e) { console.warn(e); }
}
export function price(k) { return Math.round(BASE_PRICE[k] * L.price[k]); }

// ---------- Ljus och väder ----------
const PAL = {
  day: [new THREE.Color("#4f9ad6"), new THREE.Color("#9fd0ea"), new THREE.Color("#bfdced")],
  dusk: [new THREE.Color("#5b6aa6"), new THREE.Color("#f2a77c"), new THREE.Color("#f5cba5")],
  night: [new THREE.Color("#0d1830"), new THREE.Color("#1f3155"), new THREE.Color("#2a3a5a")],
  grey: [new THREE.Color("#7f8c99"), new THREE.Color("#aab4bd"), new THREE.Color("#c3c9cf")],
};
const tmpC = [new THREE.Color(), new THREE.Color(), new THREE.Color()];
const SUN_HI = new THREE.Color("#ffe8c4"), SUN_LO = new THREE.Color("#ff9d5c"), MOON = new THREE.Color("#a9bde0");
let waterBase = null, wxCur = { cloud: 0, sun: 1, fogN: 110, fogF: 460, rain: 0, wind: 1 };
function applyWeather(snap) { const w = WX[L.wx]; const t = { cloud: w.cloud, sun: w.sun, fogN: w.fog[0], fogF: w.fog[1], rain: w.rain, wind: w.wind }; if (snap) wxCur = t; else wxTarget = t; wxTarget = t; }
let wxTarget = wxCur;
function light(dt) {
  for (const k in wxTarget) wxCur[k] += (wxTarget[k] - wxCur[k]) * Math.min(1, dt * .5);
  const f = Math.min(1, Math.max(0, (L.min - 300) / (1380 - 300)));     // 05:00 → 23:00
  const el = Math.sin(Math.PI * f), az = -1.9 + 3.8 * f;
  const dayK = Math.min(1, Math.max(0, (el - .02) / .25));
  const duskK = Math.exp(-Math.pow((el - .12) / .12, 2)) * (1 - wxCur.cloud * .8);
  // himmel
  const u = scene.userData.sky.material.uniforms;
  for (let i = 0; i < 3; i++) { tmpC[i].copy(PAL.night[i]).lerp(PAL.day[i], dayK).lerp(PAL.dusk[i], duskK * .85).lerp(PAL.grey[i], wxCur.cloud * .75 * (.3 + .7 * dayK)); }
  u.top.value.copy(tmpC[0]); u.mid.value.copy(tmpC[1]); u.bot.value.copy(tmpC[2]);
  scene.fog.color.copy(tmpC[2]); scene.fog.near = wxCur.fogN; scene.fog.far = wxCur.fogF;
  // sol eller måne
  const p = player.pos, cel = Math.cos(Math.asin(Math.min(1, el)));
  if (dayK > 0) { sun.position.set(p.x + Math.cos(az) * cel * 100, p.y + Math.max(.15, el) * 100, p.z + Math.sin(az) * cel * 100); sun.color.copy(SUN_LO).lerp(SUN_HI, Math.min(1, el * 2.2)); sun.intensity = (.4 + 1.8 * dayK) * wxCur.sun; }
  else { sun.position.set(p.x - 40, p.y + 90, p.z + 30); sun.color.copy(MOON); sun.intensity = .35; }
  sun.target.position.copy(p);
  hemi.intensity = (.35 + .95 * dayK) * (1 - wxCur.cloud * .15);
  hemi.color.copy(tmpC[1]).lerp(new THREE.Color("#ffffff"), .5);
  // vatten följer ljuset och vinden
  if (water) { const wu = water.material.uniforms; if (!waterBase) waterBase = { deep: wu.deep.value.clone(), shallow: wu.shallow.value.clone() };
    const lk = .35 + .65 * dayK; wu.deep.value.copy(waterBase.deep).multiplyScalar(lk * (1 - wxCur.cloud * .25)); wu.shallow.value.copy(waterBase.shallow).multiplyScalar(lk * (1 - wxCur.cloud * .2));
    if (wu.amp) wu.amp.value = wxCur.wind; }
}

// ---------- Regn och snö ----------
let rain = null;
function buildRain() {
  const N = 1800, pos = new Float32Array(N * 6), seed = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) { const x = (rnd() - .5) * 60, y = rnd() * 30, z = (rnd() - .5) * 60, o = rnd(); for (let j = 0; j < 2; j++) { pos.set([x, y, z], (i * 2 + j) * 3); seed[i * 2 + j] = j; } }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("tip", new THREE.BufferAttribute(seed, 1));
  const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { t: { value: 0 }, cam: { value: new THREE.Vector3() }, snow: { value: 0 }, op: { value: 0 } },
    vertexShader: `uniform float t, snow; uniform vec3 cam; attribute float tip;
      void main(){ vec3 p = position; float sp = mix(24.0, 2.2, snow);
        p.y = mod(p.y - t * sp, 30.0); p.x += snow * sin(t * 1.3 + position.z) * 0.8;
        vec3 w = vec3(cam.x + mod(p.x - cam.x + 30.0, 60.0) - 30.0, cam.y - 8.0 + p.y, cam.z + mod(p.z - cam.z + 30.0, 60.0) - 30.0);
        w.y -= tip * mix(0.9, 0.08, snow); w.x += tip * 0.15;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,
    fragmentShader: `uniform float op, snow; void main(){ gl_FragColor = vec4(mix(vec3(.78,.85,.92), vec3(1.0), snow), op); }` });
  rain = new THREE.LineSegments(g, m); rain.frustumCulled = false; rain.renderOrder = 4; scene.add(rain);
}
function rainTick(dt) {
  if (!rain) return; const u = rain.material.uniforms;
  u.t.value += dt; u.cam.value.copy(camera.position); u.snow.value = season() === 3 ? 1 : 0;
  const target = wxCur.rain > .05 ? Math.min(.55, .25 * wxCur.rain + .1) : 0; u.op.value += (target - u.op.value) * Math.min(1, dt * .8);
  rain.visible = u.op.value > .01;
  rain.geometry.setDrawRange(0, Math.floor((wxCur.rain > 1.5 ? 1 : .55) * rain.geometry.attributes.position.count));
}

// ---------- Leveranser ----------
let crate = null;
function buildCrate() {
  crate = new THREE.Group();
  const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, .8, .9), new THREE.MeshLambertMaterial({ color: "#a47c52" })); box.position.y = .4; crate.add(box);
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.25, .08, .95), new THREE.MeshLambertMaterial({ color: "#7a5136" })); top.position.y = .82; crate.add(top);
  crate.position.set(15.2, 1.45, 58.4); crate.traverse(o => { if (o.isMesh) o.castShadow = true }); scene.add(crate);
}
function takeDelivery() {
  const d = L.delivery; if (!d) return;
  ST.virke += d.virke; ST.skrot += d.skrot; L.delivery = null; updHud(); save(); SFX("pick");
  pop(`Leverans hämtad: ${d.virke ? d.virke + " virke " : ""}${d.skrot ? d.skrot + " skrot" : ""}`, 2400);
}
export function crateTick() { if (crate) crate.visible = !!(L && L.delivery); }

// ---------- Telefonen ----------
let phoneOpen = false, tab = "shop", cart = { virke: 0, skrot: 0 };
function phoneInit() {
  $("bPhone").onclick = () => { phoneOpen = !phoneOpen; $("phone").style.display = phoneOpen ? "flex" : "none"; if (phoneOpen) { cart = { virke: 0, skrot: 0 }; render(); } };
  $("phX").onclick = () => { phoneOpen = false; $("phone").style.display = "none"; };
  document.querySelectorAll("#phTabs button").forEach(b => b.onclick = () => { tab = b.dataset.t; render(); });
  $("phBody").onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.add) { const [k, n] = b.dataset.add.split(":"); cart[k] = Math.max(0, cart[k] + +n); render(); }
    if (b.dataset.buy) { const tot = cartTotal(); if (!tot) return; if (tot > ST.kr) { pop("Inte tillräckligt med pengar"); SFX("no"); return; }
      ST.kr -= tot; L.orders.virke += cart.virke; L.orders.skrot += cart.skrot; cart = { virke: 0, skrot: 0 }; updHud(); save(); SFX("place"); pop("Beställt – levereras till bryggan i morgon bitti", 2600); render(); }
  };
}
const cartTotal = () => cart.virke * price("virke") + cart.skrot * price("skrot");
function trend(k) { const d = L.price[k] - L.prev[k]; return Math.abs(d) < .01 ? "→" : d > 0 ? "↑" : "↓"; }
function render() {
  document.querySelectorAll("#phTabs button").forEach(b => b.classList.toggle("on", b.dataset.t === tab));
  const el = $("phBody");
  if (tab === "shop") {
    const row = (k, name, unit) => `<div class="phRow"><img class="phIt" src="${import.meta.env.BASE_URL}ui/it_${k}.png" alt=""><div style="flex:1"><b>${name}</b><small>${price(k)} kr/${unit} ${trend(k)}</small></div>
      <div class="phQty"><button data-add="${k}:-5">−5</button><span>${cart[k]}</span><button data-add="${k}:5">+5</button><button data-add="${k}:10">+10</button></div></div>`;
    const pend = L.orders.virke || L.orders.skrot ? `<p class="phNote">Beställt till i morgon: ${L.orders.virke} virke, ${L.orders.skrot} skrot</p>` : "";
    const wait = L.delivery ? `<p class="phNote">En leverans väntar vid bryggan</p>` : "";
    el.innerHTML = `<h3>Kvarnviks Järn &amp; Trä</h3>${row("virke", "Virke", "st")}${row("skrot", "Skrot och beslag", "st")}
      <div class="phTot">Summa <b>${cartTotal()} kr</b> · Saldo ${ST.kr} kr</div><button class="btn acc" data-buy="1" ${cartTotal() ? "" : "disabled"}>Beställ – levereras 07:00 i morgon</button>${pend}${wait}
      <p class="phNote">Priserna ändras varje dag. Köp när pilen pekar nedåt.</p>`;
  } else if (tab === "wx") {
    const day = (d, k, lbl) => `<div class="phWx"><span>${ICON(k)}</span><div><b>${lbl}</b><small>${WX[k].name} – ${WX[k].info}</small></div></div>`;
    el.innerHTML = `<h3>Väder</h3>${day(L.day, L.wx, "I dag")}${L.fc.map((k, i) => day(L.day + i + 1, k, WEEK[(L.day + i + 1) % 7])).join("")}`;
  } else if (tab === "dag") {
    const D = storyDiary();
    el.innerHTML = `<h3>Dagbok</h3>` + (D.length ? D.map(e => `<div class="phRow"><div><small>${dateText(e.d)}</small>${e.t}</div></div>`).join("") : `<p class="phNote">Inget skrivet än.</p>`);
  } else {
    const s = season(), d = L.day % SEASON_LEN;
    const ev = EVENTS.map(e => { let dd = (e.s - s) * SEASON_LEN + (e.d - 1 - d); if (dd < 0) dd += SEASON_LEN * 4; return { ...e, in: dd } }).sort((a, b) => a.in - b.in);
    el.innerHTML = `<h3>Kalender</h3><p class="phNote">${dateText()}</p>${ev.map(e => `<div class="phRow"><div><b>${e.name}</b><small>${SEASONS[e.s]} dag ${e.d}</small></div><span>${e.in === 0 ? "i dag" : "om " + e.in + " d"}</span></div>`).join("")}`;
  }
}
function clockHud() { if (!L) return; $("clock").innerHTML = `${WEEK[L.day % 7]} ${hhmm(L.min)} · ${SEASONS[season()]} ${L.day % SEASON_LEN + 1} ${ICON(L.wx)}`; $("clock").classList.toggle("late", L.min >= DAY_END); }
export const isPhoneOpen = () => phoneOpen;
