webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_layoutcomponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/layoutcomponent.css */ "./public/css/layoutcomponent.css");
/* harmony import */ var _public_css_layoutcomponent_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_layoutcomponent_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_util_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/util/UserContext */ "./components/util/UserContext.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: null,
    id: null,
    admin: null
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      dogInfo = _useState2[0],
      setDogInfo = _useState2[1];

  var signIn = function signIn(user, id, admin) {
    setData({
      user: user,
      id: id,
      admin: admin
    });
  };

  var signOut = function signOut() {
    setData({
      user: null,
      id: null,
      admin: null
    });
  };

  var handleDogInfo = function handleDogInfo(obj) {
    setDogInfo(obj);
  };

  return __jsx(_components_util_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      user: data,
      dogdata: dogInfo,
      signIn: signIn,
      signOut: signOut,
      handleDogInfo: handleDogInfo
    }
  }, __jsx(Component, pageProps));
}
;

/***/ })

})
//# sourceMappingURL=_app.js.40cb4a2fcd0827dc3647.hot-update.js.map