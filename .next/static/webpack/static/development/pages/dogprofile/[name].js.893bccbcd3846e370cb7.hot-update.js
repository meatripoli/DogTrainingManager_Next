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
/* harmony import */ var _components_TrainingTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TrainingTable */ "./components/TrainingTable.js");
/* harmony import */ var _components_TrainingTable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_TrainingTable__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    activeIndex: 0,
    index: {}
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleClick = function handleClick(e, titleProps) {
    console.log('inside Click event', titleProps);
    var newObj = {
      activeIndex: titleProps.index,
      index: titleProps
    };
    setState(newObj);
  };

  console.log(state);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    exclusive: false
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 0,
    active: state.activeIndex === 0,
    onClick: handleClick
  }, "Today (3/30/2020)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 0
  }, "Test Content 1", __jsx(_components_TrainingTable__WEBPACK_IMPORTED_MODULE_2___default.a, null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 1,
    active: state.activeIndex === 1,
    onClick: handleClick
  }, "Yesterday (3/29/2020)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 1
  }, "Test Content 2", __jsx(_components_TrainingTable__WEBPACK_IMPORTED_MODULE_2___default.a, null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 2,
    active: state.activeIndex === 2,
    onClick: handleClick
  }, "3/28/2020"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 2
  }, "Test Content 3", __jsx(_components_TrainingTable__WEBPACK_IMPORTED_MODULE_2___default.a, null))));
});

/***/ }),

/***/ "./components/TrainingTable.js":
/*!*************************************!*\
  !*** ./components/TrainingTable.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

})
//# sourceMappingURL=[name].js.893bccbcd3846e370cb7.hot-update.js.map