# bSheets in bWallet: the MobileApp pattern

bWallet opens bApps in an in-app WebView and injects a BRC-100 wallet as
`window.CWI`. On phones and inside bWallet, bSheets does not shrink the desktop
page. It renders a separate phone app.

## When the mobile app is used

`src/mobile/shell.ts` decides:

- **In wallet:** the UA contains `bWallet/`, or `window.CWI` exists, or the URL has `?inwallet=1`.
- **Compact:** in wallet, or the viewport is 768px wide or less.

`useCompactShell()` reads this synchronously on the first render, so the app
never renders the desktop chrome first and then removes it.

## Files

| File | Role | Reuse |
| --- | --- | --- |
| `src/mobile/shell.ts` | Detection (`isInWallet`, `isCompact`, `useCompactShell`). | Copy unchanged. |
| `src/mobile/cwi.ts` | BRC-100 sign-in: `hasCWI`, `signInWithCWI` (`getPublicKey({identityKey:true})`), `getStoredCWIUser`. Only the public key is stored. | Copy unchanged. |
| `src/mobile/MobileApp.tsx` | Phone app frame. Top bar, home list, full-screen editor, edit bar pinned above the keyboard (visualViewport), Save / Share / New bottom bar, silent CWI sign-in with a 10s timeout. | Copy, then replace the editor area. |
| `src/mobile/mobile-app.css` | Dark bWallet theme: black, gold `#F5B800`, app accent `#38bdf8`. 44px targets, safe-area insets, the grid scrolls inside its own container. | Copy; change `--bsm-blue` to the app's identity colour. |
| `src/mobile/sheetStore.ts` | bSheets data: localStorage sheets, formula evaluation, CSV export. | Write one per app. |
| `src/mobile/mobile-bwallet.css` | Small baseline for non-home routes in compact mode. | Copy unchanged. |

## Wiring (`App.tsx`)

```tsx
const hideShellChrome = useCompactShell();
const mobileHome = hideShellChrome && location.pathname === '/';
useEffect(() => {
  document.documentElement.classList.toggle('bw-mobile-app', mobileHome);
}, [mobileHome]);

{!hideShellChrome && <ProofOfConceptBanner />}
{!hideShellChrome && <DevSidebar />}
<Route path="/" element={mobileHome
  ? <MobileApp appName="bSheets" user={currentUser}
      onLogin={handleMobileLogin} onRequestLogin={() => new HandCashService().login()} />
  : desktopHome} />
{!hideShellChrome && <Footer />}
{!hideShellChrome && <DockManager currentApp="..." />}
```

- **Gate in JSX.** Wrap the chrome in conditionals as above. Don't hide it with CSS.
- **Keep `onLogin` stable.** Use `useCallback`, because `MobileApp`'s sign-in effect depends on it.
- **Restore bWallet users.** `checkAuthentication` must check `getStoredCWIUser()` first, so they stay signed in.
- **Leave desktop alone.** The desktop login paths (HandCash, connections modal) stay unchanged.
- **Next.js apps:** decide compact mode on the client and start from "not mounted". Render none of the chrome-related branches until the component has mounted. That way the server-rendered page never contains the dock or banner on a phone.

## Build and deploy

- **Root `vercel.json`:**
  - `installCommand`: `pnpm install`
  - `buildCommand`: `cd frontend && pnpm run build`
  - `outputDirectory`: `frontend/build`
- **Strict build:** Vercel sets `CI`, and CRA then treats ESLint warnings as errors. `cd frontend && CI=true pnpm run build` must pass with no warnings. Fix the warnings; don't use `CI=false` or eslint-disable comments.

## Test

Use Playwright WebKit at 390x844 with a UA ending in `bWallet/1.0`. Add an init script that stubs `window.CWI`:

```js
window.CWI = {
  getPublicKey: async () => ({ publicKey: '02…' }),
  waitForAuthentication: async () => ({ authenticated: true }),
};
```

Check that:

- the page has no PoC banner, dock or dev sidebar;
- `scrollWidth <= innerWidth`;
- the top bar shows the shortened public key;
- the home screen and editor screenshots look right;
- at 1400px the desktop page still has the dock.

To copy the kit into another repo, run `scripts/apply-mobile-bwallet.sh /path/to/repo AppName`.
