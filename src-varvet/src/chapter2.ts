// @ts-nocheck
// Kapitel 2 "Hantverket": egen båt (bygge i fyra steg, sjösättning, fri körning mellan bryggor),
// personal (Leo eller Åke), Fyrskäret med Fyr-Ingrid, Karins besök och regattan vid Grannön.
import * as THREE from "three";
import { attachProp, attachCharacter, LEO } from "./characters";
import { boatGeo, BOXES, bobBoat } from "./yard";
import { scene } from "./engine";
import { ST, save, pop, SFX, updHud } from "./build";
import { BOATM, NPC, NJ, makePerson, fade, dialog, startGame, TGT } from "./jobs";
import { player, P } from "./player";
import { camS } from "./input";
import { INTERACT_PROVIDERS, JETTIES, DAY_HOOKS, BOATS } from "./hooks";
import { ISLANDS, YARD, sampleGrid } from "./terrain";
import { groundAt } from "./update";
import { weather } from "./life";
import { $, VC, colored, merge, tr } from "./util";
import { sawGame, nailGame, plankGame, paintGame } from "./craft";
import { splash } from "./sound";

// ---------- Tillstånd (ligger i ST.story.c2 så att det sparas med storyn) ----------
export const C2 = () => { const s = ST.story; if (!s.c2) s.c2 = { stage: 0, launched: false, dock: "varvet", name: "", staff: null, q: [] }; return s.c2; };
export const boatName = () => C2().name || "båten";
export const STAFF = {
  leo: { name: "Leo", full: "Leo Nyström", wage: 120, virke: 4, skrot: 1, look: { shirt: "#d9822b", pants: "#2b3a52", hair: "#6b4a2b", skin: "#f3cfb3" } },
  ake: { name: "Åke", full: "Åke Persson", wage: 280, virke: 8, skrot: 2, look: { shirt: "#7a8b5a", pants: "#3b3f45", hat: "#a33a2a", beard: "#bdb6aa", skin: "#e9bd98" } },
};

// ---------- Bryggor ----------
export const DOCKS = {};
function jettyFrom(cx, cz, tx, tz) { // marscherar från öns mitt mot (tx,tz) tills vattnet tar vid, bygger en brygga ut därifrån
  const L = Math.hypot(tx - cx, tz - cz), dx = (tx - cx) / L, dz = (tz - cz) / L; let x = cx, z = cz;
  for (let s = 0; s < 200; s++) { x += dx; z += dz; if (sampleGrid(x, z) < -.4) break; }
  const x0 = x - dx * 3, z0 = z - dz * 3, ex = x + dx * 9, ez = z + dz * 9, ang = Math.atan2(dx, dz), len = Math.hypot(ex - x0, ez - z0);
  const parts = []; const g = new THREE.BoxGeometry(2.6, .28, len); g.rotateY(ang); g.translate((x0 + ex) / 2, 1.2, (z0 + ez) / 2); parts.push(colored(g, "#9a7a55"));
  for (let t = 1; t < len; t += 3) for (const s of [-1.1, 1.1]) parts.push(colored(tr(new THREE.CylinderGeometry(.15, .15, 5, 6), x0 + dx * t + dz * s, -1.2, z0 + dz * t - dx * s), "#5e4630"));
  const m = new THREE.Mesh(merge(parts), VC); m.castShadow = true; m.receiveShadow = true; scene.add(m);
  JETTIES.push({ x0, z0, x1: ex, z1: ez, w: 1.25, h: 1.34 });
  return { sx: x, sz: z, dx, dz, ex, ez, ang };
}
function docksInit() {
  DOCKS.varvet = { id: "varvet", name: "Varvet", bx: 10.4, bz: 74, yaw: 0, px: 14, pz: 74 };
  { const dx = Math.sin(NJ.ang), dz = Math.cos(NJ.ang), ex = NJ.x1, ez = NJ.z1;
    DOCKS.grannon = { id: "grannon", name: "Grannön", bx: ex - dz * 3.2 - dx * 2.5, bz: ez + dx * 3.2 - dz * 2.5, yaw: NJ.ang, px: ex - dx * 2.5, pz: ez - dz * 2.5 }; }
  const I = ISLANDS[3], J = jettyFrom(I.x, I.z, 0, 0);
  DOCKS.fyr = { id: "fyr", name: "Fyrskäret", bx: J.ex - J.dx * 2.5 + J.dz * 3.2, bz: J.ez - J.dz * 2.5 - J.dx * 3.2, yaw: J.ang, px: J.ex - J.dx * 2.5, pz: J.ez - J.dz * 2.5, land: { x: J.sx - J.dx * 3, z: J.sz - J.dz * 3 } };
}

// ---------- Egen båt ----------
export let myBoat = null;
function boatInit() {
  myBoat = new THREE.Mesh(boatGeo("#f4f1ea", "#2f5d8a"), VC); myBoat.castShadow = true; scene.add(myBoat);
  const mo = new THREE.Group(); const a = new THREE.Mesh(new THREE.BoxGeometry(.45, .55, .5), new THREE.MeshLambertMaterial({ color: "#2b3a52" })); a.position.y = .55; mo.add(a);
  const sh = new THREE.Mesh(new THREE.BoxGeometry(.12, .8, .14), new THREE.MeshLambertMaterial({ color: "#2b2f36" })); sh.position.y = -.05; mo.add(sh); mo.position.set(0, .1, -3.05); myBoat.add(mo);
  attachProp(myBoat, "motorbat.glb", { fit: 5.8, rotY: Math.PI / 2, y: .05, hideChildren: true, liner: .975, waterMask: -.12 });
  BOATS.push(myBoat); placeAtDock(C2().dock);
}
function placeAtDock(id) { const d = DOCKS[id] || DOCKS.varvet; myBoat.position.set(d.bx, .45, d.bz); myBoat.rotation.set(0, d.yaw, 0); myBoat.userData.yaw = d.yaw; myBoat.visible = !!C2().launched; }
let guide = null;
/** Storyn pekar ut ett mål till sjöss (kompass + ring) medan man kör den egna båten. */
export function setGuide(g) { if (g === guide || (g && guide && g.x === guide.x && g.z === guide.z)) return; guide = g; if (BOATM.on && BOATM.free) BOATM.target = g; }
function board() {
  if (weather().wind >= 3) { pop("Storm – ingen kör ut i det här vädret", 2600); SFX("no"); return; }
  Object.assign(BOATM, { on: true, v: 0, boat: myBoat, free: true, vmax: 11, yaw: myBoat.userData.yaw, target: guide, lock: false });
  $("hint").style.opacity = 1; $("hint").textContent = "Vänster tumme: gasa och styr · Lägg till vid en brygga för att gå i land";
  if (weather().wind >= 2) pop("Det blåser – håll farten nere i vågorna", 2600);
}
export function dockAt(d, boat = myBoat) {
  BOATM.on = false; BOATM.free = false; BOATM.target = null; BOATM.v = 0; $("compass").style.display = "none"; TGT.visible = false; $("hint").style.opacity = 0;
  if (boat === myBoat) { C2().dock = d.id; placeAtDock(d.id); }
  player.pos.set(d.px, groundAt(d.px, d.pz), d.pz); player.yaw = d.yaw + Math.PI; camS.tYaw = camS.yaw = d.yaw + Math.PI;
  P.position.copy(player.pos); save();
}
function dockItem() {
  if (!BOATM.free) return null; const b = BOATM.boat;
  for (const d of Object.values(DOCKS)) if (Math.hypot(b.position.x - d.bx, b.position.z - d.bz) < 10 && Math.abs(BOATM.v) < 5)
    return { x: d.bx, z: d.bz, r: 99, label: "Lägg till · " + d.name, fn: () => { SFX("place"); splash(.05); dockAt(d); pop("Förtöjd vid " + d.name, 1600); } };
  return null;
}

// ---------- Byggplatsen vid slipen ----------
const SITE = { x: -12, z: 49 };
export const STAGES = [
  { name: "Kölen", label: "Såga kölen", cost: { virke: 6 }, game: sawGame, done: "Kölen ligger på bockarna. Rak och fin." },
  { name: "Spanten", label: "Spika spanten", cost: { virke: 6, skrot: 4 }, game: nailGame, done: "Spanten sitter. Nu ser det ut som en båt – om man kisar." },
  { name: "Bordgångarna", label: "Lägg bordgångarna", cost: { virke: 10, skrot: 4 }, game: plankGame, done: "Skrovet är tätt. Nästan i alla fall." },
  { name: "Färgen", label: "Måla skrovet", cost: { kr: 400 }, game: paintGame, rain: true, done: "Vit och blank. Nu ska hon bara i sjön." },
];
let site = null;
function siteInit() {
  const Y = YARD.h; site = new THREE.Group(); site.position.set(SITE.x, Y, SITE.z); scene.add(site);
  const cr = []; for (const z of [-1.6, 1.6]) cr.push(colored(tr(new THREE.BoxGeometry(1.8, .5, .3), 0, .25, z), "#6b5137"));
  const cradle = new THREE.Mesh(merge(cr), VC); cradle.castShadow = true; site.add(cradle);
  const keel = new THREE.Mesh(merge([colored(tr(new THREE.BoxGeometry(.16, .26, 5.2), 0, .66, 0), "#9c7448"), colored(tr(new THREE.BoxGeometry(.16, 1.1, .2).rotateX(-.35), 0, 1.15, 2.6), "#9c7448")]), VC);
  const ribs = []; for (let i = 0; i < 7; i++) { const t = (i - 3) / 3.4, w = (1 - Math.max(0, t) * .7) * 1.15, g = new THREE.TorusGeometry(w, .05, 4, 14, Math.PI); g.rotateZ(Math.PI); g.scale(1, .75, 1); g.translate(0, 1.5, t * 2.4); ribs.push(colored(g, "#c49a66")); }
  const ribM = new THREE.Mesh(merge(ribs), VC);
  const hullW = new THREE.Mesh(boatGeo("#c49a66", "#9c7448"), VC), hullP = new THREE.Mesh(boatGeo("#f4f1ea", "#2f5d8a"), VC);
  for (const h of [hullW, hullP]) { h.position.y = 1.5; h.scale.setScalar(.9); }
  for (const m of [keel, ribM, hullW, hullP]) { m.castShadow = true; site.add(m); }
  site.userData = { keel, ribM, hullW, hullP }; siteRefresh();
  BOXES.push({ x0: SITE.x - 1.4, x1: SITE.x + 1.4, z0: SITE.z - 3, z1: SITE.z + 3, top: Y + 2.4 });
}
export function siteRefresh() { if (!site) return; const s = C2().stage, L = C2().launched, u = site.userData;
  u.keel.visible = s >= 1 && s < 3 && !L; u.ribM.visible = s >= 2 && s < 3 && !L; u.hullW.visible = s === 3 && !L; u.hullP.visible = s >= 4 && !L; }
const costTxt = c => Object.entries(c).map(([k, n]) => k === "kr" ? n + " kr" : n + " " + k).join(", ");
const canPay = c => Object.entries(c).every(([k, n]) => (ST[k] || 0) >= n);
function buildStage(i) {
  const S = STAGES[i];
  if (!canPay(S.cost)) { pop("Du behöver " + costTxt(S.cost) + " · beställ i telefonen eller plocka", 3200); SFX("no"); return; }
  if (S.rain && weather().rain) { pop("Det regnar – färgen fäster inte. Vänta på uppehåll.", 3000); SFX("no"); return; }
  startGame({ init: S.game, onDone: q => {
    for (const [k, n] of Object.entries(S.cost)) ST[k] -= n; updHud();
    C2().stage = i + 1; C2().q.push(q || 1); siteRefresh(); save();
    dialog("Sven", [S.done], null);
  } });
}
/** Interaktion vid byggplatsen för ett visst steg (används av storyn). */
export const siteAct = i => ({ x: SITE.x, z: SITE.z + 4.4, r: 2.8, label: `${STAGES[i].label} (${costTxt(STAGES[i].cost)})`, fn: () => buildStage(i) });
export const sitePos = () => new THREE.Vector3(SITE.x, YARD.h + 3.2, SITE.z);
export function launch(onDone) {
  const nb = $("nameBox"), inp = $("nbIn"); nb.style.display = "flex"; inp.value = C2().name || "Lilla Sjöstjärnan"; window.__modal = true;
  setTimeout(() => { try { inp.focus(); inp.select(); } catch (e) {} }, 50);
  $("nbOk").onclick = () => {
    const n = inp.value.trim().slice(0, 24) || "Lilla Sjöstjärnan"; nb.style.display = "none"; window.__modal = false;
    fade(() => { const c = C2(); c.name = n; c.launched = true; c.dock = "varvet"; siteRefresh(); placeAtDock("varvet"); dockAt(DOCKS.varvet); SFX("done"); setTimeout(() => pop(`«${n}» är sjösatt!`, 3000), 300); onDone && onDone(); });
  };
}

// ---------- Personal ----------
function staffNpc(id) {
  if (NPC.staff) { scene.remove(NPC.staff); delete NPC.staff; }
  const s = STAFF[id]; const n = makePerson(s.look); n.position.set(-9.6, groundAt(-9.6, 39.6), 39.6); n.rotation.y = .6; n.userData.name = s.name; NPC.staff = n; if (id === "leo") attachCharacter(n, LEO);
}
/** Leo dyker upp vid varvet innan man bestämt sig. */
export function leoArrive() { if (!C2().staff) staffNpc("leo"); }
export function hire(id) { C2().staff = id; staffNpc(id); save(); }
export const staff = () => (C2().staff ? STAFF[C2().staff] : null);
const LEO_LINES = ["Jag har sorterat spikarna efter storlek. Och sen efter färg. Det finns tydligen bara en färg.", "Sven säger att jag håller hammaren som en glasstrut. Vad betyder det?", "Jag tappade en planka i sjön men jag hämtade den. Nästan hela.", "När jag blir stor ska jag också ha ett varv. Eller två."];
const AKE_LINES = ["Mäta två gånger, såga en gång. Inte tvärtom.", "Din morfar lärde mig skarva bordgångar. Det var 1979.", "Virket från Kvarnvik är för fuktigt. Låt det ligga en vecka.", "Bra att någon tar hand om det här stället igen."];
let staffEvent = "";
function payday() {
  const s = staff(); if (!s) return;
  const pay = Math.min(ST.kr, s.wage); ST.kr -= pay; ST.virke += s.virke; ST.skrot += s.skrot;
  staffEvent = `${s.name} jobbade i går: +${s.virke} virke, +${s.skrot} skrot · lön −${pay} kr`;
  if (C2().staff === "leo" && Math.random() < .25) { ST.skrot = Math.max(0, ST.skrot - 1); staffEvent += " · Leo tappade en låda spik i sjön"; }
  updHud(); setTimeout(() => { if (staffEvent) pop(staffEvent, 4200); staffEvent = ""; }, 4200);
}

// ---------- Personer på öarna ----------
function peopleInit() {
  const f = DOCKS.fyr.land; NPC.ingrid = makePerson({ shirt: "#2f5d8a", pants: "#2b2f36", hair: "#e8e4dc", skin: "#f0c9ab" });
  NPC.ingrid.position.set(f.x, groundAt(f.x, f.z), f.z); NPC.ingrid.userData.name = "Ingrid";
  NPC.karin = makePerson({ shirt: "#6b6f76", pants: "#2b3a52", hair: "#c9b48f", skin: "#f2cdb0" });
  NPC.karin.position.set(14, 1.45, 87); NPC.karin.rotation.y = Math.PI; NPC.karin.userData.name = "Karin"; NPC.karin.visible = false;
  // lykta på fyren som blinkar
  const I = ISLANDS[3]; const g = new THREE.Mesh(new THREE.SphereGeometry(.6, 10, 8), new THREE.MeshBasicMaterial({ color: "#ffe9a0", transparent: true })); g.position.set(I.x, groundAt(I.x, I.z) + 6.5, I.z); scene.add(g); scene.userData.fyrLamp = g;
}

// ---------- Regattan ----------
export const COURSE = [[135, -76], [116, -38], [118, 28], [150, 60], [176, 12], [182, -58]];
const RIVALS = [{ name: "Fiskar-Olle", c: ["#e8d8b0", "#a33a2a"], v: 9.4 }, { name: "Bengtssons pojkar", c: ["#d8e2ea", "#2b3a52"], v: 9.9 }, { name: "Västkust Marina", c: ["#1d1f24", "#c0c6cc"], v: 10.4 }];
let race = null, buoys = [];
function raceInit() {
  for (const [x, z] of COURSE.slice(1)) { const b = new THREE.Mesh(merge([colored(tr(new THREE.CylinderGeometry(.5, .7, 1.4, 8), 0, .3, 0), "#e8742a"), colored(tr(new THREE.ConeGeometry(.35, .8, 8), 0, 1.4, 0), "#f4f1ea")]), VC); b.position.set(x, 0, z); b.visible = false; scene.add(b); buoys.push(b); }
  for (const r of RIVALS) { const m = new THREE.Mesh(boatGeo(r.c[0], r.c[1]), VC); m.castShadow = true; m.visible = false; scene.add(m); BOATS.push(m); r.mesh = m; }
}
export function raceStart(borrow, onEnd) {
  const boat = borrow ? bobBoat : myBoat;
  fade(() => {
    const [sx, sz] = COURSE[0], [nx, nz] = COURSE[1], yaw = Math.atan2(nx - sx, nz - sz), px = Math.cos(yaw), pz = -Math.sin(yaw);
    boat.position.set(sx, .45, sz); boat.rotation.set(0, yaw, 0); boat.userData.yaw = yaw;
    RIVALS.forEach((r, i) => { const o = (i + 1) * 4.2 * (i % 2 ? -1 : 1) - 2; r.mesh.position.set(sx + px * o - Math.sin(yaw) * (i * 1.5), .45, sz + pz * o - Math.cos(yaw) * (i * 1.5)); r.yaw = yaw; r.i = 1; r.done = 0; r.sp = 0; r.mesh.visible = true; r.mesh.userData.yaw = yaw; r.mesh.userData.v = 0; });
    buoys.forEach(b => b.visible = true);
    race = { boat, borrow, i: 1, t: -3.5, fin: [], onEnd, count: 4 };
    Object.assign(BOATM, { on: true, v: 0, boat, free: false, vmax: borrow ? 12.2 : 11, yaw, lock: true, race });
    $("hint").style.opacity = 1; $("hint").textContent = "Runda bojarna i ordning – först i mål vinner!";
    camS.tYaw = camS.yaw = yaw; setTarget();
  });
}
function setTarget() { const last = race.i >= COURSE.length, [x, z] = last ? COURSE[0] : COURSE[race.i];
  BOATM.target = { x, z, r: 9, ring: true, vmax: 99, label: last ? "Mål" : `Boj ${race.i}/${COURSE.length - 1}`, onArrive: () => { SFX("pick"); if (last) return finish(); race.i++; setTarget(); } }; }
function finish() {
  const place = race.fin.length + 1; race.fin.push("Du"); const R = race; race = null;
  BOATM.target = null; BOATM.lock = true; $("compass").style.display = "none"; TGT.visible = false; pop(place === 1 ? "Först i mål!" : `Du kom ${place}:a`, 2400);
  setTimeout(() => fade(() => {
    RIVALS.forEach(r => r.mesh.visible = false); buoys.forEach(b => b.visible = false); BOATM.race = null; BOATM.lock = false;
    if (R.borrow) { bobBoat.position.set(NJ.boatX, .45, NJ.boatZ); bobBoat.rotation.set(0, NJ.ang, 0); bobBoat.userData.yaw = NJ.ang; }
    dockAt(DOCKS.grannon, R.boat); if (!R.borrow) placeAtDock("grannon");
    R.onEnd && R.onEnd(place, R);
  }), 1600);
}
function raceTick(dt) {
  if (!race) return;
  if (race.lock !== false) { race.t += dt; const c = Math.ceil(-race.t); if (c !== race.count && c >= 0) { race.count = c; if (c > 0) { pop(String(c), 800); SFX("tick"); } } if (race.t >= 0) { race.lock = false; BOATM.lock = false; pop("Kör!", 1000); SFX("done"); } else return; }
  for (const r of RIVALS) {
    const m = r.mesh; if (r.done) { r.sp *= Math.max(0, 1 - dt); } else {
      const last = r.i >= COURSE.length, [tx, tz] = last ? COURSE[0] : COURSE[r.i], a = Math.atan2(tx - m.position.x, tz - m.position.z);
      const da = Math.atan2(Math.sin(a - r.yaw), Math.cos(a - r.yaw)); r.yaw += Math.max(-1.1 * dt, Math.min(1.1 * dt, da));
      r.sp += (r.v * (1 - Math.min(.5, Math.abs(da) * .4)) * (.97 + .06 * Math.sin(performance.now() / 900 + r.v)) - r.sp) * Math.min(1, dt * .8);
      if (Math.hypot(tx - m.position.x, tz - m.position.z) < 6) { if (last) { r.done = 1; race.fin.push(r.name); } else r.i++; }
    }
    m.position.x += Math.sin(r.yaw) * r.sp * dt; m.position.z += Math.cos(r.yaw) * r.sp * dt; m.userData.yaw = r.yaw; m.userData.v = r.sp;
  }
}
export const raceOn = () => !!race;

// ---------- Init och tick ----------
export function chapter2Init() {
  C2(); docksInit(); boatInit(); siteInit(); peopleInit(); raceInit();
  if (C2().staff) staffNpc(C2().staff);
  BOATM.dockItem = dockItem; BOATM.forceHome = () => { const b = BOATM.boat; if (b === myBoat || !b) dockAt(DOCKS.varvet); else { BOATM.on = false; } };
  DAY_HOOKS.push(payday);
  INTERACT_PROVIDERS.push(list => {
    if (BOATM.on) return; const c = C2();
    if (c.launched) { const d = DOCKS[c.dock]; list.push({ x: d.px, z: d.pz, r: 2.4, label: "Kör " + boatName(), fn: board }); }
    if (NPC.staff && staff()) { const p = NPC.staff.position, s = staff(); list.push({ x: p.x, z: p.z, r: 2.2, label: "Prata med " + s.name, fn: () => { const L = c.staff === "leo" ? LEO_LINES : AKE_LINES; dialog(s.name, [L[Math.floor(Math.random() * L.length)]], null); } }); }
  });
}
export function chapter2Tick(dt, t) {
  raceTick(dt);
  const l = scene.userData.fyrLamp; if (l) l.material.opacity = .35 + .65 * Math.max(0, Math.sin(t * 2.2)) ** 6;
}
