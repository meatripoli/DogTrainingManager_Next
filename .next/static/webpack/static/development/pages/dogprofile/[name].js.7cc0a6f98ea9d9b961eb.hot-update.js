webpackHotUpdate("static/development/pages/dogprofile/[name].js",{

/***/ "./components/DailyTable.js":
/*!**********************************!*\
  !*** ./components/DailyTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var level = [{
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
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  console.log('daily table:', props);
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

/***/ })

})
//# sourceMappingURL=[name].js.7cc0a6f98ea9d9b961eb.hot-update.js.map