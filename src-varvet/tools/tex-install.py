#!/usr/bin/env python3
"""Gör en GPT-textur sömlös och lägger in den: tools/tex-install.py bild.png namn [mål-medelfärg r,g,b] [kontrast]"""
import sys, numpy as np
from PIL import Image
src, name = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB").resize((1024, 1024), Image.LANCZOS); a = np.asarray(im).astype(float); N = 1024
b = np.roll(np.roll(a, N // 2, 0), N // 2, 1); t = np.linspace(0, 1, N); e = np.minimum(t, 1 - t) * 2
w = np.clip(np.minimum.outer(e, e) * 3.0, 0, 1)[..., None]; s = a * w + b * (1 - w)
m = s.reshape(-1, 3).mean(0); k = float(sys.argv[4]) if len(sys.argv) > 4 else 1.0
tgt = np.array([float(v) for v in sys.argv[3].split(",")]) if len(sys.argv) > 3 and sys.argv[3] else m
s = (s - m) * k + tgt
Image.fromarray(np.clip(s, 0, 255).astype(np.uint8)).save(f"public/tex/{name}.webp", quality=80)
print(name, "medel före", m.round(), "efter", tgt.round())
