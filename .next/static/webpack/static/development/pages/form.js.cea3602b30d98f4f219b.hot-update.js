webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/CustomerForm.js":
/*!************************************!*\
  !*** ./components/CustomerForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




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
  var initialState = {
    dogName: '',
    dogAge: 0,
    dogBreed: '',
    dogGender: '',
    dogAggressive: false,
    humanAggressive: false,
    fearful: false,
    leashPulling: false,
    doesntListenWhenCalled: false,
    toyAggression: false,
    foodAggression: false,
    separationAnxiety: false,
    barking: false,
    listenSometimes: false,
    counterSurfing: false,
    lungingAtDogs: false,
    lungingAtHumans: false,
    jumping: false,
    improperHouseManners: false,
    additionalIssues: '',
    commands: '',
    foodName: '',
    foodAmount: '',
    foodTime: '',
    toys: '',
    allegires: '',
    medication: '',
    medicationInfo: '',
    medicalIssues: '',
    dogFlu: '',
    fixed: '',
    ageFixed: 0,
    dateofCycle: null,
    vetName: '',
    vetPhone: '',
    heartwormFleaMedication: '',
    nameAndDose: '',
    extraNotes: '',
    referal: '',
    ownerFirstName: '',
    ownerLastName: '',
    ownerEmail: '',
    ownerCellPhone: '',
    ownerAddress: '',
    ownerCity: '',
    ownerState: '',
    ownerZip: '',
    emergencyContactFirstName: '',
    emergencyContactLastName: '',
    emergencyContactCellPhone: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      form = _useState[0],
      setForm = _useState[1];

  function refreshPage() {
    window.location.reload(false);
  }

  var handleInputChange = function handleInputChange(event) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value); ///this will not override the data that already exists in obj login


    setForm(_objectSpread({}, form, {}, newObj));
  };

  var handleCheckBox = function handleCheckBox(event, data) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.name, data.checked);

    setForm(_objectSpread({}, form, {}, newObj));
  };

  var handleDropdown = function handleDropdown(event, data) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.name, data.value);

    setForm(_objectSpread({}, form, {}, newObj));
  };

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/form', form));

          case 3:
            ///this clears object
            setForm(initialState);
            refreshPage();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Dog's name",
    placeholder: "Name",
    name: "dogName",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Age (if dog is not 1 year old yet please put 0)",
    type: "number",
    placeholder: "Age",
    name: "dogAge",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Breed",
    placeholder: "Breed",
    name: "dogBreed",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Gender",
    options: options,
    placeholder: "Gender",
    name: "dogGender",
    onChange: handleDropdown,
    value: form.dogGender
  })), __jsx("h2", null, "SECTION A: ISSUES (PLEASE CHECK ALL THAT APPLY)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Dog Aggression",
    name: "dogAggressive",
    checked: form.dogAggressive,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Human Aggression",
    name: "humanAggressive",
    checked: form.humanAggressive,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Fearful",
    name: "fearful",
    checked: form.fearful,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Leash Pulling",
    name: "leashPulling",
    checked: form.leashPulling,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Doesnt Listen When Called",
    name: "doesntListenWhenCalled",
    checked: form.doesntListenWhenCalled,
    onChange: handleCheckBox
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Toy Aggression",
    name: "toyAggression",
    checked: form.toyAggression,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Food Aggression",
    name: "foodAggression",
    checked: form.foodAggression,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "*Separation Anxiety",
    name: "separationAnxiety",
    checked: form.separationAnxiety,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Barking",
    name: "barking",
    checked: form.barking,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Listen Sometimes",
    name: "listenSometimes",
    checked: form.listenSometimes,
    onChange: handleCheckBox
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Counter Surfing",
    name: "counterSurfing",
    checked: form.counterSurfing,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Lunging at Dogs",
    name: "lungingAtDogs",
    checked: form.lungingAtDogs,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Lunging at People",
    name: "lungingAtHumans",
    checked: form.lungingAtHumans,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Jumping",
    name: "jumping",
    checked: form.jumping,
    onChange: handleCheckBox
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Checkbox, {
    label: "Improper House Manners",
    name: "improperHouseManners",
    checked: form.improperHouseManners,
    onChange: handleCheckBox
  })), __jsx("p", null, "* any of the above listed concerns may require us to spend more time on working these issues so advanced commands maybe taken out of the program* these can be added to your training after the dog is home with you for the three week adjustment time."), __jsx("p", null, "*Aggression, fearful, and anxiety issues will be addressed during the training and we will continue to work with you and your dog after this training period as these are issues that require long term commitments and are not guaranteed to be fixed in the three week time frame."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].TextArea, {
    label: "Additional Issues",
    name: "additionalIssues",
    onChange: handleInputChange,
    placeholder: "Note any additional issues or concerns that you want us to work on while in the training."
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].TextArea, {
    label: "Known Commands",
    name: "commands",
    onChange: handleInputChange,
    placeholder: "Please list all commands your dog knows and what they do for this command."
  }), __jsx("p", null, "These are the advanced commands we will teach your pup unless the * issues above affect us doing so. Remember all these should be commands you will continue to use and work on (what you don't use you will lose). Check which two are most important to you? We will focus on these the most."), __jsx("h2", null, "SECTION B: GENERAL INFORMATION"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind of food?",
    name: "foodName",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "How many cups of food a day",
    name: "foodAmount",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What time of day?",
    name: "foodTime",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind of toys will you bring?",
    name: "toys",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Allergies",
    name: "allegires",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Medication?",
    name: "medication",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "How much medication and when(bring enough for 3 weeks)?",
    onChange: handleInputChange,
    name: "medicationInfo"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Medical Issues?",
    name: "medicalIssues",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "2016 dog flu",
    options: yesNo,
    name: "dogFlu",
    onChange: handleDropdown,
    value: form.dogFlu
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Is your dog spayed or neutered?",
    options: yesNo,
    name: "fixed",
    onChange: handleDropdown,
    value: form.fixed
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Age when dog was fixed",
    name: "ageFixed",
    type: "number",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Date of last heat cycle (ONLY FOR NOT SPAYED FEMALES)",
    onChange: handleInputChange,
    name: "dateofCycle",
    type: "date"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Name of Vet",
    name: "vetName",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Vet Phone Number",
    placeholder: "555-555-5555",
    onChange: handleInputChange,
    name: "vetPhone"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Is your dog on Heartworm/Flea medication?",
    options: yesNo,
    name: "heartwormFleaMedication",
    onChange: handleDropdown,
    value: form.heartwormFleaMedication
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "What kind and last dose",
    onChange: handleInputChange,
    name: "nameAndDose"
  })), __jsx("p", null, "Please bring food for 3 weeks plus extra. We suggest your pup's favorite toy, dog bed, or blanket for a little bit of home. You will receive daily picture updates, and video updates every few days from me but you can always contact us to see how your dog is doing. These updates will be through a Dropbox link."), __jsx("h2", null, "SECTION C: NOTES"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    placeholder: "Add extra comments",
    onChange: handleInputChange,
    name: "extraNotes"
  }), __jsx("h2", null, "SECTION D: HOW DID YOU HEAR ABOUT US?"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    placeholder: "e.i. Google Search, a friend, etc...",
    onChange: handleInputChange,
    name: "referal"
  }), __jsx("h2", null, "SECTION E: OWNER INFO"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "First Name",
    placeholder: "First Name",
    name: "ownerFirstName",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Last Name",
    placeholder: "Last Name",
    name: "ownerLastName",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Email",
    placeholder: "example@email.com",
    name: "ownerEmail",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    name: "ownerCellPhone",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Address",
    placeholder: "Address",
    name: "ownerAddress",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "City",
    placeholder: "City",
    name: "ownerCity",
    onChange: handleInputChange
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "State",
    options: states,
    placeholder: "State",
    name: "ownerState",
    onChange: handleDropdown,
    value: form.ownerState
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Zip Code",
    placeholder: "55555",
    name: "ownerZip",
    onChange: handleInputChange
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact First Name",
    placeholder: "First Name",
    onChange: handleInputChange,
    name: "emergencyContactFirstName"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Emergency Contact Last Name",
    placeholder: "Last Name",
    onChange: handleInputChange,
    name: "emergencyContactLastName"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Cell Phone",
    placeholder: "555-555-5555",
    onChange: handleInputChange,
    name: "emergencyContactCellPhone"
  })), __jsx("p", null, "***There will be a 1-3hr go-home lesson with us on go-home day. We will be going over everything that they have learned. This will be followed by a three week follow up program that we will have you follow. This is your time to work your pup and go through the learning process and rebuild a new relationship with your pup. During this time your dog will be on leash at all times until you are 110% sure that you are confident in working the tools and your dog with the distractions in the environment you are in. We are here for every step and you have three follow ip sessions one each week as you need them. Your pup will spend three weeks learning with us, so we want to make sure you have the time after they come home to spend that time learning your new relationship with them.***"), __jsx("p", null, "Please let me know if there will be any time you will be away from your pup fpr the first four weeks after training this can affect training and we will need to make arrangements with you and your pup!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: handleSubmit
  }, "Submit"));
});

/***/ })

})
//# sourceMappingURL=form.js.cea3602b30d98f4f219b.hot-update.js.map