// Plockar ut alla repliker ur källkoden till public/voice/lines.json (och en CSV för översikt).
// Varje replik får en nyckel = talare + hash av texten, där spelarens namn och båtens namn
// ersatts med {namn} och {båt}. Spelet räknar fram samma nyckel när repliken visas (src/voice.ts).
// Kör: node tools/voices-extract.mjs
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");
const { parseAst } = require("rollup/parseAst");

export const slug = s => s.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g, "a").replace(/ö/g, "o");
export const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
export const keyOf = (spk, text) => slug(spk) + "_" + hash(text);

const FILES = ["src/jobs.ts", "src/story.ts", "src/chapter2.ts"];
const out = new Map();
const add = (spk, text, src) => { if (!spk || !text || text.includes("{?}")) return; const k = keyOf(spk, text); if (!out.has(k)) out.set(k, { key: k, spk: slug(spk), who: spk, text, src }); };

for (const f of FILES) {
  const ts = fs.readFileSync(f, "utf8");
  const code = esbuild.transformSync(ts, { loader: "ts", target: "esnext" }).code;
  const ast = parseAst(code);
  const src = n => code.slice(n.start, n.end);
  const ph = e => { const s = src(e); return /NAME|pname/.test(s) ? "{namn}" : /boatName/.test(s) ? "{båt}" : /prize/.test(s) ? "{pris}" : /place/.test(s) ? "{plats}" : "{?}"; };
  const decls = new Map(); // variabelnamn → init (för t.ex. head, LEO_LINES, PAGE1)
  const walk = (n, fn, parent) => { if (!n || typeof n.type !== "string") return; fn(n, parent); for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach(c => c && typeof c.type === "string" && walk(c, fn, n)); else if (v && typeof v.type === "string") walk(v, fn, n); } };
  walk(ast, n => { if (n.type === "VariableDeclarator" && n.id.type === "Identifier" && n.init) decls.set(n.id.name, n.init.type === "ArrowFunctionExpression" ? n.init.body : n.init); });
  const strs = n => {
    if (!n) return [];
    if (n.type === "Literal" && typeof n.value === "string") return [n.value];
    if (n.type === "TemplateLiteral") { let parts = [""]; n.quasis.forEach((q, i) => { parts = parts.map(p => p + q.value.cooked); if (i < n.expressions.length) parts = parts.map(p => p + ph(n.expressions[i])); }); return parts; }
    if (n.type === "ConditionalExpression") return [...strs(n.consequent), ...strs(n.alternate)];
    if (n.type === "Identifier" && decls.has(n.name)) return strs(decls.get(n.name));
    return [];
  };
  const lines = n => n && n.type === "ArrayExpression" ? n.elements.flatMap(e => {
    // s.name === "Leo" ? A : B  → olika talare
    if (e.type === "ConditionalExpression" && /name\s*===\s*"Leo"/.test(src(e.test))) return [{ spk: "Leo", t: strs(e.consequent) }, { spk: "Åke", t: strs(e.alternate) }];
    return [{ t: strs(e) }];
  }) : [];
  walk(ast, n => {
    if (n.type === "CallExpression" && n.callee.type === "Identifier" && (n.callee.name === "dialog" || n.callee.name === "choice")) {
      const a0 = n.arguments[0]; const spk = a0 && (a0.type === "Literal" ? a0.value : a0.type === "TemplateLiteral" ? a0.quasis[0].value.cooked : null);
      for (const L of lines(n.arguments[1])) for (const t of L.t) add(L.spk || spk, t, f);
    }
    if (n.type === "ObjectExpression") {
      const p = k => n.properties.find(q => q.key && (q.key.name === k || q.key.value === k));
      const from = p("from"); if (from && from.value.type === "Literal") { const who = from.value.value === "sven" ? "Sven" : "Majken"; for (const L of lines(p("offer")?.value)) L.t.forEach(t => add(who, t, f)); strs(p("done")?.value).forEach(t => add(who, t, f)); }
      if (p("game") && p("cost")) strs(p("done")?.value).forEach(t => add("Sven", t, f)); // byggsteg i kapitel 2
    }
  });
  for (const [v, who] of [["LEO_LINES", "Leo"], ["AKE_LINES", "Åke"]]) if (decls.has(v)) for (const L of lines(decls.get(v))) L.t.forEach(t => add(who, t, f));
  for (const v of ["EDVIN", "PAGE1", "PAGE2", "PAGE3"]) if (decls.has(v)) strs(decls.get(v)).forEach(t => add("Edvin", t, f));
}

// varianter med siffror som spelet skriver ut som de är
for (const [k, L] of [...out]) if (/\{pris\}|\{plats\}/.test(L.text)) {
  out.delete(k);
  const vs = L.text.includes("{pris}") ? ["2000", "1000", "500", "200"].map(v => L.text.replace("{pris}", v)) : ["2", "3"].map(v => L.text.replace("{plats}", v));
  vs.forEach(t => add(L.who, t, L.src));
}
// det som läses in: namnen tas bort eller skrivs om så att repliken fungerar utan dem
const MANUAL = { "{båt}! Fint namn.": "Fint namn! Riktigt fint.", "Kör du {båt}, eller vill du låna min? Min är snabbare.": "Kör du din egen båt, eller vill du låna min? Min är snabbare." };
const readOf = t => MANUAL[t] || t.replace(/,\s*\{namn\}(?=[,.…!?])/g, "").replace(/\s*\{namn\}/g, "").replace(/\{båt\}/g, "båten").replace(/\s+([,.!?])/g, "$1").replace(/^\/ E\.$/m, "Edvin.");
const list = [...out.values()].map(L => ({ ...L, read: readOf(L.text) }));
const order = ["sven", "majken", "karin", "leo", "ake", "ingrid", "edvin"];
list.sort((a, b) => order.indexOf(a.spk) - order.indexOf(b.spk));
fs.mkdirSync("public/voice", { recursive: true });
fs.copyFileSync("tools/voices-config.json", "public/voice/config.json");
fs.writeFileSync("public/voice/lines.json", JSON.stringify(list.map(({ key, spk, text, read }) => ({ key, spk, text, read }))));
fs.writeFileSync("tools/voices-lines.json", JSON.stringify(list.map(({ key, spk, who, text, read }) => ({ key, spk, who, text, read })), null, 1));
const csv = "nyckel;person;text i spelet;text att läsa in\n" + list.map(L => [L.key, L.spk, L.text, L.read].map(x => '"' + x.replace(/"/g, '""').replace(/\n/g, " ") + '"').join(";")).join("\n");
fs.writeFileSync("tools/voices.csv", "﻿" + csv);
const per = {}; for (const L of list) { per[L.spk] = per[L.spk] || { n: 0, chars: 0 }; per[L.spk].n++; per[L.spk].chars += L.read.length; }
console.log(list.length, "repliker", list.reduce((a, L) => a + L.read.length, 0), "tecken", JSON.stringify(per));
