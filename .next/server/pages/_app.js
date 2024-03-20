/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Outfit\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"outfit\"}":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/font/google/target.css?{"path":"pages/_app.tsx","import":"Outfit","arguments":[{"subsets":["latin"]}],"variableName":"outfit"} ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Outfit_638584', '__Outfit_Fallback_638584'\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_638584\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9mb250L2dvb2dsZS90YXJnZXQuY3NzP3tcInBhdGhcIjpcInBhZ2VzL19hcHAudHN4XCIsXCJpbXBvcnRcIjpcIk91dGZpdFwiLFwiYXJndW1lbnRzXCI6W3tcInN1YnNldHNcIjpbXCJsYXRpblwiXX1dLFwidmFyaWFibGVOYW1lXCI6XCJvdXRmaXRcIn0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFdBQVcsa0ZBQWtGO0FBQzdGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWttZmVzdC8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/YzRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdHlsZVwiOiB7XCJmb250RmFtaWx5XCI6XCInX19PdXRmaXRfNjM4NTg0JywgJ19fT3V0Zml0X0ZhbGxiYWNrXzYzODU4NCdcIixcImZvbnRTdHlsZVwiOlwibm9ybWFsXCJ9LFxuXHRcImNsYXNzTmFtZVwiOiBcIl9fY2xhc3NOYW1lXzYzODU4NFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Outfit\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"outfit\"}\n");

/***/ }),

/***/ "./helpers/utils.ts":
/*!**************************!*\
  !*** ./helpers/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile),\n/* harmony export */   \"populateAdditionalImage\": () => (/* binding */ populateAdditionalImage)\n/* harmony export */ });\nfunction populateAdditionalImage(data) {\n    const CDN = `https://res.cloudinary.com/borneos-co/image/upload/`;\n    const { isGrayscale , public_id , extension , height , width , crop =\"c_fill\"  } = data;\n    return `${CDN}w_${width},h_${height},${crop}/${isGrayscale ? `e_grayscale/` : ``}${public_id}.${extension}`;\n}\nconst isMobile = (userAgent)=>{\n    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;\n    return mobileRegex.test(userAgent);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0Esd0JBQXdCQyxJQUFJLEVBQUU7SUFDNUMsTUFBTUMsTUFBTSxDQUFDLG1EQUFtRCxDQUFDO0lBQ2pFLE1BQU0sRUFDSkMsWUFBVyxFQUNYQyxVQUFTLEVBQ1RDLFVBQVMsRUFDVEMsT0FBTSxFQUNOQyxNQUFLLEVBQ0xDLE1BQU8sU0FBUSxFQUNoQixHQUFHUDtJQUVKLE9BQU8sQ0FBQyxFQUFFQyxJQUFJLEVBQUUsRUFBRUssTUFBTSxHQUFHLEVBQUVELE9BQU8sQ0FBQyxFQUFFRSxLQUFLLENBQUMsRUFDM0NMLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDbEMsRUFBRUMsVUFBVSxDQUFDLEVBQUVDLFVBQVUsQ0FBQztBQUM3QixDQUFDO0FBRU0sTUFBTUksV0FBVyxDQUFDQyxZQUErQjtJQUN0RCxNQUFNQyxjQUFjO0lBQ3BCLE9BQU9BLFlBQVlDLElBQUksQ0FBQ0Y7QUFDMUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Vta21mZXN0Ly4vaGVscGVycy91dGlscy50cz83ODhmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUFkZGl0aW9uYWxJbWFnZShkYXRhKSB7XG4gIGNvbnN0IENETiA9IGBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ib3JuZW9zLWNvL2ltYWdlL3VwbG9hZC9gO1xuICBjb25zdCB7XG4gICAgaXNHcmF5c2NhbGUsXG4gICAgcHVibGljX2lkLFxuICAgIGV4dGVuc2lvbixcbiAgICBoZWlnaHQsXG4gICAgd2lkdGgsXG4gICAgY3JvcCA9ICdjX2ZpbGwnLFxuICB9ID0gZGF0YTtcblxuICByZXR1cm4gYCR7Q0ROfXdfJHt3aWR0aH0saF8ke2hlaWdodH0sJHtjcm9wfS8ke1xuICAgIGlzR3JheXNjYWxlID8gYGVfZ3JheXNjYWxlL2AgOiBgYFxuICB9JHtwdWJsaWNfaWR9LiR7ZXh0ZW5zaW9ufWA7XG59XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICh1c2VyQWdlbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBtb2JpbGVSZWdleCA9IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2k7XG4gIHJldHVybiBtb2JpbGVSZWdleC50ZXN0KHVzZXJBZ2VudCk7XG59OyJdLCJuYW1lcyI6WyJwb3B1bGF0ZUFkZGl0aW9uYWxJbWFnZSIsImRhdGEiLCJDRE4iLCJpc0dyYXlzY2FsZSIsInB1YmxpY19pZCIsImV4dGVuc2lvbiIsImhlaWdodCIsIndpZHRoIiwiY3JvcCIsImlzTW9iaWxlIiwidXNlckFnZW50IiwibW9iaWxlUmVnZXgiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/utils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_variableName_outfit___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Outfit\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"outfit\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Outfit\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"outfit\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_variableName_outfit___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_variableName_outfit___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/utils */ \"./helpers/utils.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps } , isMobile  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_5__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (next_font_google_target_css_path_pages_app_tsx_import_Outfit_arguments_subsets_latin_variableName_outfit___WEBPACK_IMPORTED_MODULE_8___default().className),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps,\n                    isMobile: isMobile\n                }, void 0, false, {\n                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                    fileName: \"/Users/agungkurniawan/Documents/web/link-new/pages/_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agungkurniawan/Documents/web/link-new/pages/_app.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agungkurniawan/Documents/web/link-new/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\nApp.getInitialProps = async ({ ctx , Component  })=>{\n    let isMobileDevice = false;\n    if (ctx.req) {\n        const userAgent = ctx.req.headers[\"user-agent\"];\n        isMobileDevice = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_4__.isMobile)(userAgent);\n    }\n    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};\n    return {\n        pageProps,\n        isMobile: isMobileDevice\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFMa0M7QUFDTTtBQUNFO0FBSUo7QUFDTTtBQUNIO0FBQ2pCO0FBRzlCLFNBQVNJLElBQUksRUFBRUMsVUFBUyxFQUFFQyxXQUFXLEVBQUNDLFFBQU8sRUFBRSxHQUFHRCxXQUFVLEdBQUVKLFNBQVEsRUFBa0MsRUFBRTtJQUN4RyxxQkFDRSw4REFBQ0MsNERBQWVBO1FBQUNJLFNBQVNBO2tCQUN4Qiw0RUFBQ0M7WUFBS0MsV0FBV1QsNEpBQWdCOzs4QkFDL0IsOERBQUNLO29CQUFXLEdBQUdDLFNBQVM7b0JBQUdKLFVBQVVBOzs7Ozs7OEJBQ3JDLDhEQUFDRCwwREFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7QUFFQUcsSUFBSU0sZUFBZSxHQUFHLE9BQU8sRUFBRUMsSUFBRyxFQUFFTixVQUFTLEVBQUUsR0FBSztJQUNsRCxJQUFJTyxpQkFBaUIsS0FBSztJQUUxQixJQUFJRCxJQUFJRSxHQUFHLEVBQUU7UUFDWCxNQUFNQyxZQUFZSCxJQUFJRSxHQUFHLENBQUNFLE9BQU8sQ0FBQyxhQUFhO1FBQy9DSCxpQkFBaUJWLHdEQUFRQSxDQUFDWTtJQUM1QixDQUFDO0lBRUQsTUFBTVIsWUFBWUQsVUFBVUssZUFBZSxHQUN2QyxNQUFNTCxVQUFVSyxlQUFlLENBQUNDLE9BQ2hDLENBQUMsQ0FBQztJQUVOLE9BQU87UUFBRUw7UUFBV0osVUFBVVU7SUFBZTtBQUMvQztBQUVBLGlFQUFlUixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1rbWZlc3QvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBPdXRmaXQgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgRU5WIGZyb20gXCJAL2NvbnN0YW50L2VudlwiO1xuY29uc3Qgb3V0Zml0ID0gT3V0Zml0KHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWxzXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHtzZXNzaW9uLCAuLi5wYWdlUHJvcHN9LCBpc01vYmlsZSB9OkFwcFByb3BzICYgeyBpc01vYmlsZTogYm9vbGVhbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtvdXRmaXQuY2xhc3NOYW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzIH0gaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcbiAgbGV0IGlzTW9iaWxlRGV2aWNlID0gZmFsc2U7XG5cbiAgaWYgKGN0eC5yZXEpIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSBjdHgucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcbiAgICBpc01vYmlsZURldmljZSA9IGlzTW9iaWxlKHVzZXJBZ2VudCk7XG4gIH1cblxuICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gICAgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICA6IHt9O1xuXG4gIHJldHVybiB7IHBhZ2VQcm9wcywgaXNNb2JpbGU6IGlzTW9iaWxlRGV2aWNlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIm91dGZpdCIsIlRvYXN0Q29udGFpbmVyIiwiaXNNb2JpbGUiLCJTZXNzaW9uUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwibWFpbiIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImlzTW9iaWxlRGV2aWNlIiwicmVxIiwidXNlckFnZW50IiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();