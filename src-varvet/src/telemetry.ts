// Telemetri: felrapporter och statistik över bildfrekvens skickas till Supabase-tabellen
// varvet_telemetry (se docs/telemetry.sql). Misslyckas tyst om tabellen saknas eller nätet är nere.
interface SbCfg { url: string; key: string }
declare global { interface Window { SBCFG?: SbCfg } }

type Event = { kind: "session" | "perf" | "error"; data: Record<string, unknown> };
const queue: Event[] = [];
const session = Math.random().toString(36).slice(2, 10);
let samples: number[] = [];
let lastFlush = performance.now();
let gpu = "";

function cfg(): SbCfg | null { const c = window.SBCFG; return c && c.url && c.key ? c : null; }
function accessToken(): string | null {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i) || "";
      if (k.startsWith("sb-") && k.endsWith("-auth-token")) {
        const v = JSON.parse(localStorage.getItem(k) || "null");
        if (v && v.access_token) return v.access_token as string;
      }
    }
  } catch { /* privat läge eller blockerad lagring */ }
  return null;
}
function push(kind: Event["kind"], data: Record<string, unknown>): void { queue.push({ kind, data }); if (queue.length > 50) queue.shift(); }

export function telemetryInit(gl: WebGLRenderingContext | WebGL2RenderingContext | null, backend: string): void {
  try {
    const ext = gl && gl.getExtension("WEBGL_debug_renderer_info");
    gpu = ext && gl ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
  } catch { gpu = ""; }
  push("session", { ua: navigator.userAgent, w: screen.width, h: screen.height, dpr: devicePixelRatio, gpu, backend, cores: navigator.hardwareConcurrency || 0 });
  window.addEventListener("error", e => push("error", { msg: String(e.message), src: `${e.filename}:${e.lineno}:${e.colno}`, stack: e.error && e.error.stack ? String(e.error.stack).slice(0, 1500) : "" }));
  window.addEventListener("unhandledrejection", e => push("error", { msg: "promise: " + String(e.reason && e.reason.message || e.reason).slice(0, 500) }));
  window.addEventListener("pagehide", () => flush(true));
  setInterval(() => flush(false), 60_000);
}
/** Anropas varje ritad bildruta. q = aktuell kvalitetsinfo. */
export function telemetryFrame(frameDt: number, q: Record<string, unknown>): void {
  if (frameDt > 0 && frameDt < 1) samples.push(frameDt);
  if (performance.now() - lastFlush > 60_000 && samples.length > 30) {
    const s = samples.slice().sort((a, b) => a - b);
    const avg = s.reduce((a, b) => a + b, 0) / s.length;
    const p99 = s[Math.min(s.length - 1, Math.floor(s.length * 0.99))];
    push("perf", { fps: +(1 / avg).toFixed(1), low1: +(1 / p99).toFixed(1), frames: s.length, ...q });
    samples = []; lastFlush = performance.now();
  }
}
export function flush(beacon: boolean): void {
  const c = cfg(); if (!c || !queue.length) return;
  const rows = queue.splice(0).map(e => ({ session, kind: e.kind, data: e.data }));
  const headers: Record<string, string> = { "Content-Type": "application/json", apikey: c.key, Authorization: "Bearer " + (accessToken() || c.key), Prefer: "return=minimal" };
  try { void fetch(c.url + "/rest/v1/varvet_telemetry", { method: "POST", headers, body: JSON.stringify(rows), keepalive: beacon }).catch(() => {}); } catch { /* ignorera */ }
}
