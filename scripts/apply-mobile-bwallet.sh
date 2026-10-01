#!/usr/bin/env bash
# Copy the bWallet mobile-app kit into another Bitcoin Apps Suite repo.
# Usage: scripts/apply-mobile-bwallet.sh /path/to/bitcoin-<app> [AppName]
# See MOBILE-BWALLET.md. Creates branch feat/mobile-bwallet, copies the kit,
# prints the wiring steps. Does NOT edit App.tsx, commit or push: the editor
# screen and the store are app-specific.
set -euo pipefail
HERE="$(cd "$(dirname "$0")/.." && pwd)"
KIT="$HERE/frontend/src/mobile"
REPO="$(cd "${1:?repo dir}" && pwd)"
APPNAME="${2:-bApp}"
cd "$REPO"

git checkout -B feat/mobile-bwallet >/dev/null

# Find the app source root (CRA/Vite SPA or Next.js).
SRC=""
for d in frontend/src src; do [ -d "$d" ] && { SRC=$d; break; }; done
[ -n "$SRC" ] || { echo "no src/ or frontend/src/ found"; exit 1; }
KIND=spa
for f in app/layout.tsx src/app/layout.tsx frontend/app/layout.tsx; do [ -f "$f" ] && KIND=next; done
DEST="$SRC/mobile"
mkdir -p "$DEST"

# Generic files: copy as-is.
cp "$KIT/shell.ts" "$KIT/cwi.ts" "$KIT/mobile-bwallet.css" "$DEST/"
# App frame: copy as a starting point, then replace the editor area + store.
cp "$KIT/MobileApp.tsx" "$KIT/mobile-app.css" "$DEST/"
[ -f "$DEST/sheetStore.ts" ] || cp "$KIT/sheetStore.ts" "$DEST/sheetStore.example.ts"

if [ "$KIND" = next ]; then
  # Next.js: MobileApp uses browser APIs; mark it client-only.
  grep -q "^'use client'" "$DEST/MobileApp.tsx" || sed -i.bak "1s/^/'use client';\n/" "$DEST/MobileApp.tsx" && rm -f "$DEST/MobileApp.tsx.bak"
fi

cat <<MSG

Copied kit to $DEST ($KIND). Wire it up (see MOBILE-BWALLET.md):
  1. In the root component:
       const hideShellChrome = useCompactShell();
       const mobileHome = hideShellChrome && location.pathname === '/';
     Render <MobileApp appName="$APPNAME" user={...} onLogin={...} onRequestLogin={...}/>
     on '/' when mobileHome. Wrap PoC banner / DevSidebar / Dock / Footer in
     {!hideShellChrome && ...}  (JSX gating, not CSS).
$( [ "$KIND" = next ] && echo "     Next.js: compute hideShellChrome in a client component with useEffect (default false on the server) and render nothing chrome-related until mounted, so SSR never emits the dock/banner for phones." )
  2. Replace the grid in MobileApp.tsx with the app's own editor, and
     sheetStore.example.ts with the app's store (list/save/new/share).
  3. Keep handleLogin/checkAuthentication stable (useCallback) and honour
     getStoredCWIUser() so bWallet users stay signed in.
  4. Root vercel.json: installCommand pnpm install, buildCommand
     "cd frontend && pnpm run build", outputDirectory "frontend/build" (if monorepo).
  5. cd frontend && CI=true pnpm run build   (must have zero ESLint warnings)
  6. Playwright WebKit 390x844, UA '... bWallet/1.0', stub window.CWI; screenshot home + editor.
MSG
git status --short
