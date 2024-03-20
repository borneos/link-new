"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./libs/db.ts":
/*!********************!*\
  !*** ./libs/db.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFN0QsTUFBTUUsS0FBS0YsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vta21mZXN0Ly4vbGlicy9kYi50cz9iYzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/db */ \"(api)/./libs/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    // your configs\n    pages: {\n        signIn: \"/login\",\n        signOut: \"/\",\n        error: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            type: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"user@mail.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const { email , password  } = credentials;\n                if (!email || !password) {\n                    return null;\n                }\n                const existingUser = await _libs_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findUnique({\n                    where: {\n                        email: credentials?.email\n                    }\n                });\n                if (!existingUser) {\n                    return null;\n                }\n                const passwordMatch = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(password, existingUser.password);\n                if (!passwordMatch) {\n                    return null;\n                }\n                return {\n                    id: existingUser.id,\n                    email: existingUser.email,\n                    fullname: existingUser.name\n                };\n            // const user:any = {\n            //   id: 1,\n            //   email: email,\n            //   password: password,\n            //   fullname: fullname\n            // };\n            // if(user){\n            //   console.log(\"🚀 ~ authorize ~ user:\", user)\n            //   return user;\n            // }else{\n            //   return null\n            // }\n            }\n        })\n    ],\n    callbacks: {\n        jwt ({ token , account , profile , user  }) {\n            if (account?.provider === \"credentials\") {\n                token.email = user.email;\n                token.fullname = user.fullname;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (\"email\" in token) {\n                session.user.email = token.email;\n            }\n            if (\"fullname\" in token) {\n                session.user.fullname = token.fullname;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNDO0FBRWlDO0FBQ2pDO0FBRXpCLE1BQU1JLGNBQStCO0lBQzFDLGVBQWU7SUFDZkMsT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztJQUNUO0lBQ0FDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNUYixzRUFBbUJBLENBQUM7WUFDbEJjLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTSixNQUFNO29CQUFTSyxhQUFhO2dCQUFnQjtnQkFDckVDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlKLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNTyxXQUFVTCxXQUFXLEVBQUU7Z0JBQzNCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFRyxTQUFRLEVBQUMsR0FBR0o7Z0JBSzFCLElBQUcsQ0FBQ0MsU0FBUyxDQUFDRyxVQUFVO29CQUN0QixPQUFPLElBQUk7Z0JBQ2IsQ0FBQztnQkFFRCxNQUFNRSxlQUFlLE1BQU14Qix3REFBa0IsQ0FBQztvQkFDNUMyQixPQUFPO3dCQUFFUixPQUFPRCxhQUFhQztvQkFBTTtnQkFDckM7Z0JBRUEsSUFBRyxDQUFDSyxjQUFjO29CQUNoQixPQUFPLElBQUk7Z0JBQ2IsQ0FBQztnQkFFRCxNQUFNSSxnQkFBZ0IsTUFBTXpCLCtDQUFPQSxDQUFDbUIsVUFBVUUsYUFBYUYsUUFBUTtnQkFDbkUsSUFBRyxDQUFDTSxlQUFjO29CQUNoQixPQUFPLElBQUk7Z0JBQ2IsQ0FBQztnQkFFRCxPQUFPO29CQUNMQyxJQUFJTCxhQUFhSyxFQUFFO29CQUNuQlYsT0FBT0ssYUFBYUwsS0FBSztvQkFDekJXLFVBQVVOLGFBQWFQLElBQUk7Z0JBQzdCO1lBQ0EscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2QixLQUFLO1lBQ0wsWUFBWTtZQUNaLGdEQUFnRDtZQUNoRCxpQkFBaUI7WUFDakIsU0FBUztZQUNULGdCQUFnQjtZQUNoQixJQUFJO1lBQ047UUFDRjtLQUNEO0lBQ0RjLFdBQVc7UUFDVEMsS0FBSSxFQUFDQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFVixLQUFJLEVBQUssRUFBQztZQUN0QyxJQUFHUyxTQUFTRSxhQUFhLGVBQWU7Z0JBQ3RDSCxNQUFNZCxLQUFLLEdBQUdNLEtBQUtOLEtBQUs7Z0JBQ3hCYyxNQUFNSCxRQUFRLEdBQUdMLEtBQUtLLFFBQVE7WUFDaEMsQ0FBQztZQUNELE9BQU9HO1FBQ1Q7UUFDQSxNQUFNeEIsU0FBUSxFQUFDQSxRQUFPLEVBQUV3QixNQUFLLEVBQU0sRUFBQztZQUNsQyxJQUFHLFdBQVdBLE9BQU87Z0JBQ25CeEIsUUFBUWdCLElBQUksQ0FBQ04sS0FBSyxHQUFHYyxNQUFNZCxLQUFLO1lBQ2xDLENBQUM7WUFDRCxJQUFHLGNBQWNjLE9BQU87Z0JBQ3RCeEIsUUFBUWdCLElBQUksQ0FBQ0ssUUFBUSxHQUFHRyxNQUFNSCxRQUFRO1lBQ3hDLENBQUM7WUFDRCxPQUFPckI7UUFDVDtJQUNGO0FBQ0YsRUFBQztBQUVELGlFQUFlUixnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vta21mZXN0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWJzL2RiJztcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgdHlwZSB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JyBcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIC8vIHlvdXIgY29uZmlnc1xuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICBzaWduT3V0OiBcIi9cIixcbiAgICBlcnJvcjogXCIvYXV0aC9zaWduaW5cIixcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIHR5cGU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInVzZXJAbWFpbC5jb21cIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzIGFzIHtcbiAgICAgICAgICBlbWFpbDogc3RyaW5nLFxuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgICAgICAgfTtcblxuICAgICAgICBpZighZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscz8uZW1haWwgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZighZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKVxuICAgICAgICBpZighcGFzc3dvcmRNYXRjaCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlci5lbWFpbCxcbiAgICAgICAgICBmdWxsbmFtZTogZXhpc3RpbmdVc2VyLm5hbWUsXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgdXNlcjphbnkgPSB7XG4gICAgICAgIC8vICAgaWQ6IDEsXG4gICAgICAgIC8vICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAvLyAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgLy8gICBmdWxsbmFtZTogZnVsbG5hbWVcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gaWYodXNlcil7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCLwn5qAIH4gYXV0aG9yaXplIH4gdXNlcjpcIiwgdXNlcilcbiAgICAgICAgLy8gICByZXR1cm4gdXNlcjtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgcmV0dXJuIG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGp3dCh7dG9rZW4sIGFjY291bnQsIHByb2ZpbGUsIHVzZXJ9OmFueSl7XG4gICAgICBpZihhY2NvdW50Py5wcm92aWRlciA9PT0gXCJjcmVkZW50aWFsc1wiKSB7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdG9rZW4uZnVsbG5hbWUgPSB1c2VyLmZ1bGxuYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59OiBhbnkpe1xuICAgICAgaWYoXCJlbWFpbFwiIGluIHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xuICAgICAgfVxuICAgICAgaWYoXCJmdWxsbmFtZVwiIGluIHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5mdWxsbmFtZSA9IHRva2VuLmZ1bGxuYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiZGIiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJ0eXBlIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJleGlzdGluZ1VzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicGFzc3dvcmRNYXRjaCIsImlkIiwiZnVsbG5hbWUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJwcm9maWxlIiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();