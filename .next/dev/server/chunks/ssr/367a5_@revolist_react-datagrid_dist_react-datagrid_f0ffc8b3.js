module.exports = [
"[project]/node_modules/.pnpm/@revolist+react-datagrid@4.20.2/node_modules/@revolist/react-datagrid/dist/react-datagrid.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Editor",
    ()=>Editor,
    "EditorAdapter",
    ()=>EditorAdapter,
    "RevoGrid",
    ()=>RevoGrid,
    "Template",
    ()=>Template
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$loader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/loader/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/esm/loader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@revolist+revogrid@4.20.2/node_modules/@revolist/revogrid/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-dom/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
;
;
;
;
;
;
const dashToPascalCase = (str)=>str.toLowerCase().split("-").map((segment)=>segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str)=>str.replace(/([A-Z])/g, (m)=>`-${m[0].toLowerCase()}`);
const attachProps = (node, newProps, oldProps = {})=>{
    if (node instanceof Element) {
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== "") {
            node.className = className;
        }
        Object.keys(newProps).forEach((name)=>{
            if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
                return;
            }
            if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            } else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === "string") {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
            }
        });
    }
};
const getClassName = (classList, newProps, oldProps)=>{
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
    const finalClassNames = [];
    currentClasses.forEach((currentClass)=>{
        if (incomingPropClasses.has(currentClass)) {
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        } else if (!oldPropClasses.has(currentClass)) {
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach((s)=>finalClassNames.push(s));
    return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix)=>{
    switch(eventNameSuffix){
        case "doubleclick":
            return "dblclick";
    }
    return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const isCoveredByReact = (eventNameSuffix)=>{
    if (typeof document === "undefined") {
        return true;
    } else {
        const eventName = "on" + transformReactEventName(eventNameSuffix);
        let isSupported = eventName in document;
        if (!isSupported) {
            const element = document.createElement("div");
            element.setAttribute(eventName, "return;");
            isSupported = typeof element[eventName] === "function";
        }
        return isSupported;
    }
};
const syncEvent = (node, eventName, newEventHandler)=>{
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    });
};
const arrayToMap = (arr)=>{
    const map = /* @__PURE__ */ new Map();
    arr.forEach((s)=>map.set(s, s));
    return map;
};
const setRef = (ref, value)=>{
    if (typeof ref === "function") {
        ref(value);
    } else if (ref != null) {
        ref.current = value;
    }
};
const mergeRefs = (...refs)=>{
    return (value)=>{
        refs.forEach((ref)=>{
            setRef(ref, value);
        });
    };
};
const createForwardRef = (ReactComponent, displayName)=>{
    const forwardRef = (props, ref)=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ReactComponent, {
            ...props,
            forwardedRef: ref
        });
    };
    forwardRef.displayName = displayName;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(forwardRef);
};
const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement)=>{
    if (defineCustomElement !== void 0) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component {
        constructor(props){
            super(props);
            __publicField(this, "componentEl");
            __publicField(this, "setComponentElRef", (element)=>{
                this.componentEl = element;
            });
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        }
        render() {
            const { children, forwardedRef, style, className, ref, ...cProps } = this.props;
            let propsToPass = Object.keys(cProps).reduce((acc, name)=>{
                const value = cProps[name];
                if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                } else {
                    const type = typeof value;
                    if (type === "string" || type === "boolean" || type === "number") {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }, {});
            const newProps = {
                ...propsToPass,
                ref: mergeRefs(forwardedRef, this.setComponentElRef),
                style
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};
function TemplateConstructor(el, ReactComponent, initialProps, key) {
    if (!el._root) {
        el._root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRoot"])(el);
    }
    const renderComponent = (props)=>{
        var _a;
        const vNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(ReactComponent, {
            ...props,
            key
        });
        (_a = el._root) == null ? void 0 : _a.render(vNode);
    };
    renderComponent(initialProps);
    const update = (newProps)=>{
        renderComponent(newProps);
    };
    const destroy = ()=>{
        var _a;
        (_a = el._root) == null ? void 0 : _a.unmount();
        el._root = void 0;
    };
    return {
        update,
        destroy
    };
}
const Template = (ReactComponent, customProps)=>{
    return (h, p, addition)=>{
        const props = customProps ? {
            ...customProps,
            ...p
        } : p;
        props.addition = addition;
        const key = `${p.prop}-${p.rowIndex || 0}`;
        let lastEl = null;
        return h("span", {
            ref: (el)=>{
                var _a;
                if (!el) {
                    (_a = lastEl == null ? void 0 : lastEl.destroy) == null ? void 0 : _a.call(lastEl);
                } else {
                    lastEl = TemplateConstructor(el, ReactComponent, props, key);
                }
            }
        });
    };
};
class EditorAdapter {
    constructor(EditorComponent, column, save, close){
        __publicField(this, "element", null);
        __publicField(this, "editCell");
        __publicField(this, "renderedComponent", null);
        this.EditorComponent = EditorComponent;
        this.column = column;
        this.save = save;
        this.close = close;
    }
    // optional, called after editor rendered
    componentDidRender() {}
    // optional, called after editor destroyed
    disconnectedCallback() {
        var _a;
        (_a = this.renderedComponent) == null ? void 0 : _a.destroy();
        this.renderedComponent = null;
    }
    render(h) {
        var _a;
        return h("span", {
            key: `${this.column.prop}-${((_a = this.editCell) == null ? void 0 : _a.rowIndex) || 0}`,
            ref: (el)=>{
                var _a2, _b;
                const key = `${this.column.prop}-${((_a2 = this.editCell) == null ? void 0 : _a2.rowIndex) || 0}`;
                if (!el) {
                    (_b = this.renderedComponent) == null ? void 0 : _b.destroy();
                    this.renderedComponent = null;
                } else {
                    this.renderedComponent = TemplateConstructor(el, this.EditorComponent, {
                        ...this.editCell,
                        column: this.column,
                        save: this.save,
                        close: this.close
                    }, key);
                }
            }
        });
    }
}
const Editor = (EditorComponent)=>{
    return function(column, save, close) {
        return new EditorAdapter(EditorComponent, column, save, close);
    };
};
const RevoGrid = /* @__PURE__ */ createReactComponent("revo-grid", void 0, void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$revolist$2b$revogrid$40$4$2e$20$2e$2$2f$node_modules$2f40$revolist$2f$revogrid$2f$dist$2f$esm$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineCustomElements"]);
;
}),
];

//# sourceMappingURL=367a5_%40revolist_react-datagrid_dist_react-datagrid_f0ffc8b3.js.map