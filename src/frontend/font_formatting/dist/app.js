!function(e){var n={};function r(t){if(n[t])return n[t].exports;var _=n[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,r),_.l=!0,_.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var _ in e)r.d(t,_,function(n){return e[n]}.bind(null,_));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}({"./src/Formatting.js":
/*!***************************!*\
  !*** ./src/Formatting.js ***!
  \***************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nfunction clear() {\n  $('#paragraph').removeClass('smaller').removeClass('medium').removeClass('bigger');\n}\n\nfunction action() {\n  $('#button-smaller').click(function () {\n    clear();\n    $('#paragraph').addClass('smaller');\n  });\n  $('#button-medium').click(function () {\n    clear();\n    $('#paragraph').addClass('medium');\n  });\n  $('#button-bigger').click(function () {\n    clear();\n    $('#paragraph').addClass('bigger');\n  });\n}\n\nfunction defaultAction() {\n  $('#paragraph').addClass('medium');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  clear: clear(),\n  action: action(),\n  defaultAction: defaultAction()\n});\n\n//# sourceURL=webpack:///./src/Formatting.js?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formatting */ "./src/Formatting.js");\n\n$(document).ready(function () {\n  _Formatting__WEBPACK_IMPORTED_MODULE_0__["default"].clear();\n  _Formatting__WEBPACK_IMPORTED_MODULE_0__["default"].action();\n  _Formatting__WEBPACK_IMPORTED_MODULE_0__["default"].defaultAction();\n});\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?")},0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.scss ***!
  \*********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./src/index.js */"./src/index.js");\nmodule.exports = __webpack_require__(/*! ./src/index.scss */"./src/index.scss");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/index.scss?')}});