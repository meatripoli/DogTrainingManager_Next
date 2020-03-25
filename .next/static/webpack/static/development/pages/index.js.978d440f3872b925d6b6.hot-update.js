webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var _components_RegisterUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RegisterUser */ "./components/RegisterUser.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ModalAction = function ModalAction() {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    positive: true,
    content: "OK"
  });
}; //the admin flag is based on who signs in at the beginning 


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var router = {}; //useRouter()

  return __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: router ? router.query.adminFlag : 'y'
  }, __jsx(_components_ModalLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    buttonColor: "green",
    buttonLocation: "right",
    buttonName: "New User",
    icon: "plus",
    title: "Add a new user",
    modalContent: __jsx(_components_RegisterUser__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Add User"
    }),
    modalActions: __jsx(ModalAction, null)
  }), __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ })

})
//# sourceMappingURL=index.js.978d440f3872b925d6b6.hot-update.js.map