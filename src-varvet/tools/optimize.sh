#!/bin/bash
# Meshy-GLB → spelklar GLB: kantutfyllnad, 1024 px webp, omsampling. Användning: tools/optimize.sh in.glb public/models/namn.glb
set -e; T=$(mktemp -d)
python3 "$(dirname "$0")/padtex.py" "$1" $T/a.glb
npx gltf-transform resize $T/a.glb $T/b.glb --width 1024 --height 1024 >/dev/null
npx gltf-transform webp $T/b.glb $T/c.glb --quality 85 >/dev/null
npx gltf-transform resample $T/c.glb $T/d.glb >/dev/null 2>&1 || cp $T/c.glb $T/d.glb
npx gltf-transform dedup $T/d.glb "$2" >/dev/null
ls -la "$2"; rm -rf $T
