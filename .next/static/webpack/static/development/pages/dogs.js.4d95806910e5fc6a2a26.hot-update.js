webpackHotUpdate("static/development/pages/dogs.js",{

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
 //later feature to implement add a user profile for each user
//send the admin flag in the props
//if admin flag = y

function InternalLayout(props) {
  var menuItemsAdmin = [{
    name: 'dogs',
    icon: 'address book outline',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive',
    href: ''
  }, {
    name: 'users',
    icon: 'users',
    href: ''
  } //{name:'user profile',icon:'user circle',href:''}
  ];
  var menuItems = [{
    name: 'dogs',
    icon: 'address book outline',
    href: ''
  }, {
    name: 'archive',
    icon: 'archive',
    href: ''
  } //{name:'user profile',icon:'user circle',href:''}
  ];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'
    },
    pointing: true,
    secondary: true
  }, props.adminFlag == 'y' ? menuItemsAdmin.map(function (item, index) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: index,
      icon: item.icon,
      name: item.name,
      href: item.href
    });
  }) : menuItems.map(function (item, index) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: index,
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
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, props.children));
}

/***/ })

})
//# sourceMappingURL=dogs.js.4d95806910e5fc6a2a26.hot-update.js.map