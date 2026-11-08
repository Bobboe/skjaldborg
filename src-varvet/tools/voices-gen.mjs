// Läser in alla repliker med ElevenLabs. Kräver Node 18 eller nyare.
//
//   1. Fyll i röst-id för varje person i tools/voices-config.json ("id").
//   2. Kör från mappen där package.json ligger:
//        node tools/voices-gen.mjs --key DIN_API_NYCKEL --test     (2 repliker per person – lyssna först)
//        node tools/voices-gen.mjs --key DIN_API_NYCKEL            (allt som saknas)
//        node tools/voices-gen.mjs --key DIN_API_NYCKEL --only sven --redo   (gör om en person)
//   3. Zippa mappen voice-out och skicka den.
//
// Filer som redan finns hoppas över, så det går att avbryta och fortsätta.
import fs from "fs";

const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const has = k => process.argv.includes(k);
const KEY = arg("--key") || process.env.ELEVENLABS_API_KEY;
if (!KEY) { console.error("Ange din API-nyckel: node tools/voices-gen.mjs --key DIN_NYCKEL"); process.exit(1); }
const cfg = JSON.parse(fs.readFileSync("tools/voices-config.json", "utf8"));
let lines = JSON.parse(fs.readFileSync("tools/voices-lines.json", "utf8"));
const only = arg("--only"); if (only) lines = lines.filter(l => l.spk === only);
if (has("--test")) { const n = {}; lines = lines.filter(l => (n[l.spk] = (n[l.spk] || 0) + 1) <= 2); }
const OUT = "voice-out"; fs.mkdirSync(OUT, { recursive: true });

const missing = [...new Set(lines.filter(l => !cfg.voices[l.spk]?.id).map(l => l.spk))];
if (missing.length) console.warn("Saknar röst-id för:", missing.join(", "), "– de hoppas över.");
const todo = lines.filter(l => cfg.voices[l.spk]?.id && (has("--redo") || !fs.existsSync(`${OUT}/${l.key}.mp3`)));
console.log(`${todo.length} repliker att läsa in (${todo.reduce((a, l) => a + l.read.length, 0)} tecken).`);

const sleep = ms => new Promise(r => setTimeout(r, ms));
let done = 0, fail = 0;
for (const l of todo) {
  const v = cfg.voices[l.spk];
  for (let tryN = 0; tryN < 4; tryN++) {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${v.id}?output_format=${cfg.format || "mp3_44100_64"}`, {
      method: "POST",
      headers: { "xi-api-key": KEY, "Content-Type": "application/json", Accept: "audio/mpeg" },
      body: JSON.stringify({ text: l.read, model_id: cfg.model || "eleven_multilingual_v2",
        voice_settings: { stability: v.stability ?? .5, similarity_boost: v.similarity ?? .8, style: v.style ?? .2, use_speaker_boost: true, speed: v.speed ?? 1 } }),
    });
    if (res.ok) { fs.writeFileSync(`${OUT}/${l.key}.mp3`, Buffer.from(await res.arrayBuffer())); done++; process.stdout.write(`\r${done}/${todo.length}  ${l.spk}: ${l.read.slice(0, 50).replace(/\n/g, " ")}…            `); break; }
    const msg = await res.text();
    if (res.status === 401) { console.error("\nAPI-nyckeln godtas inte:", msg); process.exit(1); }
    if (res.status === 429 || res.status >= 500) { await sleep(3000 * (tryN + 1)); continue; }
    console.error(`\nFel för ${l.key} (${res.status}):`, msg.slice(0, 300)); fail++; break;
  }
}
console.log(`\nKlart: ${done} nya filer i ${OUT}/${fail ? `, ${fail} misslyckades (kör igen)` : ""}.`);
