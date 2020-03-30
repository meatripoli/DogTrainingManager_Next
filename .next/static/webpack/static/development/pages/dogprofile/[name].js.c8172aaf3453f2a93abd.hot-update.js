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
    activeIndex: 0,
    index: {}
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleClick = function handleClick(e, titleProps) {
    console.log(titleProps);
    var newObj = {
      activeIndex: titleProps.index,
      index: titleProps
    };
    setState(newObj);
    var newIndex = state.activeIndex === state.index ? -1 : state.index;
    console.log(state.activeIndex, state.index);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    exclusive: false
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 0,
    active: state.activeIndex === 0,
    onClick: handleClick
  }, "Test Title 1"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 1"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 1,
    active: state.activeIndex === 1,
    onClick: handleClick
  }, "Test Title 2"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 2"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 2,
    active: state.activeIndex === 2,
    onClick: handleClick
  }, "Test Title 3"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, null, "Test Content 3"));
});

/***/ })

})
//# sourceMappingURL=[name].js.c8172aaf3453f2a93abd.hot-update.js.map