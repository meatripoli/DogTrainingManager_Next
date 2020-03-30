module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CollapseAccordion.js":
/*!*****************************************!*\
  !*** ./components/CollapseAccordion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DailyTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DailyTable */ "./components/DailyTable.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    activeIndex: 0,
    index: {}
  });

  const handleClick = (e, titleProps) => {
    console.log('inside Click event', titleProps);
    const newObj = {
      activeIndex: titleProps.index,
      index: titleProps
    };
    setState(newObj);
  };

  console.log(state);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    exclusive: false
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 0,
    active: state.activeIndex === 0,
    onClick: handleClick
  }, "Today (3/30/2020)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 0
  }, "Test Content 1", __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 1,
    active: state.activeIndex === 1,
    onClick: handleClick
  }, "Yesterday (3/29/2020)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 1
  }, "Test Content 2", __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], null))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 2,
    active: state.activeIndex === 2,
    onClick: handleClick
  }, "3/28/2020"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 2
  }, "Test Content 3", __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
});

/***/ }),

/***/ "./components/DailyTable.js":
/*!**********************************!*\
  !*** ./components/DailyTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const level = [{
  key: '0',
  text: '',
  value: 0
}, {
  key: '1',
  text: '1 - Leash Pressure',
  value: 1
}, {
  key: '2',
  text: '2 - E-Collar Pressure',
  value: 2
}, {
  key: '3',
  text: '3 - No Pressure',
  value: 3
}];
/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Pottyng"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true,
    style: {
      margin: '0px 100px 0px 50px'
    }
  }, __jsx("label", null, "Pee"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null), __jsx("label", null, "Poop"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Notes",
    placeholder: "Notes"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Feeding"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true,
    style: {
      margin: '0px 100px 0px 50px'
    }
  }, __jsx("label", null, "Ate"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Notes",
    placeholder: "Notes"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Training"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Sit"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "",
    options: level,
    placeholder: ""
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Duration"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Distance"
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Notes",
    placeholder: "Notes"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Down"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    label: "1 - Leash Pressure",
    control: "input",
    type: "radio",
    name: "1"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    label: "2 - E-Collar Pressure",
    control: "input",
    type: "radio",
    name: "2"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    label: "3 - No Pressure",
    control: "input",
    type: "radio",
    name: "3"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Duration"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Distance"
  }))));
});

/***/ }),

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

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const programOptions = [{
  key: 'o',
  text: '',
  value: 'other'
}, {
  key: 'b',
  text: 'Boarding',
  value: 'boarding'
}, {
  key: 'bt',
  text: 'Board & Train',
  value: 'board and train'
}, {
  key: 't',
  text: 'Train',
  value: 'train'
}, {
  key: 'g',
  text: 'Going Home',
  value: 'gohome'
}];
const heelOptions = [{
  key: 'l',
  text: 'Left',
  value: 'left'
}, {
  key: 'r',
  text: 'Right',
  value: 'right'
}];
/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png",
    size: "medium",
    circular: true
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 10
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1"
  }, "Basic Info"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Name: Bailey"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Age: 7"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Breed: Rhodesian Ridgeback Mix"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Gender: female"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Owner Contact Information: Name: Maria Tripoli Phone: 13214310659 Email: meatripoli@gmail.com"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Food Information: Name: Nature's Logic Sardine flavor Amount: 4 Time: Morning and Evening"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Fixed: yes"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Veterinarian Information: Name: Parmer Lane Pet Hospital Phone: 512-260-5443"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Allergies: (if blank) None Provided"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Medication: (if blank) None Provided")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Heel",
    options: heelOptions,
    placeholder: "Left",
    value: heelOptions[0].value
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Program",
    options: programOptions,
    placeholder: "Program"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Intake Date",
    name: "dateofCycle",
    type: "date"
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    style: {
      marginLeft: '10px'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1"
  }, "Training Info (provided by owner)")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Issues"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "None Provided")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Extra Comments"), __jsx("p", null, "Extra Issues: She is too stinking cute for her own good"), __jsx("p", null, "Owner Notes: (if blank) None Provided")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Known Commands"), __jsx("p", null, "All of them"))))));
});

/***/ }),

/***/ "./pages/dogprofile/[name].js":
/*!************************************!*\
  !*** ./pages/dogprofile/[name].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/InternalLayout */ "./components/InternalLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CollapseAccordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CollapseAccordion */ "./components/CollapseAccordion.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Profile */ "./components/Profile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router.query.name);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    adminFlag: "y"
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_CollapseAccordion__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
});

/***/ }),

/***/ 7:
/*!******************************************!*\
  !*** multi ./pages/dogprofile/[name].js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meatripoli/ClassWork/FinalProject/pages/dogprofile/[name].js */"./pages/dogprofile/[name].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=[name].js.map