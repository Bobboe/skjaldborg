"""Gör en ChatGPT-bild till en sömlös textur för Varvet.
Användning: python3 tools/tex.py <bild> <namn> [storlek]
Beskär till kvadrat, skalar, gör kanterna sömlösa (korsblandning med en förskjuten kopia) och sparar public/tex/<namn>.webp"""
import sys
from PIL import Image, ImageFilter
import numpy as np
src, name = sys.argv[1], sys.argv[2]
S = int(sys.argv[3]) if len(sys.argv) > 3 else 1024
im = Image.open(src).convert("RGB")
w, h = im.size; m = min(w, h)
im = im.crop(((w - m) // 2, (h - m) // 2, (w - m) // 2 + m, (h - m) // 2 + m)).resize((S, S), Image.LANCZOS)
a = np.asarray(im).astype(np.float32)
b = np.roll(np.roll(a, S // 2, 0), S // 2, 1)          # kopia förskjuten ett halvt varv: dess kanter är originalets mitt
y, x = np.mgrid[0:S, 0:S] / (S - 1)
edge = np.minimum(np.minimum(x, 1 - x), np.minimum(y, 1 - y))  # 0 vid kanten, 0.5 i mitten
wgt = np.clip(edge / 0.18, 0, 1)[..., None]                    # originalet i mitten, kopian vid kanterna
out = a * wgt + b * (1 - wgt)
Image.fromarray(out.clip(0, 255).astype(np.uint8)).save(f"public/tex/{name}.webp", quality=88)
print("sparad", f"public/tex/{name}.webp")
