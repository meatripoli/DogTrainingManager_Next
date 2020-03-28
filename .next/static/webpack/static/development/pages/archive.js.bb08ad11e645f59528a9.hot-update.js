webpackHotUpdate("static/development/pages/archive.js",{

/***/ "./components/TableTemplate.js":
/*!*************************************!*\
  !*** ./components/TableTemplate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    basic: "very",
    striped: true,
    sortable: true,
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, props.header.map(function (row, index) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      key: index
    }, row.name);
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, props.table.map(function (row) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
      key: 'key' + row.id
    }, props.header.map(function (_ref) {
      var tableHeaderName = _ref.tableHeaderName,
          haschildren = _ref.haschildren,
          children = _ref.children;
      console.log(tableHeaderName, children);
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
        key: tableHeaderName + row.id
      }, haschildren ? children(row[tableHeaderName], row) : row[tableHeaderName]);
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=archive.js.bb08ad11e645f59528a9.hot-update.js.map