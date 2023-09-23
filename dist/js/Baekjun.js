/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Baekjun.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Baekjun.css ***!
  \***************************************************************/
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
`, "",{"version":3,"sources":["webpack://./src/Baekjun.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,mBAAmB;EACnB,mEAAmE;AACrE;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE;IACE,QAAQ;IACR,YAAY;EACd;EACA;;IAEE,SAAS;IACT,WAAW;EACb;AACF;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,UAAU;EACV,YAAY;EACZ,gCAAgC;EAChC,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,yBAAyB;AAC3B","sourcesContent":[".timer-container {\n  margin-bottom: 0px;\n}\n\n.timer {\n  font-size: 17px;\n  font-weight: 600;\n  color: #585f69;\n  margin-bottom: -10px;\n}\n\n.result {\n  display: flex;\n  flex-direction: row;\n}\n\n.loading-solve {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  margin-left: 3px;\n}\n.loading-solve > div {\n  display: inline-block;\n  width: 5px;\n  background: #afa8de;\n  animation: loading-solve 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.loading-solve div:nth-child(1) {\n  animation-delay: -0.24s;\n}\n.loading-solve div:nth-child(2) {\n  animation-delay: -0.12s;\n}\n.loading-solve div:nth-child(3) {\n  animation-delay: 0;\n}\n@keyframes loading-solve {\n  0% {\n    top: 8px;\n    height: 16px;\n  }\n  50%,\n  100% {\n    top: 24px;\n    height: 7px;\n  }\n}\n\n.success-solve {\n  display: inline-block;\n  transform: rotate(45deg);\n  width: 9px;\n  height: 14px;\n  border-bottom: 4px solid #afa8de;\n  border-right: 4px solid #afa8de;\n  margin-left: 7px;\n}\n\n.fail-solve {\n  background: #f9f9f9;\n  width: 18px;\n  height: 18px;\n  position: relative;\n  margin-left: 10px;\n}\n\n.fail-solve:after {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.fail-solve:before {\n  content: \"\";\n  height: 18px;\n  border-left: 5px solid #cd8084;\n  position: absolute;\n  transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Baekjun.css":
/*!*************************!*\
  !*** ./src/Baekjun.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Baekjun_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Baekjun.css */ "./node_modules/css-loader/dist/cjs.js!./src/Baekjun.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chromeUtils */ "./src/utils/chromeUtils.ts");
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
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const { USER: user } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("USER"));
    const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("repoName"));
    const { GITHUB_TOKEN } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN"));
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
    const input = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#problem_input", html).innerHTML.trim());
    const output = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#problem_output", html).innerHTML.trim());
    const description = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.htmlEntityDecode)((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#problem_description", html).innerHTML.trim());
    return { input, output, description };
});
const getProblemInfoBySolvedAc = (problemId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({
        action: "baekjun",
        task: "getProblemInfoBySolvedAc",
        problemId,
    });
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

/***/ "./src/utils/chromeUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/chromeUtils.ts ***!
  \**********************************/
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
/*!************************!*\
  !*** ./src/Baekjun.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/jsUtils */ "./src/utils/jsUtils.ts");
/* harmony import */ var _Baekjun_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Baekjun.css */ "./src/Baekjun.css");
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/chromeUtils */ "./src/utils/chromeUtils.ts");
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





class Baekjun {
    constructor() {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            const { BaekjunProblemId: baekjunProblemId } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("BaekjunProblemId"));
            const { repoName } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("repoName"));
            if (!repoName)
                throw new Error("Repository가 아직 설정되지않았습니다.");
            if (!baekjunProblemId || !this.checkProblemId(baekjunProblemId)) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({
                    BaekjunProblemId: window.location.href.split("https://www.acmicpc.net/problem/")[1],
                });
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({ baekjunTime: new Date().getTime() });
                return;
            }
        });
        this.startSolving = () => __awaiter(this, void 0, void 0, function* () {
            const { isTimer } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("isTimer"));
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
                this.setTimer();
            });
        };
        this.setSubmitEvent = () => {
            const submitButton = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("#submit_button");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.enrollEvent)(submitButton, "click", () => {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({
                    submitedProblem: window.location.href.split("https://www.acmicpc.net/submit/")[1],
                });
            });
        };
        this.setTimer = () => __awaiter(this, void 0, void 0, function* () {
            const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
            this.timer = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.createTimer)(baekjunTime, this.reRenderTime);
        });
        this.checkSubmited = () => __awaiter(this, void 0, void 0, function* () {
            const { submitedProblem } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("submitedProblem"));
            if (submitedProblem && submitedProblem === (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)("problem_id")) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage)("submitedProblem");
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
                        const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
                        const submissionId = submitedInfo.cells[0].innerText;
                        const problemId = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getQueryParam)("problem_id");
                        const spentTime = submitedInfo.cells[5].innerText;
                        const spentMemory = submitedInfo.cells[4].innerText;
                        const language = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)("a", submitedInfo.cells[6]).innerText;
                        const solvingTime = Object.values((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.getTimeDiff)(baekjunTime, new Date().getTime())).join(" : ");
                        clearInterval(this.timer);
                        this.afterSuccess(problemId, submissionId, solvingTime, spentTime, spentMemory, language);
                        return;
                    }
                    this.afterFail();
                }
            }), 2000);
        });
        this.afterSuccess = (problemId, submissionId, solvingTime, spentTime, spentMemory, language) => __awaiter(this, void 0, void 0, function* () {
            const code = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getBaekjunSolvedData)(submissionId);
            const { description, input, output } = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getBaekjunProblemDescription)(problemId);
            const { acceptedUserCount, averageTries, official, level, titleKo, tags, } = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_3__.getProblemInfoBySolvedAc)(problemId);
            const { directory, message, fileName, readMe } = this.createReadme({
                description,
                input,
                output,
                acceptedUserCount,
                averageTries,
                official,
                level,
                titleKo,
                problemId,
                solvingTime,
                spentTime,
                spentMemory,
                tags,
                language,
            });
            yield (0,_API_postReqAPI__WEBPACK_IMPORTED_MODULE_4__.commitCodeToRepo)({ directory, message, fileName, readMe, code });
            yield this.renderSuccessMark();
        });
        this.afterFail = () => {
            this.renderFailMark();
        };
        this.createReadme = ({ description, input, output, acceptedUserCount, averageTries, official, level, titleKo, problemId, solvingTime, spentTime, spentMemory, tags, language, }) => {
            const directory = `Baekjun/${_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.SOLVEDAC_LEVEL[level].replace(/ .*/, "")}/${problemId}. ${(0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar)(titleKo)}`;
            const message = `[${level}] ${titleKo} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;
            const category = tags.map((tag) => tag.displayNames[0].name).join(", ");
            const fileName = `${(0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar)(titleKo)}.${_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES[language]}`;
            // prettier - ignore - start;
            const readMe = `# [${level}] ${titleKo} - ${problemId} \n\n` +
                `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n` +
                `### 성능 요약\n\n` +
                `메모리: ${spentMemory} KB, ` +
                `시간: ${spentTime} ms\n\n` +
                `풀이시간: ${solvingTime}\n\n` +
                `### 분류\n\n` +
                `${category}\n\n` +
                (!!description
                    ? "" +
                        `### 문제 설명\n\n${description}\n\n` +
                        `### 입력 \n\n ${input}\n\n` +
                        `### 출력 \n\n ${output}\n\n`
                    : "");
            return { directory, message, fileName, readMe };
        };
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
        this.reRenderTime = ({ h, m, s }) => {
            const timeElement = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_0__.$)(".timer");
            timeElement.innerText = `Timer: ${h}:${m}:${s} `;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLGdDQUFnQyxpREFBQztBQUNqQyw4Q0FBOEMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHO0FBQzNEO0FBQ0E7QUFDQSw0QkFBNEIsaURBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVUsR0FBRyx5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBLGtDQUFrQyxpREFBQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaURBQUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9CYWVranVuLmNzcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9CYWVranVuLmNzcz82MWE1Iiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQVBJL2dldFJlcUFQSS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9BUEkvcG9zdFJlcUFQSS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9jaHJvbWVVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9qc1V0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0JhZWtqdW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aW1lci1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50aW1lciB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1ODVmNjk7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4ucmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmxvYWRpbmctc29sdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ubG9hZGluZy1zb2x2ZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZDogI2FmYThkZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXNvbHZlIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcbn1cbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcbn1cbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcbn1cbi5sb2FkaW5nLXNvbHZlIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDA7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctc29sdmUge1xuICAwJSB7XG4gICAgdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgdG9wOiAyNHB4O1xuICAgIGhlaWdodDogN3B4O1xuICB9XG59XG5cbi5zdWNjZXNzLXNvbHZlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZmE4ZGU7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNhZmE4ZGU7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5mYWlsLXNvbHZlIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZhaWwtc29sdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5mYWlsLXNvbHZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9CYWVranVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1FQUFtRTtBQUNyRTtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsU0FBUztJQUNULFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aW1lci1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4udGltZXIge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjNTg1ZjY5O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbi5yZXN1bHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5sb2FkaW5nLXNvbHZlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmxvYWRpbmctc29sdmUgPiBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNhZmE4ZGU7XFxuICBhbmltYXRpb246IGxvYWRpbmctc29sdmUgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xcbn1cXG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xcbn1cXG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xcbn1cXG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcXG59XFxuQGtleWZyYW1lcyBsb2FkaW5nLXNvbHZlIHtcXG4gIDAlIHtcXG4gICAgdG9wOiA4cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gIH1cXG4gIDUwJSxcXG4gIDEwMCUge1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIGhlaWdodDogN3B4O1xcbiAgfVxcbn1cXG5cXG4uc3VjY2Vzcy1zb2x2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNhZmE4ZGU7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjYWZhOGRlO1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuLmZhaWwtc29sdmUge1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5mYWlsLXNvbHZlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uZmFpbC1zb2x2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9CYWVranVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQmFla2p1bi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZW5kQ2hyb21lTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgJCwgaHRtbEVudGl0eURlY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlclwiO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IChjb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJSZXBvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLmRlZmF1bHRfYnJhbmNoO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UmVmZXJlbmNlID0gKGJyYW5jaCA9IFwibWFpblwiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmL2hlYWRzLyR7YnJhbmNofWA7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcmVmU0hBOiByZXMub2JqZWN0LnNoYSwgcmVmOiByZXMucmVmIH07XG59KTtcbmV4cG9ydCBjb25zdCBnZXRCYWVranVuU29sdmVkRGF0YSA9IChzdWJtaXNzaW9uSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvc291cmNlL2Rvd25sb2FkLyR7c3VibWlzc2lvbklkfWA7XG4gICAgY29uc3QgY29kZSA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtRGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcIlNlYy1GZXRjaC1Nb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIHJldHVybiBjb2RlO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbiA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH1gO1xuICAgIGNvbnN0IGRvYyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtZGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1tb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIGNvbnN0IGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRvYywgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgaW5wdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9pbnB1dFwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICBjb25zdCBvdXRwdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9vdXRwdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9kZXNjcmlwdGlvblwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICByZXR1cm4geyBpbnB1dCwgb3V0cHV0LCBkZXNjcmlwdGlvbiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjID0gKHByb2JsZW1JZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHNlbmRDaHJvbWVNZXNzYWdlKHtcbiAgICAgICAgYWN0aW9uOiBcImJhZWtqdW5cIixcbiAgICAgICAgdGFzazogXCJnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNcIixcbiAgICAgICAgcHJvYmxlbUlkLFxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENocm9tZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgYjY0RW5jb2RlVW5pY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0QnJhbmNoLCBnZXRSZWZlcmVuY2UgfSBmcm9tIFwiLi9nZXRSZXFBUElcIjtcbmV4cG9ydCBjb25zdCBjb21taXRDb2RlVG9SZXBvID0gKHsgZGlyZWN0b3J5LCBjb2RlLCBtZXNzYWdlLCByZWFkTWUsIGZpbGVOYW1lLCB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkZWZhdWx0QnJhbmNoID0geWllbGQgZ2V0RGVmYXVsdEJyYW5jaCgpO1xuICAgIGNvbnN0IHsgcmVmU0hBLCByZWYgfSA9IHlpZWxkIGdldFJlZmVyZW5jZShkZWZhdWx0QnJhbmNoKTtcbiAgICBjb25zdCBzb3VyY2VDb2RlID0geWllbGQgY3JlYXRlQmxvYihjb2RlLCBmaWxlTmFtZSwgZGlyZWN0b3J5KTtcbiAgICBjb25zdCBzb3VyY2VSZWFkTWUgPSB5aWVsZCBjcmVhdGVCbG9iKHJlYWRNZSwgXCJSRUFETUUubWRcIiwgZGlyZWN0b3J5KTtcbiAgICBjb25zdCB0cmVlU0hBID0geWllbGQgY3JlYXRlVHJlZShyZWZTSEEsIFtzb3VyY2VDb2RlLCBzb3VyY2VSZWFkTWVdKTtcbiAgICBjb25zdCBjb21taXRTSEEgPSB5aWVsZCBjcmVhdGVDb21taXQobWVzc2FnZSwgdHJlZVNIQSwgcmVmU0hBKTtcbiAgICB5aWVsZCB1cGRhdGVIZWFkKHJlZiwgY29tbWl0U0hBKTtcbn0pO1xuZXhwb3J0IGNvbnN0IHBvc3ROZXdSZXBvID0gKG5hbWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHByaXZhdGU6IHRydWUsXG4gICAgICAgIGF1dG9faW5pdDogdHJ1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwi7JWM6rOg66as7KaYIOyekOuPmSDquLDroZ0g67O06rSA7IaMXCIsXG4gICAgfSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGlmICghR0lUSFVCX1RPS0VOKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb2tlbiDsoJXrs7Trpbwg6rCA7KC47Jik7KeAIOuqu+2WiOyKteuLiOuLpC5cIik7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbi8vIGV4cG9ydCB0eXBlIE5ld0Jsb2IgPSB7XG4vLyAgIHBhdGg6IHN0cmluZztcbi8vICAgc2hhOiBzdHJpbmc7XG4vLyAgIG1vZGU6IHN0cmluZztcbi8vICAgdHlwZTogc3RyaW5nO1xuLy8gfTtcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9iID0gKGNvbnRlbnQsIGZpbGVOYW1lLCBkaXJlY3RvcnkpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IHBhdGggPSBgJHtkaXJlY3Rvcnl9LyR7ZmlsZU5hbWV9YDtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9ibG9ic2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29udGVudDogYjY0RW5jb2RlVW5pY29kZShjb250ZW50KSxcbiAgICAgICAgZW5jb2Rpbmc6IFwiYmFzZTY0XCIsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiB7IHBhdGgsIHNoYTogcmVzLnNoYSwgbW9kZTogXCIxMDA2NDRcIiwgdHlwZTogXCJibG9iXCIgfTtcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyZWUgPSAocmVmU0hBLCB0cmVlX2l0ZW1zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvdHJlZXNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHRyZWU6IHRyZWVfaXRlbXMsIGJhc2VfdHJlZTogcmVmU0hBIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLnNoYTtcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1pdCA9IChtZXNzYWdlLCB0cmVlU0hBLCByZWZTSEEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9jb21taXRzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlLCB0cmVlOiB0cmVlU0hBLCBwYXJlbnQ6IFtyZWZTSEFdIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLnNoYTtcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUhlYWQgPSAocmVmLCBjb21taXRTSEEsIGZvcmNlID0gdHJ1ZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3JlZnMvaGVhZHMvbWFpbmA7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgc2hhOiBjb21taXRTSEEsIGZvcmNlIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlQ2hyb21lVGFicyA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChfYSwgZm4pID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9ICgpID0+IHsgfTsgfVxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChrZXksIGZuKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldLCBmbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KTtcbn07XG5leHBvcnQgY29uc3Qgc2VuZENocm9tZU1lc3NhZ2UgPSAoX2EsIGNhbGxiYWNrRm4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChjYWxsYmFja0ZuKSB7XG4gICAgICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNhbGxiYWNrRm4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldENocm9tZU1lc3NhZ2UgPSAoZm4pID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZm4pO1xufTtcbmV4cG9ydCBjb25zdCBjbG9zZUN1cnJlbnRUYWIgPSAocGFyZW50KSA9PiB7XG4gICAgbGV0IHRoYXQgPSBwYXJlbnQ7XG4gICAgY2hyb21lLnRhYnMgPSBwYXJlbnQ7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgaWYgKHRhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRhYklkID0gdGFic1swXS5pZDtcbiAgICAgICAgICAgIGlmICghdGFiSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMucmVtb3ZlKHRhYklkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLtjpjsnbTsp4Ag64ur7Z6YXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnTrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgJCQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50cylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnRz66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RWxCeUlkID0gKHRhcmdldElkKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXRJZH1pZOulvCDqsIDsp4Qg7JeY66as66i87Yq466W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0IGVucm9sbEV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IChlbCwgdHlwZSwgZm4pID0+IHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbn07XG5leHBvcnQgY29uc3QgYjY0RW5jb2RlVW5pY29kZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTk9QS1GXXsyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihgMHgke3B9YCkpO1xuICAgIH0pKTtcbn07XG5leHBvcnQgY29uc3QgY29udmVydFNpbmdsZUNoYXJUb0RvdWJsZUNoYXIgPSAodGV4dCkgPT4ge1xuICAgIC8vIHNpbmdsZUNoYXIgdG8gZG91YmxlQ2hhciBtYXBwaW5nXG4gICAgY29uc3QgbWFwID0ge1xuICAgICAgICBcIiFcIjogXCLvvIFcIixcbiAgICAgICAgXCIlXCI6IFwi77yFXCIsXG4gICAgICAgIFwiJlwiOiBcIu+8hlwiLFxuICAgICAgICBcIihcIjogXCLvvIhcIixcbiAgICAgICAgXCIpXCI6IFwi77yJXCIsXG4gICAgICAgIFwiKlwiOiBcIu+8ilwiLFxuICAgICAgICBcIitcIjogXCLvvItcIixcbiAgICAgICAgXCIsXCI6IFwi77yMXCIsXG4gICAgICAgIFwiLVwiOiBcIu+8jVwiLFxuICAgICAgICBcIi5cIjogXCLvvI5cIixcbiAgICAgICAgXCIvXCI6IFwi77yPXCIsXG4gICAgICAgIFwiOlwiOiBcIu+8mlwiLFxuICAgICAgICBcIjtcIjogXCLvvJtcIixcbiAgICAgICAgXCI8XCI6IFwi77ycXCIsXG4gICAgICAgIFwiPVwiOiBcIu+8nVwiLFxuICAgICAgICBcIj5cIjogXCLvvJ5cIixcbiAgICAgICAgXCI/XCI6IFwi77yfXCIsXG4gICAgICAgIFwiQFwiOiBcIu+8oFwiLFxuICAgICAgICBcIltcIjogXCLvvLtcIixcbiAgICAgICAgXCJcXFxcXCI6IFwi77y8XCIsXG4gICAgICAgIFwiXVwiOiBcIu+8vVwiLFxuICAgICAgICBcIl5cIjogXCLvvL5cIixcbiAgICAgICAgXzogXCLvvL9cIixcbiAgICAgICAgXCJgXCI6IFwi772AXCIsXG4gICAgICAgIFwie1wiOiBcIu+9m1wiLFxuICAgICAgICBcInxcIjogXCLvvZxcIixcbiAgICAgICAgXCJ9XCI6IFwi772dXCIsXG4gICAgICAgIFwiflwiOiBcIu+9nlwiLFxuICAgICAgICBcIiBcIjogXCLigIVcIiwgLy8g6rO167Cx66eMIOyghOqwgeusuOyekOqwgCDslYTri4wgRk9VUi1QRVItRU0gU1BBQ0XroZwg67OA7ZmYXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bISUmKCkqKyxcXC0uLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fiBdL2csIChrKSA9PiBtYXBba10pO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVlVGltZXIgPSAoY2FsbGJhY2tGbikgPT4ge1xuICAgIGxldCBbc2VjcywgbWlucywgaG91cnNdID0gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZWNzKys7XG4gICAgICAgIGlmIChzZWNzID09IDYwKSB7XG4gICAgICAgICAgICBzZWNzID0gMDtcbiAgICAgICAgICAgIG1pbnMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWlucyA9PSA2MCkge1xuICAgICAgICAgICAgbWlucyA9IDA7XG4gICAgICAgICAgICBob3VycysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VycyA9PSAxMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaCA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzLnRvU3RyaW5nKCkgOiBob3Vycy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBtID0gbWlucyA8IDEwID8gXCIwXCIgKyBtaW5zLnRvU3RyaW5nKCkgOiBtaW5zLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHMgPSBzZWNzIDwgMTAgPyBcIjBcIiArIHNlY3MudG9TdHJpbmcoKSA6IHNlY3MudG9TdHJpbmcoKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lciA9IChzdGFydFRpbWUsIGNhbGxiYWNrRm4pID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB7IGgsIG0sIHMgfSA9IGdldFRpbWVEaWZmKHN0YXJ0VGltZSwgbm93VGltZSk7XG4gICAgICAgIGNhbGxiYWNrRm4oeyBoLCBtLCBzIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgaW5zZXJ0SFRNTCA9ICh7IGVsZW1lbnQsIHBvc2l0aW9uLCBodG1sIH0pID0+IHtcbiAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgaHRtbCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFRpbWVEaWZmID0gKHN0YXJ0VGltZSwgbm93VGltZSkgPT4ge1xuICAgIGxldCBbaG91ciwgbWluLCBzZWNdID0gWzAsIDAsIDBdO1xuICAgIGxldCB0aW1lRGlmZlNlYyA9IE1hdGguZmxvb3IoKG5vd1RpbWUgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG4gICAgaWYgKHRpbWVEaWZmU2VjID4gMzYwMCkge1xuICAgICAgICBob3VyID0gTWF0aC5mbG9vcih0aW1lRGlmZlNlYyAvIDM2MDApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgMzYwMDtcbiAgICB9XG4gICAgaWYgKHRpbWVEaWZmU2VjID4gNjApIHtcbiAgICAgICAgbWluID0gTWF0aC5mbG9vcih0aW1lRGlmZlNlYyAvIDYwKTtcbiAgICAgICAgdGltZURpZmZTZWMgPSB0aW1lRGlmZlNlYyAlIDYwO1xuICAgIH1cbiAgICBzZWMgPSB0aW1lRGlmZlNlYztcbiAgICBjb25zdCBoID0gaG91ciA8IDEwID8gXCIwXCIgKyBob3VyLnRvU3RyaW5nKCkgOiBob3VyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbSA9IG1pbiA8IDEwID8gXCIwXCIgKyBtaW4udG9TdHJpbmcoKSA6IG1pbi50b1N0cmluZygpO1xuICAgIGNvbnN0IHMgPSBzZWMgPCAxMCA/IFwiMFwiICsgc2VjLnRvU3RyaW5nKCkgOiBzZWMudG9TdHJpbmcoKTtcbiAgICByZXR1cm4geyBoLCBtLCBzIH07XG59O1xuZXhwb3J0IGNvbnN0IGhhc0VsZW1lbnQgPSAodGFyZ2V0LCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaHRtbEVudGl0eURlY29kZSA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgdW5lc2NhcGVkID0ge1xuICAgICAgICBcIiZhbXA7XCI6IFwiJlwiLFxuICAgICAgICBcIiYjMzg7XCI6IFwiJlwiLFxuICAgICAgICBcIiZsdDtcIjogXCI8XCIsXG4gICAgICAgIFwiJiM2MDtcIjogXCI8XCIsXG4gICAgICAgIFwiJmd0O1wiOiBcIj5cIixcbiAgICAgICAgXCImIzYyO1wiOiBcIj5cIixcbiAgICAgICAgXCImYXBvcztcIjogXCInXCIsXG4gICAgICAgIFwiJiMzOTtcIjogXCInXCIsXG4gICAgICAgIFwiJnF1b3Q7XCI6ICdcIicsXG4gICAgICAgIFwiJiMzNDtcIjogJ1wiJyxcbiAgICAgICAgXCImbmJzcDtcIjogXCIgXCIsXG4gICAgICAgIFwiJiMxNjA7XCI6IFwiIFwiLFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvJig/OmFtcHwjMzh8bHR8IzYwfGd0fCM2MnxhcG9zfCMzOXxxdW90fCMzNHxuYnNwfCMxNjApOy9nLCAod29yZCkgPT4gdW5lc2NhcGVkW3dvcmRdKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0UXVlcnlQYXJhbSA9IChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQocXVlcnkpO1xuICAgIGlmICghcGFyYW0pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IEZvdW5kIFF1ZXJ5ICR7cXVlcnl9YCk7XG4gICAgcmV0dXJuIHBhcmFtO1xufTtcbmV4cG9ydCBjb25zdCBTT0xWRURBQ19MRVZFTCA9IHtcbiAgICAwOiBcIlVucmF0ZWRcIixcbiAgICAxOiBcIkJyb256ZSBWXCIsXG4gICAgMjogXCJCcm9uemUgSVZcIixcbiAgICAzOiBcIkJyb256ZSBJSUlcIixcbiAgICA0OiBcIkJyb256ZSBJSVwiLFxuICAgIDU6IFwiQnJvbnplIElcIixcbiAgICA2OiBcIlNpbHZlciBWXCIsXG4gICAgNzogXCJTaWx2ZXIgSVZcIixcbiAgICA4OiBcIlNpbHZlciBJSUlcIixcbiAgICA5OiBcIlNpbHZlciBJSVwiLFxuICAgIDEwOiBcIlNpbHZlciBJXCIsXG4gICAgMTE6IFwiR29sZCBWXCIsXG4gICAgMTI6IFwiR29sZCBJVlwiLFxuICAgIDEzOiBcIkdvbGQgSUlJXCIsXG4gICAgMTQ6IFwiR29sZCBJSVwiLFxuICAgIDE1OiBcIkdvbGQgSVwiLFxuICAgIDE2OiBcIlBsYXRpbnVtIFZcIixcbiAgICAxNzogXCJQbGF0aW51bSBJVlwiLFxuICAgIDE4OiBcIlBsYXRpbnVtIElJSVwiLFxuICAgIDE5OiBcIlBsYXRpbnVtIElJXCIsXG4gICAgMjA6IFwiUGxhdGludW0gSVwiLFxuICAgIDIxOiBcIkRpYW1vbmQgVlwiLFxuICAgIDIyOiBcIkRpYW1vbmQgSVZcIixcbiAgICAyMzogXCJEaWFtb25kIElJSVwiLFxuICAgIDI0OiBcIkRpYW1vbmQgSUlcIixcbiAgICAyNTogXCJEaWFtb25kIElcIixcbiAgICAyNjogXCJSdWJ5IFZcIixcbiAgICAyNzogXCJSdWJ5IElWXCIsXG4gICAgMjg6IFwiUnVieSBJSUlcIixcbiAgICAyOTogXCJSdWJ5IElJXCIsXG4gICAgMzA6IFwiUnVieSBJXCIsXG4gICAgMzE6IFwiTWFzdGVyXCIsXG59O1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IHtcbiAgICDslYTtnaw6IFwiYWhldWlcIixcbiAgICDsl4TspIDsi506IFwidW1tXCIsXG4gICAgQWRhOiBcImFkYVwiLFxuICAgIFwiQWxnb2wgNjhcIjogXCJhXCIsXG4gICAgQVBFQ09ERTogXCJhcGVcIixcbiAgICBBc3NlbWJseTogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoMzJiaXQpXCI6IFwib1wiLFxuICAgIFwiQXNzZW1ibHkgKDY0Yml0KVwiOiBcIm9cIixcbiAgICBhd2s6IFwiYXdrXCIsXG4gICAgQmFzaDogXCJzaFwiLFxuICAgIGJjOiBcImJjXCIsXG4gICAgQmVmdW5nZTogXCJiZlwiLFxuICAgIEJvbzogXCJib29cIixcbiAgICBcIkJyYWluZioqa1wiOiBcImJmXCIsXG4gICAgQzogXCJjXCIsXG4gICAgXCJDI1wiOiBcImNzXCIsXG4gICAgXCJDIyAzLjAgKE1vbm8pXCI6IFwiY3NcIixcbiAgICBcIkMjIDYuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgOS4wICguTkVUKVwiOiBcImNzXCIsXG4gICAgXCJDKytcIjogXCJjY1wiLFxuICAgIFwiQysrMTFcIjogXCJjY1wiLFxuICAgIFwiQysrMTEgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysxNFwiOiBcImNjXCIsXG4gICAgXCJDKysxNCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE3XCI6IFwiY2NcIixcbiAgICBcIkMrKzE3IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMjBcIjogXCJjY1wiLFxuICAgIFwiQysrMjAgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKys5OFwiOiBcImNjXCIsXG4gICAgXCJDKys5OCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBDMTE6IFwiY1wiLFxuICAgIFwiQzExIChDbGFuZylcIjogXCJjXCIsXG4gICAgQzJ4OiBcImNcIixcbiAgICBcIkMyeCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5MDogXCJjXCIsXG4gICAgXCJDOTAgKENsYW5nKVwiOiBcImNcIixcbiAgICBDOTk6IFwiY1wiLFxuICAgIFwiQzk5IChDbGFuZylcIjogXCJjXCIsXG4gICAgQ29ib2w6IFwiY29iXCIsXG4gICAgQ29icmE6IFwiY29icmFcIixcbiAgICBDb3E6IFwidlwiLFxuICAgIENyeXN0YWw6IFwiY3JcIixcbiAgICBEOiBcImRcIixcbiAgICBcIkQgKExEQylcIjogXCJkXCIsXG4gICAgXCJGI1wiOiBcImZzXCIsXG4gICAgXCJGIyAoLk5FVClcIjogXCJmc1wiLFxuICAgIFwiRiMgKE1vbm8pXCI6IFwiZnNcIixcbiAgICBGb3J0cmFuOiBcImZcIixcbiAgICBGcmVlQkFTSUM6IFwiYmFzXCIsXG4gICAgR286IFwiZ29cIixcbiAgICBcIkdvIChnY2NnbylcIjogXCJnb1wiLFxuICAgIEdvbGZzY3JpcHQ6IFwiZ3NcIixcbiAgICBIYXNrZWxsOiBcImhzXCIsXG4gICAgSGF4ZTogXCJweVwiLFxuICAgIElOVEVSQ0FMOiBcImlcIixcbiAgICBKYXZhOiBcImphdmFcIixcbiAgICBcIkphdmEgMTFcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDE1XCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSA4XCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSA4IChPcGVuSkRLKVwiOiBcImphdmFcIixcbiAgICBLb3RsaW46IFwia3RcIixcbiAgICBcIktvdGxpbiAoSlZNKVwiOiBcImt0XCIsXG4gICAgXCJLb3RsaW4gKE5hdGl2ZSlcIjogXCJrdFwiLFxuICAgIExPTENPREU6IFwibG9sXCIsXG4gICAgTHVhOiBcImx1YVwiLFxuICAgIE1pbmVjcmFmdDogXCJtY2FcIixcbiAgICBOZW1lcmxlOiBcIm5cIixcbiAgICBOaW1yb2Q6IFwibmltXCIsXG4gICAgXCJub2RlLmpzXCI6IFwianNcIixcbiAgICBcIk9iamVjdGl2ZS1DXCI6IFwibVwiLFxuICAgIFwiT2JqZWN0aXZlLUMrK1wiOiBcIm1tXCIsXG4gICAgT0NhbWw6IFwibWxcIixcbiAgICBQYXNjYWw6IFwicGFzXCIsXG4gICAgUGVybDogXCJwbFwiLFxuICAgIFBIUDogXCJwaHBcIixcbiAgICBQaWtlOiBcInBpa2VcIixcbiAgICBQeVB5OiBcInB5XCIsXG4gICAgUHlQeTI6IFwicHlcIixcbiAgICBQeVB5MzogXCJweVwiLFxuICAgIFB5dGhvbjogXCJweVwiLFxuICAgIFwiUHl0aG9uIDJcIjogXCJweVwiLFxuICAgIFwiUHl0aG9uIDNcIjogXCJweVwiLFxuICAgIFJoaW5vOiBcImpzXCIsXG4gICAgUnVieTogXCJyYlwiLFxuICAgIFwiUnVieSAxLjhcIjogXCJyYlwiLFxuICAgIFwiUnVieSAxLjlcIjogXCJyYlwiLFxuICAgIFwiUnVieSAyXCI6IFwicmJcIixcbiAgICBSdXN0OiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMTVcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE4XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxOVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMjFcIjogXCJyc1wiLFxuICAgIFNjYWxhOiBcInNjYWxhXCIsXG4gICAgU2NoZW1lOiBcInNjbVwiLFxuICAgIHNlZDogXCJzZWRcIixcbiAgICBTd2lmdDogXCJzd2lmdFwiLFxuICAgIFN5c3RlbVZlcmlsb2c6IFwic3ZcIixcbiAgICBUY2w6IFwidGNsXCIsXG4gICAgVGV4dDogXCJ0eHRcIixcbiAgICBUeXBlU2NyaXB0OiBcInRzXCIsXG4gICAgXCJWQi5ORVQgMi4wIChNb25vKVwiOiBcInZiXCIsXG4gICAgXCJWQi5ORVQgNC4wIChNb25vKVwiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWNcIjogXCJ2YlwiLFxuICAgIFwiVmlzdWFsIEJhc2ljICguTkVUKVwiOiBcInZiXCIsXG4gICAgV2hpdGVzcGFjZTogXCJ3c1wiLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgJCwgY29udmVydFNpbmdsZUNoYXJUb0RvdWJsZUNoYXIsIGNyZWF0ZVRpbWVyLCBlbnJvbGxFdmVudCwgZ2V0UXVlcnlQYXJhbSwgZ2V0VGltZURpZmYsIGhhc0VsZW1lbnQsIGluc2VydEhUTUwsIExBTkdVQUdFUywgU09MVkVEQUNfTEVWRUwsIH0gZnJvbSBcIi4vdXRpbHMvanNVdGlsc1wiO1xuaW1wb3J0IFwiLi9CYWVranVuLmNzc1wiO1xuaW1wb3J0IHsgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlLCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIHNldENocm9tZUxvY2FsU3RvcmFnZSwgfSBmcm9tIFwiLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbiwgZ2V0QmFla2p1blNvbHZlZERhdGEsIGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYywgfSBmcm9tIFwiLi9BUEkvZ2V0UmVxQVBJXCI7XG5pbXBvcnQgeyBjb21taXRDb2RlVG9SZXBvIH0gZnJvbSBcIi4vQVBJL3Bvc3RSZXFBUElcIjtcbmNsYXNzIEJhZWtqdW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IEJhZWtqdW5Qcm9ibGVtSWQ6IGJhZWtqdW5Qcm9ibGVtSWQgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJCYWVranVuUHJvYmxlbUlkXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgICAgICAgICBpZiAoIXJlcG9OYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcG9zaXRvcnnqsIAg7JWE7KeBIOyEpOygleuQmOyngOyViuyVmOyKteuLiOuLpC5cIik7XG4gICAgICAgICAgICBpZiAoIWJhZWtqdW5Qcm9ibGVtSWQgfHwgIXRoaXMuY2hlY2tQcm9ibGVtSWQoYmFla2p1blByb2JsZW1JZCkpIHtcbiAgICAgICAgICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBCYWVranVuUHJvYmxlbUlkOiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcImh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vXCIpWzFdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7IGJhZWtqdW5UaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0U29sdmluZyA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaXNUaW1lciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcImlzVGltZXJcIikpO1xuICAgICAgICAgICAgaWYgKGlzVGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhZWtqdW5UaW1lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWFkeVRvU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdWJtaXRFdmVudCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEJhZWtqdW5UaW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zZXRUaW1lclRlbXBsYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3VibWl0RXZlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAkKFwiI3N1Ym1pdF9idXR0b25cIik7XG4gICAgICAgICAgICBlbnJvbGxFdmVudChzdWJtaXRCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdGVkUHJvYmxlbTogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC9zdWJtaXQvXCIpWzFdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0VGltZXIgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGJhZWtqdW5UaW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiYmFla2p1blRpbWVcIikpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNyZWF0ZVRpbWVyKGJhZWtqdW5UaW1lLCB0aGlzLnJlUmVuZGVyVGltZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoZWNrU3VibWl0ZWQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHN1Ym1pdGVkUHJvYmxlbSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInN1Ym1pdGVkUHJvYmxlbVwiKSk7XG4gICAgICAgICAgICBpZiAoc3VibWl0ZWRQcm9ibGVtICYmIHN1Ym1pdGVkUHJvYmxlbSA9PT0gZ2V0UXVlcnlQYXJhbShcInByb2JsZW1faWRcIikpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVDaHJvbWVMb2NhbFN0b3JhZ2UoXCJzdWJtaXRlZFByb2JsZW1cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5hZnRlclN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGVja1N1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRNc2cgPSAkKFwiLnJlc3VsdC10ZXh0XCIpLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGlmIChyZXN1bHRNc2cgPT09IFwi66ee7JWY7Iq164uI64ukISFcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFmdGVyU3VibWl0ID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydExvYWRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrU3VjY2Vzc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c1RhYmxlID0gJChcIiNzdGF0dXMtdGFibGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0ZWRJbmZvID0gc3RhdHVzVGFibGUucm93c1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRFbGVtZW50ID0gc3VibWl0ZWRJbmZvLmNlbGxzWzNdO1xuICAgICAgICAgICAgICAgIGlmIChoYXNFbGVtZW50KFwiLnJlc3VsdC1hY1wiLCByZXN1bHRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNoZWNrU3VjY2Vzc0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTdWNjZXNzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYmFla2p1blRpbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJiYWVranVuVGltZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uSWQgPSBzdWJtaXRlZEluZm8uY2VsbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvYmxlbUlkID0gZ2V0UXVlcnlQYXJhbShcInByb2JsZW1faWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGVudFRpbWUgPSBzdWJtaXRlZEluZm8uY2VsbHNbNV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlbnRNZW1vcnkgPSBzdWJtaXRlZEluZm8uY2VsbHNbNF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAkKFwiYVwiLCBzdWJtaXRlZEluZm8uY2VsbHNbNl0pLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvbHZpbmdUaW1lID0gT2JqZWN0LnZhbHVlcyhnZXRUaW1lRGlmZihiYWVranVuVGltZSwgbmV3IERhdGUoKS5nZXRUaW1lKCkpKS5qb2luKFwiIDogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTdWNjZXNzKHByb2JsZW1JZCwgc3VibWlzc2lvbklkLCBzb2x2aW5nVGltZSwgc3BlbnRUaW1lLCBzcGVudE1lbW9yeSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJGYWlsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZnRlclN1Y2Nlc3MgPSAocHJvYmxlbUlkLCBzdWJtaXNzaW9uSWQsIHNvbHZpbmdUaW1lLCBzcGVudFRpbWUsIHNwZW50TWVtb3J5LCBsYW5ndWFnZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHlpZWxkIGdldEJhZWtqdW5Tb2x2ZWREYXRhKHN1Ym1pc3Npb25JZCk7XG4gICAgICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpbnB1dCwgb3V0cHV0IH0gPSB5aWVsZCBnZXRCYWVranVuUHJvYmxlbURlc2NyaXB0aW9uKHByb2JsZW1JZCk7XG4gICAgICAgICAgICBjb25zdCB7IGFjY2VwdGVkVXNlckNvdW50LCBhdmVyYWdlVHJpZXMsIG9mZmljaWFsLCBsZXZlbCwgdGl0bGVLbywgdGFncywgfSA9IHlpZWxkIGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYyhwcm9ibGVtSWQpO1xuICAgICAgICAgICAgY29uc3QgeyBkaXJlY3RvcnksIG1lc3NhZ2UsIGZpbGVOYW1lLCByZWFkTWUgfSA9IHRoaXMuY3JlYXRlUmVhZG1lKHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRVc2VyQ291bnQsXG4gICAgICAgICAgICAgICAgYXZlcmFnZVRyaWVzLFxuICAgICAgICAgICAgICAgIG9mZmljaWFsLFxuICAgICAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgICAgIHRpdGxlS28sXG4gICAgICAgICAgICAgICAgcHJvYmxlbUlkLFxuICAgICAgICAgICAgICAgIHNvbHZpbmdUaW1lLFxuICAgICAgICAgICAgICAgIHNwZW50VGltZSxcbiAgICAgICAgICAgICAgICBzcGVudE1lbW9yeSxcbiAgICAgICAgICAgICAgICB0YWdzLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBjb21taXRDb2RlVG9SZXBvKHsgZGlyZWN0b3J5LCBtZXNzYWdlLCBmaWxlTmFtZSwgcmVhZE1lLCBjb2RlIH0pO1xuICAgICAgICAgICAgeWllbGQgdGhpcy5yZW5kZXJTdWNjZXNzTWFyaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZnRlckZhaWwgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckZhaWxNYXJrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JlYXRlUmVhZG1lID0gKHsgZGVzY3JpcHRpb24sIGlucHV0LCBvdXRwdXQsIGFjY2VwdGVkVXNlckNvdW50LCBhdmVyYWdlVHJpZXMsIG9mZmljaWFsLCBsZXZlbCwgdGl0bGVLbywgcHJvYmxlbUlkLCBzb2x2aW5nVGltZSwgc3BlbnRUaW1lLCBzcGVudE1lbW9yeSwgdGFncywgbGFuZ3VhZ2UsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGBCYWVranVuLyR7U09MVkVEQUNfTEVWRUxbbGV2ZWxdLnJlcGxhY2UoLyAuKi8sIFwiXCIpfS8ke3Byb2JsZW1JZH0u4oCFJHtjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhcih0aXRsZUtvKX1gO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBbJHtsZXZlbH1dICR7dGl0bGVLb30gLSBUaW1lOiAke3NwZW50VGltZX0gbXMsIE1lbW9yeTogJHtzcGVudE1lbW9yeX0gS0IsIFRpbWUgdG8gc29sdmU6ICR7c29sdmluZ1RpbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGFncy5tYXAoKHRhZykgPT4gdGFnLmRpc3BsYXlOYW1lc1swXS5uYW1lKS5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGAke2NvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyKHRpdGxlS28pfS4ke0xBTkdVQUdFU1tsYW5ndWFnZV19YDtcbiAgICAgICAgICAgIC8vIHByZXR0aWVyIC0gaWdub3JlIC0gc3RhcnQ7XG4gICAgICAgICAgICBjb25zdCByZWFkTWUgPSBgIyBbJHtsZXZlbH1dICR7dGl0bGVLb30gLSAke3Byb2JsZW1JZH0gXFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYFvrrLjsoJwg66eB7YGsXShodHRwczovL3d3dy5hY21pY3BjLm5ldC9wcm9ibGVtLyR7cHJvYmxlbUlkfSkgXFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYCMjIyDshLHriqUg7JqU7JW9XFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYOuplOuqqOumrDogJHtzcGVudE1lbW9yeX0gS0IsIGAgK1xuICAgICAgICAgICAgICAgIGDsi5zqsIQ6ICR7c3BlbnRUaW1lfSBtc1xcblxcbmAgK1xuICAgICAgICAgICAgICAgIGDtkoDsnbTsi5zqsIQ6ICR7c29sdmluZ1RpbWV9XFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYCMjIyDrtoTrpZhcXG5cXG5gICtcbiAgICAgICAgICAgICAgICBgJHtjYXRlZ29yeX1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAoISFkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICA/IFwiXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyDrrLjsoJwg7ISk66qFXFxuXFxuJHtkZXNjcmlwdGlvbn1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMg7J6F66ClIFxcblxcbiAke2lucHV0fVxcblxcbmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyDstpzroKUgXFxuXFxuICR7b3V0cHV0fVxcblxcbmBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRpcmVjdG9yeSwgbWVzc2FnZSwgZmlsZU5hbWUsIHJlYWRNZSB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFNvbHZlZERhdGEgPSAoc3VibWlzc2lvbklkKSA9PiB7IH07XG4gICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0RWxlbWVudCA9ICQoXCIucmVzdWx0XCIpO1xuICAgICAgICAgICAgcmVzdWx0RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctc29sdmVcIj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrUHJvYmxlbUlkID0gKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdGVkTGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KC89fCZ8XFwvLyk7XG4gICAgICAgICAgICBpZiAoc3BsaXRlZExpbmsuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVSZW5kZXJUaW1lID0gKHsgaCwgbSwgcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lRWxlbWVudCA9ICQoXCIudGltZXJcIik7XG4gICAgICAgICAgICB0aW1lRWxlbWVudC5pbm5lclRleHQgPSBgVGltZXI6ICR7aH06JHttfToke3N9IGA7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0VGltZXJUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiLnBhZ2UtaGVhZGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBcImFmdGVyYmVnaW5cIjtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInRpbWVyLWNvbnRhaW5lclwiID5cbiAgICA8cCBjbGFzcz1cInRpbWVyXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgICAgICBpbnNlcnRIVE1MKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyRmFpbE1hcmsgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXNFbGVtZW50ID0gJChcIi5sb2FkaW5nLXNvbHZlXCIpO1xuICAgICAgICAgICAgc3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcImZhaWwtc29sdmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdWNjZXNzTWFyayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0VsZW1lbnQgPSAkKFwiLmxvYWRpbmctc29sdmVcIik7XG4gICAgICAgICAgICBzdGF0dXNFbGVtZW50LmNsYXNzTmFtZSA9IFwic3VjY2Vzcy1zb2x2ZVwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5jaGVja1N1Ym1pdGVkKCk7XG4gICAgfVxufVxuY29uc3QgYmFla2p1biA9IG5ldyBCYWVranVuKCk7XG5pZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvcHJvYmxlbS9cIikpIHtcbiAgICBiYWVranVuLnN0YXJ0U29sdmluZygpO1xufVxuZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvc3VibWl0L1wiKSkge1xuICAgIGJhZWtqdW4ucmVhZHlUb1N1Ym1pdCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9