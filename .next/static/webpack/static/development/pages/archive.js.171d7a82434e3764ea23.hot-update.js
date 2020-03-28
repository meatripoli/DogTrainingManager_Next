webpackHotUpdate("static/development/pages/archive.js",{

/***/ "./pages/archive.js":
/*!**************************!*\
  !*** ./pages/archive.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var _components_TableTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableTemplate */ "./components/TableTemplate.js");
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var loadingData = [{
    id: 0,
    dogName: 'Loading',
    dogAge: '',
    dogBreed: '',
    dogGender: '',
    ownerInfo: '',
    foodInfo: '',
    fixed: '',
    vetInfo: ''
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(loadingData),
      data = _useState[0],
      setData = _useState[1];

  var createTableData = function createTableData(array) {
    return array.map(function (object) {
      return {
        id: object.id,
        dogName: object.dogName,
        dogAge: object.dogAge,
        dogBreed: object.dogBreed,
        dogGender: object.dogGender,
        ownerInfo: '',
        foodInfo: '',
        fixed: object.fixed,
        vetInfo: ''
      };
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/form').then(function (res) {
      console.log(createTableData(res.data));
    })["catch"](function (err) {
      return console.log('Error:', err);
    });
  }, []);
  var headerData = [{
    tableHeaderName: 'dogName',
    name: 'Dog Name',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'dogAge',
    name: 'Age',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'dogBreed',
    name: 'Breed',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'dogGender',
    name: 'Gender',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'ownerInfo',
    name: 'Owner Contact Information',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'foodInfo',
    name: 'Food Information',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'fixed',
    name: 'Fixed',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'vetInfo',
    name: 'Veterinarian Information',
    clickFunction: '',
    haschildren: false,
    children: ''
  }, {
    tableHeaderName: 'status',
    name: 'Status',
    clickFunction: '',
    haschildren: false,
    children: ''
  }];
  var tempdata = [{
    dogName: 'Bailey',
    dogAge: 7,
    dogBreed: 'Rhodesian Ridgeback',
    dogGender: 'female',
    ownerInfo: "name: Maria Tripoli\n        phone: 13214310659\n        email: meatripoli@gmail.com",
    foodInfo: "name: Nature's Logic Sardine flavor\n        amount: 4\n        time: Morning and Evening",
    fixed: 'yes',
    vetInfo: "name: Parmer Lane Pet Hospital\n        phone: 512-260-5443",
    status: 'Boarding'
  }];
  console.log('inside /dogs', props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: "y"
  }, __jsx(_components_TableTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: headerData,
    table: tempdata
  })));
});

/***/ })

})
//# sourceMappingURL=archive.js.171d7a82434e3764ea23.hot-update.js.map