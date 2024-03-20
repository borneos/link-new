"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/FormRegister.tsx":
/*!*************************************!*\
  !*** ./components/FormRegister.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"./components/ui/input.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons */ \"./components/Icons.tsx\");\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-label */ \"./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/libs/utils */ \"./libs/utils.ts\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\n\nconst FormRegister = (param)=>{\n    let { className , ...props } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function onSubmit(event) {\n        event.preventDefault();\n        setIsLoading(true);\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 3000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_libs_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"grid gap-6\", className),\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                    className: \"sr-only\",\n                                    htmlFor: \"email\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"email\",\n                                    placeholder: \"name@example.com\",\n                                    type: \"email\",\n                                    autoCapitalize: \"none\",\n                                    autoComplete: \"email\",\n                                    autoCorrect: \"off\",\n                                    disabled: isLoading\n                                }, void 0, false, {\n                                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            disabled: isLoading,\n                            children: [\n                                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.spinner, {\n                                    className: \"mr-2 h-4 w-4 animate-spin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined),\n                                \"Sign In with Email\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-full border-t\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex justify-center text-xs uppercase\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-background px-2 text-muted-foreground\",\n                            children: \"Or continue with\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                variant: \"outline\",\n                type: \"button\",\n                disabled: isLoading,\n                children: [\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.spinner, {\n                        className: \"mr-2 h-4 w-4 animate-spin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.google, {\n                        className: \"mr-2 h-4 w-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    \" \",\n                    \"Google\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agungkurniawan/Documents/web/link-new/components/FormRegister.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormRegister, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = FormRegister;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormRegister);\nvar _c;\n$RefreshReg$(_c, \"FormRegister\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1SZWdpc3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFd0M7QUFDSDtBQUNGO0FBQ0g7QUFDYztBQUNaO0FBT2xDLE1BQU1PLGVBQTRDLFNBQWdEO1FBQS9DLEVBQUVDLFVBQVMsRUFBRSxHQUFHQyxPQUEwQjs7SUFDM0YsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFVLEtBQUs7SUFFekQsZUFBZVcsU0FBU0MsS0FBMkIsRUFBRTtRQUNuREEsTUFBTUMsY0FBYztRQUNwQkgsYUFBYSxJQUFJO1FBRWpCSSxXQUFXLElBQU07WUFDZkosYUFBYSxLQUFLO1FBQ3BCLEdBQUc7SUFDTDtJQUVBLHFCQUNFLDhEQUFDSztRQUFJUixXQUFXRiwrQ0FBRUEsQ0FBQyxjQUFjRTtRQUFhLEdBQUdDLEtBQUs7OzBCQUNwRCw4REFBQ1E7Z0JBQUtMLFVBQVVBOzBCQUNkLDRFQUFDSTtvQkFBSVIsV0FBVTs7c0NBQ2IsOERBQUNROzRCQUFJUixXQUFVOzs4Q0FDYiw4REFBQ0gsd0RBQUtBO29DQUFDRyxXQUFVO29DQUFVVSxTQUFROzhDQUFROzs7Ozs7OENBRzNDLDhEQUFDZiw0Q0FBS0E7b0NBQ0pnQixJQUFHO29DQUNIQyxhQUFZO29DQUNaQyxNQUFLO29DQUNMQyxnQkFBZTtvQ0FDZkMsY0FBYTtvQ0FDYkMsYUFBWTtvQ0FDWkMsVUFBVWY7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ1IsOENBQU1BOzRCQUFDdUIsVUFBVWY7O2dDQUNmQSwyQkFDQyw4REFBQ04saURBQWE7b0NBQUNJLFdBQVU7Ozs7OztnQ0FDekI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLUiw4REFBQ1E7Z0JBQUlSLFdBQVU7O2tDQUNiLDhEQUFDUTt3QkFBSVIsV0FBVTtrQ0FDYiw0RUFBQ21COzRCQUFLbkIsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWxCLDhEQUFDUTt3QkFBSVIsV0FBVTtrQ0FDYiw0RUFBQ21COzRCQUFLbkIsV0FBVTtzQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsvRCw4REFBQ04sOENBQU1BO2dCQUFDMEIsU0FBUTtnQkFBVVAsTUFBSztnQkFBU0ksVUFBVWY7O29CQUMvQ0EsMEJBQ0MsOERBQUNOLGlEQUFhO3dCQUFDSSxXQUFVOzs7OztrREFFekIsOERBQUNKLGdEQUFZO3dCQUFDSSxXQUFVOzs7OztpQ0FDekI7b0JBQUU7b0JBQUk7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQTFETUQ7S0FBQUE7QUE0RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtUmVnaXN0ZXIudHN4P2UwNTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi91aS9pbnB1dCc7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4vSWNvbnMnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtbGFiZWwnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYnMvdXRpbHMnO1xuXG5pbnRlcmZhY2UgVXNlckF1dGhGb3JtUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57fVxuXG5pbnRlcmZhY2UgRm9ybVJlZ2lzdGVyUHJvcHMge1xufVxuXG5jb25zdCBGb3JtUmVnaXN0ZXI6IFJlYWN0LkZDPEZvcm1SZWdpc3RlclByb3BzPiA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogVXNlckF1dGhGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH0sIDMwMDApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihcImdyaWQgZ2FwLTZcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMVwiPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZUBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b0NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0xvYWRpbmd9PlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgIDxJY29ucy5zcGlubmVyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFNpZ24gSW4gd2l0aCBFbWFpbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci10XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgcHgtMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgIE9yIGNvbnRpbnVlIHdpdGhcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtpc0xvYWRpbmd9PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxJY29ucy5zcGlubmVyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJY29ucy5nb29nbGUgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgIEdvb2dsZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtUmVnaXN0ZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJJbnB1dCIsIkljb25zIiwiTGFiZWwiLCJjbiIsIkZvcm1SZWdpc3RlciIsImNsYXNzTmFtZSIsInByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImRpdiIsImZvcm0iLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJhdXRvQ2FwaXRhbGl6ZSIsImF1dG9Db21wbGV0ZSIsImF1dG9Db3JyZWN0IiwiZGlzYWJsZWQiLCJzcGlubmVyIiwic3BhbiIsInZhcmlhbnQiLCJnb29nbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormRegister.tsx\n"));

/***/ })

});