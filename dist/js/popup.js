/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/fail.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Status/fail.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fail-enroll {
  background: #f9f9f9;
  width: 18px;
  height: 18px;
  position: relative;
  left: 104px;
  top: -44px;
}

.fail-enroll:after {
  content: "";
  height: 18px;
  border-left: 5px solid #cd8084;
  position: absolute;
  transform: rotate(45deg);
}

.fail-enroll:before {
  content: "";
  height: 18px;
  border-left: 5px solid #cd8084;
  position: absolute;
  transform: rotate(-45deg);
}
`, "",{"version":3,"sources":["webpack://./src/Components/Status/fail.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,yBAAyB;AAC3B","sourcesContent":[".fail-enroll {\n  background: #f9f9f9;\n  width: 18px;\n  height: 18px;\n  position: relative;\n  left: 104px;\n  top: -44px;\n}\n\n.fail-enroll:after {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.fail-enroll:before {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/loading.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Status/loading.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.loading-enroll {
  display: inline-block;
  position: relative;
  left: 97px;
  top: -44px;
  width: 80px;

}
.loading-enroll > div {
  display: inline-block;
  width: 4px;
  background: #afa8de;
  animation: loading-enroll 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    animation-delay: 0;
  }
}

@keyframes loading-enroll {
  0% {
    top: 8px;
    height: 16px;
  }
  50%,
  100% {
    top: 24px;
    height: 7px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/Components/Status/loading.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;;AAEb;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,mBAAmB;EACnB,oEAAoE;;EAEpE;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,QAAQ;IACR,YAAY;EACd;EACA;;IAEE,SAAS;IACT,WAAW;EACb;AACF","sourcesContent":[".loading-enroll {\n  display: inline-block;\n  position: relative;\n  left: 97px;\n  top: -44px;\n  width: 80px;\n\n}\n.loading-enroll > div {\n  display: inline-block;\n  width: 4px;\n  background: #afa8de;\n  animation: loading-enroll 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n\n  &:nth-child(1) {\n    animation-delay: -0.24s;\n  }\n  &:nth-child(2) {\n    animation-delay: -0.12s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0;\n  }\n}\n\n@keyframes loading-enroll {\n  0% {\n    top: 8px;\n    height: 16px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 7px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/success.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/Status/success.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.success-enroll {
  display: inline-block;
  position: relative;
  left: 104px;
  top: -44px;
  transform: rotate(45deg);
  width: 5px;
  height: 10px;
  border-bottom: 4px solid #afa8de;
  border-right: 4px solid #afa8de;
}
`, "",{"version":3,"sources":["webpack://./src/Components/Status/success.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,wBAAwB;EACxB,UAAU;EACV,YAAY;EACZ,gCAAgC;EAChC,+BAA+B;AACjC","sourcesContent":[".success-enroll {\n  display: inline-block;\n  position: relative;\n  left: 104px;\n  top: -44px;\n  transform: rotate(45deg);\n  width: 5px;\n  height: 10px;\n  border-bottom: 4px solid #afa8de;\n  border-right: 4px solid #afa8de;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Footer/Footer.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Footer/Footer.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-name {
  font-size: 13px;
  font-weight: 500px;
  color: #fff;
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Footer/Footer.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[".footer-name {\n  font-size: 13px;\n  font-weight: 500px;\n  color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Logo/Logo.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Logo/Logo.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logo-button {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  cursor: pointer;
}

.logo-text-logined {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}

.logo-text {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}

.logo-repo-logined {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #aeb4b8;
  }
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Logo/Logo.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf;IACE,cAAc;EAChB;AACF","sourcesContent":[".logo-button {\n  border-radius: 50%;\n  height: 90px;\n  width: 90px;\n  cursor: pointer;\n}\n\n.logo-text-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.logo-text {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 10px;\n}\n\n.logo-repo-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  &:hover {\n    color: #aeb4b8;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Main.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Main.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 5px;
}

.repo-container {
  display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px 0 5px;\n}\n\n.repo-container {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.new-repo-create {
  display: flex;
}

.new-repo-input {
  cursor: pointer;
  border-radius: 7px;
  height: 13px;
  padding: 5px 5px;
  font-size: 11px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #bdb7df;
  }
}

.cancel-repo-button {
  border-radius: 3px;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  background: #d25151;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  margin-left: 2px;
  margin-top: 2px;
  &:hover {
    background: #dd3d37;
  }
}

.verify-repo-button {
  border-radius: 3px;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  background: #62baea;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  margin-left: 2px;
  &:hover {
    background: #5ec5fd;
  }
}

.verify-message {
  margin-top: 3px;
  font-size: 10px;
  color: rgb(189, 36, 36);
}




.success-enroll {
}

.fail-enroll {
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;AACzB;;;;;AAKA;AACA;;AAEA;AACA","sourcesContent":[".new-repo-create {\n  display: flex;\n}\n\n.new-repo-input {\n  cursor: pointer;\n  border-radius: 7px;\n  height: 13px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.cancel-repo-button {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #d25151;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  margin-top: 2px;\n  &:hover {\n    background: #dd3d37;\n  }\n}\n\n.verify-repo-button {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #62baea;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #5ec5fd;\n  }\n}\n\n.verify-message {\n  margin-top: 3px;\n  font-size: 10px;\n  color: rgb(189, 36, 36);\n}\n\n\n\n\n.success-enroll {\n}\n\n.fail-enroll {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/Repository.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/Repository.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.repo-type {
  display: flex;
  flex-direction: row-reverse;
  width: 80px;
}

.repo-content {
}

.before-select-type {
  border-radius: 7px;
  padding: 5px 5px;
  cursor: auto;
  font-size: 11px;
  background: #f3f3f3;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
}



.old-repo-select {
  display: flex;
  flex-direction: row;
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Repository/Repository.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,2BAA2B;EAC3B,WAAW;AACb;;AAEA;AACA;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;AACd;;;;AAIA;EACE,aAAa;EACb,mBAAmB;AACrB","sourcesContent":[".repo-type {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 80px;\n}\n\n.repo-content {\n}\n\n.before-select-type {\n  border-radius: 7px;\n  padding: 5px 5px;\n  cursor: auto;\n  font-size: 11px;\n  background: #f3f3f3;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n}\n\n\n\n.old-repo-select {\n  display: flex;\n  flex-direction: row;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropdown-select-repo {
  height: 10px;
  width: 53%;

  &::before {
    content: "";
    position: absolute;
    border-radius: 7px;
    top: 173px;
    right: 77px;
    width: 8px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(40deg);
    transition: 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 7px;
    top: 173px;
    right: 72px;
    width: 8px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(-40deg);
    transition: 0.5s;
  }
}

.dropdown-select-repo.active {
  &::before {
    right: 72px;
  }
  &::after {
    right: 77px;
  }
}

.select-repo {
  cursor: pointer;
  border-radius: 7px;
  padding: 5px 5px;
  font-size: 11px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #bdb7df;
  }
}

.options-repo {
  width: 100%;
  height: 100px;
  display: absolute;
  background: #fff;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow-y: auto;
  visibility: hidden;
  z-index: 1;
  opacity: 0;
  transition: 0.01s;

  &::-webkit-scrollbar {
    display: none;
  }
}

.dropdown-select-repo.active .options-repo {
  visibility: visible;
  opacity: 1;
}

.option-repo {
  padding: 2px 7px;
  cursor: pointer;
  &:hover {
    border-radius: 3px;
    background: #62baea;
    color: #fff;
  }
}

.new-repo-button {
  border-radius: 3px;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  background: #51d298;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  margin-left: 2px;
  &:hover {
    background: #37dd95;
  }
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;;EAEV;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,2CAA2C;EAC3C,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,iBAAiB;;EAEjB;IACE,aAAa;EACf;AACF;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf;IACE,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;EACb;AACF;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".dropdown-select-repo {\n  height: 10px;\n  width: 53%;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    border-radius: 7px;\n    top: 173px;\n    right: 77px;\n    width: 8px;\n    height: 2px;\n    background: #555;\n    z-index: 10;\n    transform: rotate(40deg);\n    transition: 0.5s;\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    border-radius: 7px;\n    top: 173px;\n    right: 72px;\n    width: 8px;\n    height: 2px;\n    background: #555;\n    z-index: 10;\n    transform: rotate(-40deg);\n    transition: 0.5s;\n  }\n}\n\n.dropdown-select-repo.active {\n  &::before {\n    right: 72px;\n  }\n  &::after {\n    right: 77px;\n  }\n}\n\n.select-repo {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.options-repo {\n  width: 100%;\n  height: 100px;\n  display: absolute;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: auto;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: 0.01s;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n.dropdown-select-repo.active .options-repo {\n  visibility: visible;\n  opacity: 1;\n}\n\n.option-repo {\n  padding: 2px 7px;\n  cursor: pointer;\n  &:hover {\n    border-radius: 3px;\n    background: #62baea;\n    color: #fff;\n  }\n}\n\n.new-repo-button {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #51d298;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #37dd95;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectType/SelectType.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectType/SelectType.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dropdown-select-type {
  height: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-right: 1px;

  &::before {
    content: "";
    position: absolute;
    border-radius: 7px;
    top: 174px;
    right: 200px;
    width: 6px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(40deg);
    transition: 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 7px;
    top: 174px;
    right: 196px;
    width: 6px;
    height: 2px;
    background: #555;
    z-index: 10;
    transform: rotate(-40deg);
    transition: 0.5s;
  }
}

.dropdown-select-type.active {
  height: 60px;
  &::before {
    right: 196px;
  }
  &::after {
    right: 200px;
  }
}

.select-type {
  cursor: pointer;
  border-radius: 7px;
  padding: 5px 7px;
  font-size: 11px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #bdb7df;
  }
}

.options-type {
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow-y: scroll;
  visibility: hidden;
  opacity: 0;
  transition: 0.01s;
  &::-webkit-scrollbar {
    display: none;
  }
}

.dropdown-select-type.active .options-type {
  visibility: visible;
  opacity: 1;
}

.option-type {
  padding: 2px 7px;
  cursor: pointer;
  &:hover {
    border-radius: 2px;
    background: #62baea;
    color: #fff;
  }
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Main/Repository/SelectType/SelectType.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;;EAEjB;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,wBAAwB;IACxB,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;EAClB;AACF;;AAEA;EACE,YAAY;EACZ;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ;IACE,mCAAmC;EACrC;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;EAC3C,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB;IACE,aAAa;EACf;AACF;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf;IACE,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;EACb;AACF","sourcesContent":[".dropdown-select-type {\n  height: 10px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 1px;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    border-radius: 7px;\n    top: 174px;\n    right: 200px;\n    width: 6px;\n    height: 2px;\n    background: #555;\n    z-index: 10;\n    transform: rotate(40deg);\n    transition: 0.5s;\n  }\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    border-radius: 7px;\n    top: 174px;\n    right: 196px;\n    width: 6px;\n    height: 2px;\n    background: #555;\n    z-index: 10;\n    transform: rotate(-40deg);\n    transition: 0.5s;\n  }\n}\n\n.dropdown-select-type.active {\n  height: 60px;\n  &::before {\n    right: 196px;\n  }\n  &::after {\n    right: 200px;\n  }\n}\n\n.select-type {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 7px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.options-type {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: scroll;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.01s;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n}\n\n.dropdown-select-type.active .options-type {\n  visibility: visible;\n  opacity: 1;\n}\n\n.option-type {\n  padding: 2px 7px;\n  cursor: pointer;\n  &:hover {\n    border-radius: 2px;\n    background: #62baea;\n    color: #fff;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionPopup.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionPopup.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.option-header {
  width: 90%;
  height: 30px;
  margin: 15px 1px 5px 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.option-title {
  font-size: 19px;
  font-weight: 700;
  color: #000;
}

.option-body {
  width: 100%;
}

.option {
    display: flex;
    flex-direction: row;
    margin: 7px 10px;
    align-items: center;
}


`, "",{"version":3,"sources":["webpack://./src/view/Home/OptionPopup/OptionPopup.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[".option-header {\n  width: 90%;\n  height: 30px;\n  margin: 15px 1px 5px 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.option-title {\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n}\n\n.option-body {\n  width: 100%;\n}\n\n.option {\n    display: flex;\n    flex-direction: row;\n    margin: 7px 10px;\n    align-items: center;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.option span {
  font-size: 15px;
  font-weight: 500;
  margin-right: auto;
}

.repo-switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
  margin-right: 6px;
}

.repo-switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  border-radius: 34px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 14px;
    width: 14px;
    left: 3.5px;
    bottom: 2.5px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}


.repo-switch input:checked + .slider {
  background-color: #afa8de;
  border-color: #fff;
}

.repo-switch input:focus + .slider {
  box-shadow: 0 0 1px #afa8de;
}

.repo-switch input:checked + .slider:before {
  -webkit-transform: translateX(9px);
  -ms-transform: translateX(9px);
  transform: translateX(9px);
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;;EAEhB;IACE,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,gBAAgB;EAClB;AACF;;;AAGA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,8BAA8B;EAC9B,0BAA0B;AAC5B","sourcesContent":[".option span {\n  font-size: 15px;\n  font-weight: 500;\n  margin-right: auto;\n}\n\n.repo-switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  margin-right: 6px;\n}\n\n.repo-switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 34px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n\n  &::before {\n    position: absolute;\n    content: \"\";\n    border-radius: 50%;\n    height: 14px;\n    width: 14px;\n    left: 3.5px;\n    bottom: 2.5px;\n    background-color: #fff;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n}\n\n\n.repo-switch input:checked + .slider {\n  background-color: #afa8de;\n  border-color: #fff;\n}\n\n.repo-switch input:focus + .slider {\n  box-shadow: 0 0 1px #afa8de;\n}\n\n.repo-switch input:checked + .slider:before {\n  -webkit-transform: translateX(9px);\n  -ms-transform: translateX(9px);\n  transform: translateX(9px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Popup.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/Home/Popup.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 300px;
  margin: 0;
  white-space: nowrap;
  background: linear-gradient(331.91deg, #afa8de 4.31%, #9586ef 130.13%);
}







.enroll-repo {
  border-radius: 3px;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 500px;
  background: #02bc68;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  margin-left: 2px;
}

.option-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: #fff;
  border-radius: 10px 10px 0 0;
}

.footer {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  background: linear-gradient(to bottom, #463f6b 50.31%, #000 130.13%);
}
`, "",{"version":3,"sources":["webpack://./src/view/Home/Popup.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,sEAAsE;AACxE;;;;;;;;AAQA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,oEAAoE;AACtE","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  height: 300px;\n  margin: 0;\n  white-space: nowrap;\n  background: linear-gradient(331.91deg, #afa8de 4.31%, #9586ef 130.13%);\n}\n\n\n\n\n\n\n\n.enroll-repo {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500px;\n  background: #02bc68;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n}\n\n.option-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #463f6b 50.31%, #000 130.13%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Components/Status/fail.css":
/*!****************************************!*\
  !*** ./src/Components/Status/fail.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./fail.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/fail.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_fail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_fail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Status/loading.css":
/*!*******************************************!*\
  !*** ./src/Components/Status/loading.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loading.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/loading.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Components/Status/success.css":
/*!*******************************************!*\
  !*** ./src/Components/Status/success.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_success_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./success.css */ "./node_modules/css-loader/dist/cjs.js!./src/Components/Status/success.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_success_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_success_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_success_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_success_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Footer/Footer.css":
/*!*****************************************!*\
  !*** ./src/view/Home/Footer/Footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Footer/Footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Logo/Logo.css":
/*!******************************************!*\
  !*** ./src/view/Home/Main/Logo/Logo.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Logo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./Logo.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Logo/Logo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Logo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Logo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Logo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Logo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Main.css":
/*!*************************************!*\
  !*** ./src/view/Home/Main/Main.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Main.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css":
/*!***********************************************************************!*\
  !*** ./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./CreateNewRepo.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Repository/Repository.css":
/*!******************************************************!*\
  !*** ./src/view/Home/Main/Repository/Repository.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Repository_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./Repository.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/Repository.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Repository_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Repository_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Repository_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Repository_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css":
/*!***********************************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./SelectOldRepo.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectType/SelectType.css":
/*!*****************************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectType/SelectType.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_SelectType_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./SelectType.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Main/Repository/SelectType/SelectType.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_SelectType_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_SelectType_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_SelectType_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_SelectType_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/OptionPopup/OptionPopup.css":
/*!***************************************************!*\
  !*** ./src/view/Home/OptionPopup/OptionPopup.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_OptionPopup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./OptionPopup.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionPopup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_OptionPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_OptionPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_OptionPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_OptionPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css":
/*!***************************************************************!*\
  !*** ./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_OptionSlide_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./OptionSlide.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_OptionSlide_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_OptionSlide_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_OptionSlide_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_OptionSlide_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/Home/Popup.css":
/*!*********************************!*\
  !*** ./src/view/Home/Popup.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/Home/Popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API/getReqAPI.ts":
/*!******************************!*\
  !*** ./src/API/getReqAPI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAccessToken: () => (/* binding */ getAccessToken),
/* harmony export */   getBaekjunProblemDescription: () => (/* binding */ getBaekjunProblemDescription),
/* harmony export */   getBaekjunSolvedData: () => (/* binding */ getBaekjunSolvedData),
/* harmony export */   getDefaultBranch: () => (/* binding */ getDefaultBranch),
/* harmony export */   getProblemInfoBySolvedAc: () => (/* binding */ getProblemInfoBySolvedAc),
/* harmony export */   getReference: () => (/* binding */ getReference),
/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),
/* harmony export */   getUserRepos: () => (/* binding */ getUserRepos)
/* harmony export */ });
/* harmony import */ var _background_backgroundAPI_getReqBackgroundAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../background/backgroundAPI/getReqBackgroundAPI */ "./src/background/backgroundAPI/getReqBackgroundAPI.ts");
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/chromeUtils */ "./src/utils/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getUserInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const host = "https://api.github.com/user";
    const res = yield (yield fetch(host, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `token ${token}`,
            Accept: "application/json",
        },
    })).json();
    return res;
});
const getAccessToken = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (yield fetch("https://github.com/login/oauth/access_token", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            client_id: "2f17ed4238f44ec245f1",
            client_secret: "bce84d737913769ebb4a35297d0c0f67af6bead8",
            code,
        }),
    })).json();
    return res;
});
const getUserRepos = () => __awaiter(void 0, void 0, void 0, function* () {
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("GITHUB_TOKEN"));
    if (!GITHUB_TOKEN)
        throw new Error("Token 정보를 가져오지 못했습니다.");
    const res = yield (yield fetch("https://api.github.com/user/repos", {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    })).json();
    return res;
});
const getDefaultBranch = () => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const host = `https://api.github.com/repos/${user}/${repoName}`;
    const res = yield (yield fetch(host, {
        method: "get",
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    })).json();
    return res.default_branch;
});
const getReference = (branch = "main") => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const host = `https://api.github.com/repos/${user}/${repoName}/git/ref/heads/${branch}`;
    const res = yield (yield fetch(host, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    })).json();
    return { refSHA: res.object.sha, ref: res.ref };
});
const getBaekjunSolvedData = (submissionId) => __awaiter(void 0, void 0, void 0, function* () {
    const host = `https://www.acmicpc.net/source/download/${submissionId}`;
    const code = yield (yield fetch(host, {
        method: "get",
        headers: {
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
        },
    })).text();
    return code;
});
const getBaekjunProblemDescription = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const host = `https://www.acmicpc.net/problem/${problemId}`;
    const doc = yield (yield fetch(host, {
        method: "get",
        headers: {
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
        },
    })).text();
    const html = new DOMParser().parseFromString(doc, "text/html");
    const input = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.$)("#problem_input", html).innerHTML.trim());
    const output = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.$)("#problem_output", html).innerHTML.trim());
    const description = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_2__.$)("#problem_description", html).innerHTML.trim());
    return description + input + output;
});
const getProblemInfoBySolvedAc = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_1__.sendChromeMessage)({
        action: "baekjun",
        task: "getProblemInfoBySolvedAc",
        problemId,
    });
    // 임시
    const a = (0,_background_backgroundAPI_getReqBackgroundAPI__WEBPACK_IMPORTED_MODULE_0__.getProblemInfoBySolvedAcAPI)(problemId);
    console.log(a);
    //
    return data;
});


/***/ }),

/***/ "./src/API/postReqAPI.ts":
/*!*******************************!*\
  !*** ./src/API/postReqAPI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commitCodeToRepo: () => (/* binding */ commitCodeToRepo),
/* harmony export */   createBlob: () => (/* binding */ createBlob),
/* harmony export */   createCommit: () => (/* binding */ createCommit),
/* harmony export */   createTree: () => (/* binding */ createTree),
/* harmony export */   postNewRepo: () => (/* binding */ postNewRepo),
/* harmony export */   updateHead: () => (/* binding */ updateHead)
/* harmony export */ });
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chromeUtils */ "./src/utils/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _getReqAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getReqAPI */ "./src/API/getReqAPI.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const commitCodeToRepo = ({ directory, code, message, readMe, fileName, }) => __awaiter(void 0, void 0, void 0, function* () {
    const defaultBranch = yield (0,_getReqAPI__WEBPACK_IMPORTED_MODULE_2__.getDefaultBranch)();
    const { refSHA, ref } = yield (0,_getReqAPI__WEBPACK_IMPORTED_MODULE_2__.getReference)(defaultBranch);
    const sourceCode = yield createBlob(code, fileName, directory);
    const sourceReadMe = yield createBlob(readMe, "README.md", directory);
    const treeSHA = yield createTree(refSHA, [sourceCode, sourceReadMe]);
    const commitSHA = yield createCommit(message, treeSHA, refSHA);
    yield updateHead(ref, commitSHA);
});
const postNewRepo = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const host = "https://api.github.com/user/repos";
    const data = JSON.stringify({
        name,
        private: true,
        auto_init: true,
        description: "알고리즘 자동 기록 보관소",
    });
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
    if (!GITHUB_TOKEN)
        throw new Error("Token 정보를 가져오지 못했습니다.");
    const res = yield (yield fetch(host, {
        method: "post",
        headers: {
            "content-type": "application/json",
            Accept: "application/vnd.github+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
        body: data,
    })).json();
    return res;
});
// export type NewBlob = {
//   path: string;
//   sha: string;
//   mode: string;
//   type: string;
// };
const createBlob = (content, fileName, directory) => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const path = `${directory}/${fileName}`;
    if (!GITHUB_TOKEN)
        throw new Error("Token 정보를 가져오지 못했습니다.");
    const host = `https://api.github.com/repos/${user}/${repoName}/git/blobs`;
    const data = JSON.stringify({
        content: (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.b64EncodeUnicode)(content),
        encoding: "base64",
    });
    const res = yield (yield fetch(host, {
        method: "post",
        headers: {
            "content-type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
        body: data,
    })).json();
    return { path, sha: res.sha, mode: "100644", type: "blob" };
});
const createTree = (refSHA, tree_items) => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const host = `https://api.github.com/repos/${user}/${repoName}/git/trees`;
    const data = JSON.stringify({ tree: tree_items, base_tree: refSHA });
    const res = yield (yield fetch(host, {
        method: "post",
        headers: {
            "content-type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
        body: data,
    })).json();
    return res.sha;
});
const createCommit = (message, treeSHA, refSHA) => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const host = `https://api.github.com/repos/${user}/${repoName}/git/commits`;
    const data = JSON.stringify({ message, tree: treeSHA, parent: [refSHA] });
    const res = yield (yield fetch(host, {
        method: "post",
        headers: {
            "content-type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${GITHUB_TOKEN}`,
        },
        body: data,
    })).json();
    return res.sha;
});
const updateHead = (ref, commitSHA, force = true) => __awaiter(void 0, void 0, void 0, function* () {
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
    const host = `https://api.github.com/repos/${user}/${repoName}/git/refs/heads/main`;
    const data = JSON.stringify({ sha: commitSHA, force });
    const res = yield (yield fetch(host, {
        method: "PATCH",
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
        },
        body: data,
    })).json();
    return res;
});


/***/ }),

/***/ "./src/Components/Button/Button.ts":
/*!*****************************************!*\
  !*** ./src/Components/Button/Button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var Components_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Component */ "./src/Components/Component/index.ts");

class Button extends Components_Component__WEBPACK_IMPORTED_MODULE_0__.Component {
    setEvent() {
        const { onClick } = this.state;
        this.node.addEventListener("click", (e) => {
            e.preventDefault();
            onClick();
        });
    }
    template() {
        const { name } = this.state;
        return `<div>${name ? name : "버튼"}</div>`;
    }
}


/***/ }),

/***/ "./src/Components/Button/index.ts":
/*!****************************************!*\
  !*** ./src/Components/Button/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Components/Button/Button.ts");



/***/ }),

/***/ "./src/Components/Component/Component.ts":
/*!***********************************************!*\
  !*** ./src/Components/Component/Component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jsUtils */ "./src/utils/jsUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Component {
    constructor({ node, state }) {
        this.node = node;
        this.state = state;
        this.render();
        this.componentDidMount();
    }
    setState(newState) {
        if (!this.checkChangeState(newState)) {
            return;
        }
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.render();
    }
    checkChangeState(newState) {
        for (const key in newState) {
            if (!Object.prototype.hasOwnProperty.call(newState, key)) {
                throw new Error(`${key}는 상태에 존재하지 않는 변수입니다.`);
            }
            if (!(0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.isSameTwo)(this.state[key], newState[key])) {
                return true;
            }
        }
        return false;
    }
    render() {
        _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.addComponents.call(this);
        this.createChildComponents();
        this.setEvent();
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    createChildComponents() { }
    update() { }
    template() {
        return "";
    }
    setEvent() { }
}


/***/ }),

/***/ "./src/Components/Component/index.ts":
/*!*******************************************!*\
  !*** ./src/Components/Component/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Components/Component/Component.ts");



/***/ }),

/***/ "./src/Components/Status/Status.ts":
/*!*****************************************!*\
  !*** ./src/Components/Status/Status.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.css */ "./src/Components/Status/loading.css");
/* harmony import */ var _success_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success.css */ "./src/Components/Status/success.css");
/* harmony import */ var _fail_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fail.css */ "./src/Components/Status/fail.css");




class Status extends _Components__WEBPACK_IMPORTED_MODULE_0__.Component {
    template() {
        return `
      <div class="status">
        <div></div>
        <div></div>
        <div></div>
      </div>
      `;
    }
}


/***/ }),

/***/ "./src/Components/Status/index.ts":
/*!****************************************!*\
  !*** ./src/Components/Status/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* reexport safe */ _Status__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status */ "./src/Components/Status/Status.ts");



/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Status: () => (/* reexport safe */ _Status__WEBPACK_IMPORTED_MODULE_2__.Status)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/Components/Component/index.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Components/Button/index.ts");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Status */ "./src/Components/Status/index.ts");





/***/ }),

/***/ "./src/background/backgroundAPI/getReqBackgroundAPI.ts":
/*!*************************************************************!*\
  !*** ./src/background/backgroundAPI/getReqBackgroundAPI.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProblemInfoBySolvedAcAPI: () => (/* binding */ getProblemInfoBySolvedAcAPI)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getProblemInfoBySolvedAcAPI = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const host = `https://solved.ac/api/v3/problem/show?problemId=${problemId}`;
    return yield (yield fetch(host, {
        method: "get",
        headers: {
            Accept: "application/json",
        },
    })).json();
});


/***/ }),

/***/ "./src/utils/Constants.ts":
/*!********************************!*\
  !*** ./src/utils/Constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chromeStorageId: () => (/* binding */ chromeStorageId),
/* harmony export */   errorMsg: () => (/* binding */ errorMsg)
/* harmony export */ });
const errorMsg = {
    NotFoundRepo: "Repository가 아직 설정되지 않았습니다.",
};
const chromeStorageId = {
    baekjunProblemId: "BaekjunProblemId",
    repo: "repoName",
    isTimer: "isTimer",
    isUpload: "isUpload",
    submitedProblemId: "submitedProblem",
};


/***/ }),

/***/ "./src/utils/chromeUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/chromeUtils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteChromeLocalStorage: () => (/* binding */ deleteChromeLocalStorage),
/* harmony export */   getChromeLocalStorage: () => (/* binding */ getChromeLocalStorage),
/* harmony export */   getChromeMessage: () => (/* binding */ getChromeMessage),
/* harmony export */   getChromeSyncStorage: () => (/* binding */ getChromeSyncStorage),
/* harmony export */   sendChromeMessage: () => (/* binding */ sendChromeMessage),
/* harmony export */   setChromeLocalStorage: () => (/* binding */ setChromeLocalStorage),
/* harmony export */   setChromeSyncStorage: () => (/* binding */ setChromeSyncStorage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const setChromeSyncStorage = (_a, fn) => {
    var props = __rest(_a, []);
    if (fn === void 0) { fn = () => { }; }
    chrome.storage.sync.set(Object.assign({}, props), fn);
};
const getChromeSyncStorage = (key, fn) => {
    if (fn) {
        chrome.storage.sync.get([key], fn);
        return;
    }
    return chrome.storage.sync.get([key]);
};
const setChromeLocalStorage = (_a) => {
    var props = __rest(_a, []);
    return chrome.storage.local.set(Object.assign({}, props));
};
const getChromeLocalStorage = (key) => {
    return chrome.storage.local.get([key]);
};
const deleteChromeLocalStorage = (key) => {
    chrome.storage.local.remove(key);
};
const sendChromeMessage = (_a, callbackFn) => __awaiter(void 0, void 0, void 0, function* () {
    var props = __rest(_a, []);
    if (callbackFn) {
        return chrome.runtime.sendMessage(Object.assign({}, props), callbackFn);
    }
    return chrome.runtime.sendMessage(Object.assign({}, props));
});
const getChromeMessage = (fn) => {
    chrome.runtime.onMessage.addListener(fn);
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   $$: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.$$),
/* harmony export */   LANGUAGES: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES),
/* harmony export */   SOLVEDAC_LEVEL: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.SOLVEDAC_LEVEL),
/* harmony export */   addComponents: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.addComponents),
/* harmony export */   b64EncodeUnicode: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.b64EncodeUnicode),
/* harmony export */   chromeStorageId: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.chromeStorageId),
/* harmony export */   convertSingleCharToDoubleChar: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar),
/* harmony export */   createTimer: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.createTimer),
/* harmony export */   createeTimer: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.createeTimer),
/* harmony export */   deleteChromeLocalStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage),
/* harmony export */   enrollEvent: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.enrollEvent),
/* harmony export */   errorMsg: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.errorMsg),
/* harmony export */   getChromeLocalStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage),
/* harmony export */   getChromeMessage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeMessage),
/* harmony export */   getChromeSyncStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeSyncStorage),
/* harmony export */   getElById: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.getElById),
/* harmony export */   getQueryParam: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.getQueryParam),
/* harmony export */   getReadmeText: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.getReadmeText),
/* harmony export */   getTimeDiff: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.getTimeDiff),
/* harmony export */   hasElement: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.hasElement),
/* harmony export */   htmlEntityDecode: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.htmlEntityDecode),
/* harmony export */   insertHTML: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.insertHTML),
/* harmony export */   isObjEmpty: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.isObjEmpty),
/* harmony export */   isSameTwo: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.isSameTwo),
/* harmony export */   isUndefined: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   removeEvent: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.removeEvent),
/* harmony export */   selectAllEl: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectAllEl),
/* harmony export */   selectEl: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl),
/* harmony export */   sendChromeMessage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.sendChromeMessage),
/* harmony export */   setChromeLocalStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage),
/* harmony export */   setChromeSyncStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeSyncStorage)
/* harmony export */ });
/* harmony import */ var _jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/utils/Constants.ts");
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chromeUtils */ "./src/utils/chromeUtils.ts");





/***/ }),

/***/ "./src/utils/jsUtils.ts":
/*!******************************!*\
  !*** ./src/utils/jsUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   $$: () => (/* binding */ $$),
/* harmony export */   LANGUAGES: () => (/* binding */ LANGUAGES),
/* harmony export */   SOLVEDAC_LEVEL: () => (/* binding */ SOLVEDAC_LEVEL),
/* harmony export */   addComponents: () => (/* binding */ addComponents),
/* harmony export */   b64EncodeUnicode: () => (/* binding */ b64EncodeUnicode),
/* harmony export */   convertSingleCharToDoubleChar: () => (/* binding */ convertSingleCharToDoubleChar),
/* harmony export */   createTimer: () => (/* binding */ createTimer),
/* harmony export */   createeTimer: () => (/* binding */ createeTimer),
/* harmony export */   enrollEvent: () => (/* binding */ enrollEvent),
/* harmony export */   getElById: () => (/* binding */ getElById),
/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam),
/* harmony export */   getReadmeText: () => (/* binding */ getReadmeText),
/* harmony export */   getTimeDiff: () => (/* binding */ getTimeDiff),
/* harmony export */   hasElement: () => (/* binding */ hasElement),
/* harmony export */   htmlEntityDecode: () => (/* binding */ htmlEntityDecode),
/* harmony export */   insertHTML: () => (/* binding */ insertHTML),
/* harmony export */   isObjEmpty: () => (/* binding */ isObjEmpty),
/* harmony export */   isSameTwo: () => (/* binding */ isSameTwo),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   removeEvent: () => (/* binding */ removeEvent),
/* harmony export */   selectAllEl: () => (/* binding */ selectAllEl),
/* harmony export */   selectEl: () => (/* binding */ selectEl)
/* harmony export */ });
const $ = (targetName, parentEl) => {
    const element = parentEl
        ? parentEl.querySelector(targetName)
        : document.querySelector(targetName);
    if (!element)
        throw new Error(`${targetName} element를 찾을 수 없습니다`);
    return element;
};
const selectEl = (selector, context) => context.querySelector(selector);
const selectAllEl = (selector, context) => context.querySelectorAll(selector);
const $$ = (targetName, parentEl) => {
    const elements = parentEl
        ? parentEl.querySelectorAll(targetName)
        : document.querySelectorAll(targetName);
    if (!elements)
        throw new Error(`${targetName} elements를 찾을 수 없습니다`);
    return Array.prototype.slice.call(elements);
};
const getElById = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element)
        throw new Error(`${targetId}id를 가진 엘리먼트를 찾을 수 없습니다`);
    return element;
};
const enrollEvent = (el, type, fn, options) => {
    el.addEventListener(type, fn, options);
};
const removeEvent = (el, type, fn) => {
    el.removeEventListener(type, fn);
};
const isObjEmpty = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};
const b64EncodeUnicode = (str) => {
    return btoa(encodeURIComponent(str).replace(/%([0-9=A-F]{2})/g, function (match, p) {
        return String.fromCharCode(Number(`0x${p}`));
    }));
};
const convertSingleCharToDoubleChar = (text) => {
    // singleChar to doubleChar mapping
    const map = {
        "!": "！",
        "%": "％",
        "&": "＆",
        "(": "（",
        ")": "）",
        "*": "＊",
        "+": "＋",
        ",": "，",
        "-": "－",
        ".": "．",
        "/": "／",
        ":": "：",
        ";": "；",
        "<": "＜",
        "=": "＝",
        ">": "＞",
        "?": "？",
        "@": "＠",
        "[": "［",
        "\\": "＼",
        "]": "］",
        "^": "＾",
        _: "＿",
        "`": "｀",
        "{": "｛",
        "|": "｜",
        "}": "｝",
        "~": "～",
        " ": " ", // 공백만 전각문자가 아닌 FOUR-PER-EM SPACE로 변환
    };
    return text.replace(/[!%&()*+,\-./:;<=>?@\[\\\]^_`{|}~ ]/g, (k) => map[k]);
};
const createeTimer = (callbackFn) => {
    let [secs, mins, hours] = [0, 0, 0];
    const timer = setInterval(() => {
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
        if (mins == 60) {
            mins = 0;
            hours++;
        }
        if (hours == 10) {
            clearInterval(timer);
        }
        const h = hours < 10 ? "0" + hours.toString() : hours.toString();
        const m = mins < 10 ? "0" + mins.toString() : mins.toString();
        const s = secs < 10 ? "0" + secs.toString() : secs.toString();
        callbackFn({ h, m, s });
    }, 1000);
    return timer;
};
const createTimer = (startTime, callbackFn) => {
    const timer = setInterval(() => {
        const nowTime = new Date().getTime();
        const { h, m, s } = getTimeDiff(startTime, nowTime);
        callbackFn({ h, m, s });
    });
    return timer;
};
const insertHTML = ({ element, position, html }) => {
    element.insertAdjacentHTML(position, html);
};
const getTimeDiff = (startTime, nowTime) => {
    let [hour, min, sec] = [0, 0, 0];
    let timeDiffSec = Math.floor((nowTime - startTime) / 1000);
    if (timeDiffSec > 3600) {
        hour = Math.floor(timeDiffSec / 3600);
        timeDiffSec = timeDiffSec % 3600;
    }
    if (timeDiffSec > 60) {
        min = Math.floor(timeDiffSec / 60);
        timeDiffSec = timeDiffSec % 60;
    }
    sec = timeDiffSec;
    const h = hour < 10 ? "0" + hour.toString() : hour.toString();
    const m = min < 10 ? "0" + min.toString() : min.toString();
    const s = sec < 10 ? "0" + sec.toString() : sec.toString();
    return { h, m, s };
};
const hasElement = (target, parentElement) => {
    if (parentElement) {
        if (parentElement.querySelector(target)) {
            return true;
        }
        return false;
    }
    if (document.querySelector(target)) {
        return true;
    }
    return false;
};
const htmlEntityDecode = (text) => {
    const unescaped = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
    };
    return text.replace(/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160);/g, (word) => unescaped[word]);
};
const getQueryParam = (query) => {
    const param = new URLSearchParams(window.location.search).get(query);
    if (!param)
        throw new Error(`Not Found Query ${query}`);
    return param;
};
const SOLVEDAC_LEVEL = {
    0: "Unrated",
    1: "Bronze V",
    2: "Bronze IV",
    3: "Bronze III",
    4: "Bronze II",
    5: "Bronze I",
    6: "Silver V",
    7: "Silver IV",
    8: "Silver III",
    9: "Silver II",
    10: "Silver I",
    11: "Gold V",
    12: "Gold IV",
    13: "Gold III",
    14: "Gold II",
    15: "Gold I",
    16: "Platinum V",
    17: "Platinum IV",
    18: "Platinum III",
    19: "Platinum II",
    20: "Platinum I",
    21: "Diamond V",
    22: "Diamond IV",
    23: "Diamond III",
    24: "Diamond II",
    25: "Diamond I",
    26: "Ruby V",
    27: "Ruby IV",
    28: "Ruby III",
    29: "Ruby II",
    30: "Ruby I",
    31: "Master",
};
const LANGUAGES = {
    아희: "aheui",
    엄준식: "umm",
    Ada: "ada",
    "Algol 68": "a",
    APECODE: "ape",
    Assembly: "o",
    "Assembly (32bit)": "o",
    "Assembly (64bit)": "o",
    awk: "awk",
    Bash: "sh",
    bc: "bc",
    Befunge: "bf",
    Boo: "boo",
    "Brainf**k": "bf",
    C: "c",
    "C#": "cs",
    "C# 3.0 (Mono)": "cs",
    "C# 6.0 (Mono)": "cs",
    "C# 9.0 (.NET)": "cs",
    "C++": "cc",
    "C++11": "cc",
    "C++11 (Clang)": "cc",
    "C++14": "cc",
    "C++14 (Clang)": "cc",
    "C++17": "cc",
    "C++17 (Clang)": "cc",
    "C++20": "cc",
    "C++20 (Clang)": "cc",
    "C++98": "cc",
    "C++98 (Clang)": "cc",
    C11: "c",
    "C11 (Clang)": "c",
    C2x: "c",
    "C2x (Clang)": "c",
    C90: "c",
    "C90 (Clang)": "c",
    C99: "c",
    "C99 (Clang)": "c",
    Cobol: "cob",
    Cobra: "cobra",
    Coq: "v",
    Crystal: "cr",
    D: "d",
    "D (LDC)": "d",
    "F#": "fs",
    "F# (.NET)": "fs",
    "F# (Mono)": "fs",
    Fortran: "f",
    FreeBASIC: "bas",
    Go: "go",
    "Go (gccgo)": "go",
    Golfscript: "gs",
    Haskell: "hs",
    Haxe: "py",
    INTERCAL: "i",
    Java: "java",
    "Java 11": "java",
    "Java 15": "java",
    "Java 8": "java",
    "Java 8 (OpenJDK)": "java",
    Kotlin: "kt",
    "Kotlin (JVM)": "kt",
    "Kotlin (Native)": "kt",
    LOLCODE: "lol",
    Lua: "lua",
    Minecraft: "mca",
    Nemerle: "n",
    Nimrod: "nim",
    "node.js": "js",
    "Objective-C": "m",
    "Objective-C++": "mm",
    OCaml: "ml",
    Pascal: "pas",
    Perl: "pl",
    PHP: "php",
    Pike: "pike",
    PyPy: "py",
    PyPy2: "py",
    PyPy3: "py",
    Python: "py",
    "Python 2": "py",
    "Python 3": "py",
    Rhino: "js",
    Ruby: "rb",
    "Ruby 1.8": "rb",
    "Ruby 1.9": "rb",
    "Ruby 2": "rb",
    Rust: "rs",
    "Rust 2015": "rs",
    "Rust 2018": "rs",
    "Rust 2019": "rs",
    "Rust 2021": "rs",
    Scala: "scala",
    Scheme: "scm",
    sed: "sed",
    Swift: "swift",
    SystemVerilog: "sv",
    Tcl: "tcl",
    Text: "txt",
    TypeScript: "ts",
    "VB.NET 2.0 (Mono)": "vb",
    "VB.NET 4.0 (Mono)": "vb",
    "Visual Basic": "vb",
    "Visual Basic (.NET)": "vb",
    Whitespace: "ws",
};
const getReadmeText = ({ level, title, solvingTime, problemId, spentMemory, spentTime, category, description, }) => level
    ? `# [${level}] ${title} - ${problemId} \n\n`
    : `# ${title} - ${problemId} \n\n` +
        `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n` +
        `### 성능 요약\n\n` +
        `평균 소요 메모리: ${spentMemory} KB, ` +
        `평균 소요 시간: ${spentTime} ms\n\n` +
        `풀이시간: ${solvingTime}\n\n` +
        `### 분류\n\n` +
        `${category}\n\n` +
        `### 문제 설명\n\n${description}\n\n`;
function addComponents() {
    const node = this.node;
    const newNode = Array.from(new DOMParser().parseFromString(this.template(), "text/html").body.children);
    node.parentNode.insertBefore(newNode[0], node.nextSibling);
    this.node = node.nextSibling;
    const nodeClass = node.classList.value.trim();
    if (nodeClass) {
        this.node.className = nodeClass;
    }
    node.remove();
}
function isSameTwo(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
function isUndefined(a) {
    if (typeof a === "undefined") {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/view/Home/Footer/Footer.ts":
/*!****************************************!*\
  !*** ./src/view/Home/Footer/Footer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/view/Home/Footer/Footer.css");


class Footer extends _Components__WEBPACK_IMPORTED_MODULE_0__.Component {
    setEvent() {
        this.node.addEventListener("click", () => {
            window.open("https://github.com/HANITZ/PSHelper");
        });
    }
    template() {
        return `
    <div>
      <span class="footer-name">PSHelper</span>
    </div>
        `;
    }
}


/***/ }),

/***/ "./src/view/Home/Footer/index.ts":
/*!***************************************!*\
  !*** ./src/view/Home/Footer/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/view/Home/Footer/Footer.ts");



/***/ }),

/***/ "./src/view/Home/Main/Logo/Logo.ts":
/*!*****************************************!*\
  !*** ./src/view/Home/Main/Logo/Logo.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _Logo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.css */ "./src/view/Home/Main/Logo/Logo.css");



class Logo extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    setEvent() {
        const { user, repoName, setStatePopup } = this.state;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".logo-button", this.node).addEventListener("click", () => {
            window.open(`https://github.com/login/oauth/authorize?client_id=${"2f17ed4238f44ec245f1"}`);
        });
        if (repoName) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".logo-repo-logined", this.node).addEventListener("click", (e) => {
                e.preventDefault();
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({ action: "repoName", repoName: "" });
                const newState = Object.assign(Object.assign({}, this.state), { repoName: "" });
                setStatePopup(newState);
            });
        }
    }
    template() {
        const { repoName, user } = this.state;
        return `
    <div>
      <img class="logo-button" src="./PSHelper.png" alt="" />
      ${user
            ? `<div class="logo-text-logined" >User: ${user}</div>`
            : '<div class="logo-text" >Click Logo to connect to GitHub</div>'}
      ${repoName
            ? `<div class="logo-repo-logined" >Repository: ${repoName}</div>`
            : ``}
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Logo/index.ts":
/*!******************************************!*\
  !*** ./src/view/Home/Main/Logo/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/view/Home/Main/Logo/Logo.ts");



/***/ }),

/***/ "./src/view/Home/Main/Main.ts":
/*!************************************!*\
  !*** ./src/view/Home/Main/Main.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Logo */ "./src/view/Home/Main/Logo/index.ts");
/* harmony import */ var _Repository_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Repository/Repository */ "./src/view/Home/Main/Repository/Repository.ts");
/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main.css */ "./src/view/Home/Main/Main.css");





class Main extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    createChildComponents() {
        const { user, repoName, setStatePopup } = this.state;
        new _Logo__WEBPACK_IMPORTED_MODULE_2__.Logo({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("LogoContainer", this.node),
            state: this.state,
        });
        if (user && !repoName) {
            new _Repository_Repository__WEBPACK_IMPORTED_MODULE_3__["default"]({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("RepoContainer", this.node),
                state: {
                    setStatePopup,
                },
            });
        }
    }
    template() {
        const { user, repoName } = this.state;
        return `
    <div>
      <LogoContainer class="logo-container"></LogoContainer>
      ${user
            ? repoName
                ? ``
                : `<RepoContainer class="repo-container" ></RepoContainer>`
            : ``}
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.ts":
/*!**********************************************************************!*\
  !*** ./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNewRepo)
/* harmony export */ });
/* harmony import */ var _API_postReqAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../API/postReqAPI */ "./src/API/postReqAPI.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _VerifyMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerifyMessage */ "./src/view/Home/Main/Repository/CreateNewRepo/VerifyMessage.ts");
/* harmony import */ var _CreateNewRepo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateNewRepo.css */ "./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class CreateNewRepo extends _Components__WEBPACK_IMPORTED_MODULE_2__.Component {
    createChildComponents() {
        const { isVerified, verifyMsg, status } = this.state;
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(status)) {
            new _Components__WEBPACK_IMPORTED_MODULE_2__.Status({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("Status", this.node),
                state: {},
            });
        }
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(verifyMsg)) {
            new _VerifyMessage__WEBPACK_IMPORTED_MODULE_3__["default"]({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("VerifyMessage", this.node),
                state: { message: verifyMsg },
            });
        }
        if (isVerified) {
            new _Components__WEBPACK_IMPORTED_MODULE_2__.Button({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("EnrollButton", this.node),
                state: {
                    name: "Enroll",
                    onClick: this.enrollHandler.bind(this),
                },
            });
            new _Components__WEBPACK_IMPORTED_MODULE_2__.Button({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("CancelRepoButton", this.node),
                state: {
                    name: "Cancel",
                    onClick: () => this.setState({ isVerified: false, textValue: "" }),
                },
            });
            return;
        }
        new _Components__WEBPACK_IMPORTED_MODULE_2__.Button({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("VerifyButton", this.node),
            state: {
                name: "Verify",
                onClick: this.verifyHandler.bind(this),
            },
        });
    }
    verifyHandler() {
        const inputEl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("input", this.node);
        const verifyMsg = this.validateNewRepoName(inputEl.value);
        if (verifyMsg) {
            this.setState(Object.assign(Object.assign({}, this.state), { verifyMsg }));
            return;
        }
        this.setState(Object.assign(Object.assign({}, this.state), { textValue: inputEl.value, isVerified: true, verifyMsg: undefined }));
    }
    enrollHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            const { isVerified, textValue, setStatePopup } = this.state;
            if (!isVerified)
                throw new Error("확인되지않은 레포이름입니다.");
            this.setState({ status: "loading" });
            try {
                yield (0,_API_postReqAPI__WEBPACK_IMPORTED_MODULE_0__.postNewRepo)(textValue);
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.sendChromeMessage)({
                    action: "repoName",
                    method: "post",
                    repoName: textValue,
                });
                this.setState({ status: "success" });
                setTimeout(() => {
                    setStatePopup({ repoName: textValue });
                }, 700);
            }
            catch (_a) {
                this.setState({ status: "fail" });
            }
        });
    }
    validateNewRepoName(name) {
        const { repos } = this.state;
        if (name === "")
            return "이름을 입력해주세요";
        if (name.length >= 20)
            return "20자 이상의 이름을 설정할 수 없습니다";
        const reg = /^[A-Za-z0-9]{1,20}$/;
        if (!reg.test(name))
            return "알파벳과 숫자를 제외한 문자를 입력할 수 없습니다";
        if (!repos)
            throw new Error("Repo 정보가 존재하지 않습니다.");
        for (const repo of repos) {
            if (name === repo.name)
                return `이미 존재하는 Repo입니다.`;
        }
        return "";
    }
    template() {
        const { isVerified, verifyMsg, textValue, status } = this.state;
        return `
    <div> 
      <div class="new-repo-create">
        <input class="new-repo-input" type="text" placeholder="Create New Repo" autofocus ${textValue ? `value="${textValue}"` : ``} ${isVerified ? `readonly` : ``} }/>
        ${isVerified
            ? `
            <div>
              <EnrollButton class="new-repo-button"></EnrollButton>
              <CancelRepoButton class="cancel-repo-button"></CancelRepoButton>
            </div>
            `
            : '<VerifyButton class="verify-repo-button"></VerifyButton>'}
      </div>
      ${!isVerified && !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(verifyMsg)
            ? `<VerifyMessage class="verify-message" ></VerifyMessage>`
            : ``}
      ${status === "loading" ? `<Status class="loading-enroll" ></Status>` : ``}
      ${status === "success" ? `<Status class="success-enroll" ></Status>` : ``}
      ${status === "fail" ? `<Status class="fail-enroll" ></Status>` : ``}
    </div>`;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/CreateNewRepo/VerifyMessage.ts":
/*!**********************************************************************!*\
  !*** ./src/view/Home/Main/Repository/CreateNewRepo/VerifyMessage.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerifyMessage)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");

class VerifyMessage extends _Components__WEBPACK_IMPORTED_MODULE_0__.Component {
    template() {
        const { message } = this.state;
        return `
        <div>${message}</div>
        `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/CreateNewRepo/index.ts":
/*!**************************************************************!*\
  !*** ./src/view/Home/Main/Repository/CreateNewRepo/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateNewRepo: () => (/* reexport safe */ _CreateNewRepo__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CreateNewRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateNewRepo */ "./src/view/Home/Main/Repository/CreateNewRepo/CreateNewRepo.ts");



/***/ }),

/***/ "./src/view/Home/Main/Repository/Repository.ts":
/*!*****************************************************!*\
  !*** ./src/view/Home/Main/Repository/Repository.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Repository)
/* harmony export */ });
/* harmony import */ var _API_getReqAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../API/getReqAPI */ "./src/API/getReqAPI.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _CreateNewRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @CreateNewRepo */ "./src/view/Home/Main/Repository/CreateNewRepo/index.ts");
/* harmony import */ var _SelectOldRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @SelectOldRepo */ "./src/view/Home/Main/Repository/SelectOldRepo/index.ts");
/* harmony import */ var _SelectType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @SelectType */ "./src/view/Home/Main/Repository/SelectType/index.ts");
/* harmony import */ var _Repository_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repository.css */ "./src/view/Home/Main/Repository/Repository.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Repository extends _Components__WEBPACK_IMPORTED_MODULE_2__.Component {
    createChildComponents() {
        const { type, setStatePopup, repos } = this.state;
        new _SelectType__WEBPACK_IMPORTED_MODULE_5__.SelectType({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("SelectType", this.node),
            state: {
                type,
                setKey: this.setState.bind(this),
                selectList: ["New", "Old"],
            },
        });
        if (!repos)
            return;
        switch (type) {
            case "New":
                new _CreateNewRepo__WEBPACK_IMPORTED_MODULE_3__.CreateNewRepo({
                    node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("CreateNewRepo", this.node),
                    state: { isVerified: false, repos, setStatePopup },
                });
                break;
            case "Old":
                new _SelectOldRepo__WEBPACK_IMPORTED_MODULE_4__.SelectOldRepo({
                    node: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.selectEl)("SelectOldRepo", this.node),
                    state: { repos, setStatePopup },
                });
                break;
        }
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const repos = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_0__.getUserRepos)();
            const newState = Object.assign(Object.assign({}, this.state), { repos });
            this.setState(newState);
        });
    }
    template() {
        const { type } = this.state;
        return `
    <div>
      <SelectType class="repo-type" ></SelectType>
      <div class="repo-content">
      ${type ? `` : `<input class="before-select-type" readonly /> `}
      ${type === "New" ? `<CreateNewRepo></CreateNewRepo>` : ""}
      ${type === "Old"
            ? `<SelectOldRepo class="old-repo-select" ></SelectOldRepo>`
            : ``}
      </div>
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.ts":
/*!**********************************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectOldRepo)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _SelectOldRepo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectOldRepo.css */ "./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.css");



class SelectOldRepo extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    setEvent() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".dropdown-select-repo", this.node).addEventListener("click", (e) => {
            e.preventDefault();
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".dropdown-select-repo", this.node).classList.toggle("active");
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".select-repo", this.node).addEventListener("blur", (e) => {
            e.preventDefault();
            const inputEl = e.target;
            this.setState({ selected: inputEl.value });
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectAllEl)(".option-repo", this.node).forEach((element) => {
            element.addEventListener("mouseenter", (e) => {
                const inputEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".select-repo", this.node);
                const optionEl = e.target;
                inputEl.value = optionEl.innerText;
            });
        });
    }
    createChildComponents() {
        const { selected } = this.state;
        if (selected) {
            new _Components__WEBPACK_IMPORTED_MODULE_1__.Button({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("LinkButton", this.node),
                state: {
                    name: "Link",
                    onClick: this.LinkHandler.bind(this)
                }
            });
        }
    }
    LinkHandler() {
        const { setStatePopup } = this.state;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({
            action: "repoName",
            method: "post",
            repoName: this.state.selected,
        });
        setStatePopup({ repoName: this.state.selected });
    }
    template() {
        const { repos, selected } = this.state;
        return `
    <div>
      <div class="dropdown-select-repo">
        <input type="text" class="select-repo" readonly placeholder="${selected ? selected : "Select Your Repo"}" />
        <div class="options-repo">
        ${repos
            .map((repo) => `<div class="option-repo">${repo.name}</div>`)
            .join(" ")}
        </div>
      </div>
      ${selected ? '<LinkButton class="new-repo-button"></LinkButton>' : ""}
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectOldRepo/index.ts":
/*!**************************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectOldRepo/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectOldRepo: () => (/* reexport safe */ _SelectOldRepo__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SelectOldRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectOldRepo */ "./src/view/Home/Main/Repository/SelectOldRepo/SelectOldRepo.ts");



/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectType/SelectType.ts":
/*!****************************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectType/SelectType.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectType)
/* harmony export */ });
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _SelectType_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectType.css */ "./src/view/Home/Main/Repository/SelectType/SelectType.css");



class SelectType extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    setEvent() {
        const { setKey } = this.state;
        (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".dropdown-select-type", this.node).addEventListener("click", (e) => {
            e.preventDefault();
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".dropdown-select-type", this.node).classList.toggle("active");
        });
        (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".select-type", this.node).addEventListener("blur", (e) => {
            e.preventDefault();
            const inputEl = e.target;
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".dropdown-select-type", this.node).classList.remove("active");
            setKey({ type: inputEl.value });
        });
        (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectAllEl)(".option-type", this.node).forEach((element) => {
            element.addEventListener("mouseenter", (e) => {
                e.preventDefault();
                const inputEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".select-type", this.node);
                const optionEl = e.target;
                inputEl.value = optionEl.innerText;
            });
        });
    }
    template() {
        const { type, selectList } = this.state;
        return `
    <div>
      <div class="dropdown-select-type">
        <input
          type="text"
          class="select-type"
          readonly
          placeholder="${type ? type : "Select"}"
        />
        <div class="options-type">
          ${selectList
            .map((name) => `<div class="option-type">${name}</div>`)
            .join(" ")}
        </div>
      </div>
    </div>
      `;
    }
}


/***/ }),

/***/ "./src/view/Home/Main/Repository/SelectType/index.ts":
/*!***********************************************************!*\
  !*** ./src/view/Home/Main/Repository/SelectType/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectType: () => (/* reexport safe */ _SelectType__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SelectType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectType */ "./src/view/Home/Main/Repository/SelectType/SelectType.ts");



/***/ }),

/***/ "./src/view/Home/Main/index.ts":
/*!*************************************!*\
  !*** ./src/view/Home/Main/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/view/Home/Main/Main.ts");



/***/ }),

/***/ "./src/view/Home/OptionPopup/OptionPopup.ts":
/*!**************************************************!*\
  !*** ./src/view/Home/OptionPopup/OptionPopup.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionPopup)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _OptionPopup_OptionSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @OptionPopup/OptionSlide */ "./src/view/Home/OptionPopup/OptionSlide/index.ts");
/* harmony import */ var _OptionPopup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionPopup.css */ "./src/view/Home/OptionPopup/OptionPopup.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class OptionPopup extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    createChildComponents() {
        const { Timer, Upload } = this.state;
        new _OptionPopup_OptionSlide__WEBPACK_IMPORTED_MODULE_2__.OptionSlide({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("OptionIsUpload", this.node),
            state: {
                id: "Upload",
                isActive: Upload,
                optionTitle: "Uploading code to Repo",
            },
        });
        new _OptionPopup_OptionSlide__WEBPACK_IMPORTED_MODULE_2__.OptionSlide({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("OptionIsTimer", this.node),
            state: {
                id: "Timer",
                isActive: Timer,
                optionTitle: "Auto Timer",
            },
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let { Timer } = (yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("Timer"));
            let { Upload } = (yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("Upload"));
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(Timer)) {
                Timer = true;
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({ action: "Timer", method: "post", isActive: Timer });
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(Upload)) {
                Upload = true;
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({ action: "Upload", method: "post", isActive: Upload });
            }
            this.setState({ Timer, Upload });
        });
    }
    template() {
        return `
    <div>
      <div class="option-header">
        <h1 class="option-title">Option</h1>
      </div>
      <div class="option-body">
        <OptionIsUpload class="option isUpload"></OptionIsUpload>
        <OptionIsTimer class="option isTimer" ></OptionIsTimer>
      </div>
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/OptionPopup/OptionSlide/OptionSlide.ts":
/*!**************************************************************!*\
  !*** ./src/view/Home/OptionPopup/OptionSlide/OptionSlide.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionSlide)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _OptionSlide_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionSlide.css */ "./src/view/Home/OptionPopup/OptionSlide/OptionSlide.css");



class OptionSlide extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    setEvent() {
        const { id } = this.state;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)(".slider", this.node).addEventListener("click", (e) => {
            e.preventDefault();
            const input = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("input", this.node);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({
                action: id,
                method: "post",
                isActive: !input.checked,
            });
            input.checked = !input.checked;
        });
    }
    template() {
        const { id, isActive, optionTitle } = this.state;
        return `
    <div>
      <span>${optionTitle}</span>
      <label for="${id}" class="repo-switch">
        <input type="checkbox" id="${id}" ${isActive ? "checked" : ""} />
        <span class="slider"></span>
      </label>
    </div>
    `;
    }
}


/***/ }),

/***/ "./src/view/Home/OptionPopup/OptionSlide/index.ts":
/*!********************************************************!*\
  !*** ./src/view/Home/OptionPopup/OptionSlide/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionSlide: () => (/* reexport safe */ _OptionSlide__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _OptionSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionSlide */ "./src/view/Home/OptionPopup/OptionSlide/OptionSlide.ts");



/***/ }),

/***/ "./src/view/Home/OptionPopup/index.ts":
/*!********************************************!*\
  !*** ./src/view/Home/OptionPopup/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionPopup: () => (/* reexport safe */ _OptionPopup__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _OptionPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionPopup */ "./src/view/Home/OptionPopup/OptionPopup.ts");



/***/ }),

/***/ "./src/view/Home/Popup.ts":
/*!********************************!*\
  !*** ./src/view/Home/Popup.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Footer */ "./src/view/Home/Footer/index.ts");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Main */ "./src/view/Home/Main/index.ts");
/* harmony import */ var _OptionPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @OptionPopup */ "./src/view/Home/OptionPopup/index.ts");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup.css */ "./src/view/Home/Popup.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class Popup extends _Components__WEBPACK_IMPORTED_MODULE_1__.Component {
    createChildComponents() {
        const { user, repoName } = this.state;
        new _Main__WEBPACK_IMPORTED_MODULE_3__.Main({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("MainContainer", this.node),
            state: {
                user,
                repoName,
                setStatePopup: this.setState.bind(this),
            },
        });
        if (repoName) {
            new _OptionPopup__WEBPACK_IMPORTED_MODULE_4__.OptionPopup({
                node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("OptionContainer", this.node),
                state: {},
            });
        }
        new _Footer__WEBPACK_IMPORTED_MODULE_2__.Footer({
            node: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.selectEl)("Footer", this.node),
            state: {},
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { USER: user } = (yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
            const { repoName } = (yield (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
            this.setState({ user, repoName });
        });
    }
    template() {
        const { repoName } = this.state;
        return `
    <div id="root" >
      <MainContainer  class="main-container"></MainContainer>
      ${repoName
            ? `<OptionContainer class="option-container"></OptionContainer>`
            : ``}
      <Footer class="footer"></Footer>
    <div>
  `;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/view/Home/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./src/view/Home/Popup.ts");


new _Popup__WEBPACK_IMPORTED_MODULE_1__["default"]({ node: (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#root"), state: {} });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNaO0FBQzVCLElBQUksOENBQUssR0FBRyxNQUFNLGlEQUFDLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvU3RhdHVzL2ZhaWwuY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvU3RhdHVzL2xvYWRpbmcuY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvU3RhdHVzL3N1Y2Nlc3MuY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9Gb290ZXIvRm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9Mb2dvL0xvZ28uY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL01haW4uY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvQ3JlYXRlTmV3UmVwby9DcmVhdGVOZXdSZXBvLmNzcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L1JlcG9zaXRvcnkuY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0T2xkUmVwby9TZWxlY3RPbGRSZXBvLmNzcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L1NlbGVjdFR5cGUvU2VsZWN0VHlwZS5jc3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL09wdGlvblBvcHVwL09wdGlvblBvcHVwLmNzcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvT3B0aW9uUG9wdXAvT3B0aW9uU2xpZGUvT3B0aW9uU2xpZGUuY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9Qb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQ29tcG9uZW50cy9TdGF0dXMvZmFpbC5jc3M/Y2Q5ZSIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9Db21wb25lbnRzL1N0YXR1cy9sb2FkaW5nLmNzcz82ZTVmIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvU3RhdHVzL3N1Y2Nlc3MuY3NzPzBlNTAiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL0Zvb3Rlci9Gb290ZXIuY3NzP2ZkNjciLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vTG9nby9Mb2dvLmNzcz82NjhjIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL01haW4uY3NzP2ViY2QiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vUmVwb3NpdG9yeS9DcmVhdGVOZXdSZXBvL0NyZWF0ZU5ld1JlcG8uY3NzP2IwOWUiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vUmVwb3NpdG9yeS9SZXBvc2l0b3J5LmNzcz84Nzg0Iiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0T2xkUmVwby9TZWxlY3RPbGRSZXBvLmNzcz9jZGM1Iiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0VHlwZS9TZWxlY3RUeXBlLmNzcz8yY2MyIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9PcHRpb25Qb3B1cC9PcHRpb25Qb3B1cC5jc3M/OTYyNyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvT3B0aW9uUG9wdXAvT3B0aW9uU2xpZGUvT3B0aW9uU2xpZGUuY3NzP2VkMDgiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL1BvcHVwLmNzcz8zMzk1Iiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQVBJL2dldFJlcUFQSS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9BUEkvcG9zdFJlcUFQSS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9Db21wb25lbnRzL0J1dHRvbi9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQ29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQvQ29tcG9uZW50LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0NvbXBvbmVudHMvU3RhdHVzL1N0YXR1cy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9Db21wb25lbnRzL1N0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9Db21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZEFQSS9nZXRSZXFCYWNrZ3JvdW5kQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9jaHJvbWVVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9qc1V0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9Gb290ZXIvRm9vdGVyLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9Gb290ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vTG9nby9Mb2dvLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL0xvZ28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vTWFpbi50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L0NyZWF0ZU5ld1JlcG8vQ3JlYXRlTmV3UmVwby50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L0NyZWF0ZU5ld1JlcG8vVmVyaWZ5TWVzc2FnZS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L0NyZWF0ZU5ld1JlcG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vUmVwb3NpdG9yeS9SZXBvc2l0b3J5LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0T2xkUmVwby9TZWxlY3RPbGRSZXBvLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0T2xkUmVwby9pbmRleC50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L1NlbGVjdFR5cGUvU2VsZWN0VHlwZS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L1NlbGVjdFR5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL01haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL09wdGlvblBvcHVwL09wdGlvblBvcHVwLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9PcHRpb25Qb3B1cC9PcHRpb25TbGlkZS9PcHRpb25TbGlkZS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvT3B0aW9uUG9wdXAvT3B0aW9uU2xpZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdmlldy9Ib21lL09wdGlvblBvcHVwL2luZGV4LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3ZpZXcvSG9tZS9Qb3B1cC50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy92aWV3L0hvbWUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mYWlsLWVucm9sbCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTA0cHg7XG4gIHRvcDogLTQ0cHg7XG59XG5cbi5mYWlsLWVucm9sbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmZhaWwtZW5yb2xsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL1N0YXR1cy9mYWlsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZhaWwtZW5yb2xsIHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwNHB4O1xcbiAgdG9wOiAtNDRweDtcXG59XFxuXFxuLmZhaWwtZW5yb2xsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uZmFpbC1lbnJvbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9hZGluZy1lbnJvbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogOTdweDtcbiAgdG9wOiAtNDRweDtcbiAgd2lkdGg6IDgwcHg7XG5cbn1cbi5sb2FkaW5nLWVucm9sbCA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogI2FmYThkZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWVucm9sbCAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG5cbiAgJjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xuICB9XG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcbiAgfVxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZy1lbnJvbGwge1xuICAwJSB7XG4gICAgdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgdG9wOiAyNHB4O1xuICAgIGhlaWdodDogN3B4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL1N0YXR1cy9sb2FkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXOztBQUViO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvRUFBb0U7O0VBRXBFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsU0FBUztJQUNULFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkaW5nLWVucm9sbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA5N3B4O1xcbiAgdG9wOiAtNDRweDtcXG4gIHdpZHRoOiA4MHB4O1xcblxcbn1cXG4ubG9hZGluZy1lbnJvbGwgPiBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDRweDtcXG4gIGJhY2tncm91bmQ6ICNhZmE4ZGU7XFxuICBhbmltYXRpb246IGxvYWRpbmctZW5yb2xsIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcXG5cXG4gICY6bnRoLWNoaWxkKDEpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XFxuICB9XFxuICAmOm50aC1jaGlsZCgyKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xcbiAgfVxcbiAgJjpudGgtY2hpbGQoMykge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZy1lbnJvbGwge1xcbiAgMCUge1xcbiAgICB0b3A6IDhweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgfVxcbiAgNTAlLFxcbiAgMTAwJSB7XFxuICAgIHRvcDogMjRweDtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN1Y2Nlc3MtZW5yb2xsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwNHB4O1xuICB0b3A6IC00NHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZmE4ZGU7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNhZmE4ZGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9Db21wb25lbnRzL1N0YXR1cy9zdWNjZXNzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdWNjZXNzLWVucm9sbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMDRweDtcXG4gIHRvcDogLTQ0cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZmE4ZGU7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjYWZhOGRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb290ZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvSG9tZS9Gb290ZXIvRm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubG9nby1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tdGV4dC1sb2dpbmVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ28tdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dvLXJlcG8tbG9naW5lZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNhZWI0Yjg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvSG9tZS9NYWluL0xvZ28vTG9nby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Y7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ28tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogOTBweDtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby10ZXh0LWxvZ2luZWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5sb2dvLXJlcG8tbG9naW5lZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNhZWI0Yjg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUwcHggMCA1cHg7XG59XG5cbi5yZXBvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L0hvbWUvTWFpbi9NYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNTBweCAwIDVweDtcXG59XFxuXFxuLnJlcG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5ldy1yZXBvLWNyZWF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uZXctcmVwby1pbnB1dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xuICB9XG59XG5cbi5jYW5jZWwtcmVwby1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiAjZDI1MTUxO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGQzZDM3O1xuICB9XG59XG5cbi52ZXJpZnktcmVwby1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzVlYzVmZDtcbiAgfVxufVxuXG4udmVyaWZ5LW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJnYigxODksIDM2LCAzNik7XG59XG5cblxuXG5cbi5zdWNjZXNzLWVucm9sbCB7XG59XG5cbi5mYWlsLWVucm9sbCB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L0NyZWF0ZU5ld1JlcG8vQ3JlYXRlTmV3UmVwby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFlBQVk7RUFDWjtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZjtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5ldy1yZXBvLWNyZWF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmV3LXJlcG8taW5wdXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgJjpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xcbiAgfVxcbn1cXG5cXG4uY2FuY2VsLXJlcG8tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogI2QyNTE1MTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNkZDNkMzc7XFxuICB9XFxufVxcblxcbi52ZXJpZnktcmVwby1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzVlYzVmZDtcXG4gIH1cXG59XFxuXFxuLnZlcmlmeS1tZXNzYWdlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiByZ2IoMTg5LCAzNiwgMzYpO1xcbn1cXG5cXG5cXG5cXG5cXG4uc3VjY2Vzcy1lbnJvbGwge1xcbn1cXG5cXG4uZmFpbC1lbnJvbGwge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yZXBvLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ucmVwby1jb250ZW50IHtcbn1cblxuLmJlZm9yZS1zZWxlY3QtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgY3Vyc29yOiBhdXRvO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5cblxuLm9sZC1yZXBvLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L0hvbWUvTWFpbi9SZXBvc2l0b3J5L1JlcG9zaXRvcnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJlcG8tdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5yZXBvLWNvbnRlbnQge1xcbn1cXG5cXG4uYmVmb3JlLXNlbGVjdC10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IGF1dG87XFxuICBmb250LXNpemU6IDExcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuXFxuLm9sZC1yZXBvLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZHJvcGRvd24tc2VsZWN0LXJlcG8ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA1MyU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgdG9wOiAxNzNweDtcbiAgICByaWdodDogNzdweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHRvcDogMTczcHg7XG4gICAgcmlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlIHtcbiAgJjo6YmVmb3JlIHtcbiAgICByaWdodDogNzJweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgcmlnaHQ6IDc3cHg7XG4gIH1cbn1cblxuLnNlbGVjdC1yZXBvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xuICB9XG59XG5cbi5vcHRpb25zLXJlcG8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjAxcztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlIC5vcHRpb25zLXJlcG8ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ub3B0aW9uLXJlcG8ge1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5uZXctcmVwby1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kOiAjNTFkMjk4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzM3ZGQ5NTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy9Ib21lL01haW4vUmVwb3NpdG9yeS9TZWxlY3RPbGRSZXBvL1NlbGVjdE9sZFJlcG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7O0VBRVY7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLFlBQVk7RUFDWjtJQUNFLG1DQUFtQztFQUNyQztBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjs7RUFFakI7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQjtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bi1zZWxlY3QtcmVwbyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNTMlO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB0b3A6IDE3M3B4O1xcbiAgICByaWdodDogNzdweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICB9XFxuXFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgdG9wOiAxNzNweDtcXG4gICAgcmlnaHQ6IDcycHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvLmFjdGl2ZSB7XFxuICAmOjpiZWZvcmUge1xcbiAgICByaWdodDogNzJweDtcXG4gIH1cXG4gICY6OmFmdGVyIHtcXG4gICAgcmlnaHQ6IDc3cHg7XFxuICB9XFxufVxcblxcbi5zZWxlY3QtcmVwbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XFxuICB9XFxufVxcblxcbi5vcHRpb25zLXJlcG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMDFzO1xcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlIC5vcHRpb25zLXJlcG8ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vcHRpb24tcmVwbyB7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgJjpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZDogIzYyYmFlYTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi5uZXctcmVwby1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kOiAjNTFkMjk4O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzM3ZGQ5NTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZHJvcGRvd24tc2VsZWN0LXR5cGUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHRvcDogMTc0cHg7XG4gICAgcmlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgdG9wOiAxNzRweDtcbiAgICByaWdodDogMTk2cHg7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICAmOjpiZWZvcmUge1xuICAgIHJpZ2h0OiAxOTZweDtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgcmlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbi5zZWxlY3QtdHlwZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2JkYjdkZjtcbiAgfVxufVxuXG4ub3B0aW9ucy10eXBlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4wMXM7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmUgLm9wdGlvbnMtdHlwZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5vcHRpb24tdHlwZSB7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICM2MmJhZWE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvSG9tZS9NYWluL1JlcG9zaXRvcnkvU2VsZWN0VHlwZS9TZWxlY3RUeXBlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7O0VBRWpCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsWUFBWTtFQUNaO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQjtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bi1zZWxlY3QtdHlwZSB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tcmlnaHQ6IDFweDtcXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgdG9wOiAxNzRweDtcXG4gICAgcmlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB0b3A6IDE3NHB4O1xcbiAgICByaWdodDogMTk2cHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICAmOjpiZWZvcmUge1xcbiAgICByaWdodDogMTk2cHg7XFxuICB9XFxuICAmOjphZnRlciB7XFxuICAgIHJpZ2h0OiAyMDBweDtcXG4gIH1cXG59XFxuXFxuLnNlbGVjdC10eXBlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2JkYjdkZjtcXG4gIH1cXG59XFxuXFxuLm9wdGlvbnMtdHlwZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDMwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMDFzO1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlIC5vcHRpb25zLXR5cGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vcHRpb24tdHlwZSB7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgJjpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYmFja2dyb3VuZDogIzYyYmFlYTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm9wdGlvbi1oZWFkZXIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTVweCAxcHggNXB4IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3B0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm9wdGlvbi1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDdweCAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy9Ib21lL09wdGlvblBvcHVwL09wdGlvblBvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5vcHRpb24taGVhZGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDE1cHggMXB4IDVweCAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ub3B0aW9uLWJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDdweCAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vcHRpb24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmVwby1zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5yZXBvLXN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGxlZnQ6IDMuNXB4O1xuICAgIGJvdHRvbTogMi41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxufVxuXG5cbi5yZXBvLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmE4ZGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnJlcG8tc3dpdGNoIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2FmYThkZTtcbn1cblxuLnJlcG8tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L0hvbWUvT3B0aW9uUG9wdXAvT3B0aW9uU2xpZGUvT3B0aW9uU2xpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZ0JBQWdCOztFQUVoQjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtFQUNsQjtBQUNGOzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3B0aW9uIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnJlcG8tc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5yZXBvLXN3aXRjaCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgbGVmdDogMy41cHg7XFxuICAgIGJvdHRvbTogMi41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gIH1cXG59XFxuXFxuXFxuLnJlcG8tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmE4ZGU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcblxcbi5yZXBvLXN3aXRjaCBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjYWZhOGRlO1xcbn1cXG5cXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMzEuOTFkZWcsICNhZmE4ZGUgNC4zMSUsICM5NTg2ZWYgMTMwLjEzJSk7XG59XG5cblxuXG5cblxuXG5cbi5lbnJvbGwtcmVwbyB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogIzAyYmM2ODtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5vcHRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ2M2Y2YiA1MC4zMSUsICMwMDAgMTMwLjEzJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L0hvbWUvUG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0VBQXNFO0FBQ3hFOzs7Ozs7OztBQVFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixvRUFBb0U7QUFDdEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzMS45MWRlZywgI2FmYThkZSA0LjMxJSwgIzk1ODZlZiAxMzAuMTMlKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmVucm9sbC1yZXBvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMDJiYzY4O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5vcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0NjNmNmIgNTAuMzElLCAjMDAwIDEzMC4xMyUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mYWlsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmFpbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1Y2Nlc3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWNjZXNzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Gb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ28uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ3JlYXRlTmV3UmVwby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NyZWF0ZU5ld1JlcG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlcG9zaXRvcnkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXBvc2l0b3J5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWxlY3RPbGRSZXBvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0T2xkUmVwby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VsZWN0VHlwZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlbGVjdFR5cGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL09wdGlvblBvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vT3B0aW9uUG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL09wdGlvblNsaWRlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vT3B0aW9uU2xpZGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSSB9IGZyb20gXCIuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmRBUEkvZ2V0UmVxQmFja2dyb3VuZEFQSVwiO1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZW5kQ2hyb21lTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgJCwgaHRtbEVudGl0eURlY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlclwiO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IChjb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJSZXBvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLmRlZmF1bHRfYnJhbmNoO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UmVmZXJlbmNlID0gKGJyYW5jaCA9IFwibWFpblwiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmL2hlYWRzLyR7YnJhbmNofWA7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcmVmU0hBOiByZXMub2JqZWN0LnNoYSwgcmVmOiByZXMucmVmIH07XG59KTtcbmV4cG9ydCBjb25zdCBnZXRCYWVranVuU29sdmVkRGF0YSA9IChzdWJtaXNzaW9uSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvc291cmNlL2Rvd25sb2FkLyR7c3VibWlzc2lvbklkfWA7XG4gICAgY29uc3QgY29kZSA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtRGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcIlNlYy1GZXRjaC1Nb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIHJldHVybiBjb2RlO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbiA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH1gO1xuICAgIGNvbnN0IGRvYyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtZGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1tb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIGNvbnN0IGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRvYywgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgaW5wdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9pbnB1dFwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICBjb25zdCBvdXRwdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9vdXRwdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9kZXNjcmlwdGlvblwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICByZXR1cm4gZGVzY3JpcHRpb24gKyBpbnB1dCArIG91dHB1dDtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYyA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogXCJiYWVranVuXCIsXG4gICAgICAgIHRhc2s6IFwiZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjXCIsXG4gICAgICAgIHByb2JsZW1JZCxcbiAgICB9KTtcbiAgICAvLyDsnoTsi5xcbiAgICBjb25zdCBhID0gZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJKHByb2JsZW1JZCk7XG4gICAgY29uc29sZS5sb2coYSk7XG4gICAgLy9cbiAgICByZXR1cm4gZGF0YTtcbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7IGI2NEVuY29kZVVuaWNvZGUgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEJyYW5jaCwgZ2V0UmVmZXJlbmNlIH0gZnJvbSBcIi4vZ2V0UmVxQVBJXCI7XG5leHBvcnQgY29uc3QgY29tbWl0Q29kZVRvUmVwbyA9ICh7IGRpcmVjdG9yeSwgY29kZSwgbWVzc2FnZSwgcmVhZE1lLCBmaWxlTmFtZSwgfSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJyYW5jaCA9IHlpZWxkIGdldERlZmF1bHRCcmFuY2goKTtcbiAgICBjb25zdCB7IHJlZlNIQSwgcmVmIH0gPSB5aWVsZCBnZXRSZWZlcmVuY2UoZGVmYXVsdEJyYW5jaCk7XG4gICAgY29uc3Qgc291cmNlQ29kZSA9IHlpZWxkIGNyZWF0ZUJsb2IoY29kZSwgZmlsZU5hbWUsIGRpcmVjdG9yeSk7XG4gICAgY29uc3Qgc291cmNlUmVhZE1lID0geWllbGQgY3JlYXRlQmxvYihyZWFkTWUsIFwiUkVBRE1FLm1kXCIsIGRpcmVjdG9yeSk7XG4gICAgY29uc3QgdHJlZVNIQSA9IHlpZWxkIGNyZWF0ZVRyZWUocmVmU0hBLCBbc291cmNlQ29kZSwgc291cmNlUmVhZE1lXSk7XG4gICAgY29uc3QgY29tbWl0U0hBID0geWllbGQgY3JlYXRlQ29tbWl0KG1lc3NhZ2UsIHRyZWVTSEEsIHJlZlNIQSk7XG4gICAgeWllbGQgdXBkYXRlSGVhZChyZWYsIGNvbW1pdFNIQSk7XG59KTtcbmV4cG9ydCBjb25zdCBwb3N0TmV3UmVwbyA9IChuYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIjtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcml2YXRlOiB0cnVlLFxuICAgICAgICBhdXRvX2luaXQ6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuyVjOqzoOumrOymmCDsnpDrj5kg6riw66GdIOuztOq0gOyGjFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG4vLyBleHBvcnQgdHlwZSBOZXdCbG9iID0ge1xuLy8gICBwYXRoOiBzdHJpbmc7XG4vLyAgIHNoYTogc3RyaW5nO1xuLy8gICBtb2RlOiBzdHJpbmc7XG4vLyAgIHR5cGU6IHN0cmluZztcbi8vIH07XG5leHBvcnQgY29uc3QgY3JlYXRlQmxvYiA9IChjb250ZW50LCBmaWxlTmFtZSwgZGlyZWN0b3J5KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBwYXRoID0gYCR7ZGlyZWN0b3J5fS8ke2ZpbGVOYW1lfWA7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvYmxvYnNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRlbnQ6IGI2NEVuY29kZVVuaWNvZGUoY29udGVudCksXG4gICAgICAgIGVuY29kaW5nOiBcImJhc2U2NFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4geyBwYXRoLCBzaGE6IHJlcy5zaGEsIG1vZGU6IFwiMTAwNjQ0XCIsIHR5cGU6IFwiYmxvYlwiIH07XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmVlID0gKHJlZlNIQSwgdHJlZV9pdGVtcykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3RyZWVzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB0cmVlOiB0cmVlX2l0ZW1zLCBiYXNlX3RyZWU6IHJlZlNIQSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21taXQgPSAobWVzc2FnZSwgdHJlZVNIQSwgcmVmU0hBKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvY29tbWl0c2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSwgdHJlZTogdHJlZVNIQSwgcGFyZW50OiBbcmVmU0hBXSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVIZWFkID0gKHJlZiwgY29tbWl0U0hBLCBmb3JjZSA9IHRydWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9yZWZzL2hlYWRzL21haW5gO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHNoYTogY29tbWl0U0hBLCBmb3JjZSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJDb21wb25lbnRzL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzZXRFdmVudCgpIHtcbiAgICAgICAgY29uc3QgeyBvbkNsaWNrIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gYDxkaXY+JHtuYW1lID8gbmFtZSA6IFwi67KE7Yq8XCJ9PC9kaXY+YDtcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhZGRDb21wb25lbnRzLCBpc1NhbWVUd28gfSBmcm9tIFwiLi4vLi4vdXRpbHMvanNVdGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5vZGUsIHN0YXRlIH0pIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0NoYW5nZVN0YXRlKG5ld1N0YXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIGNoZWNrQ2hhbmdlU3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld1N0YXRlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2tleX3ripQg7IOB7YOc7JeQIOyhtOyerO2VmOyngCDslYrripQg67OA7IiY7J6F64uI64ukLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1NhbWVUd28odGhpcy5zdGF0ZVtrZXldLCBuZXdTdGF0ZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBhZGRDb21wb25lbnRzLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnQoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xuICAgIH1cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7IH1cbiAgICB1cGRhdGUoKSB7IH1cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHNldEV2ZW50KCkgeyB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuL2xvYWRpbmcuY3NzXCI7XG5pbXBvcnQgXCIuL3N1Y2Nlc3MuY3NzXCI7XG5pbXBvcnQgXCIuL2ZhaWwuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhdHVzIH0gZnJvbSBcIi4vU3RhdHVzXCI7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9Db21wb25lbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vU3RhdHVzXCI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNBUEkgPSAocHJvYmxlbUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vc29sdmVkLmFjL2FwaS92My9wcm9ibGVtL3Nob3c/cHJvYmxlbUlkPSR7cHJvYmxlbUlkfWA7XG4gICAgcmV0dXJuIHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xufSk7XG4iLCJleHBvcnQgY29uc3QgZXJyb3JNc2cgPSB7XG4gICAgTm90Rm91bmRSZXBvOiBcIlJlcG9zaXRvcnnqsIAg7JWE7KeBIOyEpOygleuQmOyngCDslYrslZjsirXri4jri6QuXCIsXG59O1xuZXhwb3J0IGNvbnN0IGNocm9tZVN0b3JhZ2VJZCA9IHtcbiAgICBiYWVranVuUHJvYmxlbUlkOiBcIkJhZWtqdW5Qcm9ibGVtSWRcIixcbiAgICByZXBvOiBcInJlcG9OYW1lXCIsXG4gICAgaXNUaW1lcjogXCJpc1RpbWVyXCIsXG4gICAgaXNVcGxvYWQ6IFwiaXNVcGxvYWRcIixcbiAgICBzdWJtaXRlZFByb2JsZW1JZDogXCJzdWJtaXRlZFByb2JsZW1cIixcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChfYSwgZm4pID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9ICgpID0+IHsgfTsgfVxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChrZXksIGZuKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldLCBmbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KTtcbn07XG5leHBvcnQgY29uc3Qgc2VuZENocm9tZU1lc3NhZ2UgPSAoX2EsIGNhbGxiYWNrRm4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChjYWxsYmFja0ZuKSB7XG4gICAgICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNhbGxiYWNrRm4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldENocm9tZU1lc3NhZ2UgPSAoZm4pID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZm4pO1xufTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2pzVXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY2hyb21lVXRpbHNcIjtcbiIsImV4cG9ydCBjb25zdCAkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCAkJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnRzKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudHPrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRFbEJ5SWQgPSAodGFyZ2V0SWQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldElkfWlk66W8IOqwgOynhCDsl5jrpqzrqLztirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgZW5yb2xsRXZlbnQgPSAoZWwsIHR5cGUsIGZuLCBvcHRpb25zKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgb3B0aW9ucyk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCBiNjRFbmNvZGVVbmljb2RlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOT1BLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKGAweCR7cH1gKSk7XG4gICAgfSkpO1xufTtcbmV4cG9ydCBjb25zdCBjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhciA9ICh0ZXh0KSA9PiB7XG4gICAgLy8gc2luZ2xlQ2hhciB0byBkb3VibGVDaGFyIG1hcHBpbmdcbiAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgIFwiIVwiOiBcIu+8gVwiLFxuICAgICAgICBcIiVcIjogXCLvvIVcIixcbiAgICAgICAgXCImXCI6IFwi77yGXCIsXG4gICAgICAgIFwiKFwiOiBcIu+8iFwiLFxuICAgICAgICBcIilcIjogXCLvvIlcIixcbiAgICAgICAgXCIqXCI6IFwi77yKXCIsXG4gICAgICAgIFwiK1wiOiBcIu+8i1wiLFxuICAgICAgICBcIixcIjogXCLvvIxcIixcbiAgICAgICAgXCItXCI6IFwi77yNXCIsXG4gICAgICAgIFwiLlwiOiBcIu+8jlwiLFxuICAgICAgICBcIi9cIjogXCLvvI9cIixcbiAgICAgICAgXCI6XCI6IFwi77yaXCIsXG4gICAgICAgIFwiO1wiOiBcIu+8m1wiLFxuICAgICAgICBcIjxcIjogXCLvvJxcIixcbiAgICAgICAgXCI9XCI6IFwi77ydXCIsXG4gICAgICAgIFwiPlwiOiBcIu+8nlwiLFxuICAgICAgICBcIj9cIjogXCLvvJ9cIixcbiAgICAgICAgXCJAXCI6IFwi77ygXCIsXG4gICAgICAgIFwiW1wiOiBcIu+8u1wiLFxuICAgICAgICBcIlxcXFxcIjogXCLvvLxcIixcbiAgICAgICAgXCJdXCI6IFwi77y9XCIsXG4gICAgICAgIFwiXlwiOiBcIu+8vlwiLFxuICAgICAgICBfOiBcIu+8v1wiLFxuICAgICAgICBcImBcIjogXCLvvYBcIixcbiAgICAgICAgXCJ7XCI6IFwi772bXCIsXG4gICAgICAgIFwifFwiOiBcIu+9nFwiLFxuICAgICAgICBcIn1cIjogXCLvvZ1cIixcbiAgICAgICAgXCJ+XCI6IFwi772eXCIsXG4gICAgICAgIFwiIFwiOiBcIuKAhVwiLCAvLyDqs7XrsLHrp4wg7KCE6rCB66y47J6Q6rCAIOyVhOuLjCBGT1VSLVBFUi1FTSBTUEFDReuhnCDrs4DtmZhcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1shJSYoKSorLFxcLS4vOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+IF0vZywgKGspID0+IG1hcFtrXSk7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWVUaW1lciA9IChjYWxsYmFja0ZuKSA9PiB7XG4gICAgbGV0IFtzZWNzLCBtaW5zLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlY3MrKztcbiAgICAgICAgaWYgKHNlY3MgPT0gNjApIHtcbiAgICAgICAgICAgIHNlY3MgPSAwO1xuICAgICAgICAgICAgbWlucysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW5zID09IDYwKSB7XG4gICAgICAgICAgICBtaW5zID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMudG9TdHJpbmcoKSA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5zIDwgMTAgPyBcIjBcIiArIG1pbnMudG9TdHJpbmcoKSA6IG1pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcyA9IHNlY3MgPCAxMCA/IFwiMFwiICsgc2Vjcy50b1N0cmluZygpIDogc2Vjcy50b1N0cmluZygpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyID0gKHN0YXJ0VGltZSwgY2FsbGJhY2tGbikgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHsgaCwgbSwgcyB9ID0gZ2V0VGltZURpZmYoc3RhcnRUaW1lLCBub3dUaW1lKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBpbnNlcnRIVE1MID0gKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSkgPT4ge1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uLCBodG1sKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0VGltZURpZmYgPSAoc3RhcnRUaW1lLCBub3dUaW1lKSA9PiB7XG4gICAgbGV0IFtob3VyLCBtaW4sIHNlY10gPSBbMCwgMCwgMF07XG4gICAgbGV0IHRpbWVEaWZmU2VjID0gTWF0aC5mbG9vcigobm93VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgICBpZiAodGltZURpZmZTZWMgPiAzNjAwKSB7XG4gICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gMzYwMCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSAzNjAwO1xuICAgIH1cbiAgICBpZiAodGltZURpZmZTZWMgPiA2MCkge1xuICAgICAgICBtaW4gPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gNjApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgNjA7XG4gICAgfVxuICAgIHNlYyA9IHRpbWVEaWZmU2VjO1xuICAgIGNvbnN0IGggPSBob3VyIDwgMTAgPyBcIjBcIiArIGhvdXIudG9TdHJpbmcoKSA6IGhvdXIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtID0gbWluIDwgMTAgPyBcIjBcIiArIG1pbi50b1N0cmluZygpIDogbWluLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcyA9IHNlYyA8IDEwID8gXCIwXCIgKyBzZWMudG9TdHJpbmcoKSA6IHNlYy50b1N0cmluZygpO1xuICAgIHJldHVybiB7IGgsIG0sIHMgfTtcbn07XG5leHBvcnQgY29uc3QgaGFzRWxlbWVudCA9ICh0YXJnZXQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBodG1sRW50aXR5RGVjb2RlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCB1bmVzY2FwZWQgPSB7XG4gICAgICAgIFwiJmFtcDtcIjogXCImXCIsXG4gICAgICAgIFwiJiMzODtcIjogXCImXCIsXG4gICAgICAgIFwiJmx0O1wiOiBcIjxcIixcbiAgICAgICAgXCImIzYwO1wiOiBcIjxcIixcbiAgICAgICAgXCImZ3Q7XCI6IFwiPlwiLFxuICAgICAgICBcIiYjNjI7XCI6IFwiPlwiLFxuICAgICAgICBcIiZhcG9zO1wiOiBcIidcIixcbiAgICAgICAgXCImIzM5O1wiOiBcIidcIixcbiAgICAgICAgXCImcXVvdDtcIjogJ1wiJyxcbiAgICAgICAgXCImIzM0O1wiOiAnXCInLFxuICAgICAgICBcIiZuYnNwO1wiOiBcIiBcIixcbiAgICAgICAgXCImIzE2MDtcIjogXCIgXCIsXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MCk7L2csICh3b3JkKSA9PiB1bmVzY2FwZWRbd29yZF0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRRdWVyeVBhcmFtID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChxdWVyeSk7XG4gICAgaWYgKCFwYXJhbSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgRm91bmQgUXVlcnkgJHtxdWVyeX1gKTtcbiAgICByZXR1cm4gcGFyYW07XG59O1xuZXhwb3J0IGNvbnN0IFNPTFZFREFDX0xFVkVMID0ge1xuICAgIDA6IFwiVW5yYXRlZFwiLFxuICAgIDE6IFwiQnJvbnplIFZcIixcbiAgICAyOiBcIkJyb256ZSBJVlwiLFxuICAgIDM6IFwiQnJvbnplIElJSVwiLFxuICAgIDQ6IFwiQnJvbnplIElJXCIsXG4gICAgNTogXCJCcm9uemUgSVwiLFxuICAgIDY6IFwiU2lsdmVyIFZcIixcbiAgICA3OiBcIlNpbHZlciBJVlwiLFxuICAgIDg6IFwiU2lsdmVyIElJSVwiLFxuICAgIDk6IFwiU2lsdmVyIElJXCIsXG4gICAgMTA6IFwiU2lsdmVyIElcIixcbiAgICAxMTogXCJHb2xkIFZcIixcbiAgICAxMjogXCJHb2xkIElWXCIsXG4gICAgMTM6IFwiR29sZCBJSUlcIixcbiAgICAxNDogXCJHb2xkIElJXCIsXG4gICAgMTU6IFwiR29sZCBJXCIsXG4gICAgMTY6IFwiUGxhdGludW0gVlwiLFxuICAgIDE3OiBcIlBsYXRpbnVtIElWXCIsXG4gICAgMTg6IFwiUGxhdGludW0gSUlJXCIsXG4gICAgMTk6IFwiUGxhdGludW0gSUlcIixcbiAgICAyMDogXCJQbGF0aW51bSBJXCIsXG4gICAgMjE6IFwiRGlhbW9uZCBWXCIsXG4gICAgMjI6IFwiRGlhbW9uZCBJVlwiLFxuICAgIDIzOiBcIkRpYW1vbmQgSUlJXCIsXG4gICAgMjQ6IFwiRGlhbW9uZCBJSVwiLFxuICAgIDI1OiBcIkRpYW1vbmQgSVwiLFxuICAgIDI2OiBcIlJ1YnkgVlwiLFxuICAgIDI3OiBcIlJ1YnkgSVZcIixcbiAgICAyODogXCJSdWJ5IElJSVwiLFxuICAgIDI5OiBcIlJ1YnkgSUlcIixcbiAgICAzMDogXCJSdWJ5IElcIixcbiAgICAzMTogXCJNYXN0ZXJcIixcbn07XG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0ge1xuICAgIOyVhO2drDogXCJhaGV1aVwiLFxuICAgIOyXhOykgOyLnTogXCJ1bW1cIixcbiAgICBBZGE6IFwiYWRhXCIsXG4gICAgXCJBbGdvbCA2OFwiOiBcImFcIixcbiAgICBBUEVDT0RFOiBcImFwZVwiLFxuICAgIEFzc2VtYmx5OiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICgzMmJpdClcIjogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoNjRiaXQpXCI6IFwib1wiLFxuICAgIGF3azogXCJhd2tcIixcbiAgICBCYXNoOiBcInNoXCIsXG4gICAgYmM6IFwiYmNcIixcbiAgICBCZWZ1bmdlOiBcImJmXCIsXG4gICAgQm9vOiBcImJvb1wiLFxuICAgIFwiQnJhaW5mKiprXCI6IFwiYmZcIixcbiAgICBDOiBcImNcIixcbiAgICBcIkMjXCI6IFwiY3NcIixcbiAgICBcIkMjIDMuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgNi4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA5LjAgKC5ORVQpXCI6IFwiY3NcIixcbiAgICBcIkMrK1wiOiBcImNjXCIsXG4gICAgXCJDKysxMVwiOiBcImNjXCIsXG4gICAgXCJDKysxMSAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE0XCI6IFwiY2NcIixcbiAgICBcIkMrKzE0IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTdcIjogXCJjY1wiLFxuICAgIFwiQysrMTcgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysyMFwiOiBcImNjXCIsXG4gICAgXCJDKysyMCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzk4XCI6IFwiY2NcIixcbiAgICBcIkMrKzk4IChDbGFuZylcIjogXCJjY1wiLFxuICAgIEMxMTogXCJjXCIsXG4gICAgXCJDMTEgKENsYW5nKVwiOiBcImNcIixcbiAgICBDMng6IFwiY1wiLFxuICAgIFwiQzJ4IChDbGFuZylcIjogXCJjXCIsXG4gICAgQzkwOiBcImNcIixcbiAgICBcIkM5MCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5OTogXCJjXCIsXG4gICAgXCJDOTkgKENsYW5nKVwiOiBcImNcIixcbiAgICBDb2JvbDogXCJjb2JcIixcbiAgICBDb2JyYTogXCJjb2JyYVwiLFxuICAgIENvcTogXCJ2XCIsXG4gICAgQ3J5c3RhbDogXCJjclwiLFxuICAgIEQ6IFwiZFwiLFxuICAgIFwiRCAoTERDKVwiOiBcImRcIixcbiAgICBcIkYjXCI6IFwiZnNcIixcbiAgICBcIkYjICguTkVUKVwiOiBcImZzXCIsXG4gICAgXCJGIyAoTW9ubylcIjogXCJmc1wiLFxuICAgIEZvcnRyYW46IFwiZlwiLFxuICAgIEZyZWVCQVNJQzogXCJiYXNcIixcbiAgICBHbzogXCJnb1wiLFxuICAgIFwiR28gKGdjY2dvKVwiOiBcImdvXCIsXG4gICAgR29sZnNjcmlwdDogXCJnc1wiLFxuICAgIEhhc2tlbGw6IFwiaHNcIixcbiAgICBIYXhlOiBcInB5XCIsXG4gICAgSU5URVJDQUw6IFwiaVwiLFxuICAgIEphdmE6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxMVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgMTVcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDhcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDggKE9wZW5KREspXCI6IFwiamF2YVwiLFxuICAgIEtvdGxpbjogXCJrdFwiLFxuICAgIFwiS290bGluIChKVk0pXCI6IFwia3RcIixcbiAgICBcIktvdGxpbiAoTmF0aXZlKVwiOiBcImt0XCIsXG4gICAgTE9MQ09ERTogXCJsb2xcIixcbiAgICBMdWE6IFwibHVhXCIsXG4gICAgTWluZWNyYWZ0OiBcIm1jYVwiLFxuICAgIE5lbWVybGU6IFwiblwiLFxuICAgIE5pbXJvZDogXCJuaW1cIixcbiAgICBcIm5vZGUuanNcIjogXCJqc1wiLFxuICAgIFwiT2JqZWN0aXZlLUNcIjogXCJtXCIsXG4gICAgXCJPYmplY3RpdmUtQysrXCI6IFwibW1cIixcbiAgICBPQ2FtbDogXCJtbFwiLFxuICAgIFBhc2NhbDogXCJwYXNcIixcbiAgICBQZXJsOiBcInBsXCIsXG4gICAgUEhQOiBcInBocFwiLFxuICAgIFBpa2U6IFwicGlrZVwiLFxuICAgIFB5UHk6IFwicHlcIixcbiAgICBQeVB5MjogXCJweVwiLFxuICAgIFB5UHkzOiBcInB5XCIsXG4gICAgUHl0aG9uOiBcInB5XCIsXG4gICAgXCJQeXRob24gMlwiOiBcInB5XCIsXG4gICAgXCJQeXRob24gM1wiOiBcInB5XCIsXG4gICAgUmhpbm86IFwianNcIixcbiAgICBSdWJ5OiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOFwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOVwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDJcIjogXCJyYlwiLFxuICAgIFJ1c3Q6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxNVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMThcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE5XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAyMVwiOiBcInJzXCIsXG4gICAgU2NhbGE6IFwic2NhbGFcIixcbiAgICBTY2hlbWU6IFwic2NtXCIsXG4gICAgc2VkOiBcInNlZFwiLFxuICAgIFN3aWZ0OiBcInN3aWZ0XCIsXG4gICAgU3lzdGVtVmVyaWxvZzogXCJzdlwiLFxuICAgIFRjbDogXCJ0Y2xcIixcbiAgICBUZXh0OiBcInR4dFwiLFxuICAgIFR5cGVTY3JpcHQ6IFwidHNcIixcbiAgICBcIlZCLk5FVCAyLjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZCLk5FVCA0LjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpY1wiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWMgKC5ORVQpXCI6IFwidmJcIixcbiAgICBXaGl0ZXNwYWNlOiBcIndzXCIsXG59O1xuZXhwb3J0IGNvbnN0IGdldFJlYWRtZVRleHQgPSAoeyBsZXZlbCwgdGl0bGUsIHNvbHZpbmdUaW1lLCBwcm9ibGVtSWQsIHNwZW50TWVtb3J5LCBzcGVudFRpbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgfSkgPT4gbGV2ZWxcbiAgICA/IGAjIFske2xldmVsfV0gJHt0aXRsZX0gLSAke3Byb2JsZW1JZH0gXFxuXFxuYFxuICAgIDogYCMgJHt0aXRsZX0gLSAke3Byb2JsZW1JZH0gXFxuXFxuYCArXG4gICAgICAgIGBb66y47KCcIOunge2BrF0oaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH0pIFxcblxcbmAgK1xuICAgICAgICBgIyMjIOyEseuKpSDsmpTslb1cXG5cXG5gICtcbiAgICAgICAgYO2Pieq3oCDshozsmpQg66mU66qo66asOiAke3NwZW50TWVtb3J5fSBLQiwgYCArXG4gICAgICAgIGDtj4nqt6Ag7IaM7JqUIOyLnOqwhDogJHtzcGVudFRpbWV9IG1zXFxuXFxuYCArXG4gICAgICAgIGDtkoDsnbTsi5zqsIQ6ICR7c29sdmluZ1RpbWV9XFxuXFxuYCArXG4gICAgICAgIGAjIyMg67aE66WYXFxuXFxuYCArXG4gICAgICAgIGAke2NhdGVnb3J5fVxcblxcbmAgK1xuICAgICAgICBgIyMjIOusuOygnCDshKTrqoVcXG5cXG4ke2Rlc2NyaXB0aW9ufVxcblxcbmA7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tcG9uZW50cygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IG5ld05vZGUgPSBBcnJheS5mcm9tKG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGhpcy50ZW1wbGF0ZSgpLCBcInRleHQvaHRtbFwiKS5ib2R5LmNoaWxkcmVuKTtcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGVbMF0sIG5vZGUubmV4dFNpYmxpbmcpO1xuICAgIHRoaXMubm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgY29uc3Qgbm9kZUNsYXNzID0gbm9kZS5jbGFzc0xpc3QudmFsdWUudHJpbSgpO1xuICAgIGlmIChub2RlQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IG5vZGVDbGFzcztcbiAgICB9XG4gICAgbm9kZS5yZW1vdmUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVUd28oYSwgYikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuL0Zvb3Rlci5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc2V0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vSEFOSVRaL1BTSGVscGVyXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyLW5hbWVcIj5QU0hlbHBlcjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuIiwiaW1wb3J0IHsgc2VsZWN0RWwsIHNlbmRDaHJvbWVNZXNzYWdlIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuL0xvZ28uY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzZXRFdmVudCgpIHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCByZXBvTmFtZSwgc2V0U3RhdGVQb3B1cCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgc2VsZWN0RWwoXCIubG9nby1idXR0b25cIiwgdGhpcy5ub2RlKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPSR7cHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRH1gKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXBvTmFtZSkge1xuICAgICAgICAgICAgc2VsZWN0RWwoXCIubG9nby1yZXBvLWxvZ2luZWRcIiwgdGhpcy5ub2RlKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VuZENocm9tZU1lc3NhZ2UoeyBhY3Rpb246IFwicmVwb05hbWVcIiwgcmVwb05hbWU6IFwiXCIgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCB7IHJlcG9OYW1lOiBcIlwiIH0pO1xuICAgICAgICAgICAgICAgIHNldFN0YXRlUG9wdXAobmV3U3RhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgcmVwb05hbWUsIHVzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBgXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgY2xhc3M9XCJsb2dvLWJ1dHRvblwiIHNyYz1cIi4vUFNIZWxwZXIucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICR7dXNlclxuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImxvZ28tdGV4dC1sb2dpbmVkXCIgPlVzZXI6ICR7dXNlcn08L2Rpdj5gXG4gICAgICAgICAgICA6ICc8ZGl2IGNsYXNzPVwibG9nby10ZXh0XCIgPkNsaWNrIExvZ28gdG8gY29ubmVjdCB0byBHaXRIdWI8L2Rpdj4nfVxuICAgICAgJHtyZXBvTmFtZVxuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImxvZ28tcmVwby1sb2dpbmVkXCIgPlJlcG9zaXRvcnk6ICR7cmVwb05hbWV9PC9kaXY+YFxuICAgICAgICAgICAgOiBgYH1cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nbyB9IGZyb20gXCIuL0xvZ29cIjtcbiIsImltcG9ydCB7IHNlbGVjdEVsIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIkBMb2dvXCI7XG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9SZXBvc2l0b3J5L1JlcG9zaXRvcnlcIjtcbmltcG9ydCBcIi4vTWFpbi5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgY29uc3QgeyB1c2VyLCByZXBvTmFtZSwgc2V0U3RhdGVQb3B1cCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbmV3IExvZ28oe1xuICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJMb2dvQ29udGFpbmVyXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VyICYmICFyZXBvTmFtZSkge1xuICAgICAgICAgICAgbmV3IFJlcG9zaXRvcnkoe1xuICAgICAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiUmVwb0NvbnRhaW5lclwiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUG9wdXAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCB7IHVzZXIsIHJlcG9OYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gYFxuICAgIDxkaXY+XG4gICAgICA8TG9nb0NvbnRhaW5lciBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+PC9Mb2dvQ29udGFpbmVyPlxuICAgICAgJHt1c2VyXG4gICAgICAgICAgICA/IHJlcG9OYW1lXG4gICAgICAgICAgICAgICAgPyBgYFxuICAgICAgICAgICAgICAgIDogYDxSZXBvQ29udGFpbmVyIGNsYXNzPVwicmVwby1jb250YWluZXJcIiA+PC9SZXBvQ29udGFpbmVyPmBcbiAgICAgICAgICAgIDogYGB9XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHBvc3ROZXdSZXBvIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0FQSS9wb3N0UmVxQVBJXCI7XG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgc2VsZWN0RWwsIHNlbmRDaHJvbWVNZXNzYWdlIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBCdXR0b24sIFN0YXR1cyB9IGZyb20gXCJAQ29tcG9uZW50c1wiO1xuaW1wb3J0IFZlcmlmeU1lc3NhZ2UgZnJvbSBcIi4vVmVyaWZ5TWVzc2FnZVwiO1xuaW1wb3J0IFwiLi9DcmVhdGVOZXdSZXBvLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlTmV3UmVwbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBjb25zdCB7IGlzVmVyaWZpZWQsIHZlcmlmeU1zZywgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHN0YXR1cykpIHtcbiAgICAgICAgICAgIG5ldyBTdGF0dXMoe1xuICAgICAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiU3RhdHVzXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICAgICAgc3RhdGU6IHt9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2ZXJpZnlNc2cpKSB7XG4gICAgICAgICAgICBuZXcgVmVyaWZ5TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJWZXJpZnlNZXNzYWdlXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICAgICAgc3RhdGU6IHsgbWVzc2FnZTogdmVyaWZ5TXNnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNWZXJpZmllZCkge1xuICAgICAgICAgICAgbmV3IEJ1dHRvbih7XG4gICAgICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJFbnJvbGxCdXR0b25cIiwgdGhpcy5ub2RlKSxcbiAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkVucm9sbFwiLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmVucm9sbEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXcgQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBub2RlOiBzZWxlY3RFbChcIkNhbmNlbFJlcG9CdXR0b25cIiwgdGhpcy5ub2RlKSxcbiAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNWZXJpZmllZDogZmFsc2UsIHRleHRWYWx1ZTogXCJcIiB9KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmV3IEJ1dHRvbih7XG4gICAgICAgICAgICBub2RlOiBzZWxlY3RFbChcIlZlcmlmeUJ1dHRvblwiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZlcmlmeVwiLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMudmVyaWZ5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZlcmlmeUhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RWwgPSBzZWxlY3RFbChcImlucHV0XCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGNvbnN0IHZlcmlmeU1zZyA9IHRoaXMudmFsaWRhdGVOZXdSZXBvTmFtZShpbnB1dEVsLnZhbHVlKTtcbiAgICAgICAgaWYgKHZlcmlmeU1zZykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCB7IHZlcmlmeU1zZyB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCB7IHRleHRWYWx1ZTogaW5wdXRFbC52YWx1ZSwgaXNWZXJpZmllZDogdHJ1ZSwgdmVyaWZ5TXNnOiB1bmRlZmluZWQgfSkpO1xuICAgIH1cbiAgICBlbnJvbGxIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyBpc1ZlcmlmaWVkLCB0ZXh0VmFsdWUsIHNldFN0YXRlUG9wdXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIWlzVmVyaWZpZWQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7ZmV7J2465CY7KeA7JWK7J2AIOugiO2PrOydtOumhOyeheuLiOuLpC5cIik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcImxvYWRpbmdcIiB9KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcG9zdE5ld1JlcG8odGV4dFZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJyZXBvTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICByZXBvTmFtZTogdGV4dFZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZVBvcHVwKHsgcmVwb05hbWU6IHRleHRWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJmYWlsXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YWxpZGF0ZU5ld1JlcG9OYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgeyByZXBvcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gXCLsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqUXCI7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCA+PSAyMClcbiAgICAgICAgICAgIHJldHVybiBcIjIw7J6QIOydtOyDgeydmCDsnbTrpoTsnYQg7ISk7KCV7ZWgIOyImCDsl4bsirXri4jri6RcIjtcbiAgICAgICAgY29uc3QgcmVnID0gL15bQS1aYS16MC05XXsxLDIwfSQvO1xuICAgICAgICBpZiAoIXJlZy50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIFwi7JWM7YyM67Kz6rO8IOyIq+yekOulvCDsoJzsmbjtlZwg66y47J6Q66W8IOyeheugpe2VoCDsiJgg7JeG7Iq164uI64ukXCI7XG4gICAgICAgIGlmICghcmVwb3MpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvIOygleuztOqwgCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukLlwiKTtcbiAgICAgICAgZm9yIChjb25zdCByZXBvIG9mIHJlcG9zKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gcmVwby5uYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBg7J2066+4IOyhtOyerO2VmOuKlCBSZXBv7J6F64uI64ukLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCB7IGlzVmVyaWZpZWQsIHZlcmlmeU1zZywgdGV4dFZhbHVlLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBgXG4gICAgPGRpdj4gXG4gICAgICA8ZGl2IGNsYXNzPVwibmV3LXJlcG8tY3JlYXRlXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldy1yZXBvLWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBOZXcgUmVwb1wiIGF1dG9mb2N1cyAke3RleHRWYWx1ZSA/IGB2YWx1ZT1cIiR7dGV4dFZhbHVlfVwiYCA6IGBgfSAke2lzVmVyaWZpZWQgPyBgcmVhZG9ubHlgIDogYGB9IH0vPlxuICAgICAgICAke2lzVmVyaWZpZWRcbiAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEVucm9sbEJ1dHRvbiBjbGFzcz1cIm5ldy1yZXBvLWJ1dHRvblwiPjwvRW5yb2xsQnV0dG9uPlxuICAgICAgICAgICAgICA8Q2FuY2VsUmVwb0J1dHRvbiBjbGFzcz1cImNhbmNlbC1yZXBvLWJ1dHRvblwiPjwvQ2FuY2VsUmVwb0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiAnPFZlcmlmeUJ1dHRvbiBjbGFzcz1cInZlcmlmeS1yZXBvLWJ1dHRvblwiPjwvVmVyaWZ5QnV0dG9uPid9XG4gICAgICA8L2Rpdj5cbiAgICAgICR7IWlzVmVyaWZpZWQgJiYgIWlzVW5kZWZpbmVkKHZlcmlmeU1zZylcbiAgICAgICAgICAgID8gYDxWZXJpZnlNZXNzYWdlIGNsYXNzPVwidmVyaWZ5LW1lc3NhZ2VcIiA+PC9WZXJpZnlNZXNzYWdlPmBcbiAgICAgICAgICAgIDogYGB9XG4gICAgICAke3N0YXR1cyA9PT0gXCJsb2FkaW5nXCIgPyBgPFN0YXR1cyBjbGFzcz1cImxvYWRpbmctZW5yb2xsXCIgPjwvU3RhdHVzPmAgOiBgYH1cbiAgICAgICR7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiA/IGA8U3RhdHVzIGNsYXNzPVwic3VjY2Vzcy1lbnJvbGxcIiA+PC9TdGF0dXM+YCA6IGBgfVxuICAgICAgJHtzdGF0dXMgPT09IFwiZmFpbFwiID8gYDxTdGF0dXMgY2xhc3M9XCJmYWlsLWVucm9sbFwiID48L1N0YXR1cz5gIDogYGB9XG4gICAgPC9kaXY+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQENvbXBvbmVudHNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcmlmeU1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxkaXY+JHttZXNzYWdlfTwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlTmV3UmVwbyB9IGZyb20gXCIuL0NyZWF0ZU5ld1JlcG9cIjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0VXNlclJlcG9zIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0FQSS9nZXRSZXFBUElcIjtcbmltcG9ydCB7IHNlbGVjdEVsIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDcmVhdGVOZXdSZXBvIH0gZnJvbSBcIkBDcmVhdGVOZXdSZXBvXCI7XG5pbXBvcnQgeyBTZWxlY3RPbGRSZXBvIH0gZnJvbSBcIkBTZWxlY3RPbGRSZXBvXCI7XG5pbXBvcnQgeyBTZWxlY3RUeXBlIH0gZnJvbSBcIkBTZWxlY3RUeXBlXCI7XG5pbXBvcnQgXCIuL1JlcG9zaXRvcnkuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgc2V0U3RhdGVQb3B1cCwgcmVwb3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIG5ldyBTZWxlY3RUeXBlKHtcbiAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiU2VsZWN0VHlwZVwiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHNldEtleTogdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIHNlbGVjdExpc3Q6IFtcIk5ld1wiLCBcIk9sZFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlcG9zKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJOZXdcIjpcbiAgICAgICAgICAgICAgICBuZXcgQ3JlYXRlTmV3UmVwbyh7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiQ3JlYXRlTmV3UmVwb1wiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogeyBpc1ZlcmlmaWVkOiBmYWxzZSwgcmVwb3MsIHNldFN0YXRlUG9wdXAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJPbGRcIjpcbiAgICAgICAgICAgICAgICBuZXcgU2VsZWN0T2xkUmVwbyh7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiU2VsZWN0T2xkUmVwb1wiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogeyByZXBvcywgc2V0U3RhdGVQb3B1cCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVwb3MgPSB5aWVsZCBnZXRVc2VyUmVwb3MoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSwgeyByZXBvcyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIGBcbiAgICA8ZGl2PlxuICAgICAgPFNlbGVjdFR5cGUgY2xhc3M9XCJyZXBvLXR5cGVcIiA+PC9TZWxlY3RUeXBlPlxuICAgICAgPGRpdiBjbGFzcz1cInJlcG8tY29udGVudFwiPlxuICAgICAgJHt0eXBlID8gYGAgOiBgPGlucHV0IGNsYXNzPVwiYmVmb3JlLXNlbGVjdC10eXBlXCIgcmVhZG9ubHkgLz4gYH1cbiAgICAgICR7dHlwZSA9PT0gXCJOZXdcIiA/IGA8Q3JlYXRlTmV3UmVwbz48L0NyZWF0ZU5ld1JlcG8+YCA6IFwiXCJ9XG4gICAgICAke3R5cGUgPT09IFwiT2xkXCJcbiAgICAgICAgICAgID8gYDxTZWxlY3RPbGRSZXBvIGNsYXNzPVwib2xkLXJlcG8tc2VsZWN0XCIgPjwvU2VsZWN0T2xkUmVwbz5gXG4gICAgICAgICAgICA6IGBgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzZWxlY3RBbGxFbCwgc2VsZWN0RWwsIHNlbmRDaHJvbWVNZXNzYWdlIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBCdXR0b24gfSBmcm9tIFwiQENvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4vU2VsZWN0T2xkUmVwby5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9sZFJlcG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNldEV2ZW50KCkge1xuICAgICAgICBzZWxlY3RFbChcIi5kcm9wZG93bi1zZWxlY3QtcmVwb1wiLCB0aGlzLm5vZGUpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZWN0RWwoXCIuZHJvcGRvd24tc2VsZWN0LXJlcG9cIiwgdGhpcy5ub2RlKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0RWwoXCIuc2VsZWN0LXJlcG9cIiwgdGhpcy5ub2RlKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRFbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBpbnB1dEVsLnZhbHVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0QWxsRWwoXCIub3B0aW9uLXJlcG9cIiwgdGhpcy5ub2RlKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbCA9IHNlbGVjdEVsKFwiLnNlbGVjdC1yZXBvXCIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWwgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLnZhbHVlID0gb3B0aW9uRWwuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgbmV3IEJ1dHRvbih7XG4gICAgICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJMaW5rQnV0dG9uXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJMaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuTGlua0hhbmRsZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIExpbmtIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCB7IHNldFN0YXRlUG9wdXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHNlbmRDaHJvbWVNZXNzYWdlKHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJyZXBvTmFtZVwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIHJlcG9OYW1lOiB0aGlzLnN0YXRlLnNlbGVjdGVkLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3RhdGVQb3B1cCh7IHJlcG9OYW1lOiB0aGlzLnN0YXRlLnNlbGVjdGVkIH0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyByZXBvcywgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBgXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1zZWxlY3QtcmVwb1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlbGVjdC1yZXBvXCIgcmVhZG9ubHkgcGxhY2Vob2xkZXI9XCIke3NlbGVjdGVkID8gc2VsZWN0ZWQgOiBcIlNlbGVjdCBZb3VyIFJlcG9cIn1cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9ucy1yZXBvXCI+XG4gICAgICAgICR7cmVwb3NcbiAgICAgICAgICAgIC5tYXAoKHJlcG8pID0+IGA8ZGl2IGNsYXNzPVwib3B0aW9uLXJlcG9cIj4ke3JlcG8ubmFtZX08L2Rpdj5gKVxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtzZWxlY3RlZCA/ICc8TGlua0J1dHRvbiBjbGFzcz1cIm5ldy1yZXBvLWJ1dHRvblwiPjwvTGlua0J1dHRvbj4nIDogXCJcIn1cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VsZWN0T2xkUmVwbyB9IGZyb20gXCIuL1NlbGVjdE9sZFJlcG9cIjtcbiIsImltcG9ydCB7IHNlbGVjdEFsbEVsLCBzZWxlY3RFbCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9qc1V0aWxzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQENvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4vU2VsZWN0VHlwZS5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFR5cGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNldEV2ZW50KCkge1xuICAgICAgICBjb25zdCB7IHNldEtleSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgc2VsZWN0RWwoXCIuZHJvcGRvd24tc2VsZWN0LXR5cGVcIiwgdGhpcy5ub2RlKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGVjdEVsKFwiLmRyb3Bkb3duLXNlbGVjdC10eXBlXCIsIHRoaXMubm9kZSkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdEVsKFwiLnNlbGVjdC10eXBlXCIsIHRoaXMubm9kZSkuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWwgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHNlbGVjdEVsKFwiLmRyb3Bkb3duLXNlbGVjdC10eXBlXCIsIHRoaXMubm9kZSkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNldEtleSh7IHR5cGU6IGlucHV0RWwudmFsdWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3RBbGxFbChcIi5vcHRpb24tdHlwZVwiLCB0aGlzLm5vZGUpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbCA9IHNlbGVjdEVsKFwiLnNlbGVjdC10eXBlXCIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWwgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLnZhbHVlID0gb3B0aW9uRWwuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBzZWxlY3RMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gYFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tc2VsZWN0LXR5cGVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzPVwic2VsZWN0LXR5cGVcIlxuICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3R5cGUgPyB0eXBlIDogXCJTZWxlY3RcIn1cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9ucy10eXBlXCI+XG4gICAgICAgICAgJHtzZWxlY3RMaXN0XG4gICAgICAgICAgICAubWFwKChuYW1lKSA9PiBgPGRpdiBjbGFzcz1cIm9wdGlvbi10eXBlXCI+JHtuYW1lfTwvZGl2PmApXG4gICAgICAgICAgICAuam9pbihcIiBcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2VsZWN0VHlwZSB9IGZyb20gXCIuL1NlbGVjdFR5cGVcIjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbiB9IGZyb20gXCIuL01haW5cIjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaXNVbmRlZmluZWQsIHNlbGVjdEVsLCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIHNlbmRDaHJvbWVNZXNzYWdlLCB9IGZyb20gXCJAdXRpbHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgT3B0aW9uU2xpZGUgfSBmcm9tIFwiQE9wdGlvblBvcHVwL09wdGlvblNsaWRlXCI7XG5pbXBvcnQgXCIuL09wdGlvblBvcHVwLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgY29uc3QgeyBUaW1lciwgVXBsb2FkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBuZXcgT3B0aW9uU2xpZGUoe1xuICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJPcHRpb25Jc1VwbG9hZFwiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJVcGxvYWRcIixcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogVXBsb2FkLFxuICAgICAgICAgICAgICAgIG9wdGlvblRpdGxlOiBcIlVwbG9hZGluZyBjb2RlIHRvIFJlcG9cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBuZXcgT3B0aW9uU2xpZGUoe1xuICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJPcHRpb25Jc1RpbWVyXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGlkOiBcIlRpbWVyXCIsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IFRpbWVyLFxuICAgICAgICAgICAgICAgIG9wdGlvblRpdGxlOiBcIkF1dG8gVGltZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IFRpbWVyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVGltZXJcIikpO1xuICAgICAgICAgICAgbGV0IHsgVXBsb2FkIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVXBsb2FkXCIpKTtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChUaW1lcikpIHtcbiAgICAgICAgICAgICAgICBUaW1lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VuZENocm9tZU1lc3NhZ2UoeyBhY3Rpb246IFwiVGltZXJcIiwgbWV0aG9kOiBcInBvc3RcIiwgaXNBY3RpdmU6IFRpbWVyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKFVwbG9hZCkpIHtcbiAgICAgICAgICAgICAgICBVcGxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbmRDaHJvbWVNZXNzYWdlKHsgYWN0aW9uOiBcIlVwbG9hZFwiLCBtZXRob2Q6IFwicG9zdFwiLCBpc0FjdGl2ZTogVXBsb2FkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFRpbWVyLCBVcGxvYWQgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwib3B0aW9uLXRpdGxlXCI+T3B0aW9uPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbi1ib2R5XCI+XG4gICAgICAgIDxPcHRpb25Jc1VwbG9hZCBjbGFzcz1cIm9wdGlvbiBpc1VwbG9hZFwiPjwvT3B0aW9uSXNVcGxvYWQ+XG4gICAgICAgIDxPcHRpb25Jc1RpbWVyIGNsYXNzPVwib3B0aW9uIGlzVGltZXJcIiA+PC9PcHRpb25Jc1RpbWVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzZWxlY3RFbCwgc2VuZENocm9tZU1lc3NhZ2UgfSBmcm9tIFwiQHV0aWxzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQENvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4vT3B0aW9uU2xpZGUuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25TbGlkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc2V0RXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHNlbGVjdEVsKFwiLnNsaWRlclwiLCB0aGlzLm5vZGUpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBzZWxlY3RFbChcImlucHV0XCIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBpZCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAhaW5wdXQuY2hlY2tlZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICFpbnB1dC5jaGVja2VkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGlzQWN0aXZlLCBvcHRpb25UaXRsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIGBcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+JHtvcHRpb25UaXRsZX08L3NwYW4+XG4gICAgICA8bGFiZWwgZm9yPVwiJHtpZH1cIiBjbGFzcz1cInJlcG8tc3dpdGNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aWR9XCIgJHtpc0FjdGl2ZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXJcIj48L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBPcHRpb25TbGlkZSB9IGZyb20gXCIuL09wdGlvblNsaWRlXCI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIE9wdGlvblBvcHVwIH0gZnJvbSBcIi4vT3B0aW9uUG9wdXBcIjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgc2VsZWN0RWwsIGdldENocm9tZUxvY2FsU3RvcmFnZSB9IGZyb20gXCJAdXRpbHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkBGb290ZXJcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiQE1haW5cIjtcbmltcG9ydCB7IE9wdGlvblBvcHVwIH0gZnJvbSBcIkBPcHRpb25Qb3B1cFwiO1xuaW1wb3J0IFwiLi9Qb3B1cC5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlciwgcmVwb05hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIG5ldyBNYWluKHtcbiAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiTWFpbkNvbnRhaW5lclwiLCB0aGlzLm5vZGUpLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgIHJlcG9OYW1lLFxuICAgICAgICAgICAgICAgIHNldFN0YXRlUG9wdXA6IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVwb05hbWUpIHtcbiAgICAgICAgICAgIG5ldyBPcHRpb25Qb3B1cCh7XG4gICAgICAgICAgICAgICAgbm9kZTogc2VsZWN0RWwoXCJPcHRpb25Db250YWluZXJcIiwgdGhpcy5ub2RlKSxcbiAgICAgICAgICAgICAgICBzdGF0ZToge30sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBuZXcgRm9vdGVyKHtcbiAgICAgICAgICAgIG5vZGU6IHNlbGVjdEVsKFwiRm9vdGVyXCIsIHRoaXMubm9kZSksXG4gICAgICAgICAgICBzdGF0ZToge30sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgICAgICAgICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyLCByZXBvTmFtZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJyb290XCIgPlxuICAgICAgPE1haW5Db250YWluZXIgIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj48L01haW5Db250YWluZXI+XG4gICAgICAke3JlcG9OYW1lXG4gICAgICAgICAgICA/IGA8T3B0aW9uQ29udGFpbmVyIGNsYXNzPVwib3B0aW9uLWNvbnRhaW5lclwiPjwvT3B0aW9uQ29udGFpbmVyPmBcbiAgICAgICAgICAgIDogYGB9XG4gICAgICA8Rm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+PC9Gb290ZXI+XG4gICAgPGRpdj5cbiAgYDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyAkIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xubmV3IFBvcHVwKHsgbm9kZTogJChcIiNyb290XCIpLCBzdGF0ZToge30gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=