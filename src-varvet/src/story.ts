// @ts-nocheck
// Storyn: akt 1, kapitel 1 "Arvet". Stegen ligger som data; varje steg har ett mål i uppdragsrutan,
// valfri markör/interaktion och ett villkor för att gå vidare. Tillståndet sparas i ST.story.
import * as THREE from "three";
import { ST, save, pop, SFX, renderObj, OBJ } from "./build";
import { dialog, DLG, GAMEON, NPC, MARK, fade, BOATM } from "./jobs";
import { timeOf } from "./life";
import { player } from "./player";
import { camS } from "./input";
import { scene } from "./engine";
import { groundAt } from "./update";
import { VC, colored, merge, tr } from "./util";
import { INTERACT_PROVIDERS } from "./hooks";
import { $ } from "./util";

const NAME = () => (ST.pname || "").trim() || (ST.char === "man" ? "grabben" : "jäntan");
const CHEST = { x: 6.6, z: 41.4 };

// ---------- Texter ----------
const LAWYER = () => `Advokatfirman Strand & Berg
Storgatan 4, Kvarnvik

Angående: dödsboet efter Edvin Lind

Hej ${ST.pname || ""},

Efter många års utredning har tingsrätten nu fastställt att Edvin Lind, som försvann till sjöss natten mot den 14 oktober 1994, ska anses vara avliden.

Som hans enda barnbarn tillfaller Lindvarvet på Varvsön dig: byggnader, mark, brygga och tillhörande lösöre. Fastigheten har stått obrukad sedan dess.

Vi har även mottagit en förfrågan från Västkust Marina Invest AB, som är intresserade av att förvärva marken. Kontakta oss om du önskar sälja.

Nyckeln finns hos grannen, Sven Ek.

Med vänlig hälsning
Gunilla Strand, advokat`;
const EDVIN = () => `Till den som öppnar den här kistan –

Är det du, Karin? Eller kanske ditt barn. Jag hoppas det.

Varvet är inte mycket att se på just nu, men det har burit den här ön i hundra år. Sven vet var allting finns. Lita på honom, men låt honom aldrig koka kaffet.

Om jag inte kommer tillbaka från det jag måste göra i natt, så finns svaret där krysset är.

/ E.`;

// ---------- Steg ----------
// obj: text i uppdragsrutan. at: markörposition. act: interaktion {x,z,r,label,fn}. done: villkor. start: körs en gång.
const STEPS = [
  { id: "intro", obj: "Läs brevet från advokaten", start: () => letter("Brev från advokaten", LAWYER(), () => { arrive(); next(); }) },
  { id: "sven", obj: "Hämta nyckeln hos Sven på bryggan", at: () => npcAt("sven"), done: () => ST.jobOn || ST.job > 0,
    diary: "Kom ut till Varvsön. Morfars varv är mitt nu – vad jag nu ska göra med det." },
  { id: "eka", obj: "Slipa Svens eka vid boden", done: () => ST.job >= 1 },
  { id: "karin", obj: "Svara i telefonen", start: () => setTimeout(() => call(), 1800), done: () => flag("karin") },
  { id: "kista", obj: "Öppna Edvins gamla kista vid boden", at: () => new THREE.Vector3(CHEST.x, 2.6, CHEST.z),
    act: () => ({ ...CHEST, r: 2.4, label: "Öppna Edvins kista", fn: openChest }), done: () => flag("kista") },
  { id: "virke", obj: "Samla 10 virke till lagningar", done: () => ST.picked >= 10 },
  { id: "propeller", obj: "Byt propeller på Svens motorbåt", done: () => ST.job >= 2 },
  { id: "leverans", obj: "Kör motorbåten till Majken på Grannön", done: () => ST.job >= 3,
    diary: "Träffade Majken på Grannön. Hon visste redan vem jag var. Alla vet vem jag är här." },
  { id: "bygge", obj: "Bygg ett förråd: golv, väggar och tak", done: () => ST.obj >= OBJ.length, list: true },
  { id: "kvall", obj: () => (timeOf().min < 18 * 60 ? "Möt Sven på bryggan i kväll (efter 18:00)" : "Sätt dig med Sven på bryggan"),
    at: () => (timeOf().min >= 18 * 60 ? npcAt("sven") : null),
    act: () => (timeOf().min >= 18 * 60 ? { x: NPC.sven.position.x, z: NPC.sven.position.z, r: 2.6, label: "Sätt dig med Sven", fn: evening } : null),
    done: () => flag("kvall") },
  { id: "slut1", obj: "Kapitel 2 – Hantverket kommer snart", start: () => chapterCard("Kapitel 1 – Arvet", "Klart") },
];

// ---------- Tillstånd ----------
const S = () => ST.story;
const flag = k => !!(S() && S().flags[k]);
const setFlag = k => { S().flags[k] = 1; save(); };
function npcAt(id) { const p = NPC[id].position; return new THREE.Vector3(p.x, p.y + 2.6, p.z); }
function addDiary(txt) { const L = timeOf(); S().diary.unshift({ d: L ? L.day : 0, t: txt }); }
function next() {
  const st = STEPS[S().step]; if (st && st.diary) addDiary(st.diary);
  S().step++; S().started = false; save(); renderObj(); SFX("done");
}
export function storyStep() { return S() ? STEPS[S().step] : null; }
export function storyObjective() { const st = storyStep(); if (!st) return null; return { text: typeof st.obj === "function" ? st.obj() : st.obj, list: !!st.list }; }
export const storyDiary = () => (S() ? S().diary : []);

export function storyInit() {
  if (!ST.story) {
    ST.story = { step: 0, flags: {}, diary: [], started: false };
    // äldre sparning: hoppa över intro och steg som redan är gjorda
    if (ST.job > 0 || ST.picked > 0) { ST.story.step = 1; while (ST.story.step < STEPS.length && STEPS[ST.story.step].done && STEPS[ST.story.step].done() && !STEPS[ST.story.step].start) ST.story.step++; }
  }
  buildChest();
  INTERACT_PROVIDERS.push(list => { const st = storyStep(); if (!st || !st.act) return; const a = st.act(); if (a) list.unshift(a); });
}
let wait = 0, lastObj = "";
export function storyTick(dt) {
  const s = S(); if (!s) return;
  const st = STEPS[s.step]; if (!st) return;
  if (!s.started && !DLG && !GAMEON && !BOATM.on) { s.started = true; if (st.start) st.start(); }
  wait -= dt;
  if (st.done && wait <= 0 && !DLG && !GAMEON && st.done()) { wait = .25; next(); }
  { const o = storyObjective(); const t = o ? o.text : ""; if (t !== lastObj) { lastObj = t; renderObj(); } }
  if (st.at) { const p = st.at(); if (p) { MARK.visible = true; MARK.position.copy(p); MARK.position.y += Math.sin(performance.now() / 330) * .15; } }
  chestLid();
}

// ---------- Brev, samtal, kista, kväll ----------
function letter(title, body, onClose) {
  $("letTitle").textContent = title; $("letBody").textContent = body; $("letter").style.display = "flex";
  $("letOk").onclick = () => { $("letter").style.display = "none"; onClose && onClose(); };
}
function arrive() {
  fade(() => {
    player.pos.set(14, 1.45, 88); player.yaw = Math.PI; camS.tYaw = camS.yaw = Math.PI;
    setTimeout(() => pop("Varvsön · Lindvarvet", 3200), 400);
  });
}
function call() {
  SFX("done");
  dialog("Karin (mamma) · 📞", [
    `Hej ${NAME()}, det är mamma. Advokaten sa att du åkt ut till ön.`,
    "Jag vet att du menar väl. Men det där varvet har inte gett vår familj något annat än sorg.",
    "Det ligger ett bud från Västkust Marina på bordet. Ta det och kom hem.",
    "…Och hälsa Sven. Om han fortfarande lever, den envisa gamla jäveln.",
  ], () => { setFlag("karin"); addDiary("Mamma ringde. Hon vill att jag säljer. Hon lät inte arg – mest trött."); });
}
let chest = null, lid = null, lidOpen = 0;
function buildChest() {
  const y = Math.max(1.3, groundAt(CHEST.x, CHEST.z));
  chest = new THREE.Group(); chest.position.set(CHEST.x, y, CHEST.z); chest.rotation.y = -.35;
  const body = new THREE.Mesh(merge([colored(tr(new THREE.BoxGeometry(1.1, .55, .62), 0, .275, 0), "#6b4a2b", 1), colored(tr(new THREE.BoxGeometry(1.14, .08, .66), 0, .08, 0), "#3a3f45", 0), colored(tr(new THREE.BoxGeometry(1.14, .08, .66), 0, .47, 0), "#3a3f45", 0)]), VC);
  lid = new THREE.Group(); lid.position.set(0, .55, -.31);
  const l = new THREE.Mesh(merge([colored(tr(new THREE.CylinderGeometry(.31, .31, 1.1, 10, 1, false, 0, Math.PI).rotateZ(Math.PI / 2), 0, 0, .31), "#7a5136", 1)]), VC); lid.add(l);
  chest.add(body, lid); chest.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); scene.add(chest);
  if (flag("kista")) lidOpen = 1;
}
function chestLid() { if (!lid) return; const t = flag("kista") ? 1 : 0; lidOpen += (t - lidOpen) * .08; lid.rotation.x = -lidOpen * 1.7; }
function openChest() {
  SFX("rip"); setFlag("kista");
  setTimeout(() => letter("Ett brev i Edvins handstil", EDVIN(), () => {
    pop("Du hittade ett vattenskadat sjökort med ett blyertskryss vid Ytterskären", 4200);
    addDiary("I morfars kista: ett brev till mamma – eller mig – och ett sjökort med ett kryss långt ute vid Ytterskären.");
    renderObj();
  }), 700);
}
function evening() {
  fade(() => {
    timeOf().min = Math.max(timeOf().min, 19 * 60 + 30);
    const s = NPC.sven.position; player.pos.set(s.x - .2, s.y, s.z + 1.6); player.yaw = Math.PI * .9; camS.tYaw = camS.yaw = Math.PI * .75; camS.tPitch = camS.pitch = .15;
    setTimeout(() => dialog("Sven", [
      "Sätt dig en stund. Det är som finast här när solen går ner.",
      "Edvin och jag satt på den här bryggan varenda kväll i fyrtio år. Han pratade om båtar. Jag pratade om fisk. Ingen av oss lyssnade.",
      "Natten han försvann blåste det full storm. Han sa inte ett ord – bara startade Sjöstjärnan och körde rakt ut. Ingen har nånsin förstått varför.",
      flag("kista") ? "Ett kryss vid Ytterskären, säger du… Dit kommer man inte med den där snipan. Inte en chans." : "Har du tittat i hans gamla kista vid boden? Han låste den aldrig.",
      `Men du, ${NAME()}… du har gjort mer för det här varvet på några dagar än nån gjort på trettio år. Edvin hade varit stolt.`,
    ], () => { setFlag("kvall"); addDiary("Satt med Sven på bryggan. Morfar körde ut i stormen 1994 och ingen vet varför. Jag tänker inte sälja. Inte än."); }), 600);
  });
}
function chapterCard(title, sub) {
  const el = $("chapter"); $("chTitle").textContent = title; $("chSub").textContent = sub; el.style.opacity = 1; el.style.display = "flex";
  setTimeout(() => { el.style.opacity = 0; setTimeout(() => el.style.display = "none", 900); }, 4200);
}
