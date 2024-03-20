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
exports.id = "pages/api/v1/user";
exports.ids = ["pages/api/v1/user"];
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

/***/ "(api)/./libs/db.ts":
/*!********************!*\
  !*** ./libs/db.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFN0QsTUFBTUUsS0FBS0YsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Vta21mZXN0Ly4vbGlicy9kYi50cz9iYzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/v1/user.tsx":
/*!*******************************!*\
  !*** ./pages/api/v1/user.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/db */ \"(api)/./libs/db.ts\");\n\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            const user = {\n                id: 1,\n                name: \"John Doe\"\n            };\n            res.status(200).json({\n                success: true,\n                data: user\n            });\n            break;\n        case \"POST\":\n            try {\n                const body = await req.body;\n                const { email , emailVerified , password , name  } = body;\n                const existingUserByEmail = await _libs_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                    where: {\n                        email: email\n                    }\n                });\n                if (existingUserByEmail) {\n                    return res.status(500).json({\n                        success: false,\n                        error: \"User with email already registered\"\n                    });\n                }\n                const hashedPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 10);\n                const newUser = await _libs_db__WEBPACK_IMPORTED_MODULE_1__.db.user.create({\n                    data: {\n                        name,\n                        email,\n                        email_verified: emailVerified ?? null,\n                        password: hashedPassword\n                    }\n                });\n                return res.status(201).json({\n                    success: true,\n                    data: newUser\n                });\n            } catch (error) {\n                console.error(\"Error creating user:\", error);\n                return res.status(500).json({\n                    success: false,\n                    error: \"Failed to create user\"\n                });\n            }\n            break;\n        case \"PUT\":\n            break;\n        case \"DELETE\":\n            break;\n        default:\n            res.status(405).end();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvdXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM4QjtBQUNDO0FBV2hCLGVBQWVFLFFBQVFDLEdBQWtCLEVBQUVDLEdBQXlCLEVBQUU7SUFDbkYsT0FBUUQsSUFBSUUsTUFBTTtRQUNoQixLQUFLO1lBQ0gsTUFBTUMsT0FBTztnQkFBRUMsSUFBSTtnQkFBR0MsTUFBTTtZQUFXO1lBQ3ZDSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLElBQUk7Z0JBQUVDLE1BQU1OO1lBQUs7WUFDakQsS0FBTTtRQUNSLEtBQUs7WUFDSCxJQUFJO2dCQUNGLE1BQU1PLE9BQU8sTUFBTVYsSUFBSVUsSUFBSTtnQkFDM0IsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRUMsU0FBUSxFQUFFUixLQUFJLEVBQUUsR0FBR0s7Z0JBRWpELE1BQU1JLHNCQUFzQixNQUFNaEIsd0RBQWtCLENBQUM7b0JBQ25Ea0IsT0FBTzt3QkFBRUwsT0FBT0E7b0JBQUs7Z0JBQ3ZCO2dCQUVBLElBQUdHLHFCQUFvQjtvQkFDckIsT0FBT2IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUyxLQUFLO3dCQUFFUyxPQUFPO29CQUFxQztnQkFDNUYsQ0FBQztnQkFFRCxNQUFNQyxpQkFBaUIsTUFBTXJCLDRDQUFJQSxDQUFDZ0IsVUFBVTtnQkFDNUMsTUFBTU0sVUFBVSxNQUFNckIsb0RBQWMsQ0FBQztvQkFDbkNXLE1BQU07d0JBQ0pKO3dCQUNBTTt3QkFDQVUsZ0JBQWdCVCxpQkFBaUIsSUFBSTt3QkFDckNDLFVBQVVLO29CQUNaO2dCQUNGO2dCQUVBLE9BQU9qQixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLElBQUk7b0JBQUVDLE1BQU1VO2dCQUFRO1lBQzdELEVBQUUsT0FBT0YsT0FBTztnQkFDZEssUUFBUUwsS0FBSyxDQUFDLHdCQUF3QkE7Z0JBQ3RDLE9BQU9oQixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLEtBQUs7b0JBQUVTLE9BQU87Z0JBQXdCO1lBQy9FO1lBQ0EsS0FBTTtRQUNSLEtBQUs7WUFDSCxLQUFNO1FBQ1IsS0FBSztZQUNILEtBQUs7UUFDUDtZQUNFaEIsSUFBSUssTUFBTSxDQUFDLEtBQUtpQixHQUFHO1lBQ25CLEtBQU07SUFDVjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWttZmVzdC8uL3BhZ2VzL2FwaS92MS91c2VyLnRzeD82MGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGlicy9kYlwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbiAgc3RhdHVzQ29kZT86IE51bWJlcjtcbiAgZGF0YT86IGFueTtcbiAgc3VjY2Vzcz86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZTxEYXRhPikge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgY29uc3QgdXNlciA9IHsgaWQ6IDEsIG5hbWU6ICdKb2huIERvZScgfTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlciB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBlbWFpbFZlcmlmaWVkLCBwYXNzd29yZCwgbmFtZSB9ID0gYm9keTtcbiAgXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlckJ5RW1haWwgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBlbWFpbH1cbiAgICAgICAgfSlcbiAgXG4gICAgICAgIGlmKGV4aXN0aW5nVXNlckJ5RW1haWwpe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VzZXIgd2l0aCBlbWFpbCBhbHJlYWR5IHJlZ2lzdGVyZWQnIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTApXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQ6IGVtYWlsVmVyaWZpZWQgPz8gbnVsbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3VXNlciB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHVzZXI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHVzZXInIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0RFTEVURSc6IFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0iXSwibmFtZXMiOlsiaGFzaCIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJpZCIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJib2R5IiwiZW1haWwiLCJlbWFpbFZlcmlmaWVkIiwicGFzc3dvcmQiLCJleGlzdGluZ1VzZXJCeUVtYWlsIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZXJyb3IiLCJoYXNoZWRQYXNzd29yZCIsIm5ld1VzZXIiLCJjcmVhdGUiLCJlbWFpbF92ZXJpZmllZCIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/user.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/user.tsx"));
module.exports = __webpack_exports__;

})();