/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Baekjun/Baekjun.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Baekjun/Baekjun.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.timer-container {
  margin-bottom: 0px;
}

.timer {
  font-size: 17px;
  font-weight: 600;
  color: #585f69;
  margin-bottom: -10px;
}

.result {
  display: flex;
  flex-direction: row;
}

.loading-solve {
  display: inline-block;
  position: relative;
  width: 80px;
  margin-left: 3px;
}
.loading-solve > div {
  display: inline-block;
  width: 5px;
  background: #afa8de;
  animation: loading-solve 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading-solve div:nth-child(1) {
  animation-delay: -0.24s;
}
.loading-solve div:nth-child(2) {
  animation-delay: -0.12s;
}
.loading-solve div:nth-child(3) {
  animation-delay: 0;
}
@keyframes loading-solve {
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

.success-solve {
  display: inline-block;
  transform: rotate(45deg);
  width: 9px;
  height: 14px;
  border-bottom: 4px solid #afa8de;
  border-right: 4px solid #afa8de;
  margin-left: 7px;
}

.fail-solve {
  background: #f9f9f9;
  width: 18px;
  height: 18px;
  position: relative;
  margin-left: 10px;
}

.fail-solve:after {
  content: "";
  height: 18px;
  border-left: 5px solid #cd8084;
  position: absolute;
  transform: rotate(45deg);
}

.fail-solve:before {
  content: "";
  height: 18px;
  border-left: 5px solid #cd8084;
  position: absolute;
  transform: rotate(-45deg);
}

.modal-baekjun {
  background-color: rgba(40, 56, 80, 0.8);
  display: block;
}

.modal-document {
  width: 600px;
  margin: 40px auto;
}
`, "",{"version":3,"sources":["webpack://./src/Baekjun/Baekjun.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,mBAAmB;EACnB,mEAAmE;AACrE;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE;IACE,QAAQ;IACR,YAAY;EACd;EACA;;IAEE,SAAS;IACT,WAAW;EACb;AACF;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,UAAU;EACV,YAAY;EACZ,gCAAgC;EAChC,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,uCAAuC;EACvC,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".timer-container {\n  margin-bottom: 0px;\n}\n\n.timer {\n  font-size: 17px;\n  font-weight: 600;\n  color: #585f69;\n  margin-bottom: -10px;\n}\n\n.result {\n  display: flex;\n  flex-direction: row;\n}\n\n.loading-solve {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  margin-left: 3px;\n}\n.loading-solve > div {\n  display: inline-block;\n  width: 5px;\n  background: #afa8de;\n  animation: loading-solve 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.loading-solve div:nth-child(1) {\n  animation-delay: -0.24s;\n}\n.loading-solve div:nth-child(2) {\n  animation-delay: -0.12s;\n}\n.loading-solve div:nth-child(3) {\n  animation-delay: 0;\n}\n@keyframes loading-solve {\n  0% {\n    top: 8px;\n    height: 16px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 7px;\n  }\n}\n\n.success-solve {\n  display: inline-block;\n  transform: rotate(45deg);\n  width: 9px;\n  height: 14px;\n  border-bottom: 4px solid #afa8de;\n  border-right: 4px solid #afa8de;\n  margin-left: 7px;\n}\n\n.fail-solve {\n  background: #f9f9f9;\n  width: 18px;\n  height: 18px;\n  position: relative;\n  margin-left: 10px;\n}\n\n.fail-solve:after {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.fail-solve:before {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(-45deg);\n}\n\n.modal-baekjun {\n  background-color: rgba(40, 56, 80, 0.8);\n  display: block;\n}\n\n.modal-document {\n  width: 600px;\n  margin: 40px auto;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Baekjun/Baekjun.css":
/*!*********************************!*\
  !*** ./src/Baekjun/Baekjun.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Baekjun.css */ "./node_modules/css-loader/dist/cjs.js!./src/Baekjun/Baekjun.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/Component/AlgorithmSite.ts":
/*!****************************************!*\
  !*** ./src/Component/AlgorithmSite.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmSite: () => (/* binding */ AlgorithmSite)
/* harmony export */ });
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");

class AlgorithmSite {
    constructor() {
        this.setTimer = (startTime) => {
            this.timer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.createTimer)(startTime, this.reRenderTime);
        };
        this.reRenderTime = ({ h, m, s }) => {
            const timeElements = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$$)(".timer");
            timeElements.forEach((el) => {
                el.innerText = `Timer: ${h}:${m}:${s}`;
            });
        };
    }
}


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
  !*** ./src/Baekjun/Baekjun.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _Baekjun_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Baekjun.css */ "./src/Baekjun/Baekjun.css");
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/chromeUtils */ "./src/utils/chromeUtils.ts");
/* harmony import */ var _API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API/getReqAPI */ "./src/API/getReqAPI.ts");
/* harmony import */ var _API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../API/postReqAPI */ "./src/API/postReqAPI.ts");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Constants */ "./src/utils/Constants.ts");
/* harmony import */ var _Component_AlgorithmSite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Component/AlgorithmSite */ "./src/Component/AlgorithmSite.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Baekjun extends _Component_AlgorithmSite__WEBPACK_IMPORTED_MODULE_6__.AlgorithmSite {
    constructor() {
        super();
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            const { BaekjunProblemId: baekjunProblemId } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.chromeStorageId.baekjunProblemId));
            const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.chromeStorageId.repo));
            if (!repoName)
                throw new Error(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.errorMsg.NotFoundRepo);
            if (!baekjunProblemId || !this.checkProblemId(baekjunProblemId)) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({
                    BaekjunProblemId: this.getProblemId(window.location.href),
                });
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({ baekjunTime: new Date().getTime() });
                return;
            }
            const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
            if (!baekjunTime) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({ baekjunTime: new Date().getTime() });
            }
        });
        this.getProblemId = (url) => {
            if (url.includes("problem")) {
                return url.split("https://www.acmicpc.net/problem/")[1];
            }
            return url.split("https://www.acmicpc.net/submit/")[1];
        };
        this.startSolving = () => __awaiter(this, void 0, void 0, function* () {
            const { isTimer } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.chromeStorageId.isTimer));
            if (isTimer) {
                this.setBaekjunTimer();
            }
        });
        this.readyToSubmit = () => {
            this.setSubmitEvent();
        };
        this.setBaekjunTimer = () => {
            window.onload = () => __awaiter(this, void 0, void 0, function* () {
                yield this.setTimerTemplate();
                const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
                this.setTimer(baekjunTime);
            });
        };
        this.setSubmitEvent = () => {
            const submitButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#submit_button");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.enrollEvent)(submitButton, "click", () => {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({
                    submitedProblem: this.getProblemId(window.location.href),
                });
            });
        };
        this.checkSubmited = () => __awaiter(this, void 0, void 0, function* () {
            const { submitedProblem } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.chromeStorageId.submitedProblemId));
            console.log(submitedProblem);
            if (submitedProblem && submitedProblem === (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)("problem_id")) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage)(_utils_Constants__WEBPACK_IMPORTED_MODULE_5__.chromeStorageId.submitedProblemId);
                this.afterSubmit();
            }
        });
        this.checkSuccess = () => {
            const resultMsg = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".result-text").innerText;
            if (resultMsg === "맞았습니다!!") {
                return true;
            }
            return false;
        };
        this.afterSubmit = () => __awaiter(this, void 0, void 0, function* () {
            this.startLoading();
            const checkSuccessInterval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                const statusTable = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#status-table");
                const submitedInfo = statusTable.rows[1];
                const resultElement = submitedInfo.cells[3];
                if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.hasElement)(".result-ac", resultElement)) {
                    clearInterval(checkSuccessInterval);
                    if (this.checkSuccess()) {
                        clearInterval(this.timer);
                        this.afterSuccess(submitedInfo);
                        return;
                    }
                    this.afterFail();
                }
                if ((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.hasElement)(".result-rte", resultElement)) {
                    this.afterFail();
                    clearInterval(this.timer);
                }
            }), 1500);
        });
        this.renderModalAfterSuccess = (solvingTime) => {
            const contentElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".wrapper");
            console.log(contentElement);
            const html = `
      <div class="modal-baekjun"  tabindex="-1" role="dialog" >
        <div class="modal-document" role="document" >
          <div class="modal-content">
            <div class="modal-header" >
              <button type="button" class="close-button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">x</span>
              </button>
              <h4 aria-hidden="true" >정답입니다</h4>
            </div>
            <div class="modal-body">
              <div class="result-container">
                <span>풀이시간: ${solvingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.insertHTML)({ element: contentElement, position: "afterend", html });
        };
        this.afterSuccess = (submitedInfo) => __awaiter(this, void 0, void 0, function* () {
            const { isUpload } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("isUpload"));
            const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
            const submissionId = submitedInfo.cells[0].innerText;
            const problemId = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)("problem_id");
            const spentTime = submitedInfo.cells[5].innerText;
            const spentMemory = submitedInfo.cells[4].innerText;
            const language = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("a", submitedInfo.cells[6]).innerText;
            const solvingTime = Object.values((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getTimeDiff)(baekjunTime, new Date().getTime())).join(" : ");
            const code = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getBaekjunSolvedData)(submissionId);
            const description = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getBaekjunProblemDescription)(problemId);
            const { acceptedUserCount, averageTries, official, level, titleKo, tags, } = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getProblemInfoBySolvedAc)(problemId);
            const category = tags.map((tag) => tag.displayNames[0].name).join(", ");
            const problemContent = this.createProblemContent({
                description,
                acceptedUserCount,
                averageTries,
                official,
                level,
                title: titleKo,
                problemId,
                solvingTime,
                spentTime,
                spentMemory,
                category,
                language,
            });
            if (isUpload) {
                yield (0,_API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__.commitCodeToRepo)(Object.assign(Object.assign({}, problemContent), { code }));
            }
            this.renderModalAfterSuccess(solvingTime);
            yield this.renderSuccessMark();
            (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage)("baekjunTime");
        });
        this.afterFail = () => {
            this.renderFailMark();
        };
        this.createProblemContent = ({ description, acceptedUserCount, averageTries, official, level, title, problemId, solvingTime, spentTime, spentMemory, category, language, }) => {
            const directory = this.getDirectory({ level, problemId, title });
            const message = this.getMessage({
                level,
                spentMemory,
                spentTime,
                solvingTime,
                title,
            });
            const fileName = this.getFileName({ title, language });
            const readMe = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getReadmeText)({
                level,
                title,
                solvingTime,
                problemId,
                spentMemory,
                spentTime,
                category,
                description,
            });
            return { directory, message, fileName, readMe };
        };
        this.getFileName = ({ title, language }) => `${(0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar)(title)}.${_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES[language]}`;
        this.getMessage = ({ level, title, spentMemory, spentTime, solvingTime, }) => `[${_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.SOLVEDAC_LEVEL[level]}] Title: ${title} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;
        this.getDirectory = ({ level, problemId, title }) => `Baekjun/${_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.SOLVEDAC_LEVEL[level].replace(/ .*/, "")}/${problemId}. ${(0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar)(title)}`;
        this.getSolvedData = (submissionId) => { };
        this.startLoading = () => {
            const resultElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".result");
            resultElement.insertAdjacentHTML("beforeend", `
      <div class="loading-solve">
      <div></div>
      <div></div>
      <div></div>
      </div>
    `);
        };
        this.checkProblemId = (id) => {
            const splitedLink = window.location.href.split(/=|&|\//);
            if (splitedLink.includes(id)) {
                return true;
            }
            return false;
        };
        this.setTimerTemplate = () => {
            const element = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".page-header");
            const position = "afterbegin";
            const html = `<div class="timer-container" >
    <p class="timer"></p>
    </div>
    `;
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.insertHTML)({ element, position, html });
        };
        this.renderFailMark = () => {
            const statusElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".loading-solve");
            statusElement.className = "fail-solve";
        };
        this.renderSuccessMark = () => {
            const statusElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".loading-solve");
            statusElement.className = "success-solve";
        };
        this.init();
        this.checkSubmited();
    }
}
const baekjun = new Baekjun();
if (window.location.href.includes("/problem/")) {
    baekjun.startSolving();
}
else if (window.location.href.includes("/submit/")) {
    baekjun.readyToSubmit();
}
// baekjun.createModalAfterSuccess("12:12:12");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixxQkFBcUI7QUFDckI7QUFDQSw4QkFBOEIsaUJBQWlCLFFBQVEsNkVBQTZCLFFBQVEsR0FBRyxxREFBUyxXQUFXO0FBQ25ILDZCQUE2QixvREFBb0QsU0FBUywwREFBYyxRQUFRLFdBQVcsT0FBTyxVQUFVLFdBQVcsY0FBYyxhQUFhLHFCQUFxQixZQUFZO0FBQ25OLCtCQUErQix5QkFBeUIsZ0JBQWdCLDBEQUFjLDJCQUEyQixHQUFHLFVBQVUsSUFBSSw2RUFBNkIsUUFBUTtBQUN2SztBQUNBO0FBQ0Esa0NBQWtDLGlEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFVLEdBQUcseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQSxrQ0FBa0MsaURBQUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9CYWVranVuL0JhZWtqdW4uY3NzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0JhZWtqdW4vQmFla2p1bi5jc3M/MjFmOSIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0FQSS9nZXRSZXFBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQVBJL3Bvc3RSZXFBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQ29tcG9uZW50L0FsZ29yaXRobVNpdGUudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kQVBJL2dldFJlcUJhY2tncm91bmRBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2Nocm9tZVV0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2pzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQmFla2p1bi9CYWVranVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGltZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGltZXIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTg1ZjY5O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLnJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sb2FkaW5nLXNvbHZlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmxvYWRpbmctc29sdmUgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNhZmE4ZGU7XG4gIGFuaW1hdGlvbjogbG9hZGluZy1zb2x2ZSAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nLXNvbHZlIHtcbiAgMCUge1xuICAgIHRvcDogOHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA1MCUsXG4gIDEwMCUge1xuICAgIHRvcDogMjRweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxufVxuXG4uc3VjY2Vzcy1zb2x2ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWZhOGRlO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjYWZhOGRlO1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uZmFpbC1zb2x2ZSB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mYWlsLXNvbHZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZmFpbC1zb2x2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubW9kYWwtYmFla2p1biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDU2LCA4MCwgMC44KTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tb2RhbC1kb2N1bWVudCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9CYWVranVuL0JhZWtqdW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUVBQW1FO0FBQ3JFO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLFFBQVE7SUFDUixZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxTQUFTO0lBQ1QsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpbWVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi50aW1lciB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM1ODVmNjk7XFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG59XFxuXFxuLnJlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmxvYWRpbmctc29sdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4ubG9hZGluZy1zb2x2ZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNXB4O1xcbiAgYmFja2dyb3VuZDogI2FmYThkZTtcXG4gIGFuaW1hdGlvbjogbG9hZGluZy1zb2x2ZSAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XFxufVxcbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XFxufVxcbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XFxufVxcbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xcbn1cXG5Aa2V5ZnJhbWVzIGxvYWRpbmctc29sdmUge1xcbiAgMCUge1xcbiAgICB0b3A6IDhweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgfVxcbiAgNTAlLFxcbiAgMTAwJSB7XFxuICAgIHRvcDogMjRweDtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICB9XFxufVxcblxcbi5zdWNjZXNzLXNvbHZlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2FmYThkZTtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNhZmE4ZGU7XFxuICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG4uZmFpbC1zb2x2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmZhaWwtc29sdmU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5mYWlsLXNvbHZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5tb2RhbC1iYWVranVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDU2LCA4MCwgMC44KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtZG9jdW1lbnQge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0JhZWtqdW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CYWVranVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNBUEkgfSBmcm9tIFwiLi4vYmFja2dyb3VuZC9iYWNrZ3JvdW5kQVBJL2dldFJlcUJhY2tncm91bmRBUElcIjtcbmltcG9ydCB7IGdldENocm9tZUxvY2FsU3RvcmFnZSwgc2VuZENocm9tZU1lc3NhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7ICQsIGh0bWxFbnRpdHlEZWNvZGUgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKHRva2VuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJcIjtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYHRva2VuICR7dG9rZW59YCxcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAoY29kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICB9KSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVwb3MgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIiwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEJyYW5jaCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9YDtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5kZWZhdWx0X2JyYW5jaDtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFJlZmVyZW5jZSA9IChicmFuY2ggPSBcIm1haW5cIikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3JlZi9oZWFkcy8ke2JyYW5jaH1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiB7IHJlZlNIQTogcmVzLm9iamVjdC5zaGEsIHJlZjogcmVzLnJlZiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blNvbHZlZERhdGEgPSAoc3VibWlzc2lvbklkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3NvdXJjZS9kb3dubG9hZC8ke3N1Ym1pc3Npb25JZH1gO1xuICAgIGNvbnN0IGNvZGUgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2VjLUZldGNoLURlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtTW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICByZXR1cm4gY29kZTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldEJhZWtqdW5Qcm9ibGVtRGVzY3JpcHRpb24gPSAocHJvYmxlbUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHtwcm9ibGVtSWR9YDtcbiAgICBjb25zdCBkb2MgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwic2VjLWZldGNoLWRlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtbW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICBjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkb2MsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1faW5wdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3Qgb3V0cHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fb3V0cHV0XCIsIGh0bWwpLmlubmVySFRNTC50cmltKCkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fZGVzY3JpcHRpb25cIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uICsgaW5wdXQgKyBvdXRwdXQ7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWMgPSAocHJvYmxlbUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0geWllbGQgc2VuZENocm9tZU1lc3NhZ2Uoe1xuICAgICAgICBhY3Rpb246IFwiYmFla2p1blwiLFxuICAgICAgICB0YXNrOiBcImdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY1wiLFxuICAgICAgICBwcm9ibGVtSWQsXG4gICAgfSk7XG4gICAgLy8g7J6E7IucXG4gICAgY29uc3QgYSA9IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSShwcm9ibGVtSWQpO1xuICAgIGNvbnNvbGUubG9nKGEpO1xuICAgIC8vXG4gICAgcmV0dXJuIGRhdGE7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2Nocm9tZVV0aWxzXCI7XG5pbXBvcnQgeyBiNjRFbmNvZGVVbmljb2RlIH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRCcmFuY2gsIGdldFJlZmVyZW5jZSB9IGZyb20gXCIuL2dldFJlcUFQSVwiO1xuZXhwb3J0IGNvbnN0IGNvbW1pdENvZGVUb1JlcG8gPSAoeyBkaXJlY3RvcnksIGNvZGUsIG1lc3NhZ2UsIHJlYWRNZSwgZmlsZU5hbWUsIH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCcmFuY2ggPSB5aWVsZCBnZXREZWZhdWx0QnJhbmNoKCk7XG4gICAgY29uc3QgeyByZWZTSEEsIHJlZiB9ID0geWllbGQgZ2V0UmVmZXJlbmNlKGRlZmF1bHRCcmFuY2gpO1xuICAgIGNvbnN0IHNvdXJjZUNvZGUgPSB5aWVsZCBjcmVhdGVCbG9iKGNvZGUsIGZpbGVOYW1lLCBkaXJlY3RvcnkpO1xuICAgIGNvbnN0IHNvdXJjZVJlYWRNZSA9IHlpZWxkIGNyZWF0ZUJsb2IocmVhZE1lLCBcIlJFQURNRS5tZFwiLCBkaXJlY3RvcnkpO1xuICAgIGNvbnN0IHRyZWVTSEEgPSB5aWVsZCBjcmVhdGVUcmVlKHJlZlNIQSwgW3NvdXJjZUNvZGUsIHNvdXJjZVJlYWRNZV0pO1xuICAgIGNvbnN0IGNvbW1pdFNIQSA9IHlpZWxkIGNyZWF0ZUNvbW1pdChtZXNzYWdlLCB0cmVlU0hBLCByZWZTSEEpO1xuICAgIHlpZWxkIHVwZGF0ZUhlYWQocmVmLCBjb21taXRTSEEpO1xufSk7XG5leHBvcnQgY29uc3QgcG9zdE5ld1JlcG8gPSAobmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyL3JlcG9zXCI7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJpdmF0ZTogdHJ1ZSxcbiAgICAgICAgYXV0b19pbml0OiB0cnVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCLslYzqs6Drpqzsppgg7J6Q64+ZIOq4sOuhnSDrs7TqtIDshoxcIixcbiAgICB9KTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuLy8gZXhwb3J0IHR5cGUgTmV3QmxvYiA9IHtcbi8vICAgcGF0aDogc3RyaW5nO1xuLy8gICBzaGE6IHN0cmluZztcbi8vICAgbW9kZTogc3RyaW5nO1xuLy8gICB0eXBlOiBzdHJpbmc7XG4vLyB9O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUJsb2IgPSAoY29udGVudCwgZmlsZU5hbWUsIGRpcmVjdG9yeSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgcGF0aCA9IGAke2RpcmVjdG9yeX0vJHtmaWxlTmFtZX1gO1xuICAgIGlmICghR0lUSFVCX1RPS0VOKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb2tlbiDsoJXrs7Trpbwg6rCA7KC47Jik7KeAIOuqu+2WiOyKteuLiOuLpC5cIik7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L2Jsb2JzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjb250ZW50OiBiNjRFbmNvZGVVbmljb2RlKGNvbnRlbnQpLFxuICAgICAgICBlbmNvZGluZzogXCJiYXNlNjRcIixcbiAgICB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcGF0aCwgc2hhOiByZXMuc2hhLCBtb2RlOiBcIjEwMDY0NFwiLCB0eXBlOiBcImJsb2JcIiB9O1xufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVHJlZSA9IChyZWZTSEEsIHRyZWVfaXRlbXMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC90cmVlc2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdHJlZTogdHJlZV9pdGVtcywgYmFzZV90cmVlOiByZWZTSEEgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXMuc2hhO1xufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWl0ID0gKG1lc3NhZ2UsIHRyZWVTSEEsIHJlZlNIQSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L2NvbW1pdHNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2UsIHRyZWU6IHRyZWVTSEEsIHBhcmVudDogW3JlZlNIQV0gfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXMuc2hhO1xufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlSGVhZCA9IChyZWYsIGNvbW1pdFNIQSwgZm9yY2UgPSB0cnVlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmcy9oZWFkcy9tYWluYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBzaGE6IGNvbW1pdFNIQSwgZm9yY2UgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG4iLCJpbXBvcnQgeyAkJCwgY3JlYXRlVGltZXIgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuZXhwb3J0IGNsYXNzIEFsZ29yaXRobVNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNldFRpbWVyID0gKHN0YXJ0VGltZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNyZWF0ZVRpbWVyKHN0YXJ0VGltZSwgdGhpcy5yZVJlbmRlclRpbWUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlUmVuZGVyVGltZSA9ICh7IGgsIG0sIHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGltZUVsZW1lbnRzID0gJCQoXCIudGltZXJcIik7XG4gICAgICAgICAgICB0aW1lRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSBgVGltZXI6ICR7aH06JHttfToke3N9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSSA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9zb2x2ZWQuYWMvYXBpL3YzL3Byb2JsZW0vc2hvdz9wcm9ibGVtSWQ9JHtwcm9ibGVtSWR9YDtcbiAgICByZXR1cm4geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBlcnJvck1zZyA9IHtcbiAgICBOb3RGb3VuZFJlcG86IFwiUmVwb3NpdG9yeeqwgCDslYTsp4Eg7ISk7KCV65CY7KeAIOyViuyVmOyKteuLiOuLpC5cIixcbn07XG5leHBvcnQgY29uc3QgY2hyb21lU3RvcmFnZUlkID0ge1xuICAgIGJhZWtqdW5Qcm9ibGVtSWQ6IFwiQmFla2p1blByb2JsZW1JZFwiLFxuICAgIHJlcG86IFwicmVwb05hbWVcIixcbiAgICBpc1RpbWVyOiBcImlzVGltZXJcIixcbiAgICBpc1VwbG9hZDogXCJpc1VwbG9hZFwiLFxuICAgIHN1Ym1pdGVkUHJvYmxlbUlkOiBcInN1Ym1pdGVkUHJvYmxlbVwiLFxufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZVN5bmNTdG9yYWdlID0gKF9hLCBmbikgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gKCkgPT4geyB9OyB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZVN5bmNTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIGZuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoX2EpID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSwgY2FsbGJhY2tGbikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2FsbGJhY2tGbik7XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTWVzc2FnZSA9IChmbikgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0ICQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW5066W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVsID0gKHNlbGVjdG9yLCBjb250ZXh0KSA9PiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbEVsID0gKHNlbGVjdG9yLCBjb250ZXh0KSA9PiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuZXhwb3J0IGNvbnN0ICQkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudHMpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW50c+ulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cyk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEVsQnlJZCA9ICh0YXJnZXRJZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0SWR9aWTrpbwg6rCA7KeEIOyXmOumrOuovO2KuOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBlbnJvbGxFdmVudCA9IChlbCwgdHlwZSwgZm4sIG9wdGlvbnMpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBvcHRpb25zKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlRXZlbnQgPSAoZWwsIHR5cGUsIGZuKSA9PiB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGlzT2JqRW1wdHkgPSAob2JqKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopID09PSBKU09OLnN0cmluZ2lmeSh7fSk7XG59O1xuZXhwb3J0IGNvbnN0IGI2NEVuY29kZVVuaWNvZGUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05PUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIoYDB4JHtwfWApKTtcbiAgICB9KSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyID0gKHRleHQpID0+IHtcbiAgICAvLyBzaW5nbGVDaGFyIHRvIGRvdWJsZUNoYXIgbWFwcGluZ1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgXCIhXCI6IFwi77yBXCIsXG4gICAgICAgIFwiJVwiOiBcIu+8hVwiLFxuICAgICAgICBcIiZcIjogXCLvvIZcIixcbiAgICAgICAgXCIoXCI6IFwi77yIXCIsXG4gICAgICAgIFwiKVwiOiBcIu+8iVwiLFxuICAgICAgICBcIipcIjogXCLvvIpcIixcbiAgICAgICAgXCIrXCI6IFwi77yLXCIsXG4gICAgICAgIFwiLFwiOiBcIu+8jFwiLFxuICAgICAgICBcIi1cIjogXCLvvI1cIixcbiAgICAgICAgXCIuXCI6IFwi77yOXCIsXG4gICAgICAgIFwiL1wiOiBcIu+8j1wiLFxuICAgICAgICBcIjpcIjogXCLvvJpcIixcbiAgICAgICAgXCI7XCI6IFwi77ybXCIsXG4gICAgICAgIFwiPFwiOiBcIu+8nFwiLFxuICAgICAgICBcIj1cIjogXCLvvJ1cIixcbiAgICAgICAgXCI+XCI6IFwi77yeXCIsXG4gICAgICAgIFwiP1wiOiBcIu+8n1wiLFxuICAgICAgICBcIkBcIjogXCLvvKBcIixcbiAgICAgICAgXCJbXCI6IFwi77y7XCIsXG4gICAgICAgIFwiXFxcXFwiOiBcIu+8vFwiLFxuICAgICAgICBcIl1cIjogXCLvvL1cIixcbiAgICAgICAgXCJeXCI6IFwi77y+XCIsXG4gICAgICAgIF86IFwi77y/XCIsXG4gICAgICAgIFwiYFwiOiBcIu+9gFwiLFxuICAgICAgICBcIntcIjogXCLvvZtcIixcbiAgICAgICAgXCJ8XCI6IFwi772cXCIsXG4gICAgICAgIFwifVwiOiBcIu+9nVwiLFxuICAgICAgICBcIn5cIjogXCLvvZ5cIixcbiAgICAgICAgXCIgXCI6IFwi4oCFXCIsIC8vIOqzteuwseunjCDsoITqsIHrrLjsnpDqsIAg7JWE64uMIEZPVVItUEVSLUVNIFNQQUNF66GcIOuzgO2ZmFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWyElJigpKissXFwtLi86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX4gXS9nLCAoaykgPT4gbWFwW2tdKTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlZVRpbWVyID0gKGNhbGxiYWNrRm4pID0+IHtcbiAgICBsZXQgW3NlY3MsIG1pbnMsIGhvdXJzXSA9IFswLCAwLCAwXTtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2VjcysrO1xuICAgICAgICBpZiAoc2VjcyA9PSA2MCkge1xuICAgICAgICAgICAgc2VjcyA9IDA7XG4gICAgICAgICAgICBtaW5zKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnMgPT0gNjApIHtcbiAgICAgICAgICAgIG1pbnMgPSAwO1xuICAgICAgICAgICAgaG91cnMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT0gMTApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGggPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3Vycy50b1N0cmluZygpIDogaG91cnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbSA9IG1pbnMgPCAxMCA/IFwiMFwiICsgbWlucy50b1N0cmluZygpIDogbWlucy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzID0gc2VjcyA8IDEwID8gXCIwXCIgKyBzZWNzLnRvU3RyaW5nKCkgOiBzZWNzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNhbGxiYWNrRm4oeyBoLCBtLCBzIH0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXIgPSAoc3RhcnRUaW1lLCBjYWxsYmFja0ZuKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgeyBoLCBtLCBzIH0gPSBnZXRUaW1lRGlmZihzdGFydFRpbWUsIG5vd1RpbWUpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGluc2VydEhUTUwgPSAoeyBlbGVtZW50LCBwb3NpdGlvbiwgaHRtbCB9KSA9PiB7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIGh0bWwpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUaW1lRGlmZiA9IChzdGFydFRpbWUsIG5vd1RpbWUpID0+IHtcbiAgICBsZXQgW2hvdXIsIG1pbiwgc2VjXSA9IFswLCAwLCAwXTtcbiAgICBsZXQgdGltZURpZmZTZWMgPSBNYXRoLmZsb29yKChub3dUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuICAgIGlmICh0aW1lRGlmZlNlYyA+IDM2MDApIHtcbiAgICAgICAgaG91ciA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyAzNjAwKTtcbiAgICAgICAgdGltZURpZmZTZWMgPSB0aW1lRGlmZlNlYyAlIDM2MDA7XG4gICAgfVxuICAgIGlmICh0aW1lRGlmZlNlYyA+IDYwKSB7XG4gICAgICAgIG1pbiA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyA2MCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSA2MDtcbiAgICB9XG4gICAgc2VjID0gdGltZURpZmZTZWM7XG4gICAgY29uc3QgaCA9IGhvdXIgPCAxMCA/IFwiMFwiICsgaG91ci50b1N0cmluZygpIDogaG91ci50b1N0cmluZygpO1xuICAgIGNvbnN0IG0gPSBtaW4gPCAxMCA/IFwiMFwiICsgbWluLnRvU3RyaW5nKCkgOiBtaW4udG9TdHJpbmcoKTtcbiAgICBjb25zdCBzID0gc2VjIDwgMTAgPyBcIjBcIiArIHNlYy50b1N0cmluZygpIDogc2VjLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHsgaCwgbSwgcyB9O1xufTtcbmV4cG9ydCBjb25zdCBoYXNFbGVtZW50ID0gKHRhcmdldCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGh0bWxFbnRpdHlEZWNvZGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHVuZXNjYXBlZCA9IHtcbiAgICAgICAgXCImYW1wO1wiOiBcIiZcIixcbiAgICAgICAgXCImIzM4O1wiOiBcIiZcIixcbiAgICAgICAgXCImbHQ7XCI6IFwiPFwiLFxuICAgICAgICBcIiYjNjA7XCI6IFwiPFwiLFxuICAgICAgICBcIiZndDtcIjogXCI+XCIsXG4gICAgICAgIFwiJiM2MjtcIjogXCI+XCIsXG4gICAgICAgIFwiJmFwb3M7XCI6IFwiJ1wiLFxuICAgICAgICBcIiYjMzk7XCI6IFwiJ1wiLFxuICAgICAgICBcIiZxdW90O1wiOiAnXCInLFxuICAgICAgICBcIiYjMzQ7XCI6ICdcIicsXG4gICAgICAgIFwiJm5ic3A7XCI6IFwiIFwiLFxuICAgICAgICBcIiYjMTYwO1wiOiBcIiBcIixcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzR8bmJzcHwjMTYwKTsvZywgKHdvcmQpID0+IHVuZXNjYXBlZFt3b3JkXSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5UGFyYW0gPSAocXVlcnkpID0+IHtcbiAgICBjb25zdCBwYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KHF1ZXJ5KTtcbiAgICBpZiAoIXBhcmFtKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBGb3VuZCBRdWVyeSAke3F1ZXJ5fWApO1xuICAgIHJldHVybiBwYXJhbTtcbn07XG5leHBvcnQgY29uc3QgU09MVkVEQUNfTEVWRUwgPSB7XG4gICAgMDogXCJVbnJhdGVkXCIsXG4gICAgMTogXCJCcm9uemUgVlwiLFxuICAgIDI6IFwiQnJvbnplIElWXCIsXG4gICAgMzogXCJCcm9uemUgSUlJXCIsXG4gICAgNDogXCJCcm9uemUgSUlcIixcbiAgICA1OiBcIkJyb256ZSBJXCIsXG4gICAgNjogXCJTaWx2ZXIgVlwiLFxuICAgIDc6IFwiU2lsdmVyIElWXCIsXG4gICAgODogXCJTaWx2ZXIgSUlJXCIsXG4gICAgOTogXCJTaWx2ZXIgSUlcIixcbiAgICAxMDogXCJTaWx2ZXIgSVwiLFxuICAgIDExOiBcIkdvbGQgVlwiLFxuICAgIDEyOiBcIkdvbGQgSVZcIixcbiAgICAxMzogXCJHb2xkIElJSVwiLFxuICAgIDE0OiBcIkdvbGQgSUlcIixcbiAgICAxNTogXCJHb2xkIElcIixcbiAgICAxNjogXCJQbGF0aW51bSBWXCIsXG4gICAgMTc6IFwiUGxhdGludW0gSVZcIixcbiAgICAxODogXCJQbGF0aW51bSBJSUlcIixcbiAgICAxOTogXCJQbGF0aW51bSBJSVwiLFxuICAgIDIwOiBcIlBsYXRpbnVtIElcIixcbiAgICAyMTogXCJEaWFtb25kIFZcIixcbiAgICAyMjogXCJEaWFtb25kIElWXCIsXG4gICAgMjM6IFwiRGlhbW9uZCBJSUlcIixcbiAgICAyNDogXCJEaWFtb25kIElJXCIsXG4gICAgMjU6IFwiRGlhbW9uZCBJXCIsXG4gICAgMjY6IFwiUnVieSBWXCIsXG4gICAgMjc6IFwiUnVieSBJVlwiLFxuICAgIDI4OiBcIlJ1YnkgSUlJXCIsXG4gICAgMjk6IFwiUnVieSBJSVwiLFxuICAgIDMwOiBcIlJ1YnkgSVwiLFxuICAgIDMxOiBcIk1hc3RlclwiLFxufTtcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSB7XG4gICAg7JWE7Z2sOiBcImFoZXVpXCIsXG4gICAg7JeE7KSA7IudOiBcInVtbVwiLFxuICAgIEFkYTogXCJhZGFcIixcbiAgICBcIkFsZ29sIDY4XCI6IFwiYVwiLFxuICAgIEFQRUNPREU6IFwiYXBlXCIsXG4gICAgQXNzZW1ibHk6IFwib1wiLFxuICAgIFwiQXNzZW1ibHkgKDMyYml0KVwiOiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICg2NGJpdClcIjogXCJvXCIsXG4gICAgYXdrOiBcImF3a1wiLFxuICAgIEJhc2g6IFwic2hcIixcbiAgICBiYzogXCJiY1wiLFxuICAgIEJlZnVuZ2U6IFwiYmZcIixcbiAgICBCb286IFwiYm9vXCIsXG4gICAgXCJCcmFpbmYqKmtcIjogXCJiZlwiLFxuICAgIEM6IFwiY1wiLFxuICAgIFwiQyNcIjogXCJjc1wiLFxuICAgIFwiQyMgMy4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA2LjAgKE1vbm8pXCI6IFwiY3NcIixcbiAgICBcIkMjIDkuMCAoLk5FVClcIjogXCJjc1wiLFxuICAgIFwiQysrXCI6IFwiY2NcIixcbiAgICBcIkMrKzExXCI6IFwiY2NcIixcbiAgICBcIkMrKzExIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTRcIjogXCJjY1wiLFxuICAgIFwiQysrMTQgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysxN1wiOiBcImNjXCIsXG4gICAgXCJDKysxNyAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrOThcIjogXCJjY1wiLFxuICAgIFwiQysrOTggKENsYW5nKVwiOiBcImNjXCIsXG4gICAgQzExOiBcImNcIixcbiAgICBcIkMxMSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEMyeDogXCJjXCIsXG4gICAgXCJDMnggKENsYW5nKVwiOiBcImNcIixcbiAgICBDOTA6IFwiY1wiLFxuICAgIFwiQzkwIChDbGFuZylcIjogXCJjXCIsXG4gICAgQzk5OiBcImNcIixcbiAgICBcIkM5OSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIENvYm9sOiBcImNvYlwiLFxuICAgIENvYnJhOiBcImNvYnJhXCIsXG4gICAgQ29xOiBcInZcIixcbiAgICBDcnlzdGFsOiBcImNyXCIsXG4gICAgRDogXCJkXCIsXG4gICAgXCJEIChMREMpXCI6IFwiZFwiLFxuICAgIFwiRiNcIjogXCJmc1wiLFxuICAgIFwiRiMgKC5ORVQpXCI6IFwiZnNcIixcbiAgICBcIkYjIChNb25vKVwiOiBcImZzXCIsXG4gICAgRm9ydHJhbjogXCJmXCIsXG4gICAgRnJlZUJBU0lDOiBcImJhc1wiLFxuICAgIEdvOiBcImdvXCIsXG4gICAgXCJHbyAoZ2NjZ28pXCI6IFwiZ29cIixcbiAgICBHb2xmc2NyaXB0OiBcImdzXCIsXG4gICAgSGFza2VsbDogXCJoc1wiLFxuICAgIEhheGU6IFwicHlcIixcbiAgICBJTlRFUkNBTDogXCJpXCIsXG4gICAgSmF2YTogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDExXCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxNVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOFwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOCAoT3BlbkpESylcIjogXCJqYXZhXCIsXG4gICAgS290bGluOiBcImt0XCIsXG4gICAgXCJLb3RsaW4gKEpWTSlcIjogXCJrdFwiLFxuICAgIFwiS290bGluIChOYXRpdmUpXCI6IFwia3RcIixcbiAgICBMT0xDT0RFOiBcImxvbFwiLFxuICAgIEx1YTogXCJsdWFcIixcbiAgICBNaW5lY3JhZnQ6IFwibWNhXCIsXG4gICAgTmVtZXJsZTogXCJuXCIsXG4gICAgTmltcm9kOiBcIm5pbVwiLFxuICAgIFwibm9kZS5qc1wiOiBcImpzXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiOiBcIm1cIixcbiAgICBcIk9iamVjdGl2ZS1DKytcIjogXCJtbVwiLFxuICAgIE9DYW1sOiBcIm1sXCIsXG4gICAgUGFzY2FsOiBcInBhc1wiLFxuICAgIFBlcmw6IFwicGxcIixcbiAgICBQSFA6IFwicGhwXCIsXG4gICAgUGlrZTogXCJwaWtlXCIsXG4gICAgUHlQeTogXCJweVwiLFxuICAgIFB5UHkyOiBcInB5XCIsXG4gICAgUHlQeTM6IFwicHlcIixcbiAgICBQeXRob246IFwicHlcIixcbiAgICBcIlB5dGhvbiAyXCI6IFwicHlcIixcbiAgICBcIlB5dGhvbiAzXCI6IFwicHlcIixcbiAgICBSaGlubzogXCJqc1wiLFxuICAgIFJ1Ynk6IFwicmJcIixcbiAgICBcIlJ1YnkgMS44XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMS45XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMlwiOiBcInJiXCIsXG4gICAgUnVzdDogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE1XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxOFwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMTlcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDIxXCI6IFwicnNcIixcbiAgICBTY2FsYTogXCJzY2FsYVwiLFxuICAgIFNjaGVtZTogXCJzY21cIixcbiAgICBzZWQ6IFwic2VkXCIsXG4gICAgU3dpZnQ6IFwic3dpZnRcIixcbiAgICBTeXN0ZW1WZXJpbG9nOiBcInN2XCIsXG4gICAgVGNsOiBcInRjbFwiLFxuICAgIFRleHQ6IFwidHh0XCIsXG4gICAgVHlwZVNjcmlwdDogXCJ0c1wiLFxuICAgIFwiVkIuTkVUIDIuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVkIuTkVUIDQuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVmlzdWFsIEJhc2ljXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpYyAoLk5FVClcIjogXCJ2YlwiLFxuICAgIFdoaXRlc3BhY2U6IFwid3NcIixcbn07XG5leHBvcnQgY29uc3QgZ2V0UmVhZG1lVGV4dCA9ICh7IGxldmVsLCB0aXRsZSwgc29sdmluZ1RpbWUsIHByb2JsZW1JZCwgc3BlbnRNZW1vcnksIHNwZW50VGltZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCB9KSA9PiBsZXZlbFxuICAgID8gYCMgWyR7bGV2ZWx9XSAke3RpdGxlfSAtICR7cHJvYmxlbUlkfSBcXG5cXG5gXG4gICAgOiBgIyAke3RpdGxlfSAtICR7cHJvYmxlbUlkfSBcXG5cXG5gICtcbiAgICAgICAgYFvrrLjsoJwg66eB7YGsXShodHRwczovL3d3dy5hY21pY3BjLm5ldC9wcm9ibGVtLyR7cHJvYmxlbUlkfSkgXFxuXFxuYCArXG4gICAgICAgIGAjIyMg7ISx64qlIOyalOyVvVxcblxcbmAgK1xuICAgICAgICBg7Y+J6regIOyGjOyalCDrqZTrqqjrpqw6ICR7c3BlbnRNZW1vcnl9IEtCLCBgICtcbiAgICAgICAgYO2Pieq3oCDshozsmpQg7Iuc6rCEOiAke3NwZW50VGltZX0gbXNcXG5cXG5gICtcbiAgICAgICAgYO2SgOydtOyLnOqwhDogJHtzb2x2aW5nVGltZX1cXG5cXG5gICtcbiAgICAgICAgYCMjIyDrtoTrpZhcXG5cXG5gICtcbiAgICAgICAgYCR7Y2F0ZWdvcnl9XFxuXFxuYCArXG4gICAgICAgIGAjIyMg66y47KCcIOyEpOuqhVxcblxcbiR7ZGVzY3JpcHRpb259XFxuXFxuYDtcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21wb25lbnRzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgbmV3Tm9kZSA9IEFycmF5LmZyb20obmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnRlbXBsYXRlKCksIFwidGV4dC9odG1sXCIpLmJvZHkuY2hpbGRyZW4pO1xuICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZVswXSwgbm9kZS5uZXh0U2libGluZyk7XG4gICAgdGhpcy5ub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICBjb25zdCBub2RlQ2xhc3MgPSBub2RlLmNsYXNzTGlzdC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5vZGVDbGFzcykge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gbm9kZUNsYXNzO1xuICAgIH1cbiAgICBub2RlLnJlbW92ZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVR3byhhLCBiKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChhKSB7XG4gICAgaWYgKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7ICQsIGNvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyLCBlbnJvbGxFdmVudCwgZ2V0UXVlcnlQYXJhbSwgZ2V0UmVhZG1lVGV4dCwgZ2V0VGltZURpZmYsIGhhc0VsZW1lbnQsIGluc2VydEhUTUwsIExBTkdVQUdFUywgU09MVkVEQUNfTEVWRUwsIH0gZnJvbSBcIi4uL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCBcIi4vQmFla2p1bi5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSwgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIH0gZnJvbSBcIi4uL3V0aWxzL2Nocm9tZVV0aWxzXCI7XG5pbXBvcnQgeyBnZXRCYWVranVuUHJvYmxlbURlc2NyaXB0aW9uLCBnZXRCYWVranVuU29sdmVkRGF0YSwgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjLCB9IGZyb20gXCIuLi9BUEkvZ2V0UmVxQVBJXCI7XG5pbXBvcnQgeyBjb21taXRDb2RlVG9SZXBvIH0gZnJvbSBcIi4uL0FQSS9wb3N0UmVxQVBJXCI7XG5pbXBvcnQgeyBjaHJvbWVTdG9yYWdlSWQsIGVycm9yTXNnIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQWxnb3JpdGhtU2l0ZSB9IGZyb20gXCIuLi9Db21wb25lbnQvQWxnb3JpdGhtU2l0ZVwiO1xuY2xhc3MgQmFla2p1biBleHRlbmRzIEFsZ29yaXRobVNpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IEJhZWtqdW5Qcm9ibGVtSWQ6IGJhZWtqdW5Qcm9ibGVtSWQgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoY2hyb21lU3RvcmFnZUlkLmJhZWtqdW5Qcm9ibGVtSWQpKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoY2hyb21lU3RvcmFnZUlkLnJlcG8pKTtcbiAgICAgICAgICAgIGlmICghcmVwb05hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnLk5vdEZvdW5kUmVwbyk7XG4gICAgICAgICAgICBpZiAoIWJhZWtqdW5Qcm9ibGVtSWQgfHwgIXRoaXMuY2hlY2tQcm9ibGVtSWQoYmFla2p1blByb2JsZW1JZCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBCYWVranVuUHJvYmxlbUlkOiB0aGlzLmdldFByb2JsZW1JZCh3aW5kb3cubG9jYXRpb24uaHJlZiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgYmFla2p1blRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgYmFla2p1blRpbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJiYWVranVuVGltZVwiKSk7XG4gICAgICAgICAgICBpZiAoIWJhZWtqdW5UaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgYmFla2p1blRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRQcm9ibGVtSWQgPSAodXJsKSA9PiB7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKFwicHJvYmxlbVwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1cmwuc3BsaXQoXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC9wcm9ibGVtL1wiKVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmwuc3BsaXQoXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC9zdWJtaXQvXCIpWzFdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXJ0U29sdmluZyA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXNUaW1lciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShjaHJvbWVTdG9yYWdlSWQuaXNUaW1lcikpO1xuICAgICAgICAgICAgaWYgKGlzVGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhZWtqdW5UaW1lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWFkeVRvU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdWJtaXRFdmVudCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEJhZWtqdW5UaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zZXRUaW1lclRlbXBsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBiYWVranVuVGltZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcImJhZWtqdW5UaW1lXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpbWVyKGJhZWtqdW5UaW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN1Ym1pdEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJChcIiNzdWJtaXRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQoc3VibWl0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRlZFByb2JsZW06IHRoaXMuZ2V0UHJvYmxlbUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrU3VibWl0ZWQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHN1Ym1pdGVkUHJvYmxlbSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShjaHJvbWVTdG9yYWdlSWQuc3VibWl0ZWRQcm9ibGVtSWQpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGVkUHJvYmxlbSk7XG4gICAgICAgICAgICBpZiAoc3VibWl0ZWRQcm9ibGVtICYmIHN1Ym1pdGVkUHJvYmxlbSA9PT0gZ2V0UXVlcnlQYXJhbShcInByb2JsZW1faWRcIikpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVDaHJvbWVMb2NhbFN0b3JhZ2UoY2hyb21lU3RvcmFnZUlkLnN1Ym1pdGVkUHJvYmxlbUlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFmdGVyU3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdE1zZyA9ICQoXCIucmVzdWx0LXRleHRcIikuaW5uZXJUZXh0O1xuICAgICAgICAgICAgaWYgKHJlc3VsdE1zZyA9PT0gXCLrp57slZjsirXri4jri6QhIVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tTdWNjZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGFibGUgPSAkKFwiI3N0YXR1cy10YWJsZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRlZEluZm8gPSBzdGF0dXNUYWJsZS5yb3dzWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW1lbnQgPSBzdWJtaXRlZEluZm8uY2VsbHNbM107XG4gICAgICAgICAgICAgICAgaWYgKGhhc0VsZW1lbnQoXCIucmVzdWx0LWFjXCIsIHJlc3VsdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tTdWNjZXNzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1N1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTdWNjZXNzKHN1Ym1pdGVkSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckZhaWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhc0VsZW1lbnQoXCIucmVzdWx0LXJ0ZVwiLCByZXN1bHRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyRmFpbCgpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCAxNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyTW9kYWxBZnRlclN1Y2Nlc3MgPSAoc29sdmluZ1RpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gJChcIi53cmFwcGVyXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWVranVuXCIgIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZG9jdW1lbnRcIiByb2xlPVwiZG9jdW1lbnRcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiA+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj54PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGg0IGFyaWEtaGlkZGVuPVwidHJ1ZVwiID7soJXri7XsnoXri4jri6Q8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPu2SgOydtOyLnOqwhDogJHtzb2x2aW5nVGltZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgICAgIGluc2VydEhUTUwoeyBlbGVtZW50OiBjb250ZW50RWxlbWVudCwgcG9zaXRpb246IFwiYWZ0ZXJlbmRcIiwgaHRtbCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZnRlclN1Y2Nlc3MgPSAoc3VibWl0ZWRJbmZvKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlzVXBsb2FkIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiaXNVcGxvYWRcIikpO1xuICAgICAgICAgICAgY29uc3QgeyBiYWVranVuVGltZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcImJhZWtqdW5UaW1lXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pc3Npb25JZCA9IHN1Ym1pdGVkSW5mby5jZWxsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBwcm9ibGVtSWQgPSBnZXRRdWVyeVBhcmFtKFwicHJvYmxlbV9pZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZW50VGltZSA9IHN1Ym1pdGVkSW5mby5jZWxsc1s1XS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBzcGVudE1lbW9yeSA9IHN1Ym1pdGVkSW5mby5jZWxsc1s0XS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBsYW5ndWFnZSA9ICQoXCJhXCIsIHN1Ym1pdGVkSW5mby5jZWxsc1s2XSkuaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgc29sdmluZ1RpbWUgPSBPYmplY3QudmFsdWVzKGdldFRpbWVEaWZmKGJhZWtqdW5UaW1lLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSkpLmpvaW4oXCIgOiBcIik7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0geWllbGQgZ2V0QmFla2p1blNvbHZlZERhdGEoc3VibWlzc2lvbklkKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0geWllbGQgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbihwcm9ibGVtSWQpO1xuICAgICAgICAgICAgY29uc3QgeyBhY2NlcHRlZFVzZXJDb3VudCwgYXZlcmFnZVRyaWVzLCBvZmZpY2lhbCwgbGV2ZWwsIHRpdGxlS28sIHRhZ3MsIH0gPSB5aWVsZCBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWMocHJvYmxlbUlkKTtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGFncy5tYXAoKHRhZykgPT4gdGFnLmRpc3BsYXlOYW1lc1swXS5uYW1lKS5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9ibGVtQ29udGVudCA9IHRoaXMuY3JlYXRlUHJvYmxlbUNvbnRlbnQoe1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGFjY2VwdGVkVXNlckNvdW50LFxuICAgICAgICAgICAgICAgIGF2ZXJhZ2VUcmllcyxcbiAgICAgICAgICAgICAgICBvZmZpY2lhbCxcbiAgICAgICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVLbyxcbiAgICAgICAgICAgICAgICBwcm9ibGVtSWQsXG4gICAgICAgICAgICAgICAgc29sdmluZ1RpbWUsXG4gICAgICAgICAgICAgICAgc3BlbnRUaW1lLFxuICAgICAgICAgICAgICAgIHNwZW50TWVtb3J5LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaXNVcGxvYWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjb21taXRDb2RlVG9SZXBvKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvYmxlbUNvbnRlbnQpLCB7IGNvZGUgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJNb2RhbEFmdGVyU3VjY2Vzcyhzb2x2aW5nVGltZSk7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlclN1Y2Nlc3NNYXJrKCk7XG4gICAgICAgICAgICBkZWxldGVDaHJvbWVMb2NhbFN0b3JhZ2UoXCJiYWVranVuVGltZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWZ0ZXJGYWlsID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGYWlsTWFyaygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2JsZW1Db250ZW50ID0gKHsgZGVzY3JpcHRpb24sIGFjY2VwdGVkVXNlckNvdW50LCBhdmVyYWdlVHJpZXMsIG9mZmljaWFsLCBsZXZlbCwgdGl0bGUsIHByb2JsZW1JZCwgc29sdmluZ1RpbWUsIHNwZW50VGltZSwgc3BlbnRNZW1vcnksIGNhdGVnb3J5LCBsYW5ndWFnZSwgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gdGhpcy5nZXREaXJlY3RvcnkoeyBsZXZlbCwgcHJvYmxlbUlkLCB0aXRsZSB9KTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgICAgIHNwZW50TWVtb3J5LFxuICAgICAgICAgICAgICAgIHNwZW50VGltZSxcbiAgICAgICAgICAgICAgICBzb2x2aW5nVGltZSxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmdldEZpbGVOYW1lKHsgdGl0bGUsIGxhbmd1YWdlIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVhZE1lID0gZ2V0UmVhZG1lVGV4dCh7XG4gICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgc29sdmluZ1RpbWUsXG4gICAgICAgICAgICAgICAgcHJvYmxlbUlkLFxuICAgICAgICAgICAgICAgIHNwZW50TWVtb3J5LFxuICAgICAgICAgICAgICAgIHNwZW50VGltZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZGlyZWN0b3J5LCBtZXNzYWdlLCBmaWxlTmFtZSwgcmVhZE1lIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0RmlsZU5hbWUgPSAoeyB0aXRsZSwgbGFuZ3VhZ2UgfSkgPT4gYCR7Y29udmVydFNpbmdsZUNoYXJUb0RvdWJsZUNoYXIodGl0bGUpfS4ke0xBTkdVQUdFU1tsYW5ndWFnZV19YDtcbiAgICAgICAgdGhpcy5nZXRNZXNzYWdlID0gKHsgbGV2ZWwsIHRpdGxlLCBzcGVudE1lbW9yeSwgc3BlbnRUaW1lLCBzb2x2aW5nVGltZSwgfSkgPT4gYFske1NPTFZFREFDX0xFVkVMW2xldmVsXX1dIFRpdGxlOiAke3RpdGxlfSAtIFRpbWU6ICR7c3BlbnRUaW1lfSBtcywgTWVtb3J5OiAke3NwZW50TWVtb3J5fSBLQiwgVGltZSB0byBzb2x2ZTogJHtzb2x2aW5nVGltZX1gO1xuICAgICAgICB0aGlzLmdldERpcmVjdG9yeSA9ICh7IGxldmVsLCBwcm9ibGVtSWQsIHRpdGxlIH0pID0+IGBCYWVranVuLyR7U09MVkVEQUNfTEVWRUxbbGV2ZWxdLnJlcGxhY2UoLyAuKi8sIFwiXCIpfS8ke3Byb2JsZW1JZH0u4oCFJHtjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhcih0aXRsZSl9YDtcbiAgICAgICAgdGhpcy5nZXRTb2x2ZWREYXRhID0gKHN1Ym1pc3Npb25JZCkgPT4geyB9O1xuICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW1lbnQgPSAkKFwiLnJlc3VsdFwiKTtcbiAgICAgICAgICAgIHJlc3VsdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLXNvbHZlXCI+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGVja1Byb2JsZW1JZCA9IChpZCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRlZExpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgvPXwmfFxcLy8pO1xuICAgICAgICAgICAgaWYgKHNwbGl0ZWRMaW5rLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFRpbWVyVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gJChcIi5wYWdlLWhlYWRlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gXCJhZnRlcmJlZ2luXCI7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJ0aW1lci1jb250YWluZXJcIiA+XG4gICAgPHAgY2xhc3M9XCJ0aW1lclwiPjwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICAgICAgaW5zZXJ0SFRNTCh7IGVsZW1lbnQsIHBvc2l0aW9uLCBodG1sIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbmRlckZhaWxNYXJrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzRWxlbWVudCA9ICQoXCIubG9hZGluZy1zb2x2ZVwiKTtcbiAgICAgICAgICAgIHN0YXR1c0VsZW1lbnQuY2xhc3NOYW1lID0gXCJmYWlsLXNvbHZlXCI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyU3VjY2Vzc01hcmsgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXNFbGVtZW50ID0gJChcIi5sb2FkaW5nLXNvbHZlXCIpO1xuICAgICAgICAgICAgc3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcInN1Y2Nlc3Mtc29sdmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuY2hlY2tTdWJtaXRlZCgpO1xuICAgIH1cbn1cbmNvbnN0IGJhZWtqdW4gPSBuZXcgQmFla2p1bigpO1xuaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL3Byb2JsZW0vXCIpKSB7XG4gICAgYmFla2p1bi5zdGFydFNvbHZpbmcoKTtcbn1cbmVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiL3N1Ym1pdC9cIikpIHtcbiAgICBiYWVranVuLnJlYWR5VG9TdWJtaXQoKTtcbn1cbi8vIGJhZWtqdW4uY3JlYXRlTW9kYWxBZnRlclN1Y2Nlc3MoXCIxMjoxMjoxMlwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==