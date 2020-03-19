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

/***/ "./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/components/CustomerForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const options = [{
  key: 'o',
  text: '',
  value: 'Other'
}, {
  key: 'm',
  text: 'Male',
  value: 'male'
}, {
  key: 'f',
  text: 'Female',
  value: 'female'
}];
const yesNo = [{
  key: 'o',
  text: '',
  value: 'Other'
}, {
  key: 'y',
  text: 'Yes',
  value: 'yes'
}, {
  key: 'n',
  text: 'No',
  value: 'no'
}];
const states = [{
  key: 'o',
  text: '',
  value: 'Other'
}, {
  key: 'al',
  text: 'Alabama',
  value: 'alabama'
}, {
  key: 'ak',
  text: 'Alaska',
  value: 'alaska'
}, {
  key: 'az',
  text: 'Arizona',
  value: 'arizona'
}, {
  key: 'ar',
  text: 'Arkansas',
  value: 'arkansas'
}, {
  key: 'ca',
  text: 'California',
  value: 'California'
}, {
  key: 'co',
  text: 'Colorado',
  value: 'colorado'
}, {
  key: 'ct',
  text: 'Connecticut',
  value: 'connecticut'
}, {
  key: 'de',
  text: 'Delaware',
  value: 'delaware'
}, {
  key: 'fl',
  text: 'Florida',
  value: 'florida'
}, {
  key: 'ga',
  text: 'Georgia',
  value: 'georgia'
}, {
  key: 'hi',
  text: 'Hawaii',
  value: 'hawaii'
}, {
  key: 'id',
  text: 'Idaho',
  value: 'idaho'
}, {
  key: 'il',
  text: 'Illinois',
  value: 'illinois'
}, {
  key: 'in',
  text: 'Indiana',
  value: 'indiana'
}, {
  key: 'ia',
  text: 'Iowa',
  value: 'iowa'
}, {
  key: 'ks',
  text: 'Kansas',
  value: 'kansas'
}, {
  key: 'ky',
  text: 'Kentucky[E]',
  value: 'kentucky[e]'
}, {
  key: 'la',
  text: 'Louisiana',
  value: 'louisiana'
}, {
  key: 'me',
  text: 'Maine',
  value: 'maine'
}, {
  key: 'md',
  text: 'Maryland',
  value: 'maryland'
}, {
  key: 'ma',
  text: 'Massachusetts[E]',
  value: 'massachusetts[e]'
}, {
  key: 'mi',
  text: 'Michigan',
  value: 'michigan'
}, {
  key: 'mn',
  text: 'Minnesota',
  value: 'minnesota'
}, {
  key: 'ms',
  text: 'Mississippi',
  value: 'mississippi'
}, {
  key: 'mo',
  text: 'Missouri',
  value: 'missouri'
}, {
  key: 'mt',
  text: 'Montana',
  value: 'montana'
}, {
  key: 'ne',
  text: 'Nebraska',
  value: 'nebraska'
}, {
  key: 'nv',
  text: 'Nevada',
  value: 'nevada'
}, {
  key: 'nh',
  text: 'New Hampshire',
  value: 'new hampshire'
}, {
  key: 'nj',
  text: 'New Jersey',
  value: 'new jersey'
}, {
  key: 'nm',
  text: 'New Mexico',
  value: 'new mexico'
}, {
  key: 'ny',
  text: 'New York',
  value: 'new york'
}, {
  key: 'nc',
  text: 'North Carolina',
  value: 'north carolina'
}, {
  key: 'nd',
  text: 'North Dakota',
  value: 'north dakota'
}, {
  key: 'oh',
  text: 'Ohio',
  value: 'ohio'
}, {
  key: 'ok',
  text: 'Oklahoma',
  value: 'oklahoma'
}, {
  key: 'or',
  text: 'Oregon',
  value: 'oregon'
}, {
  key: 'pa',
  text: 'Pennsylvania[E]',
  value: 'pennsylvania[e]'
}, {
  key: 'ri',
  text: 'Rhode Island[F]',
  value: 'rhode island[f]'
}, {
  key: 'sc',
  text: 'South Carolina',
  value: 'south carolina'
}, {
  key: 'sd',
  text: 'South Dakota',
  value: 'south dakota'
}, {
  key: 'tn',
  text: 'Tennessee',
  value: 'tennessee'
}, {
  key: 'tx',
  text: 'Texas',
  value: 'texas'
}, {
  key: 'ut',
  text: 'Utah',
  value: 'utah'
}, {
  key: 'vt',
  text: 'Vermont',
  value: 'vermont'
}, {
  key: 'va',
  text: 'Virginia[E]',
  value: 'virginia[e]'
}, {
  key: 'wa',
  text: 'Washington',
  value: 'washington'
}, {
  key: 'wv',
  text: 'West Virginia',
  value: 'west virginia'
}, {
  key: 'wi',
  text: 'Wisconsin',
  value: 'wisconsin'
}, {
  key: 'wy',
  text: 'Wyoming',
  value: 'wyoming'
}];
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: `Dog's name`,
  placeholder: "Name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Age",
  placeholder: "Age",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Breed",
  placeholder: "Breed",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
  fluid: true,
  label: "Gender",
  options: options,
  placeholder: "Gender",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: `Drop off date`,
  type: "date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: `Turn over date`,
  type: "date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
})), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "SECTION A: ISSUES (PLEASE CHECK ALL THAT APPLY)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Dog Aggression",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Human Aggression",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Fearful",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Leash Pulling",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Doesnt Listen When Called",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Toy Aggression",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Food Aggression",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "*Separation Anxiety",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Barking",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Listen Sometimes",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Counter Surfing",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Lunging at Dogs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Lunging at People",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Jumping",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "Improper House Manners",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, "* any of the above listed concerns may require us to spend more time on working these issues so advanced commands maybe taken out of the program* these can be added to your training after the dog is home with you for the three week adjustment time."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "*Aggression, fearful, and anxiety issues will be addressed during the training and we will continue to work with you and your dog after this training period as these are issues that require long term commitments and are not guaranteed to be fixed in the three week time frame."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
  label: "Additional Issues",
  placeholder: "Note any additional issues or concerns that you want us to work on while in the training.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
  label: "Known Commands",
  placeholder: "Please list all commands your dog knows and what they do for this command.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "These are the advanced commands we will teach your pup unless the * issues above affect us doing so. Remember all these should be commands you will continue to use and work on (what you don't use you will lose). Check which two are most important to you? We will focus on these the most."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, "SECTION B: GENERAL INFORMATION"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "How many cups of food a day",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Allergies",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "What time of day?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "What kind of toys will you bring?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "What kind of food?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Medication?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "How much medication and when(bring enough for 3 weeks)?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Medical Issues?",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
  fluid: true,
  label: "2016 dog flu",
  options: yesNo,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
  fluid: true,
  label: "Is your dog spayed or neutered?",
  options: yesNo,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Age when dog was fixed",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Date of last heat cycle (ONLY FOR NOT SPAYED FEMALES)",
  type: "date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Name of Vet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Vet Phone Number",
  placeholder: "555-555-5555",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
  fluid: true,
  label: "Is your dog on Heartworm/Flea medication?",
  options: yesNo,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "What kind and last dose",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, "Please bring food for 3 weeks plus extra. We suggest your pup's favorite toy, dog bed, or blanket for a little bit of home. You will receive daily picture updates, and video updates every few days from me but you can always contact us to see how your dog is doing. These updates will be through a Dropbox link."), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, "SECTION C: NOTES"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  placeholder: "Add extra comments",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187
  },
  __self: undefined
}, "SECTION D: HOW DID YOU HEAR ABOUT US?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  placeholder: "e.i. Google Search, a friend, etc...",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}, "SECTION E: OWNER INFO"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "First Name",
  placeholder: "First Name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Last Name",
  placeholder: "Last Name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Email",
  placeholder: "example@email.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Cell Phone",
  placeholder: "555-555-5555",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Address",
  placeholder: "Address",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "City",
  placeholder: "City",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
  fluid: true,
  label: "State",
  options: states,
  placeholder: "State",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Zip Code",
  placeholder: "55555",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207
  },
  __self: undefined
})), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
  widths: "equal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Emergency Contact First Name",
  placeholder: "First Name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Emergency Contact Last Name",
  placeholder: "Last Name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
  fluid: true,
  label: "Cell Phone",
  placeholder: "555-555-5555",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
})), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, "***There will be a 1-3hr go-home lesson with us on go-home day. We will be going over everything that they have learned. This will be followed by a three week follow up program that we will have you follow. This is your time to work your pup and go through the learning process and rebuild a new relationship with your pup. During this time your dog will be on leash at all times until you are 110% sure that you are confident in working the tools and your dog with the distractions in the environment you are in. We are here for every step and you have three follow ip sessions one each week as you need them. Your pup will spend three weeks learning with us, so we want to make sure you have the time after they come home to spend that time learning your new relationship with them.***"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, "Please let me know if there will be any time you will be away from your pup fpr the first four weeks after training this can affect training and we will need to make arrangements with you and your pup!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
  label: "I agree to the Terms and Conditions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, "Submit")));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "loginMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'
    },
    pointing: true,
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    icon: "file outline",
    name: "form",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    icon: "sign in alternate",
    name: "login",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), props.children);
}

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MyGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyGrid */ "./components/MyGrid.js");
/* harmony import */ var _components_CustomerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CustomerForm */ "./components/CustomerForm.js");
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function About() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_MyGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columnNum: 1,
    header: "Board and Train Program Form",
    message: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_CustomerForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/meatripoli/ClassWork/FinalProject/pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map