#!/bin/bash
# Bygger Varvet och publicerar till Bobboe/skjaldborg. Användning: tools/push.sh "meddelande"
set -e
cd /home/claude/varvet-ts && node tools/voices-index.mjs >/dev/null && npx vite build 2>&1 | grep -iE "error|built"
cd /home/claude/skjaldborg && python3 build_site.py >/dev/null && cp -a /home/claude/arcade/site/. /home/claude/skjaldborg-repo/
cd /home/claude/skjaldborg-repo && rm -rf src-varvet && mkdir -p src-varvet && (cd /home/claude/varvet-ts && tar --exclude=node_modules --exclude=dist -cf - .) | (cd src-varvet && tar -xf -)
git add -A && git commit -qm "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_013tnb1kNdG4cnekmNi2yXcv" && git push -q origin main && git log --oneline -1
