webpackHotUpdate("static/development/pages/users.js",{

/***/ "./components/ModalLayout.js":
/*!***********************************!*\
  !*** ./components/ModalLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: "small",
    dimmer: "blurring",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: true,
      color: props.buttonColor,
      floated: props.buttonLocation,
      style: {
        marginBottom: '5px'
      }
    }, __jsx("p", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: props.icon
    }), " ", props.buttonName)),
    closeIcon: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, props.title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, props.children));
});

/***/ })

})
//# sourceMappingURL=users.js.b4703b258369b1735ada.hot-update.js.map