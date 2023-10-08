/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 5px;
}

.logo-button {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  cursor: pointer;
}

.logo-text {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}

.logo-text-logined {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
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

.repo-container {
  display: flex;
}

.repo-type {
  display: flex;
  flex-direction: row-reverse;
  width: 80px;
}

.dropdown-select-type {
  height: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
}

.dropdown-select-type.active {
  height: 60px;
}

.dropdown-select-type input {
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

.dropdown-select-type .options-type {
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow-y: scroll;
  visibility: hidden;
  opacity: 0;
  transition: 0.01s;
}

.dropdown-select-type .options-type::-webkit-scrollbar {
  display: none;
}

.dropdown-select-type.active .options-type {
  visibility: visible;
  opacity: 1;
}

.dropdown-select-type .options-type div {
  padding: 2px 7px;
  cursor: pointer;
}

.dropdown-select-type .options-type div:hover {
  border-radius: 2px;
  background: #62baea;
  color: #fff;
}

.dropdown-select-type::before {
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

.dropdown-select-type.active::before {
  right: 196px;
}

.dropdown-select-type::after {
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

.dropdown-select-type.active::after {
  right: 200px;
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

#verify-repo {
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

.new-repo-input {
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

.old-repo-select {
  display: flex;
  flex-direction: row;
}

.dropdown-select-repo {
  height: 10px;
  width: 53%;
}

.dropdown-select-repo::before {
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

.dropdown-select-repo.active::before {
  right: 72px;
}

.dropdown-select-repo::after {
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

.dropdown-select-repo.active::after {
  right: 77px;
}

.dropdown-select-repo input {
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

.dropdown-select-repo .options-repo {
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
}

.dropdown-select-repo .options-repo::-webkit-scrollbar {
  display: none;
}

.dropdown-select-repo.active .options-repo {
  visibility: visible;
  opacity: 1;
}

.dropdown-select-repo .options-repo div {
  padding: 2px 7px;
  cursor: pointer;
}

.dropdown-select-repo .options-repo div:hover {
  border-radius: 3px;
  background: #62baea;
  color: #fff;
}

.option-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: #fff;
  border-radius: 10px 10px 0 0;
}

.option-container > .option-header {
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

.option span {
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
}

.slider:before {
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

footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
  cursor: pointer;
  background: linear-gradient(to bottom, #463f6b 50.31%, #000 130.13%);
}
.footer-name {
  font-size: 13px;
  font-weight: 500px;
  color: #fff;
}

.loading-enroll {
  display: inline-block;
  position: relative;
  left: 97px;
  top: -23px;
  width: 80px;
}
.loading-enroll > div {
  display: inline-block;
  width: 4px;
  background: #afa8de;
  animation: loading-enroll 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading-enroll div:nth-child(1) {
  animation-delay: -0.24s;
}
.loading-enroll div:nth-child(2) {
  animation-delay: -0.12s;
}
.loading-enroll div:nth-child(3) {
  animation-delay: 0;
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

.success-enroll {
  display: inline-block;
  position: relative;
  left: 104px;
  top: -23px;
  transform: rotate(45deg);
  width: 5px;
  height: 10px;
  border-bottom: 4px solid #afa8de;
  border-right: 4px solid #afa8de;
}

.fail-enroll {
  background: #f9f9f9;
  width: 18px;
  height: 18px;
  position: relative;
  left: 104px;
  top: -23px;
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
`, "",{"version":3,"sources":["webpack://./src/Popup/popup.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  height: 300px;\n  margin: 0;\n  white-space: nowrap;\n  background: linear-gradient(331.91deg, #afa8de 4.31%, #9586ef 130.13%);\n}\n\n.logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px 0 5px;\n}\n\n.logo-button {\n  border-radius: 50%;\n  height: 90px;\n  width: 90px;\n  cursor: pointer;\n}\n\n.logo-text {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 10px;\n}\n\n.logo-text-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.logo-repo-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  &:hover {\n    color: #aeb4b8;\n  }\n}\n\n.repo-container {\n  display: flex;\n}\n\n.repo-type {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 80px;\n}\n\n.dropdown-select-type {\n  height: 10px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 1px;\n}\n\n.dropdown-select-type.active {\n  height: 60px;\n}\n\n.dropdown-select-type input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 7px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.dropdown-select-type .options-type {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: scroll;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.01s;\n}\n\n.dropdown-select-type .options-type::-webkit-scrollbar {\n  display: none;\n}\n\n.dropdown-select-type.active .options-type {\n  visibility: visible;\n  opacity: 1;\n}\n\n.dropdown-select-type .options-type div {\n  padding: 2px 7px;\n  cursor: pointer;\n}\n\n.dropdown-select-type .options-type div:hover {\n  border-radius: 2px;\n  background: #62baea;\n  color: #fff;\n}\n\n.dropdown-select-type::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 174px;\n  right: 200px;\n  width: 6px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-type.active::before {\n  right: 196px;\n}\n\n.dropdown-select-type::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 174px;\n  right: 196px;\n  width: 6px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(-40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-type.active::after {\n  right: 200px;\n}\n\n.before-select-type {\n  border-radius: 7px;\n  padding: 5px 5px;\n  cursor: auto;\n  font-size: 11px;\n  background: #f3f3f3;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n}\n\n.new-repo-button {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #51d298;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #37dd95;\n  }\n}\n\n#verify-repo {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #62baea;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #5ec5fd;\n  }\n}\n\n.verify-message {\n  margin-top: 3px;\n  font-size: 10px;\n  color: rgb(189, 36, 36);\n}\n\n.enroll-repo {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500px;\n  background: #02bc68;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n}\n\n.new-repo-input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.old-repo-select {\n  display: flex;\n  flex-direction: row;\n}\n\n.dropdown-select-repo {\n  height: 10px;\n  width: 53%;\n}\n\n.dropdown-select-repo::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 173px;\n  right: 77px;\n  width: 8px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-repo.active::before {\n  right: 72px;\n}\n\n.dropdown-select-repo::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 173px;\n  right: 72px;\n  width: 8px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(-40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-repo.active::after {\n  right: 77px;\n}\n\n.dropdown-select-repo input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.dropdown-select-repo .options-repo {\n  width: 100%;\n  height: 100px;\n  display: absolute;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: auto;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: 0.01s;\n}\n\n.dropdown-select-repo .options-repo::-webkit-scrollbar {\n  display: none;\n}\n\n.dropdown-select-repo.active .options-repo {\n  visibility: visible;\n  opacity: 1;\n}\n\n.dropdown-select-repo .options-repo div {\n  padding: 2px 7px;\n  cursor: pointer;\n}\n\n.dropdown-select-repo .options-repo div:hover {\n  border-radius: 3px;\n  background: #62baea;\n  color: #fff;\n}\n\n.option-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n}\n\n.option-container > .option-header {\n  width: 90%;\n  height: 30px;\n  margin: 15px 1px 5px 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.option-title {\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n}\n\n.option-body {\n  width: 100%;\n}\n\n.option {\n  display: flex;\n  flex-direction: row;\n  margin: 7px 10px;\n  align-items: center;\n}\n\n.option span {\n  font-size: 15px;\n  font-weight: 500;\n  margin-right: auto;\n}\n\n.repo-switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  margin-right: 6px;\n}\n\n.repo-switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 34px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 14px;\n  width: 14px;\n  left: 3.5px;\n  bottom: 2.5px;\n  background-color: #fff;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.repo-switch input:checked + .slider {\n  background-color: #afa8de;\n  border-color: #fff;\n}\n\n.repo-switch input:focus + .slider {\n  box-shadow: 0 0 1px #afa8de;\n}\n\n.repo-switch input:checked + .slider:before {\n  -webkit-transform: translateX(9px);\n  -ms-transform: translateX(9px);\n  transform: translateX(9px);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #463f6b 50.31%, #000 130.13%);\n}\n.footer-name {\n  font-size: 13px;\n  font-weight: 500px;\n  color: #fff;\n}\n\n.loading-enroll {\n  display: inline-block;\n  position: relative;\n  left: 97px;\n  top: -23px;\n  width: 80px;\n}\n.loading-enroll > div {\n  display: inline-block;\n  width: 4px;\n  background: #afa8de;\n  animation: loading-enroll 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.loading-enroll div:nth-child(1) {\n  animation-delay: -0.24s;\n}\n.loading-enroll div:nth-child(2) {\n  animation-delay: -0.12s;\n}\n.loading-enroll div:nth-child(3) {\n  animation-delay: 0;\n}\n@keyframes loading-enroll {\n  0% {\n    top: 8px;\n    height: 16px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 7px;\n  }\n}\n\n.success-enroll {\n  display: inline-block;\n  position: relative;\n  left: 104px;\n  top: -23px;\n  transform: rotate(45deg);\n  width: 5px;\n  height: 10px;\n  border-bottom: 4px solid #afa8de;\n  border-right: 4px solid #afa8de;\n}\n\n.fail-enroll {\n  background: #f9f9f9;\n  width: 18px;\n  height: 18px;\n  position: relative;\n  left: 104px;\n  top: -23px;\n}\n\n.fail-enroll:after {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.fail-enroll:before {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Popup/popup.css":
/*!*****************************!*\
  !*** ./src/Popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/Popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    return { input, output, description };
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

/***/ "./src/Popup/renderPopup.ts":
/*!**********************************!*\
  !*** ./src/Popup/renderPopup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPopup: () => (/* binding */ renderPopup)
/* harmony export */ });
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");

const renderPopup = ({ type, user, repoName, repos }) => {
    const logoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".logo-text");
    const repoContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".repo-container");
    const logoLoginedText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".logo-text-logined");
    const logoLinkedText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".logo-repo-logined");
    const optionContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".option-container");
    const selectTypeElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".dropdown-select-type");
    const selectTypeText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".select-type");
    const repoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".options-repo");
    const verifyButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#verify-repo");
    const enrollButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#create-repo");
    const selectRepoElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".dropdown-select-repo");
    const enrollStatusElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".status");
    const inputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".new-repo-input");
    switch (type) {
        case "beforeLogin":
            logoText.style.display = "";
            repoContainer.style.display = "none";
            logoLinkedText.style.display = "none";
            break;
        case "afterLogin":
            logoText.style.display = "none";
            repoContainer.style.display = "";
            logoLoginedText.style.display = "";
            logoLinkedText.style.display = "none";
            logoLoginedText.innerText = `User: ${user}`;
            optionContainer.style.display = "none";
            enrollStatusElement.className = "status";
            inputElement.value = "";
            break;
        case "afterLink":
            repoContainer.style.display = "none";
            optionContainer.style.display = "";
            logoText.style.display = "none";
            logoLoginedText.style.display = "";
            logoLinkedText.style.display = "";
            logoLoginedText.innerText = `User: ${user}`;
            logoLinkedText.innerText = `Repository: ${repoName}`;
            optionContainer.style.display = "";
            break;
        case "setOldRepos":
            repos.forEach((repo) => {
                repoDiv.insertAdjacentHTML("beforeend", `<div class="option-repo">${repo.name}</div>`);
            });
            break;
        case "selectTypeChange":
            selectTypeElement.classList.toggle("active");
            verifyButton.style.display = "";
            enrollButton.style.display = "none";
            enrollStatusElement.className = "status";
            break;
        case "afterClickedSelectType":
            selectTypeElement.classList.remove("active");
            changeTypeContents(selectTypeText.value);
            break;
        case "typeNewRepo":
            verifyButton.style.display = "";
            enrollButton.style.display = "none";
            break;
        case "afterVerified":
            verifyButton.style.display = "none";
            enrollButton.style.display = "";
            break;
        case "clickRepoBar":
            selectRepoElement.classList.toggle("active");
            break;
        case "blurOldRepoList":
            selectRepoElement.classList.remove("active");
            break;
        case "startLoading":
            enrollStatusElement.classList.add("loading-enroll");
            break;
        case "successEnroll":
            enrollStatusElement.classList.remove("loading-enroll");
            enrollStatusElement.classList.add("success-enroll");
            break;
        case "failEnroll":
            enrollStatusElement.classList.remove("loading-enroll");
            enrollStatusElement.classList.add("fail-enroll");
            break;
        case "resetStatus":
            enrollStatusElement.className = "status";
            break;
        default:
            break;
    }
};
const changeTypeContents = (type) => {
    const defaultRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".default-select");
    const newRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".new-repo-create");
    const oldRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".old-repo-select");
    switch (type) {
        case "New":
            defaultRepoDiv.style.display = "none";
            newRepoDiv.style.display = "";
            oldRepoDiv.style.display = "none";
            break;
        case "Old":
            defaultRepoDiv.style.display = "none";
            newRepoDiv.style.display = "none";
            oldRepoDiv.style.display = "";
            break;
        default:
            defaultRepoDiv.style.display = "";
            newRepoDiv.style.display = "none";
            oldRepoDiv.style.display = "none";
            break;
    }
};


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
/* harmony export */   b64EncodeUnicode: () => (/* binding */ b64EncodeUnicode),
/* harmony export */   convertSingleCharToDoubleChar: () => (/* binding */ convertSingleCharToDoubleChar),
/* harmony export */   createTimer: () => (/* binding */ createTimer),
/* harmony export */   createeTimer: () => (/* binding */ createeTimer),
/* harmony export */   enrollEvent: () => (/* binding */ enrollEvent),
/* harmony export */   getElById: () => (/* binding */ getElById),
/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam),
/* harmony export */   getTimeDiff: () => (/* binding */ getTimeDiff),
/* harmony export */   hasElement: () => (/* binding */ hasElement),
/* harmony export */   htmlEntityDecode: () => (/* binding */ htmlEntityDecode),
/* harmony export */   insertHTML: () => (/* binding */ insertHTML),
/* harmony export */   isObjEmpty: () => (/* binding */ isObjEmpty),
/* harmony export */   removeEvent: () => (/* binding */ removeEvent)
/* harmony export */ });
const $ = (targetName, parentEl) => {
    const element = parentEl
        ? parentEl.querySelector(targetName)
        : document.querySelector(targetName);
    if (!element)
        throw new Error(`${targetName} element를 찾을 수 없습니다`);
    return element;
};
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
/*!****************************!*\
  !*** ./src/Popup/Popup.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chromeUtils */ "./src/utils/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/Popup/popup.css");
/* harmony import */ var _API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API/getReqAPI */ "./src/API/getReqAPI.ts");
/* harmony import */ var _API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/postReqAPI */ "./src/API/postReqAPI.ts");
/* harmony import */ var _renderPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderPopup */ "./src/Popup/renderPopup.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Popup_canSubmit;








class Popup {
    constructor() {
        _Popup_canSubmit.set(this, false);
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.checkLogin())) {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "beforeLogin" });
                return;
            }
            const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
            this.repos = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getUserRepos)();
            this.setOldRepos();
            if (!(yield this.checkLinkedRepo())) {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "afterLogin", user });
                return;
            }
            const { repoName: linkedRepo } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
            (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "afterLink", user, repoName: linkedRepo });
            return;
        });
        this.checkLinkedRepo = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName");
            if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.isObjEmpty)(user)) {
                return false;
            }
            return true;
        });
        this.setOldRepos = () => {
            (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "setOldRepos", repos: this.repos });
            const selectRepoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-repo");
            const repoOptions = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$$)(".option-repo");
            repoOptions.forEach((option) => {
                (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(option, "mouseover", (event) => {
                    selectRepoText.value = option.innerText;
                    __classPrivateFieldSet(this, _Popup_canSubmit, true, "f");
                });
            });
        };
        this.setOption = () => __awaiter(this, void 0, void 0, function* () {
            const isUploadInputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#isupload");
            const isTimerInputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#istimer");
            const { isUpload } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("isUpload"));
            const { isTimer } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("isTimer"));
            isUploadInputElement.checked = isUpload;
            isTimerInputElement.checked = isTimer;
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(isUploadInputElement, "change", (e) => __awaiter(this, void 0, void 0, function* () {
                const { isUpload } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("isUpload"));
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({ isUpload: !isUpload });
            }));
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(isTimerInputElement, "change", () => __awaiter(this, void 0, void 0, function* () {
                const { isTimer } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("isTimer"));
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({ isTimer: !isTimer });
            }));
        });
        this.validateNewRepoName = (name) => __awaiter(this, void 0, void 0, function* () {
            if (name === "")
                return "이름을 입력해주세요";
            if (name.length >= 20)
                return "20자 이상의 이름을 설정할 수 없습니다";
            const reg = /^[A-Za-z0-9]{1,20}$/;
            if (!reg.test(name))
                return "알파벳과 숫자를 제외한 문자를 입력할 수 없습니다";
            if (!this.repos)
                throw new Error("Repo 정보가 존재하지 않습니다.");
            for (const repo of this.repos) {
                if (name === repo.name)
                    return `이미 존재하는 Repo입니다.`;
            }
            return "";
        });
        this.checkLogin = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER");
            if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.isObjEmpty)(user)) {
                return false;
            }
            return true;
        });
        this.setEvent = () => {
            // logo click
            const enrollElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-button");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(enrollElement, "click", () => __awaiter(this, void 0, void 0, function* () {
                window.open(`https://github.com/login/oauth/authorize?client_id=${"2f17ed4238f44ec245f1"}`);
            }));
            // type Select
            const selectTypeElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".dropdown-select-type");
            const selectTypeText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-type");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectTypeElement, "click", () => {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "selectTypeChange" });
                __classPrivateFieldSet(this, _Popup_canSubmit, false, "f");
            });
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectTypeText, "blur", () => {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "afterClickedSelectType" });
                const newInputEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("input", (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".new-repo-create"));
                const oldInputEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("input", (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".old-repo-select"));
                newInputEl.value = "";
                oldInputEl.value = "";
                verifyMsg.innerText = "";
            });
            const typeOptions = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$$)(".option-type");
            typeOptions.forEach((option) => {
                (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(option, "mouseenter", () => {
                    selectTypeText.value = option.innerText;
                });
            });
            // new repo input
            const verifyMsg = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".verify-message");
            const newInputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".new-repo-input");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(newInputElement, "keyup", () => {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "typeNewRepo" });
                verifyMsg.innerText = "";
            });
            // new repo verify
            const verifyButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#verify-repo");
            const enrollButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#create-repo");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(verifyButton, "click", () => __awaiter(this, void 0, void 0, function* () {
                const newRepoName = newInputElement.value.trim();
                const validateMsg = yield this.validateNewRepoName(newRepoName);
                if (validateMsg) {
                    const verifyMsg = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".verify-message");
                    verifyMsg.innerText = validateMsg;
                    return;
                }
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "afterVerified" });
                __classPrivateFieldSet(this, _Popup_canSubmit, true, "f");
            }));
            // repo Select
            const selectRepoElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".dropdown-select-repo");
            const selectRepoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-repo");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectRepoElement, "click", () => {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "clickRepoBar" });
            });
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectRepoText, "blur", () => {
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "blurOldRepoList" });
            });
            // new repo enroll
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(enrollButton, "click", () => __awaiter(this, void 0, void 0, function* () {
                if (!__classPrivateFieldGet(this, _Popup_canSubmit, "f")) {
                    throw new Error("Repo를 생성할 수 없습니다");
                }
                const inputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".new-repo-input");
                const repoName = inputElement.value.trim();
                (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "startLoading" });
                try {
                    const res = yield (0,_API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__.postNewRepo)(repoName);
                    (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
                        repoName: res.name,
                    });
                    (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "successEnroll" });
                }
                catch (_a) {
                    (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "failEnroll" });
                    (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(document, "click", () => {
                        (0,_renderPopup__WEBPACK_IMPORTED_MODULE_5__.renderPopup)({ type: "resetStatus" });
                    }, { once: true });
                }
                this.init();
            }));
            // link old repo
            const linkRepoButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#link-repo");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(linkRepoButton, "click", () => __awaiter(this, void 0, void 0, function* () {
                if (!__classPrivateFieldGet(this, _Popup_canSubmit, "f")) {
                    throw new Error("Repo를 연결할 수 없습니다.");
                }
                const inputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".dropdown-select-repo input");
                const repoName = inputElement.value;
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
                    repoName: repoName,
                });
                this.init();
            }));
            const linkedRepo = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-repo-logined");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(linkedRepo, "click", () => {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.deleteChromeLocalStorage)("repoName");
                this.init();
            });
            // footer
            const footer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("footer");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(footer, "click", () => window.open(`https://github.com/HANITZ/PSHelper`));
        };
        this.setEvent();
        this.init();
        this.setOption();
    }
}
_Popup_canSubmit = new WeakMap();
new Popup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN1NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztX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cC5jc3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvUG9wdXAvcG9wdXAuY3NzP2M1NTEiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9BUEkvZ2V0UmVxQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0FQSS9wb3N0UmVxQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL1BvcHVwL3JlbmRlclBvcHVwLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZEFQSS9nZXRSZXFCYWNrZ3JvdW5kQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2Nocm9tZVV0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2pzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvUG9wdXAvUG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzMS45MWRlZywgI2FmYThkZSA0LjMxJSwgIzk1ODZlZiAxMzAuMTMlKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUwcHggMCA1cHg7XG59XG5cbi5sb2dvLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ28tdGV4dC1sb2dpbmVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ28tcmVwby1sb2dpbmVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2FlYjRiODtcbiAgfVxufVxuXG4ucmVwby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVwby10eXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB3aWR0aDogODBweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xuICB9XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4wMXM7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmUgLm9wdGlvbnMtdHlwZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIGRpdiB7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIC5vcHRpb25zLXR5cGUgZGl2OmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdG9wOiAxNzRweDtcbiAgcmlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZTo6YmVmb3JlIHtcbiAgcmlnaHQ6IDE5NnB4O1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXR5cGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRvcDogMTc0cHg7XG4gIHJpZ2h0OiAxOTZweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlOjphZnRlciB7XG4gIHJpZ2h0OiAyMDBweDtcbn1cblxuLmJlZm9yZS1zZWxlY3QtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgY3Vyc29yOiBhdXRvO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmV3LXJlcG8tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogIzUxZDI5ODtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzN2RkOTU7XG4gIH1cbn1cblxuI3ZlcmlmeS1yZXBvIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogIzYyYmFlYTtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1ZWM1ZmQ7XG4gIH1cbn1cblxuLnZlcmlmeS1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZ2IoMTg5LCAzNiwgMzYpO1xufVxuXG4uZW5yb2xsLXJlcG8ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMmJjNjg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubmV3LXJlcG8taW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XG4gIH1cbn1cblxuLm9sZC1yZXBvLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtcmVwbyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDUzJTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdG9wOiAxNzNweDtcbiAgcmlnaHQ6IDc3cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjpiZWZvcmUge1xuICByaWdodDogNzJweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0b3A6IDE3M3B4O1xuICByaWdodDogNzJweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjphZnRlciB7XG4gIHJpZ2h0OiA3N3B4O1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XG4gIH1cbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjAxcztcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvLmFjdGl2ZSAub3B0aW9ucy1yZXBvIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8gZGl2IHtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gLm9wdGlvbnMtcmVwbyBkaXY6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM2MmJhZWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbi5vcHRpb24tY29udGFpbmVyID4gLm9wdGlvbi1oZWFkZXIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTVweCAxcHggNXB4IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3B0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm9wdGlvbi1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDdweCAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3B0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJlcG8tc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ucmVwby1zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsZWZ0OiAzLjVweDtcbiAgYm90dG9tOiAyLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhOGRlO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5yZXBvLXN3aXRjaCBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNhZmE4ZGU7XG59XG5cbi5yZXBvLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNDYzZjZiIDUwLjMxJSwgIzAwMCAxMzAuMTMlKTtcbn1cbi5mb290ZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvYWRpbmctZW5yb2xsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDk3cHg7XG4gIHRvcDogLTIzcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuLmxvYWRpbmctZW5yb2xsID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYWZhOGRlO1xuICBhbmltYXRpb246IGxvYWRpbmctZW5yb2xsIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcbn1cbi5sb2FkaW5nLWVucm9sbCBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG59XG4ubG9hZGluZy1lbnJvbGwgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuLmxvYWRpbmctZW5yb2xsIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDA7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctZW5yb2xsIHtcbiAgMCUge1xuICAgIHRvcDogOHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA1MCUsXG4gIDEwMCUge1xuICAgIHRvcDogMjRweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxufVxuXG4uc3VjY2Vzcy1lbnJvbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTA0cHg7XG4gIHRvcDogLTIzcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2FmYThkZTtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2FmYThkZTtcbn1cblxuLmZhaWwtZW5yb2xsIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMDRweDtcbiAgdG9wOiAtMjNweDtcbn1cblxuLmZhaWwtZW5yb2xsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZmFpbC1lbnJvbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1BvcHVwL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7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RSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsU0FBUztJQUNULFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjcwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMzEuOTFkZWcsICNhZmE4ZGUgNC4zMSUsICM5NTg2ZWYgMTMwLjEzJSk7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDUwcHggMCA1cHg7XFxufVxcblxcbi5sb2dvLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogOTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubG9nby10ZXh0LWxvZ2luZWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubG9nby1yZXBvLWxvZ2luZWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAjYWViNGI4O1xcbiAgfVxcbn1cXG5cXG4ucmVwby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJlcG8tdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tcmlnaHQ6IDFweDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSBpbnB1dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4wMXM7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlIC5vcHRpb25zLXR5cGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIGRpdiB7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUgLm9wdGlvbnMtdHlwZSBkaXY6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogIzYyYmFlYTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRvcDogMTc0cHg7XFxuICByaWdodDogMjAwcHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlOjpiZWZvcmUge1xcbiAgcmlnaHQ6IDE5NnB4O1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdG9wOiAxNzRweDtcXG4gIHJpZ2h0OiAxOTZweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlOjphZnRlciB7XFxuICByaWdodDogMjAwcHg7XFxufVxcblxcbi5iZWZvcmUtc2VsZWN0LXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGN1cnNvcjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmV3LXJlcG8tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogIzUxZDI5ODtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzN2RkOTU7XFxuICB9XFxufVxcblxcbiN2ZXJpZnktcmVwbyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQ6ICM2MmJhZWE7XFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNWVjNWZkO1xcbiAgfVxcbn1cXG5cXG4udmVyaWZ5LW1lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgY29sb3I6IHJnYigxODksIDM2LCAzNik7XFxufVxcblxcbi5lbnJvbGwtcmVwbyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogIzAyYmM2ODtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG5cXG4ubmV3LXJlcG8taW5wdXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgJjpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xcbiAgfVxcbn1cXG5cXG4ub2xkLXJlcG8tc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8ge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDUzJTtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0b3A6IDE3M3B4O1xcbiAgcmlnaHQ6IDc3cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjpiZWZvcmUge1xcbiAgcmlnaHQ6IDcycHg7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwbzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0b3A6IDE3M3B4O1xcbiAgcmlnaHQ6IDcycHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgcmlnaHQ6IDc3cHg7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwbyBpbnB1dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwbyAub3B0aW9ucy1yZXBvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgei1pbmRleDogMTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjAxcztcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwby5hY3RpdmUgLm9wdGlvbnMtcmVwbyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8gZGl2IHtcXG4gIHBhZGRpbmc6IDJweCA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwbyAub3B0aW9ucy1yZXBvIGRpdjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG59XFxuXFxuLm9wdGlvbi1jb250YWluZXIgPiAub3B0aW9uLWhlYWRlciB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAxNXB4IDFweCA1cHggMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm9wdGlvbi1ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luOiA3cHggMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24gc3BhbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucmVwby1zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLnJlcG8tc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbGVmdDogMy41cHg7XFxuICBib3R0b206IDIuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5yZXBvLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhOGRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2FmYThkZTtcXG59XFxuXFxuLnJlcG8tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ2M2Y2YiA1MC4zMSUsICMwMDAgMTMwLjEzJSk7XFxufVxcbi5mb290ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxvYWRpbmctZW5yb2xsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDk3cHg7XFxuICB0b3A6IC0yM3B4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi5sb2FkaW5nLWVucm9sbCA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNHB4O1xcbiAgYmFja2dyb3VuZDogI2FmYThkZTtcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1lbnJvbGwgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xcbn1cXG4ubG9hZGluZy1lbnJvbGwgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcXG59XFxuLmxvYWRpbmctZW5yb2xsIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XFxufVxcbi5sb2FkaW5nLWVucm9sbCBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcXG59XFxuQGtleWZyYW1lcyBsb2FkaW5nLWVucm9sbCB7XFxuICAwJSB7XFxuICAgIHRvcDogOHB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICB9XFxuICA1MCUsXFxuICAxMDAlIHtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDdweDtcXG4gIH1cXG59XFxuXFxuLnN1Y2Nlc3MtZW5yb2xsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwNHB4O1xcbiAgdG9wOiAtMjNweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2FmYThkZTtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNhZmE4ZGU7XFxufVxcblxcbi5mYWlsLWVucm9sbCB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMDRweDtcXG4gIHRvcDogLTIzcHg7XFxufVxcblxcbi5mYWlsLWVucm9sbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmZhaWwtZW5yb2xsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSSB9IGZyb20gXCIuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmRBUEkvZ2V0UmVxQmFja2dyb3VuZEFQSVwiO1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZW5kQ2hyb21lTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgJCwgaHRtbEVudGl0eURlY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlclwiO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IChjb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJSZXBvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLmRlZmF1bHRfYnJhbmNoO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UmVmZXJlbmNlID0gKGJyYW5jaCA9IFwibWFpblwiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmL2hlYWRzLyR7YnJhbmNofWA7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcmVmU0hBOiByZXMub2JqZWN0LnNoYSwgcmVmOiByZXMucmVmIH07XG59KTtcbmV4cG9ydCBjb25zdCBnZXRCYWVranVuU29sdmVkRGF0YSA9IChzdWJtaXNzaW9uSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvc291cmNlL2Rvd25sb2FkLyR7c3VibWlzc2lvbklkfWA7XG4gICAgY29uc3QgY29kZSA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtRGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcIlNlYy1GZXRjaC1Nb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIHJldHVybiBjb2RlO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbiA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH1gO1xuICAgIGNvbnN0IGRvYyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtZGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1tb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIGNvbnN0IGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRvYywgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgaW5wdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9pbnB1dFwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICBjb25zdCBvdXRwdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9vdXRwdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9kZXNjcmlwdGlvblwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICByZXR1cm4geyBpbnB1dCwgb3V0cHV0LCBkZXNjcmlwdGlvbiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjID0gKHByb2JsZW1JZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHNlbmRDaHJvbWVNZXNzYWdlKHtcbiAgICAgICAgYWN0aW9uOiBcImJhZWtqdW5cIixcbiAgICAgICAgdGFzazogXCJnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNcIixcbiAgICAgICAgcHJvYmxlbUlkLFxuICAgIH0pO1xuICAgIC8vIOyehOyLnFxuICAgIGNvbnN0IGEgPSBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNBUEkocHJvYmxlbUlkKTtcbiAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAvL1xuICAgIHJldHVybiBkYXRhO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENocm9tZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgYjY0RW5jb2RlVW5pY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0QnJhbmNoLCBnZXRSZWZlcmVuY2UgfSBmcm9tIFwiLi9nZXRSZXFBUElcIjtcbmV4cG9ydCBjb25zdCBjb21taXRDb2RlVG9SZXBvID0gKHsgZGlyZWN0b3J5LCBjb2RlLCBtZXNzYWdlLCByZWFkTWUsIGZpbGVOYW1lLCB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkZWZhdWx0QnJhbmNoID0geWllbGQgZ2V0RGVmYXVsdEJyYW5jaCgpO1xuICAgIGNvbnN0IHsgcmVmU0hBLCByZWYgfSA9IHlpZWxkIGdldFJlZmVyZW5jZShkZWZhdWx0QnJhbmNoKTtcbiAgICBjb25zdCBzb3VyY2VDb2RlID0geWllbGQgY3JlYXRlQmxvYihjb2RlLCBmaWxlTmFtZSwgZGlyZWN0b3J5KTtcbiAgICBjb25zdCBzb3VyY2VSZWFkTWUgPSB5aWVsZCBjcmVhdGVCbG9iKHJlYWRNZSwgXCJSRUFETUUubWRcIiwgZGlyZWN0b3J5KTtcbiAgICBjb25zdCB0cmVlU0hBID0geWllbGQgY3JlYXRlVHJlZShyZWZTSEEsIFtzb3VyY2VDb2RlLCBzb3VyY2VSZWFkTWVdKTtcbiAgICBjb25zdCBjb21taXRTSEEgPSB5aWVsZCBjcmVhdGVDb21taXQobWVzc2FnZSwgdHJlZVNIQSwgcmVmU0hBKTtcbiAgICB5aWVsZCB1cGRhdGVIZWFkKHJlZiwgY29tbWl0U0hBKTtcbn0pO1xuZXhwb3J0IGNvbnN0IHBvc3ROZXdSZXBvID0gKG5hbWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHByaXZhdGU6IHRydWUsXG4gICAgICAgIGF1dG9faW5pdDogdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwi7JWM6rOg66as7KaYIOyekOuPmSDquLDroZ0g67O06rSA7IaMXCIsXG4gICAgfSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGlmICghR0lUSFVCX1RPS0VOKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb2tlbiDsoJXrs7Trpbwg6rCA7KC47Jik7KeAIOuqu+2WiOyKteuLiOuLpC5cIik7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbi8vIGV4cG9ydCB0eXBlIE5ld0Jsb2IgPSB7XG4vLyAgIHBhdGg6IHN0cmluZztcbi8vICAgc2hhOiBzdHJpbmc7XG4vLyAgIG1vZGU6IHN0cmluZztcbi8vICAgdHlwZTogc3RyaW5nO1xuLy8gfTtcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9iID0gKGNvbnRlbnQsIGZpbGVOYW1lLCBkaXJlY3RvcnkpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IHBhdGggPSBgJHtkaXJlY3Rvcnl9LyR7ZmlsZU5hbWV9YDtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9ibG9ic2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29udGVudDogYjY0RW5jb2RlVW5pY29kZShjb250ZW50KSxcbiAgICAgICAgZW5jb2Rpbmc6IFwiYmFzZTY0XCIsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiB7IHBhdGgsIHNoYTogcmVzLnNoYSwgbW9kZTogXCIxMDA2NDRcIiwgdHlwZTogXCJibG9iXCIgfTtcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyZWUgPSAocmVmU0hBLCB0cmVlX2l0ZW1zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvdHJlZXNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHRyZWU6IHRyZWVfaXRlbXMsIGJhc2VfdHJlZTogcmVmU0hBIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLnNoYTtcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1pdCA9IChtZXNzYWdlLCB0cmVlU0hBLCByZWZTSEEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9jb21taXRzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlLCB0cmVlOiB0cmVlU0hBLCBwYXJlbnQ6IFtyZWZTSEFdIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLnNoYTtcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUhlYWQgPSAocmVmLCBjb21taXRTSEEsIGZvcmNlID0gdHJ1ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3JlZnMvaGVhZHMvbWFpbmA7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgc2hhOiBjb21taXRTSEEsIGZvcmNlIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuIiwiaW1wb3J0IHsgJCB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5leHBvcnQgY29uc3QgcmVuZGVyUG9wdXAgPSAoeyB0eXBlLCB1c2VyLCByZXBvTmFtZSwgcmVwb3MgfSkgPT4ge1xuICAgIGNvbnN0IGxvZ29UZXh0ID0gJChcIi5sb2dvLXRleHRcIik7XG4gICAgY29uc3QgcmVwb0NvbnRhaW5lciA9ICQoXCIucmVwby1jb250YWluZXJcIik7XG4gICAgY29uc3QgbG9nb0xvZ2luZWRUZXh0ID0gJChcIi5sb2dvLXRleHQtbG9naW5lZFwiKTtcbiAgICBjb25zdCBsb2dvTGlua2VkVGV4dCA9ICQoXCIubG9nby1yZXBvLWxvZ2luZWRcIik7XG4gICAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gJChcIi5vcHRpb24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNlbGVjdFR5cGVFbGVtZW50ID0gJChcIi5kcm9wZG93bi1zZWxlY3QtdHlwZVwiKTtcbiAgICBjb25zdCBzZWxlY3RUeXBlVGV4dCA9ICQoXCIuc2VsZWN0LXR5cGVcIik7XG4gICAgY29uc3QgcmVwb0RpdiA9ICQoXCIub3B0aW9ucy1yZXBvXCIpO1xuICAgIGNvbnN0IHZlcmlmeUJ1dHRvbiA9ICQoXCIjdmVyaWZ5LXJlcG9cIik7XG4gICAgY29uc3QgZW5yb2xsQnV0dG9uID0gJChcIiNjcmVhdGUtcmVwb1wiKTtcbiAgICBjb25zdCBzZWxlY3RSZXBvRWxlbWVudCA9ICQoXCIuZHJvcGRvd24tc2VsZWN0LXJlcG9cIik7XG4gICAgY29uc3QgZW5yb2xsU3RhdHVzRWxlbWVudCA9ICQoXCIuc3RhdHVzXCIpO1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9ICQoXCIubmV3LXJlcG8taW5wdXRcIik7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJiZWZvcmVMb2dpblwiOlxuICAgICAgICAgICAgbG9nb1RleHQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICByZXBvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWZ0ZXJMb2dpblwiOlxuICAgICAgICAgICAgbG9nb1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcmVwb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGxvZ29Mb2dpbmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxvZ29Mb2dpbmVkVGV4dC5pbm5lclRleHQgPSBgVXNlcjogJHt1c2VyfWA7XG4gICAgICAgICAgICBvcHRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZW5yb2xsU3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcInN0YXR1c1wiO1xuICAgICAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWZ0ZXJMaW5rXCI6XG4gICAgICAgICAgICByZXBvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGxvZ29UZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxvZ29Mb2dpbmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgbG9nb0xvZ2luZWRUZXh0LmlubmVyVGV4dCA9IGBVc2VyOiAke3VzZXJ9YDtcbiAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LmlubmVyVGV4dCA9IGBSZXBvc2l0b3J5OiAke3JlcG9OYW1lfWA7XG4gICAgICAgICAgICBvcHRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldE9sZFJlcG9zXCI6XG4gICAgICAgICAgICByZXBvcy5mb3JFYWNoKChyZXBvKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVwb0Rpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxkaXYgY2xhc3M9XCJvcHRpb24tcmVwb1wiPiR7cmVwby5uYW1lfTwvZGl2PmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNlbGVjdFR5cGVDaGFuZ2VcIjpcbiAgICAgICAgICAgIHNlbGVjdFR5cGVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB2ZXJpZnlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICBlbnJvbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZW5yb2xsU3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcInN0YXR1c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhZnRlckNsaWNrZWRTZWxlY3RUeXBlXCI6XG4gICAgICAgICAgICBzZWxlY3RUeXBlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgY2hhbmdlVHlwZUNvbnRlbnRzKHNlbGVjdFR5cGVUZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidHlwZU5ld1JlcG9cIjpcbiAgICAgICAgICAgIHZlcmlmeUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGVucm9sbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImFmdGVyVmVyaWZpZWRcIjpcbiAgICAgICAgICAgIHZlcmlmeUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbnJvbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNsaWNrUmVwb0JhclwiOlxuICAgICAgICAgICAgc2VsZWN0UmVwb0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYmx1ck9sZFJlcG9MaXN0XCI6XG4gICAgICAgICAgICBzZWxlY3RSZXBvRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdGFydExvYWRpbmdcIjpcbiAgICAgICAgICAgIGVucm9sbFN0YXR1c0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvYWRpbmctZW5yb2xsXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdWNjZXNzRW5yb2xsXCI6XG4gICAgICAgICAgICBlbnJvbGxTdGF0dXNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nLWVucm9sbFwiKTtcbiAgICAgICAgICAgIGVucm9sbFN0YXR1c0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtZW5yb2xsXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmYWlsRW5yb2xsXCI6XG4gICAgICAgICAgICBlbnJvbGxTdGF0dXNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nLWVucm9sbFwiKTtcbiAgICAgICAgICAgIGVucm9sbFN0YXR1c0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZhaWwtZW5yb2xsXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZXNldFN0YXR1c1wiOlxuICAgICAgICAgICAgZW5yb2xsU3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcInN0YXR1c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuY29uc3QgY2hhbmdlVHlwZUNvbnRlbnRzID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UmVwb0RpdiA9ICQoXCIuZGVmYXVsdC1zZWxlY3RcIik7XG4gICAgY29uc3QgbmV3UmVwb0RpdiA9ICQoXCIubmV3LXJlcG8tY3JlYXRlXCIpO1xuICAgIGNvbnN0IG9sZFJlcG9EaXYgPSAkKFwiLm9sZC1yZXBvLXNlbGVjdFwiKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcIk5ld1wiOlxuICAgICAgICAgICAgZGVmYXVsdFJlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbmV3UmVwb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIG9sZFJlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJPbGRcIjpcbiAgICAgICAgICAgIGRlZmF1bHRSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG5ld1JlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgb2xkUmVwb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGVmYXVsdFJlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICBuZXdSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG9sZFJlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSSA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9zb2x2ZWQuYWMvYXBpL3YzL3Byb2JsZW0vc2hvdz9wcm9ibGVtSWQ9JHtwcm9ibGVtSWR9YDtcbiAgICByZXR1cm4geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZVN5bmNTdG9yYWdlID0gKF9hLCBmbikgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gKCkgPT4geyB9OyB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZVN5bmNTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIGZuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoX2EpID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSwgY2FsbGJhY2tGbikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2FsbGJhY2tGbik7XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTWVzc2FnZSA9IChmbikgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0ICQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW5066W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0ICQkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudHMpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW50c+ulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cyk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEVsQnlJZCA9ICh0YXJnZXRJZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0SWR9aWTrpbwg6rCA7KeEIOyXmOumrOuovO2KuOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBlbnJvbGxFdmVudCA9IChlbCwgdHlwZSwgZm4sIG9wdGlvbnMpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBvcHRpb25zKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlRXZlbnQgPSAoZWwsIHR5cGUsIGZuKSA9PiB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGlzT2JqRW1wdHkgPSAob2JqKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopID09PSBKU09OLnN0cmluZ2lmeSh7fSk7XG59O1xuZXhwb3J0IGNvbnN0IGI2NEVuY29kZVVuaWNvZGUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05PUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIoYDB4JHtwfWApKTtcbiAgICB9KSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyID0gKHRleHQpID0+IHtcbiAgICAvLyBzaW5nbGVDaGFyIHRvIGRvdWJsZUNoYXIgbWFwcGluZ1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgXCIhXCI6IFwi77yBXCIsXG4gICAgICAgIFwiJVwiOiBcIu+8hVwiLFxuICAgICAgICBcIiZcIjogXCLvvIZcIixcbiAgICAgICAgXCIoXCI6IFwi77yIXCIsXG4gICAgICAgIFwiKVwiOiBcIu+8iVwiLFxuICAgICAgICBcIipcIjogXCLvvIpcIixcbiAgICAgICAgXCIrXCI6IFwi77yLXCIsXG4gICAgICAgIFwiLFwiOiBcIu+8jFwiLFxuICAgICAgICBcIi1cIjogXCLvvI1cIixcbiAgICAgICAgXCIuXCI6IFwi77yOXCIsXG4gICAgICAgIFwiL1wiOiBcIu+8j1wiLFxuICAgICAgICBcIjpcIjogXCLvvJpcIixcbiAgICAgICAgXCI7XCI6IFwi77ybXCIsXG4gICAgICAgIFwiPFwiOiBcIu+8nFwiLFxuICAgICAgICBcIj1cIjogXCLvvJ1cIixcbiAgICAgICAgXCI+XCI6IFwi77yeXCIsXG4gICAgICAgIFwiP1wiOiBcIu+8n1wiLFxuICAgICAgICBcIkBcIjogXCLvvKBcIixcbiAgICAgICAgXCJbXCI6IFwi77y7XCIsXG4gICAgICAgIFwiXFxcXFwiOiBcIu+8vFwiLFxuICAgICAgICBcIl1cIjogXCLvvL1cIixcbiAgICAgICAgXCJeXCI6IFwi77y+XCIsXG4gICAgICAgIF86IFwi77y/XCIsXG4gICAgICAgIFwiYFwiOiBcIu+9gFwiLFxuICAgICAgICBcIntcIjogXCLvvZtcIixcbiAgICAgICAgXCJ8XCI6IFwi772cXCIsXG4gICAgICAgIFwifVwiOiBcIu+9nVwiLFxuICAgICAgICBcIn5cIjogXCLvvZ5cIixcbiAgICAgICAgXCIgXCI6IFwi4oCFXCIsIC8vIOqzteuwseunjCDsoITqsIHrrLjsnpDqsIAg7JWE64uMIEZPVVItUEVSLUVNIFNQQUNF66GcIOuzgO2ZmFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWyElJigpKissXFwtLi86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX4gXS9nLCAoaykgPT4gbWFwW2tdKTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlZVRpbWVyID0gKGNhbGxiYWNrRm4pID0+IHtcbiAgICBsZXQgW3NlY3MsIG1pbnMsIGhvdXJzXSA9IFswLCAwLCAwXTtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2VjcysrO1xuICAgICAgICBpZiAoc2VjcyA9PSA2MCkge1xuICAgICAgICAgICAgc2VjcyA9IDA7XG4gICAgICAgICAgICBtaW5zKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnMgPT0gNjApIHtcbiAgICAgICAgICAgIG1pbnMgPSAwO1xuICAgICAgICAgICAgaG91cnMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT0gMTApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGggPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3Vycy50b1N0cmluZygpIDogaG91cnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbSA9IG1pbnMgPCAxMCA/IFwiMFwiICsgbWlucy50b1N0cmluZygpIDogbWlucy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzID0gc2VjcyA8IDEwID8gXCIwXCIgKyBzZWNzLnRvU3RyaW5nKCkgOiBzZWNzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNhbGxiYWNrRm4oeyBoLCBtLCBzIH0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXIgPSAoc3RhcnRUaW1lLCBjYWxsYmFja0ZuKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgeyBoLCBtLCBzIH0gPSBnZXRUaW1lRGlmZihzdGFydFRpbWUsIG5vd1RpbWUpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGluc2VydEhUTUwgPSAoeyBlbGVtZW50LCBwb3NpdGlvbiwgaHRtbCB9KSA9PiB7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIGh0bWwpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUaW1lRGlmZiA9IChzdGFydFRpbWUsIG5vd1RpbWUpID0+IHtcbiAgICBsZXQgW2hvdXIsIG1pbiwgc2VjXSA9IFswLCAwLCAwXTtcbiAgICBsZXQgdGltZURpZmZTZWMgPSBNYXRoLmZsb29yKChub3dUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuICAgIGlmICh0aW1lRGlmZlNlYyA+IDM2MDApIHtcbiAgICAgICAgaG91ciA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyAzNjAwKTtcbiAgICAgICAgdGltZURpZmZTZWMgPSB0aW1lRGlmZlNlYyAlIDM2MDA7XG4gICAgfVxuICAgIGlmICh0aW1lRGlmZlNlYyA+IDYwKSB7XG4gICAgICAgIG1pbiA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyA2MCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSA2MDtcbiAgICB9XG4gICAgc2VjID0gdGltZURpZmZTZWM7XG4gICAgY29uc3QgaCA9IGhvdXIgPCAxMCA/IFwiMFwiICsgaG91ci50b1N0cmluZygpIDogaG91ci50b1N0cmluZygpO1xuICAgIGNvbnN0IG0gPSBtaW4gPCAxMCA/IFwiMFwiICsgbWluLnRvU3RyaW5nKCkgOiBtaW4udG9TdHJpbmcoKTtcbiAgICBjb25zdCBzID0gc2VjIDwgMTAgPyBcIjBcIiArIHNlYy50b1N0cmluZygpIDogc2VjLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHsgaCwgbSwgcyB9O1xufTtcbmV4cG9ydCBjb25zdCBoYXNFbGVtZW50ID0gKHRhcmdldCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGh0bWxFbnRpdHlEZWNvZGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHVuZXNjYXBlZCA9IHtcbiAgICAgICAgXCImYW1wO1wiOiBcIiZcIixcbiAgICAgICAgXCImIzM4O1wiOiBcIiZcIixcbiAgICAgICAgXCImbHQ7XCI6IFwiPFwiLFxuICAgICAgICBcIiYjNjA7XCI6IFwiPFwiLFxuICAgICAgICBcIiZndDtcIjogXCI+XCIsXG4gICAgICAgIFwiJiM2MjtcIjogXCI+XCIsXG4gICAgICAgIFwiJmFwb3M7XCI6IFwiJ1wiLFxuICAgICAgICBcIiYjMzk7XCI6IFwiJ1wiLFxuICAgICAgICBcIiZxdW90O1wiOiAnXCInLFxuICAgICAgICBcIiYjMzQ7XCI6ICdcIicsXG4gICAgICAgIFwiJm5ic3A7XCI6IFwiIFwiLFxuICAgICAgICBcIiYjMTYwO1wiOiBcIiBcIixcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzR8bmJzcHwjMTYwKTsvZywgKHdvcmQpID0+IHVuZXNjYXBlZFt3b3JkXSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5UGFyYW0gPSAocXVlcnkpID0+IHtcbiAgICBjb25zdCBwYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KHF1ZXJ5KTtcbiAgICBpZiAoIXBhcmFtKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBGb3VuZCBRdWVyeSAke3F1ZXJ5fWApO1xuICAgIHJldHVybiBwYXJhbTtcbn07XG5leHBvcnQgY29uc3QgU09MVkVEQUNfTEVWRUwgPSB7XG4gICAgMDogXCJVbnJhdGVkXCIsXG4gICAgMTogXCJCcm9uemUgVlwiLFxuICAgIDI6IFwiQnJvbnplIElWXCIsXG4gICAgMzogXCJCcm9uemUgSUlJXCIsXG4gICAgNDogXCJCcm9uemUgSUlcIixcbiAgICA1OiBcIkJyb256ZSBJXCIsXG4gICAgNjogXCJTaWx2ZXIgVlwiLFxuICAgIDc6IFwiU2lsdmVyIElWXCIsXG4gICAgODogXCJTaWx2ZXIgSUlJXCIsXG4gICAgOTogXCJTaWx2ZXIgSUlcIixcbiAgICAxMDogXCJTaWx2ZXIgSVwiLFxuICAgIDExOiBcIkdvbGQgVlwiLFxuICAgIDEyOiBcIkdvbGQgSVZcIixcbiAgICAxMzogXCJHb2xkIElJSVwiLFxuICAgIDE0OiBcIkdvbGQgSUlcIixcbiAgICAxNTogXCJHb2xkIElcIixcbiAgICAxNjogXCJQbGF0aW51bSBWXCIsXG4gICAgMTc6IFwiUGxhdGludW0gSVZcIixcbiAgICAxODogXCJQbGF0aW51bSBJSUlcIixcbiAgICAxOTogXCJQbGF0aW51bSBJSVwiLFxuICAgIDIwOiBcIlBsYXRpbnVtIElcIixcbiAgICAyMTogXCJEaWFtb25kIFZcIixcbiAgICAyMjogXCJEaWFtb25kIElWXCIsXG4gICAgMjM6IFwiRGlhbW9uZCBJSUlcIixcbiAgICAyNDogXCJEaWFtb25kIElJXCIsXG4gICAgMjU6IFwiRGlhbW9uZCBJXCIsXG4gICAgMjY6IFwiUnVieSBWXCIsXG4gICAgMjc6IFwiUnVieSBJVlwiLFxuICAgIDI4OiBcIlJ1YnkgSUlJXCIsXG4gICAgMjk6IFwiUnVieSBJSVwiLFxuICAgIDMwOiBcIlJ1YnkgSVwiLFxuICAgIDMxOiBcIk1hc3RlclwiLFxufTtcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSB7XG4gICAg7JWE7Z2sOiBcImFoZXVpXCIsXG4gICAg7JeE7KSA7IudOiBcInVtbVwiLFxuICAgIEFkYTogXCJhZGFcIixcbiAgICBcIkFsZ29sIDY4XCI6IFwiYVwiLFxuICAgIEFQRUNPREU6IFwiYXBlXCIsXG4gICAgQXNzZW1ibHk6IFwib1wiLFxuICAgIFwiQXNzZW1ibHkgKDMyYml0KVwiOiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICg2NGJpdClcIjogXCJvXCIsXG4gICAgYXdrOiBcImF3a1wiLFxuICAgIEJhc2g6IFwic2hcIixcbiAgICBiYzogXCJiY1wiLFxuICAgIEJlZnVuZ2U6IFwiYmZcIixcbiAgICBCb286IFwiYm9vXCIsXG4gICAgXCJCcmFpbmYqKmtcIjogXCJiZlwiLFxuICAgIEM6IFwiY1wiLFxuICAgIFwiQyNcIjogXCJjc1wiLFxuICAgIFwiQyMgMy4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA2LjAgKE1vbm8pXCI6IFwiY3NcIixcbiAgICBcIkMjIDkuMCAoLk5FVClcIjogXCJjc1wiLFxuICAgIFwiQysrXCI6IFwiY2NcIixcbiAgICBcIkMrKzExXCI6IFwiY2NcIixcbiAgICBcIkMrKzExIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTRcIjogXCJjY1wiLFxuICAgIFwiQysrMTQgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysxN1wiOiBcImNjXCIsXG4gICAgXCJDKysxNyAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrOThcIjogXCJjY1wiLFxuICAgIFwiQysrOTggKENsYW5nKVwiOiBcImNjXCIsXG4gICAgQzExOiBcImNcIixcbiAgICBcIkMxMSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEMyeDogXCJjXCIsXG4gICAgXCJDMnggKENsYW5nKVwiOiBcImNcIixcbiAgICBDOTA6IFwiY1wiLFxuICAgIFwiQzkwIChDbGFuZylcIjogXCJjXCIsXG4gICAgQzk5OiBcImNcIixcbiAgICBcIkM5OSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIENvYm9sOiBcImNvYlwiLFxuICAgIENvYnJhOiBcImNvYnJhXCIsXG4gICAgQ29xOiBcInZcIixcbiAgICBDcnlzdGFsOiBcImNyXCIsXG4gICAgRDogXCJkXCIsXG4gICAgXCJEIChMREMpXCI6IFwiZFwiLFxuICAgIFwiRiNcIjogXCJmc1wiLFxuICAgIFwiRiMgKC5ORVQpXCI6IFwiZnNcIixcbiAgICBcIkYjIChNb25vKVwiOiBcImZzXCIsXG4gICAgRm9ydHJhbjogXCJmXCIsXG4gICAgRnJlZUJBU0lDOiBcImJhc1wiLFxuICAgIEdvOiBcImdvXCIsXG4gICAgXCJHbyAoZ2NjZ28pXCI6IFwiZ29cIixcbiAgICBHb2xmc2NyaXB0OiBcImdzXCIsXG4gICAgSGFza2VsbDogXCJoc1wiLFxuICAgIEhheGU6IFwicHlcIixcbiAgICBJTlRFUkNBTDogXCJpXCIsXG4gICAgSmF2YTogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDExXCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxNVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOFwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOCAoT3BlbkpESylcIjogXCJqYXZhXCIsXG4gICAgS290bGluOiBcImt0XCIsXG4gICAgXCJLb3RsaW4gKEpWTSlcIjogXCJrdFwiLFxuICAgIFwiS290bGluIChOYXRpdmUpXCI6IFwia3RcIixcbiAgICBMT0xDT0RFOiBcImxvbFwiLFxuICAgIEx1YTogXCJsdWFcIixcbiAgICBNaW5lY3JhZnQ6IFwibWNhXCIsXG4gICAgTmVtZXJsZTogXCJuXCIsXG4gICAgTmltcm9kOiBcIm5pbVwiLFxuICAgIFwibm9kZS5qc1wiOiBcImpzXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiOiBcIm1cIixcbiAgICBcIk9iamVjdGl2ZS1DKytcIjogXCJtbVwiLFxuICAgIE9DYW1sOiBcIm1sXCIsXG4gICAgUGFzY2FsOiBcInBhc1wiLFxuICAgIFBlcmw6IFwicGxcIixcbiAgICBQSFA6IFwicGhwXCIsXG4gICAgUGlrZTogXCJwaWtlXCIsXG4gICAgUHlQeTogXCJweVwiLFxuICAgIFB5UHkyOiBcInB5XCIsXG4gICAgUHlQeTM6IFwicHlcIixcbiAgICBQeXRob246IFwicHlcIixcbiAgICBcIlB5dGhvbiAyXCI6IFwicHlcIixcbiAgICBcIlB5dGhvbiAzXCI6IFwicHlcIixcbiAgICBSaGlubzogXCJqc1wiLFxuICAgIFJ1Ynk6IFwicmJcIixcbiAgICBcIlJ1YnkgMS44XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMS45XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMlwiOiBcInJiXCIsXG4gICAgUnVzdDogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE1XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxOFwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMTlcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDIxXCI6IFwicnNcIixcbiAgICBTY2FsYTogXCJzY2FsYVwiLFxuICAgIFNjaGVtZTogXCJzY21cIixcbiAgICBzZWQ6IFwic2VkXCIsXG4gICAgU3dpZnQ6IFwic3dpZnRcIixcbiAgICBTeXN0ZW1WZXJpbG9nOiBcInN2XCIsXG4gICAgVGNsOiBcInRjbFwiLFxuICAgIFRleHQ6IFwidHh0XCIsXG4gICAgVHlwZVNjcmlwdDogXCJ0c1wiLFxuICAgIFwiVkIuTkVUIDIuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVkIuTkVUIDQuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVmlzdWFsIEJhc2ljXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpYyAoLk5FVClcIjogXCJ2YlwiLFxuICAgIFdoaXRlc3BhY2U6IFwid3NcIixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfUG9wdXBfY2FuU3VibWl0O1xuaW1wb3J0IHsgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlLCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIHNldENocm9tZUxvY2FsU3RvcmFnZSwgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7ICQsIGVucm9sbEV2ZW50IH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCBcIi4vcG9wdXAuY3NzXCI7XG5pbXBvcnQgeyBpc09iakVtcHR5IH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCB7ICQkIH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCB7IGdldFVzZXJSZXBvcyB9IGZyb20gXCIuLi9BUEkvZ2V0UmVxQVBJXCI7XG5pbXBvcnQgeyBwb3N0TmV3UmVwbyB9IGZyb20gXCIuLi9BUEkvcG9zdFJlcUFQSVwiO1xuaW1wb3J0IHsgcmVuZGVyUG9wdXAgfSBmcm9tIFwiLi9yZW5kZXJQb3B1cFwiO1xuY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfUG9wdXBfY2FuU3VibWl0LnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5pdCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghKHlpZWxkIHRoaXMuY2hlY2tMb2dpbigpKSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclBvcHVwKHsgdHlwZTogXCJiZWZvcmVMb2dpblwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgICAgICAgICAgdGhpcy5yZXBvcyA9IHlpZWxkIGdldFVzZXJSZXBvcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRPbGRSZXBvcygpO1xuICAgICAgICAgICAgaWYgKCEoeWllbGQgdGhpcy5jaGVja0xpbmtlZFJlcG8oKSkpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiYWZ0ZXJMb2dpblwiLCB1c2VyIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb05hbWU6IGxpbmtlZFJlcG8gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiYWZ0ZXJMaW5rXCIsIHVzZXIsIHJlcG9OYW1lOiBsaW5rZWRSZXBvIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGVja0xpbmtlZFJlcG8gPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0geWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIik7XG4gICAgICAgICAgICBpZiAoaXNPYmpFbXB0eSh1c2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRPbGRSZXBvcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBvcHVwKHsgdHlwZTogXCJzZXRPbGRSZXBvc1wiLCByZXBvczogdGhpcy5yZXBvcyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFJlcG9UZXh0ID0gJChcIi5zZWxlY3QtcmVwb1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcG9PcHRpb25zID0gJCQoXCIub3B0aW9uLXJlcG9cIik7XG4gICAgICAgICAgICByZXBvT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBlbnJvbGxFdmVudChvcHRpb24sIFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZXBvVGV4dC52YWx1ZSA9IG9wdGlvbi5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BvcHVwX2NhblN1Ym1pdCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0T3B0aW9uID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaXNVcGxvYWRJbnB1dEVsZW1lbnQgPSAkKFwiI2lzdXBsb2FkXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNUaW1lcklucHV0RWxlbWVudCA9ICQoXCIjaXN0aW1lclwiKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaXNVcGxvYWQgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJpc1VwbG9hZFwiKSk7XG4gICAgICAgICAgICBjb25zdCB7IGlzVGltZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJpc1RpbWVyXCIpKTtcbiAgICAgICAgICAgIGlzVXBsb2FkSW5wdXRFbGVtZW50LmNoZWNrZWQgPSBpc1VwbG9hZDtcbiAgICAgICAgICAgIGlzVGltZXJJbnB1dEVsZW1lbnQuY2hlY2tlZCA9IGlzVGltZXI7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChpc1VwbG9hZElucHV0RWxlbWVudCwgXCJjaGFuZ2VcIiwgKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVXBsb2FkIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiaXNVcGxvYWRcIikpO1xuICAgICAgICAgICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7IGlzVXBsb2FkOiAhaXNVcGxvYWQgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChpc1RpbWVySW5wdXRFbGVtZW50LCBcImNoYW5nZVwiLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1RpbWVyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiaXNUaW1lclwiKSk7XG4gICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgaXNUaW1lcjogIWlzVGltZXIgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRlTmV3UmVwb05hbWUgPSAobmFtZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalFwiO1xuICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID49IDIwKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjIw7J6QIOydtOyDgeydmCDsnbTrpoTsnYQg7ISk7KCV7ZWgIOyImCDsl4bsirXri4jri6RcIjtcbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IC9eW0EtWmEtejAtOV17MSwyMH0kLztcbiAgICAgICAgICAgIGlmICghcmVnLnRlc3QobmFtZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7JWM7YyM67Kz6rO8IOyIq+yekOulvCDsoJzsmbjtlZwg66y47J6Q66W8IOyeheugpe2VoCDsiJgg7JeG7Iq164uI64ukXCI7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVwb3MpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVwbyDsoJXrs7TqsIAg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC5cIik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlcG8gb2YgdGhpcy5yZXBvcykge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSByZXBvLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBg7J2066+4IOyhtOyerO2VmOuKlCBSZXBv7J6F64uI64ukLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tMb2dpbiA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpO1xuICAgICAgICAgICAgaWYgKGlzT2JqRW1wdHkodXNlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBsb2dvIGNsaWNrXG4gICAgICAgICAgICBjb25zdCBlbnJvbGxFbGVtZW50ID0gJChcIi5sb2dvLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KGVucm9sbEVsZW1lbnQsIFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplP2NsaWVudF9pZD0ke3Byb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUR9YCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyB0eXBlIFNlbGVjdFxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHlwZUVsZW1lbnQgPSAkKFwiLmRyb3Bkb3duLXNlbGVjdC10eXBlXCIpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHlwZVRleHQgPSAkKFwiLnNlbGVjdC10eXBlXCIpO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQoc2VsZWN0VHlwZUVsZW1lbnQsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclBvcHVwKHsgdHlwZTogXCJzZWxlY3RUeXBlQ2hhbmdlXCIgfSk7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUG9wdXBfY2FuU3VibWl0LCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChzZWxlY3RUeXBlVGV4dCwgXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiYWZ0ZXJDbGlja2VkU2VsZWN0VHlwZVwiIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0RWwgPSAkKFwiaW5wdXRcIiwgJChcIi5uZXctcmVwby1jcmVhdGVcIikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZElucHV0RWwgPSAkKFwiaW5wdXRcIiwgJChcIi5vbGQtcmVwby1zZWxlY3RcIikpO1xuICAgICAgICAgICAgICAgIG5ld0lucHV0RWwudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG9sZElucHV0RWwudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHZlcmlmeU1zZy5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB0eXBlT3B0aW9ucyA9ICQkKFwiLm9wdGlvbi10eXBlXCIpO1xuICAgICAgICAgICAgdHlwZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgZW5yb2xsRXZlbnQob3B0aW9uLCBcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RUeXBlVGV4dC52YWx1ZSA9IG9wdGlvbi5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIG5ldyByZXBvIGlucHV0XG4gICAgICAgICAgICBjb25zdCB2ZXJpZnlNc2cgPSAkKFwiLnZlcmlmeS1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3SW5wdXRFbGVtZW50ID0gJChcIi5uZXctcmVwby1pbnB1dFwiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KG5ld0lucHV0RWxlbWVudCwgXCJrZXl1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUG9wdXAoeyB0eXBlOiBcInR5cGVOZXdSZXBvXCIgfSk7XG4gICAgICAgICAgICAgICAgdmVyaWZ5TXNnLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIG5ldyByZXBvIHZlcmlmeVxuICAgICAgICAgICAgY29uc3QgdmVyaWZ5QnV0dG9uID0gJChcIiN2ZXJpZnktcmVwb1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGVucm9sbEJ1dHRvbiA9ICQoXCIjY3JlYXRlLXJlcG9cIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudCh2ZXJpZnlCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlcG9OYW1lID0gbmV3SW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZU1zZyA9IHlpZWxkIHRoaXMudmFsaWRhdGVOZXdSZXBvTmFtZShuZXdSZXBvTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmeU1zZyA9ICQoXCIudmVyaWZ5LW1lc3NhZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIHZlcmlmeU1zZy5pbm5lclRleHQgPSB2YWxpZGF0ZU1zZztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiYWZ0ZXJWZXJpZmllZFwiIH0pO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BvcHVwX2NhblN1Ym1pdCwgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gcmVwbyBTZWxlY3RcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFJlcG9FbGVtZW50ID0gJChcIi5kcm9wZG93bi1zZWxlY3QtcmVwb1wiKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFJlcG9UZXh0ID0gJChcIi5zZWxlY3QtcmVwb1wiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KHNlbGVjdFJlcG9FbGVtZW50LCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiY2xpY2tSZXBvQmFyXCIgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KHNlbGVjdFJlcG9UZXh0LCBcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclBvcHVwKHsgdHlwZTogXCJibHVyT2xkUmVwb0xpc3RcIiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gbmV3IHJlcG8gZW5yb2xsXG4gICAgICAgICAgICBlbnJvbGxFdmVudChlbnJvbGxCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUG9wdXBfY2FuU3VibWl0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVwb+ulvCDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gJChcIi5uZXctcmVwby1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvTmFtZSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyUG9wdXAoeyB0eXBlOiBcInN0YXJ0TG9hZGluZ1wiIH0pO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIHBvc3ROZXdSZXBvKHJlcG9OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9OYW1lOiByZXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBvcHVwKHsgdHlwZTogXCJzdWNjZXNzRW5yb2xsXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwiZmFpbEVucm9sbFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBlbnJvbGxFdmVudChkb2N1bWVudCwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQb3B1cCh7IHR5cGU6IFwicmVzZXRTdGF0dXNcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIGxpbmsgb2xkIHJlcG9cbiAgICAgICAgICAgIGNvbnN0IGxpbmtSZXBvQnV0dG9uID0gJChcIiNsaW5rLXJlcG9cIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChsaW5rUmVwb0J1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qb3B1cF9jYW5TdWJtaXQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBv66W8IOyXsOqysO2VoCDsiJgg7JeG7Iq164uI64ukLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gJChcIi5kcm9wZG93bi1zZWxlY3QtcmVwbyBpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvTmFtZSA9IGlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICByZXBvTmFtZTogcmVwb05hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjb25zdCBsaW5rZWRSZXBvID0gJChcIi5sb2dvLXJlcG8tbG9naW5lZFwiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KGxpbmtlZFJlcG8sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBmb290ZXJcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9ICQoXCJmb290ZXJcIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChmb290ZXIsIFwiY2xpY2tcIiwgKCkgPT4gd2luZG93Lm9wZW4oYGh0dHBzOi8vZ2l0aHViLmNvbS9IQU5JVFovUFNIZWxwZXJgKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9uKCk7XG4gICAgfVxufVxuX1BvcHVwX2NhblN1Ym1pdCA9IG5ldyBXZWFrTWFwKCk7XG5uZXcgUG9wdXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==