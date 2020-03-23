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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var tableData = [{
  user: 'John',
  admin: 15,
  gender: 'Male'
}, {
  user: 'Amber',
  admin: 40,
  gender: 'Female'
}, {
  user: 'Leslie',
  admin: 25,
  gender: 'Other'
}, {
  user: 'Ben',
  admin: 70,
  gender: 'Male'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    sortable: true,
    celled: true,
    fixed: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Username"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Admin"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, tableData.map(function (_ref) {
    var user = _ref.user,
        admin = _ref.admin;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      key: user
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, "******"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, admin));
  })));
});
{
  /* <table className="table table-striped">
             <thead>
                 <tr>
                     <th scope="col">Picture</th>
                     <th scope="col" className={prop.sortClass} onClick={prop.handleSort}>Name</th>
                     <th scope="col">Phone</th>
                     <th scope="col">Email</th>
                     <th scope="col">Birthday</th>
                 </tr>
             </thead>
             <tbody>
                 {prop.data ? prop.data.map( (element,index) => <TableBody key ={index} data = {element}/> ) : <td>Loading...</td>}
             </tbody>
         </table> */
}

/***/ })

})
//# sourceMappingURL=users.js.841d8c681e219232d0ce.hot-update.js.map