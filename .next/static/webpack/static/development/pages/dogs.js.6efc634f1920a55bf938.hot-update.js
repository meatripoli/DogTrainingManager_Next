webpackHotUpdate("static/development/pages/dogs.js",{

/***/ "./pages/dogs.js":
/*!***********************!*\
  !*** ./pages/dogs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var _components_TableTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableTemplate */ "./components/TableTemplate.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var loadingData = [{
    id: 0,
    dogName: 'Loading',
    dogAge: '',
    dogBreed: '',
    dogGender: '',
    ownerFirstName: '',
    ownerLastName: '',
    ownerCellPhone: '',
    ownerEmail: '',
    fixed: '',
    vetName: '',
    vetPhone: '',
    foodName: '',
    foodAmount: '',
    foodTime: ''
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(loadingData),
      data = _useState[0],
      setData = _useState[1];

  var ownerInfo = function ownerInfo(rowData) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Name: '), "".concat(rowData.ownerFirstName, " ").concat(rowData.ownerLastName)), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Phone: '), rowData.ownerCellPhone), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Email: '), rowData.ownerEmail));
  };

  var vetInfo = function vetInfo(rowData) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Name: '), rowData.vetName), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Phone: '), rowData.vetPhone));
  };

  var foodInfo = function foodInfo(rowData) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Name: '), rowData.foodName), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Amount: '), rowData.foodAmount), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Time: '), rowData.foodTime));
  };

  var nameInfo = function nameInfo(rowData) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/dogprofile",
      query: data.id,
      as: "/dogprofile/".concat(rowData.dogName)
    }, __jsx("a", null, rowData.dogName));
  };

  var createTableData = function createTableData(array) {
    setData(array.map(function (object) {
      return {
        id: object.id,
        dogName: object.dogName,
        dogAge: object.dogAge,
        dogBreed: object.dogBreed,
        dogGender: object.dogGender,
        fixed: object.fixed,
        ownerFirstName: object.ownerFirstName,
        ownerLastName: object.ownerLastName,
        ownerCellPhone: object.ownerCellPhone,
        ownerEmail: object.ownerEmail,
        vetName: object.vetName,
        vetPhone: object.vetPhone,
        foodName: object.foodName,
        foodAmount: object.foodAmount,
        foodTime: object.foodTime
      };
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/dogs').then(function (res) {
      createTableData(res.data);
    })["catch"](function (err) {
      return console.log('Error:', err);
    });
  }, []);
  var headerData = [{
    tableHeaderName: 'dogName',
    name: 'Dog Name',
    clickFunction: '',
    haschildren: true,
    children: nameInfo
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
    haschildren: true,
    children: ownerInfo
  }, {
    tableHeaderName: 'foodInfo',
    name: 'Food Information',
    clickFunction: '',
    haschildren: true,
    children: foodInfo
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
    haschildren: true,
    children: vetInfo
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: "y"
  }, __jsx(_components_TableTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: headerData,
    table: data
  })));
});

/***/ })

})
//# sourceMappingURL=dogs.js.6efc634f1920a55bf938.hot-update.js.map