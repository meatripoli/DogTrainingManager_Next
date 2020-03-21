webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MyGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyGrid */ "./components/MyGrid.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    user: '',
    password: ''
  }),
      login = _useState[0],
      setLogin = _useState[1];

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            console.log('pressed submit');
            console.log(login); // await axios.post('/api/login',login)

            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/login', login));

          case 5:
            //await axios.get('http://localhost:3000/login/'+login.user)
            //done after data is sent for authentication
            ///this clears object
            console.log('get request success');
            setLogin({
              user: '',
              password: ''
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleLoginChange = function handleLoginChange(event) {
    var newObj = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value); ///this will not override the data that already exists in obj login


    setLogin(_objectSpread({}, login, {}, newObj));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(_components_MyGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    columnNum: 2,
    header: "Login",
    message: "Not registered yet? Contact your admin at email@example.com to create your account."
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    size: "large"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Input, {
    fluid: true,
    icon: "user",
    iconPosition: "left",
    placeholder: "Username",
    onChange: handleLoginChange,
    name: "user",
    type: "text",
    value: login.user
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    onChange: handleLoginChange,
    name: "password",
    value: login.password
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    size: "large",
    onClick: handleSubmit
  }, "Log In"))));
});

/***/ })

})
//# sourceMappingURL=index.js.fa24685ef37d0a54f1ce.hot-update.js.map