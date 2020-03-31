webpackHotUpdate("static/development/pages/dogprofile/[name].js",{

/***/ "./pages/dogprofile/[name].js":
/*!************************************!*\
  !*** ./pages/dogprofile/[name].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CollapseAccordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CollapseAccordion */ "./components/CollapseAccordion.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profile */ "./components/Profile.js");
/* harmony import */ var _components_util_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/util/UserContext */ "./components/util/UserContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_util_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      dogdata = _useContext.dogdata;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: dogdata
  }), __jsx(_components_CollapseAccordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: dogdata
  })));
});

/***/ })

})
//# sourceMappingURL=[name].js.20d58b901aaef07763a7.hot-update.js.map