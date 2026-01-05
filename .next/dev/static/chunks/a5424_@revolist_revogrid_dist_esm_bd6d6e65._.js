(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/throttle-DcjZyclk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L",
    ()=>LocalScrollTimer,
    "a",
    ()=>LocalScrollService,
    "g",
    ()=>getContentSize,
    "t",
    ()=>throttle
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-client] (ecmascript)");
;
;
const initialParams = {
    contentSize: 0,
    clientSize: 0,
    virtualSize: 0,
    maxSize: 0
};
const NO_COORDINATE = -1;
/**
 * Based on content size, client size and virtual size
 * return full size
 */ function getContentSize(contentSize, clientSize, virtualSize = 0) {
    if (virtualSize > contentSize) {
        return 0;
    }
    return contentSize + (virtualSize ? clientSize - virtualSize : 0);
}
class LocalScrollService {
    constructor(cfg){
        this.cfg = cfg;
        this.preventArtificialScroll = {
            rgRow: null,
            rgCol: null
        };
        // to check if scroll changed
        this.previousScroll = {
            rgRow: NO_COORDINATE,
            rgCol: NO_COORDINATE
        };
        this.params = {
            rgRow: Object.assign({}, initialParams),
            rgCol: Object.assign({}, initialParams)
        };
    }
    setParams(params, dimension) {
        const virtualContentSize = getContentSize(params.contentSize, params.clientSize, params.virtualSize);
        this.params[dimension] = Object.assign(Object.assign({}, params), {
            maxSize: virtualContentSize - params.clientSize,
            virtualContentSize
        });
    }
    // apply scroll values after scroll done
    async setScroll(e) {
        this.cancelScroll(e.dimension);
        // start frame animation
        const frameAnimation = new Promise((resolve, reject)=>{
            // for example safari desktop has issues with animation frame
            if (this.cfg.skipAnimationFrame) {
                return resolve();
            }
            const animationId = window.requestAnimationFrame(()=>{
                resolve();
            });
            this.preventArtificialScroll[e.dimension] = reject.bind(null, animationId);
        });
        try {
            await frameAnimation;
            const params = this.getParams(e.dimension);
            e.coordinate = Math.ceil(e.coordinate);
            this.previousScroll[e.dimension] = this.wrapCoordinate(e.coordinate, params);
            this.preventArtificialScroll[e.dimension] = null;
            this.cfg.applyScroll(Object.assign(Object.assign({}, e), {
                coordinate: params.virtualSize ? this.convert(e.coordinate, params, false) : e.coordinate
            }));
        } catch (id) {
            window.cancelAnimationFrame(id);
        }
    }
    /**
     * On scroll event started
     */ scroll(coordinate, dimension, force = false, delta, outside = false) {
        // cancel all previous scrolls for same dimension
        this.cancelScroll(dimension);
        // drop if no change
        if (!force && this.previousScroll[dimension] === coordinate) {
            this.previousScroll[dimension] = NO_COORDINATE;
            return;
        }
        const param = this.getParams(dimension);
        // let component know about scroll event started
        this.cfg.runScroll({
            dimension: dimension,
            coordinate: param.virtualSize ? this.convert(coordinate, param) : coordinate,
            delta,
            outside
        });
    }
    getParams(dimension) {
        return this.params[dimension];
    }
    // check if scroll outside of region to avoid looping
    wrapCoordinate(c, param) {
        if (c < 0) {
            return NO_COORDINATE;
        }
        if (typeof param.maxSize === 'number' && c > param.maxSize) {
            return param.maxSize;
        }
        return c;
    }
    // prevent already started scroll, performance optimization
    cancelScroll(dimension) {
        var _a, _b;
        (_b = (_a = this.preventArtificialScroll)[dimension]) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.preventArtificialScroll[dimension] = null;
    }
    /* convert virtual to real and back, scale range */ convert(pos, param, toReal = true) {
        var _a;
        const minRange = param.clientSize;
        const from = [
            0,
            ((_a = param.virtualContentSize) !== null && _a !== void 0 ? _a : minRange) - minRange
        ];
        const to = [
            0,
            param.contentSize - param.virtualSize
        ];
        if (toReal) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(pos, from, to);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"])(pos, to, from);
    }
}
/**
 * Apply changes only if mousewheel event happened some time ago (scrollThrottling)
 */ class LocalScrollTimer {
    constructor(scrollThrottling = 10){
        this.scrollThrottling = scrollThrottling;
        /**
         * Last mw event time for trigger scroll function below
         * If mousewheel function was ignored we still need to trigger render
         */ this.mouseWheelScrollTimestamp = {
            rgCol: 0,
            rgRow: 0
        };
        this.lastKnownScrollCoordinate = {
            rgCol: 0,
            rgRow: 0
        };
        /**
         * Check if scroll is ready to accept new value
         * this is an edge case for scroll events
         * when we need to apply scroll after throttling
         */ this.lastScrollUpdateCallbacks = {};
    }
    setCoordinate(e) {
        this.lastKnownScrollCoordinate[e.dimension] = e.coordinate;
    }
    /**
     * Remember last mw event time
     */ latestScrollUpdate(dimension) {
        this.mouseWheelScrollTimestamp[dimension] = new Date().getTime();
    }
    isReady(type, coordinate) {
        // if there is a callback, clear it
        if (this.lastScrollUpdateCallbacks[type]) {
            this.clearLastScrollUpdate(type);
        }
        // apply after throttling
        return this.verifyChange(type, coordinate);
    }
    verifyChange(type, coordinate) {
        const now = new Date().getTime();
        const change = now - this.mouseWheelScrollTimestamp[type];
        return change > this.scrollThrottling && coordinate !== this.lastKnownScrollCoordinate[type];
    }
    clearLastScrollUpdate(type) {
        var _a, _b;
        clearTimeout((_b = (_a = this.lastScrollUpdateCallbacks[type]) === null || _a === void 0 ? void 0 : _a.timeout) !== null && _b !== void 0 ? _b : 0);
        delete this.lastScrollUpdateCallbacks[type];
    }
    throttleLastScrollUpdate(type, coordinate, lastScrollUpdate) {
        // if scrollThrottling is set
        // we need to throttle the last scroll event
        if (this.scrollThrottling) {
            this.clearLastScrollUpdate(type);
            // save lastScrollUpdate callback
            const callback = this.lastScrollUpdateCallbacks[type] = {
                callback: lastScrollUpdate,
                timestamp: new Date().getTime(),
                coordinate,
                timeout: 0
            };
            callback.timeout = setTimeout(()=>{
                // clear timeout
                this.clearLastScrollUpdate(type);
                // if scrollThrottling is set, and the last scroll event happened before the timeout started
                // we need to throttle the last scroll event
                if (this.mouseWheelScrollTimestamp[type] < callback.timestamp && this.verifyChange(type, callback.coordinate)) {
                    callback.callback();
                }
            }, this.scrollThrottling + 50);
        }
    }
}
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
    });
}
;
 //# sourceMappingURL=throttle-DcjZyclk.js.map
 //# sourceMappingURL=throttle-DcjZyclk.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/viewport.helpers-VXhsJZtn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>CONTENT_SLOT,
    "D",
    ()=>DATA_SLOT,
    "F",
    ()=>FOOTER_SLOT,
    "H",
    ()=>HEADER_SLOT,
    "v",
    ()=>viewportDataPartition
]);
/*!
 * Built by Revolist OU ❤️
 */ /**
 * Collects data for pinned columns in the required @ViewportProps format.
 */ /**
 * Represents the slot names for the viewport slots.
 */ const HEADER_SLOT = 'header'; // Slot name for the header slot
const FOOTER_SLOT = 'footer'; // Slot name for the footer slot
const CONTENT_SLOT = 'content'; // Slot name for the content slot
const DATA_SLOT = 'data'; // Slot name for the data slot
/**
 * Returns the last visible cell in the viewport for a given row type.
 * Coordinates are not zero-based and are relative to the viewport.
 * If needed to be zero-based they can be adjusted by subtracting 1.
 */ function getLastCell(data, rowType) {
    // Get the last visible column count from the viewport column data.
    const lastVisibleColumnCount = data.viewports[data.colType].store.get('realCount');
    // Get the last visible row count for the given row type from the viewport column data.
    const lastVisibleRowCount = data.viewports[rowType].store.get('realCount');
    // Return the last visible cell with the last visible column count and row count.
    return {
        x: lastVisibleColumnCount,
        y: lastVisibleRowCount
    };
}
function viewportDataPartition(data, type, slot, fixed) {
    return {
        colData: data.colStore,
        viewportCol: data.viewports[data.colType].store,
        viewportRow: data.viewports[type].store,
        /**
         * lastCell is the last real coordinate + 1, saved to selection store
         */ lastCell: getLastCell(data, type),
        slot,
        type,
        canDrag: !fixed,
        position: data.position,
        dataStore: data.rowStores[type].store,
        dimensionCol: data.dimensions[data.colType].store,
        dimensionRow: data.dimensions[type].store,
        style: fixed ? {
            height: `${data.dimensions[type].store.get('realSize')}px`
        } : undefined
    };
}
;
 //# sourceMappingURL=viewport.helpers-VXhsJZtn.js.map
 //# sourceMappingURL=viewport.helpers-VXhsJZtn.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-data_4.entry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revogr_data",
    ()=>RevogrData,
    "revogr_header",
    ()=>RevogrHeaderComponent,
    "revogr_viewport_scroll",
    ()=>RevogrViewportScroll,
    "vnode_html",
    ()=>VNodeToHtml
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/cell-renderer-ePazz-Zt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/filter.button-DmOE7VCJ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/header-cell-renderer-DNIoql0s.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$throttle$2d$DcjZyclk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/throttle-DcjZyclk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$helpers$2d$VXhsJZtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/viewport.helpers-VXhsJZtn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Class is responsible for highlighting rows in a table.
 */ class RowHighlightPlugin {
    constructor(){
        this.currentRange = null;
    }
    selectionChange(e, renderedRows) {
        // clear previous range
        if (this.currentRange) {
            renderedRows.forEach((row, y)=>{
                var _a;
                // skip current range
                if (e && y >= e.y && y <= e.y1) {
                    return;
                }
                // clear previous range
                if (row && row.$elm$ instanceof HTMLElement && row.$elm$.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])) {
                    row.$elm$.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"]);
                    if ((_a = row.$attrs$) === null || _a === void 0 ? void 0 : _a.class.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])) {
                        row.$attrs$.class = row.$attrs$.class.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"], '');
                    }
                }
            });
        }
        // apply new range
        if (e) {
            for(let y = e.y; y <= e.y1; y++){
                const row = renderedRows.get(y);
                if (row && row.$elm$ instanceof HTMLElement && !row.$elm$.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"])) {
                    const attrs = row.$attrs$ = row.$attrs$ || {};
                    attrs.class = (attrs.class || '') + ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"];
                    row.$elm$.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"]);
                }
            }
        }
        this.currentRange = e;
    }
    isRowFocused(y) {
        return this.currentRange && y >= this.currentRange.y && y <= this.currentRange.y1;
    }
}
/**
 * Converts a VNode element into an HTML element and appends it to the specified parentHolder.
 */ function convertVNodeToHTML(parentHolder, redraw) {
    return new Promise((resolve)=>{
        const vnode = document.createElement('vnode-html');
        parentHolder.appendChild(vnode);
        vnode.redraw = redraw;
        vnode.addEventListener('html', (e)=>{
            vnode.remove();
            resolve(e.detail);
        });
    });
}
const revogrDataStyleCss = ".revo-drag-icon{width:11px;opacity:0.8}.revo-drag-icon::before{content:\"::\";display:inline-block}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}revogr-data{display:block;width:100%;position:relative}revogr-data .rgRow{position:absolute;width:100%;left:0}revogr-data .rgRow.groupingRow{font-weight:600;text-align:left}revogr-data .rgRow.groupingRow .group-expand{width:25px;height:100%;max-height:25px;margin-right:2px;background-color:transparent;border-color:transparent;vertical-align:middle;padding-left:5px;display:inline-flex}revogr-data .rgRow.groupingRow .group-expand svg{width:7px}revogr-data .revo-draggable{border:none;height:32px;display:inline-flex;outline:0;padding:0;font-size:0.8125rem;box-sizing:border-box;align-items:center;white-space:nowrap;vertical-align:middle;justify-content:center;text-decoration:none;width:24px;height:100%;cursor:pointer;display:inline-flex}revogr-data .revo-draggable:hover>.revo-drag-icon{opacity:1;zoom:1.2;font-weight:600}revogr-data .revo-draggable>.revo-drag-icon{pointer-events:none;transition:opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, zoom 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}revogr-data .rgCell{top:0;left:0;position:absolute;box-sizing:border-box;height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;outline:none}revogr-data .rgCell.align-center{text-align:center}revogr-data .rgCell.align-left{text-align:left}revogr-data .rgCell.align-right{text-align:right}";
const RevogrData = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.beforerowrender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforerowrender", 7);
        this.afterrender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "afterrender", 7);
        this.beforeCellRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforecellrender", 7);
        this.beforeDataRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforedatarender", 7);
        this.dragStartCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "dragstartcell", 7);
        /**
         * Prevent rendering until job is done.
         * Can be used for initial rendering performance improvement.
         * When several plugins require initial rendering this will prevent double initial rendering.
         */ this.jobsBeforeRender = [];
        /**
         * Rendered rows - virtual index vs vnode
         */ this.renderedRows = new Map();
    }
    /**
     * Pointed cell update.
     */ async updateCell(e) {
        var _a, _b, _c;
        // Stencil tweak to update cell content
        const cell = (_b = (_a = this.renderedRows.get(e.row)) === null || _a === void 0 ? void 0 : _a.$children$) === null || _b === void 0 ? void 0 : _b[e.col];
        if ((_c = cell === null || cell === void 0 ? void 0 : cell.$attrs$) === null || _c === void 0 ? void 0 : _c.redraw) {
            const children = await convertVNodeToHTML(this.element, cell.$attrs$.redraw);
            cell.$elm$.innerHTML = children.html;
            cell.$key$ = Math.random();
        }
    }
    onDataStoreChange() {
        this.onStoreChange();
    }
    onColDataChange() {
        this.onStoreChange();
    }
    onStoreChange() {
        var _a, _b;
        (_a = this.columnService) === null || _a === void 0 ? void 0 : _a.destroy();
        this.columnService = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"](this.dataStore, this.colData);
        // make sure we have correct data, before render
        this.providers = {
            type: this.type,
            colType: this.colType,
            readonly: this.readonly,
            data: this.dataStore,
            columns: this.colData,
            viewport: this.viewportCol,
            dimension: this.dimensionRow,
            selection: this.rowSelectionStore
        };
        (_b = this.rangeUnsubscribe) === null || _b === void 0 ? void 0 : _b.call(this);
        this.rangeUnsubscribe = this.rowSelectionStore.onChange('range', (e)=>this.rowHighlightPlugin.selectionChange(e, this.renderedRows));
    }
    connectedCallback() {
        this.rowHighlightPlugin = new RowHighlightPlugin();
        this.onStoreChange();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.columnService) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.rangeUnsubscribe) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    async componentWillRender() {
        this.beforeDataRender.emit({
            rowType: this.type,
            colType: this.colType
        });
        return Promise.all(this.jobsBeforeRender.map((p)=>typeof p === 'function' ? p() : p));
    }
    componentDidRender() {
        this.afterrender.emit({
            type: this.type
        });
    }
    render() {
        this.renderedRows = new Map();
        const columnsData = this.columnService.columns;
        if (!columnsData.length) {
            return;
        }
        const rows = this.viewportRow.get('items');
        if (!rows.length) {
            return;
        }
        const cols = this.viewportCol.get('items');
        if (!cols.length) {
            return;
        }
        const rowsEls = [];
        const depth = this.dataStore.get('groupingDepth');
        const groupingCustomRenderer = this.dataStore.get('groupingCustomRenderer');
        const groupDepth = this.columnService.hasGrouping ? depth : 0;
        for (let rgRow of rows){
            const dataItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this.dataStore, rgRow.itemIndex);
            // #region Grouping
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(dataItem)) {
                const gmodel = Object.assign(Object.assign({}, rgRow), {
                    index: rgRow.itemIndex,
                    model: dataItem,
                    groupingCustomRenderer,
                    // Only show expand button if grouping is enabled and not in row headers
                    hasExpand: this.columnService.hasGrouping && this.colType !== 'rowHeaders',
                    columnItems: cols,
                    providers: this.providers
                });
                rowsEls.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G"], Object.assign({}, gmodel)));
                continue;
            }
            // #endregion
            const cells = [];
            // #region Cells
            for (let rgCol of cols){
                const smodel = Object.assign(Object.assign({}, this.columnService.rowDataModel(rgRow.itemIndex, rgCol.itemIndex)), {
                    providers: this.providers
                });
                // call before cell render
                const cellEvent = this.triggerBeforeCellRender(smodel, rgRow, rgCol);
                // if event was prevented
                if (cellEvent.defaultPrevented) {
                    continue;
                }
                const { detail: { column: columnProps, row: rowProps, model: schemaModel } } = cellEvent;
                const defaultProps = {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"]]: columnProps.itemIndex,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"]]: rowProps.itemIndex,
                    style: {
                        width: `${columnProps.size}px`,
                        transform: `translateX(${columnProps.start}px)`,
                        height: rowProps.size ? `${rowProps.size}px` : undefined
                    }
                };
                /**
                 * For grouping, can be removed in the future and replaced with event
                 */ if (groupDepth && !columnProps.itemIndex && defaultProps.style) {
                    defaultProps.style.paddingLeft = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"] * groupDepth}px`;
                }
                const props = this.columnService.mergeProperties(rowProps.itemIndex, columnProps.itemIndex, defaultProps, schemaModel);
                // Never use webcomponent for cell render
                // It's very slow because of webcomponent initialization takes time
                const cellNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"], {
                    renderProps: {
                        schemaModel,
                        additionalData: this.additionalData,
                        dragStartCell: this.dragStartCell
                    },
                    cellProps: props
                });
                cells.push(cellNode);
            }
            // #endregion
            // #region Rows
            let rowClass = this.rowClass ? this.columnService.getRowClass(rgRow.itemIndex, this.rowClass) : '';
            if (this.rowHighlightPlugin.isRowFocused(rgRow.itemIndex)) {
                rowClass += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Q"]}`;
            }
            const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["R"], {
                index: rgRow.itemIndex,
                rowClass: rowClass,
                size: rgRow.size,
                start: rgRow.start
            }, cells);
            this.beforerowrender.emit({
                node: row,
                item: rgRow,
                model: dataItem,
                colType: this.columnService.type,
                rowType: this.type
            });
            rowsEls.push(row);
            this.renderedRows.set(rgRow.itemIndex, row);
        // #endregion
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("slot", null), rowsEls);
    }
    triggerBeforeCellRender(model, row, column) {
        const detail = {
            column,
            row,
            model,
            rowType: model.type,
            colType: model.colType
        };
        return this.beforeCellRender.emit(detail);
    }
    get element() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this);
    }
    static get watchers() {
        return {
            "dataStore": [
                "onDataStoreChange"
            ],
            "colData": [
                "onColDataChange"
            ]
        };
    }
};
RevogrData.style = revogrDataStyleCss;
var defineProperty = function() {
    try {
        var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a3"])(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        });
    } else {
        object[key] = value;
    }
}
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */ function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
}
/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */ function baseAggregator(collection, setter, iteratee, accumulator) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"])(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
    });
    return accumulator;
}
/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */ function createAggregator(setter, initializer) {
    return function(collection, iteratee) {
        var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Y"])(collection) ? arrayAggregator : baseAggregator, accumulator = {};
        return func(collection, setter, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a4"])(iteratee), accumulator);
    };
}
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */ var keyBy = createAggregator(function(result, value, key) {
    baseAssignValue(result, key, value);
});
const HeaderRenderer = (p)=>{
    var _a, _b, _c, _d, _e;
    const cellClass = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]]: true,
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"]]: !!((_a = p.data) === null || _a === void 0 ? void 0 : _a.sortable)
    };
    if ((_b = p.data) === null || _b === void 0 ? void 0 : _b.order) {
        cellClass[p.data.order] = true;
    }
    const dataProps = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"]]: p.column.itemIndex,
        canResize: p.canResize,
        minWidth: ((_c = p.data) === null || _c === void 0 ? void 0 : _c.minSize) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"],
        maxWidth: (_d = p.data) === null || _d === void 0 ? void 0 : _d.maxSize,
        active: p.active || [
            'r'
        ],
        class: cellClass,
        style: {
            width: `${p.column.size}px`,
            transform: `translateX(${p.column.start}px)`
        },
        onResize: p.onResize,
        onDblClick (originalEvent) {
            var _a;
            (_a = p.onDblClick) === null || _a === void 0 ? void 0 : _a.call(p, {
                column: p.data,
                index: p.column.itemIndex,
                originalEvent,
                providers: p.data.providers
            });
        },
        onClick (originalEvent) {
            if (originalEvent.defaultPrevented || !p.onClick) {
                return;
            }
            p.onClick({
                column: p.data,
                index: p.column.itemIndex,
                originalEvent,
                providers: p.data.providers
            });
        }
    };
    if (p.range) {
        if (p.column.itemIndex >= p.range.x && p.column.itemIndex <= p.range.x1) {
            if (typeof dataProps.class === 'object') {
                dataProps.class[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["J"]] = true;
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"], {
        data: p.data,
        props: dataProps,
        additionalData: p.additionalData
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["S"], {
        column: p.data
    }), p.canFilter && ((_e = p.data) === null || _e === void 0 ? void 0 : _e.filter) !== false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"], {
        column: p.data
    }) : '');
};
const HeaderGroupRenderer = (p)=>{
    const groupProps = {
        canResize: p.canResize,
        minWidth: p.group.indexes.length * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["M"],
        maxWidth: 0,
        active: p.active || [
            'r'
        ],
        class: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]]: true
        },
        style: {
            transform: `translateX(${p.start}px)`,
            width: `${p.end - p.start}px`
        },
        onResize: p.onResize
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"], {
        data: Object.assign(Object.assign({}, p.group), {
            prop: '',
            providers: p.providers,
            index: p.start
        }),
        props: groupProps,
        additionalData: p.additionalData
    });
};
const revogrHeaderStyleCss = "@charset \"UTF-8\";revogr-header{position:relative;z-index:5;display:block}revogr-header .header-rgRow{display:block;position:relative}revogr-header .header-rgRow.group{z-index:0}revogr-header .group-rgRow{position:relative;overflow:hidden}revogr-header .rgHeaderCell{position:absolute;box-sizing:border-box;height:100%;z-index:1;display:flex}revogr-header .rgHeaderCell.align-center{text-align:center}revogr-header .rgHeaderCell.align-left{text-align:left}revogr-header .rgHeaderCell.align-right{text-align:right}revogr-header .rgHeaderCell.sortable{cursor:pointer}revogr-header .rgHeaderCell i.asc:after,revogr-header .rgHeaderCell i.desc:after{font-size:13px}revogr-header .rgHeaderCell i.asc:after{content:\"↑\"}revogr-header .rgHeaderCell i.desc:after{content:\"↓\"}revogr-header .rgHeaderCell.active{z-index:10}revogr-header .rgHeaderCell.active .resizable{background-color:deepskyblue}revogr-header .rgHeaderCell .header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}revogr-header .rgHeaderCell .resizable{display:block;position:absolute;z-index:90;touch-action:none;user-select:none}revogr-header .rgHeaderCell .resizable:hover{background-color:deepskyblue}revogr-header .rgHeaderCell>.resizable-r{cursor:ew-resize;width:6px;right:0;top:0;height:100%}revogr-header .rgHeaderCell>.resizable-rb{cursor:se-resize;width:6px;height:6px;right:0;bottom:0}revogr-header .rgHeaderCell>.resizable-b{cursor:s-resize;height:6px;bottom:0;width:100%;left:0}revogr-header .rgHeaderCell>.resizable-lb{cursor:sw-resize;width:6px;height:6px;left:0;bottom:0}revogr-header .rgHeaderCell>.resizable-l{cursor:w-resize;width:6px;left:0;height:100%;top:0}revogr-header .rgHeaderCell>.resizable-lt{cursor:nw-resize;width:6px;height:6px;left:0;top:0}revogr-header .rgHeaderCell>.resizable-t{cursor:n-resize;height:6px;top:0;width:100%;left:0}revogr-header .rgHeaderCell>.resizable-rt{cursor:ne-resize;width:6px;height:6px;right:0;top:0}revogr-header .rv-filter{visibility:hidden}";
const RevogrHeaderComponent = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.initialHeaderClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforeheaderclick", 7);
        this.headerresize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "headerresize", 7);
        this.beforeResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforeheaderresize", 7);
        this.headerdblClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "headerdblclick", 7);
        this.beforeHeaderRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforeheaderrender", 7);
        this.beforeGroupHeaderRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "beforegroupheaderrender", 7);
        this.afterHeaderRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "afterheaderrender", 7);
        /**
         * Grouping depth, how many levels of grouping
         */ this.groupingDepth = 0;
        /**
         * Extra properties to pass into header renderer, such as vue or react components to handle parent
         */ this.additionalData = {};
    }
    onResize({ width }, index) {
        const col = this.colData[index];
        const event = this.beforeResize.emit([
            Object.assign(Object.assign({}, col), {
                size: width || undefined
            })
        ]);
        if (event.defaultPrevented) {
            return;
        }
        this.headerresize.emit({
            [index]: width || 0
        });
    }
    onResizeGroup(changedX, startIndex, endIndex) {
        const sizes = {};
        const cols = keyBy(this.viewportCol.get('items'), 'itemIndex');
        const change = changedX / (endIndex - startIndex + 1);
        for(let i = startIndex; i <= endIndex; i++){
            const item = cols[i];
            if (item) {
                sizes[i] = item.size + change;
            }
        }
        this.headerresize.emit(sizes);
    }
    componentDidRender() {
        this.afterHeaderRender.emit(this.providers);
    }
    render() {
        var _a;
        const cols = this.viewportCol.get('items');
        const range = (_a = this.selectionStore) === null || _a === void 0 ? void 0 : _a.get('range');
        const { cells } = this.renderHeaderColumns(cols, range);
        const groupRow = this.renderGroupingColumns();
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
                key: 'a8d57270f4758b454fb4900808453e0c4663c91c',
                class: "group-rgRow"
            }, groupRow),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
                key: '41a270ff6bde9943a81d9c46482f2a40312afb50',
                class: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]} ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"]}`
            }, cells)
        ];
    }
    renderHeaderColumns(cols, range) {
        const cells = [];
        for (let rgCol of cols){
            const colData = this.colData[rgCol.itemIndex];
            const props = {
                range,
                column: rgCol,
                data: Object.assign(Object.assign({}, colData), {
                    index: rgCol.itemIndex,
                    providers: this.providers
                }),
                canFilter: !!this.columnFilter,
                canResize: this.canResize,
                active: this.resizeHandler,
                additionalData: this.additionalData,
                onResize: (e)=>this.onResize(e, rgCol.itemIndex),
                onDblClick: (e)=>this.headerdblClick.emit(e),
                onClick: (e)=>this.initialHeaderClick.emit(e)
            };
            const event = this.beforeHeaderRender.emit(props);
            if (!event.defaultPrevented) {
                cells.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(HeaderRenderer, Object.assign({}, event.detail)));
            }
        }
        return {
            cells
        };
    }
    renderGroupingColumns() {
        var _a;
        const groupRow = [];
        for(let i = 0; i < this.groupingDepth; i++){
            if (this.groups[i]) {
                for (let group of this.groups[i]){
                    const groupStartIndex = (_a = group.indexes[0]) !== null && _a !== void 0 ? _a : -1;
                    if (groupStartIndex > -1) {
                        const groupEndIndex = groupStartIndex + group.indexes.length - 1;
                        const groupStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(this.dimensionCol.state, groupStartIndex).start;
                        const groupEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(this.dimensionCol.state, groupEndIndex).end;
                        const props = {
                            providers: this.providers,
                            start: groupStart,
                            end: groupEnd,
                            group,
                            active: this.resizeHandler,
                            canResize: this.canResize,
                            additionalData: this.additionalData,
                            onResize: (e)=>{
                                var _a;
                                return this.onResizeGroup((_a = e.changedX) !== null && _a !== void 0 ? _a : 0, groupStartIndex, groupEndIndex);
                            }
                        };
                        const event = this.beforeGroupHeaderRender.emit(props);
                        if (!event.defaultPrevented) {
                            groupRow.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(HeaderGroupRenderer, Object.assign({}, event.detail)));
                        }
                    }
                }
            }
            groupRow.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
                class: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]} group`
            }));
        }
        return groupRow;
    }
    get providers() {
        return {
            type: this.type,
            readonly: this.readonly,
            data: this.colData,
            viewport: this.viewportCol,
            dimension: this.dimensionCol,
            selection: this.selectionStore
        };
    }
    get element() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this);
    }
};
RevogrHeaderComponent.style = revogrHeaderStyleCss;
class GridResizeService {
    constructor(el, resize, elements){
        this.resize = resize;
        this.resizeObserver = null;
        this.previousSize = {
            width: 0,
            height: 0
        };
        this.apply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$throttle$2d$DcjZyclk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])((e)=>{
            var _a;
            const entry = {
                width: e.width,
                height: e.height
            };
            (_a = this.resize) === null || _a === void 0 ? void 0 : _a.call(this, entry, this.previousSize);
            this.previousSize = entry;
        }, 40, {
            leading: false,
            trailing: true
        });
        const extras = [];
        elements.forEach((element)=>{
            if (element) {
                extras.push(element);
            }
        });
        this.init(el, extras);
    }
    init(el, extras = []) {
        const observer = this.resizeObserver = new ResizeObserver((e)=>{
            if (e.length) {
                if (e[0].target === el) {
                    this.apply(e[0].contentRect);
                } else {
                    this.apply(el.getBoundingClientRect());
                }
            }
        });
        observer.observe(el);
        extras.forEach((extra)=>{
            observer.observe(extra);
        });
    }
    destroy() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.resizeObserver = null;
    }
}
const revogrViewportScrollStyleCss = ".rowHeaders{z-index:2;font-size:10px;display:flex;height:100%}.rowHeaders revogr-data .rgCell{text-align:center}.rowHeaders .rgCell{padding:0 1em !important;min-width:100%}revogr-viewport-scroll{-ms-overflow-style:none;scrollbar-width:none;overflow-x:auto;overflow-y:hidden;position:relative;z-index:1;height:100%}revogr-viewport-scroll::-webkit-scrollbar{display:none;-webkit-appearance:none}revogr-viewport-scroll.colPinStart,revogr-viewport-scroll.colPinEnd{z-index:2}revogr-viewport-scroll.colPinEnd:has(.active){overflow:visible}revogr-viewport-scroll.rgCol{flex-grow:1}revogr-viewport-scroll .content-wrapper{overflow:hidden}revogr-viewport-scroll .inner-content-table{display:flex;flex-direction:column;max-height:100%;width:100%;min-width:100%;position:relative;z-index:0}revogr-viewport-scroll .vertical-inner{overflow-y:auto;position:relative;width:100%;flex-grow:1;outline:none;-ms-overflow-style:none;scrollbar-width:none;}revogr-viewport-scroll .vertical-inner::-webkit-scrollbar{display:none;-webkit-appearance:none}revogr-viewport-scroll .vertical-inner revogr-data,revogr-viewport-scroll .vertical-inner revogr-overlay-selection{height:100%}";
const RevogrViewportScroll = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.scrollViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "scrollviewport", 7);
        this.resizeViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "resizeviewport", 7);
        this.scrollchange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "scrollchange", 7);
        this.silentScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "scrollviewportsilent", 7);
        /**
         * Width of inner content
         */ this.contentWidth = 0;
        /**
         * Height of inner content
         */ this.contentHeight = 0;
    }
    async setScroll(e) {
        var _a;
        this.localScrollTimer.latestScrollUpdate(e.dimension);
        (_a = this.localScrollService) === null || _a === void 0 ? void 0 : _a.setScroll(e);
    }
    /**
     * update on delta in case we don't know existing position or external change
     * @param e
     */ async changeScroll(e, silent = false) {
        var _a, _b;
        if (silent) {
            if (e.coordinate && this.verticalScroll) {
                switch(e.dimension){
                    // for mobile devices to skip negative scroll loop. only on vertical scroll
                    case 'rgRow':
                        this.verticalScroll.style.transform = `translateY(${-1 * e.coordinate}px)`;
                        break;
                }
            }
            return;
        }
        if (e.delta) {
            switch(e.dimension){
                case 'rgCol':
                    e.coordinate = this.horizontalScroll.scrollLeft + e.delta;
                    break;
                case 'rgRow':
                    e.coordinate = ((_b = (_a = this.verticalScroll) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0) + e.delta;
                    break;
            }
            this.setScroll(e);
        }
        return e;
    }
    /**
     * Dispatch this event to trigger vertical mouse wheel from plugins
     */ mousewheelVertical({ detail: e }) {
        this.verticalMouseWheel(e);
    }
    /**
     * Dispatch this event to trigger horizontal mouse wheel from plugins
     */ mousewheelHorizontal({ detail: e }) {
        this.horizontalMouseWheel(e);
    }
    /**
     * Allows to use outside listener
     */ scrollApply({ detail: { type, coordinate } }) {
        this.applyOnScroll(type, coordinate, true);
    }
    connectedCallback() {
        /**
         * Bind scroll functions for farther usage
         */ // allow mousewheel for all devices including mobile
        this.verticalMouseWheel = this.onVerticalMouseWheel.bind(this, 'rgRow', 'deltaY');
        this.horizontalMouseWheel = this.onHorizontalMouseWheel.bind(this, 'rgCol', 'deltaX');
        this.localScrollTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$throttle$2d$DcjZyclk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L"]('ontouchstart' in document.documentElement ? 0 : 10);
        /**
         * Create local scroll service
         */ this.localScrollService = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$throttle$2d$DcjZyclk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
            // to improve safari smoothnes on scroll
            // skipAnimationFrame: isSafariDesktop(),
            runScroll: (e)=>this.scrollViewport.emit(e),
            applyScroll: (e)=>{
                this.localScrollTimer.setCoordinate(e);
                switch(e.dimension){
                    case 'rgCol':
                        // this will trigger on scroll event
                        this.horizontalScroll.scrollLeft = e.coordinate;
                        break;
                    case 'rgRow':
                        if (this.verticalScroll) {
                            // this will trigger on scroll event
                            this.verticalScroll.scrollTop = e.coordinate;
                            // for mobile devices to skip negative scroll loop. only on vertical scroll
                            if (this.verticalScroll.style.transform) {
                                this.verticalScroll.style.transform = '';
                            }
                        }
                        break;
                }
            }
        });
    }
    componentDidLoad() {
        // track viewport resize
        this.resizeService = new GridResizeService(this.horizontalScroll, (entry)=>{
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const els = {};
            let calculatedHeight = entry.height || 0;
            if (calculatedHeight) {
                calculatedHeight -= ((_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = this.footer) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0);
            }
            els.rgRow = {
                size: calculatedHeight,
                contentSize: this.contentHeight,
                scroll: (_f = (_e = this.verticalScroll) === null || _e === void 0 ? void 0 : _e.scrollTop) !== null && _f !== void 0 ? _f : 0,
                noScroll: false
            };
            const calculatedWidth = entry.width || 0;
            els.rgCol = {
                size: calculatedWidth,
                contentSize: this.contentWidth,
                scroll: this.horizontalScroll.scrollLeft,
                noScroll: this.colType !== 'rgCol'
            };
            // Process changes in order: width first, then height
            const dimensions = [
                'rgCol',
                'rgRow'
            ];
            for (const dimension of dimensions){
                const item = els[dimension];
                if (!item) continue;
                this.resizeViewport.emit({
                    dimension,
                    size: item.size,
                    rowHeader: this.rowHeader
                });
                if (item.noScroll) {
                    continue;
                }
                (_g = this.localScrollService) === null || _g === void 0 ? void 0 : _g.scroll((_h = item.scroll) !== null && _h !== void 0 ? _h : 0, dimension, true);
                // track scroll visibility on outer element change
                this.setScrollVisibility(dimension, item.size, item.contentSize);
            }
        }, [
            this.footer,
            this.header
        ]);
    }
    /**
     * Check if scroll present or not per type
     * Trigger this method on inner content size change or on outer element size change
     * If inner content bigger then outer size then scroll is present and mousewheel binding required
     * @param type - dimension type 'rgRow/y' or 'rgCol/x'
     * @param size - outer content size
     * @param innerContentSize - inner content size
     */ setScrollVisibility(type, size, innerContentSize) {
        // test if scroll present
        const hasScroll = size < innerContentSize;
        let el;
        // event reference for binding
        switch(type){
            case 'rgCol':
                el = this.horizontalScroll;
                break;
            case 'rgRow':
                el = this.verticalScroll;
                break;
        }
        // based on scroll visibility assign or remove class and event
        if (hasScroll) {
            el === null || el === void 0 ? void 0 : el.classList.add(`scroll-${type}`);
        } else {
            el === null || el === void 0 ? void 0 : el.classList.remove(`scroll-${type}`);
        }
        this.scrollchange.emit({
            type,
            hasScroll
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeService) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    async componentDidRender() {
        var _a, _b, _c, _d;
        this.localScrollService.setParams({
            contentSize: this.contentHeight,
            clientSize: (_b = (_a = this.verticalScroll) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0,
            virtualSize: 0
        }, 'rgRow');
        this.localScrollService.setParams({
            contentSize: this.contentWidth,
            clientSize: this.horizontalScroll.clientWidth,
            virtualSize: 0
        }, 'rgCol');
        this.setScrollVisibility('rgRow', (_d = (_c = this.verticalScroll) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0, this.contentHeight);
        this.setScrollVisibility('rgCol', this.horizontalScroll.clientWidth, this.contentWidth);
    }
    render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"], {
            key: '2be96df29e23c7a681a45675567b5f168786cf92',
            onWheel: this.horizontalMouseWheel,
            onScroll: (e)=>this.applyScroll('rgCol', e)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
            key: '49152054dc9c8bdbffc430aa4ee2cf8c2732e05c',
            class: "inner-content-table",
            style: {
                width: `${this.contentWidth}px`
            }
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
            key: '6a2124ed6345021fbbfbd78607dc280918ef9bc5',
            class: "header-wrapper",
            ref: (e)=>this.header = e
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("slot", {
            key: '0a25f0620be889d87fbf81325ffb596919105f4d',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$helpers$2d$VXhsJZtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"]
        })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
            key: '7c986664c70ebc6f6d996864e591e484d709c3a5',
            class: "vertical-inner",
            ref: (el)=>this.verticalScroll = el,
            onWheel: this.verticalMouseWheel,
            onScroll: (e)=>this.applyScroll('rgRow', e)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
            key: 'bf810ecbb62b35334b24ab72292ae37866002cb9',
            class: "content-wrapper",
            style: {
                height: `${this.contentHeight}px`
            }
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("slot", {
            key: '7d0bf53549eb60d9e6942b05fe1037131562ca2e',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$helpers$2d$VXhsJZtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C"]
        }))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("div", {
            key: '78d8bdc545e220b324665b5331d902d887ea5e2b',
            class: "footer-wrapper",
            ref: (e)=>this.footer = e
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])("slot", {
            key: '76d5b39a94ba27411ca0b58e49714b21e0e837bf',
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$helpers$2d$VXhsJZtn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"]
        }))));
    }
    /**
     * Extra layer for scroll event monitoring, where MouseWheel event is not passing
     * We need to trigger scroll event in case there is no mousewheel event
     */ async applyScroll(type, e) {
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        let scroll = 0;
        switch(type){
            case 'rgCol':
                scroll = e.target.scrollLeft;
                break;
            case 'rgRow':
                scroll = e.target.scrollTop;
                break;
        }
        // for mobile devices to skip negative scroll loop
        if (scroll < 0) {
            this.silentScroll.emit({
                dimension: type,
                coordinate: scroll
            });
            return;
        }
        this.applyOnScroll(type, scroll);
    }
    /**
     * Applies change on scroll event only if mousewheel event happened some time ago
     */ applyOnScroll(type, coordinate, outside = false) {
        const lastScrollUpdate = ()=>{
            var _a;
            (_a = this.localScrollService) === null || _a === void 0 ? void 0 : _a.scroll(coordinate, type, undefined, undefined, outside);
        };
        // apply after throttling
        if (this.localScrollTimer.isReady(type, coordinate)) {
            lastScrollUpdate();
        } else {
            this.localScrollTimer.throttleLastScrollUpdate(type, coordinate, ()=>lastScrollUpdate());
        }
    }
    /**
     * On vertical mousewheel event
     * @param type
     * @param delta
     * @param e
     */ onVerticalMouseWheel(type, delta, e) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const scrollTop = (_b = (_a = this.verticalScroll) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
        const clientHeight = (_d = (_c = this.verticalScroll) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0;
        const scrollHeight = (_f = (_e = this.verticalScroll) === null || _e === void 0 ? void 0 : _e.scrollHeight) !== null && _f !== void 0 ? _f : 0;
        // Detect if the user has reached the bottom
        const atBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;
        const atTop = scrollTop === 0 && e.deltaY < 0;
        if (!atBottom && !atTop) {
            (_g = e.preventDefault) === null || _g === void 0 ? void 0 : _g.call(e);
        }
        const pos = scrollTop + e[delta];
        (_h = this.localScrollService) === null || _h === void 0 ? void 0 : _h.scroll(pos, type, undefined, e[delta]);
        this.localScrollTimer.latestScrollUpdate(type);
    }
    /**
     * On horizontal mousewheel event
     * @param type
     * @param delta
     * @param e
     */ onHorizontalMouseWheel(type, delta, e) {
        var _a, _b;
        if (!e.deltaX) {
            return;
        }
        const { scrollLeft, scrollWidth, clientWidth } = this.horizontalScroll;
        // Detect if the user has reached the right end
        const atRight = scrollLeft + clientWidth >= scrollWidth && e.deltaX > 0;
        // Detect if the user has reached the left end
        const atLeft = scrollLeft === 0 && e.deltaX < 0;
        if (!atRight && !atLeft) {
            (_a = e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
        }
        const pos = scrollLeft + e[delta];
        (_b = this.localScrollService) === null || _b === void 0 ? void 0 : _b.scroll(pos, type, undefined, e[delta]);
        this.localScrollTimer.latestScrollUpdate(type);
    }
    get horizontalScroll() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this);
    }
};
RevogrViewportScroll.style = revogrViewportScrollStyleCss;
const VNodeToHtml = class {
    constructor(hostRef){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])(this, hostRef);
        this.html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this, "html", 7);
        this.redraw = null;
        this.vnodes = [];
    }
    componentDidRender() {
        this.html.emit({
            html: this.el.innerHTML,
            vnodes: this.vnodes
        });
    }
    render() {
        var _a, _b;
        this.vnodes = (_b = (_a = this.redraw) === null || _a === void 0 ? void 0 : _a.call(this)) !== null && _b !== void 0 ? _b : null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H"], {
            key: '11b76ca8a86ebf279add88bbd86ef9eb5149605a',
            style: {
                visibility: 'hidden',
                position: 'absolute'
            }
        }, this.vnodes);
    }
    get el() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(this);
    }
};
;
 //# sourceMappingURL=revogr-data.revogr-header.revogr-viewport-scroll.vnode-html.entry.js.map
 //# sourceMappingURL=revogr-data_4.entry.js.map
}),
]);

//# sourceMappingURL=a5424_%40revolist_revogrid_dist_esm_bd6d6e65._.js.map