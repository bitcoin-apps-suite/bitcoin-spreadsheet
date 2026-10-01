#!/usr/bin/env bash
# Apply the mobile / bWallet shell change to another Bitcoin Apps Suite repo.
# Usage: scripts/apply-mobile-bwallet.sh /path/to/bitcoin-<app>
# See MOBILE-BWALLET.md. Creates branch feat/mobile-bwallet, copies the shared
# files, wires them into the entry point. Does NOT commit or push.
set -euo pipefail
HERE="$(cd "$(dirname "$0")/.." && pwd)"
TPL="$HERE/frontend/src/mobile"
REPO="$(cd "${1:?repo dir}" && pwd)"
cd "$REPO"

git checkout -B feat/mobile-bwallet >/dev/null

# Package manager (report only)
if [ -f pnpm-lock.yaml ]; then PM=pnpm; elif [ -f yarn.lock ]; then PM=yarn; elif [ -f package-lock.json ]; then PM=npm; else PM=pnpm; fi
[ -f pnpm-lock.yaml ] && [ -f package-lock.json ] && echo "WARN: both pnpm-lock.yaml and package-lock.json present; using pnpm"
echo "package manager: $PM"

# Detect framework + entry
ENTRY=""; KIND=""
for f in app/layout.tsx src/app/layout.tsx; do [ -f "$f" ] && { ENTRY=$f; KIND=next; break; }; done
if [ -z "$ENTRY" ]; then
  for f in src/index.tsx frontend/src/index.tsx src/main.tsx frontend/src/main.tsx; do [ -f "$f" ] && { ENTRY=$f; KIND=spa; break; }; done
fi
[ -n "$ENTRY" ] || { echo "no entry point found"; exit 1; }
echo "framework: $KIND  entry: $ENTRY"

if [ "$KIND" = spa ]; then DEST="$(dirname "$ENTRY")/mobile"
elif [[ "$ENTRY" == src/* ]]; then DEST=src/mobile
elif [ -d components ]; then DEST=components/mobile
else DEST=mobile; fi
mkdir -p "$DEST"
cp "$TPL/shell.ts" "$TPL/cwi.ts" "$TPL/mobile-bwallet.css" "$DEST/"

if [ "$KIND" = spa ]; then
  grep -q "mobile/shell" "$ENTRY" || python3 - "$ENTRY" <<'PY'
import sys,re
p=sys.argv[1]; s=open(p).read()
imports=list(re.finditer(r'^import .*?;\s*$', s, re.M))
end=imports[-1].end()
s=s[:end]+"\nimport './mobile/mobile-bwallet.css';\nimport { applyShellClasses } from './mobile/shell';\n\napplyShellClasses();\n"+s[end:]
open(p,'w').write(s)
PY
else
  cat > "$DEST/MobileShellInit.tsx" <<'TSX'
'use client';
import { useEffect } from 'react';
import { applyShellClasses } from './shell';

/** Mount once in the root layout: sets html.bw-compact / html.bw-inwallet. */
export default function MobileShellInit() {
  useEffect(() => { applyShellClasses(); }, []);
  return null;
}
TSX
  REL="$(python3 -c "import os,sys;print(os.path.relpath(sys.argv[1],sys.argv[2]))" "$DEST" "$(dirname "$ENTRY")")"
  grep -q "MobileShellInit" "$ENTRY" || python3 - "$ENTRY" "$REL" <<'PY'
import sys,re
p,rel=sys.argv[1],sys.argv[2]; s=open(p).read()
imports=list(re.finditer(r'^import .*?;\s*$', s, re.M))
end=imports[-1].end()
s=s[:end]+f"\nimport '{rel}/mobile-bwallet.css';\nimport MobileShellInit from '{rel}/MobileShellInit';\n"+s[end:]
s=re.sub(r'(<body[^>]*>)', r'\1\n        <MobileShellInit />', s, count=1)
open(p,'w').write(s)
PY
fi

# CRA eslint rejects code between imports; the python insert puts it after the last import.
echo
echo "Done. Next (manual, ~15-45 min per repo):"
echo "  1. Gate the JSX too (optional but cleaner): {!useCompactShell() && <DockManager/>} / PoC banner"
echo "  2. Wire sign-in: if hasCWI() call signInWithCWI() before falling back to HandCash"
echo "  3. Check fixed headers that reserve 40px for the banner (padding-top/top: 40px)"
echo "  4. $PM install && $PM run build ; screenshot at 390px with UA 'bWallet/1'"
git status --short
