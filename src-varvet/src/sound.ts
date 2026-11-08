// @ts-nocheck
// Ljudbild, helt syntetiserad: vågor som följer avståndet till stranden, vind efter vädret, regn,
// måsar på dagen, mistlur i dimma, steg som låter olika på trä, grus och gräs, och knarr i bryggan.
import { player } from "./player";
import { sampleGrid, YARD } from "./terrain";
import { onJetty } from "./update";
import { BOATM } from "./jobs";
import { timeOf, weather } from "./life";
import { SET } from "./settings";

let ac = null, master = null, noise = null, waves = null, wind = null, rain = null, windF = null;
let T = 0, gullT = 6, hornT = 4, lastStep = 0, shoreK = 0;
export const SOUND = { on: true };

function noiseBuf(sec = 4) {
  const n = ac.sampleRate * sec, b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0);
  let l = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; l = (l + .02 * w) / 1.02; d[i] = (l * 3.5 + w * .25); } // brun-ish
  return b;
}
function loop(filterType, freq, q = .7) {
  const src = ac.createBufferSource(); src.buffer = noise; src.loop = true; src.loopStart = Math.random(); src.start(0, Math.random() * 3);
  const f = ac.createBiquadFilter(); f.type = filterType; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(); g.gain.value = 0; src.connect(f); f.connect(g); g.connect(master); return { g, f };
}
/** Startas vid första tryckningen (webbläsare kräver en användarhandling). */
export function soundInit() {
  if (ac) { if (ac.state === "suspended") ac.resume(); return; }
  try {
    ac = new (window.AudioContext || window.webkitAudioContext)(); master = ac.createGain(); SOUND.on = !!SET.snd; master.gain.value = SOUND.on ? .9 : 0; master.connect(ac.destination);
    noise = noiseBuf();
    waves = loop("lowpass", 520); wind = loop("bandpass", 650, .6); windF = wind.f; rain = loop("highpass", 2600);
    document.addEventListener("visibilitychange", () => { if (!ac) return; document.hidden ? ac.suspend() : ac.resume(); });
  } catch (e) { ac = null; }
}
const set = (g, v, tc = .4) => g.gain.setTargetAtTime(SOUND.on ? v : 0, ac.currentTime, tc);
export function soundApply() { SOUND.on = !!SET.snd; if (master && ac) master.gain.setTargetAtTime(SOUND.on ? .9 : 0, ac.currentTime, .1); }

// ---------- korta ljud ----------
function burst({ type = "bandpass", freq = 1000, q = 1, dur = .08, gain = .08, pan = 0, at = 0 }) {
  const t0 = ac.currentTime + at, src = ac.createBufferSource(); src.buffer = noise;
  const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(); g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + .006); g.gain.exponentialRampToValueAtTime(.0005, t0 + dur);
  const p = ac.createStereoPanner ? ac.createStereoPanner() : null; src.connect(f); f.connect(g);
  if (p) { p.pan.value = pan; g.connect(p); p.connect(master); } else g.connect(master);
  src.start(t0, Math.random() * 3); src.stop(t0 + dur + .05);
}
function tone({ type = "sine", f0 = 200, f1 = 120, dur = .1, gain = .06, at = 0, lp = 0, pan = 0 }) {
  const t0 = ac.currentTime + at, o = ac.createOscillator(), g = ac.createGain(); o.type = type;
  o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
  g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + Math.min(.03, dur * .2)); g.gain.exponentialRampToValueAtTime(.0005, t0 + dur);
  let n = o; if (lp) { const f = ac.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = lp; o.connect(f); n = f; }
  const p = ac.createStereoPanner ? ac.createStereoPanner() : null; n.connect(g);
  if (p) { p.pan.value = pan; g.connect(p); p.connect(master); } else g.connect(master);
  o.start(t0); o.stop(t0 + dur + .05);
}
function step(surface) {
  const v = .85 + Math.random() * .3;
  if (surface === "wood") { tone({ f0: 150 * v, f1: 90, dur: .09, gain: .07 }); burst({ freq: 900 * v, q: 1.4, dur: .06, gain: .05 }); if (Math.random() < .06) creak(); }
  else if (surface === "gravel") { for (let i = 0; i < 3; i++) burst({ type: "highpass", freq: 2200 * v, q: .5, dur: .05, gain: .035, at: i * .025 }); }
  else if (surface === "rock") { burst({ freq: 1600 * v, q: 2, dur: .04, gain: .04 }); }
  else burst({ freq: 1100 * v, q: .5, dur: .11, gain: .03 });
}
function creak() { const o = ac.createOscillator(), f = ac.createBiquadFilter(), g = ac.createGain(), t0 = ac.currentTime; o.type = "sawtooth";
  o.frequency.setValueAtTime(170, t0); o.frequency.linearRampToValueAtTime(240, t0 + .2); o.frequency.linearRampToValueAtTime(190, t0 + .38);
  f.type = "bandpass"; f.frequency.value = 900; f.Q.value = 6; g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(.03, t0 + .05); g.gain.exponentialRampToValueAtTime(.0005, t0 + .42);
  o.connect(f); f.connect(g); g.connect(master); o.start(t0); o.stop(t0 + .45); }
function gull(dist) {
  const pan = Math.random() * 1.6 - .8, n = 2 + Math.floor(Math.random() * 3), base = 1350 + Math.random() * 400, gain = .045 * dist;
  for (let i = 0; i < n; i++) { const at = i * (.22 + Math.random() * .08); tone({ type: "triangle", f0: base * 1.5, f1: base, dur: .2, gain, at, lp: 3200, pan }); tone({ type: "sine", f0: base * 3, f1: base * 2, dur: .16, gain: gain * .25, at, pan }); }
}
function foghorn() { for (const f of [92, 138]) tone({ type: "sawtooth", f0: f, f1: f * .99, dur: 2.6, gain: .035, lp: 380, pan: -.3 }); }
/** Ett kort plask, t.ex. när båten lägger till eller något tappas i sjön. */
export function splash(gain = .08) { if (!ac) return; burst({ type: "lowpass", freq: 900, dur: .5, gain }); burst({ type: "bandpass", freq: 2400, q: .8, dur: .25, gain: gain * .5, at: .03 }); }

// ---------- per bildruta ----------
function surfaceAt(x, z) {
  if (onJetty(x, z)) return "wood";
  if (Math.hypot(x - YARD.x, z - YARD.z) < YARD.r) return "gravel";
  return sampleGrid(x, z) > 6 ? "rock" : "grass";
}
export function soundTick(dt, running) {
  if (!ac || !running) return; T += dt;
  const L = timeOf(), W = weather(); if (!L || !W) return;
  const p = player.pos, boat = BOATM.on;
  // hur mycket vatten som finns runt omkring (glidande, räknas lite i taget)
  let wet = 0; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + T; if (sampleGrid(p.x + Math.cos(a) * 11, p.z + Math.sin(a) * 11) < -.2) wet++; }
  shoreK += ((boat ? .75 : wet / 8) - shoreK) * Math.min(1, dt * 1.5);
  const swell = .55 + .45 * Math.sin(T * .9) * Math.sin(T * .37 + 1);
  set(waves.g, (.015 + .11 * shoreK) * swell * (.8 + W.wind * .25), .3);
  waves.f.frequency.setTargetAtTime(380 + 300 * swell + (boat ? 200 : 0), ac.currentTime, .3);
  set(wind.g, Math.max(0, .008 + .03 * (W.wind - .7) + Math.max(0, p.y - 4) * .002), .8);
  windF.frequency.setTargetAtTime(520 + 260 * Math.sin(T * .23) + 140 * Math.sin(T * .71), ac.currentTime, .5);
  set(rain.g, W.rain ? .03 * W.rain : 0, 1);
  const day = L.min > 6 * 60 + 30 && L.min < 20 * 60 + 30;
  gullT -= dt; if (gullT <= 0) { gullT = 7 + Math.random() * 14; if (day && !W.rain && W.wind < 2.5 && shoreK > .15 && SOUND.on) gull(.4 + Math.random() * .6); }
  hornT -= dt; if (hornT <= 0) { hornT = 26; if (W.name === "Dimma" && SOUND.on) foghorn(); }
  // steg: ett ljud per halv gångcykel
  if (!boat && player.speed > .4) { const k = Math.floor(player.walk / Math.PI); if (k !== lastStep) { lastStep = k; if (SOUND.on) step(surfaceAt(p.x, p.z)); } }
}
