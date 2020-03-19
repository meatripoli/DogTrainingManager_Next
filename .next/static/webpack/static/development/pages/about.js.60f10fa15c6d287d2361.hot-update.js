webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MyGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyGrid */ "./components/MyGrid.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var options = [{
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
var yesNo = [{
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
var states = [{
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
function About() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_components_MyGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columnNum: 1,
    header: "Form",
    message: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Dog's name",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Age",
    placeholder: "Age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Breed",
    placeholder: "Breed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Gender",
    options: options,
    placeholder: "Gender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Program: 3-week board and train"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Drop off date",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Turn over date",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "SECTION A: ISSUES (PLEASE CHECK ALL THAT APPLY)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Dog Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Human Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Fearful",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Leash Pulling",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Doesnt Listen When Called",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Toy Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Food Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Separation Anxiety",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Barking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Listen Sometimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Counter Surfing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Lunging at Dogs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Lunging at People",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Jumping",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Improper House Manners",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "* any of the above listed concerns may require us to spend more time on working these issues so advanced commands maybe taken out of the program* these can be added to your training after the dog is home with you for the three week adjustment time."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "*Aggression, fearful, and anxiety issues will be addressed during the training and we will continue to work with you and your dog after this training period as these are issues that require long term commitments and are not guaranteed to be fixed in the three week time frame."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].TextArea, {
    label: "Additional Issues",
    placeholder: "Note any additional issues or concerns that you want us to work on while in the training.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].TextArea, {
    label: "Known Commands",
    placeholder: "Please list all commands your dog knows and what they do for this command.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "These are the advanced commands we will teach your pup unless the * issues above affect us doing so. Remember all these should be commands you will continue to use and work on (what you don't use you will lose). Check which two are most important to you? We will focus on these the most."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "SECTION B: GENERAL INFORMATION"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "How many cups of food a day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Allergies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What time of day?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind of toys will you bring?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind of food?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Medication?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "How much medication and when(bring enough for 3 weeks)?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Medical Issues?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "2016 dog flu",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Is your dog spayed or neutered?",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Age when dog was fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Date of last heat cycle (ONLY FOR NOT SPAYED FEMALES)",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Name of Vet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Vet Phone Number",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Is your dog on Heartworm/Flea medication?",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind and last dose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Please bring food for 3 weeks plus extra. We suggest your pup's favorite toy, dog bed, or blanket for a little bit of home. You will receive daily picture updates, and video updates every few days from me but you can always contact us to see how your dog is doing. These updates will be through a Dropbox link."), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "SECTION C: NOTES"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    placeholder: "Add extra comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "SECTION D: HOW DID YOU HEAR ABOUT US?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    placeholder: "e.i. Google Search, a friend, etc...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "SECTION E: OWNER INFO"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "First Name",
    placeholder: "First Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Last Name",
    placeholder: "Last Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Email",
    placeholder: "example@email.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Address",
    placeholder: "Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "City",
    placeholder: "City",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "State",
    options: states,
    placeholder: "State",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Zip Code",
    placeholder: "55555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact First Name",
    placeholder: "First Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact Last Name",
    placeholder: "Last Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "***There will be a 1-3hr go-home lesson with us on go-home day. We will be going over everything that they have learned. This will be followed by a three week follow up program that we will have you follow. This is your time to work your pup and go through the learning process and rebuild a new relationship with your pup. During this time your dog will be on leash at all times until you are 110% sure that you are confident in working the tools and your dog with the distractions in the environment you are in. We are here for every step and you have three follow ip sessions one each week as you need them. Your pup will spend three weeks learning with us, so we want to make sure you have the time after they come home to spend that time learning your new relationship with them.***"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Please let me know if there will be any time you will be away from your pup fpr the first four weeks after training this can affect training and we will need to make arrangements with you and your pup!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "I agree to the Terms and Conditions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Submit"))));
}

/***/ })

})
//# sourceMappingURL=about.js.60f10fa15c6d287d2361.hot-update.js.map