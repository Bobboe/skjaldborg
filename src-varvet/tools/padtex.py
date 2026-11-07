"""Fyller de svarta mellanrummen mellan UV-öarna i en Meshy-GLB med närmaste färg (kantutfyllnad),
så att nedskalning och mipmaps inte drar in svart i kanterna. Användning: padtex.py in.glb out.glb"""
import json, struct, io, sys
import numpy as np
from PIL import Image
from scipy.ndimage import distance_transform_edt, binary_erosion

src, dst = sys.argv[1], sys.argv[2]
b = open(src, "rb").read()
jl = struct.unpack("<I", b[12:16])[0]; j = json.loads(b[20:20 + jl])
o = 20 + jl; bl = struct.unpack("<I", b[o:o + 4])[0]; binc = bytearray(b[o + 8:o + 8 + bl])
views = [bytes(binc[v.get("byteOffset", 0):v.get("byteOffset", 0) + v["byteLength"]]) for v in j["bufferViews"]]
for im in j.get("images", []):
    vi = im["bufferView"]; img = Image.open(io.BytesIO(views[vi])).convert("RGB")
    a = np.asarray(img).astype(np.float32)
    empty = a.sum(2) < 24                                   # svarta mellanrum
    empty = ~binary_erosion(~empty, iterations=1)           # ta även med den mörka kantpixeln
    idx = distance_transform_edt(empty, return_distances=False, return_indices=True)
    filled = a[idx[0], idx[1]]
    out = io.BytesIO(); Image.fromarray(filled.astype(np.uint8)).save(out, "PNG"); views[vi] = out.getvalue()
    im["mimeType"] = "image/png"
newbin = bytearray()
for v, data in zip(j["bufferViews"], views):
    while len(newbin) % 4: newbin.append(0)
    v["byteOffset"] = len(newbin); v["byteLength"] = len(data); newbin += data
while len(newbin) % 4: newbin.append(0)
j["buffers"] = [{"byteLength": len(newbin)}]
js = json.dumps(j, separators=(",", ":")).encode()
while len(js) % 4: js += b" "
total = 12 + 8 + len(js) + 8 + len(newbin)
with open(dst, "wb") as f:
    f.write(struct.pack("<III", 0x46546C67, 2, total)); f.write(struct.pack("<II", len(js), 0x4E4F534A)); f.write(js)
    f.write(struct.pack("<II", len(newbin), 0x004E4942)); f.write(newbin)
print("ok", dst)
