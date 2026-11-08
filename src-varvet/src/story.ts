// @ts-nocheck
// Storyn: akt 1, kapitel 1 "Arvet". Stegen ligger som data; varje steg har ett mål i uppdragsrutan,
// valfri markör/interaktion och ett villkor för att gå vidare. Tillståndet sparas i ST.story.
import * as THREE from "three";
import { ST, save, pop, SFX, renderObj, OBJ } from "./build";
import { dialog, choice, DLG, GAMEON, NPC, MARK, fade, BOATM } from "./jobs";
import { timeOf, weather, setDay } from "./life";
import { C2, DOCKS, STAGES, siteAct, sitePos, launch, hire, staff, boatName, setGuide, raceStart, leoArrive } from "./chapter2";
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
  // ================= Kapitel 2: Hantverket =================
  { id: "c2", ch: 2, obj: "Ett år senare …", start: openC2, done: () => flag("c2") },
  { id: "kol", ch: 2, obj: "Bygg båten: såga kölen vid slipen", at: sitePos, act: () => siteAct(0), done: () => C2().stage >= 1 },
  { id: "leo", ch: 2, obj: "Någon väntar på dig vid varvet", start: () => leoArrive(), at: () => npcAt("staff"),
    act: () => (NPC.staff ? { x: NPC.staff.position.x, z: NPC.staff.position.z, r: 2.6, label: "Prata med killen", fn: leoTalk } : null), done: () => !!C2().staff },
  { id: "spant", ch: 2, obj: "Bygg båten: spika spanten", at: sitePos, act: () => siteAct(1), done: () => C2().stage >= 2 },
  { id: "sida1", ch: 2, obj: () => staff().name + " har hittat något", start: () => setTimeout(page1, 1500), done: () => flag("sida1") },
  { id: "bord", ch: 2, obj: "Bygg båten: lägg bordgångarna", at: sitePos, act: () => siteAct(2), done: () => C2().stage >= 3 },
  { id: "mala", ch: 2, obj: () => (weather().rain ? "Måla båten – men vänta tills det slutat regna" : "Bygg båten: måla skrovet"), at: sitePos, act: () => siteAct(3), done: () => C2().stage >= 4 },
  { id: "sjosatt", ch: 2, obj: "Sjösätt båten från slipen", at: sitePos,
    act: () => ({ ...siteAct(3), label: "Sjösätt båten", fn: () => launch(launched) }), done: () => flag("sjosatt") },
  { id: "provtur", ch: 2, obj: () => `Provkör ${boatName()} till Majkens brygga på Grannön`, sea: () => sea("grannon"), done: () => C2().dock === "grannon" && !BOATM.on,
    diary: () => `Första turen med ${boatName()}. Hon går rakt och tar inte in en droppe. Majken vinkade från bryggan.` },
  { id: "ingrid", ch: 2, obj: () => (weather().wind >= 2 ? "Vänta på lugnt väder innan du åker till Fyrskäret (se prognosen i telefonen)" : "Åk ut till Fyr-Ingrid på Fyrskäret"),
    start: ingridCall, sea: () => sea("fyr"), at: () => npcAt("ingrid"),
    act: () => ({ x: NPC.ingrid.position.x, z: NPC.ingrid.position.z, r: 2.8, label: "Prata med Ingrid", fn: ingridTalk }), done: () => flag("ingrid") },
  { id: "karin", ch: 2, obj: "Möt mamma på bryggan vid varvet", start: karinArrive, sea: () => sea("varvet"), at: () => npcAt("karin"),
    act: () => ({ x: NPC.karin.position.x, z: NPC.karin.position.z, r: 2.6, label: "Prata med mamma", fn: karinTalk }), done: () => flag("karin2") },
  { id: "regatta", ch: 2, obj: "Kör till Grannön och anmäl dig till regattan hos Majken", start: regattaCall, sea: () => sea("grannon"), at: () => npcAt("majken"),
    act: () => ({ x: NPC.majken.position.x, z: NPC.majken.position.z, r: 2.6, label: "Anmäl dig till regattan", fn: regattaSignup }), done: () => flag("regatta") },
  { id: "bolaget", ch: 2, obj: "Läs brevet från kommunen", start: () => setTimeout(kommun, 1200), done: () => flag("bolaget") },
  { id: "slut2", ch: 2, obj: "Kapitel 3 – Stormen kommer snart", start: () => chapterCard("Kapitel 2 – Hantverket", "Klart") },
];
const CH = { 1: "Kapitel 1 · Arvet", 2: "Kapitel 2 · Hantverket" };
const sea = id => { const d = DOCKS[id]; return { x: d.bx, z: d.bz, r: 10, ring: true, label: d.name }; };

// ---------- Tillstånd ----------
const S = () => ST.story;
const flag = k => !!(S() && S().flags[k]);
const setFlag = k => { S().flags[k] = 1; save(); };
function npcAt(id) { if (!NPC[id] || !NPC[id].visible) return null; const p = NPC[id].position; return new THREE.Vector3(p.x, p.y + 2.6, p.z); }
function addDiary(txt) { const L = timeOf(); S().diary.unshift({ d: L ? L.day : 0, t: txt }); }
function next() {
  const st = STEPS[S().step]; if (st && st.diary) addDiary(typeof st.diary === "function" ? st.diary() : st.diary);
  S().step++; S().started = false; save(); renderObj(); SFX("done");
}
export function storyStep() { return S() ? STEPS[S().step] : null; }
export function storyObjective() { const st = storyStep(); if (!st) return null; return { text: typeof st.obj === "function" ? st.obj() : st.obj, list: !!st.list, chapter: CH[st.ch || 1] }; }
export const storyDiary = () => (S() ? S().diary : []);

export function storyInit() {
  if (!ST.story) {
    ST.story = { step: 0, flags: {}, diary: [], started: false };
    // äldre sparning: hoppa över intro och steg som redan är gjorda
    if (ST.job > 0 || ST.picked > 0) { ST.story.step = 1; while (ST.story.step < STEPS.length && STEPS[ST.story.step].done && STEPS[ST.story.step].done() && !STEPS[ST.story.step].start) ST.story.step++; }
  }
  ST.story.started = false; // en avbruten händelse (samtal, brev) spelas upp igen efter omladdning
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
  setGuide(st.sea ? st.sea() : null);
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

// ================= Kapitel 2 =================
const PAGE1 = `12 juni 1994

Började på ritningen i dag. En båt som klarar Ytterskären i full storm – lång, bred, självlänsande. Ingen härute har en sådan.

Karin tittade på papperet och gick ut utan ett ord. Hon tror att jag bygger åt mig själv.

Jag bygger åt dem som inte har någon.`;
const PAGE2 = `13 oktober 1994

Stormvarning för Skagerack. Radion har sprakat hela kvällen.

Om det blir som de säger tar sig ingen fiskare härute in i natt. Sjöstjärnan är inte byggd för sådant här väder.

Men hon är det enda som finns.`;
const PAGE3 = `2 september 1994

Wahl var här igen och ville köpa marken. Jag sa nej, för tredje gången. Han svor och sa att havet tar varvet förr eller senare.

Kanske det. Men inte medan jag lever.`;
const KOMMUN = `SAMRÅDSHANDLING
Ändring av detaljplan för Varvsön 1:7 och 1:12

Västkust Marina Invest AB har förvärvat fastigheten Varvsön 1:12 (f.d. Bengtssons) och begärt att detaljplanen ändras.

Förslaget innebär att markanvändningen ändras från ”Varvsverksamhet” till ”Bostäder och fritidsbåtshamn”. Ändringen omfattar även grannfastigheten Varvsön 1:7 (Lindvarvet).

Synpunkter lämnas skriftligen till kommunen.

Kvarnviks kommun
Samhällsbyggnadsförvaltningen`;

function openC2() {
  chapterCard("Kapitel 1 – Arvet", "Klart");
  setTimeout(() => {
    const L = timeOf(); if (L && L.day < 72) setDay(72, 8 * 60);
    chapterCard("Kapitel 2 – Hantverket", "Ett år senare");
    setTimeout(() => dialog("Sven", [
      "Ett år. Kan du tänka dig? Folk har börjat komma hit med sina båtar igen.",
      "Men nu när Majken har fått min motorbåt står du här utan båt. En båtbyggare utan båt – det är som en bagare utan bröd.",
      "Edvin sa alltid att man inte är båtbyggare förrän man byggt sin första egen. Bockarna vid slipen står tomma.",
      "Börja med kölen. Virke kan du plocka eller beställa i telefonen.",
    ], () => { setFlag("c2"); addDiary("Ett år på ön. Sven tycker att det är dags att jag bygger en egen båt. Jag tror han har rätt."); }), 5200);
  }, 5400);
}
function leoTalk() {
  choice("Leo", [
    "Hej! Är det du som äger varvet? Jag heter Leo. Leo Nyström. Majken är min moster.",
    "Jag har sett dig bygga från färjan. Jag vill lära mig! Jag kan bära, spika, sopa – allt.",
    "Jag… tappar saker ibland. Men jag är stark! Och billig: 120 kronor om dagen.",
  ], "Anställ Leo", "Hellre en erfaren snickare", () => {
    hire("leo"); dialog("Leo", ["Ja!! Du kommer inte ångra dig. Typ.", "Jag börjar direkt – jag samlar virke och skrot åt dig varje dag."],
      () => addDiary("Anställde Leo, 19 år. Han tappade en hammare i sjön inom en timme. Men han skrattar hela tiden."));
  }, () => {
    dialog("Leo", ["Okej… jag fattar. Moster säger att Åke Persson letar jobb. Han är typ hundra år, men han kan allt."], () => fade(() => {
      hire("ake"); dialog("Åke", ["Åke Persson. Snickrat i fyrtio år, varav tio med din morfar.", "280 kronor om dagen. Då får du kvalitet – dubbelt så mycket virke och skrot som en lärling."],
        () => addDiary("Anställde Åke Persson. Han var lärling hos morfar en gång. Han säger inte mycket, men allt han gör blir rakt."));
    }));
  });
}
function page1() {
  const s = staff();
  dialog(s.name, [s.name === "Leo" ? "Chefen! Det låg ett gammalt papper bakom virkesstapeln. Det står 1994 på det." : "Det här låg bakom virkesstapeln. Jag känner igen handstilen. Edvins."],
    () => letter("En sida ur Edvins dagbok", PAGE1, () => { setFlag("sida1"); addDiary("En sida ur morfars dagbok: han ritade en båt som skulle klara Ytterskären i storm. ”Jag bygger åt dem som inte har någon.”"); }));
}
function launched() {
  setTimeout(() => dialog("Sven", [`${boatName()}! Fint namn.`, "Hon flyter. Och hon läcker inte ens. Edvin hade nickat – mer än så fick man aldrig av honom.", "Ta en provtur. Kör över till Majken på Grannön och visa upp henne."],
    () => { setFlag("sjosatt"); addDiary(`Sjösatte min första egna båt: ${boatName()}.`); }), 900);
}
function ingridCall() {
  const sven = () => setTimeout(() => { SFX("done"); dialog("Sven · 📞", ["Fyr-Ingrid ringde. Hon har hört att Edvins barnbarn har egen båt nu.", "Hon vill träffa dig. Åk ut till Fyrskäret – men bara när det är lugnt väder. Inte i blåst."], null); }, 1500);
  if (C2().dock === "grannon") dialog("Majken", ["Men se! Edvins barnbarn i egen båt. Han hade varit så stolt.", "Och den är byggd här på öarna. Det har inte hänt på trettio år."], sven); else sven();
}
function ingridTalk() {
  dialog("Ingrid", [
    "Så du är Edvins barnbarn. Du lägger till som han – för fort och för nära.",
    "Jag har vaktat den här fyren i fyrtio år. Natten mot den fjortonde oktober 1994 satt jag uppe, som alltid när det blåser.",
    "Kvart i två sprakade radion. Ett nödanrop på kanal sexton, svagt och sönderhackat. Jag uppfattade aldrig båtens namn.",
    "Tio minuter senare såg jag Sjöstjärnans lanternor gå rakt ut mot Ytterskären. I tio meters sjö.",
    "Jag berättade det för polisen. De skrev ner det. Sen glömde alla bort det – utom jag.",
    "Edvin lämnade det här hos mig veckan innan. ”Om något händer”, sa han. Jag har aldrig vågat läsa det. Nu är det ditt.",
  ], () => letter("En sida ur Edvins dagbok", PAGE2, () => { setFlag("ingrid"); addDiary("Fyr-Ingrid hörde ett nödanrop natten morfar försvann. Någon annan var ute i stormen. Han körde ut för att hjälpa någon?"); }));
}
function karinArrive() {
  NPC.karin.visible = true; SFX("done"); pop("📱 Mamma: Jag kommer ut med eftermiddagsbåten. Möt mig på bryggan.", 4200);
}
function karinTalk() {
  choice("Karin", [
    "Så det är här du gömmer dig.",
    "Du ser ut precis som han när du står där med verktygen. Det är inte menat som en komplimang.",
    "Vet du hur det var att växa upp här? Pappa var alltid ute på sjön eller i boden. Mamma satt ensam vid fönstret.",
    "Och en natt körde han bara ut. Utan ett ord. Han valde havet framför oss – igen.",
  ], "”Det här är mitt nu.”", "”Jag vill förstå varför.”", () => {
    setFlag("karinHard");
    dialog("Karin", ["Då är du lika envis som han.", "…Jag åker med kvällsbåten. Hälsa Sven."], karinLeave);
  }, () => {
    setFlag("karinSoft");
    dialog("Karin", ["Varför…", "Det har jag frågat mig själv i trettio år.", "Om du hittar svaret – berätta det för mig. Jag tror inte att jag orkar leta själv."], karinLeave);
  });
}
function karinLeave() {
  fade(() => { NPC.karin.visible = false; setFlag("karin2");
    addDiary(flag("karinSoft") ? "Mamma var här. Vi grälade – och sen grälade vi inte. Hon vill också veta varför." : "Mamma var här. Vi grälade. Hon åkte med kvällsbåten utan att säga hejdå ordentligt."); });
}
function regattaCall() {
  setTimeout(() => { SFX("done"); dialog("Majken · 📞", ["Det är regatta på Grannön i dag! Alla som har en båt ställer upp – det är tradition.", "Kom hit och anmäl dig. Första pris är 2 000 kronor och en hel ös beröm."], null); }, 1500);
}
function regattaSignup() {
  choice("Majken", [
    `Kör du ${boatName()}, eller vill du låna min? Min är snabbare.`,
    "Men folk lägger märke till vem som har byggt båten man vinner med.",
  ], `Kör ${boatName()}`, "Låna Majkens", () => raceStart(false, raceEnd), () => raceStart(true, raceEnd));
}
function raceEnd(place, R) {
  const prize = [2000, 1000, 500, 200][place - 1], rep = [15, 8, 4, 2][place - 1] * (R.borrow ? 1 : 2);
  ST.kr += prize; ST.rykte = (ST.rykte || 0) + rep; save();
  const head = place === 1 ? (R.borrow ? "Först i mål! Även om det var min båt, så." : `Först i mål – i en båt du byggt själv! Det har ön inte sett sedan Edvin.`)
    : place === 4 ? "Sist, men du kom i mål. Det är mer än Fiskar-Olle klarade 2019." : `Du kom ${place}:a! Inte illa för första gången.`;
  dialog("Majken", [head, `Här är ${prize} kronor. Och folk pratar om dig nu.`, "Förresten – din morfar lämnade en gång en bok här för att binda om. Den här sidan låg kvar. Jag tycker att du ska ha den."],
    () => letter("En sida ur Edvins dagbok", PAGE3, () => { setFlag("regatta"); addDiary(`Regattan på Grannön: plats ${place}${R.borrow ? " i Majkens båt" : " med " + boatName()}. Och ännu en sida från morfar – om en man som hette Wahl.`); }));
}
function kommun() {
  letter("Brev från Kvarnviks kommun", KOMMUN, () => setTimeout(() => { SFX("done"); dialog("Sven · 📞", [
    "Har du också fått brevet från kommunen? Västkust Marina har köpt Bengtssons mark. Precis bakom ditt varv.",
    "Nu vill de rita om planen så att varvet blir bostäder och en marina för plastbåtar.",
    "Rasmus Wahl heter vd:n. Wahl… Det namnet har jag inte hört på länge.",
    "Han har tid och pengar. Men han har inte ön på sin sida. Fortsätt som du gör.",
  ], () => { setFlag("bolaget"); addDiary("Västkust Marina har köpt grannmarken och kommunen vill ändra detaljplanen. Vd:n heter Rasmus Wahl. Samma namn som i morfars dagbok."); }); }, 800));
}
