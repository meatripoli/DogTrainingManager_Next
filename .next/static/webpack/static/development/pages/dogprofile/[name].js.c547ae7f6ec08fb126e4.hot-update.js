webpackHotUpdate("static/development/pages/dogprofile/[name].js",{

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
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




var programOptions = [{
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
var heelOptions = [{
  key: 'l',
  text: 'Left',
  value: 'left'
}, {
  key: 'r',
  text: 'Right',
  value: 'right'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setData({
      id: props.data.id,
      heel: props.data.heel,
      program: props.data.program,
      dateofIntake: props.data.intakeDate
    });
  }, []);

  var handleInput = function handleInput(event) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value);

    setData(_objectSpread({}, data, {}, newObj));
  };

  var handleDropdown = function handleDropdown(event, item) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.name, item.value);

    setData(_objectSpread({}, data, {}, newObj));
  };

  var handleClick = function handleClick(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            console.log('submit following info', data); ///we want to update table

            axios__WEBPACK_IMPORTED_MODULE_4___default.a.put('/api/dogprofile/' + props.data.id, data).then(function (res) {
              res.status === 200 ? alert("Intake Infosaved successfully") : console.log(res);
            })["catch"](function (err) {
              return console.log('Error:', err);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    divided: "vertically"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 6
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png",
    size: "medium",
    circular: true
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 10
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1"
  }, "Basic Info"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    bulleted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Name: ", props.data.dogName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Age: ", props.data.dogAge), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Breed: ", props.data.dogBreed), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Gender: ", props.data.dogGender), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Owner Contact Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Name: ", "".concat(props.data.ownerFirstName, " ").concat(props.data.ownerLastName)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Phone: ", props.data.ownerCellPhone), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Email: ", props.data.ownerEmail))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Food Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Name: ", props.data.foodName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Amount: ", props.data.foodAmount), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Time: ", props.data.foodTime))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Fixed: ", props.data.fixed), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Veterinarian Information:", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].List, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Name: ", props.data.vetName), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Phone: ", props.data.vetPhone))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Allergies: ", props.data.allegires), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Medication: ", props.data.medication)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    columns: 2
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h3"
  }, "Issues"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    bulleted: true
  }, props.data.issueDetails.map(function (issue, index) {
    issue ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, issueHeader[i]) : '';
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 8
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h3"
  }, "Extra Comments"), __jsx("p", null, "Extra Issues: ", props.data.additionalIssues), __jsx("p", null, "Owner Notes: ", props.data.extraNotes === '' ? props.data.extraNotes : 'None Provided')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h3"
  }, "Known Commands"), __jsx("p", null, props.data.commands)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    columns: 1
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h1",
    style: {
      marginLeft: '10px'
    }
  }, "Intake Info (provided by trainer)"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Heel",
    options: heelOptions,
    placeholder: "Left",
    value: data.heel,
    onChange: handleDropdown,
    name: "heel"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
    fluid: true,
    label: "Program",
    options: programOptions,
    placeholder: "Program",
    onChange: handleDropdown,
    value: data.program,
    name: "program"
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
    fluid: true,
    label: "Intake Date",
    name: "dateofIntake",
    type: "date",
    value: data.intakeDate,
    onChange: handleInput
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Button, {
    positive: true,
    onClick: handleClick
  }, "Save")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, null));
});

/***/ })

})
//# sourceMappingURL=[name].js.c547ae7f6ec08fb126e4.hot-update.js.map