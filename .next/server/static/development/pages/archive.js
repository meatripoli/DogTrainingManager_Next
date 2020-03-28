module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InternalLayout.js":
/*!**************************************!*\
  !*** ./components/InternalLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InternalLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //later feature to implement add a user profile for each user
//send the admin flag in the props
//if admin flag = y

function InternalLayout(props) {
  let menuItemsAdmin = [{
    name: 'dogs',
    icon: 'address book outline',
    href: '/dogs'
  }, {
    name: 'archive',
    icon: 'archive',
    href: '/archive'
  }, {
    name: 'users',
    icon: 'users',
    href: '/users'
  } //{name:'user profile',icon:'user circle',href:''}
  ];
  let menuItems = [{
    name: 'dogs',
    icon: 'address book outline',
    href: '/dogs'
  }, {
    name: 'archive',
    icon: 'archive',
    href: '/archive'
  } //{name:'user profile',icon:'user circle',href:''}
  ];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'
    },
    pointing: true,
    secondary: true
  }, props.adminFlag == 'y' ? menuItemsAdmin.map((item, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: index,
    icon: item.icon,
    name: item.name,
    href: item.href
  })) : menuItems.map((item, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: index,
    icon: item.icon,
    name: item.name,
    href: item.href
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    icon: "sign-out alternate",
    name: "logout",
    href: "/"
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, props.children));
}

/***/ }),

/***/ "./components/ModalLayout.js":
/*!***********************************!*\
  !*** ./components/ModalLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RegisterUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RegisterUser */ "./components/RegisterUser.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (props => {
  let response;

  function refreshPage() {
    window.location.reload(false);
  }

  let switchFun = async data => {
    switch (props.buttonName) {
      case 'Remove':
        if (data.adminflag === 'n') {
          try {
            response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete('/api/users', {
              data: data
            });

            if (response.status === 200) {
              refreshPage();
            } else {
              alert('there was an error deleting user');
            }
          } catch (e) {
            alert('caught an error:', e);
          }

          break;
        } else {
          alert('Dont have permission to delete an admin user');
          break;
        }

      case 'New User':
        try {
          response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/users', data);

          if (response.status === 200) {
            console.log('new user added');
            refreshPage();
          } else {
            alert('there was an error adding user:', data.username);
          } //  this clears object


          setUser({
            username: '',
            adminflag: false,
            id: 0,
            password: ''
          });
          break;
        } catch (e) {
          alert('caught an error:', e);
        }

      default:
        break;
    }
  };

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.current ? props.current : {
    username: '',
    admin: false,
    id: 0,
    password: ''
  });
  const {
    0: modalstate,
    1: setModalstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleModal = event => {
    modalstate ? setModalstate(false) : setModalstate(true);
  };

  const handleInput = event => {
    let newObj = {
      [event.target.name]: event.target.value
    };
    setUser(_objectSpread({}, user, {}, newObj));
  };

  const handleCheckBox = (event, data) => {
    let newObj = {
      [data.name]: data.checked
    };
    setUser(_objectSpread({}, user, {}, newObj));
  };

  const handleButton = async event => {
    event.preventDefault();
    setModalstate(false);
    switchFun(user);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: "small",
    dimmer: "blurring",
    onClose: handleModal,
    open: modalstate,
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: true,
      color: props.buttonColor,
      floated: props.buttonLocation,
      onClick: handleModal,
      style: {
        marginBottom: '5px'
      },
      data: props.test
    }, __jsx("p", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: props.icon
    }))),
    closeIcon: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, props.title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, props.modalContent ? props.modalContent : __jsx(_components_RegisterUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.buttonName,
    value: user,
    inputchange: handleInput,
    checkboxchange: handleCheckBox
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    positive: true,
    content: "OK",
    onClick: handleButton
  })));
});

/***/ }),

/***/ "./components/MyGrid.js":
/*!******************************!*\
  !*** ./components/MyGrid.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  centered: true,
  columns: props.columnNum,
  style: {
    marginTop: '20px'
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h2",
  textAlign: "center"
}, props.header), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, props.children), props.message !== '' && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  color: props.color
}, props.body))));

/***/ }),

/***/ "./components/RegisterUser.js":
/*!************************************!*\
  !*** ./components/RegisterUser.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyGrid */ "./components/MyGrid.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_MyGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    columnNum: 1,
    header: props.title,
    message: ""
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    size: "large"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "user",
    iconPosition: "left",
    placeholder: "Username",
    name: "username",
    type: "text",
    onChange: props.inputchange,
    value: props.value.username
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    name: "password",
    onChange: props.inputchange,
    value: props.value.password
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Checkbox, {
    label: "Administrator",
    name: "admin",
    onChange: props.checkboxchange
  }))));
});

/***/ }),

/***/ "./components/TableTemplate.js":
/*!*************************************!*\
  !*** ./components/TableTemplate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    basic: "very",
    striped: true,
    sortable: true,
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, props.header.map((row, index) => {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, {
      key: index
    }, row.name);
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, props.table.map(row => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    key: 'key' + row.id
  }, props.header.map(({
    tableHeaderName,
    haschildren,
    children
  }) => {
    console.log(tableHeaderName, children);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, {
      key: tableHeaderName + row.id
    }, haschildren ? children(row[tableHeaderName], row) : row[tableHeaderName]);
  })))));
});

/***/ }),

/***/ "./pages/archive.js":
/*!**************************!*\
  !*** ./pages/archive.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var _components_TableTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableTemplate */ "./components/TableTemplate.js");
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (props => {
  const loadingData = [{
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
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(loadingData);

  const ownerInfo = (text, rowData) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Name: '), `${rowData.ownerFirstName} ${rowData.ownerLastName}`), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Phone: '), rowData.ownerCellPhone), __jsx("p", null, __jsx("span", {
      style: {
        fontWeight: "bold"
      }
    }, 'Email: '), rowData.ownerEmail));
  };

  const vetInfo = (text, rowData) => {
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

  const foodInfo = (text, rowData) => {
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

  const createTableData = array => {
    setData(array.map(object => {
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/form').then(res => {
      createTableData(res.data);
    }).catch(err => console.log('Error:', err));
  }, []);
  let headerData = [{
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

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/archive.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meatripoli/ClassWork/FinalProject/pages/archive.js */"./pages/archive.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=archive.js.map