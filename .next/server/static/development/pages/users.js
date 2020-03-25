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
 //later feature to implement only show users if user logged in is admin
//send the admin flag in the props
//if admin flag = y

function InternalLayout(props) {
  let menuItemsAdmin = [{
    name: 'dogs',
    icon: 'address book outline',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive',
    href: ''
  }, {
    name: 'users',
    icon: 'users',
    href: ''
  }];
  let menuItems = [{
    name: 'dogs',
    icon: 'address book outline',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive',
    href: ''
  }, {
    name: 'user profile',
    icon: 'user circle',
    href: ''
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'
    },
    pointing: true,
    secondary: true
  }, props.adminFlag === 'y' ? menuItemsAdmin.map((item, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
  size: "small",
  dimmer: "blurring",
  trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: true,
    color: props.buttonColor,
    floated: props.buttonLocation,
    style: {
      marginBottom: '5px'
    }
  }, __jsx("p", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: props.icon
  }))),
  closeIcon: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, props.title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, props.modalContent), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Actions, null, props.modalActions)));

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
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/components/MyGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  centered: true,
  columns: props.columnNum,
  style: {
    marginTop: '20px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h2",
  textAlign: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.header), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.children), props.message !== '' && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.message))));

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


const adminDropdown = [{
  key: 'o',
  text: '',
  value: ''
}, {
  key: 'y',
  text: 'Yes',
  value: 'yes'
}, {
  key: 'n',
  text: 'No',
  value: 'no'
}];
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
    name: "user",
    type: "text"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    name: "password"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    label: "Administrator"
  }))));
});

/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var _components_RegisterUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RegisterUser */ "./components/RegisterUser.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const tableData = [{
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

const ModalContent = props => __jsx("p", null, props.text);

const ModalAction = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  positive: true,
  content: "OK"
});

/* harmony default export */ __webpack_exports__["default"] = (() => {
  //to edit user info click on name and a pop up will ask you 
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    basic: "very",
    striped: true,
    sortable: true,
    celled: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Username"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Password"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].HeaderCell, null, "Admin"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Body, null, tableData.map(({
    user,
    admin
  }) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row, {
    key: user
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, user), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, "******"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell, null, admin, __jsx(_components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonLocation: "right",
    buttonName: "Edit",
    icon: "pencil alternate",
    title: "Edit user",
    modalContent: __jsx(_components_RegisterUser__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Edit user"
    }),
    modalActions: __jsx(ModalAction, null)
  }), __jsx(_components_ModalLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    buttonLocation: "right",
    buttonName: "Remove",
    icon: "trash",
    title: "Delete user",
    modalContent: __jsx(ModalContent, {
      text: "Are you sure you want to delete this account?"
    }),
    modalActions: __jsx(ModalAction, null)
  }))))));
});

/***/ }),

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_ModalLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ModalLayout */ "./components/ModalLayout.js");
/* harmony import */ var _components_RegisterUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RegisterUser */ "./components/RegisterUser.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ModalAction = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
  positive: true,
  content: "OK"
});

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: "y"
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

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meatripoli/ClassWork/FinalProject/pages/users.js */"./pages/users.js");


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
//# sourceMappingURL=users.js.map