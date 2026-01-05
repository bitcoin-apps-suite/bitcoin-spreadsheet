module.exports = [
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-clipboard_3.entry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revogr_clipboard",
    ()=>Clipboard,
    "revogr_edit",
    ()=>RevoEdit,
    "revogr_order_editor",
    ()=>OrderEditor
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$text$2d$editor$2d$DlCRmV75$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/text-editor-DlCRmV75.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/edit.utils-B6bLKSQh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Clipboard = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.beforePaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "beforepaste", 7);
        this.beforePasteApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "beforepasteapply", 7);
        this.pasteRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "pasteregion", 7);
        this.afterPasteApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "afterpasteapply", 7);
        this.beforeCut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "beforecut", 7);
        this.clearRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "clearregion", 7);
        this.beforeCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "beforecopy", 7);
        this.beforeCopyApply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "beforecopyapply", 7);
        this.copyRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "copyregion", 7);
    }
    onPaste(e) {
        // if readonly do nothing
        if (this.readonly) {
            return;
        }
        const clipboardData = this.getData(e);
        const isHTML = ((clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.types.indexOf('text/html')) || -1) > -1;
        const data = (isHTML ? clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('text/html') : clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('text')) || '';
        const dataText = (clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('text')) || '';
        const beforePaste = this.beforePaste.emit({
            raw: data,
            dataText,
            isHTML,
            event: e
        });
        if (beforePaste.defaultPrevented) {
            return;
        }
        let parsedData;
        // if html, then search for table if no table fallback to regular text parsing
        if (beforePaste.detail.isHTML) {
            const table = this.htmlParse(beforePaste.detail.raw);
            // fallback to text if not possible to parse as html
            parsedData = table || this.textParse(dataText || '');
        } else {
            parsedData = this.textParse(beforePaste.detail.raw);
        }
        const beforePasteApply = this.beforePasteApply.emit({
            raw: data,
            parsed: parsedData,
            event: e
        });
        if (beforePasteApply.defaultPrevented) {
            return;
        }
        this.pasteRegion.emit(beforePasteApply.detail.parsed);
        // post paste action
        const afterPasteApply = this.afterPasteApply.emit({
            raw: data,
            parsed: parsedData,
            event: e
        });
        // keep default behavior if needed
        if (afterPasteApply.defaultPrevented) {
            return;
        }
        e.preventDefault();
    }
    /**
     * Listen to copy event and emit copy region event
     */ copyStarted(e) {
        const beforeCopy = this.beforeCopy.emit({
            event: e
        });
        if (beforeCopy.defaultPrevented) {
            return;
        }
        const data = this.getData(beforeCopy.detail.event);
        this.copyRegion.emit(data || undefined);
        e.preventDefault();
    }
    /**
     * Listen to copy event and emit copy region event
     */ cutStarted(e) {
        const beforeCut = this.beforeCut.emit({
            event: e
        });
        if (beforeCut.defaultPrevented) {
            return;
        }
        const data = this.getData(beforeCut.detail.event);
        this.copyStarted(e);
        // if readonly do nothing
        if (this.readonly) {
            return;
        }
        this.clearRegion.emit(data || undefined);
        e.preventDefault();
    }
    async doCopy(e, data) {
        const beforeCopyApply = this.beforeCopyApply.emit({
            event: e,
            data
        });
        if (beforeCopyApply.defaultPrevented) {
            return;
        }
        const parsed = data ? this.parserCopy(data) : '';
        e.setData('text/plain', parsed);
    }
    parserCopy(data) {
        return data.map((rgRow)=>rgRow.join('\t')).join('\n');
    }
    textParse(data) {
        const result = [];
        const rows = data.split(/\r\n|\n|\r/);
        for(let y in rows){
            result.push(rows[y].split('\t'));
        }
        return result;
    }
    htmlParse(data) {
        const result = [];
        const fragment = document.createRange().createContextualFragment(data);
        const table = fragment.querySelector('table');
        if (!table) {
            return null;
        }
        for (const rgRow of Array.from(table.rows)){
            result.push(Array.from(rgRow.cells).map((cell)=>cell.innerText));
        }
        return result;
    }
    getData(e) {
        return e.clipboardData || (window === null || window === void 0 ? void 0 : window.clipboardData);
    }
};
const revogrEditStyleCss = "revogr-edit{display:block;position:absolute;background-color:#fff}revogr-edit input{height:100%;width:100%;box-sizing:border-box}revogr-edit revo-dropdown{height:100%}revogr-edit revo-dropdown.shrink fieldset legend>span{display:none}";
const RevoEdit = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.cellEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "celleditinit", 7);
        this.closeEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "closeedit", 7);
        /**
         * Save on editor close. Defines if data should be saved on editor close.
         */ this.saveOnClose = false;
        this.currentEditor = null;
        this.preventSaveOnClose = false;
    }
    /**
     * Cancel pending changes flag. Editor will be closed without autosave.
     */ async cancelChanges() {
        this.preventSaveOnClose = true;
    }
    /**
     * Before editor got disconnected.
     * Can be triggered multiple times before actual disconnect.
     */ async beforeDisconnect() {
        var _a, _b;
        (_b = (_a = this.currentEditor) === null || _a === void 0 ? void 0 : _a.beforeDisconnect) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    onAutoSave() {
        var _a, _b, _c;
        this.preventSaveOnClose = true;
        const val = (_b = (_a = this.currentEditor) === null || _a === void 0 ? void 0 : _a.getValue) === null || _b === void 0 ? void 0 : _b.call(_a);
        // For Editor plugin internal usage.
        // When you want to prevent save and use custom save of your own.
        if ((_c = this.currentEditor) === null || _c === void 0 ? void 0 : _c.beforeAutoSave) {
            const canSave = this.currentEditor.beforeAutoSave(val);
            if (canSave === false) {
                return;
            }
        }
        this.onSave(val, true);
    }
    /**
     * Callback triggered when cell editor saved.
     * Closes editor when called.
     * @param preventFocus - if true, editor will not be closed & next cell will not be focused.
     */ onSave(val, preventFocus) {
        this.preventSaveOnClose = true;
        if (this.editCell) {
            this.cellEdit.emit({
                rgCol: this.editCell.x,
                rgRow: this.editCell.y,
                type: this.editCell.type,
                prop: this.editCell.prop,
                val,
                preventFocus
            });
        }
    }
    componentWillRender() {
        // Active editor present and not yet closed.
        if (this.currentEditor || !this.column) {
            return;
        }
        this.preventSaveOnClose = false;
        // Custom editor usage.
        // Start with TextEditor (editors/text.tsx) for Custom editor.
        // It can be class or function
        if (this.editor) {
            // if editor is constructible
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(this.editor)) {
                this.currentEditor = new this.editor(this.column, // save callback
                (e, preventFocus)=>{
                    this.onSave(e, preventFocus);
                }, // cancel callback
                (focusNext)=>{
                    this.preventSaveOnClose = true;
                    this.closeEdit.emit(focusNext);
                });
            // if editor is function
            } else {
                this.currentEditor = this.editor(this.column, // save callback
                (e, preventFocus)=>{
                    this.onSave(e, preventFocus);
                }, // cancel callback
                (focusNext)=>{
                    this.preventSaveOnClose = true;
                    this.closeEdit.emit(focusNext);
                });
            }
            return;
        }
        // Default text editor usage
        this.currentEditor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$text$2d$editor$2d$DlCRmV75$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"](this.column, (e, preventFocus)=>this.onSave(e, preventFocus));
    }
    componentDidRender() {
        var _a, _b;
        if (!this.currentEditor) {
            return;
        }
        this.currentEditor.element = this.element.firstElementChild;
        (_b = (_a = this.currentEditor).componentDidRender) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    disconnectedCallback() {
        var _a, _b;
        if (this.saveOnClose) {
            // Can not be cancelled by `preventSaveOnClose` prop.
            // Editor requires `getValue` to be able to save.
            if (!this.preventSaveOnClose) {
                this.onAutoSave();
            }
        }
        this.preventSaveOnClose = false;
        if (!this.currentEditor) {
            return;
        }
        (_b = (_a = this.currentEditor).disconnectedCallback) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.currentEditor.element = null;
        this.currentEditor = null;
    }
    render() {
        if (this.currentEditor) {
            this.currentEditor.editCell = this.editCell;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H"], {
                class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"]
            }, this.currentEditor.render(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"], this.additionalData));
        }
        return '';
    }
    get element() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(this);
    }
};
RevoEdit.style = revogrEditStyleCss;
class RowOrderService {
    constructor(config){
        this.config = config;
        this.currentCell = null;
        this.previousRow = null;
    }
    /** Drag finished, calculate and apply changes */ endOrder(e, data) {
        if (this.currentCell === null) {
            return;
        }
        const newRow = this.getCell(e, data);
        // if position changed
        if (newRow.y !== this.currentCell.y) {
            // rgRow dragged out table
            if (newRow.y < 0) {
                newRow.y = 0;
            } else if (newRow.y < this.currentCell.y) {
                newRow.y++;
            }
            this.config.positionChanged(this.currentCell.y, newRow.y);
        }
        this.clear();
    }
    /** Drag started, reserve initial cell for farther use */ startOrder(e, data) {
        this.currentCell = this.getCell(e, data);
        return this.currentCell;
    }
    move(y, data) {
        const rgRow = this.getRow(y, data);
        // if rgRow same as previous or below range (-1 = 0) do nothing
        if (this.previousRow === rgRow.itemIndex || rgRow.itemIndex < -1) {
            return null;
        }
        this.previousRow = rgRow.itemIndex;
        return rgRow;
    }
    /** Drag stopped, probably cursor outside of document area */ clear() {
        this.currentCell = null;
        this.previousRow = null;
    }
    /** Calculate cell based on x, y position */ getRow(y, { el, rows }) {
        const { top } = el.getBoundingClientRect();
        const topRelative = y - top;
        const rgRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(rows, topRelative);
        const absolutePosition = {
            itemIndex: rgRow.itemIndex,
            start: rgRow.start + top,
            end: rgRow.end + top
        };
        return absolutePosition;
    }
    /** Calculate cell based on x, y position */ getCell({ x, y }, { el, rows, cols }) {
        const { top, left } = el.getBoundingClientRect();
        const topRelative = y - top;
        const leftRelative = x - left;
        const rgRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(rows, topRelative);
        const rgCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(cols, leftRelative);
        return {
            x: rgCol.itemIndex,
            y: rgRow.itemIndex
        };
    }
}
const OrderEditor = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.rowDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "rowdragstartinit", 7);
        this.rowDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "rowdragendinit", 7);
        this.rowDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "rowdragmoveinit", 7);
        this.rowMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "rowdragmousemove", 7);
        this.rowDropped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "rowdropinit", 7);
        this.rowOrderChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(this, "roworderchange", 7);
        this.events = [];
        this.rowMoveFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])((y)=>{
            const rgRow = this.rowOrderService.move(y, this.getData());
            if (rgRow !== null) {
                this.rowDrag.emit(Object.assign(Object.assign({}, rgRow), {
                    rowType: this.rowType
                }));
            }
        }, 5);
    }
    // #endregion
    // #region Methods
    async dragStart(e) {
        e.originalEvent.preventDefault();
        // extra check if previous ended
        if (this.events.length) {
            this.clearOrder();
        }
        const data = this.getData();
        const cell = this.rowOrderService.startOrder(e.originalEvent, data);
        const pos = this.rowOrderService.getRow(e.originalEvent.y, data);
        const dragStartEvent = this.rowDragStart.emit({
            cell,
            text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"],
            pos,
            event: e.originalEvent,
            rowType: this.rowType,
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this.dataStore, pos.itemIndex)
        });
        if (dragStartEvent.defaultPrevented) {
            return;
        }
        const moveMove = (e)=>this.move(e);
        const mouseUp = (e)=>this.endOrder(e);
        const mouseLeave = ()=>this.clearOrder();
        this.events.push({
            name: 'mousemove',
            listener: moveMove
        }, {
            name: 'mouseup',
            listener: mouseUp
        }, {
            name: 'mouseleave',
            listener: mouseLeave
        });
        document.addEventListener('mousemove', moveMove);
        // Action finished inside of the document
        document.addEventListener('mouseup', mouseUp);
        document.addEventListener('mouseleave', mouseLeave);
    }
    async endOrder(e) {
        this.rowOrderService.endOrder(e, this.getData());
        this.clearOrder();
    }
    async clearOrder() {
        this.rowOrderService.clear();
        this.events.forEach((v)=>document.removeEventListener(v.name, v.listener));
        this.events.length = 0;
        this.rowDragEnd.emit({
            rowType: this.rowType
        });
    }
    // #endregion
    move({ x, y }) {
        this.rowMouseMove.emit({
            x,
            y,
            rowType: this.rowType
        });
        this.rowMoveFunc(y);
    }
    connectedCallback() {
        this.rowOrderService = new RowOrderService({
            positionChanged: (from, to)=>{
                const dropEvent = this.rowDropped.emit({
                    from,
                    to,
                    rowType: this.rowType
                });
                if (dropEvent.defaultPrevented) {
                    return;
                }
                this.rowOrderChange.emit(dropEvent.detail);
            }
        });
    }
    getData() {
        return {
            el: this.parent,
            rows: this.dimensionRow.state,
            cols: this.dimensionCol.state
        };
    }
};
;
 //# sourceMappingURL=revogr-clipboard.revogr-edit.revogr-order-editor.entry.js.map
 //# sourceMappingURL=revogr-clipboard_3.entry.js.map
}),
];

//# sourceMappingURL=a5424_%40revolist_revogrid_dist_esm_revogr-clipboard_3_entry_d8dd9a60.js.map