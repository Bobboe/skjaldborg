// @ts-nocheck
// Röster: spelar en inläst replik när den visas i dialogen. Nyckeln räknas fram på samma sätt som i
// tools/voices-extract.mjs (talare + hash av texten med {namn}/{båt}). Saknas filen visas bara texten.
import { ST } from "./build";
import { SET } from "./settings";

const BASE = import.meta.env.BASE_URL + "voice/";
let have = null, audio = null;
fetch(BASE + "index.json").then(r => (r.ok ? r.json() : [])).then(a => { have = new Set(a); }).catch(() => { have = new Set(); });

const slug = s => s.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g, "a").replace(/ö/g, "o");
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
function norm(t) {
  let s = t; const n = (ST.pname || "").trim();
  if (n) s = s.split(n).join("{namn}"); else for (const f of ["grabben", "jäntan"]) s = s.split(f).join("{namn}");
  const b = ST.story && ST.story.c2 && ST.story.c2.name; if (b) s = s.split(b).join("{båt}");
  return s;
}
export const voiceKey = (who, text) => slug(who) + "_" + hash(norm(text));
/** true om repliken har en inläst röst (används av testerna för att hitta luckor). */
export const voiceHas = (who, text) => !!have && have.has(voiceKey(who, text));
export function voiceStop() { if (audio) { try { audio.pause(); } catch (e) {} audio = null; } }
export function voicePlay(who, text) {
  voiceStop(); const k = voiceKey(who, text);
  if (window.__vlog) window.__vlog.push({ who, text, k, has: !!have && have.has(k) });
  if (!SET.voice || !have) return; if (!have.has(k)) return;
  audio = new Audio(BASE + k + ".mp3"); audio.volume = .95; audio.play().catch(() => {});
}
