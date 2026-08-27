(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/i18n/routing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        "pl",
        "ru",
        "en",
        "ua"
    ],
    defaultLocale: "pl"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "redirect",
    ()=>redirect,
    "usePathname",
    ()=>usePathname,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const LanguageSwitcher = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "41afa9235c983ed1e666110a2ba0a705c1c57becde592278ef2f53adb71a3488") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41afa9235c983ed1e666110a2ba0a705c1c57becde592278ef2f53adb71a3488";
    }
    const languageAtTheMoment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    let t0;
    if ($[1] !== languageAtTheMoment) {
        t0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales.map((locale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                href: "/",
                className: languageAtTheMoment === locale ? "font-bold px-2" : "opacity-50 px-2",
                locale: locale,
                children: locale.toUpperCase()
            }, locale, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 18,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = languageAtTheMoment;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: t0
        }, void 0, false);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_s(LanguageSwitcher, "wqB8Sl3SkLPcNRDRw2xqv5ZTDLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = LanguageSwitcher;
const __TURBOPACK__default__export__ = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Hero = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "c0edfb1e3b2102069dc6e37144c9107133a30775a9f48cf3cb669c7cbbffef8b") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c0edfb1e3b2102069dc6e37144c9107133a30775a9f48cf3cb669c7cbbffef8b";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("hero");
    let t0;
    if ($[1] !== t) {
        t0 = t("title");
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero__title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                "data-i18n": "title",
                className: "text-4xl font-bold text-white text-center",
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero__contacts--phone",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "tel:+48736335283",
                children: "+48 736 335 283"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 32,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t) {
        t3 = t("callUs");
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero__contacts--links",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "hero__contacts--link",
                href: "tel:+48736335283",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "callUs",
                    className: "bg-orange-500 rounded-lg px-6 py-3",
                    children: t3
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 47,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 47,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t) {
        t5 = t("onlineOrder");
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero__contacts--order",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#leadForm",
                className: "btn__order",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "onlineOrder",
                    className: "bg-orange-500 rounded-lg px-6 py-3",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 63,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 63,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero__contacts",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero__contacts--wrapper",
                    children: [
                        t4,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 71,
                    columnNumber: 46
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t1 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[#1f3a5f]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero__wrapper",
                    children: [
                        t1,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 80,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t1;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
};
_s(Hero, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Prices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Prices = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(147);
    if ($[0] !== "e1c2c98e394c33465f115e37d1e1c189b7db62af3895ba21b413ab695ca49272") {
        for(let $i = 0; $i < 147; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1c2c98e394c33465f115e37d1e1c189b7db62af3895ba21b413ab695ca49272";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("prices");
    let t0;
    if ($[1] !== t) {
        t0 = t("pricesTitle");
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            "data-aos": "zoom-in",
            "data-i18n": "pricesTitle",
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t) {
        t2 = t("pricesSubtitle");
        $[5] = t;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            "data-aos": "zoom-in",
            "data-i18n": "pricesSubtitle",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t1 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__header",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t1;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t) {
        t5 = t("minOrder");
        $[12] = t;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-aos": "zoom-in",
            "data-i18n": "minOrder",
            className: "pricing__min-order main",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t) {
        t7 = t("arrival");
        $[16] = t;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__service-name",
            "data-i18n": "arrival",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t) {
        t9 = t("driverOnly");
        $[20] = t;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__service-subtext",
            "data-i18n": "driverOnly",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t10;
        $[25] = t8;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t) {
        t12 = t("hour");
        $[27] = t;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--hour",
            children: [
                "130 zł/",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hour",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 122,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t) {
        t14 = t("hours");
        $[31] = t;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--min",
            children: [
                "260 zł/2 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hours",
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 138,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t13 || $[36] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t13;
        $[36] = t15;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t11 || $[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item",
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t11;
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t) {
        t18 = t("moverService");
        $[41] = t;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__service-name",
                "data-i18n": "moverService",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 172,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t18;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== t) {
        t20 = t("hour");
        $[45] = t;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--hour",
            children: [
                "40 zł/",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hour",
                    children: t20
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 188,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t) {
        t22 = t("hours");
        $[49] = t;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--min",
            children: [
                "80 zł/2 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hours",
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 204,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t21 || $[54] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price",
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t21;
        $[54] = t23;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== t19 || $[57] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item",
            children: [
                t19,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t19;
        $[57] = t24;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== t) {
        t26 = t("packing");
        $[59] = t;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__service-name",
                "data-i18n": "packing",
                children: t26
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 238,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t26;
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== t) {
        t28 = t("hour");
        $[63] = t;
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    let t29;
    if ($[65] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--hour",
            children: [
                "50 zł/",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hour",
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 254,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t28;
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t) {
        t30 = t("hours");
        $[67] = t;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--min",
            children: [
                "100 zł/2 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "hours",
                    children: t30
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 270,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t30;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] !== t29 || $[72] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price",
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t29;
        $[72] = t31;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    let t33;
    if ($[74] !== t27 || $[75] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item",
            children: [
                t27,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t27;
        $[75] = t32;
        $[76] = t33;
    } else {
        t33 = $[76];
    }
    let t34;
    if ($[77] !== t) {
        t34 = t("intercity");
        $[77] = t;
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    let t35;
    if ($[79] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__service-name",
            "data-i18n": "intercity",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t34;
        $[80] = t35;
    } else {
        t35 = $[80];
    }
    let t36;
    if ($[81] !== t) {
        t36 = t("minOrderIntercity");
        $[81] = t;
        $[82] = t36;
    } else {
        t36 = $[82];
    }
    let t37;
    if ($[83] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__service-subtext",
            "data-i18n": "minOrderIntercity",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t36;
        $[84] = t37;
    } else {
        t37 = $[84];
    }
    let t38;
    if ($[85] !== t35 || $[86] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t35;
        $[86] = t37;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t) {
        t39 = t("km");
        $[88] = t;
        $[89] = t39;
    } else {
        t39 = $[89];
    }
    let t40;
    if ($[90] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-i18n": "km",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = t39;
        $[91] = t40;
    } else {
        t40 = $[91];
    }
    let t41;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tooltip-wrapper",
            "data-i18n": "tooltipBus",
            "data-tooltip": "Zwyk\u0142y bus",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "./assets/price/info.png",
                alt: "description"
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 353,
                columnNumber: 101
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--km",
            children: [
                "5 zł/",
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = t40;
        $[94] = t42;
    } else {
        t42 = $[94];
    }
    let t43;
    if ($[95] !== t) {
        t43 = t("km");
        $[95] = t;
        $[96] = t43;
    } else {
        t43 = $[96];
    }
    let t44;
    if ($[97] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-i18n": "km",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = t43;
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tooltip-wrapper",
            "data-i18n": "tooltipBusBig",
            "data-tooltip": "Bus 10 EP + Winda za\u0142adowcza",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "./assets/price/info.png",
                alt: "description"
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 384,
                columnNumber: 122
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = t45;
    } else {
        t45 = $[99];
    }
    let t46;
    if ($[100] !== t44) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "pricing__price--km",
            children: [
                "6 zł/",
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[100] = t44;
        $[101] = t46;
    } else {
        t46 = $[101];
    }
    let t47;
    if ($[102] !== t42 || $[103] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price pricing__price--info",
            children: [
                t42,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[102] = t42;
        $[103] = t46;
        $[104] = t47;
    } else {
        t47 = $[104];
    }
    let t48;
    if ($[105] !== t38 || $[106] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item pricing__item--no-min",
            children: [
                t38,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[105] = t38;
        $[106] = t47;
        $[107] = t48;
    } else {
        t48 = $[107];
    }
    let t49;
    if ($[108] !== t) {
        t49 = t("assembly");
        $[108] = t;
        $[109] = t49;
    } else {
        t49 = $[109];
    }
    let t50;
    if ($[110] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__service-name",
                "data-i18n": "assembly",
                children: t49
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 425,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[110] = t49;
        $[111] = t50;
    } else {
        t50 = $[111];
    }
    let t51;
    if ($[112] !== t) {
        t51 = t("element");
        $[112] = t;
        $[113] = t51;
    } else {
        t51 = $[113];
    }
    let t52;
    if ($[114] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__price--hour",
                children: [
                    "70 - 100 zł/",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-i18n": "element",
                        children: t51
                    }, void 0, false, {
                        fileName: "[project]/src/components/Prices.tsx",
                        lineNumber: 441,
                        columnNumber: 91
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 441,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[114] = t51;
        $[115] = t52;
    } else {
        t52 = $[115];
    }
    let t53;
    if ($[116] !== t50 || $[117] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item",
            children: [
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[116] = t50;
        $[117] = t52;
        $[118] = t53;
    } else {
        t53 = $[118];
    }
    let t54;
    if ($[119] !== t) {
        t54 = t("cleaning");
        $[119] = t;
        $[120] = t54;
    } else {
        t54 = $[120];
    }
    let t55;
    if ($[121] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__details",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__service-name",
                "data-i18n": "cleaning",
                children: t54
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 466,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[121] = t54;
        $[122] = t55;
    } else {
        t55 = $[122];
    }
    let t56;
    if ($[123] !== t) {
        t56 = t("cleaningPrice");
        $[123] = t;
        $[124] = t56;
    } else {
        t56 = $[124];
    }
    let t57;
    if ($[125] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__price",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pricing__price--hour",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-i18n": "cleaningPrice",
                    children: t56
                }, void 0, false, {
                    fileName: "[project]/src/components/Prices.tsx",
                    lineNumber: 482,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 482,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[125] = t56;
        $[126] = t57;
    } else {
        t57 = $[126];
    }
    let t58;
    if ($[127] !== t55 || $[128] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__item",
            children: [
                t55,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[127] = t55;
        $[128] = t57;
        $[129] = t58;
    } else {
        t58 = $[129];
    }
    let t59;
    if ($[130] !== t17 || $[131] !== t25 || $[132] !== t33 || $[133] !== t48 || $[134] !== t53 || $[135] !== t58 || $[136] !== t6) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing__list",
            children: [
                t6,
                t17,
                t25,
                t33,
                t48,
                t53,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[130] = t17;
        $[131] = t25;
        $[132] = t33;
        $[133] = t48;
        $[134] = t53;
        $[135] = t58;
        $[136] = t6;
        $[137] = t59;
    } else {
        t59 = $[137];
    }
    let t60;
    if ($[138] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.2501 21C17.1514 21.0005 17.0536 20.9816 16.9622 20.9443C16.8708 20.907 16.7877 20.852 16.7176 20.7825L12.1201 16.1775L9.62261 19.9275C9.54308 20.0493 9.42983 20.1453 9.29666 20.2039C9.1635 20.2625 9.01616 20.2811 8.87261 20.2575C8.73201 20.2365 8.60025 20.176 8.49269 20.0831C8.38514 19.9901 8.30621 19.8685 8.26511 19.7325L3.76511 4.73245C3.71163 4.59811 3.69811 4.45117 3.7262 4.30933C3.75429 4.16749 3.82278 4.03679 3.92343 3.93297C4.02407 3.82915 4.15259 3.75664 4.29349 3.72417C4.43439 3.6917 4.58168 3.70065 4.71761 3.74995L19.7176 8.24995C19.8537 8.29105 19.9753 8.36997 20.0683 8.47753C20.1612 8.58509 20.2217 8.71685 20.2426 8.85745C20.2663 9.001 20.2477 9.14833 20.1891 9.2815C20.1305 9.41467 20.0344 9.52792 19.9126 9.60745L16.1626 12.105L20.7676 16.7025C20.8379 16.7722 20.8937 16.8551 20.9318 16.9465C20.9699 17.0379 20.9895 17.1359 20.9895 17.235C20.9895 17.334 20.9699 17.432 20.9318 17.5234C20.8937 17.6148 20.8379 17.6977 20.7676 17.7675L17.7676 20.7675C17.6322 20.9097 17.4464 20.9932 17.2501 21ZM17.2501 19.1925L19.1926 17.25L13.8226 11.8875L17.7601 9.26245L5.61761 5.61745L9.26261 17.76L11.8876 13.8225L17.2501 19.1925Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 513,
                columnNumber: 106
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[138] = t60;
    } else {
        t60 = $[138];
    }
    let t61;
    if ($[139] !== t) {
        t61 = t("onlineOrder");
        $[139] = t;
        $[140] = t61;
    } else {
        t61 = $[140];
    }
    let t62;
    if ($[141] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-aos": "zoom-in",
            className: "pricing__order",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#leadForm",
                className: "btn__order btn__pricing",
                children: [
                    t60,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-i18n": "onlineOrder",
                        children: t61
                    }, void 0, false, {
                        fileName: "[project]/src/components/Prices.tsx",
                        lineNumber: 528,
                        columnNumber: 123
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Prices.tsx",
                lineNumber: 528,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[141] = t61;
        $[142] = t62;
    } else {
        t62 = $[142];
    }
    let t63;
    if ($[143] !== t4 || $[144] !== t59 || $[145] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                t4,
                t59,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Prices.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[143] = t4;
        $[144] = t59;
        $[145] = t62;
        $[146] = t63;
    } else {
        t63 = $[146];
    }
    return t63;
};
_s(Prices, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Prices;
const __TURBOPACK__default__export__ = Prices;
var _c;
__turbopack_context__.k.register(_c, "Prices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Services = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1efd57a31e030377fcbaa908fa705c9741c4d9388b6687e44db085a10de5b8ad") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1efd57a31e030377fcbaa908fa705c9741c4d9388b6687e44db085a10de5b8ad";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("services");
    let t0;
    if ($[1] !== t) {
        const keys = [
            "homeMoving",
            "officeMoving",
            "storeDelivery",
            "constructionSupplies",
            "cleaning",
            "fragileCargo",
            "specialCargo",
            "transfer"
        ];
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: keys.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `/images/services/${index + 1}.png`,
                                alt: t(item)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services.tsx",
                                lineNumber: 17,
                                columnNumber: 172
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t(item)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Services.tsx",
                                lineNumber: 17,
                                columnNumber: 235
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item, true, {
                        fileName: "[project]/src/components/Services.tsx",
                        lineNumber: 17,
                        columnNumber: 101
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Services.tsx",
                lineNumber: 17,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Services.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_s(Services, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_04gfmws._.js.map