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



var panels = _.times(3, function (i) {
  return {
    key: "panel-".concat(i),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs()
  };
});

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      state = _useState[0],
      setState = _useState[1];

  var handleClick = function handleClick(e) {};

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    defaultActiveIndex: [0],
    panels: panels,
    exclusive: false
  });
});

/***/ })

})
//# sourceMappingURL=[name].js.6c2d7c5fedae4a76219e.hot-update.js.map