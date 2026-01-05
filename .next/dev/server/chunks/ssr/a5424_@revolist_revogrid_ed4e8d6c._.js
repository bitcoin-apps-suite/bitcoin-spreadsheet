module.exports = [
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>Build,
    "H",
    ()=>Host,
    "a",
    ()=>getRenderingRef,
    "b",
    ()=>bootstrapLazy,
    "c",
    ()=>createEvent,
    "f",
    ()=>forceUpdate,
    "g",
    ()=>getElement,
    "h",
    ()=>h,
    "p",
    ()=>promiseResolve,
    "r",
    ()=>registerInstance,
    "s",
    ()=>setNonce
]);
/*!
 * Built by Revolist OU ❤️
 */ const NAMESPACE = 'revo-grid';
const BUILD = /* revo-grid */ {
    hydratedSelectorName: "hydrated",
    lazyLoad: true,
    shadowDom: false,
    slotRelocation: true,
    updatable: true
};
/*
 Stencil Client Platform v4.36.3 | MIT Licensed | https://stenciljs.com
 */ var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var Build = {
    isDev: false
};
// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var PrimitiveType = /* @__PURE__ */ ((PrimitiveType2)=>{
    PrimitiveType2["Undefined"] = "undefined";
    PrimitiveType2["Null"] = "null";
    PrimitiveType2["String"] = "string";
    PrimitiveType2["Number"] = "number";
    PrimitiveType2["SpecialNumber"] = "number";
    PrimitiveType2["Boolean"] = "boolean";
    PrimitiveType2["BigInt"] = "bigint";
    return PrimitiveType2;
})(PrimitiveType || {});
var NonPrimitiveType = /* @__PURE__ */ ((NonPrimitiveType2)=>{
    NonPrimitiveType2["Array"] = "array";
    NonPrimitiveType2["Date"] = "date";
    NonPrimitiveType2["Map"] = "map";
    NonPrimitiveType2["Object"] = "object";
    NonPrimitiveType2["RegularExpression"] = "regexp";
    NonPrimitiveType2["Set"] = "set";
    NonPrimitiveType2["Channel"] = "channel";
    NonPrimitiveType2["Symbol"] = "symbol";
    return NonPrimitiveType2;
})(NonPrimitiveType || {});
var TYPE_CONSTANT = "type";
var VALUE_CONSTANT = "value";
var SERIALIZED_PREFIX = "serialized:";
// src/client/client-host-ref.ts
var getHostRef = (ref)=>{
    if (ref.__stencil__getHostRef) {
        return ref.__stencil__getHostRef();
    }
    return void 0;
};
var registerInstance = (lazyInstance, hostRef)=>{
    lazyInstance.__stencil__getHostRef = ()=>hostRef;
    hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta)=>{
    const hostRef = {
        $flags$: 0,
        $hostElement$: hostElement,
        $cmpMeta$: cmpMeta,
        $instanceValues$: /* @__PURE__ */ new Map()
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r)=>hostRef.$onInstanceResolve$ = r);
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r)=>hostRef.$onReadyResolve$ = r);
        hostElement["s-p"] = [];
        hostElement["s-rc"] = [];
    }
    const ref = hostRef;
    hostElement.__stencil__getHostRef = ()=>ref;
    return ref;
};
var isMemberInElement = (elm, memberName)=>memberName in elm;
var consoleError = (e, el)=>(0, console.error)(e, el);
// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId)=>{
    const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
    const bundleId = cmpMeta.$lazyBundleId$;
    if (!bundleId) {
        return void 0;
    }
    const module = cmpModules.get(bundleId);
    if (module) {
        return module[exportName];
    }
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
        const processMod = (importedModule)=>{
            cmpModules.set(bundleId, importedModule);
            return importedModule[exportName];
        };
        switch(bundleId){
            case 'revo-grid':
                return __turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revo-grid.entry.js [app-ssr] (ecmascript, async loader)").then(processMod, consoleError);
            case 'revogr-filter-panel':
                return __turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-filter-panel.entry.js [app-ssr] (ecmascript, async loader)").then(processMod, consoleError);
            case 'revogr-attribution_7':
                return __turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-attribution_7.entry.js [app-ssr] (ecmascript, async loader)").then(processMod, consoleError);
            case 'revogr-clipboard_3':
                return __turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-clipboard_3.entry.js [app-ssr] (ecmascript, async loader)").then(processMod, consoleError);
            case 'revogr-data_4':
                return __turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-data_4.entry.js [app-ssr] (ecmascript, async loader)").then(processMod, consoleError);
        }
    }
    return __turbopack_context__.f({
        "./revo-grid.entry.js": {
            id: ()=>"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revo-grid.entry.js [app-ssr] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revo-grid.entry.js [app-ssr] (ecmascript, async loader)")
        },
        "./revogr-attribution_7.entry.js": {
            id: ()=>"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-attribution_7.entry.js [app-ssr] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-attribution_7.entry.js [app-ssr] (ecmascript, async loader)")
        },
        "./revogr-clipboard_3.entry.js": {
            id: ()=>"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-clipboard_3.entry.js [app-ssr] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-clipboard_3.entry.js [app-ssr] (ecmascript, async loader)")
        },
        "./revogr-data_4.entry.js": {
            id: ()=>"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-data_4.entry.js [app-ssr] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-data_4.entry.js [app-ssr] (ecmascript, async loader)")
        },
        "./revogr-filter-panel.entry.js": {
            id: ()=>"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-filter-panel.entry.js [app-ssr] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/revogr-filter-panel.entry.js [app-ssr] (ecmascript, async loader)")
        }
    }).import(/* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ `./${bundleId}.entry.js${""}`).then((importedModule)=>{
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, (e)=>{
        consoleError(e, hostRef.$hostElement$);
    });
};
// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
var plt = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (h2)=>h2(),
    raf: (h2)=>requestAnimationFrame(h2),
    ael: (el, eventName, listener, opts)=>el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts)=>el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts)=>new CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */ (()=>{
    var _a;
    let supportsListenerOptions2 = false;
    try {
        (_a = win.document) == null ? void 0 : _a.addEventListener("e", null, Object.defineProperty({}, "passive", {
            get () {
                supportsListenerOptions2 = true;
            }
        }));
    } catch (e) {}
    return supportsListenerOptions2;
})();
var promiseResolve = (v)=>Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (()=>{
    try {
        new CSSStyleSheet();
        return typeof new CSSStyleSheet().replaceSync === "function";
    } catch (e) {}
    return false;
})();
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (()=>!!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write)=>(cb)=>{
        queue.push(cb);
        if (!queuePending) {
            queuePending = true;
            if (write && plt.$flags$ & 4 /* queueSync */ ) {
                nextTick(flush);
            } else {
                plt.raf(flush);
            }
        }
    };
var consume = (queue)=>{
    for(let i2 = 0; i2 < queue.length; i2++){
        try {
            queue[i2](performance.now());
        } catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var flush = ()=>{
    consume(queueDomReads);
    {
        consume(queueDomWrites);
        if (queuePending = queueDomReads.length > 0) {
            plt.raf(flush);
        }
    }
};
var nextTick = (cb)=>promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
var isComplexType = (o)=>{
    o = typeof o;
    return o === "object" || o === "function";
};
// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}
// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text)=>{
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
// src/utils/remote-value.ts
var RemoteValue = class _RemoteValue {
    /**
   * Deserializes a LocalValue serialized object back to its original JavaScript representation
   *
   * @param serialized The serialized LocalValue object
   * @returns The original JavaScript value/object
   */ static fromLocalValue(serialized) {
        const type = serialized[TYPE_CONSTANT];
        const value = VALUE_CONSTANT in serialized ? serialized[VALUE_CONSTANT] : void 0;
        switch(type){
            case "string" /* String */ :
                return value;
            case "boolean" /* Boolean */ :
                return value;
            case "bigint" /* BigInt */ :
                return BigInt(value);
            case "undefined" /* Undefined */ :
                return void 0;
            case "null" /* Null */ :
                return null;
            case "number" /* Number */ :
                if (value === "NaN") return NaN;
                if (value === "-0") return -0;
                if (value === "Infinity") return Infinity;
                if (value === "-Infinity") return -Infinity;
                return value;
            case "array" /* Array */ :
                return value.map((item)=>_RemoteValue.fromLocalValue(item));
            case "date" /* Date */ :
                return new Date(value);
            case "map" /* Map */ :
                const map2 = /* @__PURE__ */ new Map();
                for (const [key, val] of value){
                    const deserializedKey = typeof key === "object" && key !== null ? _RemoteValue.fromLocalValue(key) : key;
                    const deserializedValue = _RemoteValue.fromLocalValue(val);
                    map2.set(deserializedKey, deserializedValue);
                }
                return map2;
            case "object" /* Object */ :
                const obj = {};
                for (const [key, val] of value){
                    obj[key] = _RemoteValue.fromLocalValue(val);
                }
                return obj;
            case "regexp" /* RegularExpression */ :
                const { pattern, flags } = value;
                return new RegExp(pattern, flags);
            case "set" /* Set */ :
                const set = /* @__PURE__ */ new Set();
                for (const item of value){
                    set.add(_RemoteValue.fromLocalValue(item));
                }
                return set;
            case "symbol" /* Symbol */ :
                return Symbol(value);
            default:
                throw new Error(`Unsupported type: ${type}`);
        }
    }
    /**
   * Utility method to deserialize multiple LocalValues at once
   *
   * @param serializedValues Array of serialized LocalValue objects
   * @returns Array of deserialized JavaScript values
   */ static fromLocalValueArray(serializedValues) {
        return serializedValues.map((value)=>_RemoteValue.fromLocalValue(value));
    }
    /**
   * Verifies if the given object matches the structure of a serialized LocalValue
   *
   * @param obj Object to verify
   * @returns boolean indicating if the object has LocalValue structure
   */ static isLocalValueObject(obj) {
        if (typeof obj !== "object" || obj === null) {
            return false;
        }
        if (!obj.hasOwnProperty(TYPE_CONSTANT)) {
            return false;
        }
        const type = obj[TYPE_CONSTANT];
        const hasTypeProperty = Object.values({
            ...PrimitiveType,
            ...NonPrimitiveType
        }).includes(type);
        if (!hasTypeProperty) {
            return false;
        }
        if (type !== "null" /* Null */  && type !== "undefined" /* Undefined */ ) {
            return obj.hasOwnProperty(VALUE_CONSTANT);
        }
        return true;
    }
};
// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
    err: ()=>err,
    map: ()=>map,
    ok: ()=>ok,
    unwrap: ()=>unwrap,
    unwrapErr: ()=>unwrapErr
});
var ok = (value)=>({
        isOk: true,
        isErr: false,
        value
    });
var err = (value)=>({
        isOk: false,
        isErr: true,
        value
    });
function map(result, fn) {
    if (result.isOk) {
        const val = fn(result.value);
        if (val instanceof Promise) {
            return val.then((newVal)=>ok(newVal));
        } else {
            return ok(val);
        }
    }
    if (result.isErr) {
        const value = result.value;
        return err(value);
    }
    throw "should never get here";
}
var unwrap = (result)=>{
    if (result.isOk) {
        return result.value;
    } else {
        throw result.value;
    }
};
var unwrapErr = (result)=>{
    if (result.isErr) {
        return result.value;
    } else {
        throw result.value;
    }
};
// src/utils/serialize.ts
function deserializeProperty(value) {
    if (typeof value !== "string" || !value.startsWith(SERIALIZED_PREFIX)) {
        return value;
    }
    return RemoteValue.fromLocalValue(JSON.parse(atob(value.slice(SERIALIZED_PREFIX.length))));
}
var updateFallbackSlotVisibility = (elm)=>{
    const childNodes = internalCall(elm, "childNodes");
    if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
        getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode)=>{
            if (slotNode.nodeType === 1 /* ElementNode */  && slotNode.tagName === "SLOT-FB") {
                if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
                    slotNode.hidden = true;
                } else {
                    slotNode.hidden = false;
                }
            }
        });
    }
    let i2 = 0;
    for(i2 = 0; i2 < childNodes.length; i2++){
        const childNode = childNodes[i2];
        if (childNode.nodeType === 1 /* ElementNode */  && internalCall(childNode, "childNodes").length) {
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var getSlottedChildNodes = (childNodes)=>{
    const result = [];
    for(let i2 = 0; i2 < childNodes.length; i2++){
        const slottedNode = childNodes[i2]["s-nr"] || void 0;
        if (slottedNode && slottedNode.isConnected) {
            result.push(slottedNode);
        }
    }
    return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
    let i2 = 0;
    let slottedNodes = [];
    let childNode;
    for(; i2 < childNodes.length; i2++){
        childNode = childNodes[i2];
        if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && slotName === void 0) {
            slottedNodes.push(childNode);
        }
        slottedNodes = [
            ...slottedNodes,
            ...getHostSlotNodes(childNode.childNodes, hostName, slotName)
        ];
    }
    return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true)=>{
    const childNodes = [];
    if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
    let node = slot;
    while(node = node.nextSibling){
        if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
    }
    return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName)=>{
    if (nodeToRelocate.nodeType === 1 /* ElementNode */ ) {
        if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
            return true;
        }
        if (nodeToRelocate.getAttribute("slot") === slotName) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate["s-sn"] === slotName) {
        return true;
    }
    return slotName === "";
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position)=>{
    if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
        return;
    }
    const slottedNodeLocation = document.createTextNode("");
    slottedNodeLocation["s-nr"] = newChild;
    if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
    const parent = slotNode["s-cr"].parentNode;
    const appendMethod = internalCall(parent, "appendChild");
    if (typeof position !== "undefined") {
        slottedNodeLocation["s-oo"] = position;
        const childNodes = internalCall(parent, "childNodes");
        const slotRelocateNodes = [
            slottedNodeLocation
        ];
        childNodes.forEach((n)=>{
            if (n["s-nr"]) slotRelocateNodes.push(n);
        });
        slotRelocateNodes.sort((a, b)=>{
            if (!a["s-oo"] || a["s-oo"] < (b["s-oo"] || 0)) return -1;
            else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
            return 0;
        });
        slotRelocateNodes.forEach((n)=>appendMethod.call(parent, n));
    } else {
        appendMethod.call(parent, slottedNodeLocation);
    }
    newChild["s-ol"] = slottedNodeLocation;
    newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = (node)=>typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
    if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
    const assignedFactory = (elementsOnly)=>(function(opts) {
            const toReturn = [];
            const slotName = this["s-sn"];
            if (opts == null ? void 0 : opts.flatten) {
                console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
            }
            const parent = this["s-cr"].parentElement;
            const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
            slottedNodes.forEach((n)=>{
                if (slotName === getSlotName(n)) {
                    toReturn.push(n);
                }
            });
            if (elementsOnly) {
                return toReturn.filter((n)=>n.nodeType === 1 /* ElementNode */ );
            }
            return toReturn;
        }).bind(node);
    node.assignedElements = assignedFactory(true);
    node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
    if ("__" + method in node) {
        const toReturn = node["__" + method];
        if (typeof toReturn !== "function") return toReturn;
        return toReturn.bind(node);
    } else {
        if (typeof node[method] !== "function") return node[method];
        return node[method].bind(node);
    }
}
var createTime = (fnName, tagName = "")=>{
    {
        return ()=>{
            return;
        };
    }
};
var uniqueTime = (key, measureText)=>{
    {
        return ()=>{
            return;
        };
    }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS)=>{
    let style = styles.get(scopeId2);
    if (supportsConstructableStylesheets && allowCS) {
        style = style || new CSSStyleSheet();
        if (typeof style === "string") {
            style = cssText;
        } else {
            style.replaceSync(cssText);
        }
    } else {
        style = cssText;
    }
    styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode)=>{
    var _a;
    const scopeId2 = getScopeId(cmpMeta);
    const style = styles.get(scopeId2);
    if (!win.document) {
        return scopeId2;
    }
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */  ? styleContainerNode : win.document;
    if (style) {
        if (typeof style === "string") {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
            }
            if (!appliedStyles.has(scopeId2)) {
                if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
                    styleElm.innerHTML = style;
                } else {
                    styleElm = win.document.createElement("style");
                    styleElm.innerHTML = style;
                    const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
                    if (nonce != null) {
                        styleElm.setAttribute("nonce", nonce);
                    }
                    if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ )) {
                        if (styleContainerNode.nodeName === "HEAD") {
                            const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
                            const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
                            styleContainerNode.insertBefore(styleElm, (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null);
                        } else if ("host" in styleContainerNode) {
                            if (supportsConstructableStylesheets) {
                                const stylesheet = new CSSStyleSheet();
                                stylesheet.replaceSync(style);
                                if (supportsMutableAdoptedStyleSheets) {
                                    styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                                } else {
                                    styleContainerNode.adoptedStyleSheets = [
                                        stylesheet,
                                        ...styleContainerNode.adoptedStyleSheets
                                    ];
                                }
                            } else {
                                const existingStyleContainer = styleContainerNode.querySelector("style");
                                if (existingStyleContainer) {
                                    existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                                } else {
                                    styleContainerNode.prepend(styleElm);
                                }
                            }
                        } else {
                            styleContainerNode.append(styleElm);
                        }
                    }
                    if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ ) {
                        styleContainerNode.insertBefore(styleElm, null);
                    }
                }
                if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */ ) {
                    styleElm.innerHTML += SLOT_FB_CSS;
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId2);
                }
            }
        } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            if (supportsMutableAdoptedStyleSheets) {
                styleContainerNode.adoptedStyleSheets.push(style);
            } else {
                styleContainerNode.adoptedStyleSheets = [
                    ...styleContainerNode.adoptedStyleSheets,
                    style
                ];
            }
        }
    }
    return scopeId2;
};
var attachStyles = (hostRef)=>{
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
    addStyle(elm.getRootNode(), cmpMeta);
    endAttachStyles();
};
var getScopeId = (cmp, mode)=>"sc-" + cmp.$tagName$;
var h = (nodeName, vnodeData, ...children)=>{
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c)=>{
        for(let i2 = 0; i2 < c.length; i2++){
            child = c[i2];
            if (Array.isArray(child)) {
                walk(child);
            } else if (child != null && typeof child !== "boolean") {
                if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                } else {
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k)=>classData[k]).join(" ");
            }
        }
    }
    if (typeof nodeName === "function") {
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var newVNode = (tag, text)=>{
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
var Host = {};
var isHost = (node)=>node && node.$tag$ === Host;
var vdomFnUtils = {
    forEach: (children, cb)=>children.map(convertToPublic).forEach(cb),
    map: (children, cb)=>children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node)=>({
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    });
var convertToPrivate = (node)=>{
    if (typeof node.vtag === "function") {
        const vnodeData = {
            ...node.vattrs
        };
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...node.vchildren || []);
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef)=>{
    var _a, _b, _c;
    const endHydrate = createTime("hydrateClient", tagName);
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const slottedNodes = [];
    const shadowRootNodes = null;
    const vnode = newVNode(tagName, null);
    vnode.$elm$ = hostElm;
    const members = Object.entries(((_a = hostRef.$cmpMeta$) == null ? void 0 : _a.$members$) || {});
    members.forEach(([memberName, [memberFlags, metaAttributeName]])=>{
        var _b2;
        if (!(memberFlags & 31 /* Prop */ )) {
            return;
        }
        const attributeName = metaAttributeName || memberName;
        const attrVal = hostElm.getAttribute(attributeName);
        if (attrVal !== null) {
            const attrPropVal = parsePropertyValue(attrVal, memberFlags);
            (_b2 = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _b2.set(memberName, attrPropVal);
        }
    });
    if (win.document && (!plt.$orgLocNodes$ || !plt.$orgLocNodes$.size)) {
        initializeDocumentHydrate(win.document.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    hostRef.$vnode$ = clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId, slottedNodes);
    let crIndex = 0;
    const crLength = childRenderNodes.length;
    let childRenderNode;
    for(crIndex; crIndex < crLength; crIndex++){
        childRenderNode = childRenderNodes[crIndex];
        const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = childRenderNode.$elm$;
        if (!shadowRoot) {
            node["s-hn"] = tagName.toUpperCase();
            if (childRenderNode.$tag$ === "slot") {
                node["s-cr"] = hostElm["s-cr"];
            }
        } else if (((_b = childRenderNode.$tag$) == null ? void 0 : _b.toString().includes("-")) && childRenderNode.$tag$ !== "slot-fb" && !childRenderNode.$elm$.shadowRoot) {
            const cmpMeta = getHostRef(childRenderNode.$elm$);
            if (cmpMeta) {
                const scopeId3 = getScopeId(cmpMeta.$cmpMeta$);
                const styleSheet = win.document.querySelector(`style[sty-id="${scopeId3}"]`);
                if (styleSheet) {
                    hostElm.shadowRoot.append(styleSheet.cloneNode(true));
                }
            }
        }
        if (childRenderNode.$tag$ === "slot") {
            childRenderNode.$name$ = childRenderNode.$elm$["s-sn"] || childRenderNode.$elm$["name"] || null;
            if (childRenderNode.$children$) {
                childRenderNode.$flags$ |= 2 /* isSlotFallback */ ;
                if (!childRenderNode.$elm$.childNodes.length) {
                    childRenderNode.$children$.forEach((c)=>{
                        childRenderNode.$elm$.appendChild(c.$elm$);
                    });
                }
            } else {
                childRenderNode.$flags$ |= 1 /* isSlotReference */ ;
            }
        }
        if (orgLocationNode && orgLocationNode.isConnected) {
            if (orgLocationNode.parentElement.shadowRoot && orgLocationNode["s-en"] === "") {
                orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
            }
            orgLocationNode.parentNode.removeChild(orgLocationNode);
            if (!shadowRoot) {
                node["s-oo"] = parseInt(childRenderNode.$nodeId$);
            }
        }
        if (orgLocationNode && !orgLocationNode["s-id"]) {
            plt.$orgLocNodes$.delete(orgLocationId);
        }
    }
    const hosts = [];
    const snLen = slottedNodes.length;
    let snIndex = 0;
    let slotGroup;
    let snGroupIdx;
    let snGroupLen;
    let slottedItem;
    for(snIndex; snIndex < snLen; snIndex++){
        slotGroup = slottedNodes[snIndex];
        if (!slotGroup || !slotGroup.length) continue;
        snGroupLen = slotGroup.length;
        snGroupIdx = 0;
        for(snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++){
            slottedItem = slotGroup[snGroupIdx];
            if (!hosts[slottedItem.hostId]) {
                hosts[slottedItem.hostId] = plt.$orgLocNodes$.get(slottedItem.hostId);
            }
            if (!hosts[slottedItem.hostId]) continue;
            const hostEle = hosts[slottedItem.hostId];
            if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
                hostEle.appendChild(slottedItem.node);
            }
            if (!hostEle.shadowRoot || !shadowRoot) {
                if (!slottedItem.slot["s-cr"]) {
                    slottedItem.slot["s-cr"] = hostEle["s-cr"];
                    if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
                        slottedItem.slot["s-cr"] = hostEle;
                    } else {
                        slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
                    }
                }
                addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"]);
                if (((_c = slottedItem.node.parentElement) == null ? void 0 : _c.shadowRoot) && slottedItem.node["getAttribute"] && slottedItem.node.getAttribute("slot")) {
                    slottedItem.node.removeAttribute("slot");
                }
            }
        }
    }
    hostRef.$hostElement$ = hostElm;
    endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = [])=>{
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i2;
    if (node.nodeType === 1 /* ElementNode */ ) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            childIdSplt = childNodeType.split(".");
            if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
                childVNode = createSimpleVNode({
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
                    // won't try to reconcile them. Classes set on the node will be blown away.
                    $attrs$: {
                        class: node.className || ""
                    }
                });
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                const slotName = childVNode.$elm$.getAttribute("s-sn");
                if (typeof slotName === "string") {
                    if (childVNode.$tag$ === "slot-fb") {
                        addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
                    }
                    childVNode.$elm$["s-sn"] = slotName;
                    childVNode.$elm$.removeAttribute("s-sn");
                }
                if (childVNode.$index$ !== void 0) {
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                parentVNode = childVNode;
            }
        }
        if (node.shadowRoot) {
            for(i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--){
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i2], hostId, slottedNodes);
            }
        }
        const nonShadowNodes = node.__childNodes || node.childNodes;
        for(i2 = nonShadowNodes.length - 1; i2 >= 0; i2--){
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, nonShadowNodes[i2], hostId, slottedNodes);
        }
    } else if (node.nodeType === 8 /* CommentNode */ ) {
        childIdSplt = node.nodeValue.split(".");
        if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
            childNodeType = childIdSplt[0];
            childVNode = createSimpleVNode({
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4] || "0",
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null
            });
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = findCorrespondingNode(node, 3 /* TextNode */ );
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */ ) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    node.remove();
                    if (hostId === childVNode.$hostId$) {
                        if (!parentVNode.$children$) {
                            parentVNode.$children$ = [];
                        }
                        parentVNode.$children$[childVNode.$index$] = childVNode;
                    }
                }
            } else if (childNodeType === COMMENT_NODE_ID) {
                childVNode.$elm$ = findCorrespondingNode(node, 8 /* CommentNode */ );
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8 /* CommentNode */ ) {
                    childRenderNodes.push(childVNode);
                    node.remove();
                }
            } else if (childVNode.$hostId$ === hostId) {
                if (childNodeType === SLOT_NODE_ID) {
                    const slotName = node["s-sn"] = childIdSplt[5] || "";
                    addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
                } else if (childNodeType === CONTENT_REF_ID) {
                    {
                        hostElm["s-cr"] = node;
                        node["s-cn"] = true;
                    }
                }
            }
        }
    } else if (parentVNode && parentVNode.$tag$ === "style") {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = "0";
        parentVNode.$children$ = [
            vnode
        ];
    } else {
        if (node.nodeType === 3 /* TextNode */  && !node.wholeText.trim() && !node["s-nr"]) {
            node.remove();
        }
    }
    return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes)=>{
    if (node.nodeType === 1 /* ElementNode */ ) {
        const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
        if (componentId) {
            orgLocNodes.set(componentId, node);
        }
        let i2 = 0;
        if (node.shadowRoot) {
            for(; i2 < node.shadowRoot.childNodes.length; i2++){
                initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
            }
        }
        const nonShadowNodes = node.__childNodes || node.childNodes;
        for(i2 = 0; i2 < nonShadowNodes.length; i2++){
            initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
        }
    } else if (node.nodeType === 8 /* CommentNode */ ) {
        const childIdSplt = node.nodeValue.split(".");
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
            node.nodeValue = "";
            node["s-en"] = childIdSplt[3];
        }
    }
};
var createSimpleVNode = (vnode)=>{
    const defaultVNode = {
        $flags$: 0,
        $hostId$: null,
        $nodeId$: null,
        $depth$: null,
        $index$: "0",
        $elm$: null,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
    };
    return {
        ...defaultVNode,
        ...vnode
    };
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
    node["s-sr"] = true;
    childVNode.$name$ = slotName || null;
    childVNode.$tag$ = "slot";
    const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
    {
        const slot = childVNode.$elm$;
        const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
        addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
        patchSlotNode(node);
        if (shouldMove) {
            parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
        }
    }
    childRenderNodes.push(childVNode);
    slotNodes.push(childVNode);
    if (!parentVNode.$children$) {
        parentVNode.$children$ = [];
    }
    parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId)=>{
    var _a, _b;
    let slottedNode = slotNode.nextSibling;
    slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
    if (!slottedNode || ((_a = slottedNode.nodeValue) == null ? void 0 : _a.startsWith(SLOT_NODE_ID + "."))) return;
    do {
        if (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (!slottedNode["getAttribute"] || !slottedNode.getAttribute("slot")) && (slottedNode.nodeType === 8 /* CommentNode */  || slottedNode.nodeType === 3 /* TextNode */ ))) {
            slottedNode["s-sn"] = slotName;
            slottedNodes[slotNodeId].push({
                slot: slotNode,
                node: slottedNode,
                hostId
            });
        }
        slottedNode = slottedNode == null ? void 0 : slottedNode.nextSibling;
    }while (slottedNode && !((_b = slottedNode.nodeValue) == null ? void 0 : _b.startsWith(SLOT_NODE_ID + ".")))
};
var findCorrespondingNode = (node, type)=>{
    let sibling = node;
    do {
        sibling = sibling.nextSibling;
    }while (sibling && (sibling.nodeType !== type || !sibling.nodeValue))
    return sibling;
};
var createSupportsRuleRe = (selector)=>{
    const safeSelector2 = escapeRegExpSpecialCharacters(selector);
    return new RegExp(// First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`, "g");
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated)=>{
    if (typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
        propValue = deserializeProperty(propValue);
        return propValue;
    }
    if (typeof propValue === "string" && (propType & 16 /* Unknown */  || propType & 8 /* Any */ ) && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
        try {
            return JSON.parse(propValue);
        } catch (e) {}
    }
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */ ) {
            {
                return propValue === "false" ? false : propValue === "" || !!propValue;
            }
        }
        if (propType & 2 /* Number */ ) {
            return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
        }
        if (propType & 1 /* String */ ) {
            return String(propValue);
        }
        return propValue;
    }
    return propValue;
};
var getElement = (ref)=>{
    var _a;
    return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$;
};
// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags)=>{
    const elm = getElement(ref);
    return {
        emit: (detail)=>{
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */ ),
                composed: !!(flags & 2 /* Composed */ ),
                cancelable: !!(flags & 1 /* Cancellable */ ),
                detail
            });
        }
    };
};
var emitEvent = (elm, name, opts)=>{
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender)=>{
    if (oldValue === newValue) {
        return;
    }
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
        const classList = elm.classList;
        const oldClasses = parseClassList(oldValue);
        let newClasses = parseClassList(newValue);
        if ((elm["s-si"] || elm["s-sc"]) && initialRender) {
            const scopeId2 = elm["s-sc"] || elm["s-si"];
            newClasses.push(scopeId2);
            oldClasses.forEach((c)=>{
                if (c.startsWith(scopeId2)) newClasses.push(c);
            });
            newClasses = [
                ...new Set(newClasses)
            ].filter((c)=>c);
            classList.add(...newClasses);
        } else {
            classList.remove(...oldClasses.filter((c)=>c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c)=>c && !oldClasses.includes(c)));
        }
    } else if (memberName === "style") {
        {
            for(const prop in oldValue){
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes("-")) {
                        elm.style.removeProperty(prop);
                    } else {
                        elm.style[prop] = "";
                    }
                }
            }
        }
        for(const prop in newValue){
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes("-")) {
                    elm.style.setProperty(prop, newValue[prop]);
                } else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    } else if (memberName === "key") ;
    else if (memberName === "ref") {
        if (newValue) {
            newValue(elm);
        }
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
        if (memberName[2] === "-") {
            memberName = memberName.slice(3);
        } else if (isMemberInElement(win, ln)) {
            memberName = ln.slice(2);
        } else {
            memberName = ln[2] + memberName.slice(3);
        }
        if (oldValue || newValue) {
            const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
            memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, capture);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, capture);
            }
        }
    } else {
        const isComplex = isComplexType(newValue);
        if ((isProp || isComplex && newValue !== null) && !isSvg) {
            try {
                if (!elm.tagName.includes("-")) {
                    const n = newValue == null ? "" : newValue;
                    if (memberName === "list") {
                        isProp = false;
                    } else if (oldValue == null || elm[memberName] != n) {
                        if (typeof elm.__lookupSetter__(memberName) === "function") {
                            elm[memberName] = n;
                        } else {
                            elm.setAttribute(memberName, n);
                        }
                    }
                } else if (elm[memberName] !== newValue) {
                    elm[memberName] = newValue;
                }
            } catch (e) {}
        }
        let xlink = false;
        {
            if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
                memberName = ln;
                xlink = true;
            }
        }
        if (newValue == null || newValue === false) {
            if (newValue !== false || elm.getAttribute(memberName) === "") {
                if (xlink) {
                    elm.removeAttributeNS(XLINK_NS, memberName);
                } else {
                    elm.removeAttribute(memberName);
                }
            }
        } else if ((!isProp || flags & 4 /* isHost */  || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */ ) {
            newValue = newValue === true ? "" : newValue;
            if (xlink) {
                elm.setAttributeNS(XLINK_NS, memberName, newValue);
            } else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassListRegex = /\s/;
var parseClassList = (value)=>{
    if (typeof value === "object" && value && "baseVal" in value) {
        value = value.baseVal;
    }
    if (!value || typeof value !== "string") {
        return [];
    }
    return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender)=>{
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */  && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
    const newVnodeAttrs = newVnode.$attrs$ || {};
    {
        for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))){
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$, isInitialRender);
            }
        }
    }
    for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))){
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$, isInitialRender);
    }
};
function sortedAttrNames(attrNames) {
    return attrNames.includes("ref") ? // we need to sort these to ensure that `'ref'` is the last attr
    [
        ...attrNames.filter((attr)=>attr !== "ref"),
        "ref"
    ] : // no need to sort, return the original array
    attrNames;
}
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex)=>{
    var _a;
    const newVNode2 = newParentVNode.$children$[childIndex];
    let i2 = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        checkSlotRelocate = true;
        if (newVNode2.$tag$ === "slot") {
            newVNode2.$flags$ |= newVNode2.$children$ ? // slot element has fallback content
            // still create an element that "mocks" the slot element
            2 /* isSlotFallback */  : // slot element does not have fallback content
            // create an html comment we'll use to always reference
            // where actual slot content should sit next to
            1 /* isSlotReference */ ;
        }
    }
    if (newVNode2.$text$ !== null) {
        elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
    } else if (newVNode2.$flags$ & 1 /* isSlotReference */ ) {
        elm = newVNode2.$elm$ = win.document.createTextNode("");
        {
            updateElement(null, newVNode2, isSvgMode);
        }
    } else {
        if (!isSvgMode) {
            isSvgMode = newVNode2.$tag$ === "svg";
        }
        if (!win.document) {
            throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
        }
        elm = newVNode2.$elm$ = win.document.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */  ? "slot-fb" : newVNode2.$tag$);
        if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
            isSvgMode = false;
        }
        {
            updateElement(null, newVNode2, isSvgMode);
        }
        if (newVNode2.$children$) {
            for(i2 = 0; i2 < newVNode2.$children$.length; ++i2){
                childNode = createElm(oldParentVNode, newVNode2, i2);
                if (childNode) {
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode2.$tag$ === "svg") {
                isSvgMode = false;
            } else if (elm.tagName === "foreignObject") {
                isSvgMode = true;
            }
        }
    }
    elm["s-hn"] = hostTagName;
    {
        if (newVNode2.$flags$ & (2 /* isSlotFallback */  | 1 /* isSlotReference */ )) {
            elm["s-sr"] = true;
            elm["s-cr"] = contentRef;
            elm["s-sn"] = newVNode2.$name$ || "";
            elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
            patchSlotNode(elm);
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
                {
                    putBackInOriginalLocation(oldParentVNode.$elm$, false);
                }
            }
        }
    }
    return elm;
};
var putBackInOriginalLocation = (parentElm, recursive)=>{
    plt.$flags$ |= 1 /* isTmpDisconnected */ ;
    const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
    for(let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--){
        const childNode = oldSlotChildNodes[i2];
        if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
            insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
            childNode["s-ol"].remove();
            childNode["s-ol"] = void 0;
            childNode["s-sh"] = void 0;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */ ;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx)=>{
    let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
    let childNode;
    for(; startIdx <= endIdx; ++startIdx){
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                insertBefore(containerElm, childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = (vnodes, startIdx, endIdx)=>{
    for(let index = startIdx; index <= endIdx; ++index){
        const vnode = vnodes[index];
        if (vnode) {
            const elm = vnode.$elm$;
            nullifyVNodeRefs(vnode);
            if (elm) {
                {
                    checkSlotFallbackVisibility = true;
                    if (elm["s-ol"]) {
                        elm["s-ol"].remove();
                    } else {
                        putBackInOriginalLocation(elm, true);
                    }
                }
                elm.remove();
            }
        }
    }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false)=>{
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i2 = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
        if (oldStartVnode == null) {
            oldStartVnode = oldCh[++oldStartIdx];
        } else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
            patch(oldStartVnode, newStartVnode, isInitialRender);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
            patch(oldEndVnode, newEndVnode, isInitialRender);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
            if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode, isInitialRender);
            insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
            if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode, isInitialRender);
            insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        } else {
            idxInOld = -1;
            {
                for(i2 = oldStartIdx; i2 <= oldEndIdx; ++i2){
                    if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
                        idxInOld = i2;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
                } else {
                    patch(elmToMove, newStartVnode, isInitialRender);
                    oldCh[idxInOld] = void 0;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            } else {
                node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    insertBefore(referenceNode(oldStartVnode.$elm$).parentNode, node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
    } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false)=>{
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (leftVNode.$tag$ === "slot") {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        if (!isInitialRender) {
            return leftVNode.$key$ === rightVNode.$key$;
        }
        if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
            leftVNode.$key$ = rightVNode.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = (node)=>node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false)=>{
    const elm = newVNode2.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode2.$children$;
    const tag = newVNode2.$tag$;
    const text = newVNode2.$text$;
    let defaultHolder;
    if (text === null) {
        {
            isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
        }
        {
            updateElement(oldVNode, newVNode2, isSvgMode, isInitialRender);
        }
        if (oldChildren !== null && newChildren !== null) {
            updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
        } else if (newChildren !== null) {
            if (oldVNode.$text$ !== null) {
                elm.textContent = "";
            }
            addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
        } else if (// don't do this on initial render as it can cause non-hydrated content to be removed
        !isInitialRender && BUILD.updatable && oldChildren !== null) {
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        } else if (isInitialRender && BUILD.updatable && oldChildren !== null && newChildren === null) {
            newVNode2.$children$ = oldChildren;
        }
        if (isSvgMode && tag === "svg") {
            isSvgMode = false;
        }
    } else if (defaultHolder = elm["s-cr"]) {
        defaultHolder.parentNode.textContent = text;
    } else if (oldVNode.$text$ !== text) {
        elm.data = text;
    }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm)=>{
    let node;
    let hostContentNodes;
    let j;
    const children = elm.__childNodes || elm.childNodes;
    for (const childNode of children){
        if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
            hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
            const slotName = childNode["s-sn"];
            for(j = hostContentNodes.length - 1; j >= 0; j--){
                node = hostContentNodes[j];
                if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && true) {
                    if (isNodeLocatedInSlot(node, slotName)) {
                        let relocateNodeData = relocateNodes.find((r)=>r.$nodeToRelocate$ === node);
                        checkSlotFallbackVisibility = true;
                        node["s-sn"] = node["s-sn"] || slotName;
                        if (relocateNodeData) {
                            relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
                            relocateNodeData.$slotRefNode$ = childNode;
                        } else {
                            node["s-sh"] = childNode["s-hn"];
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node
                            });
                        }
                        if (node["s-sr"]) {
                            relocateNodes.map((relocateNode)=>{
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                                    relocateNodeData = relocateNodes.find((r)=>r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    } else if (!relocateNodes.some((r)=>r.$nodeToRelocate$ === node)) {
                        relocateNodes.push({
                            $nodeToRelocate$: node
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */ ) {
            markSlotContentForRelocation(childNode);
        }
    }
};
var nullifyVNodeRefs = (vNode)=>{
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
    }
};
var insertBefore = (parent, newNode, reference)=>{
    {
        return parent == null ? void 0 : parent.insertBefore(newNode, reference);
    }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false)=>{
    var _a, _b, _c, _d;
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const isHostElement = isHost(renderFnResults);
    const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute])=>rootVnode.$attrs$[attribute] = hostElm[propName]);
    }
    if (isInitialLoad && rootVnode.$attrs$) {
        for (const key of Object.keys(rootVnode.$attrs$)){
            if (hostElm.hasAttribute(key) && ![
                "key",
                "ref",
                "style",
                "class"
            ].includes(key)) {
                rootVnode.$attrs$[key] = hostElm[key];
            }
        }
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */ ;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = hostElm;
    useNativeShadowDom = supportsShadow;
    {
        contentRef = hostElm["s-cr"];
        checkSlotFallbackVisibility = false;
    }
    patch(oldVNode, rootVnode, isInitialLoad);
    {
        plt.$flags$ |= 1 /* isTmpDisconnected */ ;
        if (checkSlotRelocate) {
            markSlotContentForRelocation(rootVnode.$elm$);
            for (const relocateData of relocateNodes){
                const nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate["s-ol"] && win.document) {
                    const orgLocationNode = win.document.createTextNode("");
                    orgLocationNode["s-nr"] = nodeToRelocate;
                    insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
                }
            }
            for (const relocateData of relocateNodes){
                const nodeToRelocate = relocateData.$nodeToRelocate$;
                const slotRefNode = relocateData.$slotRefNode$;
                if (slotRefNode) {
                    const parentNodeRef = slotRefNode.parentNode;
                    let insertBeforeNode = slotRefNode.nextSibling;
                    {
                        let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
                        while(orgLocationNode){
                            let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
                            if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                                refNode = refNode.nextSibling;
                                while(refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])){
                                    refNode = refNode == null ? void 0 : refNode.nextSibling;
                                }
                                if (!refNode || !refNode["s-nr"]) {
                                    insertBeforeNode = refNode;
                                    break;
                                }
                            }
                            orgLocationNode = orgLocationNode.previousSibling;
                        }
                    }
                    const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
                    const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
                    if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
                            }
                            insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
                            if (nodeToRelocate.nodeType === 1 /* ElementNode */  && nodeToRelocate.tagName !== "SLOT-FB") {
                                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
                            }
                        }
                    }
                    nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
                } else {
                    if (nodeToRelocate.nodeType === 1 /* ElementNode */ ) {
                        if (isInitialLoad) {
                            nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
                        }
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        plt.$flags$ &= -2 /* isTmpDisconnected */ ;
        relocateNodes.length = 0;
    }
    contentRef = void 0;
};
// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent)=>{
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
        const index = ancestorComponent["s-p"].push(new Promise((r)=>hostRef.$onRenderResolve$ = ()=>{
                ancestorComponent["s-p"].splice(index - 1, 1);
                r();
            }));
    }
};
var scheduleUpdate = (hostRef, isInitialLoad)=>{
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */ ;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */ ) {
        hostRef.$flags$ |= 512 /* needsRerender */ ;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    const dispatch = ()=>dispatchHooks(hostRef, isInitialLoad);
    if (isInitialLoad) {
        queueMicrotask(()=>{
            dispatch();
        });
        return;
    }
    return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad)=>{
    const elm = hostRef.$hostElement$;
    const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$;
    if (!instance) {
        throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
    }
    let maybePromise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */ ;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event])=>safeCall(instance, methodName, event, elm));
                hostRef.$queuedListeners$ = void 0;
            }
        }
        maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
    } else {
        maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
    }
    maybePromise = enqueue(maybePromise, ()=>safeCall(instance, "componentWillRender", void 0, elm));
    endSchedule();
    return enqueue(maybePromise, ()=>updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn)=>isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2)=>{
        console.error(err2);
        fn();
    }) : fn();
var isPromisey = (maybePromise)=>maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad)=>{
    var _a;
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
    const rc = elm["s-rc"];
    if (isInitialLoad) {
        attachStyles(hostRef);
    }
    const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance, elm, isInitialLoad);
    }
    if (rc) {
        rc.map((cb)=>cb());
        elm["s-rc"] = void 0;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
        const postUpdate = ()=>postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        } else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */ ;
            childrenPromises.length = 0;
        }
    }
};
var renderingRef = null;
var callRender = (hostRef, instance, elm, isInitialLoad)=>{
    try {
        renderingRef = instance;
        instance = instance.render && instance.render();
        {
            hostRef.$flags$ &= -17 /* isQueuedForUpdate */ ;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */ ;
        }
        {
            {
                {
                    renderVdom(hostRef, instance, isInitialLoad);
                }
            }
        }
    } catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
var getRenderingRef = ()=>renderingRef;
var postUpdateComponent = (hostRef)=>{
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime("postUpdate", tagName);
    const instance = hostRef.$lazyInstance$;
    const ancestorComponent = hostRef.$ancestorComponent$;
    safeCall(instance, "componentDidRender", void 0, elm);
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */ )) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */ ;
        {
            addHydratedFlag(elm);
        }
        safeCall(instance, "componentDidLoad", void 0, elm);
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    } else {
        safeCall(instance, "componentDidUpdate", void 0, elm);
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = void 0;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */ ) {
            nextTick(()=>scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= -517;
    }
};
var forceUpdate = (ref)=>{
    var _a;
    {
        const hostRef = getHostRef(ref);
        const isConnected = (_a = hostRef == null ? void 0 : hostRef.$hostElement$) == null ? void 0 : _a.isConnected;
        if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */  | 16 /* isQueuedForUpdate */ )) === 2 /* hasRendered */ ) {
            scheduleUpdate(hostRef, false);
        }
        return isConnected;
    }
};
var appDidLoad = (who)=>{
    var _a;
    nextTick(()=>emitEvent(win, "appload", {
            detail: {
                namespace: NAMESPACE
            }
        }));
    {
        if ((_a = plt.$orgLocNodes$) == null ? void 0 : _a.size) {
            plt.$orgLocNodes$.clear();
        }
    }
};
var safeCall = (instance, method, arg, elm)=>{
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        } catch (e) {
            consoleError(e, elm);
        }
    }
    return void 0;
};
var addHydratedFlag = (elm)=>{
    var _a;
    return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated");
};
// src/runtime/set-value.ts
var getValue = (ref, propName)=>getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta)=>{
    const hostRef = getHostRef(ref);
    if (!hostRef) {
        return;
    }
    if (!hostRef) {
        throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
    }
    const elm = hostRef.$hostElement$;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* isConstructingInstance */ ) || oldVal === void 0) && didValueChange) {
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */ ) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    watchMethods.map((watchMethodName)=>{
                        try {
                            instance[watchMethodName](newVal, oldVal, propName);
                        } catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* hasRendered */  | 16 /* isQueuedForUpdate */ )) === 2 /* hasRendered */ ) {
                if (instance.componentShouldUpdate) {
                    if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                        return;
                    }
                }
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags)=>{
    var _a, _b;
    const prototype = Cstr.prototype;
    if (cmpMeta.$members$ || cmpMeta.$watchers$ || Cstr.watchers) {
        if (Cstr.watchers && !cmpMeta.$watchers$) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
        members.map(([memberName, [memberFlags]])=>{
            if (memberFlags & 31 /* Prop */  || flags & 2 /* proxyState */  && memberFlags & 32 /* State */ ) {
                const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
                if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */ ;
                if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */ ;
                if (flags & 1 /* isElementConstructor */  || !origGetter) {
                    Object.defineProperty(prototype, memberName, {
                        get () {
                            {
                                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */ ) === 0) {
                                    return getValue(this, memberName);
                                }
                                const ref = getHostRef(this);
                                const instance = ref ? ref.$lazyInstance$ : prototype;
                                if (!instance) return;
                                return instance[memberName];
                            }
                        },
                        configurable: true,
                        enumerable: true
                    });
                }
                Object.defineProperty(prototype, memberName, {
                    set (newValue) {
                        const ref = getHostRef(this);
                        if (!ref) {
                            return;
                        }
                        if (origSetter) {
                            const currentValue = memberFlags & 32 /* State */  ? this[memberName] : ref.$hostElement$[memberName];
                            if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                                newValue = ref.$instanceValues$.get(memberName);
                            } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                                ref.$instanceValues$.set(memberName, currentValue);
                            }
                            origSetter.apply(this, [
                                parsePropertyValue(newValue, memberFlags)
                            ]);
                            newValue = memberFlags & 32 /* State */  ? this[memberName] : ref.$hostElement$[memberName];
                            setValue(this, memberName, newValue, cmpMeta);
                            return;
                        }
                        {
                            if ((flags & 1 /* isElementConstructor */ ) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ ) === 0) {
                                setValue(this, memberName, newValue, cmpMeta);
                                if (flags & 1 /* isElementConstructor */  && !ref.$lazyInstance$) {
                                    ref.$onReadyPromise$.then(()=>{
                                        if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */  && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                                            ref.$lazyInstance$[memberName] = newValue;
                                        }
                                    });
                                }
                                return;
                            }
                            const setterSetVal = ()=>{
                                const currentValue = ref.$lazyInstance$[memberName];
                                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                                    ref.$instanceValues$.set(memberName, currentValue);
                                }
                                ref.$lazyInstance$[memberName] = parsePropertyValue(newValue, memberFlags);
                                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
                            };
                            if (ref.$lazyInstance$) {
                                setterSetVal();
                            } else {
                                ref.$onReadyPromise$.then(()=>setterSetVal());
                            }
                        }
                    }
                });
            } else if (flags & 1 /* isElementConstructor */  && memberFlags & 64 /* Method */ ) {
                Object.defineProperty(prototype, memberName, {
                    value (...args) {
                        var _a2;
                        const ref = getHostRef(this);
                        return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(()=>{
                            var _a3;
                            return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
                        });
                    }
                });
            }
        });
        if (flags & 1 /* isElementConstructor */ ) {
            const attrNameToPropName = /* @__PURE__ */ new Map();
            prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
                plt.jmp(()=>{
                    var _a2;
                    const propName = attrNameToPropName.get(attrName);
                    if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
                        newValue = this[propName];
                        delete this[propName];
                    } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
                    this[propName] == newValue) {
                        return;
                    } else if (propName == null) {
                        const hostRef = getHostRef(this);
                        const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
                        if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */ ) && flags2 & 128 /* isWatchReady */  && newValue !== oldValue) {
                            const instance = hostRef.$lazyInstance$;
                            const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
                            entry == null ? void 0 : entry.forEach((callbackName)=>{
                                if (instance[callbackName] != null) {
                                    instance[callbackName].call(instance, newValue, oldValue, attrName);
                                }
                            });
                        }
                        return;
                    }
                    const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
                    newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
                    if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
                        this[propName] = newValue;
                    }
                });
            };
            Cstr.observedAttributes = Array.from(/* @__PURE__ */ new Set([
                ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
                ...members.filter(([_, m])=>m[0] & 31 /* HasAttribute */ ).map(([propName, m])=>{
                    var _a2;
                    const attrName = m[1] || propName;
                    attrNameToPropName.set(attrName, propName);
                    if (m[0] & 512 /* ReflectAttr */ ) {
                        (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([
                            propName,
                            attrName
                        ]);
                    }
                    return attrName;
                })
            ]));
        }
    }
    return Cstr;
};
// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId)=>{
    let Cstr;
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */ ) === 0) {
        hostRef.$flags$ |= 32 /* hasInitializedComponent */ ;
        const bundleId = cmpMeta.$lazyBundleId$;
        if (bundleId) {
            const CstrImport = loadModule(cmpMeta, hostRef);
            if (CstrImport && "then" in CstrImport) {
                const endLoad = uniqueTime();
                Cstr = await CstrImport;
                endLoad();
            } else {
                Cstr = CstrImport;
            }
            if (!Cstr) {
                throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
            }
            if (!Cstr.isProxied) {
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */ );
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */ ;
            }
            try {
                new Cstr(hostRef);
            } catch (e) {
                consoleError(e, elm);
            }
            {
                hostRef.$flags$ &= -9 /* isConstructingInstance */ ;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */ ;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$, elm);
        } else {
            Cstr = elm.constructor;
            const cmpTag = elm.localName;
            customElements.whenDefined(cmpTag).then(()=>hostRef.$flags$ |= 128 /* isWatchReady */ );
        }
        if (Cstr && Cstr.style) {
            let style;
            if (typeof Cstr.style === "string") {
                style = Cstr.style;
            }
            const scopeId2 = getScopeId(cmpMeta);
            if (!styles.has(scopeId2)) {
                const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
                registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ ));
                endRegisterStyles();
            }
        }
    }
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = ()=>scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent["s-rc"]) {
        ancestorComponent["s-rc"].push(schedule);
    } else {
        schedule();
    }
};
var fireConnectedCallback = (instance, elm)=>{
    {
        safeCall(instance, "connectedCallback", void 0, elm);
    }
};
// src/runtime/connected-callback.ts
var connectedCallback = (elm)=>{
    if ((plt.$flags$ & 1 /* isTmpDisconnected */ ) === 0) {
        const hostRef = getHostRef(elm);
        if (!hostRef) {
            return;
        }
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */ )) {
            hostRef.$flags$ |= 1 /* hasConnected */ ;
            let hostId;
            {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if (!hostId) {
                if (cmpMeta.$flags$ & (4 /* hasSlotRelocation */  | 8 /* needsShadowDomShim */ )) {
                    setContentReference(elm);
                }
            }
            {
                let ancestorComponent = elm;
                while(ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host){
                    if (ancestorComponent.nodeType === 1 /* ElementNode */  && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
                        attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
                        break;
                    }
                }
            }
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]])=>{
                    if (memberFlags & 31 /* Prop */  && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                nextTick(()=>initializeComponent(elm, hostRef, cmpMeta));
            }
        } else {
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
                fireConnectedCallback(hostRef.$lazyInstance$, elm);
            } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
                hostRef.$onReadyPromise$.then(()=>fireConnectedCallback(hostRef.$lazyInstance$, elm));
            }
        }
        endConnected();
    }
};
var setContentReference = (elm)=>{
    if (!win.document) {
        return;
    }
    const contentRefElm = elm["s-cr"] = win.document.createComment("");
    contentRefElm["s-cn"] = true;
    insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm)=>{
    {
        safeCall(instance, "disconnectedCallback", void 0, elm || instance);
    }
};
var disconnectedCallback = async (elm)=>{
    if ((plt.$flags$ & 1 /* isTmpDisconnected */ ) === 0) {
        const hostRef = getHostRef(elm);
        {
            if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener)=>rmListener());
                hostRef.$rmListeners$ = void 0;
            }
        }
        if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
            disconnectInstance(hostRef.$lazyInstance$, elm);
        } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
            hostRef.$onReadyPromise$.then(()=>disconnectInstance(hostRef.$lazyInstance$, elm));
        }
    }
    if (rootAppliedStyles.has(elm)) {
        rootAppliedStyles.delete(elm);
    }
    if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
        rootAppliedStyles.delete(elm.shadowRoot);
    }
};
// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {})=>{
    var _a;
    if (!win.document) {
        console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
        return;
    }
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements2 = win.customElements;
    const head = win.document.head;
    const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
    const dataStyles = /* @__PURE__ */ win.document.createElement("style");
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
    {
        plt.$flags$ |= 2 /* appLoaded */ ;
    }
    let hasSlotRelocation = false;
    lazyBundles.map((lazyBundle)=>{
        lazyBundle[1].map((compactMeta)=>{
            var _a2;
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3]
            };
            if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */ ) {
                hasSlotRelocation = true;
            }
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self){
                    super(self);
                    this.hasRegisteredEventListeners = false;
                    self = this;
                    registerHost(self, cmpMeta);
                }
                connectedCallback() {
                    const hostRef = getHostRef(this);
                    if (!hostRef) {
                        return;
                    }
                    if (!this.hasRegisteredEventListeners) {
                        this.hasRegisteredEventListeners = true;
                        addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
                    }
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        deferredConnectedCallbacks.push(this);
                    } else {
                        plt.jmp(()=>connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(()=>disconnectedCallback(this));
                    plt.raf(()=>{
                        var _a3;
                        const hostRef = getHostRef(this);
                        if (!hostRef) {
                            return;
                        }
                        const i2 = deferredConnectedCallbacks.findIndex((host)=>host === this);
                        if (i2 > -1) {
                            deferredConnectedCallbacks.splice(i2, 1);
                        }
                        if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
                            delete hostRef.$vnode$.$elm$;
                        }
                    });
                }
                componentOnReady() {
                    var _a3;
                    return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
                cmpTags.push(tagName);
                customElements2.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */ ));
            }
        });
    });
    if (cmpTags.length > 0) {
        if (hasSlotRelocation) {
            dataStyles.textContent += SLOT_FB_CSS;
        }
        if (dataStyles.innerHTML.length) {
            dataStyles.setAttribute("data-styles", "");
            const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
            if (nonce != null) {
                dataStyles.setAttribute("nonce", nonce);
            }
            head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
        }
    }
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host)=>host.connectedCallback());
    } else {
        {
            plt.jmp(()=>appLoadFallback = setTimeout(appDidLoad, 30));
        }
    }
    endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners)=>{
    if (listeners && win.document) {
        listeners.map(([flags, name, method])=>{
            const target = getHostListenerTarget(win.document, elm, flags);
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(()=>plt.rel(target, name, handler, opts));
        });
    }
};
var hostListenerProxy = (hostRef, methodName)=>(ev)=>{
        var _a;
        try {
            {
                if (hostRef.$flags$ & 256 /* isListenReady */ ) {
                    (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
                } else {
                    (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([
                        methodName,
                        ev
                    ]);
                }
            }
        } catch (e) {
            consoleError(e, hostRef.$hostElement$);
        }
    };
var getHostListenerTarget = (doc, elm, flags)=>{
    if (flags & 4 /* TargetDocument */ ) {
        return doc;
    }
    return elm;
};
var hostListenerOpts = (flags)=>supportsListenerOptions ? {
        passive: (flags & 1 /* Passive */ ) !== 0,
        capture: (flags & 2 /* Capture */ ) !== 0
    } : (flags & 2 /* Capture */ ) !== 0;
// src/runtime/nonce.ts
var setNonce = (nonce)=>plt.$nonce$ = nonce;
;
 //# sourceMappingURL=index-Dyptvvxf.js.map
 //# sourceMappingURL=index-Dyptvvxf.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/app-globals-C3ZHKjnB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "g",
    ()=>globalScripts
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
;
function appGlobalScript() {}
const globalScripts = appGlobalScript;
;
 //# sourceMappingURL=app-globals-C3ZHKjnB.js.map
 //# sourceMappingURL=app-globals-C3ZHKjnB.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/loader.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineCustomElements",
    ()=>defineCustomElements
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$app$2d$globals$2d$C3ZHKjnB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/app-globals-C3ZHKjnB.js [app-ssr] (ecmascript)");
;
;
;
const defineCustomElements = async (win, options)=>{
    if ("TURBOPACK compile-time truthy", 1) return undefined;
    //TURBOPACK unreachable
    ;
};
;
 //# sourceMappingURL=loader.js.map
 //# sourceMappingURL=loader.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/loader/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/loader.js [app-ssr] (ecmascript) <locals>");
/*!
 * Built by Revolist OU ❤️
 */ (function() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var a;
    }
})();
;
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/loader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineCustomElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineCustomElements"],
    "setNonce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/loader.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>Symbol,
    "a",
    ()=>isObject,
    "b",
    ()=>baseGetTag,
    "c",
    ()=>isSymbol,
    "d",
    ()=>debounce,
    "f",
    ()=>freeGlobal,
    "i",
    ()=>isObjectLike,
    "r",
    ()=>root,
    "t",
    ()=>toNumber
]);
/*!
 * Built by Revolist OU ❤️
 */ /** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Built-in value references. */ var Symbol = root.Symbol;
/** Used for built-in method references. */ var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto$1.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString$1 = objectProto$1.toString;
/** Built-in value references. */ var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
        value[symToStringTag$1] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag$1] = tag;
        } else {
            delete value[symToStringTag$1];
        }
    }
    return result;
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index))){}
    return index;
}
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
;
 //# sourceMappingURL=debounce-BfO9dz9v.js.map
 //# sourceMappingURL=debounce-BfO9dz9v.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$",
    ()=>getTag,
    "A",
    ()=>ROW_HEADER_TYPE,
    "B",
    ()=>HEADER_SORTABLE_CLASS,
    "C",
    ()=>CELL_CLASS,
    "D",
    ()=>DataStore,
    "E",
    ()=>HEADER_ROW_CLASS,
    "F",
    ()=>HEADER_ACTUAL_ROW_CLASS,
    "G",
    ()=>DRAG_ICON_CLASS,
    "H",
    ()=>HEADER_CLASS,
    "I",
    ()=>DRAGGABLE_CLASS,
    "J",
    ()=>FOCUS_CLASS,
    "K",
    ()=>MOBILE_CLASS,
    "L",
    ()=>CELL_HANDLER_CLASS,
    "M",
    ()=>MIN_COL_SIZE,
    "N",
    ()=>EDIT_INPUT_WR,
    "O",
    ()=>DRAGG_TEXT,
    "P",
    ()=>GRID_INTERNALS,
    "Q",
    ()=>ROW_FOCUSED_CLASS,
    "R",
    ()=>RESIZE_INTERVAL,
    "S",
    ()=>SELECTION_BORDER_CLASS,
    "T",
    ()=>TMP_SELECTION_BG_CLASS,
    "U",
    ()=>codesLetter,
    "V",
    ()=>keyValues,
    "W",
    ()=>createStore,
    "X",
    ()=>identity,
    "Y",
    ()=>isArray,
    "Z",
    ()=>baseProperty,
    "_",
    ()=>isArrayLike,
    "a",
    ()=>getVisibleSourceItem,
    "a0",
    ()=>baseKeys,
    "a1",
    ()=>KeyCodesEnum,
    "a2",
    ()=>OsPlatform,
    "a3",
    ()=>getNative,
    "a4",
    ()=>baseIteratee,
    "a5",
    ()=>toFinite,
    "a6",
    ()=>keys,
    "a7",
    ()=>isIterateeCall,
    "b",
    ()=>getSourceItem,
    "c",
    ()=>getSourcePhysicalIndex,
    "d",
    ()=>setSourceByPhysicalIndex,
    "e",
    ()=>setItems,
    "f",
    ()=>getSourceItemVirtualIndexByProp,
    "g",
    ()=>getPhysical,
    "h",
    ()=>gatherTrimmedItems,
    "i",
    ()=>calculateDimensionData,
    "j",
    ()=>getItemByPosition,
    "k",
    ()=>getItemByIndex,
    "l",
    ()=>findPositionInArray,
    "m",
    ()=>pushSorted,
    "n",
    ()=>mergeSortedArray,
    "o",
    ()=>getScrollbarSize,
    "p",
    ()=>proxyPlugin,
    "q",
    ()=>scaleValue,
    "r",
    ()=>range,
    "s",
    ()=>setSourceByVirtualIndex,
    "t",
    ()=>trimmedPlugin,
    "u",
    ()=>timeout,
    "v",
    ()=>applyMixins,
    "w",
    ()=>setStore,
    "x",
    ()=>DATA_COL,
    "y",
    ()=>DATA_ROW,
    "z",
    ()=>DISABLED_CLASS
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-ssr] (ecmascript)");
;
;
/**
 * Todo:
 * Refactor proxy plugin: when items changed outside proxy get recalculated
 */ /**
 * Proxy plugin for data source.
 *
 * This plugin is used keep sortint in the data source, even when trimming is applied sorting has to be preserved.
 */ const proxyPlugin = (store)=>({
        /**
     * Set the value of a property in the store.
     * If the key is 'proxyItems' it will filter the items in the data source according to the new value.
     * The new value should be an array of numbers representing the indexes of the items that should be visible.
     * The method will return a new array of numbers with the indexes of the items that should be visible.
     * The method will also update the 'items' property of the store with the new array.
     */ set (k, newVal) {
            if (k !== 'proxyItems') {
                return;
            }
            /**
         * Getting existing collection of items (trimmed and filtered)
         * Mark indexes as visible
         */ const oldItems = store.get('items').reduce((r, v)=>{
                r.add(v);
                return r;
            }, new Set());
            /**
         * Check if new values where present in items, keep filtering and trimming
         */ const newItems = newVal.reduce((r, i)=>{
                if (oldItems.has(i)) {
                    r.push(i);
                }
                return r;
            }, []);
            store.set('items', newItems);
        }
    });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + -1;
    while(++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else {
        data[index][1] = value;
    }
    return this;
}
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag$1 = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/** Used to detect overreaching core-js shims. */ var coreJsData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"]['__core-js_shared__'];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/** Used for built-in method references. */ var funcProto$1 = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString$1 = funcProto$1.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString$1.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto$9 = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/* Built-in method references that are verified to be native. */ var Map$1 = getNative(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], 'Map');
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}
/** Used for built-in method references. */ var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$5.call(data, key);
}
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
}
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map$1 || ListCache),
        'string': new Hash
    };
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length){
        this.add(values[index]);
    }
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
            if (compared) {
                continue;
            }
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                }
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
/** Built-in value references. */ var Uint8Array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].Uint8Array;
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
/** `Object#toString` result references. */ var boolTag$1 = '[object Boolean]', dateTag$1 = '[object Date]', errorTag$1 = '[object Error]', mapTag$2 = '[object Map]', numberTag$1 = '[object Number]', regexpTag$1 = '[object RegExp]', setTag$2 = '[object Set]', stringTag$1 = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]', dataViewTag$2 = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].prototype : undefined, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag$2:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
            }
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag$1:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
            }
            return true;
        case boolTag$1:
        case dateTag$1:
        case numberTag$1:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag$1:
            return object.name == other.name && object.message == other.message;
        case regexpTag$1:
        case stringTag$1:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag$2:
            var convert = mapToArray;
        case setTag$2:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
                return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG$2;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
    }
    return false;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/** Used for built-in method references. */ var objectProto$6 = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable$1.call(object, symbol);
    });
};
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
/** `Object#toString` result references. */ var argsTag$2 = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(value) == argsTag$2;
}
/** Used for built-in method references. */ var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
/** Detect free variable `exports`. */ var freeExports$1 = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule$1 = freeExports$1 && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Built-in value references. */ var Buffer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/** `Object#toString` result references. */ var argsTag$1 = '[object Arguments]', arrayTag$1 = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag$1 = '[object Map]', numberTag = '[object Number]', objectTag$2 = '[object Object]', regexpTag = '[object RegExp]', setTag$1 = '[object Set]', stringTag = '[object String]', weakMapTag$1 = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag$1 = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(value) && isLength(value.length) && !!typedArrayTags[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(value)];
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"].process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/** Used for built-in method references. */ var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value){
        if (hasOwnProperty$3.call(value, key) && !(skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
/** Used for built-in method references. */ var objectProto$3 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$3;
    return value === proto;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
/** Used for built-in method references. */ var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$3 = 1;
/** Used for built-in method references. */ var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
        return false;
    }
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
            return false;
        }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
        }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
/* Built-in method references that are verified to be native. */ var DataView = getNative(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], 'DataView');
/* Built-in method references that are verified to be native. */ var Promise$1 = getNative(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], 'Promise');
/* Built-in method references that are verified to be native. */ var Set$1 = getNative(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], 'Set');
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], 'WeakMap');
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag$1 = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"];
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) {
    getTag = function(value) {
        var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(value), Ctor = result == objectTag$1 ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
        if (ctorString) {
            switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$2 = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) //TURBOPACK unreachable
    ;
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(other)) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index;
    if (object == null) {
        return !length;
    }
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
        }
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (data[2]) {
            if (objValue === undefined && !(key in object)) {
                return false;
            }
        } else {
            var stack = new Stack;
            var result;
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(value);
}
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) {
            return false;
        }
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
        }
        return key;
    });
    var cache = result.cache;
    return result;
}
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) {
        result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/** Used to convert symbols to primitives and strings. */ var symbolProto = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) {
        return value;
    }
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length){
        object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
        return value;
    }
    if (value == null) {
        return identity;
    }
    if (typeof value == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
}
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(value);
    if (value === INFINITY || value === -Infinity) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */ function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    var index = 0;
    return baseFindIndex(array, baseIteratee(predicate), index);
}
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeMax = Math.max;
/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */ function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while(length--){
        result[++index] = start;
        start += step;
    }
    return result;
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
        return eq(object[index], value);
    }
    return false;
}
/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */ function createRange(fromRight) {
    return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
            end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
            end = start;
            start = 0;
        } else {
            end = toFinite(end);
        }
        step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step);
    };
}
/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */ var range$1 = createRange();
const appendToMap = (map, propName, value)=>{
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [
            value
        ]);
    } else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms)=>{
    let timeoutId;
    return (...args)=>{
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};
/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */ const isConnected = (maybeElement)=>!('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map)=>{
    for (let key of map.keys()){
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2_000);
const stencilSubscription = ()=>{
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"] !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: ()=>elmsToUpdate.clear(),
        get: (propName)=>{
            const elm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName)=>{
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: ()=>{
            elmsToUpdate.forEach((elms)=>elms.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]));
            cleanupElements(elmsToUpdate);
        }
    };
};
const unwrap = (val)=>typeof val === 'function' ? val() : val;
const createObservableMap = (defaultState, shouldUpdate = (a, b)=>a !== b)=>{
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState ?? {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: []
    };
    // Track onChange listeners to enable removeListener functionality
    const changeListeners = new Map();
    const reset = ()=>{
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries(unwrap(defaultState) ?? {}));
        handlers.reset.forEach((cb)=>cb());
    };
    const dispose = ()=>{
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb)=>cb());
        reset();
    };
    const get = (propName)=>{
        handlers.get.forEach((cb)=>cb(propName));
        return states.get(propName);
    };
    const set = (propName, value)=>{
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb)=>cb(propName, value, oldValue));
        }
    };
    const state = typeof Proxy === 'undefined' ? {} : new Proxy(unwrappedState, {
        get (_, propName) {
            return get(propName);
        },
        ownKeys (_) {
            return Array.from(states.keys());
        },
        getOwnPropertyDescriptor () {
            return {
                enumerable: true,
                configurable: true
            };
        },
        has (_, propName) {
            return states.has(propName);
        },
        set (_, propName, value) {
            set(propName, value);
            return true;
        }
    });
    const on = (eventName, callback)=>{
        handlers[eventName].push(callback);
        return ()=>{
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb)=>{
        const setHandler = (key, newValue)=>{
            if (key === propName) {
                cb(newValue);
            }
        };
        const resetHandler = ()=>cb(unwrap(defaultState)[propName]);
        // Register the handlers
        const unSet = on('set', setHandler);
        const unReset = on('reset', resetHandler);
        // Track the relationship between the user callback and internal handlers
        changeListeners.set(cb, {
            setHandler,
            resetHandler,
            propName
        });
        return ()=>{
            unSet();
            unReset();
            changeListeners.delete(cb);
        };
    };
    const use = (...subscriptions)=>{
        const unsubs = subscriptions.reduce((unsubs, subscription)=>{
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return ()=>unsubs.forEach((unsub)=>unsub());
    };
    const forceUpdate = (key)=>{
        const oldValue = states.get(key);
        handlers.set.forEach((cb)=>cb(key, oldValue, oldValue));
    };
    const removeListener = (propName, listener)=>{
        const listenerInfo = changeListeners.get(listener);
        if (listenerInfo && listenerInfo.propName === propName) {
            // Remove the specific handlers that were created for this listener
            removeFromArray(handlers.set, listenerInfo.setHandler);
            removeFromArray(handlers.reset, listenerInfo.resetHandler);
            changeListeners.delete(listener);
        }
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
        removeListener
    };
};
const removeFromArray = (array, item)=>{
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};
const createStore = (defaultState, shouldUpdate)=>{
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};
/**
 * Hide items from main collection
 * But keep them in store
 */ const trimmedPlugin = (store)=>({
        set (k, newVal) {
            switch(k){
                case 'trimmed':
                    {
                        // full sorted items list
                        const proxy = store.get('proxyItems');
                        const trimmed = gatherTrimmedItems(newVal);
                        // filter our physical indexes which are not trimmed
                        const newItems = proxy.filter((v)=>!trimmed[v]);
                        // set trimmed items in store
                        store.set('items', newItems);
                        break;
                    }
            }
        }
    });
function gatherTrimmedItems(trimmedItems) {
    const trimmed = {};
    for(let trimmedKey in trimmedItems){
        // trimmed overweight not trimmed
        for(let t in trimmedItems[trimmedKey]){
            trimmed[t] = trimmed[t] || trimmedItems[trimmedKey][t];
        }
    }
    return trimmed;
}
/**
 * Sets the given data on the specified store.
 *
 * @param store - The store to set data on.
 * @param data - The data to set on the store.
 */ function setStore(store, data) {
    Object.entries(data).forEach(([key, value])=>{
        store.set(key, value);
    });
}
const MIN_COL_SIZE = 30;
const RESIZE_INTERVAL = 40;
const DATA_COL = 'data-rgCol';
const DATA_ROW = 'data-rgRow';
const DISABLED_CLASS = 'disabled';
const CELL_CLASS = 'rgCell';
const ROW_HEADER_TYPE = 'rowHeaders';
const HEADER_CLASS = 'rgHeaderCell';
const HEADER_SORTABLE_CLASS = 'sortable';
const HEADER_ROW_CLASS = 'header-rgRow';
const HEADER_ACTUAL_ROW_CLASS = 'actual-rgRow';
const DRAG_ICON_CLASS = 'revo-drag-icon';
const DRAGGABLE_CLASS = 'revo-draggable';
const FOCUS_CLASS = 'focused-cell';
const SELECTION_BORDER_CLASS = 'selection-border-range';
const MOBILE_CLASS = 'mobile-handler';
const TMP_SELECTION_BG_CLASS = 'temp-bg-range';
const CELL_HANDLER_CLASS = 'autofill-handle';
const EDIT_INPUT_WR = 'edit-input-wrapper';
const DRAGG_TEXT = 'Draggable item';
const GRID_INTERNALS = '__rvgr';
const ROW_FOCUSED_CLASS = 'focused-rgRow';
var codes;
(function(codes) {
    codes[codes["MOUSE_LEFT"] = 1] = "MOUSE_LEFT";
    codes[codes["MOUSE_RIGHT"] = 3] = "MOUSE_RIGHT";
    codes[codes["MOUSE_MIDDLE"] = 2] = "MOUSE_MIDDLE";
    codes[codes["BACKSPACE"] = 8] = "BACKSPACE";
    codes[codes["COMMA"] = 188] = "COMMA";
    codes[codes["INSERT"] = 45] = "INSERT";
    codes[codes["DELETE"] = 46] = "DELETE";
    codes[codes["END"] = 35] = "END";
    codes[codes["ENTER"] = 13] = "ENTER";
    codes[codes["ESCAPE"] = 27] = "ESCAPE";
    codes[codes["CONTROL"] = 17] = "CONTROL";
    codes[codes["COMMAND_LEFT"] = 91] = "COMMAND_LEFT";
    codes[codes["COMMAND_RIGHT"] = 93] = "COMMAND_RIGHT";
    codes[codes["COMMAND_FIREFOX"] = 224] = "COMMAND_FIREFOX";
    codes[codes["ALT"] = 18] = "ALT";
    codes[codes["HOME"] = 36] = "HOME";
    codes[codes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    codes[codes["PAGE_UP"] = 33] = "PAGE_UP";
    codes[codes["PERIOD"] = 190] = "PERIOD";
    codes[codes["SPACE"] = 32] = "SPACE";
    codes[codes["SHIFT"] = 16] = "SHIFT";
    codes[codes["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    codes[codes["TAB"] = 9] = "TAB";
    codes[codes["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
    codes[codes["ARROW_LEFT"] = 37] = "ARROW_LEFT";
    codes[codes["ARROW_UP"] = 38] = "ARROW_UP";
    codes[codes["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    codes[codes["F1"] = 112] = "F1";
    codes[codes["F2"] = 113] = "F2";
    codes[codes["F3"] = 114] = "F3";
    codes[codes["F4"] = 115] = "F4";
    codes[codes["F5"] = 116] = "F5";
    codes[codes["F6"] = 117] = "F6";
    codes[codes["F7"] = 118] = "F7";
    codes[codes["F8"] = 119] = "F8";
    codes[codes["F9"] = 120] = "F9";
    codes[codes["F10"] = 121] = "F10";
    codes[codes["F11"] = 122] = "F11";
    codes[codes["F12"] = 123] = "F12";
    codes[codes["A"] = 65] = "A";
    codes[codes["C"] = 67] = "C";
    codes[codes["D"] = 68] = "D";
    codes[codes["F"] = 70] = "F";
    codes[codes["L"] = 76] = "L";
    codes[codes["O"] = 79] = "O";
    codes[codes["P"] = 80] = "P";
    codes[codes["S"] = 83] = "S";
    codes[codes["V"] = 86] = "V";
    codes[codes["X"] = 88] = "X";
})(codes || (codes = {}));
var codesLetter;
(function(codesLetter) {
    codesLetter["ENTER"] = "Enter";
    codesLetter["ENTER_NUM"] = "NumpadEnter";
    codesLetter["A"] = "KeyA";
    codesLetter["C"] = "KeyC";
    codesLetter["X"] = "KeyX";
    codesLetter["V"] = "KeyV";
    codesLetter["ESCAPE"] = "Escape";
    codesLetter["TAB"] = "Tab";
    codesLetter["BACKSPACE"] = "Backspace";
    codesLetter["DELETE"] = "Delete";
    codesLetter["ARROW_RIGHT"] = "ArrowRight";
    codesLetter["ARROW_LEFT"] = "ArrowLeft";
    codesLetter["ARROW_UP"] = "ArrowUp";
    codesLetter["ARROW_DOWN"] = "ArrowDown";
    codesLetter["SHIFT"] = "Shift";
})(codesLetter || (codesLetter = {}));
var keyValues;
(function(keyValues) {
    keyValues["ENTER"] = "Enter";
    keyValues["TAB"] = "Tab";
})(keyValues || (keyValues = {}));
var KeyCodesEnum = codes;
var osPlatform;
(function(osPlatform) {
    osPlatform["mac"] = "Mac";
})(osPlatform || (osPlatform = {}));
var OsPlatform = osPlatform;
/* Generate range on size
 */ function range(size, startAt = 0) {
    const res = [];
    const end = startAt + size;
    for(let i = startAt; i < end; i++){
        res.push(i);
    }
    return res;
}
/* Find index position in array */ function findPositionInArray(el, compareFn) {
    return function(arr) {
        let m = 0;
        let n = arr.length - 1;
        while(m <= n){
            const k = n + m >> 1;
            const cmp = compareFn(el, arr[k]);
            if (cmp > 0) {
                m = k + 1;
            } else if (cmp < 0) {
                n = k - 1;
            } else {
                return k;
            }
        }
        return -m - 1;
    }(this);
}
/**
 * Sorted push
 */ function pushSorted(arr, el, fn) {
    arr.splice(findPositionInArray.bind(arr)(el, fn), 0, el);
    return arr;
}
// (arr1[index1] < arr2[index2])
function simpleCompare(el1, el2) {
    return el1 < el2;
}
/**
 * Merge sorted array helper function
 */ function mergeSortedArray(arr1, arr2, compareFn = simpleCompare) {
    const merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    while(current < arr1.length + arr2.length){
        let isArr1Depleted = index1 >= arr1.length;
        let isArr2Depleted = index2 >= arr2.length;
        if (!isArr1Depleted && (isArr2Depleted || compareFn(arr1[index1], arr2[index2]))) {
            merged[current] = arr1[index1];
            index1++;
        } else {
            merged[current] = arr2[index2];
            index2++;
        }
        current++;
    }
    return merged;
}
/**
 * Calculate system scrollbar size
 */ function getScrollbarSize(document) {
    // Create a temporary div container and append it to the body
    const container = document.createElement('div');
    // Apply styling to ensure the div is scrollable
    container.style.overflow = 'scroll';
    container.style.visibility = 'hidden'; // make sure the container isn't visible
    container.style.position = 'absolute';
    container.style.top = '-9999px'; // move it out of the screen
    container.style.width = '50px'; // arbitrary width
    container.style.height = '50px'; // arbitrary height
    // Append the div to the body
    document.body.appendChild(container);
    // Calculate the width of the scrollbar
    const scrollbarWidth = container.offsetWidth - container.clientWidth;
    // Remove the div from the body after calculation
    document.body.removeChild(container);
    // Return the calculated width of the scrollbar
    return scrollbarWidth;
}
/* Scale a value between 2 ranges
 *
 * Sample:
 * // 55 from a 0-100 range to a 0-1000 range (Ranges don't have to be positive)
 * const n = scaleValue(55, [0,100], [0,1000]);
 *
 * Ranges of two values
 * @from
 * @to
 *
 * ~~ return value does the equivalent of Math.floor but faster.
 */ function scaleValue(value, from, to) {
    return (to[1] - to[0]) * (value - from[0]) / (from[1] - from[0]) + to[0];
}
/**
 * Async timeout
 */ async function timeout(delay = 0) {
    await new Promise((r)=>{
        setTimeout(()=>r(), delay);
    });
}
/**
 * Type script mixins
 */ function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor)=>{
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name)=>{
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}
/**
 * Data store
 * Manage the state of a data source and provide methods for updating, adding, and refreshing the data.
 */ class DataStore {
    get store() {
        return this.dataStore;
    }
    constructor(type, storeData){
        const store = this.dataStore = createStore(Object.assign({
            items: [],
            proxyItems: [],
            source: [],
            groupingDepth: 0,
            groups: {},
            type,
            trimmed: {},
            groupingCustomRenderer: undefined
        }, storeData));
        store.use(proxyPlugin(store));
        store.use(trimmedPlugin(store));
    }
    /**
     * full data source update
     * @param source - data column/rgRow source
     * @param grouping - grouping information if present
     */ updateData(source, grouping, silent = false) {
        // during full update we do drop trim
        if (!silent) {
            this.store.set('trimmed', {});
        }
        // clear items
        this.store.set('items', []);
        const items = range$1(0, (source === null || source === void 0 ? void 0 : source.length) || 0);
        // set proxy first
        setStore(this.store, {
            source,
            proxyItems: [
                ...items
            ]
        });
        // update data items
        this.store.set('items', items);
        // apply grouping if present
        if (grouping) {
            setStore(this.store, {
                groupingDepth: grouping.depth,
                groups: grouping.groups,
                groupingCustomRenderer: grouping.customRenderer
            });
        }
    }
    addTrimmed(some) {
        let trimmed = this.store.get('trimmed');
        trimmed = Object.assign(Object.assign({}, trimmed), some);
        setStore(this.store, {
            trimmed
        });
    }
    setSourceData(items, mutate = true) {
        setSourceByVirtualIndex(this.store, items, mutate);
    }
    // local data update
    setData(input) {
        const data = Object.assign({}, input);
        setStore(this.store, data);
    }
    refresh() {
        const source = this.store.get('source');
        this.store.set('source', [
            ...source
        ]);
    }
}
/**
 * get physical index by virtual
 * @param store - store to process
 */ function getPhysical(store, virtualIndex) {
    const items = store.get('items');
    return items[virtualIndex];
}
/**
 * get all visible items
 * @param store - store to process
 */ function getVisibleSourceItem(store) {
    const source = store.get('source');
    return store.get('items').map((v)=>source[v]);
}
/**
 * get mapped item from source
 * @param store - store to process
 * @param virtualIndex - virtual index to process
 */ const getSourceItem = (store, virtualIndex)=>{
    const source = store.get('source');
    return source[getSourcePhysicalIndex(store, virtualIndex)];
};
/**
 * Get physical index from virtual index
 */ const getSourcePhysicalIndex = (store, virtualIndex)=>{
    const items = store.get('items');
    return items[virtualIndex];
};
/**
 * Apply silently item/model/row value to data source
 * @param store  - data source with changes
 * @param modelByIndex - collection of rows/values with virtual indexes to setup/replace in store/data source
 * @param mutate - if true, store will be mutated and whole viewport will be re-rendered
 */ function setSourceByVirtualIndex(store, modelByIndex, mutate = true) {
    const items = store.get('items');
    const source = store.get('source');
    for(let virtualIndex in modelByIndex){
        const realIndex = items[virtualIndex];
        const item = modelByIndex[virtualIndex];
        source[realIndex] = item;
    }
    if (mutate) {
        store.set('source', [
            ...source
        ]);
    }
}
/**
 * set item to source
 * @param store  - store to process
 * @param modelByIndex - collection of rows with physical indexes to setup
 * @param mutate - if true, store will be mutated and whole viewport will be re-rendered
 */ function setSourceByPhysicalIndex(store, modelByIndex, mutate = true) {
    const source = store.get('source');
    for(let index in modelByIndex){
        source[index] = modelByIndex[index];
    }
    if (mutate) {
        store.set('source', [
            ...source
        ]);
    }
}
function setItems(store, items) {
    store.set('items', items);
}
function getSourceItemVirtualIndexByProp(store, prop) {
    const items = store.get('items');
    const source = store.get('source');
    const physicalIndex = findIndex(source, {
        prop
    });
    return items.indexOf(physicalIndex);
}
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH$1 = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH$1 - 1;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeFloor = Math.floor, nativeMin = Math.min;
/**
 * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */ function baseSortedIndexBy(array, value, iteratee, retHighest) {
    var low = 0, high = array == null ? 0 : array.length;
    if (high === 0) {
        return 0;
    }
    value = iteratee(value);
    var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(value), valIsUndefined = value === undefined;
    while(low < high){
        var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(computed);
        if (valIsNaN) {
            var setLow = othIsReflexive;
        } else if (valIsUndefined) {
            setLow = othIsReflexive && othIsDefined;
        } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && !othIsNull;
        } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && !othIsSymbol;
        } else if (othIsNull || othIsSymbol) {
            setLow = false;
        } else {
            setLow = computed < value;
        }
        if (setLow) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nativeMin(high, MAX_ARRAY_INDEX);
}
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
/**
 * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */ function baseSortedIndex(array, value, retHighest) {
    var low = 0, high = array == null ? low : array.length;
    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while(low < high){
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(computed) && computed < value) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return high;
    }
    return baseSortedIndexBy(array, value, identity);
}
/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedIndex([30, 50], 40);
 * // => 1
 */ function sortedIndex(array, value) {
    return baseSortedIndex(array, value);
}
/**
 * Pre-calculation
 * Dimension custom sizes for each cell
 * Keeps only changed sizes, skips origin size
 */ function calculateDimensionData(originItemSize, newSizes = {}) {
    const positionIndexes = [];
    const positionIndexToItem = {};
    const indexToItem = {};
    // prepare order sorted new sizes and calculate changed real size
    const newIndexes = Object.keys(newSizes).map(Number).sort((a, b)=>a - b);
    let previous;
    for(let i = 0; i < newIndexes.length; i++){
        const itemIndex = newIndexes[i];
        const newItem = {
            itemIndex,
            start: 0,
            end: 0
        };
        // if previous item was changed too
        if (previous) {
            const itemsBetween = (itemIndex - previous.itemIndex - 1) * originItemSize;
            newItem.start = itemsBetween + previous.end;
        } else {
            newItem.start = itemIndex * originItemSize;
        }
        newItem.end = newItem.start + newSizes[itemIndex];
        positionIndexes.push(newItem.start);
        indexToItem[itemIndex] = positionIndexToItem[i] = newItem;
        previous = newItem;
    }
    return {
        indexes: newIndexes,
        positionIndexes: [
            ...positionIndexes
        ],
        positionIndexToItem: Object.assign({}, positionIndexToItem),
        indexToItem
    };
}
/**
 * Calculate item by position
 */ const getItemByPosition = ({ indexes, positionIndexes, originItemSize, positionIndexToItem }, pos)=>{
    const item = {
        itemIndex: 0,
        start: 0,
        end: 0
    };
    const currentPlace = indexes.length ? sortedIndex(positionIndexes, pos) : 0;
    // not found or first index
    if (!currentPlace) {
        item.itemIndex = Math.floor(pos / originItemSize);
        item.start = item.itemIndex * originItemSize;
        item.end = item.start + originItemSize;
        return item;
    }
    const positionItem = positionIndexToItem[currentPlace - 1];
    // if item has specified size
    if (positionItem.end > pos) {
        return positionItem;
    }
    // special size item was present before
    const relativePos = pos - positionItem.end;
    const relativeIndex = Math.floor(relativePos / originItemSize);
    item.itemIndex = positionItem.itemIndex + 1 + relativeIndex;
    item.start = positionItem.end + relativeIndex * originItemSize;
    item.end = item.start + originItemSize;
    return item;
};
function getItemByIndex(dimension, index) {
    let item = {
        itemIndex: index,
        start: 0,
        end: 0
    };
    // if item has specified size
    if (dimension.indexToItem[index]) {
        return dimension.indexToItem[index];
    }
    const currentPlace = dimension.indexes.length ? sortedIndex(dimension.indexes, index) : 0;
    // not found or first index
    if (!currentPlace) {
        item.start = item.itemIndex * dimension.originItemSize;
        item.end = item.start + dimension.originItemSize;
        return item;
    }
    // special size item was present before
    const positionItem = dimension.indexToItem[dimension.indexes[currentPlace - 1]];
    item.start = positionItem.end + (index - positionItem.itemIndex - 1) * dimension.originItemSize;
    item.end = item.start + dimension.originItemSize;
    return item;
}
;
 //# sourceMappingURL=dimension.helpers-D5lwLPzd.js.map
 //# sourceMappingURL=dimension.helpers-D5lwLPzd.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>getCellRaw,
    "B",
    ()=>getCellDataParsed,
    "C",
    ()=>getColumnType,
    "D",
    ()=>getColumnSizes,
    "E",
    ()=>isColGrouping,
    "F",
    ()=>getColumns,
    "G",
    ()=>GROUP_DEPTH,
    "H",
    ()=>gatherGroup,
    "I",
    ()=>getColumnByProp,
    "J",
    ()=>reduce,
    "K",
    ()=>baseEach,
    "L",
    ()=>toInteger,
    "M",
    ()=>ColumnService,
    "N",
    ()=>getCellEditor,
    "O",
    ()=>isRowDragService,
    "P",
    ()=>PSEUDO_GROUP_ITEM,
    "Q",
    ()=>doPropMerge,
    "a",
    ()=>cropCellToMax,
    "b",
    ()=>isRangeSingleCell,
    "c",
    ()=>columnTypes,
    "d",
    ()=>PSEUDO_GROUP_ITEM_ID,
    "e",
    ()=>PSEUDO_GROUP_ITEM_VALUE,
    "f",
    ()=>PSEUDO_GROUP_COLUMN,
    "g",
    ()=>getRange,
    "h",
    ()=>GROUP_EXPANDED,
    "i",
    ()=>isRowType,
    "j",
    ()=>GROUP_COLUMN_PROP,
    "k",
    ()=>GROUP_ORIGINAL_INDEX,
    "l",
    ()=>GROUP_EXPAND_BTN,
    "m",
    ()=>GROUP_EXPAND_EVENT,
    "n",
    ()=>nextCell,
    "o",
    ()=>GROUPING_ROW_TYPE,
    "p",
    ()=>getSource,
    "q",
    ()=>getExpanded,
    "r",
    ()=>rowTypes,
    "s",
    ()=>gatherGrouping,
    "t",
    ()=>getGroupingName,
    "u",
    ()=>isGrouping,
    "v",
    ()=>isGroupingColumn,
    "w",
    ()=>measureEqualDepth,
    "x",
    ()=>getParsedGroup,
    "y",
    ()=>isSameGroup,
    "z",
    ()=>getCellData
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
;
;
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a5"])(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) {
        accumulator = array[++index];
    }
    while(++index < length){
        accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
}
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[++index];
            if (iteratee(iterable[key], key, iterable) === false) {
                break;
            }
        }
        return object;
    };
}
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a6"]);
}
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) {
            return collection;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(collection)) {
            return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = -1, iterable = Object(collection);
        while(++index < length){
            if (iteratee(iterable[index], index, iterable) === false) {
                break;
            }
        }
        return collection;
    };
}
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */ var baseEach = createBaseEach(baseForOwn);
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */ function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
}
/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */ function reduce(collection, iteratee, accumulator) {
    var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
    return func(collection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a4"])(iteratee), accumulator, initAccum, baseEach);
}
function getCellData(val) {
    if (typeof val === 'undefined' || val === null) {
        return '';
    }
    return val;
}
function getCellRaw(model = {}, column) {
    if (!column) {
        return;
    }
    if (column.cellParser) {
        return column.cellParser(model, column);
    }
    return model[column.prop];
}
function getCellDataParsed(model, column) {
    return getCellData(getCellRaw(model, column));
}
/**
 * Get column type from column data
 */ function getColumnType(rgCol) {
    if (rgCol.pin) {
        return rgCol.pin;
    }
    return 'rgCol';
}
function getColumnSizes(cols) {
    const res = {};
    for (const [i, c] of cols.entries()){
        if (c.size) {
            res[i] = c.size;
        }
    }
    return res;
}
/**
 * Check if column is grouping column
 */ function isColGrouping(colData) {
    return !!colData.children;
}
/**
 * This function is used to create a collection of columns.
 */ function getColumns(columns, level = 0, types, resFromRoot) {
    const collection = {
        // columns as they are in stores per type
        columns: {
            rgCol: [],
            colPinStart: [],
            colPinEnd: []
        },
        // columns indexed by prop for quick access
        columnByProp: {},
        // column grouping
        columnGrouping: {
            rgCol: [],
            colPinStart: [],
            colPinEnd: []
        },
        // sorting
        sort: {},
        // max depth level for column grouping
        maxLevel: level
    };
    return reduce(columns, (res, colData)=>{
        var _a;
        // Grouped column
        if (isColGrouping(colData)) {
            res = gatherGroup(res, colData, getColumns(colData.children, level + 1, types, res), resFromRoot === null || resFromRoot === void 0 ? void 0 : resFromRoot.columns, level);
            return res;
        }
        // Column type
        const columnDefinitionFromType = colData.columnType && (types === null || types === void 0 ? void 0 : types[colData.columnType]);
        // Regular column
        const regularColumn = Object.assign(Object.assign({}, columnDefinitionFromType), colData);
        // Regular column, no Pin
        if (!regularColumn.pin) {
            res.columns.rgCol.push(regularColumn);
        // Pin
        } else {
            res.columns[regularColumn.pin].push(regularColumn);
        }
        if (regularColumn.order) {
            res.sort[regularColumn.prop] = regularColumn;
        }
        // it's possible that some columns have same prop, but better to avoid it
        if (!res.columnByProp[regularColumn.prop]) {
            res.columnByProp[regularColumn.prop] = [];
        }
        res.columnByProp[regularColumn.prop].push(regularColumn);
        // trigger setup hook if present
        (_a = regularColumn.beforeSetup) === null || _a === void 0 ? void 0 : _a.call(regularColumn, regularColumn);
        return res;
    }, collection);
}
function gatherGroup(res, colData, collection, existingColumnsByType, level = 0) {
    // group template
    const group = Object.assign(Object.assign({}, colData), {
        level,
        indexes: []
    });
    // check columns for update
    columnTypes.forEach((type)=>{
        const resultItem = res.columns[type];
        const collectionItem = collection.columns[type];
        // if column data
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(resultItem) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(collectionItem)) {
            // fill grouping
            const itemLength = collectionItem.length;
            if (itemLength) {
                const columnLength = [
                    ...(existingColumnsByType === null || existingColumnsByType === void 0 ? void 0 : existingColumnsByType[type]) || [],
                    ...resultItem
                ].length;
                // fill columns
                resultItem.push(...collectionItem);
                // fill indexes per each viewport
                res.columnGrouping[type].push(Object.assign(Object.assign({}, group), {
                    indexes: Array(itemLength).fill(columnLength).map((v, i)=>v + i)
                }));
            }
        }
    });
    // merge column groupings
    for(let k in collection.columnGrouping){
        const key = k;
        const collectionItem = collection.columnGrouping[key];
        res.columnGrouping[key].push(...collectionItem);
    }
    res.maxLevel = Math.max(res.maxLevel, collection.maxLevel);
    res.sort = Object.assign(Object.assign({}, res.sort), collection.sort);
    res.columnByProp = Object.assign(Object.assign({}, res.columnByProp), collection.columnByProp);
    return res;
}
function findColumn(columns, prop) {
    for (const c of columns){
        if (isColGrouping(c)) {
            const found = findColumn(c.children, prop);
            if (found) {
                return found;
            }
        } else if (c.prop === prop) {
            return c;
        }
    }
    return undefined;
}
function getColumnByProp(columns, prop) {
    return findColumn(columns, prop);
}
function nextCell(cell, lastCell) {
    const nextItem = {};
    let types = [
        'x',
        'y'
    ];
    // previous item check
    for (let t of types){
        if (cell[t] < 0) {
            nextItem[t] = cell[t];
            return nextItem;
        }
    }
    // next item check
    for (let t of types){
        if (cell[t] >= lastCell[t]) {
            nextItem[t] = cell[t] - lastCell[t];
            return nextItem;
        }
    }
    return null;
}
function cropCellToMax(cell, lastCell) {
    const croppedCell = Object.assign({}, cell);
    const cellCoordinates = [
        'x',
        'y'
    ];
    for (const coordinate of cellCoordinates){
        if (cell[coordinate] < 0) {
            croppedCell[coordinate] = 0;
        } else if (cell[coordinate] >= lastCell[coordinate]) {
            croppedCell[coordinate] = lastCell[coordinate] - 1;
        }
    }
    return croppedCell;
}
function getRange(start, end) {
    return start && end ? {
        x: Math.min(start.x, end.x),
        y: Math.min(start.y, end.y),
        x1: Math.max(start.x, end.x),
        y1: Math.max(start.y, end.y)
    } : null;
}
function isRangeSingleCell(a) {
    return a.x === a.x1 && a.y === a.y1;
}
const rowTypes = [
    'rowPinStart',
    'rgRow',
    'rowPinEnd'
];
const columnTypes = [
    'colPinStart',
    'rgCol',
    'colPinEnd'
];
function isRowType(type) {
    return rowTypes.indexOf(type) > -1;
}
const GROUP_DEPTH = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-depth`;
const PSEUDO_GROUP_ITEM = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-name`;
const PSEUDO_GROUP_ITEM_ID = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-id`;
const PSEUDO_GROUP_ITEM_VALUE = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-value`;
const PSEUDO_GROUP_COLUMN = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-column`;
const GROUP_EXPANDED = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-expanded`;
const GROUP_COLUMN_PROP = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-prop`;
const GROUP_ORIGINAL_INDEX = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]}-original-index`;
const GROUP_EXPAND_BTN = `group-expand`;
const GROUP_EXPAND_EVENT = `groupexpandclick`;
const GROUPING_ROW_TYPE = 'rgRow';
function getGroupValueDefault(item, prop) {
    return item[prop] || null;
}
// get source based on proxy item collection to preserve rgRow order
function getSource(source, items, withoutGrouping = false) {
    let index = 0;
    const result = {
        source: [],
        prevExpanded: {},
        oldNewIndexes: {}
    };
    // order important here, expected parent is first, then others
    items.forEach((i)=>{
        const model = source[i];
        if (!withoutGrouping) {
            result.source.push(model);
            return;
        }
        // grouping filter
        if (isGrouping(model)) {
            if (getExpanded(model)) {
                result.prevExpanded[model[PSEUDO_GROUP_ITEM_VALUE]] = true;
            }
        } else {
            result.source.push(model);
            result.oldNewIndexes[i] = index;
            index++;
        }
    });
    return result;
}
function getExpanded(model = {}) {
    return model[GROUP_EXPANDED];
}
function flattenGroupMaps({ groupedValues, parentIds, isExpanded, itemIndex, expandedAll, prevExpanded, columnProps }) {
    const depth = parentIds.length;
    const sourceWithGroups = [];
    // collapse all groups in the beginning
    let trimmed = {};
    // index mapping
    let oldNewIndexMap = {};
    groupedValues.forEach((innerGroupedValues, groupId)=>{
        const levelIds = [
            ...parentIds,
            groupId
        ];
        const mergedIds = levelIds.join(',');
        const isGroupExpanded = isExpanded && (!!expandedAll || !!prevExpanded[mergedIds]);
        sourceWithGroups.push({
            [PSEUDO_GROUP_ITEM]: groupId,
            [GROUP_DEPTH]: depth,
            [PSEUDO_GROUP_ITEM_ID]: JSON.stringify(levelIds),
            [PSEUDO_GROUP_ITEM_VALUE]: mergedIds,
            [GROUP_EXPANDED]: isGroupExpanded,
            [GROUP_COLUMN_PROP]: columnProps[depth],
            [columnProps[depth]]: groupId
        });
        itemIndex += 1;
        // If parent group is collapsed, mark all items as hidden
        if (!isExpanded && depth) {
            trimmed[itemIndex] = true;
        }
        if (Array.isArray(innerGroupedValues)) {
            // This branch handles leaf nodes (actual data items)
            innerGroupedValues.forEach((value)=>{
                itemIndex += 1;
                if (!isGroupExpanded) {
                    trimmed[itemIndex] = true; // Mark items as hidden if group is collapsed
                }
                oldNewIndexMap[value[GROUP_ORIGINAL_INDEX]] = itemIndex; // Keep track of new positions
            });
            sourceWithGroups.push(...innerGroupedValues);
        } else {
            // This branch handles nested groups (further subgroups)
            const children = flattenGroupMaps({
                groupedValues: innerGroupedValues,
                parentIds: levelIds,
                isExpanded: isGroupExpanded,
                itemIndex,
                expandedAll,
                prevExpanded,
                columnProps
            }); // Recursively process subgroups
            sourceWithGroups.push(...children.source);
            trimmed = Object.assign(Object.assign({}, children.trimmed), trimmed);
            oldNewIndexMap = Object.assign(Object.assign({}, children.oldNewIndexMap), oldNewIndexMap);
            itemIndex = children.itemIndex;
        }
    });
    return {
        source: sourceWithGroups,
        oldNewIndexMap,
        trimmed,
        itemIndex
    };
}
/**
 * Gather data for grouping
 * @param array - flat data array
 * @param columnProps - ids of groups
 * @param expanded - potentially expanded items if present
 */ function gatherGrouping(array, columnProps, { prevExpanded = {}, expandedAll = false, getGroupValue = getGroupValueDefault }) {
    const groupedItems = new Map();
    array.forEach((item, originalIndex)=>{
        const groupLevelValues = columnProps.map((groupId)=>getGroupValue(item, groupId));
        const lastLevelValue = groupLevelValues.pop();
        let currentGroupLevel = groupedItems;
        groupLevelValues.forEach((value)=>{
            if (!currentGroupLevel.has(value)) {
                currentGroupLevel.set(value, new Map());
            }
            currentGroupLevel = currentGroupLevel.get(value);
        });
        if (!currentGroupLevel.has(lastLevelValue)) {
            const groupItems = [];
            currentGroupLevel.set(lastLevelValue, groupItems);
        }
        const lastLevelItems = currentGroupLevel.get(lastLevelValue);
        lastLevelItems.push(Object.assign(Object.assign({}, item), {
            [GROUP_ORIGINAL_INDEX]: originalIndex
        }));
    });
    const groupingDepth = columnProps.length;
    const { source: sourceWithGroups, trimmed, oldNewIndexMap } = flattenGroupMaps({
        groupedValues: groupedItems,
        parentIds: [],
        isExpanded: true,
        itemIndex: -1,
        expandedAll,
        prevExpanded,
        columnProps
    });
    return {
        sourceWithGroups,
        depth: groupingDepth,
        trimmed,
        oldNewIndexMap
    };
}
function getGroupingName(rgRow) {
    return rgRow === null || rgRow === void 0 ? void 0 : rgRow[PSEUDO_GROUP_ITEM];
}
function isGrouping(rgRow) {
    return typeof (rgRow === null || rgRow === void 0 ? void 0 : rgRow[PSEUDO_GROUP_ITEM]) !== 'undefined';
}
function isGroupingColumn(column) {
    return typeof (column === null || column === void 0 ? void 0 : column[PSEUDO_GROUP_COLUMN]) !== 'undefined';
}
function measureEqualDepth(groupA, groupB) {
    const ln = groupA.length;
    let i = 0;
    for(; i < ln; i++){
        if (groupA[i] !== groupB[i]) {
            return i;
        }
    }
    return i;
}
function getParsedGroup(id) {
    const parseGroup = JSON.parse(id);
    // extra precaution and type safeguard
    if (!Array.isArray(parseGroup)) {
        return null;
    }
    return parseGroup;
}
// check if items is child of current clicked group
function isSameGroup(currentGroup, currentModel, nextModel) {
    const nextGroup = getParsedGroup(nextModel[PSEUDO_GROUP_ITEM_ID]);
    if (!nextGroup) {
        return false;
    }
    const depth = measureEqualDepth(currentGroup, nextGroup);
    return currentModel[GROUP_DEPTH] < depth;
}
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length){
        result[index] = array[index + start];
    }
    return result;
}
/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function slice(array, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    if (end && typeof end != 'number' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a7"])(array, start, end)) {
        start = 0;
        end = length;
    } else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
    }
    return baseSlice(array, start, end);
}
function getCellEditor(column, editors = {}) {
    const editor = column === null || column === void 0 ? void 0 : column.editor;
    if (!editor) {
        return undefined;
    }
    // reference
    if (typeof editor === 'string') {
        return editors[editor];
    }
    return editor;
}
class ColumnService {
    get columns() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this.source);
    }
    constructor(dataStore, source){
        this.dataStore = dataStore;
        this.source = source;
        this.unsubscribe = [];
        this.hasGrouping = false;
        this.unsubscribe.push(source.onChange('source', (s)=>this.checkGrouping(s)));
        this.checkGrouping(source.get('source'));
        this.type = source.get('type');
    }
    checkGrouping(cols) {
        for (let rgCol of cols){
            if (isGroupingColumn(rgCol)) {
                this.hasGrouping = true;
                return;
            }
            this.hasGrouping = false;
        }
    }
    isReadOnly(r, c) {
        var _a;
        const readOnly = (_a = this.columns[c]) === null || _a === void 0 ? void 0 : _a.readonly;
        if (typeof readOnly === 'function') {
            const data = this.rowDataModel(r, c);
            return readOnly(data);
        }
        return !!readOnly;
    }
    mergeProperties(r, c, defaultProps, schemaModel) {
        var _a, _b;
        const props = Object.assign({}, defaultProps);
        props.class = Object.assign(Object.assign({}, typeof props.class === 'string' ? {
            [props.class]: true
        } : props.class), {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"]]: true,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"]]: this.isReadOnly(r, c)
        });
        const extra = (_b = (_a = schemaModel.column) === null || _a === void 0 ? void 0 : _a.cellProperties) === null || _b === void 0 ? void 0 : _b.call(_a, schemaModel);
        if (!extra) {
            return props;
        }
        return doPropMerge(props, extra);
    }
    getRowClass(r, prop) {
        const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this.dataStore, r) || {};
        return model[prop] || '';
    }
    getSaveData(rowIndex, colIndex, val) {
        const data = this.rowDataModel(rowIndex, colIndex);
        if (typeof val === 'undefined') {
            val = getCellData(data.value);
        }
        return Object.assign(Object.assign({}, data), {
            val
        });
    }
    /**
     * Get cell data model for given rowIndex and colIndex
     * Used to pass data to editor/renderer
     */ rowDataModel(rowIndex, colIndex) {
        const column = this.columns[colIndex];
        const prop = column === null || column === void 0 ? void 0 : column.prop;
        const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this.dataStore, rowIndex) || {};
        const type = this.dataStore.get('type');
        return {
            prop,
            model,
            data: this.dataStore.get('source'),
            column,
            rowIndex,
            colIndex,
            colType: this.type,
            type,
            value: getCellRaw(model, column)
        };
    }
    getRangeData(d, columns) {
        var _a;
        const changed = {};
        // get original length sizes
        const copyColLength = d.oldRange.x1 - d.oldRange.x + 1;
        const copyRowLength = d.oldRange.y1 - d.oldRange.y + 1;
        const mapping = {};
        // rows
        for(let rowIndex = d.newRange.y, i = 0; rowIndex < d.newRange.y1 + 1; rowIndex++, i++){
            // copy original data link
            const oldRowIndex = d.oldRange.y + i % copyRowLength;
            const copyRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(this.dataStore, oldRowIndex) || {};
            // columns
            for(let colIndex = d.newRange.x, j = 0; colIndex < d.newRange.x1 + 1; colIndex++, j++){
                // check if old range area
                if (rowIndex >= d.oldRange.y && rowIndex <= d.oldRange.y1 && colIndex >= d.oldRange.x && colIndex <= d.oldRange.x1) {
                    continue;
                }
                // requested column beyond range
                if (!this.columns[colIndex]) {
                    continue;
                }
                const prop = (_a = this.columns[colIndex]) === null || _a === void 0 ? void 0 : _a.prop;
                const copyColIndex = d.oldRange.x + j % copyColLength;
                const copyColumnProp = columns[copyColIndex].prop;
                /** if can write */ if (!this.isReadOnly(rowIndex, colIndex)) {
                    /** to show before save */ if (!changed[rowIndex]) {
                        changed[rowIndex] = {};
                    }
                    changed[rowIndex][prop] = copyRow[copyColumnProp];
                    /** Generate mapping object */ if (!mapping[rowIndex]) {
                        mapping[rowIndex] = {};
                    }
                    mapping[rowIndex][prop] = {
                        colIndex: copyColIndex,
                        colProp: copyColumnProp,
                        rowIndex: oldRowIndex
                    };
                }
            }
        }
        return {
            changed,
            mapping
        };
    }
    getTransformedDataToApply(start, data) {
        const changed = {};
        const copyRowLength = data.length;
        const colLength = this.columns.length;
        const rowLength = this.dataStore.get('items').length;
        // rows
        let rowIndex = start.y;
        let maxCol = 0;
        for(let i = 0; rowIndex < rowLength && i < copyRowLength; rowIndex++, i++){
            // copy original data link
            const copyRow = data[i % copyRowLength];
            const copyColLength = (copyRow === null || copyRow === void 0 ? void 0 : copyRow.length) || 0;
            // columns
            let colIndex = start.x;
            for(let j = 0; colIndex < colLength && j < copyColLength; colIndex++, j++){
                const p = this.columns[colIndex].prop;
                const currentCol = j % colLength;
                /** if can write */ if (!this.isReadOnly(rowIndex, colIndex)) {
                    /** to show before save */ if (!changed[rowIndex]) {
                        changed[rowIndex] = {};
                    }
                    changed[rowIndex][p] = copyRow[currentCol];
                }
            }
            maxCol = Math.max(maxCol, colIndex - 1);
        }
        const range = getRange(start, {
            y: rowIndex - 1,
            x: maxCol
        });
        return {
            changed,
            range
        };
    }
    getRangeStaticData(d, value) {
        const changed = {};
        // rows
        for(let rowIndex = d.y, i = 0; rowIndex < d.y1 + 1; rowIndex++, i++){
            // columns
            for(let colIndex = d.x, j = 0; colIndex < d.x1 + 1; colIndex++, j++){
                // requested column beyond range
                if (!this.columns[colIndex]) {
                    continue;
                }
                const p = this.columns[colIndex].prop;
                /** if can write */ if (!this.isReadOnly(rowIndex, colIndex)) {
                    /** to show before save */ if (!changed[rowIndex]) {
                        changed[rowIndex] = {};
                    }
                    changed[rowIndex][p] = value;
                }
            }
        }
        return changed;
    }
    getRangeTransformedToProps(d, store) {
        var _a;
        const area = [];
        const type = this.dataStore.get('type');
        // rows
        for(let rowIndex = d.y, i = 0; rowIndex < d.y1 + 1; rowIndex++, i++){
            // columns
            for(let colIndex = d.x, j = 0; colIndex < d.x1 + 1; colIndex++, j++){
                const prop = (_a = this.columns[colIndex]) === null || _a === void 0 ? void 0 : _a.prop;
                area.push({
                    prop,
                    rowIndex,
                    colIndex,
                    model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(store, rowIndex),
                    type,
                    colType: this.type
                });
            }
        }
        return area;
    }
    copyRangeArray(range, store) {
        const cols = [
            ...this.columns
        ];
        const props = slice(cols, range.x, range.x1 + 1).map((v)=>v.prop);
        const toCopy = [];
        const mapping = {};
        // rows indexes
        for(let i = range.y; i <= range.y1; i++){
            const rgRow = [];
            mapping[i] = {};
            // columns indexes
            for (let prop of props){
                const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(store, i);
                // if no item - skip
                if (!item) {
                    continue;
                }
                const val = item[prop];
                rgRow.push(val);
                mapping[i][prop] = val;
            }
            toCopy.push(rgRow);
        }
        return {
            data: toCopy,
            mapping
        };
    }
    destroy() {
        this.unsubscribe.forEach((f)=>f());
    }
}
/**
 * Checks if the given rowDrag is a service for dragging rows.
 */ function isRowDragService(rowDrag, model) {
    if (typeof rowDrag === 'function') {
        return rowDrag(model);
    }
    return !!rowDrag;
}
function mergeClasses(class1 = {}, class2 = {}) {
    if (typeof class1 === 'string') {
        class1 = {
            [class1]: true
        };
    }
    if (typeof class2 === 'string') {
        class2 = {
            [class2]: true
        };
    }
    return Object.assign(Object.assign({}, class1), class2);
}
function doPropMerge(existing, extra) {
    // if className is provided - remove it from props it messing with stencil
    if (extra.className) {
        extra.class = mergeClasses(extra.class, extra.className);
        delete extra.className;
    }
    let props = Object.assign(Object.assign({}, extra), existing);
    // extend existing props
    if (extra.class) {
        props.class = mergeClasses(props.class, extra.class);
    }
    if (extra.style) {
        props.style = Object.assign(Object.assign({}, extra.style), props.style);
    }
    return props;
}
;
 //# sourceMappingURL=column.service-DT_CqxqZ.js.map
 //# sourceMappingURL=column.service-DT_CqxqZ.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/viewport.store-2mQugd8S.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "V",
    ()=>ViewportStore,
    "a",
    ()=>addMissingItems,
    "b",
    ()=>getItems,
    "c",
    ()=>isActiveRangeOutsideLastItem,
    "d",
    ()=>getFirstItem,
    "e",
    ()=>getLastItem,
    "f",
    ()=>calculateRowHeaderSize,
    "g",
    ()=>getUpdatedItemsByPosition,
    "i",
    ()=>isActiveRange,
    "r",
    ()=>recombineByOffset,
    "s",
    ()=>setItemSizes,
    "u",
    ()=>updateMissingAndRange
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
;
const LETTER_BLOCK_SIZE = 10;
const calculateRowHeaderSize = (itemsLength, rowHeaderColumn, minWidth = 50)=>{
    return (rowHeaderColumn === null || rowHeaderColumn === void 0 ? void 0 : rowHeaderColumn.size) || Math.max((itemsLength.toString().length + 1) * LETTER_BLOCK_SIZE, minWidth);
};
/**
 * Update items based on new scroll position
 * If viewport wasn't changed fully simple recombination of positions
 * Otherwise rebuild viewport items
 */ function getUpdatedItemsByPosition(pos, items, realCount, virtualSize, dimension) {
    const activeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(dimension, pos);
    const firstItem = getFirstItem(items);
    let toUpdate;
    // do simple position recombination if items already present in viewport
    if (firstItem) {
        let changedOffsetStart = activeItem.itemIndex - (firstItem.itemIndex || 0);
        // if item changed
        if (changedOffsetStart) {
            // simple recombination
            toUpdate = recombineByOffset(Math.abs(changedOffsetStart), Object.assign(Object.assign({
                positiveDirection: changedOffsetStart > -1
            }, dimension), items));
        }
    }
    const maxSizeVirtualSize = getMaxVirtualSize(virtualSize, dimension.realSize, activeItem);
    // if partial recombination add items if revo-viewport has some space left
    if (toUpdate) {
        const extra = addMissingItems(activeItem, realCount, maxSizeVirtualSize, toUpdate, dimension);
        if (extra.length) {
            updateMissingAndRange(toUpdate.items, extra, toUpdate);
        }
    }
    // new collection if no items after replacement full replacement
    if (!toUpdate) {
        const items = getItems({
            firstItemStart: activeItem.start,
            firstItemIndex: activeItem.itemIndex,
            origSize: dimension.originItemSize,
            maxSize: maxSizeVirtualSize,
            maxCount: realCount,
            sizes: dimension.sizes
        });
        // range now comes from 0 to length - 1
        toUpdate = {
            items,
            start: 0,
            end: items.length - 1
        };
    }
    return toUpdate;
}
// virtual size can differ based on scroll position if some big items are present
// scroll can be in the middle of item and virtual size will be larger
// so we need to exclude this part from virtual size hence it's already passed
function getMaxVirtualSize(virtualSize, realSize, activeItem) {
    return Math.min(virtualSize + (activeItem.end - activeItem.start), realSize);
}
function updateMissingAndRange(items, missing, range) {
    items.splice(range.end + 1, 0, ...missing);
    // update range if start larger after recombination
    if (range.start >= range.end && !(range.start === range.end && range.start === 0)) {
        range.start += missing.length;
    }
    range.end += missing.length;
}
/**
 * If partial replacement
 * this function adds items if viewport has some space left
 */ function addMissingItems(firstItem, realCount, virtualSize, existingCollection, dimension) {
    const lastItem = getLastItem(existingCollection);
    const items = getItems({
        sizes: dimension.sizes,
        firstItemStart: lastItem.end,
        firstItemIndex: lastItem.itemIndex + 1,
        origSize: dimension.originItemSize,
        maxSize: virtualSize - (lastItem.end - firstItem.start),
        maxCount: realCount
    });
    return items;
}
/**
 * Get wiewport items parameters
 * caching position and calculating items count in viewport
 */ function getItems(opt, currentSize = 0) {
    const items = [];
    let index = opt.firstItemIndex;
    let size = currentSize;
    // max size or max count
    while(size <= opt.maxSize && index < opt.maxCount){
        const newSize = getItemSize(index, opt.sizes, opt.origSize);
        items.push({
            start: opt.firstItemStart + size,
            end: opt.firstItemStart + size + newSize,
            itemIndex: index,
            size: newSize
        });
        size += newSize;
        index++;
    }
    return items;
}
function recombineByOffset(offset, data) {
    var _a, _b;
    const newItems = [
        ...data.items
    ];
    const itemsCount = newItems.length;
    let newRange = {
        start: data.start,
        end: data.end
    };
    // if offset out of revo-viewport, makes sense whole redraw
    if (offset > itemsCount) {
        return undefined;
    }
    // is direction of scroll positive
    if (data.positiveDirection) {
        // push item to the end
        let lastItem = getLastItem(data);
        let i = newRange.start;
        const length = i + offset;
        for(; i < length; i++){
            const newIndex = lastItem.itemIndex + 1;
            const size = getItemSize(newIndex, data.sizes, data.originItemSize);
            // if item overlapped limit break a loop
            if (lastItem.end + size > data.realSize) {
                break;
            }
            // new item index to recombine
            let newEnd = i % itemsCount;
            // item should always present, we do not create new item, we recombine them
            if (!newItems[newEnd]) {
                throw new Error('incorrect index');
            }
            // do recombination
            newItems[newEnd] = lastItem = {
                start: lastItem.end,
                end: lastItem.end + size,
                itemIndex: newIndex,
                size: size
            };
            // update range
            newRange.start++;
            newRange.end = newEnd;
        }
    // direction is negative
    } else {
        // push item to the start
        let firstItem = getFirstItem(data);
        const end = newRange.end;
        for(let i = 0; i < offset; i++){
            const newIndex = ((_a = firstItem === null || firstItem === void 0 ? void 0 : firstItem.itemIndex) !== null && _a !== void 0 ? _a : 0) - 1;
            const size = getItemSize(newIndex, data.sizes, data.originItemSize);
            // new item index to recombine
            let newStart = end - i;
            newStart = (newStart < 0 ? itemsCount + newStart : newStart) % itemsCount;
            // item should always present, we do not create new item, we recombine them
            if (!newItems[newStart]) {
                console.error('incorrect index');
                break;
            }
            // do recombination
            const firstItemStart = (_b = firstItem === null || firstItem === void 0 ? void 0 : firstItem.start) !== null && _b !== void 0 ? _b : 0;
            newItems[newStart] = firstItem = {
                start: firstItemStart - size,
                end: firstItemStart,
                itemIndex: newIndex,
                size: size
            };
            // update range
            newRange.start = newStart;
            newRange.end--;
        }
    }
    const range = {
        start: (newRange.start < 0 ? itemsCount + newRange.start : newRange.start) % itemsCount,
        end: (newRange.end < 0 ? itemsCount + newRange.end : newRange.end) % itemsCount
    };
    return Object.assign({
        items: newItems
    }, range);
}
function getItemSize(index, sizes, origSize = 0) {
    if (sizes && sizes[index]) {
        return sizes[index];
    }
    return origSize;
}
/**
 * Verify if position is in range of the PositionItem, start and end are included
 */ function isActiveRange(pos, realSize, first, last) {
    if (!first || !last) {
        return false;
    }
    // if position is in range of first item
    // or position is after first item and last item is the last item in real size
    return pos >= first.start && pos <= first.end || pos > first.end && last.end === realSize;
}
function isActiveRangeOutsideLastItem(pos, virtualSize, firstItem, lastItem) {
    var _a;
    // if no first item, means no items in viewport
    if (!firstItem) {
        return false;
    }
    return virtualSize + pos > ((_a = lastItem === null || lastItem === void 0 ? void 0 : lastItem.end) !== null && _a !== void 0 ? _a : 0);
}
function getFirstItem(s) {
    return s.items[s.start];
}
function getLastItem(s) {
    return s.items[s.end];
}
/**
 * Set items sizes from start index to end
 * @param vpItems
 * @param start
 * @param size
 * @param lastCoordinate
 * @returns
 */ function setItemSizes(vpItems, initialIndex, size, lastCoordinate) {
    const items = [
        ...vpItems
    ];
    const count = items.length;
    let pos = lastCoordinate;
    let i = 0;
    let start = initialIndex;
    // viewport not inited
    if (!count) {
        return [];
    }
    // loop through array from initial item after recombination
    while(i < count){
        const item = items[start];
        item.start = pos;
        item.size = size;
        item.end = item.start + size;
        pos = item.end;
        // loop by start index
        start++;
        i++;
        // if start index out of array, reset it
        if (start === count) {
            start = 0;
        }
    }
    return items;
}
/**
 * Viewport store
 * Used for virtualization (process of rendering only visible part of data)
 * Redraws viewport based on position and dimension
 */ function initialState() {
    return {
        // virtual item information per rendered item
        items: [],
        // virtual dom item order to render
        start: 0,
        end: 0,
        // size of virtual viewport in px
        virtualSize: 0,
        // total number of items
        realCount: 0,
        // size of viewport in px
        clientSize: 0
    };
}
/**
 * Viewport store class
 */ class ViewportStore {
    get lastCoordinate() {
        return this.lastKnownScroll;
    }
    set lastCoordinate(value) {
        this.lastKnownScroll = value;
    }
    constructor(type){
        this.type = type;
        // last coordinate for store position restore
        this.lastKnownScroll = 0;
        this.store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["W"])(initialState());
    }
    /**
     * Render viewport based on coordinate
     * It's the main method for draw
     * Use force if you want to re-render viewport
     */ setViewPortCoordinate(position, dimension, force = false) {
        const viewportSize = this.store.get('virtualSize');
        // no visible data to calculate
        if (!viewportSize) {
            return;
        }
        const frameOffset = 1;
        const singleOffsetInPx = dimension.originItemSize * frameOffset;
        // add offset to virtual size from both sides
        const outsize = singleOffsetInPx * 2;
        // math virtual size is based on visible area + 2 items outside of visible area
        const virtualSize = viewportSize + outsize;
        // expected no scroll if real size less than virtual size, position is 0
        let maxCoordinate = 0;
        // if there is nodes outside of viewport, max coordinate has to be adjusted
        if (dimension.realSize > viewportSize) {
            // max coordinate is real size minus virtual/rendered space
            maxCoordinate = dimension.realSize - viewportSize - singleOffsetInPx;
        }
        let pos = position;
        // limit position to max and min coordinates
        if (pos < 0) {
            pos = 0;
        } else if (pos > maxCoordinate) {
            pos = maxCoordinate;
        }
        // store last coordinate for further restore on redraw
        this.lastCoordinate = pos;
        // actual position is less than first item start based on offset
        pos -= singleOffsetInPx;
        pos = pos < 0 ? 0 : pos < maxCoordinate ? pos : maxCoordinate;
        let allItems;
        // if force clear all items and start from 0
        if (force) {
            allItems = {
                items: [],
                start: 0,
                end: 0
            };
        } else {
            allItems = this.getItems();
        }
        const firstItem = getFirstItem(allItems);
        const lastItem = getLastItem(allItems);
        let toUpdate = {};
        // left position changed
        // verify if new position is in range of previously rendered first item
        if (!isActiveRange(pos, dimension.realSize, firstItem, lastItem)) {
            toUpdate = Object.assign(Object.assign({}, toUpdate), getUpdatedItemsByPosition(pos, allItems, this.store.get('realCount'), virtualSize, dimension));
            this.setViewport(Object.assign({}, toUpdate));
        // verify is render area is outside of last item
        } else if (isActiveRangeOutsideLastItem(pos, virtualSize, firstItem, lastItem)) {
            const items = [
                ...allItems.items
            ];
            // check is any item missing for fulfill content
            const missing = addMissingItems(firstItem, this.store.get('realCount'), virtualSize + pos - firstItem.start, allItems, {
                sizes: dimension.sizes,
                originItemSize: dimension.originItemSize
            });
            // update missing items
            if (missing.length) {
                const range = {
                    start: this.store.get('start'),
                    end: this.store.get('end')
                };
                updateMissingAndRange(items, missing, range);
                toUpdate = Object.assign(Object.assign(Object.assign({}, toUpdate), {
                    items: [
                        ...items
                    ]
                }), range);
                this.setViewport(Object.assign({}, toUpdate));
            }
        }
    }
    /**
     * Set sizes for existing items
     */ setOriginalSizes(size) {
        const items = this.store.get('items');
        const count = items.length;
        // viewport not inited
        if (!count) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            items: setItemSizes(items, this.store.get('start'), size, this.lastCoordinate)
        });
    }
    getItems() {
        return {
            items: this.store.get('items'),
            start: this.store.get('start'),
            end: this.store.get('end')
        };
    }
    setViewport(data) {
        // drop items on virtual size change, require a new item set
        // drop items on real size change, require a new item set
        if (typeof data.realCount === 'number' || typeof data.virtualSize === 'number') {
            data = Object.assign(Object.assign({}, data), {
                items: data.items || []
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, data);
    }
}
;
 //# sourceMappingURL=viewport.store-2mQugd8S.js.map
 //# sourceMappingURL=viewport.store-2mQugd8S.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/filter.button-DmOE7VCJ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>AND_OR_BUTTON,
    "F",
    ()=>FILTER_BUTTON_CLASS,
    "T",
    ()=>TRASH_BUTTON,
    "a",
    ()=>FILTER_BUTTON_ACTIVE,
    "b",
    ()=>FILTER_PROP,
    "c",
    ()=>FilterButton,
    "d",
    ()=>TrashButton,
    "e",
    ()=>AndOrButton,
    "i",
    ()=>isFilterBtn
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
;
const FILTER_BUTTON_CLASS = 'rv-filter';
const FILTER_BUTTON_ACTIVE = 'active';
const FILTER_PROP = 'hasFilter';
const AND_OR_BUTTON = 'and-or-button';
const TRASH_BUTTON = 'trash-button';
const FilterButton = ({ column })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("span", null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("button", {
        class: {
            [FILTER_BUTTON_CLASS]: true,
            [FILTER_BUTTON_ACTIVE]: column && !!column[FILTER_PROP]
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("svg", {
        class: "filter-img",
        viewBox: "0 0 64 64"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("g", {
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("path", {
        d: "M43,48 L43,56 L21,56 L21,48 L43,48 Z M53,28 L53,36 L12,36 L12,28 L53,28 Z M64,8 L64,16 L0,16 L0,8 L64,8 Z",
        fill: "currentColor"
    })))));
};
const TrashButton = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", {
        class: {
            [TRASH_BUTTON]: true
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("svg", {
        class: "trash-img",
        viewBox: "0 0 24 24"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("path", {
        fill: "currentColor",
        d: "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
    })));
};
const AndOrButton = ({ text })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("button", {
        class: {
            [AND_OR_BUTTON]: true,
            'light revo-button': true
        }
    }, text);
};
function isFilterBtn(e) {
    if (e.classList.contains(FILTER_BUTTON_CLASS)) {
        return true;
    }
    return e === null || e === void 0 ? void 0 : e.closest(`.${FILTER_BUTTON_CLASS}`);
}
;
 //# sourceMappingURL=filter.button-DmOE7VCJ.js.map
 //# sourceMappingURL=filter.button-DmOE7VCJ.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/header-cell-renderer-DNIoql0s.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "H",
    ()=>HeaderCellRenderer,
    "O",
    ()=>ON_COLUMN_CLICK,
    "a",
    ()=>dispatchByEvent,
    "d",
    ()=>dispatch
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-ssr] (ecmascript)");
;
;
/**
 * Dispatches a custom event to a specified target element.
 *
 * @param target - The target element to dispatch the event to.
 * @param eventName - The name of the custom event.
 * @param detail - Optional. The detail of the custom event.
 * @returns The custom event that was dispatched.
 */ function dispatch(target, eventName, detail) {
    // Create a new CustomEvent with the specified event name and detail.
    const event = new CustomEvent(eventName, {
        detail,
        cancelable: true,
        bubbles: true
    });
    // Dispatch the event on the target element.
    target === null || target === void 0 ? void 0 : target.dispatchEvent(event);
    // Return the custom event that was dispatched.
    return event;
}
/**
 * Dispatches a custom event based on an existing event object and prevents the default behavior of the original event.
 *
 * @param e - The original event object containing the target and preventDefault method.
 * @param eventName - The name of the custom event.
 * @param detail - Optional. The detail of the custom event.
 * @returns The custom event that was dispatched.
 */ function dispatchByEvent(e, eventName, detail) {
    // Prevent the default behavior of the original event.
    e.preventDefault();
    // Dispatch the custom event to the target element specified in the original event object.
    return dispatch(e.target, eventName, detail);
}
var ResizeEvents;
(function(ResizeEvents) {
    ResizeEvents["start"] = "resize:start";
    ResizeEvents["move"] = "resize:move";
    ResizeEvents["end"] = "resize:end";
})(ResizeEvents || (ResizeEvents = {}));
const RESIZE_MASK = {
    'resizable-r': {
        bit: 0b0001,
        cursor: 'ew-resize'
    },
    'resizable-rb': {
        bit: 0b0011,
        cursor: 'se-resize'
    },
    'resizable-b': {
        bit: 0b0010,
        cursor: 's-resize'
    },
    'resizable-lb': {
        bit: 0b0110,
        cursor: 'sw-resize'
    },
    'resizable-l': {
        bit: 0b0100,
        cursor: 'w-resize'
    },
    'resizable-lt': {
        bit: 0b1100,
        cursor: 'nw-resize'
    },
    'resizable-t': {
        bit: 0b1000,
        cursor: 'n-resize'
    },
    'resizable-rt': {
        bit: 0b1001,
        cursor: 'ne-resize'
    }
};
const DISABLE_MASK = {
    w: 0b0100,
    h: 0b1000
};
const defaultProps = (props)=>{
    return Object.assign(Object.assign({}, props), {
        fitParent: props.fitParent || false,
        active: props.active || [],
        disableAttributes: props.disableAttributes || [],
        minWidth: props.minWidth || 0,
        minHeight: props.minHeight || 0
    });
};
class ResizeDirective {
    constructor(initialProps, $event){
        var _a, _b;
        this.initialProps = initialProps;
        this.$event = $event;
        this.mouseX = 0;
        this.mouseY = 0;
        this.width = 0;
        this.height = 0;
        this.changeX = 0;
        this.changeY = 0;
        this.disableCalcMap = 0b1111;
        this.props = defaultProps(initialProps);
        this.mouseMoveFunc = this.handleMove.bind(this);
        this.mouseUpFunc = this.handleUp.bind(this);
        this.minW = this.props.minWidth;
        this.minH = this.props.minHeight;
        this.maxW = (_a = this.props.maxWidth) !== null && _a !== void 0 ? _a : 0;
        this.maxH = (_b = this.props.maxHeight) !== null && _b !== void 0 ? _b : 0;
        this.parent = {
            width: 0,
            height: 0
        };
        this.resizeState = 0;
    }
    set($el) {
        this.$el = $el;
        this.props.disableAttributes.forEach((attr)=>{
            switch(attr){
                case 'l':
                    this.disableCalcMap &= -2;
                    break;
                case 't':
                    this.disableCalcMap &= -3;
                    break;
                case 'w':
                    this.disableCalcMap &= -5;
                    break;
                case 'h':
                    this.disableCalcMap &= -9;
            }
        });
    }
    emitEvent(eventName, additionalOptions) {
        var _a;
        if (!this.$event) {
            return;
        }
        const isLeft = (_a = this.activeResizer) === null || _a === void 0 ? void 0 : _a.classList.contains('resizable-l');
        this.$event(Object.assign({
            eventName,
            width: this.width + this.changeX * (isLeft ? -1 : 1),
            height: this.height + this.changeY,
            changedX: this.changeX,
            changedY: this.changeY
        }, additionalOptions));
    }
    static isTouchEvent(e) {
        var _a;
        const event = e;
        return ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length) >= 0;
    }
    handleMove(event) {
        var _a;
        if (!this.resizeState) {
            return;
        }
        let eventY, eventX;
        if (ResizeDirective.isTouchEvent(event)) {
            eventY = event.touches[0].clientY;
            eventX = event.touches[0].clientX;
        } else {
            eventY = event.clientY;
            eventX = event.clientX;
        }
        let isX = this.resizeState & RESIZE_MASK['resizable-r'].bit || this.resizeState & RESIZE_MASK['resizable-l'].bit;
        let isY = this.resizeState & RESIZE_MASK['resizable-t'].bit || this.resizeState & RESIZE_MASK['resizable-b'].bit;
        if (isY && this.disableCalcMap & DISABLE_MASK.h) {
            let diffY = eventY - this.mouseY;
            let changedY = this.changeY + diffY;
            const newHeight = this.height + changedY;
            // if overcrossed min height
            if (newHeight < this.minH) {
                changedY = -(this.height - this.minH);
            }
            // if overcrossed max heiht
            if (this.maxH && newHeight > this.maxH) {
                changedY = this.maxH - this.height;
            }
            this.changeY = changedY;
            this.mouseY = eventY;
            if (this.activeResizer) {
                this.activeResizer.style.bottom = `${-this.changeY}px`;
            }
        }
        if (isX && this.disableCalcMap & DISABLE_MASK.w) {
            const isLeft = (_a = this.activeResizer) === null || _a === void 0 ? void 0 : _a.classList.contains('resizable-l');
            let diffX = eventX - this.mouseX;
            let changedX = this.changeX + diffX;
            const newWidth = this.width + changedX * (isLeft ? -1 : 1);
            // if overcrossed min width
            if (newWidth < this.minW) {
                changedX = -(this.width - this.minW);
            }
            // if overcrossed max width
            if (this.maxW && newWidth > this.maxW) {
                changedX = this.maxW - this.width;
            }
            this.changeX = changedX;
            this.mouseX = eventX;
            if (this.activeResizer) {
                if (!isLeft) {
                    this.activeResizer.style.right = `${-this.changeX}px`;
                } else {
                    this.activeResizer.style.left = `${this.changeX}px`;
                }
            }
        }
        this.emitEvent(ResizeEvents.move);
    }
    handleDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        // stop other events if resize in progress
        event.preventDefault();
        this.dropInitial();
        for(let elClass in RESIZE_MASK){
            const target = event.target;
            if (this.$el.contains(target) && (target === null || target === void 0 ? void 0 : target.classList.contains(elClass))) {
                document.body.style.cursor = RESIZE_MASK[elClass].cursor;
                if (ResizeDirective.isTouchEvent(event)) {
                    this.setInitials(event.touches[0], target);
                } else {
                    event.preventDefault && event.preventDefault();
                    this.setInitials(event, target);
                }
                this.resizeState = RESIZE_MASK[elClass].bit;
                const eventName = ResizeEvents.start;
                this.emitEvent(eventName);
                break;
            }
        }
        this.bindMove();
    }
    handleUp(e) {
        e.preventDefault();
        if (this.resizeState !== 0) {
            this.resizeState = 0;
            document.body.style.cursor = '';
            const eventName = ResizeEvents.end;
            this.emitEvent(eventName);
        }
        this.dropInitial();
        this.unbindMove();
    }
    setInitials({ clientX, clientY }, target) {
        var _a, _b, _c, _d;
        const computedStyle = getComputedStyle(this.$el);
        this.$el.classList.add('active');
        this.activeResizer = target;
        if (this.disableCalcMap & DISABLE_MASK.w) {
            this.mouseX = clientX;
            this.width = this.$el.clientWidth;
            this.parent.width = (_b = (_a = this.$el.parentElement) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
            // min width
            const minPaddingX = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
            this.minW = Math.max(minPaddingX, this.initialProps.minWidth || 0);
            // max width
            if (this.initialProps.maxWidth) {
                this.maxW = Math.max(this.width, this.initialProps.maxWidth);
            }
        }
        if (this.disableCalcMap & DISABLE_MASK.h) {
            this.mouseY = clientY;
            this.height = this.$el.clientHeight;
            this.parent.height = (_d = (_c = this.$el.parentElement) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0;
            // min height
            const minPaddingY = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
            this.minH = Math.max(minPaddingY, this.initialProps.minHeight || 0);
            // max height
            if (this.initialProps.maxHeight) {
                this.maxH = Math.max(this.height, this.initialProps.maxHeight);
            }
        }
    }
    dropInitial() {
        this.changeX = this.changeY = this.minW = this.minH;
        this.width = this.height = 0;
        if (this.activeResizer) {
            this.activeResizer.removeAttribute('style');
        }
        this.$el.classList.remove('active');
        this.activeResizer = undefined;
    }
    bindMove() {
        document.documentElement.addEventListener('mouseup', this.mouseUpFunc, true);
        document.documentElement.addEventListener('touchend', this.mouseUpFunc, true);
        document.documentElement.addEventListener('mousemove', this.mouseMoveFunc, true);
        document.documentElement.addEventListener('touchmove', this.mouseMoveFunc, true);
        document.documentElement.addEventListener('mouseleave', this.mouseUpFunc);
    }
    unbindMove() {
        document.documentElement.removeEventListener('mouseup', this.mouseUpFunc, true);
        document.documentElement.removeEventListener('touchend', this.mouseUpFunc, true);
        document.documentElement.removeEventListener('mousemove', this.mouseMoveFunc, true);
        document.documentElement.removeEventListener('touchmove', this.mouseMoveFunc, true);
        document.documentElement.removeEventListener('mouseleave', this.mouseUpFunc);
    }
}
const ResizableElement = (props, children)=>{
    const resizeEls = [];
    const directive = props.canResize && new ResizeDirective(props, (e)=>{
        var _a;
        if (e.eventName === ResizeEvents.end) {
            (_a = props.onResize) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
    }) || null;
    if (props.active) {
        if (props.canResize) {
            for(let p in props.active){
                resizeEls.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", {
                    onClick: (e)=>e.preventDefault(),
                    onDblClick: (e)=>{
                        var _a;
                        e.preventDefault();
                        (_a = props.onDblClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    },
                    onMouseDown: (e)=>directive === null || directive === void 0 ? void 0 : directive.handleDown(e),
                    onTouchStart: (e)=>directive === null || directive === void 0 ? void 0 : directive.handleDown(e),
                    class: `resizable resizable-${props.active[p]}`
                }));
            }
        } else {
            for(let _p in props.active){
                resizeEls.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", {
                    onClick: (e)=>e.preventDefault(),
                    onTouchStart: (e)=>e.preventDefault(),
                    onDblClick: (e)=>{
                        var _a;
                        e.preventDefault();
                        (_a = props.onDblClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    },
                    class: `no-resize`
                }));
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", Object.assign({}, props, {
        ref: (e)=>e && (directive === null || directive === void 0 ? void 0 : directive.set(e))
    }), children, resizeEls);
};
const ON_COLUMN_CLICK = 'columnclick';
const HeaderCellRenderer = ({ data, props, additionalData }, children)=>{
    let colTemplate = (data === null || data === void 0 ? void 0 : data.name) || '';
    let cellProps = props;
    if (data === null || data === void 0 ? void 0 : data.columnTemplate) {
        colTemplate = data.columnTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"], data, additionalData);
    }
    if (data === null || data === void 0 ? void 0 : data.columnProperties) {
        const extra = data.columnProperties(data);
        if (extra) {
            cellProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Q"])(props, extra);
        }
    }
    const resizeProps = Object.assign(Object.assign({}, cellProps), {
        onMouseDown (e) {
            dispatch(e.currentTarget, ON_COLUMN_CLICK, {
                data,
                event: e
            });
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(ResizableElement, Object.assign({}, resizeProps), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", {
        class: "header-content"
    }, colTemplate), children);
};
;
 //# sourceMappingURL=header-cell-renderer-DNIoql0s.js.map
 //# sourceMappingURL=header-cell-renderer-DNIoql0s.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.drag.plugin-CmcURdIJ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>AutoSizeColumnPlugin,
    "B",
    ()=>BasePlugin,
    "C",
    ()=>ColumnMovePlugin,
    "D",
    ()=>DimensionStore,
    "E",
    ()=>ExportFilePlugin,
    "F",
    ()=>FILTER_TRIMMED_TYPE,
    "G",
    ()=>GroupingRowPlugin,
    "S",
    ()=>SelectionStore,
    "a",
    ()=>StretchColumn,
    "b",
    ()=>ExportCsv,
    "c",
    ()=>FILTER_CONFIG_CHANGED_EVENT,
    "d",
    ()=>FILTE_PANEL,
    "e",
    ()=>FilterPlugin,
    "f",
    ()=>filterCoreFunctionsIndexedByType,
    "g",
    ()=>filterTypes,
    "h",
    ()=>filterNames,
    "i",
    ()=>isStretchPlugin,
    "j",
    ()=>doCollapse,
    "k",
    ()=>doExpand,
    "l",
    ()=>getLeftRelative,
    "m",
    ()=>SortingPlugin,
    "n",
    ()=>defaultCellCompare,
    "o",
    ()=>descCellCompare,
    "p",
    ()=>getNextOrder,
    "q",
    ()=>getComparer,
    "s",
    ()=>sortIndexByItems
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$store$2d$2mQugd8S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/viewport.store-2mQugd8S.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/filter.button-DmOE7VCJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/header-cell-renderer-DNIoql0s.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Plugin which recalculates realSize on changes of sizes, originItemSize and count
 */ const recalculateRealSizePlugin = (storeService)=>{
    /**
     * Recalculates realSize if size, origin size or count changes
     */ return {
        /**
         * Reacts on changes of count, sizes and originItemSize
         */ set (k) {
            switch(k){
                case 'count':
                case 'sizes':
                case 'originItemSize':
                    {
                        // recalculate realSize
                        let realSize = 0;
                        const count = storeService.store.get('count');
                        for(let i = 0; i < count; i++){
                            realSize += storeService.store.get('sizes')[i] || storeService.store.get('originItemSize');
                        }
                        storeService.setStore({
                            realSize
                        });
                        break;
                    }
            }
        }
    };
};
/**
 * Plugin for trimming
 *
 * 1.a. Retrieves the previous sizes value. Saves the resulting trimmed data as a new sizes value.
 * 1.b. Stores a reference to the trimmed data to prevent further changes.
 * 2. Removes multiple and shifts the data based on the trimmed value.
 */ const trimmedPlugin = (storeService)=>{
    let trimmingObject = null;
    let trimmedPreviousSizes = null;
    return {
        set (key, val) {
            switch(key){
                case 'sizes':
                    {
                        // prevent changes after trimming
                        if (trimmingObject && trimmingObject === val) {
                            trimmingObject = null;
                            return;
                        }
                        trimmedPreviousSizes = null;
                        break;
                    }
                case 'trimmed':
                    {
                        const trim = val;
                        if (!trimmedPreviousSizes) {
                            trimmedPreviousSizes = storeService.store.get('sizes');
                        }
                        trimmingObject = removeMultipleAndShift(trimmedPreviousSizes, trim || {});
                        // save a reference to the trimmed object to prevent changes after trimming
                        storeService.setSizes(trimmingObject);
                        break;
                    }
            }
        }
    };
};
function removeMultipleAndShift(items, toRemove) {
    const newItems = {};
    const sortedIndexes = Object.keys(items || {}).map(Number).sort((a, b)=>a - b);
    const lastIndex = sortedIndexes[sortedIndexes.length - 1];
    let shift = 0;
    for(let i = 0; i <= lastIndex; i++){
        if (toRemove[i] !== undefined) {
            shift++;
            // skip already removed
            if (items[i] !== undefined) {
                continue;
            }
        }
        if (items[i] !== undefined) {
            newItems[i - shift] = items[i];
        }
    }
    return newItems;
}
/**
 * Storing pre-calculated
 * Dimension information and sizes
 */ function initialBase() {
    return {
        indexes: [],
        count: 0,
        // hidden items
        trimmed: null,
        // virtual item index to size
        sizes: {},
        // order in indexes[] to coordinate
        positionIndexToItem: {},
        // initial element to coordinate ^
        indexToItem: {},
        positionIndexes: []
    };
}
function initialState() {
    return Object.assign(Object.assign({}, initialBase()), {
        // size which all items can take
        realSize: 0,
        // initial item size if it wasn't changed
        originItemSize: 0
    });
}
class DimensionStore {
    constructor(type){
        this.type = type;
        this.store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["W"])(initialState());
        this.store.use(trimmedPlugin({
            store: this.store,
            setSizes: this.setDimensionSize.bind(this)
        }));
        this.store.use(recalculateRealSizePlugin({
            store: this.store,
            setStore: this.setStore.bind(this)
        }));
    }
    getCurrentState() {
        const state = initialState();
        const keys = Object.keys(state);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"])(keys, (r, k)=>{
            const data = this.store.get(k);
            r[k] = data;
            return r;
        }, state);
    }
    dispose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, initialState());
    }
    setStore(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, data);
    }
    drop() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, initialBase());
    }
    /**
     * Set custom dimension sizes and overwrite old
     * Generates new indexes based on sizes
     * @param sizes - sizes to set
     */ setDimensionSize(sizes = {}) {
        const dimensionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(this.store.get('originItemSize'), sizes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, Object.assign(Object.assign({}, dimensionData), {
            sizes
        }));
    }
    updateSizesPositionByIndexes(newItemsOrder, prevItemsOrder = []) {
        // Move custom sizes to new order
        const customSizes = Object.assign({}, this.store.get('sizes'));
        if (!Object.keys(customSizes).length) {
            return;
        }
        // Step 1: Create a map of original indices, but allow duplicates by storing arrays of indices
        const originalIndices = {};
        prevItemsOrder.forEach((physIndex, virtIndex)=>{
            if (!originalIndices[physIndex]) {
                originalIndices[physIndex] = [];
            }
            originalIndices[physIndex].push(virtIndex); // Store all indices for each value
        });
        // Step 2: Create new sizes based on new item order
        const newSizes = {};
        newItemsOrder.forEach((physIndex, virtIndex)=>{
            const indices = originalIndices[physIndex]; // Get all original indices for this value
            if (indices && indices.length > 0) {
                const originalIndex = indices.shift(); // Get the first available original index
                if (originalIndex !== undefined && originalIndex !== virtIndex && customSizes[originalIndex]) {
                    newSizes[virtIndex] = customSizes[originalIndex];
                    delete customSizes[originalIndex];
                }
            }
        });
        // Step 3: Set new sizes if there are changes
        if (Object.keys(newSizes).length) {
            this.setDimensionSize(Object.assign(Object.assign({}, customSizes), newSizes));
        }
    }
}
/**
 * Selection store
 */ function defaultState() {
    return {
        range: null,
        tempRange: null,
        tempRangeType: null,
        focus: null,
        edit: null,
        lastCell: null,
        nextFocus: null
    };
}
class SelectionStore {
    constructor(){
        this.unsubscribe = [];
        this.store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["W"])(defaultState());
        this.store.on('set', (key, newVal)=>{
            if (key === 'tempRange' && !newVal) {
                this.store.set('tempRangeType', null);
            }
        });
    }
    onChange(propName, cb) {
        this.unsubscribe.push(this.store.onChange(propName, cb));
    }
    clearFocus() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            focus: null,
            range: null,
            edit: null,
            tempRange: null
        });
    }
    setFocus(focus, end) {
        if (!end) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
                focus
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
                focus,
                range: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(focus, end),
                edit: null,
                tempRange: null
            });
        }
    }
    setNextFocus(focus) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            nextFocus: focus
        });
    }
    setTempArea(range) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            tempRange: range === null || range === void 0 ? void 0 : range.area,
            tempRangeType: range === null || range === void 0 ? void 0 : range.type,
            edit: null
        });
    }
    clearTemp() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            tempRange: null
        });
    }
    /** Can be applied from selection change or from simple keyboard change clicks */ setRangeArea(range) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            range,
            edit: null,
            tempRange: null
        });
    }
    setRange(start, end) {
        const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(start, end);
        this.setRangeArea(range);
    }
    setLastCell(lastCell) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            lastCell
        });
    }
    setEdit(val) {
        const focus = this.store.get('focus');
        if (focus && typeof val === 'string') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
                edit: {
                    x: focus.x,
                    y: focus.y,
                    val
                }
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(this.store, {
            edit: null
        });
    }
    dispose() {
        this.unsubscribe.forEach((f)=>f());
        this.store.dispose();
    }
}
/**
 * Base layer for plugins
 * Provide minimal starting core for plugins to work
 * Extend this class to create plugin
 */ class BasePlugin {
    constructor(revogrid, providers){
        this.revogrid = revogrid;
        this.providers = providers;
        this.h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"];
        this.subscriptions = {};
    }
    /**
     *
     * @param eventName - event name to subscribe to in revo-grid component (e.g. 'beforeheaderclick')
     * @param callback - callback function for event
     */ addEventListener(eventName, callback) {
        this.revogrid.addEventListener(eventName, callback);
        this.subscriptions[eventName] = callback;
    }
    /**
     * Subscribe to property change in revo-grid component
     * You can return false in callback to prevent default value set
     *
     * @param prop - property name
     * @param callback - callback function
     * @param immediate - trigger callback immediately with current value
     */ watch(prop, callback, { immediate } = {
        immediate: false
    }) {
        const nativeValueDesc = Object.getOwnPropertyDescriptor(this.revogrid, prop) || Object.getOwnPropertyDescriptor(this.revogrid.constructor.prototype, prop);
        // Overwrite property descriptor for this instance
        Object.defineProperty(this.revogrid, prop, {
            set (val) {
                var _a;
                const keepDefault = callback(val);
                if (keepDefault === false) {
                    return;
                }
                // Continue with native behavior
                return (_a = nativeValueDesc === null || nativeValueDesc === void 0 ? void 0 : nativeValueDesc.set) === null || _a === void 0 ? void 0 : _a.call(this, val);
            },
            get () {
                var _a;
                // Continue with native behavior
                return (_a = nativeValueDesc === null || nativeValueDesc === void 0 ? void 0 : nativeValueDesc.get) === null || _a === void 0 ? void 0 : _a.call(this);
            }
        });
        if (immediate) {
            callback(nativeValueDesc === null || nativeValueDesc === void 0 ? void 0 : nativeValueDesc.value);
        }
    }
    /**
     * Remove event listener
     * @param eventName
     */ removeEventListener(eventName) {
        this.revogrid.removeEventListener(eventName, this.subscriptions[eventName]);
        delete this.subscriptions[eventName];
    }
    /**
     * Emit event from revo-grid component
     * Event can be cancelled by calling event.preventDefault() in callback
     */ emit(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            cancelable: true
        });
        this.revogrid.dispatchEvent(event);
        return event;
    }
    /**
     * Clear all subscriptions
     */ clearSubscriptions() {
        for(let type in this.subscriptions){
            this.removeEventListener(type);
        }
    }
    /**
     * Destroy plugin and clear all subscriptions
     */ destroy() {
        this.clearSubscriptions();
    }
}
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */ function castFunction(value) {
    return typeof value == 'function' ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"];
}
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */ function forEach(collection, iteratee) {
    var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(collection) ? arrayEach : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["K"];
    return func(collection, castFunction(iteratee));
}
/**
 * Plugin module for revo-grid grid system
 * Add support for automatic column resize
 */ const LETTER_BLOCK_SIZE = 7;
class AutoSizeColumnPlugin extends BasePlugin {
    constructor(revogrid, providers, config){
        super(revogrid, providers);
        this.providers = providers;
        this.config = config;
        this.autoSizeColumns = null;
        /** for edge case when no columns defined before data */ this.dataResolve = null;
        this.dataReject = null;
        this.letterBlockSize = (config === null || config === void 0 ? void 0 : config.letterBlockSize) || LETTER_BLOCK_SIZE;
        // create test container to check text width
        if (config === null || config === void 0 ? void 0 : config.preciseSize) {
            this.precsizeCalculationArea = this.initiatePresizeElement();
            revogrid.appendChild(this.precsizeCalculationArea);
        }
        const aftersourceset = ({ detail: { source } })=>{
            this.setSource(source);
        };
        const beforecolumnsset = ({ detail: { columns } })=>{
            this.columnSet(columns);
        };
        this.addEventListener('beforecolumnsset', beforecolumnsset);
        switch(config === null || config === void 0 ? void 0 : config.mode){
            case "autoSizeOnTextOverlap" /* ColumnAutoSizeMode.autoSizeOnTextOverlap */ :
                this.addEventListener('aftersourceset', aftersourceset);
                this.addEventListener('afteredit', ({ detail })=>{
                    this.afteredit(detail);
                });
                break;
            case "autoSizeAll" /* ColumnAutoSizeMode.autoSizeAll */ :
                this.addEventListener('aftersourceset', aftersourceset);
                this.addEventListener('afteredit', ({ detail })=>{
                    this.afterEditAll(detail);
                });
                break;
            default:
                this.addEventListener('headerdblclick', ({ detail })=>{
                    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"])(detail.column);
                    const size = this.getColumnSize(detail.index, type);
                    if (size) {
                        this.providers.dimension.setCustomSizes(type, {
                            [detail.index]: size
                        }, true);
                    }
                });
                break;
        }
    }
    async setSource(source) {
        let autoSize = this.autoSizeColumns;
        if (this.dataReject) {
            this.dataReject();
            this.clearPromise();
        }
        /** If data set first and no column provided await until get one */ if (!autoSize) {
            const request = new Promise((resolve, reject)=>{
                this.dataResolve = resolve;
                this.dataReject = reject;
            });
            try {
                autoSize = await request;
            } catch (e) {
                return;
            }
        }
        // calculate sizes
        forEach(autoSize, (_v, type)=>{
            const sizes = {};
            forEach(autoSize[type], (rgCol)=>{
                // calculate size
                rgCol.size = sizes[rgCol.index] = source.reduce((prev, rgRow)=>Math.max(prev, this.getLength(rgRow[rgCol.prop])), this.getLength(rgCol.name || ''));
            });
            this.providers.dimension.setCustomSizes(type, sizes, true);
        });
    }
    getLength(len) {
        var _a;
        const padding = 15;
        if (!len) {
            return 0;
        }
        try {
            const str = len.toString();
            /**if exact calculation required proxy with html element, slow operation */ if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.preciseSize) {
                this.precsizeCalculationArea.innerText = str;
                return this.precsizeCalculationArea.scrollWidth + padding * 2;
            }
            return str.length * this.letterBlockSize + padding * 2;
        } catch (e) {
            return 0;
        }
    }
    afteredit(e) {
        let data;
        if (this.isRangeEdit(e)) {
            data = e.data;
        } else {
            data = {
                0: {
                    [e.prop]: e.val
                }
            };
        }
        forEach(this.autoSizeColumns, (columns, type)=>{
            const sizes = {};
            forEach(columns, (rgCol)=>{
                var _a;
                // calculate size
                const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"])(data, (prev, rgRow)=>{
                    if (typeof rgRow[rgCol.prop] === 'undefined') {
                        return prev;
                    }
                    return Math.max(prev || 0, this.getLength(rgRow[rgCol.prop]));
                }, undefined);
                if (size && ((_a = rgCol.size) !== null && _a !== void 0 ? _a : 0) < size) {
                    rgCol.size = sizes[rgCol.index] = size;
                }
            });
            this.providers.dimension.setCustomSizes(type, sizes, true);
        });
    }
    afterEditAll(e) {
        const props = {};
        if (this.isRangeEdit(e)) {
            forEach(e.data, (r)=>forEach(r, (_v, p)=>props[p] = true));
        } else {
            props[e.prop] = true;
        }
        forEach(this.autoSizeColumns, (columns, type)=>{
            const sizes = {};
            forEach(columns, (rgCol)=>{
                if (props[rgCol.prop]) {
                    const size = this.getColumnSize(rgCol.index, type);
                    if (size) {
                        sizes[rgCol.index] = size;
                    }
                }
            });
            this.providers.dimension.setCustomSizes(type, sizes, true);
        });
    }
    getColumnSize(index, type) {
        var _a, _b;
        const rgCol = (_b = (_a = this.autoSizeColumns) === null || _a === void 0 ? void 0 : _a[type]) === null || _b === void 0 ? void 0 : _b[index];
        if (!rgCol) {
            return 0;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"])(this.providers.data.stores, (r, s)=>{
            const perStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"])(s.store.get('items'), (prev, _row, i)=>{
                const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(s.store, i);
                return Math.max(prev || 0, this.getLength(item === null || item === void 0 ? void 0 : item[rgCol.prop]));
            }, 0);
            return Math.max(r, perStore);
        }, rgCol.size || 0);
    }
    columnSet(columns) {
        var _a;
        for (let t of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]){
            const type = t;
            const cols = columns[type];
            for(let i in cols){
                if (cols[i].autoSize || ((_a = this.config) === null || _a === void 0 ? void 0 : _a.allColumns)) {
                    if (!this.autoSizeColumns) {
                        this.autoSizeColumns = {};
                    }
                    if (!this.autoSizeColumns[type]) {
                        this.autoSizeColumns[type] = {};
                    }
                    this.autoSizeColumns[type][i] = Object.assign(Object.assign({}, cols[i]), {
                        index: parseInt(i, 10)
                    });
                }
            }
        }
        if (this.dataResolve) {
            this.dataResolve(this.autoSizeColumns || {});
            this.clearPromise();
        }
    }
    clearPromise() {
        this.dataResolve = null;
        this.dataReject = null;
    }
    isRangeEdit(e) {
        return !!e.data;
    }
    initiatePresizeElement() {
        var _a;
        const styleForFontTest = {
            position: 'absolute',
            fontSize: '14px',
            height: '0',
            width: '0',
            whiteSpace: 'nowrap',
            top: '0',
            overflowX: 'scroll',
            display: 'block'
        };
        const el = document.createElement('div');
        for(let s in styleForFontTest){
            el.style[s] = (_a = styleForFontTest[s]) !== null && _a !== void 0 ? _a : '';
        }
        el.classList.add('revo-test-container');
        return el;
    }
    destroy() {
        var _a;
        super.destroy();
        (_a = this.precsizeCalculationArea) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
class StretchColumn extends BasePlugin {
    constructor(revogrid, providers){
        super(revogrid, providers);
        this.providers = providers;
        this.stretchedColumn = null;
        // calculate scroll bar size for current user session
        this.scrollSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(document);
        // subscribe to column changes
        const beforecolumnapplied = ({ detail: { columns } })=>this.applyStretch(columns);
        this.addEventListener('beforecolumnapplied', beforecolumnapplied);
    }
    setScroll({ type, hasScroll }) {
        var _a;
        if (type === 'rgRow' && this.stretchedColumn && ((_a = this.stretchedColumn) === null || _a === void 0 ? void 0 : _a.initialSize) === this.stretchedColumn.size) {
            if (hasScroll) {
                this.stretchedColumn.size -= this.scrollSize;
                this.apply();
                this.dropChanges();
            }
        }
    }
    activateChanges() {
        const setScroll = ({ detail })=>this.setScroll(detail);
        this.addEventListener('scrollchange', setScroll);
    }
    dropChanges() {
        this.stretchedColumn = null;
        this.removeEventListener('scrollchange');
    }
    apply() {
        if (!this.stretchedColumn) {
            return;
        }
        const type = 'rgCol';
        const sizes = this.providers.dimension.stores[type].store.get('sizes');
        this.providers.dimension.setCustomSizes(type, Object.assign(Object.assign({}, sizes), {
            [this.stretchedColumn.index]: this.stretchedColumn.size
        }), true);
    }
    /**
     * Apply stretch changes
     */ applyStretch(columns) {
        // unsubscribe from all events
        this.dropChanges();
        // calculate grid size
        let sizeDifference = this.revogrid.clientWidth - 1;
        forEach(columns, (_, type)=>{
            const realSize = this.providers.dimension.stores[type].store.get('realSize');
            sizeDifference -= realSize;
        });
        if (this.revogrid.rowHeaders) {
            const itemsLength = this.providers.data.stores.rgRow.store.get('source').length;
            const header = this.revogrid.rowHeaders;
            const rowHeaderSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$store$2d$2mQugd8S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(itemsLength, typeof header === 'object' ? header : undefined);
            if (rowHeaderSize) {
                sizeDifference -= rowHeaderSize;
            }
        }
        if (sizeDifference > 0) {
            // currently plugin accepts last column only
            const index = columns.rgCol.length - 1;
            const last = columns.rgCol[index];
            /**
             * has column
             * no auto size applied
             * size for column shouldn't be defined
             */ const colSize = (last === null || last === void 0 ? void 0 : last.size) || this.revogrid.colSize || 0;
            const size = sizeDifference + colSize - 1;
            if (last && !last.autoSize && colSize < size) {
                this.stretchedColumn = {
                    initialSize: size,
                    index,
                    size
                };
                this.apply();
                this.activateChanges();
            }
        }
    }
}
/**
 * Check plugin type is Stretch
 */ function isStretchPlugin(plugin) {
    return !!plugin.applyStretch;
}
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */ function baseClamp(number, lower, upper) {
    if (number === number) {
        {
            number = number <= upper ? number : upper;
        }
        {
            number = number >= lower ? number : lower;
        }
    }
    return number;
}
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */ function toLength(value) {
    return value ? baseClamp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(value), 0, MAX_ARRAY_LENGTH) : 0;
}
/**
 * The base implementation of `_.fill` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */ function baseFill(array, value, start, end) {
    var length = array.length;
    start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(start);
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end === undefined || end > length ? length : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"])(end);
    if (end < 0) {
        end += length;
    }
    end = start > end ? 0 : toLength(end);
    while(start < end){
        array[start++] = value;
    }
    return array;
}
/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * **Note:** This method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Array
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * _.fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * _.fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */ function fill(array, value, start, end) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    return baseFill(array, value, start, end);
}
const INITIAL = {
    mime: 'text/csv',
    fileKind: 'csv',
    // BOM signature
    bom: true,
    columnDelimiter: ',',
    rowDelimiter: '\r\n',
    encoding: ''
};
// The ASCII character code 13 is called a Carriage Return or CR.
const CARRIAGE_RETURN = String.fromCharCode(13);
// Chr(13) followed by a Chr(10) that compose a proper CRLF.
const LINE_FEED = String.fromCharCode(10);
const DOUBLE_QT = String.fromCharCode(34);
const NO_BREAK_SPACE = String.fromCharCode(0xfeff);
const escapeRegex = new RegExp('"', 'g');
class ExportCsv {
    constructor(options = {}){
        this.options = Object.assign(Object.assign({}, INITIAL), options);
    }
    doExport({ data, headers, props }) {
        let result = this.options.bom ? NO_BREAK_SPACE : '';
        // any header
        if ((headers === null || headers === void 0 ? void 0 : headers.length) > 0) {
            headers.forEach((header)=>{
                // ignore empty
                if (!header.length) {
                    return;
                }
                result += this.prepareHeader(header, this.options.columnDelimiter);
                result += this.options.rowDelimiter;
            });
        }
        data.forEach((rgRow, index)=>{
            if (index > 0) {
                result += this.options.rowDelimiter;
            }
            // support grouping
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(rgRow)) {
                result += this.parseCell((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(rgRow), this.options.columnDelimiter);
                return;
            }
            result += props.map((p)=>this.parseCell(rgRow[p], this.options.columnDelimiter)).join(this.options.columnDelimiter);
        });
        return result;
    }
    prepareHeader(columnHeaders, columnDelimiter) {
        let result = '';
        const newColumnHeaders = columnHeaders.map((v)=>this.parseCell(v, columnDelimiter, true));
        result += newColumnHeaders.join(columnDelimiter);
        return result;
    }
    parseCell(value, columnDelimiter, force = false) {
        let escape = value;
        if (typeof value !== 'string') {
            escape = JSON.stringify(value);
        }
        const toEscape = [
            CARRIAGE_RETURN,
            DOUBLE_QT,
            LINE_FEED,
            columnDelimiter
        ];
        if (typeof escape === 'undefined') {
            return '';
        }
        if (escape !== '' && (force || toEscape.some((i)=>escape.indexOf(i) >= 0))) {
            return `"${escape.replace(escapeRegex, '""')}"`;
        }
        return escape;
    }
}
var ExportTypes;
(function(ExportTypes) {
    ExportTypes["csv"] = "csv";
})(ExportTypes || (ExportTypes = {}));
class ExportFilePlugin extends BasePlugin {
    /** Exports string */ async exportString(options = {}, t = ExportTypes.csv) {
        const data = await this.beforeexport();
        if (!data) {
            return null;
        }
        return this.formatter(t, options).doExport(data);
    }
    /** Exports Blob */ async exportBlob(options = {}, t = ExportTypes.csv) {
        return await this.getBlob(this.formatter(t, options));
    }
    /** Export file */ async exportFile(options = {}, t = ExportTypes.csv) {
        const formatter = this.formatter(t, options);
        // url
        const URL = window.URL || window.webkitURL;
        const a = document.createElement('a');
        const { filename, fileKind } = formatter.options;
        const name = `${filename}.${fileKind}`;
        const blob = await this.getBlob(formatter);
        const url = blob ? URL.createObjectURL(blob) : '';
        a.style.display = 'none';
        a.setAttribute('href', url);
        a.setAttribute('download', name);
        this.revogrid.appendChild(a);
        a.dispatchEvent(new MouseEvent('click'));
        this.revogrid.removeChild(a);
        // delay for revoke, correct for some browsers
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(120);
        URL.revokeObjectURL(url);
    }
    /** Blob object */ async getBlob(formatter) {
        const type = `${formatter.options.mime};charset=${formatter.options.encoding}`;
        if (typeof Blob !== 'undefined') {
            const data = await this.beforeexport();
            if (!data) {
                return null;
            }
            return new Blob([
                formatter.doExport(data)
            ], {
                type
            });
        }
        return null;
    }
    // before event
    async beforeexport() {
        let data = await this.getData();
        const event = this.emit('beforeexport', {
            data
        });
        if (event.defaultPrevented) {
            return null;
        }
        return event.detail.data;
    }
    async getData() {
        const data = await this.getSource();
        const colSource = [];
        const colPromises = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"].forEach((t, i)=>{
            colPromises.push(this.getColPerSource(t).then((s)=>colSource[i] = s));
        });
        await Promise.all(colPromises);
        const columns = {
            headers: [],
            props: []
        };
        for (let source of colSource){
            source.headers.forEach((h, i)=>{
                if (!columns.headers[i]) {
                    columns.headers[i] = [];
                }
                columns.headers[i].push(...h);
            });
            columns.props.push(...source.props);
        }
        return Object.assign({
            data
        }, columns);
    }
    async getColPerSource(t) {
        const store = await this.revogrid.getColumnStore(t);
        const source = store.get('source');
        const virtualIndexes = store.get('items');
        const depth = store.get('groupingDepth');
        const groups = store.get('groups');
        const colNames = [];
        const colProps = [];
        virtualIndexes.forEach((v)=>{
            const prop = source[v].prop;
            colNames.push(source[v].name || '');
            colProps.push(prop);
        });
        const rows = this.getGroupHeaders(depth, groups, virtualIndexes);
        rows.push(colNames);
        return {
            headers: rows,
            props: colProps
        };
    }
    getGroupHeaders(depth, groups, items) {
        const rows = [];
        const template = fill(new Array(items.length), '');
        for(let d = 0; d < depth; d++){
            const rgRow = [
                ...template
            ];
            rows.push(rgRow);
            if (!groups[d]) {
                continue;
            }
            const levelGroups = groups[d];
            // add names of groups
            levelGroups.forEach((group)=>{
                const minIndex = group.indexes[0];
                if (typeof minIndex === 'number') {
                    rgRow[minIndex] = group.name;
                }
            });
        }
        return rows;
    }
    async getSource() {
        const data = [];
        const promisesData = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"].forEach((t)=>{
            const dataPart = [];
            data.push(dataPart);
            const promise = this.revogrid.getVisibleSource(t).then((d)=>dataPart.push(...d));
            promisesData.push(promise);
        });
        await Promise.all(promisesData);
        return data.reduce((r, v)=>{
            r.push(...v);
            return r;
        }, []);
    }
    // get correct class for future multiple types support
    formatter(type, options = {}) {
        switch(type){
            case ExportTypes.csv:
                return new ExportCsv(options);
            default:
                throw new Error('Unknown format');
        }
    }
}
const eq = (value, extra)=>{
    if (typeof value === 'undefined' || value === null && !extra) {
        return true;
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    const filterVal = extra === null || extra === void 0 ? void 0 : extra.toString().toLocaleLowerCase();
    if ((filterVal === null || filterVal === void 0 ? void 0 : filterVal.length) === 0) {
        return true;
    }
    return value.toLocaleLowerCase() === filterVal;
};
const notEq = (value, extra)=>!eq(value, extra);
notEq.extra = 'input';
eq.extra = 'input';
const gtThan = function(value, extra) {
    let conditionValue;
    if (typeof value === 'number' && typeof extra !== 'undefined' && extra !== null) {
        conditionValue = parseFloat(extra === null || extra === void 0 ? void 0 : extra.toString());
        return value > conditionValue;
    }
    return false;
};
gtThan.extra = 'input';
const gtThanEq = function(value, extra) {
    return eq(value, extra) || gtThan(value, extra);
};
gtThanEq.extra = 'input';
const lt = function(value, extra) {
    let conditionValue;
    if (typeof value === 'number' && typeof extra !== 'undefined' && extra !== null) {
        conditionValue = parseFloat(extra.toString());
        return value < conditionValue;
    } else {
        return false;
    }
};
lt.extra = 'input';
const lsEq = function(value, extra) {
    return eq(value, extra) || lt(value, extra);
};
lsEq.extra = 'input';
const set = (value)=>!(value === '' || value === null || value === void 0);
const notSet = (value)=>!set(value);
const beginsWith = (value, extra)=>{
    if (!value) {
        return false;
    }
    if (!extra) {
        return true;
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    if (typeof extra !== 'string') {
        extra = JSON.stringify(extra);
    }
    return value.toLocaleLowerCase().indexOf(extra.toLocaleLowerCase()) === 0;
};
beginsWith.extra = 'input';
const contains = (value, extra)=>{
    if (!extra) {
        return true;
    }
    if (!value) {
        return false;
    }
    if (extra) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        return value.toLocaleLowerCase().indexOf(extra.toString().toLowerCase()) > -1;
    }
    return true;
};
const notContains = (value, extra)=>{
    return !contains(value, extra);
};
notContains.extra = 'input';
contains.extra = 'input';
// filter.indexed.ts
const filterCoreFunctionsIndexedByType = {
    none: ()=>true,
    empty: notSet,
    notEmpty: set,
    eq: eq,
    notEq: notEq,
    begins: beginsWith,
    contains: contains,
    notContains: notContains,
    eqN: eq,
    neqN: notEq,
    gt: gtThan,
    gte: gtThanEq,
    lt: lt,
    lte: lsEq
};
const filterTypes = {
    string: [
        'notEmpty',
        'empty',
        'eq',
        'notEq',
        'begins',
        'contains',
        'notContains'
    ],
    number: [
        'notEmpty',
        'empty',
        'eqN',
        'neqN',
        'gt',
        'gte',
        'lt',
        'lte'
    ]
};
const filterNames = {
    none: 'None',
    empty: 'Not set',
    notEmpty: 'Set',
    eq: 'Equal',
    notEq: 'Not equal',
    begins: 'Begins with',
    contains: 'Contains',
    notContains: 'Does not contain',
    eqN: '=',
    neqN: '!=',
    gt: '>',
    gte: '>=',
    lt: '<',
    lte: '<='
};
// filter.plugin.tsx
const FILTER_TRIMMED_TYPE = 'filter';
const FILTER_CONFIG_CHANGED_EVENT = 'filterconfigchanged';
const FILTE_PANEL = 'revogr-filter-panel';
/**
 * @typedef ColumnFilterConfig
 * @type {object}
 *
 * @property {MultiFilterItem|undefined} multiFilterItems - data for multi filtering with relation
 *
 * @property {Record<ColumnProp, FilterCollectionItem>|undefined} collection - preserved filter data, relation for filters will be applied as 'and'
 *
 * @property {string[]|undefined} include - filters to be included, if defined everything else out of scope will be ignored
 *
 * @property {Record<string, CustomFilter>|undefined} customFilters - hash map of {FilterType:CustomFilter}.
 *
 * @property {FilterLocalization|undefined} localization - translation for filter popup captions.
 *
 * @property {boolean|undefined} disableDynamicFiltering - disables dynamic filtering. A way to apply filters on Save only.
 */ /**
 * @internal
 */ class FilterPlugin extends BasePlugin {
    constructor(revogrid, providers, config){
        var _a;
        super(revogrid, providers);
        this.revogrid = revogrid;
        this.config = config;
        this.filterCollection = {};
        this.multiFilterItems = {};
        /**
         * Filter types
         * @example
         * {
         *    string: ['contains', 'beginswith'],
         *    number: ['eqN', 'neqN', 'gt']
         *  }
         */ this.filterByType = Object.assign({}, filterTypes);
        this.filterNameIndexByType = Object.assign({}, filterNames);
        this.filterFunctionsIndexedByType = Object.assign({}, filterCoreFunctionsIndexedByType);
        this.filterProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"];
        if (config) {
            this.initConfig(config);
        }
        const existingNodes = this.revogrid.registerVNode.filter((n)=>typeof n === 'object' && n.$tag$ !== FILTE_PANEL);
        this.revogrid.registerVNode = [
            ...existingNodes,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("revogr-filter-panel", {
                filterNames: this.filterNameIndexByType,
                filterEntities: this.filterFunctionsIndexedByType,
                filterCaptions: (_a = config === null || config === void 0 ? void 0 : config.localization) === null || _a === void 0 ? void 0 : _a.captions,
                onFilterChange: (e)=>this.onFilterChange(e.detail),
                onResetChange: (e)=>this.onFilterReset(e.detail),
                disableDynamicFiltering: config === null || config === void 0 ? void 0 : config.disableDynamicFiltering,
                closeOnOutsideClick: config === null || config === void 0 ? void 0 : config.closeFilterPanelOnOutsideClick,
                ref: (e)=>this.pop = e
            }, ' ', this.extraContent())
        ];
        const aftersourceset = async ()=>{
            const filterCollectionProps = Object.keys(this.filterCollection);
            if (filterCollectionProps.length > 0) {
                // handle old way of filtering by reworking FilterCollection to new MultiFilterItem
                filterCollectionProps.forEach((prop, index)=>{
                    if (!this.multiFilterItems[prop]) {
                        this.multiFilterItems[prop] = [
                            {
                                id: index,
                                type: this.filterCollection[prop].type,
                                value: this.filterCollection[prop].value,
                                relation: 'and'
                            }
                        ];
                    }
                });
            }
            if (Object.keys(this.multiFilterItems).length === 0) {
                return;
            }
            await this.runFiltering(this.multiFilterItems);
        };
        this.addEventListener('headerclick', (e)=>this.headerclick(e));
        this.addEventListener(FILTER_CONFIG_CHANGED_EVENT, ({ detail })=>{
            if (!detail || typeof detail === 'object' && (!detail.multiFilterItems || !Object.keys(detail.multiFilterItems).length)) {
                this.clearFiltering();
                return;
            }
            if (typeof detail === 'object') {
                this.initConfig(detail);
            }
            aftersourceset();
        });
        this.addEventListener('aftersourceset', aftersourceset);
        this.addEventListener('filter', ({ detail })=>this.onFilterChange(detail));
    }
    beforeshow(_) {
    // used as hook for filter panel
    }
    extraContent() {
        return null;
    }
    initConfig(config) {
        if (config.multiFilterItems) {
            this.multiFilterItems = Object.assign({}, config.multiFilterItems);
        } else {
            this.multiFilterItems = {};
        }
        // Add custom filters
        if (config.customFilters) {
            for(let customFilterType in config.customFilters){
                const cFilter = config.customFilters[customFilterType];
                if (!this.filterByType[cFilter.columnFilterType]) {
                    this.filterByType[cFilter.columnFilterType] = [];
                }
                // add custom filter type
                this.filterByType[cFilter.columnFilterType].push(customFilterType);
                // add custom filter function
                this.filterFunctionsIndexedByType[customFilterType] = cFilter.func;
                // add custom filter name
                this.filterNameIndexByType[customFilterType] = cFilter.name;
            }
        }
        // Add filterProp if provided in config
        if (config.filterProp) {
            this.filterProp = config.filterProp;
        }
        /**
         * which filters has to be included/excluded
         * convenient way to exclude system filters
         */ const cfgInlcude = config.include;
        if (cfgInlcude) {
            const filters = {};
            for(let t in this.filterByType){
                // validate filters, if appropriate function present
                const newTypes = this.filterByType[t].filter((f)=>cfgInlcude.indexOf(f) > -1);
                if (newTypes.length) {
                    filters[t] = newTypes;
                }
            }
            // if any valid filters provided show them
            if (Object.keys(filters).length > 0) {
                this.filterByType = filters;
            }
        }
        if (config.collection) {
            const filtersWithFilterFunctionPresent = Object.entries(config.collection).filter(([, item])=>this.filterFunctionsIndexedByType[item.type]);
            this.filterCollection = Object.fromEntries(filtersWithFilterFunctionPresent);
        } else {
            this.filterCollection = {};
        }
        if (config.localization) {
            if (config.localization.filterNames) {
                Object.entries(config.localization.filterNames).forEach(([k, v])=>{
                    if (this.filterNameIndexByType[k] != void 0) {
                        this.filterNameIndexByType[k] = v;
                    }
                });
            }
        }
    }
    async headerclick(e) {
        var _a, _b;
        const el = (_a = e.detail.originalEvent) === null || _a === void 0 ? void 0 : _a.target;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(el)) {
            return;
        }
        e.preventDefault();
        if (!this.pop) {
            return;
        }
        // filter button clicked, open filter dialog
        const gridPos = this.revogrid.getBoundingClientRect();
        const buttonPos = el.getBoundingClientRect();
        const prop = e.detail.prop;
        const data = Object.assign(Object.assign(Object.assign({}, e.detail), this.filterCollection[prop]), {
            x: buttonPos.x - gridPos.x,
            y: buttonPos.y - gridPos.y + buttonPos.height,
            autoCorrect: true,
            filterTypes: this.getColumnFilter(e.detail.filter),
            filterItems: this.multiFilterItems,
            extraContent: this.extraHyperContent
        });
        (_b = this.beforeshow) === null || _b === void 0 ? void 0 : _b.call(this, data);
        this.pop.show(data);
    }
    getColumnFilter(type) {
        let filterType = 'string';
        if (!type) {
            return {
                [filterType]: this.filterByType[filterType]
            };
        }
        // if custom column filter
        if (this.isValidType(type)) {
            filterType = type;
        // if multiple filters applied
        } else if (typeof type === 'object' && type.length) {
            return type.reduce((r, multiType)=>{
                if (this.isValidType(multiType)) {
                    r[multiType] = this.filterByType[multiType];
                }
                return r;
            }, {});
        }
        return {
            [filterType]: this.filterByType[filterType]
        };
    }
    isValidType(type) {
        return !!(typeof type === 'string' && this.filterByType[type]);
    }
    /**
     * Called on internal component change
     */ async onFilterChange(filterItems) {
        // store the filter items
        this.multiFilterItems = filterItems;
        // run the filtering when the items change
        this.runFiltering(this.multiFilterItems);
    }
    onFilterReset(prop) {
        delete this.multiFilterItems[prop !== null && prop !== void 0 ? prop : ''];
        this.onFilterChange(this.multiFilterItems);
    }
    /**
     * Triggers grid filtering
     */ async doFiltering(collection, source, columns, filterItems) {
        const columnsToUpdate = [];
        /**
         * Loop through the columns and update the columns that need to be updated with the `hasFilter` property.
         */ const columnByProp = {};
        columns.forEach((rgCol)=>{
            const column = Object.assign({}, rgCol);
            const hasFilter = filterItems[column.prop];
            columnByProp[column.prop] = column;
            /**
             * If the column has a filter and it's not already marked as filtered, update the column.
             */ if (column[this.filterProp] && !hasFilter) {
                delete column[this.filterProp];
                columnsToUpdate.push(column);
            }
            /**
             * If the column does not have a filter and it's marked as filtered, update the column.
             */ if (!column[this.filterProp] && hasFilter) {
                columnsToUpdate.push(column);
                column[this.filterProp] = true;
            }
        });
        const itemsToTrim = this.getRowFilter(source, filterItems, columnByProp);
        // check is filter event prevented
        const { defaultPrevented, detail } = this.emit('beforefiltertrimmed', {
            collection,
            itemsToFilter: itemsToTrim,
            source,
            filterItems
        });
        if (defaultPrevented) {
            return;
        }
        this.providers.data.setTrimmed({
            [FILTER_TRIMMED_TYPE]: detail.itemsToFilter
        });
        // applies the hasFilter to the columns to show filter icon
        this.providers.column.updateColumns(columnsToUpdate);
        this.emit('afterfilterapply', {
            multiFilterItems: filterItems,
            source,
            collection
        });
    }
    async clearFiltering() {
        this.multiFilterItems = {};
        await this.runFiltering(this.multiFilterItems);
    }
    async runFiltering(multiFilterItems) {
        const collection = {};
        // handle old filterCollection to return the first filter only (if any) from multiFilterItems
        const filterProps = Object.keys(multiFilterItems);
        for (const prop of filterProps){
            // check if we have any filter for a column
            if (multiFilterItems[prop].length > 0) {
                const firstFilterItem = multiFilterItems[prop][0];
                collection[prop] = {
                    type: firstFilterItem.type,
                    value: firstFilterItem.value
                };
            }
        }
        this.filterCollection = collection;
        const columns = this.providers.column.getColumns();
        // run the filtering on the main source only
        const source = this.providers.data.stores['rgRow'].store.get('source');
        const { defaultPrevented, detail } = this.emit('beforefilterapply', {
            collection: this.filterCollection,
            source,
            columns,
            filterItems: this.multiFilterItems
        });
        if (defaultPrevented) {
            return;
        }
        this.doFiltering(detail.collection, detail.source, detail.columns, detail.filterItems);
    }
    /**
     * Get trimmed rows based on filter
     */ getRowFilter(rows, filterItems, columnByProp) {
        const propKeys = Object.keys(filterItems);
        const trimmed = {};
        // each rows
        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++){
            // check filter by column properties
            for (const prop of propKeys){
                // add to the list of removed/trimmed rows of filter condition is satisfied
                if (this.shouldTrimRow(filterItems[prop], prop, columnByProp[prop], rows[rowIndex])) {
                    trimmed[rowIndex] = true;
                }
            } // end of for-of propKeys
        }
        return trimmed;
    }
    shouldTrimRow(propFilters, prop, column, model = {}) {
        // reset the count of satisfied filters
        let propFilterSatisfiedCount = 0;
        // reset the array of last filter results
        let lastFilterResults = [];
        // testing each filter for a prop
        for (const [filterIndex, filterData] of propFilters.entries()){
            // the filter LogicFunction based on the type
            const filterFunc = this.filterFunctionsIndexedByType[filterData.type];
            // THE MAGIC OF FILTERING IS HERE
            // If there is no column but user wants to filter by a property
            const value = column ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"])(model, column) : model[prop];
            // OR relation
            if (filterData.relation === 'or') {
                // reset the array of last filter results
                lastFilterResults = [];
                // if the filter is satisfied, continue to the next filter
                if (filterFunc(value, filterData.value)) {
                    continue;
                }
                // if the filter is not satisfied, count it
                propFilterSatisfiedCount++;
            // AND relation
            } else {
                // 'and' relation will need to know the next filter
                // so we save this current filter to include it in the next filter
                lastFilterResults.push(!filterFunc(value, filterData.value));
                if (isFinalAndFilter(filterIndex, propFilters)) {
                    // let's just continue since for sure propFilterSatisfiedCount cannot be satisfied
                    if (allAndConditionsSatisfied(lastFilterResults)) {
                        // reset the array of last filter results
                        lastFilterResults = [];
                        continue;
                    }
                    // we need to add all of the lastFilterResults since we need to satisfy all
                    propFilterSatisfiedCount += lastFilterResults.length;
                    // reset the array of last filter results
                    lastFilterResults = [];
                }
            }
        } // end of propFilters forEach
        return propFilterSatisfiedCount === propFilters.length;
    }
}
/**
 * Checks if the current filter is the final one in an AND sequence.
 * @param index - Current filter index in the list.
 * @param filters - Array of filters for the property.
 * @returns True if this is the last AND condition; false otherwise.
 */ function isFinalAndFilter(index, filters) {
    const nextFilter = filters[index + 1]; // Get the next filter in the list.
    // Return true if there's no next filter or if the next filter defined and is not part of the AND sequence.
    return !nextFilter || !!nextFilter.relation && nextFilter.relation !== 'and';
}
/**
 * Determines if all conditions in an AND sequence are satisfied.
 * @param pendingResults - An array of results from the AND conditions.
 * @returns True if all conditions are satisfied; false otherwise.
 */ function allAndConditionsSatisfied(pendingResults) {
    // Check if there are any failed conditions in the pending results.
    return !pendingResults.includes(true);
}
/** `Object#toString` result references. */ var stringTag = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(value) == stringTag;
}
/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */ var asciiSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z"])('length');
/** Used to compose unicode character classes. */ var rsAstralRange$1 = '\\ud800-\\udfff', rsComboMarksRange$1 = '\\u0300-\\u036f', reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f', rsComboSymbolsRange$1 = '\\u20d0-\\u20ff', rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsZWJ$1 = '\\u200d';
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsAstral = '[' + rsAstralRange + ']', rsCombo = '[' + rsComboRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = '(?:' + [
    rsNonAstral + rsCombo + '?',
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */ function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while(reUnicode.test(string)){
        ++result;
    }
    return result;
}
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */ function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}
/** `Object#toString` result references. */ var mapTag = '[object Map]', setTag = '[object Set]';
/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */ function size(collection) {
    if (collection == null) {
        return 0;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
    }
    var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$"])(collection);
    if (tag == mapTag || tag == setTag) {
        return collection.size;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a0"])(collection).length;
}
function sortIndexByItems(indexes, source, sortingFunc = {}) {
    // if no sorting - return unsorted indexes
    if (Object.entries(sortingFunc).length === 0) {
        // Unsorted indexes
        return [
            ...Array(indexes.length).keys()
        ];
    }
    //
    /**
     * go through all indexes and align in new order
     * performs a multi-level sorting by applying multiple comparison functions to determine the order of the items based on different properties.
     */ return indexes.sort((a, b)=>{
        const itemA = source[a];
        const itemB = source[b];
        for (const [prop, cmp] of Object.entries(sortingFunc)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(itemA)) {
                if (itemA['__rvgr-prop'] !== prop) {
                    return 0;
                }
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(itemB)) {
                if (itemB['__rvgr-prop'] !== prop) {
                    return 0;
                }
            }
            /**
             * If the comparison function returns a non-zero value (sorted), it means that the items should be sorted based on the given property. In such a case, the function immediately returns the sorted value, indicating the order in which the items should be arranged.
             * If none of the comparison functions result in a non-zero value, indicating that the items are equal or should remain in the same order, the function eventually returns 0.
             */ const sorted = cmp === null || cmp === void 0 ? void 0 : cmp(prop, itemA, itemB);
            if (sorted) {
                return sorted;
            }
        }
        return 0;
    });
}
function defaultCellCompare(prop, a, b) {
    const aRaw = this.column ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(a, this.column) : a === null || a === void 0 ? void 0 : a[prop];
    const bRaw = this.column ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(b, this.column) : b === null || b === void 0 ? void 0 : b[prop];
    const av = typeof aRaw === 'number' ? aRaw : aRaw === null || aRaw === void 0 ? void 0 : aRaw.toString().toLowerCase();
    const bv = typeof bRaw === 'number' ? bRaw : bRaw === null || bRaw === void 0 ? void 0 : bRaw.toString().toLowerCase();
    if (av === bv) {
        return 0;
    }
    if (av > bv) {
        return 1;
    }
    return -1;
}
function descCellCompare(cmp) {
    return (prop, a, b)=>{
        return -1 * cmp(prop, a, b);
    };
}
function getNextOrder(currentOrder) {
    switch(currentOrder){
        case undefined:
            return 'asc';
        case 'asc':
            return 'desc';
        case 'desc':
            return undefined;
    }
}
function getComparer(column, order) {
    var _a;
    const cellCmp = ((_a = column === null || column === void 0 ? void 0 : column.cellCompare) === null || _a === void 0 ? void 0 : _a.bind({
        order
    })) || (defaultCellCompare === null || defaultCellCompare === void 0 ? void 0 : defaultCellCompare.bind({
        column,
        order
    }));
    if (order == 'asc') {
        return cellCmp;
    }
    if (order == 'desc') {
        return descCellCompare(cellCmp);
    }
    return undefined;
}
/**
 * Lifecycle
 * 1. @event `beforesorting` - Triggered when sorting just starts. Nothing has happened yet. This can be triggered from a column or from the source. If the type is from rows, the column will be undefined.
 * 2. @event `beforesourcesortingapply` - Triggered before the sorting data is applied to the data source. You can prevent this event, and the data will not be sorted.
 * 3. @event `beforesortingapply` - Triggered before the sorting data is applied to the data source. You can prevent this event, and the data will not be sorted. This event is only called from a column sorting click.
 * 4. @event `aftersortingapply` - Triggered after sorting has been applied and completed. This event occurs for both row and column sorting.
 *
 * Note: If you prevent an event, it will not proceed to the subsequent steps.
 */ class SortingPlugin extends BasePlugin {
    constructor(revogrid, providers, config){
        super(revogrid, providers);
        this.revogrid = revogrid;
        /**
         * Delayed sorting promise
         */ this.sortingPromise = null;
        /**
         * We need to sort only so often
         */ this.postponeSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])((order, comparison, ignoreViewportUpdate)=>this.runSorting(order, comparison, ignoreViewportUpdate), 50);
        const setConfig = (cfg)=>{
            var _a;
            if (cfg) {
                const sortingFunc = {};
                const order = {};
                (_a = cfg.columns) === null || _a === void 0 ? void 0 : _a.forEach((col)=>{
                    sortingFunc[col.prop] = getComparer(col, col.order);
                    order[col.prop] = col.order;
                });
                if (cfg.additive) {
                    this.sorting = Object.assign(Object.assign({}, this.sorting), order);
                    this.sortingFunc = Object.assign(Object.assign({}, this.sortingFunc), sortingFunc);
                } else {
                    // // set sorting
                    this.sorting = order;
                    this.sortingFunc = sortingFunc;
                }
            }
        };
        setConfig(config);
        this.addEventListener('sortingconfigchanged', ({ detail })=>{
            config = detail;
            setConfig(detail);
            this.startSorting(this.sorting, this.sortingFunc);
        });
        this.addEventListener('beforeheaderrender', ({ detail })=>{
            var _a;
            const { data: column } = detail;
            if (column.sortable) {
                detail.data = Object.assign(Object.assign({}, column), {
                    order: (_a = this.sorting) === null || _a === void 0 ? void 0 : _a[column.prop]
                });
            }
        });
        this.addEventListener('beforeanysource', ({ detail: { type } })=>{
            // if sorting was provided - sort data
            if (!!this.sorting && this.sortingFunc) {
                const event = this.emit('beforesourcesortingapply', {
                    type,
                    sorting: this.sorting
                });
                if (event.defaultPrevented) {
                    return;
                }
                this.startSorting(this.sorting, this.sortingFunc);
            }
        });
        this.addEventListener('aftercolumnsset', ({ detail: { order } })=>{
            // if config provided - do nothing, read from config
            if (config) {
                return;
            }
            const columns = this.providers.column.getColumns();
            const sortingFunc = {};
            for(let prop in order){
                const cmp = getComparer((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"])(columns, prop), order[prop]);
                sortingFunc[prop] = cmp;
            }
            // set sorting
            this.sorting = order;
            this.sortingFunc = order && sortingFunc;
        });
        this.addEventListener('beforeheaderclick', (e)=>{
            var _a, _b, _c, _d;
            if (e.defaultPrevented) {
                return;
            }
            if (!((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.sortable)) {
                return;
            }
            this.headerclick(e.detail.column, (_d = (_c = e.detail) === null || _c === void 0 ? void 0 : _c.originalEvent) === null || _d === void 0 ? void 0 : _d.shiftKey);
        });
    }
    /**
     * Entry point for sorting, waits for all delayes, registers jobs
     */ startSorting(order, sortingFunc, ignoreViewportUpdate) {
        if (!this.sortingPromise) {
            // add job before render
            this.revogrid.jobsBeforeRender.push(new Promise((resolve)=>{
                this.sortingPromise = resolve;
            }));
        }
        this.postponeSort(order, sortingFunc, ignoreViewportUpdate);
    }
    /**
     * Apply sorting to data on header click
     * If additive - add to existing sorting, multiple columns can be sorted
     */ headerclick(column, additive) {
        var _a, _b, _c;
        const columnProp = column.prop;
        let order = getNextOrder((_a = this.sorting) === null || _a === void 0 ? void 0 : _a[columnProp]);
        const beforeEvent = this.emit('beforesorting', {
            column,
            order,
            additive
        });
        if (beforeEvent.defaultPrevented) {
            return;
        }
        order = beforeEvent.detail.order;
        // apply sort data
        const beforeApplyEvent = this.emit('beforesortingapply', {
            column: beforeEvent.detail.column,
            order,
            additive
        });
        if (beforeApplyEvent.defaultPrevented) {
            return;
        }
        const cmp = getComparer(beforeApplyEvent.detail.column, beforeApplyEvent.detail.order);
        if (beforeApplyEvent.detail.additive && this.sorting) {
            const sorting = {};
            const sortingFunc = {};
            if (columnProp in sorting && size(sorting) > 1 && order === undefined) {
                delete sorting[columnProp];
                delete sortingFunc[columnProp];
            } else {
                sorting[columnProp] = order;
                sortingFunc[columnProp] = cmp;
            }
            this.sorting = Object.assign(Object.assign({}, this.sorting), sorting);
            // extend sorting function with new sorting for multiple columns sorting
            this.sortingFunc = Object.assign(Object.assign({}, this.sortingFunc), sortingFunc);
        } else {
            if (order) {
                // reset sorting
                this.sorting = {
                    [columnProp]: order
                };
                this.sortingFunc = {
                    [columnProp]: cmp
                };
            } else {
                (_b = this.sorting) === null || _b === void 0 ? true : delete _b[columnProp];
                (_c = this.sortingFunc) === null || _c === void 0 ? true : delete _c[columnProp];
            }
        }
        this.startSorting(this.sorting, this.sortingFunc);
    }
    runSorting(order, comparison, ignoreViewportUpdate) {
        var _a;
        this.sort(order, comparison, undefined, ignoreViewportUpdate);
        (_a = this.sortingPromise) === null || _a === void 0 ? void 0 : _a.call(this);
        this.sortingPromise = null;
    }
    /**
     * Sort items by sorting function
     * @requires proxyItems applied to row store
     * @requires source applied to row store
     *
     * @param sorting - per column sorting
     * @param data - this.stores['rgRow'].store.get('source')
     */ sort(sorting, sortingFunc, types = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"], ignoreViewportUpdate = false) {
        // if no sorting - reset
        if (!Object.keys(sorting || {}).length) {
            for (let type of types){
                const storeService = this.providers.data.stores[type];
                // row data
                const source = storeService.store.get('source');
                // row indexes
                const proxyItems = storeService.store.get('proxyItems');
                // row indexes
                const newItemsOrder = Array.from({
                    length: source.length
                }, (_, i)=>i); // recover indexes range(0, source.length)
                this.providers.dimension.updateSizesPositionByNewDataIndexes(type, newItemsOrder, proxyItems);
                storeService.setData({
                    proxyItems: newItemsOrder,
                    source: [
                        ...source
                    ]
                });
            }
        } else {
            for (let type of types){
                const storeService = this.providers.data.stores[type];
                // row data
                const source = storeService.store.get('source');
                // row indexes
                const proxyItems = storeService.store.get('proxyItems');
                const newItemsOrder = sortIndexByItems([
                    ...proxyItems
                ], source, sortingFunc);
                // take row indexes before trim applied and proxy items
                const prevItems = storeService.store.get('items');
                storeService.setData({
                    proxyItems: newItemsOrder,
                    source: [
                        ...source
                    ]
                });
                // take currently visible row indexes
                const newItems = storeService.store.get('items');
                if (!ignoreViewportUpdate) {
                    this.providers.dimension.updateSizesPositionByNewDataIndexes(type, newItems, prevItems);
                }
            }
        }
        // refresh columns to redraw column headers and show correct icon
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"].forEach((type)=>{
            this.providers.column.dataSources[type].refresh();
        });
        this.emit('aftersortingapply');
    }
}
// provide collapse data
function doCollapse(pIndex, source) {
    const model = source[pIndex];
    const collapseValue = model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]];
    const trimmed = {};
    let i = pIndex + 1;
    const total = source.length;
    while(i < total){
        const currentModel = source[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(currentModel)) {
            const currentValue = currentModel[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]];
            if (!currentValue.length || !currentValue.startsWith(collapseValue + ',')) {
                break;
            }
            currentModel[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]] = false;
        }
        trimmed[i++] = true;
    }
    model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]] = false;
    return {
        trimmed
    };
}
/**
 *
 * @param pIndex - physical index
 * @param vIndex - virtual index, need to update item collection
 * @param source - data source
 * @param rowItemsIndexes - rgRow indexes
 */ function doExpand(vIndex, source, rowItemsIndexes) {
    const physicalIndex = rowItemsIndexes[vIndex];
    const model = source[physicalIndex];
    const currentGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]]);
    const trimmed = {};
    // no group found
    if (!currentGroup) {
        return {
            trimmed
        };
    }
    const groupItems = [];
    model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]] = true;
    let i = physicalIndex + 1;
    const total = source.length;
    let groupLevelOnly = 0;
    // go through all rows
    while(i < total){
        const currentModel = source[i];
        const isGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(currentModel);
        // group found
        if (isGroup) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"])(currentGroup, model, currentModel)) {
                break;
            } else if (!groupLevelOnly) {
                // if get group first it's group only level
                groupLevelOnly = currentModel[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"]];
            }
        }
        // level 0 or same depth
        if (!groupLevelOnly || isGroup && groupLevelOnly === currentModel[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"]]) {
            trimmed[i] = false;
            groupItems.push(i);
        }
        i++;
    }
    const result = {
        trimmed
    };
    if (groupItems.length) {
        const items = [
            ...rowItemsIndexes
        ];
        items.splice(vIndex + 1, 0, ...groupItems);
        result.items = items;
    }
    return result;
}
const TRIMMED_GROUPING = 'grouping';
/**
 * Prepare trimming updated indexes for grouping
 * @param initiallyTrimed
 * @param firstLevelMap
 * @param secondLevelMap
 */ function processDoubleConversionTrimmed(initiallyTrimed, firstLevelMap, secondLevelMap) {
    const trimemedOptionsToUpgrade = {};
    /**
     * go through all groups except grouping
     */ for(let type in initiallyTrimed){
        if (type === TRIMMED_GROUPING) {
            continue;
        }
        const items = initiallyTrimed[type];
        const newItems = {};
        for(let initialIndex in items){
            /**
             * if item exists we find it in collection
             * we support 2 level of conversions
             */ let newConversionIndex = firstLevelMap[initialIndex];
            if (secondLevelMap) {
                newConversionIndex = secondLevelMap[newConversionIndex];
            }
            /**
             * if item was trimmed previously
             * trimming makes sense to apply
             */ if (items[initialIndex]) {
                newItems[newConversionIndex] = true;
                /**
                 * If changes present apply changes to new source
                 */ if (newConversionIndex !== parseInt(initialIndex, 10)) {
                    trimemedOptionsToUpgrade[type] = newItems;
                }
            }
        }
    }
    return trimemedOptionsToUpgrade;
}
class GroupingRowPlugin extends BasePlugin {
    getStore(type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]) {
        return this.providers.data.stores[type].store;
    }
    constructor(revogrid, providers){
        super(revogrid, providers);
    }
    // befoce cell focus
    onFocus(e) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(e.detail.model)) {
            e.preventDefault();
        }
    }
    // expand event triggered
    onExpand({ virtualIndex }) {
        const { source } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(this.getStore().get('source'), this.getStore().get('proxyItems'));
        let newTrimmed = this.getStore().get('trimmed')[TRIMMED_GROUPING];
        let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(this.getStore(), virtualIndex);
        const isExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(source[i]);
        if (!isExpanded) {
            const { trimmed, items } = doExpand(virtualIndex, source, this.getStore().get('items'));
            newTrimmed = Object.assign(Object.assign({}, newTrimmed), trimmed);
            if (items) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(this.getStore(), items);
            }
        } else {
            const { trimmed } = doCollapse(i, source);
            newTrimmed = Object.assign(Object.assign({}, newTrimmed), trimmed);
            this.revogrid.clearFocus();
        }
        this.getStore().set('source', source);
        this.revogrid.addTrimmed(newTrimmed, TRIMMED_GROUPING);
    }
    setColumnGrouping(cols) {
        // if 0 column as holder
        if (cols === null || cols === void 0 ? void 0 : cols.length) {
            cols[0][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]] = true;
            return true;
        }
        return false;
    }
    setColumns({ columns }) {
        for (let type of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]){
            if (this.setColumnGrouping(columns[type])) {
                break;
            }
        }
    }
    // evaluate drag between groups
    onDrag(e) {
        const { from, to } = e.detail;
        const isDown = to - from >= 0;
        const { source } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(this.getStore().get('source'), this.getStore().get('proxyItems'));
        const items = this.getStore().get('items');
        let i = isDown ? from : to;
        const end = isDown ? to : from;
        for(; i < end; i++){
            const model = source[items[i]];
            const isGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(model);
            if (isGroup) {
                e.preventDefault();
                return;
            }
        }
    }
    beforeTrimmedApply(trimmed, type) {
        /** Before filter apply remove grouping filtering */ if (type === FILTER_TRIMMED_TYPE) {
            const source = this.getStore().get('source');
            for(let index in trimmed){
                if (trimmed[index] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(source[index])) {
                    trimmed[index] = false;
                }
            }
        }
    }
    isSortingRunning() {
        const sortingPlugin = this.providers.plugins.getByClass(SortingPlugin);
        return !!(sortingPlugin === null || sortingPlugin === void 0 ? void 0 : sortingPlugin.sortingPromise);
    }
    /**
     * Starts global source update with group clearing and applying new one
     * Initiated when need to reapply grouping
     */ doSourceUpdate(options) {
        var _a;
        /**
         * Get source without grouping
         * @param newOldIndexMap - provides us mapping with new indexes vs old indexes, we would use it for trimmed mapping
         */ const store = this.getStore();
        const { source, prevExpanded, oldNewIndexes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(store.get('source'), store.get('proxyItems'), true);
        const expanded = Object.assign({
            prevExpanded
        }, options);
        /**
         * Group again
         * @param oldNewIndexMap - provides us mapping with new indexes vs old indexes
         */ const { sourceWithGroups, depth, trimmed, oldNewIndexMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(source, ((_a = this.options) === null || _a === void 0 ? void 0 : _a.props) || [], expanded);
        const customRenderer = options === null || options === void 0 ? void 0 : options.groupLabelTemplate;
        // setup source
        this.providers.data.setData(sourceWithGroups, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"], this.revogrid.disableVirtualY, {
            depth,
            customRenderer
        }, true);
        this.updateTrimmed(trimmed, oldNewIndexes !== null && oldNewIndexes !== void 0 ? oldNewIndexes : {}, oldNewIndexMap);
    }
    /**
     * Apply grouping on data set
     * Clear grouping from source
     * If source came from other plugin
     */ onDataSet(data) {
        var _a, _b;
        let preservedExpanded = {};
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.preserveGroupingOnUpdate) !== false) {
            let { prevExpanded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(this.getStore().get('source'), this.getStore().get('proxyItems'), true);
            preservedExpanded = prevExpanded;
        }
        const source = data.source.filter((s)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(s));
        const options = Object.assign(Object.assign({}, this.revogrid.grouping || {}), {
            prevExpanded: preservedExpanded
        });
        const { sourceWithGroups, depth, trimmed, oldNewIndexMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(source, ((_b = this.options) === null || _b === void 0 ? void 0 : _b.props) || [], options);
        data.source = sourceWithGroups;
        this.providers.data.setGrouping({
            depth
        });
        this.updateTrimmed(trimmed, oldNewIndexMap);
    }
    /**
     * External call to apply grouping. Called by revogrid when prop changed.
     */ setGrouping(options) {
        var _a, _b;
        // unsubscribe from all events when group applied
        this.clearSubscriptions();
        this.options = options;
        // clear props, no grouping exists
        if (!((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.length)) {
            this.clearGrouping();
            return;
        }
        // props exist and source initd
        const store = this.getStore();
        const { source } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(store.get('source'), store.get('proxyItems'));
        if (source.length) {
            this.doSourceUpdate(Object.assign({}, options));
        }
        // props exist and columns initd
        for (let t of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]){
            if (this.setColumnGrouping(this.providers.column.getColumns(t))) {
                this.providers.column.refreshByType(t);
                break;
            }
        }
        // if has any grouping subscribe to events again
        /** if grouping present and new data source arrived */ this.addEventListener('beforesourceset', ({ detail })=>{
            var _a, _b, _c;
            if (!(((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.length) && ((_c = detail === null || detail === void 0 ? void 0 : detail.source) === null || _c === void 0 ? void 0 : _c.length))) {
                return;
            }
            // if sorting is running don't apply grouping, wait for sorting, then it'll apply in @aftersortingapply
            if (this.isSortingRunning()) {
                return;
            }
            this.onDataSet(detail);
        });
        this.addEventListener('beforecolumnsset', ({ detail })=>{
            this.setColumns(detail);
        });
        /**
         * filter applied need to clear grouping and apply again
         * based on new results can be new grouping
         */ this.addEventListener('beforetrimmed', ({ detail: { trimmed, trimmedType } })=>this.beforeTrimmedApply(trimmed, trimmedType));
        /**
         * sorting applied need to clear grouping and apply again
         * based on new results whole grouping order will changed
         */ this.addEventListener('aftersortingapply', ()=>{
            var _a, _b;
            if (!((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.length)) {
                return;
            }
            this.doSourceUpdate(Object.assign({}, this.options));
        });
        /**
         * Apply logic for focus inside of grouping
         * We can't focus on grouping rows, navigation only inside of groups for now
         */ this.addEventListener('beforecellfocus', (e)=>this.onFocus(e));
        /**
         * Prevent rgRow drag outside the group
         */ this.addEventListener('roworderchanged', (e)=>this.onDrag(e));
        /**
         * When grouping expand icon was clicked
         */ this.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"], (e)=>this.onExpand(e.detail));
    }
    // clear grouping
    clearGrouping() {
        // clear columns
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"].forEach((t)=>{
            const cols = this.providers.column.getColumns(t);
            let deleted = false;
            cols.forEach((c)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])(c)) {
                    delete c[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]];
                    deleted = true;
                }
            });
            // if column store had grouping clear and refresh
            if (deleted) {
                this.providers.column.refreshByType(t);
            }
        });
        // clear rows
        const { source, oldNewIndexes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(this.getStore().get('source'), this.getStore().get('proxyItems'), true);
        this.providers.data.setData(source, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"], this.revogrid.disableVirtualY, undefined, true);
        this.updateTrimmed(undefined, undefined, oldNewIndexes);
    }
    updateTrimmed(trimmedGroup = {}, firstLevelMap = {}, secondLevelMap) {
        // map previously trimmed data
        const trimemedOptionsToUpgrade = processDoubleConversionTrimmed(this.getStore().get('trimmed'), firstLevelMap, secondLevelMap);
        for(let type in trimemedOptionsToUpgrade){
            this.revogrid.addTrimmed(trimemedOptionsToUpgrade[type], type);
        }
        // const emptyGroups = this.filterOutEmptyGroups(trimemedOptionsToUpgrade, childrenByGroup);
        // setup trimmed data for grouping
        this.revogrid.addTrimmed(Object.assign({}, trimmedGroup), TRIMMED_GROUPING);
    }
}
const COLUMN_DRAG_CLASS = 'column-drag-start';
class ColumnOrderHandler {
    constructor(){
        this.offset = 0;
    }
    renderAutoscroll(_, parent) {
        if (!parent) {
            return;
        }
        this.autoscrollEl = document.createElement('div');
        this.autoscrollEl.classList.add('drag-auto-scroll-y');
        parent.appendChild(this.autoscrollEl);
    }
    autoscroll(pos, dataContainerSize, direction = 'translateX') {
        if (!this.autoscrollEl) {
            return;
        }
        const helperOffset = 10;
        // calculate current y position inside of the grid active holder
        // 3 - size of element + border
        const maxScroll = Math.min(pos + helperOffset, dataContainerSize - 3);
        this.autoscrollEl.style.transform = `${direction}(${maxScroll}px)`;
        this.autoscrollEl.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
        });
    }
    start(e, { dataEl, gridRect, scrollEl, gridEl }, dir = 'left') {
        gridEl.classList.add(COLUMN_DRAG_CLASS);
        const scrollContainerRect = scrollEl.getBoundingClientRect();
        if (scrollContainerRect) {
            this.offset = scrollContainerRect[dir] - gridRect[dir];
        }
        this.renderAutoscroll(e, dataEl);
    }
    stop(gridEl) {
        var _a;
        gridEl.classList.remove(COLUMN_DRAG_CLASS);
        if (this.element) {
            this.element.hidden = true;
        }
        this.offset = 0;
        (_a = this.autoscrollEl) === null || _a === void 0 ? void 0 : _a.remove();
        this.autoscrollEl = undefined;
    }
    showHandler(pos, size, direction = 'translateX') {
        if (!this.element) {
            return;
        }
        // do not allow overcross top of the scrollable area, header excluded
        if (this.offset) {
            pos = Math.max(pos, this.offset);
        }
        // can not be bigger then grid end
        pos = Math.min(pos, size);
        this.element.style.transform = `${direction}(${pos}px)`;
        this.element.hidden = false;
    }
    render() {
        const el = this.element = document.createElement('div');
        el.classList.add('drag-position-y');
        el.hidden = true;
        return el;
    }
}
/**
 * Plugin for column manual move
 */ const COLUMN_CLICK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"];
const MOVE = 'columndragmousemove';
const DRAG_END = 'columndragend';
const BEFORE_DRAG_END = 'beforecolumndragend';
// use this event subscription to drop D&D for particular columns
const DRAG_START = 'columndragstart';
class ColumnMovePlugin extends BasePlugin {
    constructor(revogrid, providers){
        super(revogrid, providers);
        this.moveFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])((e)=>this.doMove(e), 5);
        this.staticDragData = null;
        this.dragData = null;
        this.localSubscriptions = {};
        this.orderUi = new ColumnOrderHandler();
        revogrid.appendChild(this.orderUi.render());
        revogrid.classList.add('column-draggable');
        // Register events
        this.localSubscriptions['mouseleave'] = {
            target: document,
            callback: (e)=>this.onMouseOut(e)
        };
        this.localSubscriptions['mouseup'] = {
            target: document,
            callback: (e)=>this.onMouseUp(e)
        };
        this.localSubscriptions['mousemove'] = {
            target: document,
            callback: (e)=>this.move(e)
        };
        this.addEventListener(COLUMN_CLICK, ({ detail })=>this.dragStart(detail));
    }
    dragStart({ event, data }) {
        if (event.defaultPrevented) {
            return;
        }
        const { defaultPrevented } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(this.revogrid, DRAG_START, data);
        // check if allowed to drag particulat column
        if (defaultPrevented) {
            return;
        }
        this.clearOrder();
        const { mouseleave, mouseup, mousemove } = this.localSubscriptions;
        mouseleave.target.addEventListener('mouseleave', mouseleave.callback);
        mouseup.target.addEventListener('mouseup', mouseup.callback);
        const dataEl = event.target.closest('revogr-header');
        const scrollEl = event.target.closest('revogr-viewport-scroll');
        if (!dataEl || !scrollEl) {
            return;
        }
        // no grouping drag and no row header column drag
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E"])(data) || data.providers.type === 'rowHeaders') {
            return;
        }
        const cols = this.getDimension(data.pin || 'rgCol');
        const gridRect = this.revogrid.getBoundingClientRect();
        const elRect = dataEl.getBoundingClientRect();
        const startItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(cols, getLeftRelative(event.x, gridRect.left, elRect.left - gridRect.left));
        this.staticDragData = {
            startPos: event.x,
            startItem,
            pin: data.pin,
            dataEl,
            scrollEl,
            gridEl: this.revogrid,
            cols
        };
        this.dragData = this.getData(this.staticDragData);
        mousemove.target.addEventListener('mousemove', mousemove.callback);
        this.orderUi.start(event, Object.assign(Object.assign({}, this.dragData), this.staticDragData));
    }
    doMove(e) {
        if (!this.staticDragData) {
            return;
        }
        const dragData = this.dragData = this.getData(this.staticDragData);
        if (!dragData) {
            return;
        }
        const start = this.staticDragData.startPos;
        if (Math.abs(start - e.x) > 10) {
            const x = getLeftRelative(e.x, this.dragData.gridRect.left, this.dragData.scrollOffset);
            const rgCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(this.staticDragData.cols, x);
            this.orderUi.autoscroll(x, dragData.elRect.width);
            // prevent position change if out of bounds
            if (rgCol.itemIndex >= this.staticDragData.cols.count) {
                return;
            }
            this.orderUi.showHandler(rgCol.end + dragData.scrollOffset, dragData.gridRect.width);
        }
    }
    move(e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(this.revogrid, MOVE, e);
        // then do move
        this.moveFunc(e);
    }
    onMouseOut(_) {
        this.clearOrder();
    }
    onMouseUp(e) {
        // apply new positions
        if (this.dragData && this.staticDragData) {
            let relativePos = getLeftRelative(e.x, this.dragData.gridRect.left, this.dragData.scrollOffset);
            if (relativePos < 0) {
                relativePos = 0;
            }
            const newPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(this.staticDragData.cols, relativePos);
            const store = this.providers.column.stores[this.dragData.type].store;
            const newItems = [
                ...store.get('items')
            ];
            // prevent position change if needed
            const { defaultPrevented: stopDrag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(this.revogrid, BEFORE_DRAG_END, Object.assign(Object.assign({}, this.staticDragData), {
                startPosition: this.staticDragData.startItem,
                newPosition,
                newItem: store.get('source')[newItems[this.staticDragData.startItem.itemIndex]]
            }));
            if (!stopDrag) {
                const prevItems = [
                    ...newItems
                ];
                // todo: if move item out of group remove item from group
                const toMove = newItems.splice(this.staticDragData.startItem.itemIndex, 1);
                newItems.splice(newPosition.itemIndex, 0, ...toMove);
                store.set('items', newItems);
                this.providers.dimension.updateSizesPositionByNewDataIndexes(this.dragData.type, newItems, prevItems);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(this.revogrid, DRAG_END, this.dragData);
        }
        this.clearOrder();
    }
    clearLocalSubscriptions() {
        forEach(this.localSubscriptions, ({ target, callback }, key)=>target.removeEventListener(key, callback));
    }
    clearOrder() {
        this.staticDragData = null;
        this.dragData = null;
        this.clearLocalSubscriptions();
        this.orderUi.stop(this.revogrid);
    }
    /**
     * Clearing subscription
     */ clearSubscriptions() {
        super.clearSubscriptions();
        this.clearLocalSubscriptions();
    }
    getData({ gridEl, dataEl, pin }) {
        const gridRect = gridEl.getBoundingClientRect();
        const elRect = dataEl.getBoundingClientRect();
        const scrollOffset = elRect.left - gridRect.left;
        return {
            elRect,
            gridRect,
            type: pin || 'rgCol',
            scrollOffset
        };
    }
    getDimension(type) {
        return this.providers.dimension.stores[type].getCurrentState();
    }
}
function getLeftRelative(absoluteX, gridPos, offset) {
    return absoluteX - gridPos - offset;
}
;
 //# sourceMappingURL=column.drag.plugin-CmcURdIJ.js.map
 //# sourceMappingURL=column.drag.plugin-CmcURdIJ.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/cell-renderer-ePazz-Zt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>CellRenderer,
    "G",
    ()=>GroupingRowRenderer,
    "P",
    ()=>PADDING_DEPTH,
    "R",
    ()=>RowRenderer,
    "S",
    ()=>SortingSign,
    "a",
    ()=>expandSvgIconVNode,
    "e",
    ()=>expandEvent
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-ssr] (ecmascript)");
;
;
;
const SortingSign = ({ column })=>{
    var _a;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("i", {
        class: (_a = column === null || column === void 0 ? void 0 : column.order) !== null && _a !== void 0 ? _a : 'sort-off'
    });
};
const PADDING_DEPTH = 10;
const RowRenderer = ({ rowClass, index, size, start, depth }, cells)=>{
    const props = Object.assign({
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"]]: index
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", Object.assign({}, props, {
        class: `rgRow ${rowClass || ''}`,
        style: {
            height: `${size}px`,
            transform: `translateY(${start}px)`,
            paddingLeft: depth ? `${PADDING_DEPTH * depth}px` : undefined
        }
    }), cells);
};
function expandEvent(e, model, virtualIndex) {
    var _a;
    const event = new CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"], {
        detail: {
            model,
            virtualIndex
        },
        cancelable: true,
        bubbles: true
    });
    (_a = e.target) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
}
const GroupingRowRenderer = (props)=>{
    const { model, itemIndex, hasExpand, groupingCustomRenderer } = props;
    const name = model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]];
    const expanded = model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"]];
    const depth = parseInt(model[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"]], 10) || 0;
    if (groupingCustomRenderer) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(RowRenderer, Object.assign({}, props, {
            rowClass: "groupingRow",
            depth: depth
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", {
            onClick: (e)=>expandEvent(e, model, itemIndex)
        }, groupingCustomRenderer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"], Object.assign(Object.assign({}, props), {
            colType: props.providers.colType,
            name,
            expanded,
            depth
        }))));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(RowRenderer, Object.assign({}, props, {
        rowClass: "groupingRow",
        depth: depth
    }), hasExpand && [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("button", {
            class: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"]]: true
            },
            onClick: (e)=>expandEvent(e, model, itemIndex)
        }, expandSvgIconVNode(expanded)),
        name
    ]);
};
const expandSvgIconVNode = (expanded = false)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("svg", {
        "aria-hidden": "true",
        style: {
            transform: `rotate(${!expanded ? -90 : 0}deg)`
        },
        focusable: "false",
        viewBox: "0 0 448 512"
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("path", {
        fill: "currentColor",
        d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
    }));
};
function renderCell(v) {
    var _a;
    const els = [];
    // #region Custom cell
    const template = (_a = v.schemaModel.column) === null || _a === void 0 ? void 0 : _a.cellTemplate;
    if (template) {
        els.push(template(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"], v.schemaModel, v.additionalData));
    } else {
        if (!v.schemaModel.column) {
            // something is wrong with data
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"].isDev) {
                console.error('Investigate column problem.', v.schemaModel);
            }
            return '';
        }
        // Row drag
        if (v.schemaModel.column.rowDrag && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"])(v.schemaModel.column.rowDrag, v.schemaModel)) {
            els.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("span", {
                class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"],
                onMouseDown: (originalEvent)=>{
                    var _a;
                    return (_a = v.dragStartCell) === null || _a === void 0 ? void 0 : _a.emit({
                        originalEvent,
                        model: v.schemaModel
                    });
                }
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("span", {
                class: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"]
            })));
        }
        els.push(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"])(v.schemaModel.model, v.schemaModel.column)}`);
    }
    return els;
}
const CellRenderer = ({ renderProps, cellProps })=>{
    const render = renderCell.bind(null, renderProps);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])("div", Object.assign({}, cellProps, {
        redraw: render
    }), render());
};
;
 //# sourceMappingURL=cell-renderer-ePazz-Zt.js.map
 //# sourceMappingURL=cell-renderer-ePazz-Zt.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/edit.utils-B6bLKSQh.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isCtrlKey,
    "b",
    ()=>isCtrlMetaKey,
    "c",
    ()=>isClear,
    "d",
    ()=>isTab,
    "e",
    ()=>isTabKeyValue,
    "f",
    ()=>isEnterKeyValue,
    "g",
    ()=>isCut,
    "h",
    ()=>isCopy,
    "i",
    ()=>isMetaKey,
    "j",
    ()=>isPaste,
    "k",
    ()=>isAll,
    "l",
    ()=>isEditInput,
    "m",
    ()=>isEditorCtrConstructible
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
;
function isMetaKey(code) {
    const keys = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ARROW_DOWN,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ARROW_UP,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ARROW_LEFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ARROW_RIGHT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].HOME,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].END,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].DELETE,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].BACKSPACE,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F1,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F2,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F3,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F4,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F5,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F6,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F7,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F8,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F9,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F10,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F11,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].F12,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].TAB,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].PAGE_DOWN,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].PAGE_UP,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ENTER,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ESCAPE,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].SHIFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].CAPS_LOCK,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].ALT
    ];
    return keys.indexOf(code) !== -1;
}
// navigator.platform
function isCtrlKey(code, platform) {
    if (platform.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a2"].mac)) {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_LEFT,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_RIGHT,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_FIREFOX
        ].includes(code);
    }
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].CONTROL;
}
function isCtrlMetaKey(code) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].CONTROL,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_LEFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_RIGHT,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"].COMMAND_FIREFOX
    ].includes(code);
}
function isClear(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"].BACKSPACE === code || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"].DELETE === code;
}
function isTab(code) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"].TAB === code;
}
function isTabKeyValue(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V"].TAB === key;
}
function isEnterKeyValue(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V"].ENTER === key;
}
function isCut(event) {
    return event.ctrlKey && event.code === 'KeyX' || event.metaKey && event.code === 'KeyX'; // Cmd + X on Mac
}
function isCopy(event) {
    return event.ctrlKey && event.code === 'KeyC' || event.metaKey && event.code === 'KeyC'; // Cmd + C on Mac
}
function isPaste(event) {
    return event.ctrlKey && event.code === 'KeyV' || event.metaKey && event.code === 'KeyV'; // Cmd + V on Mac
}
function isAll(event) {
    return event.ctrlKey && event.code === 'KeyA' || event.metaKey && event.code === 'KeyA'; // Cmd + A on Mac
}
// is edit input
function isEditInput(el) {
    return !!(el === null || el === void 0 ? void 0 : el.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"]}`));
}
// Type guard for EditorCtrConstructible
function isEditorCtrConstructible(editor) {
    return typeof editor === 'function' && typeof editor.prototype === 'object';
}
;
 //# sourceMappingURL=edit.utils-B6bLKSQh.js.map
 //# sourceMappingURL=edit.utils-B6bLKSQh.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/text-editor-DlCRmV75.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "T",
    ()=>TextEditor
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/edit.utils-B6bLKSQh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
;
;
class TextEditor {
    constructor(data, saveCallback){
        this.data = data;
        this.saveCallback = saveCallback;
        this.editInput = null;
        this.element = null;
        this.editCell = undefined;
    }
    /**
     * Callback triggered on cell editor render
     */ async componentDidRender() {
        var _a;
        if (this.editInput) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
            (_a = this.editInput) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    onKeyDown(e) {
        const isEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(e.key);
        const isKeyTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(e.key);
        if ((isKeyTab || isEnter) && e.target && this.saveCallback && !e.isComposing) {
            // blur is needed to avoid autoscroll
            this.beforeDisconnect();
            // request callback which will close cell after all
            this.saveCallback(this.getValue(), isKeyTab);
        }
    }
    /**
     * IMPORTANT: Prevent scroll glitches when editor is closed and focus is on current input element.
     */ beforeDisconnect() {
        var _a;
        (_a = this.editInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Get value from input
     */ getValue() {
        var _a;
        return (_a = this.editInput) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Render method for Editor plugin.
     * Renders input element with passed data from cell.
     * @param {Function} h - h function from stencil render.
     * @param {Object} _additionalData - additional data from plugin.
     * @returns {VNode} - input element.
     */ render(h, _additionalData) {
        var _a, _b;
        return h('input', {
            type: 'text',
            enterKeyHint: 'enter',
            // set input value from cell data
            value: (_b = (_a = this.editCell) === null || _a === void 0 ? void 0 : _a.val) !== null && _b !== void 0 ? _b : '',
            // save input element as ref for further usage
            ref: (el)=>{
                this.editInput = el;
            },
            // listen to keydown event on input element
            onKeyDown: (e)=>this.onKeyDown(e)
        });
    }
}
;
 //# sourceMappingURL=text-editor-DlCRmV75.js.map
 //# sourceMappingURL=text-editor-DlCRmV75.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoAddRowsPlugin",
    ()=>AutoAddRowsPlugin,
    "REVOGRID_EVENTS",
    ()=>REVOGRID_EVENTS
]);
/*!
 * Built by Revolist OU ❤️
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$service$2d$DT_CqxqZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.service-DT_CqxqZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$drag$2e$plugin$2d$CmcURdIJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/column.drag.plugin-CmcURdIJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$header$2d$cell$2d$renderer$2d$DNIoql0s$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/header-cell-renderer-DNIoql0s.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$cell$2d$renderer$2d$ePazz$2d$Zt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/cell-renderer-ePazz-Zt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$dimension$2e$helpers$2d$D5lwLPzd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/dimension.helpers-D5lwLPzd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$text$2d$editor$2d$DlCRmV75$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/text-editor-DlCRmV75.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$edit$2e$utils$2d$B6bLKSQh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/edit.utils-B6bLKSQh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2d$Dyptvvxf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index-Dyptvvxf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$viewport$2e$store$2d$2mQugd8S$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/viewport.store-2mQugd8S.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$filter$2e$button$2d$DmOE7VCJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/filter.button-DmOE7VCJ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$debounce$2d$BfO9dz9v$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/debounce-BfO9dz9v.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const REVOGRID_EVENTS = new Map([
    [
        'contentsizechanged',
        'contentsizechanged'
    ],
    [
        'beforeedit',
        'beforeedit'
    ],
    [
        'beforerangeedit',
        'beforerangeedit'
    ],
    [
        'afteredit',
        'afteredit'
    ],
    [
        'beforeautofill',
        'beforeautofill'
    ],
    [
        'beforerange',
        'beforerange'
    ],
    [
        'afterfocus',
        'afterfocus'
    ],
    [
        'roworderchanged',
        'roworderchanged'
    ],
    [
        'beforesorting',
        'beforesorting'
    ],
    [
        'beforesourcesortingapply',
        'beforesourcesortingapply'
    ],
    [
        'beforesortingapply',
        'beforesortingapply'
    ],
    [
        'rowdragstart',
        'rowdragstart'
    ],
    [
        'headerclick',
        'headerclick'
    ],
    [
        'beforecellfocus',
        'beforecellfocus'
    ],
    [
        'beforefocuslost',
        'beforefocuslost'
    ],
    [
        'beforesourceset',
        'beforesourceset'
    ],
    [
        'beforeanysource',
        'beforeanysource'
    ],
    [
        'aftersourceset',
        'aftersourceset'
    ],
    [
        'afteranysource',
        'afteranysource'
    ],
    [
        'beforecolumnsset',
        'beforecolumnsset'
    ],
    [
        'beforecolumnapplied',
        'beforecolumnapplied'
    ],
    [
        'aftercolumnsset',
        'aftercolumnsset'
    ],
    [
        'beforefilterapply',
        'beforefilterapply'
    ],
    [
        'beforefiltertrimmed',
        'beforefiltertrimmed'
    ],
    [
        'beforetrimmed',
        'beforetrimmed'
    ],
    [
        'aftertrimmed',
        'aftertrimmed'
    ],
    [
        'viewportscroll',
        'viewportscroll'
    ],
    [
        'beforeexport',
        'beforeexport'
    ],
    [
        'beforeeditstart',
        'beforeeditstart'
    ],
    [
        'aftercolumnresize',
        'aftercolumnresize'
    ],
    [
        'beforerowdefinition',
        'beforerowdefinition'
    ],
    [
        'filterconfigchanged',
        'filterconfigchanged'
    ],
    [
        'sortingconfigchanged',
        'sortingconfigchanged'
    ],
    [
        'rowheaderschanged',
        'rowheaderschanged'
    ],
    [
        'beforegridrender',
        'beforegridrender'
    ],
    [
        'aftergridrender',
        'aftergridrender'
    ],
    [
        'aftergridinit',
        'aftergridinit'
    ],
    [
        'additionaldatachanged',
        'additionaldatachanged'
    ],
    [
        'afterthemechanged',
        'afterthemechanged'
    ],
    [
        'created',
        'created'
    ],
    [
        'beforepaste',
        'beforepaste'
    ],
    [
        'beforepasteapply',
        'beforepasteapply'
    ],
    [
        'pasteregion',
        'pasteregion'
    ],
    [
        'afterpasteapply',
        'afterpasteapply'
    ],
    [
        'beforecut',
        'beforecut'
    ],
    [
        'clearregion',
        'clearregion'
    ],
    [
        'beforecopy',
        'beforecopy'
    ],
    [
        'beforecopyapply',
        'beforecopyapply'
    ],
    [
        'copyregion',
        'copyregion'
    ],
    [
        'beforerowrender',
        'beforerowrender'
    ],
    [
        'afterrender',
        'afterrender'
    ],
    [
        'beforecellrender',
        'beforecellrender'
    ],
    [
        'beforedatarender',
        'beforedatarender'
    ],
    [
        'dragstartcell',
        'dragstartcell'
    ],
    [
        'celleditinit',
        'celleditinit'
    ],
    [
        'closeedit',
        'closeedit'
    ],
    [
        'filterChange',
        'filterChange'
    ],
    [
        'resetChange',
        'resetChange'
    ],
    [
        'beforefocusrender',
        'beforefocusrender'
    ],
    [
        'beforescrollintoview',
        'beforescrollintoview'
    ],
    [
        'afterfocus',
        'afterfocus'
    ],
    [
        'beforeheaderclick',
        'beforeheaderclick'
    ],
    [
        'headerresize',
        'headerresize'
    ],
    [
        'beforeheaderresize',
        'beforeheaderresize'
    ],
    [
        'headerdblclick',
        'headerdblclick'
    ],
    [
        'beforeheaderrender',
        'beforeheaderrender'
    ],
    [
        'beforegroupheaderrender',
        'beforegroupheaderrender'
    ],
    [
        'afterheaderrender',
        'afterheaderrender'
    ],
    [
        'rowdragstartinit',
        'rowdragstartinit'
    ],
    [
        'rowdragendinit',
        'rowdragendinit'
    ],
    [
        'rowdragmoveinit',
        'rowdragmoveinit'
    ],
    [
        'rowdragmousemove',
        'rowdragmousemove'
    ],
    [
        'rowdropinit',
        'rowdropinit'
    ],
    [
        'roworderchange',
        'roworderchange'
    ],
    [
        'beforecopyregion',
        'beforecopyregion'
    ],
    [
        'beforepasteregion',
        'beforepasteregion'
    ],
    [
        'celleditapply',
        'celleditapply'
    ],
    [
        'beforecellfocusinit',
        'beforecellfocusinit'
    ],
    [
        'beforenextvpfocus',
        'beforenextvpfocus'
    ],
    [
        'setedit',
        'setedit'
    ],
    [
        'beforeapplyrange',
        'beforeapplyrange'
    ],
    [
        'beforesetrange',
        'beforesetrange'
    ],
    [
        'setrange',
        'setrange'
    ],
    [
        'beforeeditrender',
        'beforeeditrender'
    ],
    [
        'selectall',
        'selectall'
    ],
    [
        'canceledit',
        'canceledit'
    ],
    [
        'settemprange',
        'settemprange'
    ],
    [
        'beforesettemprange',
        'beforesettemprange'
    ],
    [
        'applyfocus',
        'applyfocus'
    ],
    [
        'focuscell',
        'focuscell'
    ],
    [
        'beforerangedataapply',
        'beforerangedataapply'
    ],
    [
        'selectionchangeinit',
        'selectionchangeinit'
    ],
    [
        'beforerangecopyapply',
        'beforerangecopyapply'
    ],
    [
        'rangeeditapply',
        'rangeeditapply'
    ],
    [
        'clipboardrangecopy',
        'clipboardrangecopy'
    ],
    [
        'clipboardrangepaste',
        'clipboardrangepaste'
    ],
    [
        'beforekeydown',
        'beforekeydown'
    ],
    [
        'beforekeyup',
        'beforekeyup'
    ],
    [
        'beforecellsave',
        'beforecellsave'
    ],
    [
        'celledit',
        'celledit'
    ],
    [
        'scrollview',
        'scrollview'
    ],
    [
        'ref',
        'ref'
    ],
    [
        'scrollvirtual',
        'scrollvirtual'
    ],
    [
        'scrollviewport',
        'scrollviewport'
    ],
    [
        'resizeviewport',
        'resizeviewport'
    ],
    [
        'scrollchange',
        'scrollchange'
    ],
    [
        'scrollviewportsilent',
        'scrollviewportsilent'
    ],
    [
        'html',
        'html'
    ]
]);
/**
 * Automatically adds new rows when pasted data is larger than current rows
 * @event newRows - is triggered when new rows are added. Data of new rows can be filled with default values. If the event is prevented, no rows will be added
 */ class AutoAddRowsPlugin extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$column$2e$drag$2e$plugin$2d$CmcURdIJ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"] {
    constructor(revogrid, providers){
        super(revogrid, providers);
        this.addEventListener('beforepasteapply', (evt)=>this.handleBeforePasteApply(evt));
    }
    handleBeforePasteApply(event) {
        const start = this.providers.selection.focused;
        const isEditing = this.providers.selection.edit != null;
        if (!start || isEditing) {
            return;
        }
        const rowLength = this.providers.data.stores.rgRow.store.get('items').length;
        const endRow = start.y + event.detail.parsed.length;
        if (rowLength < endRow) {
            const count = endRow - rowLength;
            const newRows = Array.from({
                length: count
            }, (_, i)=>({
                    index: rowLength + i,
                    data: {}
                }));
            const event = this.emit('newRows', {
                newRows: newRows
            });
            if (event.defaultPrevented) {
                return;
            }
            const items = [
                ...this.providers.data.stores.rgRow.store.get('source'),
                ...event.detail.newRows.map((j)=>j.data)
            ];
            this.providers.data.setData(items);
        }
    }
}
;
 //# sourceMappingURL=index.js.map
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
;
}),
];

//# sourceMappingURL=a5424_%40revolist_revogrid_ed4e8d6c._.js.map