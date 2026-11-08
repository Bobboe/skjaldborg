// Skriver public/voice/index.json med alla inlästa repliker (filnamn utan .mp3), så att spelet vet vilka som finns.
import fs from "fs";
fs.mkdirSync("public/voice", { recursive: true });
const keys = fs.readdirSync("public/voice").filter(f => f.endsWith(".mp3")).map(f => f.slice(0, -4)).sort();
fs.writeFileSync("public/voice/index.json", JSON.stringify(keys));
console.log("röster:", keys.length);
