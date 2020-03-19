webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/meatripoli/ClassWork/FinalProject/components/CustomerForm.js";

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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Dog's name",
    placeholder: "Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Age",
    placeholder: "Age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Breed",
    placeholder: "Breed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Gender",
    options: options,
    placeholder: "Gender",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Drop off date",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Turn over date",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "SECTION A: ISSUES (PLEASE CHECK ALL THAT APPLY)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Dog Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Human Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Fearful",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Leash Pulling",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Doesnt Listen When Called",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Toy Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Food Aggression",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "*Separation Anxiety",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Barking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Listen Sometimes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Counter Surfing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Lunging at Dogs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Lunging at People",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Jumping",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "Improper House Manners",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "* any of the above listed concerns may require us to spend more time on working these issues so advanced commands maybe taken out of the program* these can be added to your training after the dog is home with you for the three week adjustment time."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "*Aggression, fearful, and anxiety issues will be addressed during the training and we will continue to work with you and your dog after this training period as these are issues that require long term commitments and are not guaranteed to be fixed in the three week time frame."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Additional Issues",
    placeholder: "Note any additional issues or concerns that you want us to work on while in the training.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Known Commands",
    placeholder: "Please list all commands your dog knows and what they do for this command.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "These are the advanced commands we will teach your pup unless the * issues above affect us doing so. Remember all these should be commands you will continue to use and work on (what you don't use you will lose). Check which two are most important to you? We will focus on these the most."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "SECTION B: GENERAL INFORMATION"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "How many cups of food a day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Allergies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "What time of day?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "What kind of toys will you bring?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "What kind of food?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Medication?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "How much medication and when(bring enough for 3 weeks)?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Medical Issues?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "2016 dog flu",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Is your dog spayed or neutered?",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Age when dog was fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Date of last heat cycle (ONLY FOR NOT SPAYED FEMALES)",
    type: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Name of Vet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Vet Phone Number",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "Is your dog on Heartworm/Flea medication?",
    options: yesNo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "What kind and last dose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Please bring food for 3 weeks plus extra. We suggest your pup's favorite toy, dog bed, or blanket for a little bit of home. You will receive daily picture updates, and video updates every few days from me but you can always contact us to see how your dog is doing. These updates will be through a Dropbox link."), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "SECTION C: NOTES"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    placeholder: "Add extra comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "SECTION D: HOW DID YOU HEAR ABOUT US?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    placeholder: "e.i. Google Search, a friend, etc...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "SECTION E: OWNER INFO"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "First Name",
    placeholder: "First Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Last Name",
    placeholder: "Last Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Email",
    placeholder: "example@email.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Address",
    placeholder: "Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "City",
    placeholder: "City",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    fluid: true,
    label: "State",
    options: states,
    placeholder: "State",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Zip Code",
    placeholder: "55555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact First Name",
    placeholder: "First Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact Last Name",
    placeholder: "Last Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "***There will be a 1-3hr go-home lesson with us on go-home day. We will be going over everything that they have learned. This will be followed by a three week follow up program that we will have you follow. This is your time to work your pup and go through the learning process and rebuild a new relationship with your pup. During this time your dog will be on leash at all times until you are 110% sure that you are confident in working the tools and your dog with the distractions in the environment you are in. We are here for every step and you have three follow ip sessions one each week as you need them. Your pup will spend three weeks learning with us, so we want to make sure you have the time after they come home to spend that time learning your new relationship with them.***"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "Please let me know if there will be any time you will be away from your pup fpr the first four weeks after training this can affect training and we will need to make arrangements with you and your pup!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Checkbox, {
    label: "I agree to the Terms and Conditions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Submit"));
});

/***/ })

})
//# sourceMappingURL=about.js.ec5f8c5ac5b470d93e2e.hot-update.js.map