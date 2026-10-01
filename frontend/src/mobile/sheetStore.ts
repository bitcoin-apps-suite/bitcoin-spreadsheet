/**
 * Local sheet store for the mobile app. Sheets live in localStorage so the
 * app works offline inside bWallet. Cell keys are "A1"-style.
 */
export interface MobileSheet {
  id: string;
  title: string;
  cells: Record<string, string>;
  updatedAt: number;
}

const KEY = 'bsheets_mobile_sheets_v1';

export function listSheets(): MobileSheet[] {
  try {
    const raw = localStorage.getItem(KEY);
    const all = raw ? (JSON.parse(raw) as MobileSheet[]) : [];
    return all.sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
}

export function saveSheet(sheet: MobileSheet): MobileSheet {
  const next = { ...sheet, updatedAt: Date.now() };
  const others = listSheets().filter(s => s.id !== sheet.id);
  try {
    localStorage.setItem(KEY, JSON.stringify([next, ...others]));
  } catch {
    /* storage full / blocked: keep in memory */
  }
  return next;
}

export function deleteSheet(id: string): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(listSheets().filter(s => s.id !== id)));
  } catch {
    /* ignore */
  }
}

export function newSheet(title = 'Untitled sheet'): MobileSheet {
  return {
    id: `sheet_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title,
    cells: {},
    updatedAt: Date.now(),
  };
}

export function colName(i: number): string {
  let s = '';
  let n = i + 1;
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

export function cellKey(row: number, col: number): string {
  return `${colName(col)}${row + 1}`;
}

function parseRef(ref: string): [number, number] | null {
  const m = /^([A-Z]+)(\d+)$/.exec(ref.toUpperCase());
  if (!m) return null;
  let col = 0;
  for (const ch of m[1]) col = col * 26 + (ch.charCodeAt(0) - 64);
  return [parseInt(m[2], 10) - 1, col - 1];
}

/** Evaluate a cell for display. Supports + - * / ( ), refs, SUM/AVERAGE/MIN/MAX/COUNT over ranges. */
export function evaluate(cells: Record<string, string>, key: string, depth = 0): string {
  const raw = cells[key] ?? '';
  if (!raw.startsWith('=')) return raw;
  if (depth > 32) return '#CYCLE';
  const num = (k: string): number => {
    const v = parseFloat(evaluate(cells, k, depth + 1));
    return isNaN(v) ? 0 : v;
  };
  const rangeValues = (a: string, b: string): number[] => {
    const p = parseRef(a);
    const q = parseRef(b);
    if (!p || !q) return [];
    const out: number[] = [];
    for (let r = Math.min(p[0], q[0]); r <= Math.max(p[0], q[0]); r++)
      for (let c = Math.min(p[1], q[1]); c <= Math.max(p[1], q[1]); c++) out.push(num(cellKey(r, c)));
    return out;
  };
  try {
    let expr = raw.slice(1).toUpperCase();
    expr = expr.replace(/(SUM|AVERAGE|AVG|MIN|MAX|COUNT)\(\s*([A-Z]+\d+)\s*:\s*([A-Z]+\d+)\s*\)/g, (_m, fn, a, b) => {
      const v = rangeValues(a, b);
      if (fn === 'SUM') return String(v.reduce((x, y) => x + y, 0));
      if (fn === 'AVERAGE' || fn === 'AVG') return String(v.length ? v.reduce((x, y) => x + y, 0) / v.length : 0);
      if (fn === 'MIN') return String(v.length ? Math.min(...v) : 0);
      if (fn === 'MAX') return String(v.length ? Math.max(...v) : 0);
      return String(v.length);
    });
    expr = expr.replace(/[A-Z]+\d+/g, ref => `(${num(ref)})`);
    if (!/^[0-9+\-*/().\s eE]*$/.test(expr)) return '#ERR';
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${expr || 0});`)();
    if (typeof result !== 'number' || !isFinite(result)) return '#DIV/0';
    return String(Math.round(result * 1e10) / 1e10);
  } catch {
    return '#ERR';
  }
}

export function toCSV(sheet: MobileSheet, rows: number, cols: number): string {
  let maxR = 0;
  let maxC = 0;
  Object.keys(sheet.cells).forEach(k => {
    const p = parseRef(k);
    if (p && sheet.cells[k] !== '') {
      maxR = Math.max(maxR, p[0] + 1);
      maxC = Math.max(maxC, p[1] + 1);
    }
  });
  const lines: string[] = [];
  for (let r = 0; r < Math.min(maxR, rows); r++) {
    const row: string[] = [];
    for (let c = 0; c < Math.min(maxC, cols); c++) {
      const v = evaluate(sheet.cells, cellKey(r, c));
      row.push(/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
    }
    lines.push(row.join(','));
  }
  return lines.join('\n');
}
