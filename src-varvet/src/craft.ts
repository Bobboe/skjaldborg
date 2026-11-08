// @ts-nocheck
// Minispel för båtbygget: såga kölen, spika spanten, lägga bordgångar och måla skrovet.
// Alla ritar på samma canvas som jobbens minispel (#gcv) och avslutas med endGame(true).
import { GAMEON, gcv, gPt, endGame } from "./jobs";
import { SFX } from "./build";
import { $ } from "./util";

const WOOD = "#c49a66", WOOD_D = "#9c7448", BG = "#1b2026";
// partiklar (spån, damm) och vibration i mobilen
let parts = [];
const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };
function spawn(x, y, n, col, sp = 4, up = 3, size = 3) { for (let i = 0; i < n; i++) parts.push({ x, y, vx: (Math.random() - .5) * sp, vy: -Math.random() * up, l: 1, col, s: size * (.6 + Math.random() * .8) }); if (parts.length > 400) parts.splice(0, parts.length - 400); }
function drawParts(x, k) { for (const p of parts) { p.x += p.vx * k; p.y += p.vy * k; p.vy += .25; p.vx *= .98; p.l -= .022; x.globalAlpha = Math.max(0, p.l); x.fillStyle = p.col; x.fillRect(p.x, p.y, p.s * k, p.s * k); } x.globalAlpha = 1; parts = parts.filter(p => p.l > 0); }
const bar = f => { $("gBar").style.width = Math.max(0, Math.min(100, f * 100)) + "%"; };
const finish = q => { GAMEON.q = q; buzz([20, 40, 30]); const c = gcv(); c.onpointerdown = c.onpointermove = c.onpointerup = null; bar(1); SFX("done"); setTimeout(() => endGame(true), 600); };
function setup(title, help) { parts = []; const c = gcv(), k = GAMEON.dpr; $("gTitle").textContent = title; $("gHelp").textContent = help; bar(0); return { c, x: c.getContext("2d"), W: c.width, H: c.height, k }; }
function grain(x, x0, y0, w, h, k, seed = 1) { x.strokeStyle = "rgba(90,60,30,.25)"; x.lineWidth = 1.5 * k; for (let i = 0; i < 9; i++) { const yy = y0 + h * (i + .5) / 9; x.beginPath(); x.moveTo(x0, yy); for (let s = 0; s <= 12; s++) x.lineTo(x0 + w * s / 12, yy + Math.sin(s * 1.7 + i * seed) * 2.5 * k); x.stroke(); } }

// ---------- 1. Såga kölen: följ den streckade linjen ----------
export function sawGame() {
  const { c, x, W, H, k } = setup("Såga kölen", "Dra sågen längs den streckade linjen, från vänster till höger");
  const x0 = W * .08, x1 = W * .92, by = H * .5, line = t => by + Math.sin(t * Math.PI) * H * .09 - H * .03 * t;
  const S = { prog: 0, on: false, good: 0, n: 0, bad: 0, saw: { x: x0, y: line(0) } };
  c.onpointerdown = e => { c.setPointerCapture(e.pointerId); S.on = true; };
  c.onpointerup = c.onpointercancel = () => { S.on = false; };
  c.onpointermove = e => {
    if (!S.on) return; const p = gPt(e); const t = (p.x - x0) / (x1 - x0); if (t < 0 || t > 1.02) return;
    const off = Math.abs(p.y - line(Math.min(1, t)));
    S.saw = { x: p.x, y: p.y };
    if (off > 34 * k) { if (!S.bad) buzz(40); S.bad = 1; return; }
    S.bad = 0; S.n++; if (off < 14 * k) S.good++;
    if (t > S.prog && t < S.prog + .08) { S.prog = Math.min(1, t); spawn(p.x, line(S.prog) + 4 * k, 3, Math.random() < .5 ? "#e2c08f" : "#c49a66", 5, 4); if (Math.random() < .3) { SFX("tick"); buzz(6); } bar(S.prog); if (S.prog > .985) finish(S.good / Math.max(1, S.n)); }
  };
  GAMEON.draw = () => {
    x.fillStyle = BG; x.fillRect(0, 0, W, H);
    x.fillStyle = "#3a3f47"; x.fillRect(0, H * .78, W, H * .22);
    x.fillStyle = WOOD; x.fillRect(x0 - 20 * k, by - H * .2, x1 - x0 + 40 * k, H * .38); grain(x, x0 - 20 * k, by - H * .2, x1 - x0 + 40 * k, H * .38, k);
    // sågat spår
    x.strokeStyle = "#5a3d22"; x.lineWidth = 5 * k; x.beginPath(); for (let i = 0; i <= 60; i++) { const t = i / 60 * S.prog; const px = x0 + (x1 - x0) * t; i ? x.lineTo(px, line(t)) : x.moveTo(px, line(t)); } x.stroke();
    x.setLineDash([10 * k, 8 * k]); x.strokeStyle = "rgba(30,30,30,.7)"; x.lineWidth = 2.5 * k; x.beginPath(); for (let i = 0; i <= 60; i++) { const t = S.prog + (1 - S.prog) * i / 60; const px = x0 + (x1 - x0) * t; i ? x.lineTo(px, line(t)) : x.moveTo(px, line(t)); } x.stroke(); x.setLineDash([]);
    // såg
    const sx = Math.max(S.saw.x, x0 + (x1 - x0) * S.prog), sy = S.on ? S.saw.y : line(S.prog);
    x.save(); x.translate(sx, sy); x.fillStyle = S.bad ? "#d9534f" : "#c0c6cc"; x.beginPath(); x.moveTo(-70 * k, -6 * k); x.lineTo(10 * k, -14 * k); x.lineTo(10 * k, 8 * k); x.lineTo(-70 * k, 10 * k); x.fill();
    x.fillStyle = "#8a4a2a"; x.fillRect(10 * k, -20 * k, 34 * k, 30 * k); x.restore(); drawParts(x, k);
    if (S.bad) { x.fillStyle = "#ffb4a8"; x.font = `700 ${15 * k}px system-ui`; x.textAlign = "center"; x.fillText("Sågen kärvar – tillbaka till linjen!", W / 2, H * .9); }
  };
}

// ---------- 2. Spika spanten: slå när visaren är i det gröna ----------
export function nailGame() {
  const { c, x, W, H, k } = setup("Spika spanten", "Tryck när visaren är i det gröna fältet. Två bra slag per spik");
  const N = 6, nails = Array.from({ length: N }, (_, i) => ({ x: W * (.16 + i * .136), d: 0 }));
  const S = { i: 0, t: 0, hits: 0, miss: 0, shake: 0, ham: 0 };
  const zone = () => .5 + Math.sin(S.i * 1.9) * .18; // gröna fältets mitt flyttar sig mellan spikarna
  c.onpointerdown = () => {
    const pos = (Math.sin(S.t) + 1) / 2, ok = Math.abs(pos - zone()) < .11; S.ham = 1;
    if (ok) { const n = nails[S.i]; n.d++; S.hits++; SFX("place"); buzz(18); spawn(n.x, H * .42, 7, "#d1a874", 7, 5); spawn(n.x, H * .42 - 10 * k, 3, "#fff3c4", 9, 6, 2); if (n.d >= 2) { S.i++; bar(S.i / N); if (S.i >= N) return finish(S.hits / (S.hits + S.miss)); } }
    else { S.miss++; S.shake = 1; SFX("no"); buzz([30, 30, 30]); }
  };
  GAMEON.draw = () => {
    S.t += .055 + S.i * .006; S.shake *= .85; S.ham *= .8;
    x.fillStyle = BG; x.fillRect(0, 0, W, H);
    // spant (böjd regel) och bordgång
    x.save(); x.translate((Math.random() - .5) * S.shake * 8 * k, 0);
    x.fillStyle = WOOD; x.fillRect(W * .08, H * .42, W * .84, H * .16); grain(x, W * .08, H * .42, W * .84, H * .16, k, 3);
    x.fillStyle = WOOD_D; x.fillRect(W * .08, H * .58, W * .84, H * .05);
    nails.forEach((n, i) => { const top = H * .42 - (2 - n.d) * 16 * k; x.fillStyle = "#9aa1a8"; x.fillRect(n.x - 3 * k, top, 6 * k, (2 - n.d) * 16 * k + 4 * k); x.fillStyle = i === S.i ? "#ffc21a" : "#c0c6cc"; x.fillRect(n.x - 9 * k, top - 4 * k, 18 * k, 5 * k); });
    // hammare
    if (S.i < N) { const n = nails[S.i]; x.save(); x.translate(n.x + 30 * k, H * .3 - (1 - S.ham) * 30 * k); x.rotate(-.5 + S.ham * .5); x.fillStyle = "#6b4a2b"; x.fillRect(0, -6 * k, 80 * k, 12 * k); x.fillStyle = "#3a3f47"; x.fillRect(-26 * k, -18 * k, 30 * k, 36 * k); x.restore(); }
    x.restore(); drawParts(x, k);
    // mätare
    const mx = W * .2, mw = W * .6, my = H * .8, z = zone();
    x.fillStyle = "#2a2f36"; x.fillRect(mx, my, mw, 18 * k); x.fillStyle = "#3fae5a"; x.fillRect(mx + mw * (z - .11), my, mw * .22, 18 * k);
    const pos = (Math.sin(S.t) + 1) / 2; x.fillStyle = "#fff"; x.fillRect(mx + mw * pos - 3 * k, my - 6 * k, 6 * k, 30 * k);
  };
}

// ---------- 3. Bordgångar: dra plankorna på plats nerifrån och upp ----------
export function plankGame() {
  const { c, x, W, H, k } = setup("Lägg bordgångarna", "Dra plankan till den markerade raden, nerifrån och upp");
  const N = 5, hx0 = W * .12, hx1 = W * .72, top = H * .12, rowH = H * .1;
  const row = i => ({ y: top + (N - 1 - i) * rowH, inset: (N - 1 - i) * 0 + (i === 0 ? W * .05 : 0) });
  const S = { done: 0, drag: null, p: { x: W * .86, y: H * .78 }, tries: 0 };
  const hullPath = () => { const p = new Path2D(); p.moveTo(hx0, top); p.lineTo(hx1 + W * .06, top - rowH * .3); p.quadraticCurveTo(hx1 + W * .05, top + rowH * 3.8, hx1 - W * .06, top + rowH * N); p.lineTo(hx0 + W * .06, top + rowH * N); p.quadraticCurveTo(hx0 - W * .02, top + rowH * 2.5, hx0, top); return p; };
  const HP = hullPath();
  c.onpointerdown = e => { const p = gPt(e); if (Math.hypot(p.x - S.p.x, p.y - S.p.y) < 120 * k) { S.drag = { dx: S.p.x - p.x, dy: S.p.y - p.y }; c.setPointerCapture(e.pointerId); } };
  c.onpointermove = e => { if (!S.drag) return; const p = gPt(e); S.p = { x: p.x + S.drag.dx, y: p.y + S.drag.dy }; };
  c.onpointerup = c.onpointercancel = () => {
    if (!S.drag) return; S.drag = null; S.tries++;
    const r = row(S.done), cy = r.y + rowH / 2, cx = (hx0 + hx1) / 2;
    if (Math.abs(S.p.y - cy) < rowH * .7 && Math.abs(S.p.x - cx) < W * .25) { S.done++; SFX("place"); buzz(25); for (let j = 0; j < 6; j++) spawn(hx0 + (hx1 - hx0) * j / 5, cy, 4, "#cdb38f", 6, 3); bar(S.done / N); S.p = { x: W * .86, y: H * .78 }; if (S.done >= N) finish(N / S.tries); }
    else { SFX("no"); buzz(40); S.p = { x: W * .86, y: H * .78 }; }
  };
  GAMEON.draw = () => {
    x.fillStyle = BG; x.fillRect(0, 0, W, H);
    // spantskelett
    x.save(); x.clip(HP); x.fillStyle = "#14181d"; x.fillRect(0, 0, W, H);
    for (let i = 0; i < 7; i++) { const sx = hx0 + (hx1 - hx0) * (i + .5) / 7; x.fillStyle = WOOD_D; x.fillRect(sx - 6 * k, 0, 12 * k, H); }
    for (let i = 0; i < S.done; i++) { const r = row(i); x.fillStyle = i % 2 ? WOOD : "#d1a874"; x.fillRect(0, r.y + 2 * k, W, rowH - 4 * k); grain(x, 0, r.y + 2 * k, W, rowH - 4 * k, k, i + 2); }
    if (S.done < N) { const r = row(S.done); x.strokeStyle = "#ffc21a"; x.lineWidth = 3 * k; x.setLineDash([10 * k, 6 * k]); x.strokeRect(-10, r.y + 3 * k, W + 20, rowH - 6 * k); x.setLineDash([]); }
    x.restore(); x.strokeStyle = "#e8e2d2"; x.lineWidth = 3 * k; x.stroke(HP);
    // kölen
    x.fillStyle = WOOD_D; x.fillRect(hx0 + W * .05, top + rowH * N, hx1 - hx0 - W * .05, 10 * k);
    // plankhögen
    if (S.done < N) { for (let i = 0; i < N - S.done - 1; i++) { x.fillStyle = WOOD_D; x.fillRect(W * .76, H * .88 - i * 8 * k, W * .2, 7 * k); }
      x.fillStyle = WOOD; x.fillRect(S.p.x - W * .12, S.p.y - rowH * .4, W * .24, rowH * .8); grain(x, S.p.x - W * .12, S.p.y - rowH * .4, W * .24, rowH * .8, k, 5); }
    drawParts(x, k);
  };
}

// ---------- 4. Måla skrovet: täck hela ytan med färg ----------
export function paintGame(color = "#f4f1ea") {
  const { c, x, W, H, k } = setup("Måla skrovet", "Dra penseln över skrovet tills det är helt målat");
  const cx = W / 2, cy = H * .45, hw = W * .4, hh = H * .26;
  const hull = new Path2D(); hull.moveTo(cx - hw, cy - hh * .5); hull.lineTo(cx + hw, cy - hh * .75); hull.quadraticCurveTo(cx + hw * 1.02, cy + hh * .3, cx + hw * .55, cy + hh * .85); hull.quadraticCurveTo(cx, cy + hh * 1.05, cx - hw * .8, cy + hh * .6); hull.quadraticCurveTo(cx - hw * 1.02, cy, cx - hw, cy - hh * .5); hull.closePath();
  const paint = document.createElement("canvas"); paint.width = W; paint.height = H; const pd = paint.getContext("2d");
  const mask = document.createElement("canvas"); mask.width = W; mask.height = H; const md = mask.getContext("2d"); md.fillStyle = "#fff"; md.fill(hull);
  const total = (() => { const d = md.getImageData(0, 0, W, H).data; let n = 0; for (let i = 3; i < d.length; i += 4 * 61) if (d[i] > 0) n++; return n; })();
  const S = { last: null, prog: 0, chk: 0 };
  const brush = p => { if (Math.random() < .12) spawn(p.x, p.y, 1, color, 1, -1, 4); pd.save(); pd.clip(hull); pd.strokeStyle = color; pd.lineCap = "round"; pd.lineWidth = 42 * k; pd.beginPath(); pd.moveTo((S.last || p).x, (S.last || p).y); pd.lineTo(p.x, p.y); pd.stroke(); pd.restore(); S.last = p; };
  c.onpointerdown = e => { c.setPointerCapture(e.pointerId); S.last = gPt(e); brush(S.last); };
  c.onpointermove = e => { if (S.last) brush(gPt(e)); };
  c.onpointerup = c.onpointercancel = () => { S.last = null; };
  GAMEON.draw = () => {
    x.fillStyle = "#cfe3ec"; x.fillRect(0, 0, W, H); x.fillStyle = "#b9a789"; x.fillRect(0, H * .82, W, H * .18);
    x.save(); x.clip(hull); x.fillStyle = WOOD; x.fillRect(0, 0, W, H); for (let i = 0; i < 6; i++) { x.fillStyle = i % 2 ? WOOD_D : WOOD; x.fillRect(0, cy - hh + i * hh * .36, W, 3 * k); } x.restore();
    x.drawImage(paint, 0, 0); drawParts(x, k); x.lineWidth = 3 * k; x.strokeStyle = "#5b5f66"; x.stroke(hull);
    if (++S.chk % 12 === 0) { const d = pd.getImageData(0, 0, W, H).data; let n = 0; for (let i = 3; i < d.length; i += 4 * 61) if (d[i] > 0) n++; S.prog = n / total; bar(S.prog / .93); if (S.prog >= .93) { S.chk = -1e9; finish(1); } }
  };
}
