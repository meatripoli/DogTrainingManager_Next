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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    const newObj = {
      activeIndex: state.activeIndex === titleProps.index ? -1 : titleProps.index,
      index: titleProps
    };
    setState(newObj);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    exclusive: false
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      background: '#b5b5b5'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 0,
    active: state.activeIndex === 0,
    onClick: handleClick
  }, __jsx("h2", null, "Today (3/30/2020)")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 0
  }, __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dogID: props.data.id
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      background: '#b5b5b5'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 1,
    active: state.activeIndex === 1,
    onClick: handleClick
  }, __jsx("h2", null, "Yesterday (3/29/2020)")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 1
  }, __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dogID: props.data.id
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      background: '#b5b5b5'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Title, {
    index: 2,
    active: state.activeIndex === 2,
    onClick: handleClick
  }, __jsx("h2", null, "3/28/2020")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"].Content, {
    active: state.activeIndex === 2
  }, __jsx(_DailyTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dogID: props.data.id
  }))));
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

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
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '20px 20px 0px 10px'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    divided: "vertically"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    textAlign: "center"
  }, "Health Status "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx("label", null, "Peed"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null), __jsx("label", null, "Pooped"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Potty Notes",
    placeholder: "Notes"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    inline: true
  }, __jsx("label", null, "Ate"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Feeding Notes",
    placeholder: "Notes"
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    textAlign: "center"
  }, "Training Status"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 3
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
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
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Down"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Place"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 3
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Heel"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Recall"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Let's Go"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    grouped: true
  }, __jsx("label", null, "Door Manners"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
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
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Location of Outing",
    placeholder: "Lowes",
    style: {
      marginBottom: '45px'
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Notes",
    placeholder: "Notes"
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Button, {
    positive: true
  }, "Save"));
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
/* harmony import */ var _util_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UserContext */ "./components/util/UserContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //later feature to implement add a user profile for each user
//send the admin flag in the props
//if admin flag = y

function InternalLayout(props) {
  const data = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_util_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
  }, data.user.admin ? menuItemsAdmin.map((item, index) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setData({
      id: props.data.id,
      heel: props.data.heel,
      program: props.data.program,
      dateofIntake: props.data.dateofIntake
    });
  }, []);

  const handleInput = event => {
    let newObj = {
      [event.target.name]: event.target.value
    };
    setData(_objectSpread({}, data, {}, newObj));
  };

  const handleDropdown = (event, item) => {
    let newObj = {
      [item.name]: item.value
    };
    setData(_objectSpread({}, data, {}, newObj));
  };

  const handleClick = async event => {
    event.preventDefault();
    console.log('submit following info', data); ///we want to update table

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put('/api/dogprofile/' + props.data.id, data).then(res => {
      res.status === 200 ? alert("Intake Infosaved successfully") : console.log(res);
    }).catch(err => console.log('Error:', err));
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    divided: "vertically"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png",
    size: "medium",
    circular: true
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 10
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1"
  }, "Basic Info"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    bulleted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Name: ", props.data.dogName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Age: ", props.data.dogAge), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Breed: ", props.data.dogBreed), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Gender: ", props.data.dogGender), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Owner Contact Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Name: ", `${props.data.ownerFirstName} ${props.data.ownerLastName}`), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Phone: ", props.data.ownerCellPhone), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Email: ", props.data.ownerEmail))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Food Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Name: ", props.data.foodName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Amount: ", props.data.foodAmount), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Time: ", props.data.foodTime))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Fixed: ", props.data.fixed), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Veterinarian Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Name: ", props.data.vetName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Phone: ", props.data.vetPhone))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Allergies: ", props.data.allegires), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, "Medication: ", props.data.medication)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true,
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Issues"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    bulleted: true
  }, props.data.issueDetails.map((issue, index) => {
    issue ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, issueHeader[i]) : '';
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Extra Comments"), __jsx("p", null, "Extra Issues: ", props.data.additionalIssues), __jsx("p", null, "Owner Notes: ", props.data.extraNotes === '' ? props.data.extraNotes : 'None Provided')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, "Known Commands"), __jsx("p", null, props.data.commands)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    stretched: true,
    columns: 1
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    style: {
      marginLeft: '10px'
    }
  }, "Intake Info (provided by trainer)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Heel",
    options: heelOptions,
    placeholder: "Left",
    value: data.heel,
    onChange: handleDropdown,
    name: "heel"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Program",
    options: programOptions,
    placeholder: "Program",
    onChange: handleDropdown,
    value: data.program,
    name: "program"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Intake Date",
    name: "dateofIntake",
    type: "date",
    value: data.dateofIntake,
    onChange: handleInput
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Button, {
    positive: true,
    onClick: handleClick
  }, "Save")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null));
});

/***/ }),

/***/ "./components/util/UserContext.js":
/*!****************************************!*\
  !*** ./components/util/UserContext.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext());

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
/* harmony import */ var _components_util_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/util/UserContext */ "./components/util/UserContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    dogdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_util_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_InternalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: dogdata
  }), __jsx(_components_CollapseAccordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: dogdata
  })));
});

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./pages/dogprofile/[name].js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meatripoli/ClassWork/FinalProject/pages/dogprofile/[name].js */"./pages/dogprofile/[name].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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