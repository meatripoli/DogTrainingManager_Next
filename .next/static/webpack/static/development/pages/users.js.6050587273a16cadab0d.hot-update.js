webpackHotUpdate("static/development/pages/users.js",{

/***/ "./components/InternalLayout.js":
/*!**************************************!*\
  !*** ./components/InternalLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InternalLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //later feature to implement only show users if user logged in is admin
//send the admin flag in the props
//if admin flag = y

function InternalLayout(props) {
  var menuItemsAdmin = [{
    name: 'dogs',
    icon: 'address book outline icon',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive icon',
    href: ''
  }, {
    name: 'users',
    icon: 'users icon',
    href: ''
  }];
  var menuItems = [{
    name: 'dogs',
    icon: 'address book outline icon',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive icon',
    href: ''
  }, {
    name: 'user profile',
    icon: 'user circle icon',
    href: ''
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'
    },
    pointing: true,
    secondary: true
  }, props.adminFlag === 'y' ? menuItemsAdmin.map(function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      icon: item.icon,
      name: item.name,
      href: item.href
    });
  }) : menuItems.map(function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      icon: item.icon,
      name: item.name,
      href: item.href
    });
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    icon: "sign-out alternate",
    name: "logout",
    href: "/"
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    right: true,
    style: {
      background: '#019474'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: true,
    color: "green"
  }, __jsx("p", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "plus"
  }), " New User"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, props.children));
}

/***/ })

})
//# sourceMappingURL=users.js.6050587273a16cadab0d.hot-update.js.map