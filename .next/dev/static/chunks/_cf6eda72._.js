(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/SpreadsheetUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility functions for Handsontable operations
__turbopack_context__.s([
    "SpreadsheetUtils",
    ()=>SpreadsheetUtils
]);
class SpreadsheetUtils {
    static getActiveSpreadsheet() {
        // Get the active Handsontable instance
        const spreadsheetElement = document.querySelector('.handsontable');
        if (spreadsheetElement) {
            // @ts-ignore - Handsontable instance is attached to the element
            return spreadsheetElement.handsontable;
        }
        // Alternative: try to get from global window if available
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.hotInstance) {
            return window.hotInstance;
        }
        return null;
    }
    // Formula insertion functions
    static insertFormula(formula) {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [row, col] = selected[0];
            hot.setDataAtCell(row, col, `=${formula}`);
        }
    }
    static insertSumFormula() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            // If range is selected, use that range, otherwise prompt for range
            const [startRow, startCol, endRow, endCol] = selected[0];
            if (startRow !== endRow || startCol !== endCol) {
                // Range selected
                const range = this.getRangeString(startRow, startCol, endRow, endCol);
                hot.setDataAtCell(endRow + 1, startCol, `=SUM(${range})`);
            } else {
                // Single cell selected, insert generic SUM
                const range = prompt('Enter range for SUM formula (e.g., A1:A10):');
                if (range) {
                    hot.setDataAtCell(startRow, startCol, `=SUM(${range})`);
                }
            }
        }
    }
    static insertAverageFormula() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [startRow, startCol, endRow, endCol] = selected[0];
            if (startRow !== endRow || startCol !== endCol) {
                const range = this.getRangeString(startRow, startCol, endRow, endCol);
                hot.setDataAtCell(endRow + 1, startCol, `=AVERAGE(${range})`);
            } else {
                const range = prompt('Enter range for AVERAGE formula (e.g., A1:A10):');
                if (range) {
                    hot.setDataAtCell(startRow, startCol, `=AVERAGE(${range})`);
                }
            }
        }
    }
    static insertCountFormula() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [startRow, startCol, endRow, endCol] = selected[0];
            if (startRow !== endRow || startCol !== endCol) {
                const range = this.getRangeString(startRow, startCol, endRow, endCol);
                hot.setDataAtCell(endRow + 1, startCol, `=COUNT(${range})`);
            } else {
                const range = prompt('Enter range for COUNT formula (e.g., A1:A10):');
                if (range) {
                    hot.setDataAtCell(startRow, startCol, `=COUNT(${range})`);
                }
            }
        }
    }
    // Row and Column operations
    static insertRowAbove() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [row] = selected[0];
            hot.alter('insert_row_above', row);
        }
    }
    static insertRowBelow() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [row] = selected[0];
            hot.alter('insert_row_below', row);
        }
    }
    static insertColumnLeft() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [, col] = selected[0];
            hot.alter('insert_col_start', col);
        }
    }
    static insertColumnRight() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [, col] = selected[0];
            hot.alter('insert_col_end', col);
        }
    }
    static deleteRow() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [row] = selected[0];
            hot.alter('remove_row', row);
        }
    }
    static deleteColumn() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [, col] = selected[0];
            hot.alter('remove_col', col);
        }
    }
    // Formatting operations
    static applyBold() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [startRow, startCol, endRow, endCol] = selected[0];
            for(let row = startRow; row <= endRow; row++){
                for(let col = startCol; col <= endCol; col++){
                    const cellMeta = hot.getCellMeta(row, col);
                    const currentStyle = cellMeta.className || '';
                    const newStyle = currentStyle.includes('bold') ? currentStyle.replace('bold', '').trim() : `${currentStyle} bold`.trim();
                    hot.setCellMeta(row, col, 'className', newStyle);
                }
            }
            hot.render();
        }
    }
    static applyCurrency() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [startRow, startCol, endRow, endCol] = selected[0];
            for(let row = startRow; row <= endRow; row++){
                for(let col = startCol; col <= endCol; col++){
                    hot.setCellMeta(row, col, 'type', 'numeric');
                    hot.setCellMeta(row, col, 'numericFormat', {
                        pattern: '$0,0.00'
                    });
                }
            }
            hot.render();
        }
    }
    static applyPercentage() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [startRow, startCol, endRow, endCol] = selected[0];
            for(let row = startRow; row <= endRow; row++){
                for(let col = startCol; col <= endCol; col++){
                    hot.setCellMeta(row, col, 'type', 'numeric');
                    hot.setCellMeta(row, col, 'numericFormat', {
                        pattern: '0.00%'
                    });
                }
            }
            hot.render();
        }
    }
    // Sorting operations
    static sortAscending() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [, col] = selected[0];
            hot.getPlugin('columnSorting').sort({
                column: col,
                sortOrder: 'asc'
            });
        }
    }
    static sortDescending() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const selected = hot.getSelected();
        if (selected && selected.length > 0) {
            const [, col] = selected[0];
            hot.getPlugin('columnSorting').sort({
                column: col,
                sortOrder: 'desc'
            });
        }
    }
    // Utility functions
    static getRangeString(startRow, startCol, endRow, endCol) {
        const startCell = this.numberToColumn(startCol) + (startRow + 1);
        const endCell = this.numberToColumn(endCol) + (endRow + 1);
        return `${startCell}:${endCell}`;
    }
    static numberToColumn(num) {
        let result = '';
        while(num >= 0){
            result = String.fromCharCode(65 + num % 26) + result;
            num = Math.floor(num / 26) - 1;
        }
        return result;
    }
    // Filter operations
    static toggleFilters() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const filtersPlugin = hot.getPlugin('filters');
        if (filtersPlugin.isEnabled()) {
            filtersPlugin.disablePlugin();
        } else {
            filtersPlugin.enablePlugin();
        }
    }
    // Copy/Paste operations
    static copySelection() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const copyPastePlugin = hot.getPlugin('copyPaste');
        copyPastePlugin.copy();
    }
    static cutSelection() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const copyPastePlugin = hot.getPlugin('copyPaste');
        copyPastePlugin.cut();
    }
    static pasteSelection() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const copyPastePlugin = hot.getPlugin('copyPaste');
        copyPastePlugin.paste();
    }
    // Undo/Redo operations
    static undo() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const undoRedoPlugin = hot.getPlugin('undoRedo');
        undoRedoPlugin.undo();
    }
    static redo() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const undoRedoPlugin = hot.getPlugin('undoRedo');
        undoRedoPlugin.redo();
    }
    // Export functionality
    static exportToCSV() {
        const hot = this.getActiveSpreadsheet();
        if (!hot) return;
        const exportPlugin = hot.getPlugin('exportFile');
        exportPlugin.downloadFile('csv', {
            filename: 'spreadsheet-export',
            mimeType: 'text/csv'
        });
    }
    // Import functionality  
    static importFromCSV() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv';
        input.onchange = (event)=>{
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e)=>{
                    const csv = e.target.result;
                    const rows = csv.split('\n').map((row)=>row.split(','));
                    const hot = this.getActiveSpreadsheet();
                    if (hot) {
                        hot.loadData(rows);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CleanTaskbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/SpreadsheetUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CleanTaskbar = ({ isAuthenticated, currentUser, onLogout, onNewSpreadsheet, onSaveSpreadsheet, onSaveToBlockchain, onImport, onExport, toggleDarkMode, isDarkMode, onToggle3DView, tickerCollapsed = true })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showBitcoinSuite, setShowBitcoinSuite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CleanTaskbar.useEffect": ()=>{
            setIsMobile(window.innerWidth <= 768);
        }
    }["CleanTaskbar.useEffect"], []);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menus = [
        {
            label: 'Bitcoin Spreadsheets',
            items: [
                {
                    label: 'Home',
                    shortcut: '⇧⌘H',
                    action: ()=>router.push('/')
                },
                {
                    divider: true
                },
                {
                    label: 'About Bitcoin Spreadsheets',
                    action: ()=>alert(`Bitcoin Spreadsheets v1.0

Secure, encrypted spreadsheets on the blockchain

© 2025 THE BITCOIN CORPORATION LTD
UK Company No. 16735102

Built with HandCash integration`)
                },
                {
                    divider: true
                },
                {
                    label: 'Preferences...',
                    shortcut: '⌘,',
                    action: ()=>console.log('Preferences')
                },
                {
                    label: 'Encryption Settings...',
                    action: ()=>console.log('Encryption')
                },
                {
                    divider: true
                },
                {
                    label: 'Hide Bitcoin Spreadsheets',
                    shortcut: '⌘H',
                    action: ()=>console.log('Hide')
                },
                {
                    label: 'Hide Others',
                    shortcut: '⌥⌘H',
                    action: ()=>console.log('Hide Others')
                },
                {
                    divider: true
                },
                {
                    label: isAuthenticated ? 'Sign Out' : 'Sign In',
                    shortcut: '⌘Q',
                    action: isAuthenticated ? onLogout : ()=>document.querySelector('.login-btn')?.click()
                }
            ]
        },
        {
            label: 'File',
            items: [
                {
                    label: 'New Spreadsheet',
                    shortcut: '⌘N',
                    action: onNewSpreadsheet || (()=>console.log('New'))
                },
                {
                    label: 'Open...',
                    shortcut: '⌘O',
                    action: ()=>console.log('Open')
                },
                {
                    label: 'Open Recent',
                    action: ()=>console.log('Recent')
                },
                {
                    divider: true
                },
                {
                    label: 'Close',
                    shortcut: '⌘W',
                    action: ()=>console.log('Close')
                },
                {
                    label: 'Save',
                    shortcut: '⌘S',
                    action: onSaveSpreadsheet || (()=>console.log('Save'))
                },
                {
                    label: 'Save As...',
                    shortcut: '⇧⌘S',
                    action: ()=>console.log('Save As')
                },
                {
                    label: 'Save to Blockchain',
                    shortcut: '⌘B',
                    action: onSaveToBlockchain || (()=>console.log('Save to Blockchain'))
                },
                {
                    divider: true
                },
                {
                    label: 'Import from Excel',
                    action: onImport || (()=>console.log('Import Excel'))
                },
                {
                    label: 'Import from CSV',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].importFromCSV()
                },
                {
                    label: 'Import from Google Sheets',
                    action: ()=>console.log('Import Google Sheets')
                },
                {
                    divider: true
                },
                {
                    label: 'Export to Excel',
                    action: onExport || (()=>console.log('Export Excel'))
                },
                {
                    label: 'Export to CSV',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].exportToCSV()
                },
                {
                    label: 'Export to PDF',
                    action: ()=>console.log('Export PDF')
                },
                {
                    label: 'Export to HTML',
                    action: ()=>console.log('Export HTML')
                }
            ]
        },
        {
            label: 'Edit',
            items: [
                {
                    label: 'Undo',
                    shortcut: '⌘Z',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].undo()
                },
                {
                    label: 'Redo',
                    shortcut: '⇧⌘Z',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].redo()
                },
                {
                    divider: true
                },
                {
                    label: 'Cut',
                    shortcut: '⌘X',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].cutSelection()
                },
                {
                    label: 'Copy',
                    shortcut: '⌘C',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].copySelection()
                },
                {
                    label: 'Paste',
                    shortcut: '⌘V',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].pasteSelection()
                },
                {
                    label: 'Paste Special...',
                    shortcut: '⇧⌘V',
                    action: ()=>console.log('Paste Special')
                },
                {
                    label: 'Select All',
                    shortcut: '⌘A',
                    action: ()=>document.execCommand('selectAll')
                },
                {
                    divider: true
                },
                {
                    label: 'Find...',
                    shortcut: '⌘F',
                    action: ()=>console.log('Find')
                },
                {
                    label: 'Find & Replace...',
                    shortcut: '⌥⌘F',
                    action: ()=>console.log('Find & Replace')
                }
            ]
        },
        {
            label: 'Insert',
            items: [
                {
                    label: 'Row Above',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertRowAbove()
                },
                {
                    label: 'Row Below',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertRowBelow()
                },
                {
                    label: 'Column Left',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertColumnLeft()
                },
                {
                    label: 'Column Right',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertColumnRight()
                },
                {
                    divider: true
                },
                {
                    label: 'Delete Row',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].deleteRow()
                },
                {
                    label: 'Delete Column',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].deleteColumn()
                },
                {
                    divider: true
                },
                {
                    label: 'Function...',
                    shortcut: '⇧⌘F',
                    action: ()=>console.log('Insert Function')
                },
                {
                    label: 'Chart...',
                    action: ()=>console.log('Insert Chart')
                },
                {
                    label: 'Image...',
                    action: ()=>console.log('Insert Image')
                },
                {
                    label: 'Link...',
                    shortcut: '⌘K',
                    action: ()=>console.log('Insert Link')
                },
                {
                    divider: true
                },
                {
                    label: 'Comment',
                    shortcut: '⇧⌘C',
                    action: ()=>console.log('Insert Comment')
                },
                {
                    label: 'Note',
                    action: ()=>console.log('Insert Note')
                }
            ]
        },
        {
            label: 'Format',
            items: [
                {
                    label: 'Bold',
                    shortcut: '⌘B',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].applyBold()
                },
                {
                    label: 'Italic',
                    shortcut: '⌘I',
                    action: ()=>console.log('Apply Italic')
                },
                {
                    label: 'Underline',
                    shortcut: '⌘U',
                    action: ()=>console.log('Apply Underline')
                },
                {
                    label: 'Strikethrough',
                    shortcut: '⌥⇧5',
                    action: ()=>console.log('Strikethrough')
                },
                {
                    divider: true
                },
                {
                    label: 'Number',
                    action: ()=>console.log('Format Number')
                },
                {
                    label: 'Currency',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].applyCurrency()
                },
                {
                    label: 'Percentage',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].applyPercentage()
                },
                {
                    label: 'Date',
                    action: ()=>console.log('Format Date')
                },
                {
                    label: 'Time',
                    action: ()=>console.log('Format Time')
                },
                {
                    divider: true
                },
                {
                    label: 'Align Left',
                    action: ()=>console.log('Align Left')
                },
                {
                    label: 'Align Center',
                    action: ()=>console.log('Align Center')
                },
                {
                    label: 'Align Right',
                    action: ()=>console.log('Align Right')
                },
                {
                    divider: true
                },
                {
                    label: 'Conditional Formatting...',
                    action: ()=>console.log('Conditional Formatting')
                },
                {
                    label: 'Clear Formatting',
                    action: ()=>console.log('Clear Formatting')
                }
            ]
        },
        {
            label: 'Data',
            items: [
                {
                    label: 'Sort A → Z',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].sortAscending()
                },
                {
                    label: 'Sort Z → A',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].sortDescending()
                },
                {
                    label: 'Sort Range...',
                    action: ()=>console.log('Sort Range')
                },
                {
                    divider: true
                },
                {
                    label: 'Filter',
                    shortcut: '⌘⇧F',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].toggleFilters()
                },
                {
                    label: 'Filter Views',
                    action: ()=>console.log('Filter Views')
                },
                {
                    divider: true
                },
                {
                    label: 'Pivot Table...',
                    action: ()=>console.log('Pivot Table')
                },
                {
                    label: 'Data Validation...',
                    action: ()=>console.log('Data Validation')
                },
                {
                    divider: true
                },
                {
                    label: 'Split Text to Columns...',
                    action: ()=>console.log('Split Text')
                },
                {
                    label: 'Remove Duplicates',
                    action: ()=>console.log('Remove Duplicates')
                }
            ]
        },
        {
            label: 'Blockchain',
            items: [
                {
                    label: 'Developer Contracts',
                    href: '/contracts'
                },
                {
                    label: '$bSheets Token',
                    href: '/token'
                },
                {
                    label: 'Contributions',
                    href: '/contributions'
                },
                {
                    divider: true
                },
                {
                    label: 'Encrypt Spreadsheet',
                    shortcut: '⌘L',
                    action: ()=>console.log('Encrypt')
                },
                {
                    label: 'Decrypt Spreadsheet',
                    action: ()=>console.log('Decrypt')
                },
                {
                    divider: true
                },
                {
                    label: 'Create NFT',
                    action: ()=>console.log('Create NFT')
                },
                {
                    label: 'Issue Spreadsheet Shares',
                    action: ()=>console.log('Issue shares')
                },
                {
                    divider: true
                },
                {
                    label: 'Set Access Permissions',
                    action: ()=>console.log('Set permissions')
                },
                {
                    label: 'Set Paywall',
                    action: ()=>console.log('Set paywall')
                },
                {
                    label: 'Set Timelock',
                    action: ()=>console.log('Set timelock')
                },
                {
                    divider: true
                },
                {
                    label: 'Publish to Chain',
                    action: ()=>console.log('Publish to chain')
                },
                {
                    label: 'View on Explorer',
                    href: 'https://whatsonchain.com'
                },
                {
                    divider: true
                },
                {
                    label: 'Token Exchange',
                    href: '/exchange'
                }
            ]
        },
        {
            label: 'Formulas',
            items: [
                {
                    label: 'SUM',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertSumFormula()
                },
                {
                    label: 'AVERAGE',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertAverageFormula()
                },
                {
                    label: 'COUNT',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertCountFormula()
                },
                {
                    label: 'MAX',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('MAX(A1:A10)')
                },
                {
                    label: 'MIN',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('MIN(A1:A10)')
                },
                {
                    divider: true
                },
                {
                    label: 'IF',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('IF(A1>0,"Yes","No")')
                },
                {
                    label: 'VLOOKUP',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('VLOOKUP(A1,A:B,2,FALSE)')
                },
                {
                    label: 'INDEX',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('INDEX(A:A,1)')
                },
                {
                    label: 'MATCH',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('MATCH(A1,A:A,0)')
                },
                {
                    divider: true
                },
                {
                    label: 'TODAY',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('TODAY()')
                },
                {
                    label: 'NOW',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('NOW()')
                },
                {
                    label: 'RAND',
                    action: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].insertFormula('RAND()')
                },
                {
                    divider: true
                },
                {
                    label: 'Function Help',
                    href: 'https://hyperformula.handsontable.com/guide/built-in-functions.html'
                }
            ]
        },
        {
            label: 'Tools',
            items: [
                {
                    label: 'Macros',
                    action: ()=>console.log('Macros')
                },
                {
                    label: 'Script Editor',
                    action: ()=>console.log('Script Editor')
                },
                {
                    divider: true
                },
                {
                    label: 'Protect Range...',
                    action: ()=>console.log('Protect Range')
                },
                {
                    label: 'Protect Sheet...',
                    action: ()=>console.log('Protect Sheet')
                },
                {
                    divider: true
                },
                {
                    label: 'Spell Check',
                    shortcut: '⌘:',
                    action: ()=>console.log('Spell Check')
                },
                {
                    label: 'Word Count',
                    action: ()=>console.log('Word Count')
                },
                {
                    divider: true
                },
                {
                    label: 'Storage Calculator',
                    action: ()=>console.log('Storage Calculator')
                },
                {
                    label: 'Blockchain Cost Estimator',
                    action: ()=>console.log('Cost Estimator')
                }
            ]
        },
        {
            label: 'View',
            items: [
                {
                    label: 'Toggle Sidebar',
                    shortcut: '⌥⌘S',
                    action: ()=>console.log('Toggle sidebar')
                },
                {
                    label: 'Toggle Dark Mode',
                    shortcut: '⌥⌘D',
                    action: ()=>toggleDarkMode?.()
                },
                {
                    label: 'Toggle Formula Bar',
                    action: ()=>console.log('Toggle formula bar')
                },
                {
                    label: '3D View',
                    shortcut: '⌥⌘3',
                    action: ()=>router.push('/3d')
                },
                {
                    divider: true
                },
                {
                    label: 'Gridlines',
                    action: ()=>console.log('Toggle gridlines')
                },
                {
                    label: 'Protected Ranges',
                    action: ()=>console.log('Show protected ranges')
                },
                {
                    label: 'Formulas',
                    action: ()=>console.log('Show formulas')
                },
                {
                    divider: true
                },
                {
                    label: 'Freeze ▸',
                    action: ()=>{}
                },
                {
                    label: '  1 Row',
                    action: ()=>console.log('Freeze 1 row')
                },
                {
                    label: '  2 Rows',
                    action: ()=>console.log('Freeze 2 rows')
                },
                {
                    label: '  1 Column',
                    action: ()=>console.log('Freeze 1 column')
                },
                {
                    label: '  2 Columns',
                    action: ()=>console.log('Freeze 2 columns')
                },
                {
                    divider: true
                },
                {
                    label: 'Full Screen',
                    shortcut: '⌃⌘F',
                    action: ()=>document.documentElement.requestFullscreen()
                },
                {
                    divider: true
                },
                {
                    label: 'Zoom In',
                    shortcut: '⌘+',
                    action: ()=>document.body.style.zoom = '110%'
                },
                {
                    label: 'Zoom Out',
                    shortcut: '⌘-',
                    action: ()=>document.body.style.zoom = '90%'
                },
                {
                    label: 'Actual Size',
                    shortcut: '⌘0',
                    action: ()=>document.body.style.zoom = '100%'
                }
            ]
        },
        {
            label: 'Developers',
            items: [
                {
                    label: 'Developer Contracts',
                    href: '/contracts'
                },
                {
                    label: 'Open Tasks',
                    href: '/tasks'
                },
                {
                    label: 'Contributions',
                    href: '/contributions'
                },
                {
                    label: '$bSheets Token',
                    href: '/token'
                },
                {
                    divider: true
                },
                {
                    label: 'Documentation',
                    href: '/docs'
                },
                {
                    label: 'API Documentation',
                    action: ()=>console.log('API Documentation')
                },
                {
                    label: 'BSV SDK Docs',
                    href: 'https://docs.bsvblockchain.org'
                },
                {
                    label: 'HandCash SDK Docs',
                    href: 'https://docs.handcash.io'
                },
                {
                    divider: true
                },
                {
                    label: 'GitHub Repository',
                    href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet'
                },
                {
                    label: 'Report Issue',
                    href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/new'
                },
                {
                    label: 'Submit Pull Request',
                    href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pulls'
                },
                {
                    divider: true
                },
                {
                    label: 'Bitcoin Writer',
                    href: 'https://bitcoin-writer.vercel.app'
                },
                {
                    label: 'Bitcoin Drive',
                    href: 'https://bitcoin-drive.vercel.app'
                },
                {
                    label: 'BAP Executive Summary',
                    href: '/bap'
                }
            ]
        },
        {
            label: 'Window',
            items: [
                {
                    label: 'New Window',
                    shortcut: '⌘N',
                    action: ()=>window.open(window.location.href)
                },
                {
                    label: 'Minimize',
                    shortcut: '⌘M',
                    action: ()=>console.log('Minimize')
                },
                {
                    label: 'Zoom',
                    action: ()=>console.log('Zoom')
                },
                {
                    divider: true
                },
                {
                    label: 'Bring All to Front',
                    action: ()=>console.log('Bring to front')
                }
            ]
        },
        {
            label: 'Help',
            items: [
                {
                    label: 'Bitcoin Spreadsheets Help',
                    shortcut: '⌘?',
                    action: ()=>alert(`Bitcoin Spreadsheets v1.0

Secure, encrypted spreadsheets on the blockchain

© 2025 THE BITCOIN CORPORATION LTD
UK Company No. 16735102`)
                },
                {
                    label: 'Keyboard Shortcuts',
                    action: ()=>console.log('Show keyboard shortcuts')
                },
                {
                    label: 'Function List',
                    action: ()=>console.log('Show function list')
                },
                {
                    divider: true
                },
                {
                    label: 'Release Notes',
                    href: '/releases'
                },
                {
                    label: 'What\'s New',
                    action: ()=>alert(`What\'s New in v1.0:

• Handsontable integration
• Dark mode support
• Formula support with HyperFormula
• Blockchain storage
• HandCash authentication

© 2025 THE BITCOIN CORPORATION LTD`)
                },
                {
                    divider: true
                },
                {
                    label: 'Report an Issue',
                    href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues'
                },
                {
                    label: 'Contact @b0ase',
                    href: 'https://twitter.com/b0ase'
                }
            ]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CleanTaskbar.useEffect": ()=>{
            const handleResize = {
                "CleanTaskbar.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["CleanTaskbar.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "CleanTaskbar.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["CleanTaskbar.useEffect"];
        }
    }["CleanTaskbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CleanTaskbar.useEffect": ()=>{
            const handleClickOutside = {
                "CleanTaskbar.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setActiveMenu(null);
                        setShowBitcoinSuite(false);
                    }
                }
            }["CleanTaskbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "CleanTaskbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["CleanTaskbar.useEffect"];
        }
    }["CleanTaskbar.useEffect"], []);
    const openBitcoinApp = (appName)=>{
        // Handle opening other Bitcoin apps
        switch(appName){
            case 'writer':
                window.open('https://bitcoin-writer.vercel.app', '_blank');
                break;
            case 'drive':
                window.open('https://bitcoin-drive.vercel.app', '_blank');
                break;
            default:
                console.log(`Opening ${appName}`);
        }
    };
    // Mobile taskbar
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: menuRef,
            className: "taskbar-mobile",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveMenu(activeMenu === 'file' ? null : 'file'),
                    className: `taskbar-mobile-btn ${activeMenu === 'file' ? 'active' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13 2v7h7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "File"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveMenu(activeMenu === 'edit' ? null : 'edit'),
                    className: `taskbar-mobile-btn ${activeMenu === 'edit' ? 'active' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Edit"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.dispatchEvent(new CustomEvent('openSpreadsheetExchange')),
                    className: "taskbar-mobile-btn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "8",
                                    r: "7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 1v14M5 5h14"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8.21 13.89L7 23l5-3 5 3-1.21-9.11"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Exchange"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleDarkMode,
                    className: "taskbar-mobile-btn",
                    children: [
                        isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 1v6M12 17v6M4.22 4.22l4.24 4.24M14.46 14.46l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M14.46 9.54l4.24-4.24"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 421,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Theme"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveMenu(activeMenu === 'more' ? null : 'more'),
                    className: `taskbar-mobile-btn ${activeMenu === 'more' ? 'active' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "5",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "19",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "More"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 427,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "taskbar-mobile-menu-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "taskbar-mobile-menu-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "taskbar-mobile-menu-title",
                                children: activeMenu === 'file' ? 'File' : activeMenu === 'edit' ? 'Edit' : activeMenu === 'more' ? 'More Options' : activeMenu
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeMenu === 'file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "taskbar-mobile-menu-items",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onNewSpreadsheet?.();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "New Spreadsheet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 450,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSaveSpreadsheet?.();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 451,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onImport?.();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Import"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 452,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onExport?.();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Export"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 453,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 449,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeMenu === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "taskbar-mobile-menu-items",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].undo();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Undo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 458,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].redo();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Redo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 459,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].copySelection();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Copy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 460,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$SpreadsheetUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpreadsheetUtils"].pasteSelection();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Paste"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 461,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 457,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeMenu === 'more' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "taskbar-mobile-menu-items",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            router.push('/docs');
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Documentation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 466,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            router.push('/token');
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "$bSheets Token"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 467,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            router.push('/tasks');
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 468,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            router.push('/contributions');
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        children: "Contributions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 469,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onLogout?.();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        style: {
                                            background: 'rgba(255, 0, 0, 0.1)',
                                            color: '#ff6666'
                                        },
                                        children: "Sign Out"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 471,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.querySelector('.login-btn')?.click();
                                            setActiveMenu(null);
                                        },
                                        className: "taskbar-mobile-menu-item",
                                        style: {
                                            background: 'rgba(66, 133, 244, 0.1)',
                                            color: '#4285F4'
                                        },
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 473,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 465,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 442,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                    lineNumber: 441,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/CleanTaskbar.tsx",
            lineNumber: 371,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Desktop taskbar
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuRef,
        className: "taskbar-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    marginLeft: '18px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowBitcoinSuite(!showBitcoinSuite);
                            setActiveMenu(null);
                        },
                        className: `bitcoin-suite-btn ${showBitcoinSuite ? 'active' : ''}`,
                        title: "Bitcoin Suite Apps",
                        children: "₿"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showBitcoinSuite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bitcoin-suite-dropdown",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.bitcoinapps.store",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "bitcoin-app-store-link",
                                children: "Bitcoin Apps →"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                {
                                    name: 'Bitcoin Auth',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Chat',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Domains',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Draw',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Drive',
                                    color: '#22c55e',
                                    href: 'https://bitcoin-drive.vercel.app'
                                },
                                {
                                    name: 'Bitcoin Email',
                                    color: '#06b6d4'
                                },
                                {
                                    name: 'Bitcoin Exchange',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Music',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Paint',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Pics',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Registry',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Shares',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Spreadsheets',
                                    color: '#3b82f6',
                                    active: true
                                },
                                {
                                    name: 'Bitcoin Video',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Wallet',
                                    color: '#666666',
                                    comingSoon: true
                                },
                                {
                                    name: 'Bitcoin Writer',
                                    color: '#1976d2',
                                    href: 'https://bitcoin-writer.vercel.app'
                                }
                            ].map((app)=>app.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: app.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `bitcoin-app-item ${app.active ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: app.color,
                                                marginRight: '12px',
                                                fontSize: '16px',
                                                fontWeight: 'bold'
                                            },
                                            children: "₿"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 541,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        app.name,
                                        app.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 'auto',
                                                fontSize: '10px',
                                                opacity: 0.6
                                            },
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 543,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, app.name, true, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 534,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!app.active && !app.comingSoon) {
                                            console.log(`Opening ${app.name}`);
                                        }
                                        if (!app.comingSoon) {
                                            setShowBitcoinSuite(false);
                                        }
                                    },
                                    className: `bitcoin-app-item ${app.active ? 'active' : ''}`,
                                    disabled: app.active || app.comingSoon,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: app.color,
                                                marginRight: '12px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                opacity: app.comingSoon ? 0.5 : 1
                                            },
                                            children: "₿"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 559,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            },
                                            children: app.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        app.comingSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '10px',
                                                opacity: 0.5,
                                                marginLeft: 'auto'
                                            },
                                            children: "(coming soon)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 561,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        app.active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 'auto',
                                                fontSize: '10px',
                                                opacity: 0.6
                                            },
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 562,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, app.name, true, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 546,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-bar",
                children: menus.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveMenu(activeMenu === menu.label ? null : menu.label),
                                onMouseEnter: ()=>activeMenu && setActiveMenu(menu.label),
                                className: `menu-btn ${activeMenu === menu.label ? 'active' : ''}`,
                                children: menu.label
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeMenu === menu.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-dropdown",
                                children: menu.items.map((item, index)=>item.divider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-item-divider"
                                    }, index, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 587,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "menu-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                                lineNumber: 599,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    opacity: 0.6,
                                                    fontSize: '12px'
                                                },
                                                children: item.shortcut
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                                lineNumber: 601,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 592,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            item.action?.();
                                            setActiveMenu(null);
                                        },
                                        className: "menu-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                                lineNumber: 614,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    opacity: 0.6,
                                                    fontSize: '12px'
                                                },
                                                children: item.shortcut
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                                lineNumber: 616,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 605,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 584,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, menu.label, true, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                lineNumber: 571,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "taskbar-status-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "taskbar-status-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "taskbar-status-link",
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = '0.9',
                                title: "GitHub Repository",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/docs",
                                className: "taskbar-status-link",
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = '0.9',
                                title: "Developer Docs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 2v6h6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 13H8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 17H8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 658,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 9H8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/token",
                                className: "taskbar-status-link",
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = '0.9',
                                title: "$bSheets Token",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 672,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 6v12M9 9h6c0.83 0 1.5.67 1.5 1.5S15.83 12 15 12H9h6c0.83 0 1.5.67 1.5 1.5S15.83 15 15 15H9",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contributions",
                                className: "taskbar-status-link",
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = '0.9',
                                title: "Contributors Leaderboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "3",
                                            y: "11",
                                            width: "4",
                                            height: "10",
                                            rx: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "6",
                                            width: "4",
                                            height: "15",
                                            rx: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "17",
                                            y: "8",
                                            width: "4",
                                            height: "13",
                                            rx: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "taskbar-separator"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CleanTaskbar.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAuthenticated && currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentUser.handle || 'Connected'
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 696,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-indicator-connected",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Not Connected"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 701,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-indicator-disconnected",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                                lineNumber: 702,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CleanTaskbar.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/CleanTaskbar.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CleanTaskbar, "LOqX/ozleHAJz+q0sWRRphHbyc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CleanTaskbar;
const __TURBOPACK__default__export__ = CleanTaskbar;
var _c;
__turbopack_context__.k.register(_c, "CleanTaskbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CleanTaskbar.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ui/CleanTaskbar.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_cf6eda72._.js.map