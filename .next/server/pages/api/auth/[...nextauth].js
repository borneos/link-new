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

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/db */ \"(api)/./libs/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    // your configs\n    pages: {\n        signIn: \"/login\",\n        signOut: \"/\",\n        error: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            type: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"user@mail.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const { email , password  } = credentials;\n                if (!email || !password) {\n                    return null;\n                }\n                const existingUser = await _libs_db__WEBPACK_IMPORTED_MODULE_0__.db.user.findUnique({\n                    where: {\n                        email: credentials?.email\n                    }\n                });\n                if (!existingUser) {\n                    return null;\n                }\n                const passwordMatch = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compare)(password, existingUser.password);\n                if (!passwordMatch) {\n                    return null;\n                }\n                return {\n                    id: existingUser.id,\n                    email: existingUser.email,\n                    fullname: existingUser.name\n                };\n            // const user:any = {\n            //   id: 1,\n            //   email: email,\n            //   password: password,\n            //   fullname: fullname\n            // };\n            // if(user){\n            //   console.log(\"🚀 ~ authorize ~ user:\", user)\n            //   return user;\n            // }else{\n            //   return null\n            // }\n            }\n        })\n    ],\n    callbacks: {\n        jwt ({ token , account , profile , user  }) {\n            if (account?.provider === \"credentials\") {\n                token.email = user.email;\n                token.fullname = user.fullname;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (\"email\" in token) {\n                session.user.email = token.email;\n            }\n            if (\"fullname\" in token) {\n                session.user.fullname = token.fullname;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0M7QUFFaUM7QUFDbEI7QUFDZjtBQUV6QixNQUFNSyxjQUErQjtJQUMxQyxlQUFlO0lBQ2ZDLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtJQUNBQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLFdBQVc7UUFDVGIsaUVBQU1BLENBQUM7WUFDTGMsVUFBVUosUUFBUUMsR0FBRyxDQUFDSSxnQkFBZ0I7WUFDdENDLGNBQWNOLFFBQVFDLEdBQUcsQ0FBQ00sb0JBQW9CO1FBQ2hEO1FBQ0FsQixzRUFBbUJBLENBQUM7WUFDbEJtQixNQUFNO1lBQ05DLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0osTUFBTTtvQkFBU0ssYUFBYTtnQkFBZ0I7Z0JBQ3JFQyxVQUFVO29CQUFFRixPQUFPO29CQUFZSixNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTU8sV0FBVUwsV0FBVyxFQUFFO2dCQUMzQixNQUFNLEVBQUNDLE1BQUssRUFBRUcsU0FBUSxFQUFDLEdBQUdKO2dCQUsxQixJQUFHLENBQUNDLFNBQVMsQ0FBQ0csVUFBVTtvQkFDdEIsT0FBTyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsTUFBTUUsZUFBZSxNQUFNN0Isd0RBQWtCLENBQUM7b0JBQzVDZ0MsT0FBTzt3QkFBRVIsT0FBT0QsYUFBYUM7b0JBQU07Z0JBQ3JDO2dCQUVBLElBQUcsQ0FBQ0ssY0FBYztvQkFDaEIsT0FBTyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsTUFBTUksZ0JBQWdCLE1BQU03QiwrQ0FBT0EsQ0FBQ3VCLFVBQVVFLGFBQWFGLFFBQVE7Z0JBQ25FLElBQUcsQ0FBQ00sZUFBYztvQkFDaEIsT0FBTyxJQUFJO2dCQUNiLENBQUM7Z0JBRUQsT0FBTztvQkFDTEMsSUFBSUwsYUFBYUssRUFBRTtvQkFDbkJWLE9BQU9LLGFBQWFMLEtBQUs7b0JBQ3pCVyxVQUFVTixhQUFhUCxJQUFJO2dCQUM3QjtZQUNBLHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsS0FBSztZQUNMLFlBQVk7WUFDWixnREFBZ0Q7WUFDaEQsaUJBQWlCO1lBQ2pCLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIsSUFBSTtZQUNOO1FBQ0Y7S0FDRDtJQUNEYyxXQUFXO1FBQ1RDLEtBQUksRUFBQ0MsTUFBSyxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRVYsS0FBSSxFQUFLLEVBQUM7WUFDdEMsSUFBR1MsU0FBU0UsYUFBYSxlQUFlO2dCQUN0Q0gsTUFBTWQsS0FBSyxHQUFHTSxLQUFLTixLQUFLO2dCQUN4QmMsTUFBTUgsUUFBUSxHQUFHTCxLQUFLSyxRQUFRO1lBQ2hDLENBQUM7WUFDRCxPQUFPRztRQUNUO1FBQ0EsTUFBTTVCLFNBQVEsRUFBQ0EsUUFBTyxFQUFFNEIsTUFBSyxFQUFNLEVBQUM7WUFDbEMsSUFBRyxXQUFXQSxPQUFPO2dCQUNuQjVCLFFBQVFvQixJQUFJLENBQUNOLEtBQUssR0FBR2MsTUFBTWQsS0FBSztZQUNsQyxDQUFDO1lBQ0QsSUFBRyxjQUFjYyxPQUFPO2dCQUN0QjVCLFFBQVFvQixJQUFJLENBQUNLLFFBQVEsR0FBR0csTUFBTUgsUUFBUTtZQUN4QyxDQUFDO1lBQ0QsT0FBT3pCO1FBQ1Q7SUFDRjtBQUNGLEVBQUM7QUFFRCxpRUFBZVQsZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWttZmVzdC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJ0AvbGlicy9kYic7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IEdvb2dsZSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHQnIFxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgLy8geW91ciBjb25maWdzXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICAgIHNpZ25PdXQ6IFwiL1wiLFxuICAgIGVycm9yOiBcIi9hdXRoL3NpZ25pblwiLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCJcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVRcbiAgICB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIHR5cGU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInVzZXJAbWFpbC5jb21cIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzIGFzIHtcbiAgICAgICAgICBlbWFpbDogc3RyaW5nLFxuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgICAgICAgfTtcblxuICAgICAgICBpZighZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscz8uZW1haWwgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZighZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKVxuICAgICAgICBpZighcGFzc3dvcmRNYXRjaCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IGV4aXN0aW5nVXNlci5lbWFpbCxcbiAgICAgICAgICBmdWxsbmFtZTogZXhpc3RpbmdVc2VyLm5hbWUsXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3QgdXNlcjphbnkgPSB7XG4gICAgICAgIC8vICAgaWQ6IDEsXG4gICAgICAgIC8vICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAvLyAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgLy8gICBmdWxsbmFtZTogZnVsbG5hbWVcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gaWYodXNlcil7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCLwn5qAIH4gYXV0aG9yaXplIH4gdXNlcjpcIiwgdXNlcilcbiAgICAgICAgLy8gICByZXR1cm4gdXNlcjtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgcmV0dXJuIG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGp3dCh7dG9rZW4sIGFjY291bnQsIHByb2ZpbGUsIHVzZXJ9OmFueSl7XG4gICAgICBpZihhY2NvdW50Py5wcm92aWRlciA9PT0gXCJjcmVkZW50aWFsc1wiKSB7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdG9rZW4uZnVsbG5hbWUgPSB1c2VyLmZ1bGxuYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59OiBhbnkpe1xuICAgICAgaWYoXCJlbWFpbFwiIGluIHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xuICAgICAgfVxuICAgICAgaWYoXCJmdWxsbmFtZVwiIGluIHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5mdWxsbmFtZSA9IHRva2VuLmZ1bGxuYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiZGIiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGUiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInR5cGUiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJwYXNzd29yZE1hdGNoIiwiaWQiLCJmdWxsbmFtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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