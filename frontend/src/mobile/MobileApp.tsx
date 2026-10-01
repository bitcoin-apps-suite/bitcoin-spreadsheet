/**
 * Phone-first bSheets app. Rendered instead of the desktop shell when the
 * viewport is <= 768px or the page is inside bWallet (see shell.ts).
 *
 * Screens: home (sheet list) and editor (full-screen grid).
 * Chrome: native-style top bar, bottom action bar (Save / Share / New),
 * edit bar pinned above the on-screen keyboard.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './mobile-app.css';
import { hasCWI, signInWithCWI, CWIUser } from './cwi';
import {
  MobileSheet, cellKey, colName, deleteSheet, evaluate, listSheets, newSheet, saveSheet, toCSV,
} from './sheetStore';

const ROWS = 100;
const COLS = 26;

export interface MobileAppProps {
  appName: string;
  user: { handle: string; publicKey?: string } | null;
  onLogin: (user: CWIUser) => void;
  /** Fallback sign-in for normal mobile browsers (no window.CWI). */
  onRequestLogin: () => void;
}

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([p, new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
}

/** Distance from the layout-viewport bottom to the visual-viewport bottom (keyboard height). */
function useKeyboardInset(): number {
  const [inset, setInset] = useState(0);
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => setInset(Math.max(0, window.innerHeight - vv.height - vv.offsetTop));
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
    };
  }, []);
  return inset;
}

export default function MobileApp({ appName, user, onLogin, onRequestLogin }: MobileAppProps) {
  const [sheets, setSheets] = useState<MobileSheet[]>(() => listSheets());
  const [active, setActive] = useState<MobileSheet | null>(null);
  const [sel, setSel] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const [draft, setDraft] = useState('');
  const [editing, setEditing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [toast, setToast] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const kb = useKeyboardInset();
  const cwi = hasCWI();

  // Silent BRC-100 sign-in inside bWallet: no chooser, no modal.
  useEffect(() => {
    if (user || !cwi) return;
    let cancelled = false;
    setSigningIn(true);
    withTimeout(signInWithCWI(), 10000)
      .then(u => { if (!cancelled) onLogin(u); })
      .catch(err => console.warn('bWallet silent sign-in failed', err))
      .finally(() => { if (!cancelled) setSigningIn(false); });
    return () => { cancelled = true; };
  }, [user, cwi, onLogin]);

  const flash = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(''), 1800);
  }, []);

  const selKey = cellKey(sel.r, sel.c);

  const openSheet = (s: MobileSheet) => {
    setActive(s);
    setSel({ r: 0, c: 0 });
    setDraft(s.cells.A1 ?? '');
    setDirty(false);
  };

  const commitDraft = useCallback((): MobileSheet | null => {
    if (!active) return null;
    if ((active.cells[selKey] ?? '') === draft) return active;
    const next = { ...active, cells: { ...active.cells, [selKey]: draft } };
    if (draft === '') delete next.cells[selKey];
    setActive(next);
    setDirty(true);
    return next;
  }, [active, selKey, draft]);

  const selectCell = (r: number, c: number) => {
    const base = commitDraft();
    setSel({ r, c });
    setDraft(base?.cells[cellKey(r, c)] ?? '');
  };

  const handleSave = () => {
    const s = commitDraft();
    if (!s) return;
    const saved = saveSheet(s);
    setActive(saved);
    setSheets(listSheets());
    setDirty(false);
    flash('Saved');
  };

  const handleNew = () => {
    if (active && dirty) handleSave();
    const s = saveSheet(newSheet(`Sheet ${listSheets().length + 1}`));
    setSheets(listSheets());
    openSheet(s);
  };

  const handleShare = async () => {
    const s = commitDraft() ?? active;
    if (!s) return;
    const csv = toCSV(s, ROWS, COLS);
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    try {
      if (nav.share) {
        await nav.share({ title: s.title, text: csv });
        return;
      }
      await navigator.clipboard.writeText(csv);
      flash('Copied as CSV');
    } catch (err) {
      if ((err as Error)?.name !== 'AbortError') flash('Share unavailable');
    }
  };

  const goHome = () => {
    if (dirty) handleSave();
    setActive(null);
    setEditing(false);
    setSheets(listSheets());
  };

  const rename = () => {
    if (!active) return;
    const t = window.prompt('Sheet name', active.title);
    if (t && t.trim()) {
      const saved = saveSheet({ ...active, title: t.trim() });
      setActive(saved);
      setSheets(listSheets());
    }
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      selectCell(Math.min(ROWS - 1, sel.r + 1), sel.c);
    }
  };

  const display = useMemo(() => {
    if (!active) return {} as Record<string, string>;
    const cells = { ...active.cells, [selKey]: draft };
    const out: Record<string, string> = {};
    Object.keys(cells).forEach(k => { out[k] = evaluate(cells, k); });
    return out;
  }, [active, selKey, draft]);

  const signedIn = !!user;
  const userLabel = user ? (user.handle.startsWith('@') ? user.handle : user.handle) : '';

  return (
    <div className="bsm-root">
      <header className="bsm-topbar">
        {active ? (
          <button className="bsm-icon-btn" onClick={goHome} aria-label="Back to sheets">‹</button>
        ) : (
          <span className="bsm-logo" aria-hidden="true">▦</span>
        )}
        <div className="bsm-title" onClick={active ? rename : undefined}>
          {active ? active.title : appName}
          {active && dirty && <span className="bsm-dot" aria-label="Unsaved" />}
        </div>
        {signedIn ? (
          <span className="bsm-user" title={user?.publicKey}>{userLabel}</span>
        ) : signingIn ? (
          <span className="bsm-user">Signing in…</span>
        ) : cwi ? null : (
          <button className="bsm-pill" onClick={onRequestLogin}>Sign in</button>
        )}
      </header>

      {!active ? (
        <main className="bsm-home">
          {sheets.length === 0 ? (
            <div className="bsm-empty">
              <div className="bsm-empty-icon">▦</div>
              <p>No sheets yet</p>
              <button className="bsm-primary" onClick={handleNew}>Create a sheet</button>
            </div>
          ) : (
            <ul className="bsm-list">
              {sheets.map(s => (
                <li key={s.id} className="bsm-list-item">
                  <button className="bsm-list-main" onClick={() => openSheet(s)}>
                    <span className="bsm-list-icon">▦</span>
                    <span className="bsm-list-text">
                      <span className="bsm-list-title">{s.title}</span>
                      <span className="bsm-list-sub">
                        {Object.keys(s.cells).length} cells · {new Date(s.updatedAt).toLocaleDateString()}
                      </span>
                    </span>
                  </button>
                  <button
                    className="bsm-icon-btn bsm-muted"
                    aria-label={`Delete ${s.title}`}
                    onClick={() => {
                      if (window.confirm(`Delete "${s.title}"?`)) { deleteSheet(s.id); setSheets(listSheets()); }
                    }}
                  >×</button>
                </li>
              ))}
            </ul>
          )}
        </main>
      ) : (
        <main className="bsm-editor">
          <div className="bsm-grid-scroll" data-testid="grid-scroll">
            <table className="bsm-grid">
              <thead>
                <tr>
                  <th className="bsm-corner" />
                  {Array.from({ length: COLS }, (_, c) => (
                    <th key={c} className={`bsm-colhead${c === sel.c ? ' on' : ''}`}>{colName(c)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: ROWS }, (_, r) => (
                  <tr key={r}>
                    <th className={`bsm-rowhead${r === sel.r ? ' on' : ''}`}>{r + 1}</th>
                    {Array.from({ length: COLS }, (_, c) => {
                      const k = cellKey(r, c);
                      const v = display[k] ?? '';
                      const isSel = r === sel.r && c === sel.c;
                      return (
                        <td
                          key={c}
                          className={`bsm-cell${isSel ? ' sel' : ''}${v !== '' && !isNaN(Number(v)) ? ' num' : ''}`}
                          onClick={() => (isSel ? inputRef.current?.focus() : selectCell(r, c))}
                        >{v}</td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      )}

      {active && (
        <div className="bsm-editbar" style={{ bottom: editing ? kb : undefined }}>
          <span className="bsm-ref">{selKey}</span>
          <input
            ref={inputRef}
            className="bsm-input"
            value={draft}
            placeholder="Value or =SUM(A1:A5)"
            onChange={e => { setDraft(e.target.value); setDirty(true); }}
            onFocus={() => setEditing(true)}
            onBlur={() => { setEditing(false); commitDraft(); }}
            onKeyDown={onInputKey}
            enterKeyHint="next"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
          {editing ? (
            <button className="bsm-pill" onMouseDown={e => e.preventDefault()} onClick={() => { commitDraft(); inputRef.current?.blur(); setEditing(false); }}>Done</button>
          ) : (
            <button className="bsm-pill" onClick={() => inputRef.current?.focus()}>Edit</button>
          )}
        </div>
      )}

      {!(active && editing) && (
        <nav className="bsm-actionbar">
          <button className="bsm-action" onClick={handleSave} disabled={!active}>
            <span className="bsm-action-icon">⤓</span>Save
          </button>
          <button className="bsm-action" onClick={handleShare} disabled={!active}>
            <span className="bsm-action-icon">⇪</span>Share
          </button>
          <button className="bsm-action bsm-action-gold" onClick={handleNew}>
            <span className="bsm-action-icon">＋</span>New
          </button>
        </nav>
      )}

      {toast && <div className="bsm-toast" role="status">{toast}</div>}
    </div>
  );
}
