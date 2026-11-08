#!/usr/bin/env python3
"""Lägger in ljudfiler som repliker. Filnamnet ska börja med person och replikens första ord,
t.ex. "Sven_kan_du_slipa_den.m4a" (å/ä/ö får gärna bli a_/o_ som iPhone gör). Konverterar till mp3."""
import json, re, subprocess, sys, os, unicodedata, difflib
L = json.load(open("tools/voices-lines.json"))
def norm(s):
    s = unicodedata.normalize("NFC", s).lower()
    s = s.replace("å", "a").replace("ä", "a").replace("ö", "o")
    return re.sub(r"[^a-z0-9]", "", s)
AF = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,loudnorm=I=-16:TP=-1.5:LRA=11"
for f in sys.argv[1:]:
    base = os.path.basename(f); base = re.sub(r"^[0-9a-f]{8}-", "", base); base = os.path.splitext(base)[0]
    parts = base.split("_", 1); spk = norm(parts[0]); txt = norm(parts[1] if len(parts) > 1 else "")
    hits = [l for l in L if l["spk"] == spk and (norm(l["text"]).startswith(txt) or norm(l["read"]).startswith(txt))]
    if not hits: hits = [l for l in L if l["spk"] == spk and txt in norm(l["text"])]  # mitt i repliken
    if not hits:  # stavfel i filnamnet: närmaste replik med samma början
        sc = sorted(((difflib.SequenceMatcher(None, txt, norm(l["text"])[:len(txt)]).ratio(), l) for l in L if l["spk"] == spk), key=lambda x: -x[0])
        if sc and sc[0][0] > .8 and (len(sc) < 2 or sc[0][0] - sc[1][0] > .1): hits = [sc[0][1]]
    if len(hits) != 1:
        print(f"?? {base}: {len(hits)} träffar", [h["text"][:50] for h in hits][:4]); continue
    h = hits[0]; out = f"public/voice/{h['key']}.mp3"
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", f, "-ac", "1", "-ar", "44100", "-af", AF, "-c:a", "libmp3lame", "-b:a", "64k", out], check=True)
    print(f"OK {h['key']}: {h['text'][:70]}")
done = {k[:-4] for k in os.listdir("public/voice") if k.endswith(".mp3")}
print(f"{len(done)}/{len(L)} klara")
