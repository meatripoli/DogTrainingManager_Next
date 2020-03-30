webpackHotUpdate("static/development/pages/users.js",{

/***/ "./components/UsersTable.js":
/*!**********************************!*\
  !*** ./components/UsersTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableTemplate */ "./components/TableTemplate.js");
/* harmony import */ var _ModalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var loadingData = [{
    id: 0,
    user: 'Loading',
    adminflag: 'Loading',
    password: 'Loading'
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(loadingData),
      data = _useState[0],
      setData = _useState[1]; ///when first loading pull all the users from database and display them
  //const tableData = data.length===0? loadingData:data


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/users').then(function (res) {
      setData(res.data.map(function (row) {
        return {
          user: row.user,
          password: '******',
          adminflag: row.adminflag ? 'yes' : 'no',
          id: row.id
        };
      }));
    })["catch"](function (err) {
      return console.log('Error:', err);
    });
  }, []); //to edit user info click on name and a pop up will ask you 

  var mymodal = function mymodal(rowdata, text) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, text, __jsx(_ModalLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      buttonLocation: "right",
      buttonName: "Remove",
      icon: "trash",
      title: "Delete user",
      modalContent: __jsx("p", null, "Are you sure you want to delete ".concat(rowdata.user, " account?")),
      current: rowdata
    }));
  };

  var headerData = [{
    tableHeaderName: 'user',
    name: 'Username',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'password',
    name: 'Password',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'adminflag',
    name: 'Administrator',
    clickFunction: '',
    haschildren: true,
    children: mymodal
  }];
  console.log('inside /dogs', props);
  return __jsx(_TableTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: headerData,
    table: data
  });
});

/***/ })

})
//# sourceMappingURL=users.js.261d020618be50f3f7fb.hot-update.js.map