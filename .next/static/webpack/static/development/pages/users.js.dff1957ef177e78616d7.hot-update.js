webpackHotUpdate("static/development/pages/users.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var tableData = [{
  user: 'John',
  admin: 'y',
  gender: 'Male'
}, {
  user: 'Amber',
  admin: 'n',
  gender: 'Female'
}, {
  user: 'Leslie',
  admin: 'n',
  gender: 'Other'
}, {
  user: 'Ben',
  admin: 'n',
  gender: 'Male'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  //to edit user info click on name and a pop up will ask you 
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    sortable: true,
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Username"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Admin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Edit"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Remove"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, tableData.map(function (_ref) {
    var user = _ref.user,
        admin = _ref.admin;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      key: user
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, user), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, "******"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, admin), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, __jsx(_components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      buttonColor: "blue",
      buttonLocation: "left",
      buttonName: "Edit",
      icon: "pencil alternate",
      title: "Edit user"
    }, __jsx("p", null, "stuff about editing user"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, __jsx(_components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      buttonColor: "red",
      buttonLocation: "left",
      buttonName: "Remove",
      icon: "minus",
      title: "Delete user"
    }, __jsx("p", null, "stuff about deleting user"))));
  })));
});

/***/ })

})
//# sourceMappingURL=users.js.dff1957ef177e78616d7.hot-update.js.map