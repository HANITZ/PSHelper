/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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
  margin: 15px 1px 10px 1px;
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
`, "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  width: 270px;\n  height: 300px;\n  margin: 0;\n  white-space: nowrap;\n  background: linear-gradient(331.91deg, #afa8de 4.31%, #9586ef 130.13%);\n}\n\n.logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px 0 5px;\n}\n\n.logo-button {\n  border-radius: 50%;\n  height: 90px;\n  width: 90px;\n  cursor: pointer;\n}\n\n.logo-text {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 10px;\n}\n\n.logo-text-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.logo-repo-logined {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  &:hover {\n    color: #aeb4b8;\n  }\n}\n\n.repo-container {\n  display: flex;\n}\n\n.repo-type {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 80px;\n}\n\n.dropdown-select-type {\n  height: 10px;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-right: 1px;\n}\n\n.dropdown-select-type.active {\n  height: 60px;\n}\n\n.dropdown-select-type input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 7px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.dropdown-select-type .options-type {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: scroll;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.01s;\n}\n\n.dropdown-select-type .options-type::-webkit-scrollbar {\n  display: none;\n}\n\n.dropdown-select-type.active .options-type {\n  visibility: visible;\n  opacity: 1;\n}\n\n.dropdown-select-type .options-type div {\n  padding: 2px 7px;\n  cursor: pointer;\n}\n\n.dropdown-select-type .options-type div:hover {\n  border-radius: 2px;\n  background: #62baea;\n  color: #fff;\n}\n\n.dropdown-select-type::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 174px;\n  right: 200px;\n  width: 6px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-type.active::before {\n  right: 196px;\n}\n\n.dropdown-select-type::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 174px;\n  right: 196px;\n  width: 6px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(-40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-type.active::after {\n  right: 200px;\n}\n\n.before-select-type {\n  border-radius: 7px;\n  padding: 5px 5px;\n  cursor: auto;\n  font-size: 11px;\n  background: #f3f3f3;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n}\n\n.new-repo-button {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #51d298;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #37dd95;\n  }\n}\n\n#verify-repo {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  background: #62baea;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n  &:hover {\n    background: #5ec5fd;\n  }\n}\n\n.verify-message {\n  margin-top: 3px;\n  font-size: 10px;\n  color: rgb(189, 36, 36);\n}\n\n.enroll-repo {\n  border-radius: 3px;\n  padding: 5px 5px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 500px;\n  background: #02bc68;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  margin-left: 2px;\n}\n\n.new-repo-input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.old-repo-select {\n  display: flex;\n  flex-direction: row;\n}\n\n.dropdown-select-repo {\n  height: 10px;\n  width: 53%;\n}\n\n.dropdown-select-repo::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 173px;\n  right: 77px;\n  width: 8px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-repo.active::before {\n  right: 72px;\n}\n\n.dropdown-select-repo::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 7px;\n  top: 173px;\n  right: 72px;\n  width: 8px;\n  height: 2px;\n  background: #555;\n  z-index: 10;\n  transform: rotate(-40deg);\n  transition: 0.5s;\n}\n\n.dropdown-select-repo.active::after {\n  right: 77px;\n}\n\n.dropdown-select-repo input {\n  cursor: pointer;\n  border-radius: 7px;\n  padding: 5px 5px;\n  font-size: 11px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);\n  outline: none;\n  border: none;\n  &:focus {\n    box-shadow: inset 0 0 0 2px #bdb7df;\n  }\n}\n\n.dropdown-select-repo .options-repo {\n  width: 100%;\n  height: 100px;\n  display: absolute;\n  background: #fff;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);\n  border-radius: 7px;\n  overflow-y: auto;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: 0.01s;\n}\n\n.dropdown-select-repo .options-repo::-webkit-scrollbar {\n  display: none;\n}\n\n.dropdown-select-repo.active .options-repo {\n  visibility: visible;\n  opacity: 1;\n}\n\n.dropdown-select-repo .options-repo div {\n  padding: 2px 7px;\n  cursor: pointer;\n}\n\n.dropdown-select-repo .options-repo div:hover {\n  border-radius: 3px;\n  background: #62baea;\n  color: #fff;\n}\n\n.option-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 10px 10px 0 0;\n}\n\n.option-container > .option-header {\n  width: 90%;\n  height: 30px;\n  margin: 15px 1px 10px 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.option-title {\n  font-size: 19px;\n  font-weight: 700;\n  color: #000;\n}\n\n.option-body {\n  width: 100%;\n}\n\n.option {\n  display: flex;\n  flex-direction: row;\n  margin: 7px 10px;\n  align-items: center;\n}\n\n.option span {\n  font-size: 15px;\n  font-weight: 500;\n  margin-right: auto;\n}\n\n.repo-switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  margin-right: 6px;\n}\n\n.repo-switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  border-radius: 34px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 14px;\n  width: 14px;\n  left: 3.5px;\n  bottom: 2.5px;\n  background-color: #fff;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.repo-switch input:checked + .slider {\n  background-color: #afa8de;\n  border-color: #fff;\n}\n\n.repo-switch input:focus + .slider {\n  box-shadow: 0 0 1px #afa8de;\n}\n\n.repo-switch input:checked + .slider:before {\n  -webkit-transform: translateX(9px);\n  -ms-transform: translateX(9px);\n  transform: translateX(9px);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n  cursor: pointer;\n  background: linear-gradient(to bottom, #463f6b 50.31%, #000 130.13%);\n}\n.footer-name {\n  font-size: 13px;\n  font-weight: 500px;\n  color: #fff;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup.css");

      
      
      
      
      
      
      
      
      

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
/* harmony export */   getDefaultBranch: () => (/* binding */ getDefaultBranch),
/* harmony export */   getReference: () => (/* binding */ getReference),
/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),
/* harmony export */   getUserRepos: () => (/* binding */ getUserRepos)
/* harmony export */ });
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chromeUtils */ "./src/chromeUtils.ts");
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
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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


/***/ }),

/***/ "./src/API/postReqAPI.ts":
/*!*******************************!*\
  !*** ./src/API/postReqAPI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBlob: () => (/* binding */ createBlob),
/* harmony export */   createCommit: () => (/* binding */ createCommit),
/* harmony export */   createTree: () => (/* binding */ createTree),
/* harmony export */   postNewRepo: () => (/* binding */ postNewRepo),
/* harmony export */   updateHead: () => (/* binding */ updateHead)
/* harmony export */ });
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chromeUtils */ "./src/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const postNewRepo = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const host = "https://api.github.com/user/repos";
    const data = JSON.stringify({
        name,
        private: true,
        auto_init: true,
        description: "알고리즘 자동 기록 보관소",
    });
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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

/***/ "./src/chromeUtils.ts":
/*!****************************!*\
  !*** ./src/chromeUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCurrentTab: () => (/* binding */ closeCurrentTab),
/* harmony export */   createChromeTabs: () => (/* binding */ createChromeTabs),
/* harmony export */   deleteChromeLocalStorage: () => (/* binding */ deleteChromeLocalStorage),
/* harmony export */   getChromeLocalStorage: () => (/* binding */ getChromeLocalStorage),
/* harmony export */   getChromeMessage: () => (/* binding */ getChromeMessage),
/* harmony export */   getChromeSyncStorage: () => (/* binding */ getChromeSyncStorage),
/* harmony export */   sendChromeMessage: () => (/* binding */ sendChromeMessage),
/* harmony export */   setChromeLocalStorage: () => (/* binding */ setChromeLocalStorage),
/* harmony export */   setChromeSyncStorage: () => (/* binding */ setChromeSyncStorage)
/* harmony export */ });
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
const createChromeTabs = (_a) => {
    var props = __rest(_a, []);
    chrome.tabs.create(Object.assign({}, props));
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
const setChromeLocalStorage = (_a, fn) => {
    var props = __rest(_a, []);
    if (fn === void 0) { fn = () => { }; }
    chrome.storage.local.set(Object.assign({}, props), fn);
};
const getChromeLocalStorage = (key) => {
    return chrome.storage.local.get([key]);
};
const deleteChromeLocalStorage = (key) => {
    chrome.storage.local.remove(key);
};
const sendChromeMessage = (_a) => {
    var props = __rest(_a, []);
    chrome.runtime.sendMessage(Object.assign({}, props));
};
const getChromeMessage = (fn) => {
    chrome.runtime.onMessage.addListener(fn);
};
const closeCurrentTab = (parent) => {
    let that = parent;
    chrome.tabs = parent;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            let tabId = tabs[0].id;
            if (!tabId)
                return;
            chrome.tabs.remove(tabId, () => {
                console.log("페이지 닫힘");
            });
        }
    });
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
/* harmony export */   b64EncodeUnicode: () => (/* binding */ b64EncodeUnicode),
/* harmony export */   convertSingleCharToDoubleChar: () => (/* binding */ convertSingleCharToDoubleChar),
/* harmony export */   createTimer: () => (/* binding */ createTimer),
/* harmony export */   enrollEvent: () => (/* binding */ enrollEvent),
/* harmony export */   getElById: () => (/* binding */ getElById),
/* harmony export */   hasElement: () => (/* binding */ hasElement),
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
const enrollEvent = (el, type, fn) => {
    el.addEventListener(type, fn);
};
const isObjEmpty = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};
const removeEvent = (el, type, fn) => {
    el.removeEventListener(type, fn);
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
const createTimer = (callbackFn) => {
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
        callbackFn(h, m, s);
    }, 1000);
    return timer;
};
const hasElement = (target) => {
    if (document.querySelector(target)) {
        return true;
    }
    return false;
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
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chromeUtils */ "./src/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup.css");
/* harmony import */ var _API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API/getReqAPI */ "./src/API/getReqAPI.ts");
/* harmony import */ var _API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API/postReqAPI */ "./src/API/postReqAPI.ts");
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
    constructor(element) {
        this.isLogined = false;
        _Popup_canSubmit.set(this, false);
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            console.log("시작");
            if (!(yield this.checkLogin())) {
                this.setTemplate("beforeLogin");
                return;
            }
            const { USER: user } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
            this.repos = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getUserRepos)();
            this.setOldRepos();
            if (!(yield this.checkLinkedRepo())) {
                this.setTemplate("afterLogin", user);
                return;
            }
            console.log("하이");
            const { repoName: linkedRepo } = (yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
            this.setTemplate("afterLink", user, linkedRepo);
            console.log("토큰 없음");
            return;
        });
        this.checkLinkedRepo = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName");
            console.log(user);
            if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.isObjEmpty)(user)) {
                console.log("비어있음");
                return false;
            }
            return true;
        });
        this.setOldRepos = () => {
            var _a;
            const repoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".options-repo");
            (_a = this.repos) === null || _a === void 0 ? void 0 : _a.forEach((repo) => {
                repoDiv.insertAdjacentHTML("beforeend", `<div class="option-repo">${repo.name}</div>`);
            });
            const selectRepoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-repo");
            const repoOptions = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$$)(".option-repo");
            repoOptions.forEach((option) => {
                (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(option, "mouseover", (event) => {
                    selectRepoText.value = option.innerText;
                    __classPrivateFieldSet(this, _Popup_canSubmit, true, "f");
                });
            });
        };
        this.setOption = () => { };
        this.setTemplate = (type, user, repo) => {
            const logoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-text");
            const repoContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".repo-container");
            const logoLoginedText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-text-logined");
            const logoLinkedText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-repo-logined");
            const optionContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".option-container");
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
                    break;
                case "afterLink":
                    logoText.style.display = "none";
                    logoLoginedText.style.display = "";
                    logoLinkedText.style.display = "";
                    repoContainer.style.display = "none";
                    logoLoginedText.innerText = `User: ${user}`;
                    logoLinkedText.innerText = `Repo: ${repo}`;
                    optionContainer.style.display = "";
                    break;
                default:
                    break;
            }
        };
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
                console.log(repo.name);
                if (name === repo.name)
                    return `이미 존재하는 Repo입니다.`;
            }
            return "";
        });
        this.checkLogin = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER");
            if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.isObjEmpty)(user)) {
                return false;
            }
            return true;
        });
        this.setEvent = () => {
            // logo click
            const enrollElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-button");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(enrollElement, "click", () => __awaiter(this, void 0, void 0, function* () {
                (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.createChromeTabs)({
                    url: `https://github.com/login/oauth/authorize?client_id=${"2f17ed4238f44ec245f1"}`,
                    active: false,
                });
                this.isLogined = true;
                setTimeout(() => {
                    this.init();
                }, 3000);
            }));
            // type Select
            const selectTypeElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".dropdown-select-type");
            const selectTypeText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-type");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectTypeElement, "click", () => {
                const verifyButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#verify-repo");
                const enrollButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#create-repo");
                selectTypeElement.classList.toggle("active");
                __classPrivateFieldSet(this, _Popup_canSubmit, false, "f");
                verifyButton.style.display = "";
                enrollButton.style.display = "none";
            });
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectTypeText, "blur", (e) => {
                selectTypeElement.classList.remove("active");
                const type = selectTypeText.value;
                const defaultRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".default-select");
                const newRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".new-repo-create");
                const oldRepoDiv = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".old-repo-select");
                const newInputEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("input", newRepoDiv);
                const oldInputEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("input", oldRepoDiv);
                newInputEl.value = "";
                oldInputEl.value = "";
                //
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
                const verifyButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#verify-repo");
                const enrollButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#create-repo");
                verifyMsg.style.display = "none";
                verifyButton.style.display = "";
                enrollButton.style.display = "none";
            });
            // new repo verify
            const verifyButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#verify-repo");
            const enrollButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#create-repo");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(verifyButton, "click", () => __awaiter(this, void 0, void 0, function* () {
                const newRepoName = newInputElement.value.trim();
                const validateMsg = yield this.validateNewRepoName(newRepoName);
                if (validateMsg) {
                    const verifyMsg = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".verify-message");
                    verifyMsg.style.display = "";
                    verifyMsg.innerText = validateMsg;
                    return;
                }
                verifyButton.style.display = "none";
                enrollButton.style.display = "";
                __classPrivateFieldSet(this, _Popup_canSubmit, true, "f");
            }));
            // repo Select
            const selectRepoElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".dropdown-select-repo");
            const selectRepoText = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".select-repo");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectRepoElement, "click", () => {
                selectRepoElement.classList.toggle("active");
            });
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(selectRepoText, "blur", () => {
                selectRepoElement.classList.remove("active");
            });
            // new repo enroll
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(enrollButton, "click", () => __awaiter(this, void 0, void 0, function* () {
                if (!__classPrivateFieldGet(this, _Popup_canSubmit, "f")) {
                    throw new Error("Repo를 생성할 수 없습니다");
                }
                const inputElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".new-repo-input");
                const repoName = inputElement.value.trim();
                const res = yield (0,_API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__.postNewRepo)(repoName);
                (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
                    repoName: res.name,
                });
                const repoContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".repo-container");
                repoContainer.style.display = "none";
                const optionContainer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".option-container");
                optionContainer.style.display = "";
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
                (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
                    repoName: repoName,
                });
                this.init();
            }));
            const linkedRepo = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)(".logo-repo-logined");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(linkedRepo, "click", () => {
                (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.deleteChromeLocalStorage)("repoName");
                this.init();
            });
        };
        this.element = element;
        this.setEvent();
        this.init();
        this.setOption();
    }
}
_Popup_canSubmit = new WeakMap();
try {
    new Popup((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#root"));
}
catch (e) {
    throw e;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxL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QztBQUN2QyxtQ0FBbUMsaURBQUM7QUFDcEMsWUFBWSwyREFBVztBQUN2QjtBQUNBLGFBQWE7QUFDYixZQUFZLDJEQUFXO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsWUFBWSwyREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQUM7QUFDdEM7QUFDQSxrQ0FBa0MsNERBQVc7QUFDN0MsZ0JBQWdCLG1FQUFxQjtBQUNyQztBQUNBLGlCQUFpQjtBQUNqQixzQ0FBc0MsaURBQUM7QUFDdkM7QUFDQSx3Q0FBd0MsaURBQUM7QUFDekM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1DQUFtQyxpREFBQztBQUNwQyxZQUFZLDJEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpREFBQztBQUN0QztBQUNBLGdCQUFnQixtRUFBcUI7QUFDckM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsK0JBQStCLGlEQUFDO0FBQ2hDLFlBQVksMkRBQVc7QUFDdkIsZ0JBQWdCLHNFQUF3QjtBQUN4QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvcG9wdXAuY3NzPzU5ZjkiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9BUEkvZ2V0UmVxQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0FQSS9wb3N0UmVxQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2Nocm9tZVV0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2pzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzMS45MWRlZywgI2FmYThkZSA0LjMxJSwgIzk1ODZlZiAxMzAuMTMlKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUwcHggMCA1cHg7XG59XG5cbi5sb2dvLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ28tdGV4dC1sb2dpbmVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ28tcmVwby1sb2dpbmVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2FlYjRiODtcbiAgfVxufVxuXG4ucmVwby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVwby10eXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB3aWR0aDogODBweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjYmRiN2RmO1xuICB9XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4wMXM7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmUgLm9wdGlvbnMtdHlwZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIGRpdiB7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIC5vcHRpb25zLXR5cGUgZGl2OmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdG9wOiAxNzRweDtcbiAgcmlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzU1NTtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC10eXBlLmFjdGl2ZTo6YmVmb3JlIHtcbiAgcmlnaHQ6IDE5NnB4O1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXR5cGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRvcDogMTc0cHg7XG4gIHJpZ2h0OiAxOTZweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlOjphZnRlciB7XG4gIHJpZ2h0OiAyMDBweDtcbn1cblxuLmJlZm9yZS1zZWxlY3QtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgY3Vyc29yOiBhdXRvO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmV3LXJlcG8tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogIzUxZDI5ODtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzN2RkOTU7XG4gIH1cbn1cblxuI3ZlcmlmeS1yZXBvIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogIzYyYmFlYTtcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1ZWM1ZmQ7XG4gIH1cbn1cblxuLnZlcmlmeS1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZ2IoMTg5LCAzNiwgMzYpO1xufVxuXG4uZW5yb2xsLXJlcG8ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMmJjNjg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubmV3LXJlcG8taW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XG4gIH1cbn1cblxuLm9sZC1yZXBvLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kcm9wZG93bi1zZWxlY3QtcmVwbyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDUzJTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgdG9wOiAxNzNweDtcbiAgcmlnaHQ6IDc3cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjpiZWZvcmUge1xuICByaWdodDogNzJweDtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0b3A6IDE3M3B4O1xuICByaWdodDogNzJweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjphZnRlciB7XG4gIHJpZ2h0OiA3N3B4O1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XG4gIH1cbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMzBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjAxcztcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvLmFjdGl2ZSAub3B0aW9ucy1yZXBvIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8gZGl2IHtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gLm9wdGlvbnMtcmVwbyBkaXY6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICM2MmJhZWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3B0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbi5vcHRpb24tY29udGFpbmVyID4gLm9wdGlvbi1oZWFkZXIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMTVweCAxcHggMTBweCAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9wdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5vcHRpb24tYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiA3cHggMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9wdGlvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yZXBvLXN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnJlcG8tc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgbGVmdDogMy41cHg7XG4gIGJvdHRvbTogMi41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnJlcG8tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYThkZTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjYWZhOGRlO1xufVxuXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ2M2Y2YiA1MC4zMSUsICMwMDAgMTMwLjEzJSk7XG59XG4uZm9vdGVyLW5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9w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QUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMzMS45MWRlZywgI2FmYThkZSA0LjMxJSwgIzk1ODZlZiAxMzAuMTMlKTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNTBweCAwIDVweDtcXG59XFxuXFxuLmxvZ28tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogOTBweDtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5sb2dvLXRleHQtbG9naW5lZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5sb2dvLXJlcG8tbG9naW5lZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICNhZWI0Yjg7XFxuICB9XFxufVxcblxcbi5yZXBvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmVwby10eXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXR5cGUuYWN0aXZlIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2JkYjdkZjtcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIC5vcHRpb25zLXR5cGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjAxcztcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIC5vcHRpb25zLXR5cGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmUgLm9wdGlvbnMtdHlwZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC10eXBlIC5vcHRpb25zLXR5cGUgZGl2IHtcXG4gIHBhZGRpbmc6IDJweCA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZSAub3B0aW9ucy10eXBlIGRpdjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjNjJiYWVhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgdG9wOiAxNzRweDtcXG4gIHJpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmU6OmJlZm9yZSB7XFxuICByaWdodDogMTk2cHg7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB0b3A6IDE3NHB4O1xcbiAgcmlnaHQ6IDE5NnB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtdHlwZS5hY3RpdmU6OmFmdGVyIHtcXG4gIHJpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmJlZm9yZS1zZWxlY3QtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgY3Vyc29yOiBhdXRvO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uZXctcmVwby1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kOiAjNTFkMjk4O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzM3ZGQ5NTtcXG4gIH1cXG59XFxuXFxuI3ZlcmlmeS1yZXBvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogIzYyYmFlYTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1ZWM1ZmQ7XFxuICB9XFxufVxcblxcbi52ZXJpZnktbWVzc2FnZSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogcmdiKDE4OSwgMzYsIDM2KTtcXG59XFxuXFxuLmVucm9sbC1yZXBvIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMDJiYzY4O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcblxcbi5uZXctcmVwby1pbnB1dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICNiZGI3ZGY7XFxuICB9XFxufVxcblxcbi5vbGQtcmVwby1zZWxlY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwbyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNTMlO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRvcDogMTczcHg7XFxuICByaWdodDogNzdweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kcm9wZG93bi1zZWxlY3QtcmVwby5hY3RpdmU6OmJlZm9yZSB7XFxuICByaWdodDogNzJweDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHRvcDogMTczcHg7XFxuICByaWdodDogNzJweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8uYWN0aXZlOjphZnRlciB7XFxuICByaWdodDogNzdweDtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIGlucHV0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2JkYjdkZjtcXG4gIH1cXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAzMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMDFzO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gLm9wdGlvbnMtcmVwbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvLmFjdGl2ZSAub3B0aW9ucy1yZXBvIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tc2VsZWN0LXJlcG8gLm9wdGlvbnMtcmVwbyBkaXYge1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLXNlbGVjdC1yZXBvIC5vcHRpb25zLXJlcG8gZGl2OmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6ICM2MmJhZWE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm9wdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG5cXG4ub3B0aW9uLWNvbnRhaW5lciA+IC5vcHRpb24taGVhZGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDE1cHggMXB4IDEwcHggMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLm9wdGlvbi1ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luOiA3cHggMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24gc3BhbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucmVwby1zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLnJlcG8tc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbGVmdDogMy41cHg7XFxuICBib3R0b206IDIuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5yZXBvLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhOGRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucmVwby1zd2l0Y2ggaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggI2FmYThkZTtcXG59XFxuXFxuLnJlcG8tc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ2M2Y2YiA1MC4zMSUsICMwMDAgMTMwLjEzJSk7XFxufVxcbi5mb290ZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2Nocm9tZVV0aWxzXCI7XG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlclwiO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IChjb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJSZXBvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLmRlZmF1bHRfYnJhbmNoO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UmVmZXJlbmNlID0gKGJyYW5jaCA9IFwibWFpblwiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmL2hlYWRzLyR7YnJhbmNofWA7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcmVmU0hBOiByZXMub2JqZWN0LnNoYSwgcmVmOiByZXMucmVmIH07XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2Nocm9tZVV0aWxzXCI7XG5pbXBvcnQgeyBiNjRFbmNvZGVVbmljb2RlIH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmV4cG9ydCBjb25zdCBwb3N0TmV3UmVwbyA9IChuYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIjtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcml2YXRlOiB0cnVlLFxuICAgICAgICBhdXRvX2luaXQ6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuyVjOqzoOumrOymmCDsnpDrj5kg6riw66GdIOuztOq0gOyGjFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG4vLyBleHBvcnQgdHlwZSBOZXdCbG9iID0ge1xuLy8gICBwYXRoOiBzdHJpbmc7XG4vLyAgIHNoYTogc3RyaW5nO1xuLy8gICBtb2RlOiBzdHJpbmc7XG4vLyAgIHR5cGU6IHN0cmluZztcbi8vIH07XG5leHBvcnQgY29uc3QgY3JlYXRlQmxvYiA9IChjb250ZW50LCBmaWxlTmFtZSwgZGlyZWN0b3J5KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBwYXRoID0gYCR7ZGlyZWN0b3J5fS8ke2ZpbGVOYW1lfWA7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvYmxvYnNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRlbnQ6IGI2NEVuY29kZVVuaWNvZGUoY29udGVudCksXG4gICAgICAgIGVuY29kaW5nOiBcImJhc2U2NFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4geyBwYXRoLCBzaGE6IHJlcy5zaGEsIG1vZGU6IFwiMTAwNjQ0XCIsIHR5cGU6IFwiYmxvYlwiIH07XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmVlID0gKHJlZlNIQSwgdHJlZV9pdGVtcykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3RyZWVzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB0cmVlOiB0cmVlX2l0ZW1zLCBiYXNlX3RyZWU6IHJlZlNIQSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21taXQgPSAobWVzc2FnZSwgdHJlZVNIQSwgcmVmU0hBKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvY29tbWl0c2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSwgdHJlZTogdHJlZVNIQSwgcGFyZW50OiBbcmVmU0hBXSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVIZWFkID0gKHJlZiwgY29tbWl0U0hBLCBmb3JjZSA9IHRydWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9yZWZzL2hlYWRzL21haW5gO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHNoYTogY29tbWl0U0hBLCBmb3JjZSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDaHJvbWVUYWJzID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZVN5bmNTdG9yYWdlID0gKF9hLCBmbikgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gKCkgPT4geyB9OyB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZVN5bmNTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIGZuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZU1lc3NhZ2UgPSAoZm4pID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZm4pO1xufTtcbmV4cG9ydCBjb25zdCBjbG9zZUN1cnJlbnRUYWIgPSAocGFyZW50KSA9PiB7XG4gICAgbGV0IHRoYXQgPSBwYXJlbnQ7XG4gICAgY2hyb21lLnRhYnMgPSBwYXJlbnQ7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgaWYgKHRhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhYklkID0gdGFic1swXS5pZDtcbiAgICAgICAgICAgIGlmICghdGFiSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMucmVtb3ZlKHRhYklkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLtjpjsnbTsp4Ag64ur7Z6YXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnTrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgJCQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50cylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnRz66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RWxCeUlkID0gKHRhcmdldElkKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXRJZH1pZOulvCDqsIDsp4Qg7JeY66as66i87Yq466W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0IGVucm9sbEV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IChlbCwgdHlwZSwgZm4pID0+IHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbn07XG5leHBvcnQgY29uc3QgYjY0RW5jb2RlVW5pY29kZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTk9QS1GXXsyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihgMHgke3B9YCkpO1xuICAgIH0pKTtcbn07XG5leHBvcnQgY29uc3QgY29udmVydFNpbmdsZUNoYXJUb0RvdWJsZUNoYXIgPSAodGV4dCkgPT4ge1xuICAgIC8vIHNpbmdsZUNoYXIgdG8gZG91YmxlQ2hhciBtYXBwaW5nXG4gICAgY29uc3QgbWFwID0ge1xuICAgICAgICBcIiFcIjogXCLvvIFcIixcbiAgICAgICAgXCIlXCI6IFwi77yFXCIsXG4gICAgICAgIFwiJlwiOiBcIu+8hlwiLFxuICAgICAgICBcIihcIjogXCLvvIhcIixcbiAgICAgICAgXCIpXCI6IFwi77yJXCIsXG4gICAgICAgIFwiKlwiOiBcIu+8ilwiLFxuICAgICAgICBcIitcIjogXCLvvItcIixcbiAgICAgICAgXCIsXCI6IFwi77yMXCIsXG4gICAgICAgIFwiLVwiOiBcIu+8jVwiLFxuICAgICAgICBcIi5cIjogXCLvvI5cIixcbiAgICAgICAgXCIvXCI6IFwi77yPXCIsXG4gICAgICAgIFwiOlwiOiBcIu+8mlwiLFxuICAgICAgICBcIjtcIjogXCLvvJtcIixcbiAgICAgICAgXCI8XCI6IFwi77ycXCIsXG4gICAgICAgIFwiPVwiOiBcIu+8nVwiLFxuICAgICAgICBcIj5cIjogXCLvvJ5cIixcbiAgICAgICAgXCI/XCI6IFwi77yfXCIsXG4gICAgICAgIFwiQFwiOiBcIu+8oFwiLFxuICAgICAgICBcIltcIjogXCLvvLtcIixcbiAgICAgICAgXCJcXFxcXCI6IFwi77y8XCIsXG4gICAgICAgIFwiXVwiOiBcIu+8vVwiLFxuICAgICAgICBcIl5cIjogXCLvvL5cIixcbiAgICAgICAgXzogXCLvvL9cIixcbiAgICAgICAgXCJgXCI6IFwi772AXCIsXG4gICAgICAgIFwie1wiOiBcIu+9m1wiLFxuICAgICAgICBcInxcIjogXCLvvZxcIixcbiAgICAgICAgXCJ9XCI6IFwi772dXCIsXG4gICAgICAgIFwiflwiOiBcIu+9nlwiLFxuICAgICAgICBcIiBcIjogXCLigIVcIiwgLy8g6rO167Cx66eMIOyghOqwgeusuOyekOqwgCDslYTri4wgRk9VUi1QRVItRU0gU1BBQ0XroZwg67OA7ZmYXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bISUmKCkqKyxcXC0uLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fiBdL2csIChrKSA9PiBtYXBba10pO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lciA9IChjYWxsYmFja0ZuKSA9PiB7XG4gICAgbGV0IFtzZWNzLCBtaW5zLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlY3MrKztcbiAgICAgICAgaWYgKHNlY3MgPT0gNjApIHtcbiAgICAgICAgICAgIHNlY3MgPSAwO1xuICAgICAgICAgICAgbWlucysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW5zID09IDYwKSB7XG4gICAgICAgICAgICBtaW5zID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMudG9TdHJpbmcoKSA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5zIDwgMTAgPyBcIjBcIiArIG1pbnMudG9TdHJpbmcoKSA6IG1pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcyA9IHNlY3MgPCAxMCA/IFwiMFwiICsgc2Vjcy50b1N0cmluZygpIDogc2Vjcy50b1N0cmluZygpO1xuICAgICAgICBjYWxsYmFja0ZuKGgsIG0sIHMpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgaGFzRWxlbWVudCA9ICh0YXJnZXQpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1BvcHVwX2NhblN1Ym1pdDtcbmltcG9ydCB7IGNyZWF0ZUNocm9tZVRhYnMsIGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSwgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIH0gZnJvbSBcIi4vY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7ICQsIGVucm9sbEV2ZW50IH0gZnJvbSBcIi4vdXRpbHMvanNVdGlsc1wiO1xuaW1wb3J0IFwiLi9wb3B1cC5jc3NcIjtcbmltcG9ydCB7IGlzT2JqRW1wdHkgfSBmcm9tIFwiLi91dGlscy9qc1V0aWxzXCI7XG5pbXBvcnQgeyAkJCB9IGZyb20gXCIuL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCB7IGdldFVzZXJSZXBvcyB9IGZyb20gXCIuL0FQSS9nZXRSZXFBUElcIjtcbmltcG9ydCB7IHBvc3ROZXdSZXBvIH0gZnJvbSBcIi4vQVBJL3Bvc3RSZXFBUElcIjtcbmNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaXNMb2dpbmVkID0gZmFsc2U7XG4gICAgICAgIF9Qb3B1cF9jYW5TdWJtaXQuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLsi5zsnpFcIik7XG4gICAgICAgICAgICBpZiAoISh5aWVsZCB0aGlzLmNoZWNrTG9naW4oKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRlbXBsYXRlKFwiYmVmb3JlTG9naW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zID0geWllbGQgZ2V0VXNlclJlcG9zKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9sZFJlcG9zKCk7XG4gICAgICAgICAgICBpZiAoISh5aWVsZCB0aGlzLmNoZWNrTGlua2VkUmVwbygpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGVtcGxhdGUoXCJhZnRlckxvZ2luXCIsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7ZWY7J20XCIpO1xuICAgICAgICAgICAgY29uc3QgeyByZXBvTmFtZTogbGlua2VkUmVwbyB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGVtcGxhdGUoXCJhZnRlckxpbmtcIiwgdXNlciwgbGlua2VkUmVwbyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIu2GoO2BsCDsl4bsnYxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrTGlua2VkUmVwbyA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICAgICAgaWYgKGlzT2JqRW1wdHkodXNlcikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuu5hOyWtOyeiOydjFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0T2xkUmVwb3MgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCByZXBvRGl2ID0gJChcIi5vcHRpb25zLXJlcG9cIik7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnJlcG9zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgocmVwbykgPT4ge1xuICAgICAgICAgICAgICAgIHJlcG9EaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8ZGl2IGNsYXNzPVwib3B0aW9uLXJlcG9cIj4ke3JlcG8ubmFtZX08L2Rpdj5gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0UmVwb1RleHQgPSAkKFwiLnNlbGVjdC1yZXBvXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVwb09wdGlvbnMgPSAkJChcIi5vcHRpb24tcmVwb1wiKTtcbiAgICAgICAgICAgIHJlcG9PcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGVucm9sbEV2ZW50KG9wdGlvbiwgXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlcG9UZXh0LnZhbHVlID0gb3B0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUG9wdXBfY2FuU3VibWl0LCB0cnVlLCBcImZcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb24gPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMuc2V0VGVtcGxhdGUgPSAodHlwZSwgdXNlciwgcmVwbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9nb1RleHQgPSAkKFwiLmxvZ28tdGV4dFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcG9Db250YWluZXIgPSAkKFwiLnJlcG8tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgbG9nb0xvZ2luZWRUZXh0ID0gJChcIi5sb2dvLXRleHQtbG9naW5lZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ29MaW5rZWRUZXh0ID0gJChcIi5sb2dvLXJlcG8tbG9naW5lZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9ICQoXCIub3B0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJiZWZvcmVMb2dpblwiOlxuICAgICAgICAgICAgICAgICAgICBsb2dvVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVwb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFmdGVyTG9naW5cIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nb1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICByZXBvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBsb2dvTG9naW5lZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGxvZ29MaW5rZWRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgbG9nb0xvZ2luZWRUZXh0LmlubmVyVGV4dCA9IGBVc2VyOiAke3VzZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFmdGVyTGlua1wiOlxuICAgICAgICAgICAgICAgICAgICBsb2dvVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIGxvZ29Mb2dpbmVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbG9nb0xpbmtlZFRleHQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBsb2dvTG9naW5lZFRleHQuaW5uZXJUZXh0ID0gYFVzZXI6ICR7dXNlcn1gO1xuICAgICAgICAgICAgICAgICAgICBsb2dvTGlua2VkVGV4dC5pbm5lclRleHQgPSBgUmVwbzogJHtyZXBvfWA7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmFsaWRhdGVOZXdSZXBvTmFtZSA9IChuYW1lKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqUXCI7XG4gICAgICAgICAgICBpZiAobmFtZS5sZW5ndGggPj0gMjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMjDsnpAg7J207IOB7J2YIOydtOumhOydhCDshKTsoJXtlaAg7IiYIOyXhuyKteuLiOuLpFwiO1xuICAgICAgICAgICAgY29uc3QgcmVnID0gL15bQS1aYS16MC05XXsxLDIwfSQvO1xuICAgICAgICAgICAgaWYgKCFyZWcudGVzdChuYW1lKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLslYztjIzrsrPqs7wg7Iir7J6Q66W8IOygnOyZuO2VnCDrrLjsnpDrpbwg7J6F66Cl7ZWgIOyImCDsl4bsirXri4jri6RcIjtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXBvcylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvIOygleuztOqwgCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukLlwiKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVwbyBvZiB0aGlzLnJlcG9zKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwby5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gcmVwby5uYW1lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYOydtOuvuCDsobTsnqztlZjripQgUmVwb+yeheuLiOuLpC5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrTG9naW4gPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0geWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKTtcbiAgICAgICAgICAgIGlmIChpc09iakVtcHR5KHVzZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gbG9nbyBjbGlja1xuICAgICAgICAgICAgY29uc3QgZW5yb2xsRWxlbWVudCA9ICQoXCIubG9nby1idXR0b25cIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChlbnJvbGxFbGVtZW50LCBcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDaHJvbWVUYWJzKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZT9jbGllbnRfaWQ9JHtwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lEfWAsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2luZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIHR5cGUgU2VsZWN0XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RUeXBlRWxlbWVudCA9ICQoXCIuZHJvcGRvd24tc2VsZWN0LXR5cGVcIik7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RUeXBlVGV4dCA9ICQoXCIuc2VsZWN0LXR5cGVcIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChzZWxlY3RUeXBlRWxlbWVudCwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZ5QnV0dG9uID0gJChcIiN2ZXJpZnktcmVwb1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnJvbGxCdXR0b24gPSAkKFwiI2NyZWF0ZS1yZXBvXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFR5cGVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUG9wdXBfY2FuU3VibWl0LCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgIHZlcmlmeUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBlbnJvbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChzZWxlY3RUeXBlVGV4dCwgXCJibHVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0VHlwZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gc2VsZWN0VHlwZVRleHQudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFJlcG9EaXYgPSAkKFwiLmRlZmF1bHQtc2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlcG9EaXYgPSAkKFwiLm5ldy1yZXBvLWNyZWF0ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRSZXBvRGl2ID0gJChcIi5vbGQtcmVwby1zZWxlY3RcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5wdXRFbCA9ICQoXCJpbnB1dFwiLCBuZXdSZXBvRGl2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRJbnB1dEVsID0gJChcImlucHV0XCIsIG9sZFJlcG9EaXYpO1xuICAgICAgICAgICAgICAgIG5ld0lucHV0RWwudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG9sZElucHV0RWwudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJOZXdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiT2xkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UmVwb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJlcG9EaXYuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UmVwb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRSZXBvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdHlwZU9wdGlvbnMgPSAkJChcIi5vcHRpb24tdHlwZVwiKTtcbiAgICAgICAgICAgIHR5cGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGVucm9sbEV2ZW50KG9wdGlvbiwgXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHlwZVRleHQudmFsdWUgPSBvcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBuZXcgcmVwbyBpbnB1dFxuICAgICAgICAgICAgY29uc3QgdmVyaWZ5TXNnID0gJChcIi52ZXJpZnktbWVzc2FnZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0RWxlbWVudCA9ICQoXCIubmV3LXJlcG8taW5wdXRcIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChuZXdJbnB1dEVsZW1lbnQsIFwia2V5dXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmeUJ1dHRvbiA9ICQoXCIjdmVyaWZ5LXJlcG9cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5yb2xsQnV0dG9uID0gJChcIiNjcmVhdGUtcmVwb1wiKTtcbiAgICAgICAgICAgICAgICB2ZXJpZnlNc2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHZlcmlmeUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBlbnJvbGxCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBuZXcgcmVwbyB2ZXJpZnlcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmeUJ1dHRvbiA9ICQoXCIjdmVyaWZ5LXJlcG9cIik7XG4gICAgICAgICAgICBjb25zdCBlbnJvbGxCdXR0b24gPSAkKFwiI2NyZWF0ZS1yZXBvXCIpO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQodmVyaWZ5QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSZXBvTmFtZSA9IG5ld0lucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVNc2cgPSB5aWVsZCB0aGlzLnZhbGlkYXRlTmV3UmVwb05hbWUobmV3UmVwb05hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZU1zZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZnlNc2cgPSAkKFwiLnZlcmlmeS1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgICAgICAgICB2ZXJpZnlNc2cuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHZlcmlmeU1zZy5pbm5lclRleHQgPSB2YWxpZGF0ZU1zZztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJpZnlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGVucm9sbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Qb3B1cF9jYW5TdWJtaXQsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIHJlcG8gU2VsZWN0XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RSZXBvRWxlbWVudCA9ICQoXCIuZHJvcGRvd24tc2VsZWN0LXJlcG9cIik7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RSZXBvVGV4dCA9ICQoXCIuc2VsZWN0LXJlcG9cIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChzZWxlY3RSZXBvRWxlbWVudCwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVwb0VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQoc2VsZWN0UmVwb1RleHQsIFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVwb0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gbmV3IHJlcG8gZW5yb2xsXG4gICAgICAgICAgICBlbnJvbGxFdmVudChlbnJvbGxCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUG9wdXBfY2FuU3VibWl0LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVwb+ulvCDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gJChcIi5uZXctcmVwby1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvTmFtZSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgcG9zdE5ld1JlcG8ocmVwb05hbWUpO1xuICAgICAgICAgICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9OYW1lOiByZXMubmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvQ29udGFpbmVyID0gJChcIi5yZXBvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICByZXBvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSAkKFwiLm9wdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgLy8gbGluayBvbGQgcmVwb1xuICAgICAgICAgICAgY29uc3QgbGlua1JlcG9CdXR0b24gPSAkKFwiI2xpbmstcmVwb1wiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KGxpbmtSZXBvQnV0dG9uLCBcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1BvcHVwX2NhblN1Ym1pdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcG/rpbwg7Jew6rKw7ZWgIOyImCDsl4bsirXri4jri6QuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSAkKFwiLmRyb3Bkb3duLXNlbGVjdC1yZXBvIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcG9OYW1lID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9OYW1lOiByZXBvTmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtlZFJlcG8gPSAkKFwiLmxvZ28tcmVwby1sb2dpbmVkXCIpO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQobGlua2VkUmVwbywgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXRFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb24oKTtcbiAgICB9XG59XG5fUG9wdXBfY2FuU3VibWl0ID0gbmV3IFdlYWtNYXAoKTtcbnRyeSB7XG4gICAgbmV3IFBvcHVwKCQoXCIjcm9vdFwiKSk7XG59XG5jYXRjaCAoZSkge1xuICAgIHRocm93IGU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=