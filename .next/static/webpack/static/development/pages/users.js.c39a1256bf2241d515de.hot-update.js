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
  name: 'John',
  age: 15,
  gender: 'Male'
}, {
  name: 'Amber',
  age: 40,
  gender: 'Female'
}, {
  name: 'Leslie',
  age: 25,
  gender: 'Other'
}, {
  name: 'Ben',
  age: 70,
  gender: 'Male'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    sortable: true,
    celled: true,
    fixed: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    sorted: column === 'name' ? direction : null //onClick={}

  }, "Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    sorted: column === 'age' ? direction : null //onClick={}

  }, "Age"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
    sorted: column === 'gender' ? direction : null //onClick={}

  }, "Gender"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, tableData.map(data, function (_ref) {
    var age = _ref.age,
        gender = _ref.gender,
        name = _ref.name;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      key: name
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, age), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, gender));
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

/***/ }),

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: "y"
  }, __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ })

})
//# sourceMappingURL=users.js.c39a1256bf2241d515de.hot-update.js.map