webpackHotUpdate("static/development/pages/dogprofile/[name].js",{

/***/ "./components/CollapseAccordion.js":
/*!*****************************************!*\
  !*** ./components/CollapseAccordion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    activeIndex: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleClick = function handleClick(e) {};

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    exclusive: false
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 0,
    active: state.activeIndex === 0
  }, "Test Title 1"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 1"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 1,
    active: state.activeIndex === 1
  }, "Test Title 2"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 2"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 2,
    active: state.activeIndex === 2
  }, "Test Title 3"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 3"));
});

/***/ })

})
//# sourceMappingURL=[name].js.9cf828d9569741a8fda3.hot-update.js.map