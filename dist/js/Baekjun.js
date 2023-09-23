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
            }
            const { baekjunTime } = (yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.getChromeLocalStorage)("baekjunTime"));
            if (!baekjunTime) {
                (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.setChromeLocalStorage)({ baekjunTime: new Date().getTime() });
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
                        (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage)("baekjunTime");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFB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QztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QyxnQ0FBZ0MsaURBQUM7QUFDakMsOENBQThDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztBQUMzRDtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFVLEdBQUcseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQSxrQ0FBa0MsaURBQUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlEQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQmFla2p1bi5jc3MiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQmFla2p1bi5jc3M/NjFhNSIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0FQSS9nZXRSZXFBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQVBJL3Bvc3RSZXFBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvY2hyb21lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvanNVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9CYWVranVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGltZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGltZXIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTg1ZjY5O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLnJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5sb2FkaW5nLXNvbHZlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmxvYWRpbmctc29sdmUgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNhZmE4ZGU7XG4gIGFuaW1hdGlvbjogbG9hZGluZy1zb2x2ZSAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XG59XG4ubG9hZGluZy1zb2x2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuQGtleWZyYW1lcyBsb2FkaW5nLXNvbHZlIHtcbiAgMCUge1xuICAgIHRvcDogOHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuICA1MCUsXG4gIDEwMCUge1xuICAgIHRvcDogMjRweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxufVxuXG4uc3VjY2Vzcy1zb2x2ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWZhOGRlO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjYWZhOGRlO1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uZmFpbC1zb2x2ZSB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mYWlsLXNvbHZlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjZDgwODQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZmFpbC1zb2x2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQmFla2p1bi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtRUFBbUU7QUFDckU7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFlBQVk7RUFDZDtFQUNBOztJQUVFLFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGltZXItY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLnRpbWVyIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzU4NWY2OTtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG4ucmVzdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubG9hZGluZy1zb2x2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5sb2FkaW5nLXNvbHZlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWZhOGRlO1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLXNvbHZlIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcXG59XFxuLmxvYWRpbmctc29sdmUgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcXG59XFxuLmxvYWRpbmctc29sdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcXG59XFxuLmxvYWRpbmctc29sdmUgZGl2Om50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDA7XFxufVxcbkBrZXlmcmFtZXMgbG9hZGluZy1zb2x2ZSB7XFxuICAwJSB7XFxuICAgIHRvcDogOHB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICB9XFxuICA1MCUsXFxuICAxMDAlIHtcXG4gICAgdG9wOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDdweDtcXG4gIH1cXG59XFxuXFxuLnN1Y2Nlc3Mtc29sdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjYWZhOGRlO1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2FmYThkZTtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbi5mYWlsLXNvbHZlIHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZmFpbC1zb2x2ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2NkODA4NDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmZhaWwtc29sdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjY2Q4MDg0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQmFla2p1bi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0JhZWtqdW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENocm9tZUxvY2FsU3RvcmFnZSwgc2VuZENocm9tZU1lc3NhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7ICQsIGh0bWxFbnRpdHlEZWNvZGUgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKHRva2VuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJcIjtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYHRva2VuICR7dG9rZW59YCxcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAoY29kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICB9KSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVwb3MgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIiwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEJyYW5jaCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9YDtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5kZWZhdWx0X2JyYW5jaDtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFJlZmVyZW5jZSA9IChicmFuY2ggPSBcIm1haW5cIikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3JlZi9oZWFkcy8ke2JyYW5jaH1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiB7IHJlZlNIQTogcmVzLm9iamVjdC5zaGEsIHJlZjogcmVzLnJlZiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blNvbHZlZERhdGEgPSAoc3VibWlzc2lvbklkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3NvdXJjZS9kb3dubG9hZC8ke3N1Ym1pc3Npb25JZH1gO1xuICAgIGNvbnN0IGNvZGUgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2VjLUZldGNoLURlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtTW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICByZXR1cm4gY29kZTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldEJhZWtqdW5Qcm9ibGVtRGVzY3JpcHRpb24gPSAocHJvYmxlbUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHtwcm9ibGVtSWR9YDtcbiAgICBjb25zdCBkb2MgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwic2VjLWZldGNoLWRlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtbW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICBjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkb2MsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1faW5wdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3Qgb3V0cHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fb3V0cHV0XCIsIGh0bWwpLmlubmVySFRNTC50cmltKCkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fZGVzY3JpcHRpb25cIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgcmV0dXJuIHsgaW5wdXQsIG91dHB1dCwgZGVzY3JpcHRpb24gfTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYyA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogXCJiYWVranVuXCIsXG4gICAgICAgIHRhc2s6IFwiZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjXCIsXG4gICAgICAgIHByb2JsZW1JZCxcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7IGI2NEVuY29kZVVuaWNvZGUgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdEJyYW5jaCwgZ2V0UmVmZXJlbmNlIH0gZnJvbSBcIi4vZ2V0UmVxQVBJXCI7XG5leHBvcnQgY29uc3QgY29tbWl0Q29kZVRvUmVwbyA9ICh7IGRpcmVjdG9yeSwgY29kZSwgbWVzc2FnZSwgcmVhZE1lLCBmaWxlTmFtZSwgfSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJyYW5jaCA9IHlpZWxkIGdldERlZmF1bHRCcmFuY2goKTtcbiAgICBjb25zdCB7IHJlZlNIQSwgcmVmIH0gPSB5aWVsZCBnZXRSZWZlcmVuY2UoZGVmYXVsdEJyYW5jaCk7XG4gICAgY29uc3Qgc291cmNlQ29kZSA9IHlpZWxkIGNyZWF0ZUJsb2IoY29kZSwgZmlsZU5hbWUsIGRpcmVjdG9yeSk7XG4gICAgY29uc3Qgc291cmNlUmVhZE1lID0geWllbGQgY3JlYXRlQmxvYihyZWFkTWUsIFwiUkVBRE1FLm1kXCIsIGRpcmVjdG9yeSk7XG4gICAgY29uc3QgdHJlZVNIQSA9IHlpZWxkIGNyZWF0ZVRyZWUocmVmU0hBLCBbc291cmNlQ29kZSwgc291cmNlUmVhZE1lXSk7XG4gICAgY29uc3QgY29tbWl0U0hBID0geWllbGQgY3JlYXRlQ29tbWl0KG1lc3NhZ2UsIHRyZWVTSEEsIHJlZlNIQSk7XG4gICAgeWllbGQgdXBkYXRlSGVhZChyZWYsIGNvbW1pdFNIQSk7XG59KTtcbmV4cG9ydCBjb25zdCBwb3N0TmV3UmVwbyA9IChuYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIjtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcml2YXRlOiB0cnVlLFxuICAgICAgICBhdXRvX2luaXQ6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuyVjOqzoOumrOymmCDsnpDrj5kg6riw66GdIOuztOq0gOyGjFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG4vLyBleHBvcnQgdHlwZSBOZXdCbG9iID0ge1xuLy8gICBwYXRoOiBzdHJpbmc7XG4vLyAgIHNoYTogc3RyaW5nO1xuLy8gICBtb2RlOiBzdHJpbmc7XG4vLyAgIHR5cGU6IHN0cmluZztcbi8vIH07XG5leHBvcnQgY29uc3QgY3JlYXRlQmxvYiA9IChjb250ZW50LCBmaWxlTmFtZSwgZGlyZWN0b3J5KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBwYXRoID0gYCR7ZGlyZWN0b3J5fS8ke2ZpbGVOYW1lfWA7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvYmxvYnNgO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRlbnQ6IGI2NEVuY29kZVVuaWNvZGUoY29udGVudCksXG4gICAgICAgIGVuY29kaW5nOiBcImJhc2U2NFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4geyBwYXRoLCBzaGE6IHJlcy5zaGEsIG1vZGU6IFwiMTAwNjQ0XCIsIHR5cGU6IFwiYmxvYlwiIH07XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmVlID0gKHJlZlNIQSwgdHJlZV9pdGVtcykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3RyZWVzYDtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB0cmVlOiB0cmVlX2l0ZW1zLCBiYXNlX3RyZWU6IHJlZlNIQSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21taXQgPSAobWVzc2FnZSwgdHJlZVNIQSwgcmVmU0hBKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvY29tbWl0c2A7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSwgdHJlZTogdHJlZVNIQSwgcGFyZW50OiBbcmVmU0hBXSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5zaGE7XG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVIZWFkID0gKHJlZiwgY29tbWl0U0hBLCBmb3JjZSA9IHRydWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9L2dpdC9yZWZzL2hlYWRzL21haW5gO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHNoYTogY29tbWl0U0hBLCBmb3JjZSB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNocm9tZVRhYnMgPSAoX2EpID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGZuKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoa2V5LCBmbikgPT4ge1xuICAgIGlmIChmbikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSwgZm4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZUxvY2FsU3RvcmFnZSA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBkZWxldGVDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSk7XG59O1xuZXhwb3J0IGNvbnN0IHNlbmRDaHJvbWVNZXNzYWdlID0gKF9hLCBjYWxsYmFja0ZuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoY2FsbGJhY2tGbikge1xuICAgICAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBjYWxsYmFja0ZuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVNZXNzYWdlID0gKGZuKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZuKTtcbn07XG5leHBvcnQgY29uc3QgY2xvc2VDdXJyZW50VGFiID0gKHBhcmVudCkgPT4ge1xuICAgIGxldCB0aGF0ID0gcGFyZW50O1xuICAgIGNocm9tZS50YWJzID0gcGFyZW50O1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICAgIGlmICh0YWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YWJJZCA9IHRhYnNbMF0uaWQ7XG4gICAgICAgICAgICBpZiAoIXRhYklkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnJlbW92ZSh0YWJJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi7Y6Y7J207KeAIOuLq+2emFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0ICQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW5066W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0ICQkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudHMpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXROYW1lfSBlbGVtZW50c+ulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cyk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEVsQnlJZCA9ICh0YXJnZXRJZCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0SWR9aWTrpbwg6rCA7KeEIOyXmOumrOuovO2KuOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBlbnJvbGxFdmVudCA9IChlbCwgdHlwZSwgZm4pID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbn07XG5leHBvcnQgY29uc3QgaXNPYmpFbXB0eSA9IChvYmopID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaikgPT09IEpTT04uc3RyaW5naWZ5KHt9KTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlRXZlbnQgPSAoZWwsIHR5cGUsIGZuKSA9PiB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGI2NEVuY29kZVVuaWNvZGUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05PUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIoYDB4JHtwfWApKTtcbiAgICB9KSk7XG59O1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyID0gKHRleHQpID0+IHtcbiAgICAvLyBzaW5nbGVDaGFyIHRvIGRvdWJsZUNoYXIgbWFwcGluZ1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgXCIhXCI6IFwi77yBXCIsXG4gICAgICAgIFwiJVwiOiBcIu+8hVwiLFxuICAgICAgICBcIiZcIjogXCLvvIZcIixcbiAgICAgICAgXCIoXCI6IFwi77yIXCIsXG4gICAgICAgIFwiKVwiOiBcIu+8iVwiLFxuICAgICAgICBcIipcIjogXCLvvIpcIixcbiAgICAgICAgXCIrXCI6IFwi77yLXCIsXG4gICAgICAgIFwiLFwiOiBcIu+8jFwiLFxuICAgICAgICBcIi1cIjogXCLvvI1cIixcbiAgICAgICAgXCIuXCI6IFwi77yOXCIsXG4gICAgICAgIFwiL1wiOiBcIu+8j1wiLFxuICAgICAgICBcIjpcIjogXCLvvJpcIixcbiAgICAgICAgXCI7XCI6IFwi77ybXCIsXG4gICAgICAgIFwiPFwiOiBcIu+8nFwiLFxuICAgICAgICBcIj1cIjogXCLvvJ1cIixcbiAgICAgICAgXCI+XCI6IFwi77yeXCIsXG4gICAgICAgIFwiP1wiOiBcIu+8n1wiLFxuICAgICAgICBcIkBcIjogXCLvvKBcIixcbiAgICAgICAgXCJbXCI6IFwi77y7XCIsXG4gICAgICAgIFwiXFxcXFwiOiBcIu+8vFwiLFxuICAgICAgICBcIl1cIjogXCLvvL1cIixcbiAgICAgICAgXCJeXCI6IFwi77y+XCIsXG4gICAgICAgIF86IFwi77y/XCIsXG4gICAgICAgIFwiYFwiOiBcIu+9gFwiLFxuICAgICAgICBcIntcIjogXCLvvZtcIixcbiAgICAgICAgXCJ8XCI6IFwi772cXCIsXG4gICAgICAgIFwifVwiOiBcIu+9nVwiLFxuICAgICAgICBcIn5cIjogXCLvvZ5cIixcbiAgICAgICAgXCIgXCI6IFwi4oCFXCIsIC8vIOqzteuwseunjCDsoITqsIHrrLjsnpDqsIAg7JWE64uMIEZPVVItUEVSLUVNIFNQQUNF66GcIOuzgO2ZmFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvWyElJigpKissXFwtLi86Ozw9Pj9AXFxbXFxcXFxcXV5fYHt8fX4gXS9nLCAoaykgPT4gbWFwW2tdKTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlZVRpbWVyID0gKGNhbGxiYWNrRm4pID0+IHtcbiAgICBsZXQgW3NlY3MsIG1pbnMsIGhvdXJzXSA9IFswLCAwLCAwXTtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2VjcysrO1xuICAgICAgICBpZiAoc2VjcyA9PSA2MCkge1xuICAgICAgICAgICAgc2VjcyA9IDA7XG4gICAgICAgICAgICBtaW5zKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnMgPT0gNjApIHtcbiAgICAgICAgICAgIG1pbnMgPSAwO1xuICAgICAgICAgICAgaG91cnMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT0gMTApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGggPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3Vycy50b1N0cmluZygpIDogaG91cnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgbSA9IG1pbnMgPCAxMCA/IFwiMFwiICsgbWlucy50b1N0cmluZygpIDogbWlucy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBzID0gc2VjcyA8IDEwID8gXCIwXCIgKyBzZWNzLnRvU3RyaW5nKCkgOiBzZWNzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNhbGxiYWNrRm4oeyBoLCBtLCBzIH0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXIgPSAoc3RhcnRUaW1lLCBjYWxsYmFja0ZuKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgeyBoLCBtLCBzIH0gPSBnZXRUaW1lRGlmZihzdGFydFRpbWUsIG5vd1RpbWUpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGluc2VydEhUTUwgPSAoeyBlbGVtZW50LCBwb3NpdGlvbiwgaHRtbCB9KSA9PiB7XG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIGh0bWwpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUaW1lRGlmZiA9IChzdGFydFRpbWUsIG5vd1RpbWUpID0+IHtcbiAgICBsZXQgW2hvdXIsIG1pbiwgc2VjXSA9IFswLCAwLCAwXTtcbiAgICBsZXQgdGltZURpZmZTZWMgPSBNYXRoLmZsb29yKChub3dUaW1lIC0gc3RhcnRUaW1lKSAvIDEwMDApO1xuICAgIGlmICh0aW1lRGlmZlNlYyA+IDM2MDApIHtcbiAgICAgICAgaG91ciA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyAzNjAwKTtcbiAgICAgICAgdGltZURpZmZTZWMgPSB0aW1lRGlmZlNlYyAlIDM2MDA7XG4gICAgfVxuICAgIGlmICh0aW1lRGlmZlNlYyA+IDYwKSB7XG4gICAgICAgIG1pbiA9IE1hdGguZmxvb3IodGltZURpZmZTZWMgLyA2MCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSA2MDtcbiAgICB9XG4gICAgc2VjID0gdGltZURpZmZTZWM7XG4gICAgY29uc3QgaCA9IGhvdXIgPCAxMCA/IFwiMFwiICsgaG91ci50b1N0cmluZygpIDogaG91ci50b1N0cmluZygpO1xuICAgIGNvbnN0IG0gPSBtaW4gPCAxMCA/IFwiMFwiICsgbWluLnRvU3RyaW5nKCkgOiBtaW4udG9TdHJpbmcoKTtcbiAgICBjb25zdCBzID0gc2VjIDwgMTAgPyBcIjBcIiArIHNlYy50b1N0cmluZygpIDogc2VjLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHsgaCwgbSwgcyB9O1xufTtcbmV4cG9ydCBjb25zdCBoYXNFbGVtZW50ID0gKHRhcmdldCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGh0bWxFbnRpdHlEZWNvZGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHVuZXNjYXBlZCA9IHtcbiAgICAgICAgXCImYW1wO1wiOiBcIiZcIixcbiAgICAgICAgXCImIzM4O1wiOiBcIiZcIixcbiAgICAgICAgXCImbHQ7XCI6IFwiPFwiLFxuICAgICAgICBcIiYjNjA7XCI6IFwiPFwiLFxuICAgICAgICBcIiZndDtcIjogXCI+XCIsXG4gICAgICAgIFwiJiM2MjtcIjogXCI+XCIsXG4gICAgICAgIFwiJmFwb3M7XCI6IFwiJ1wiLFxuICAgICAgICBcIiYjMzk7XCI6IFwiJ1wiLFxuICAgICAgICBcIiZxdW90O1wiOiAnXCInLFxuICAgICAgICBcIiYjMzQ7XCI6ICdcIicsXG4gICAgICAgIFwiJm5ic3A7XCI6IFwiIFwiLFxuICAgICAgICBcIiYjMTYwO1wiOiBcIiBcIixcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzR8bmJzcHwjMTYwKTsvZywgKHdvcmQpID0+IHVuZXNjYXBlZFt3b3JkXSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5UGFyYW0gPSAocXVlcnkpID0+IHtcbiAgICBjb25zdCBwYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KHF1ZXJ5KTtcbiAgICBpZiAoIXBhcmFtKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBGb3VuZCBRdWVyeSAke3F1ZXJ5fWApO1xuICAgIHJldHVybiBwYXJhbTtcbn07XG5leHBvcnQgY29uc3QgU09MVkVEQUNfTEVWRUwgPSB7XG4gICAgMDogXCJVbnJhdGVkXCIsXG4gICAgMTogXCJCcm9uemUgVlwiLFxuICAgIDI6IFwiQnJvbnplIElWXCIsXG4gICAgMzogXCJCcm9uemUgSUlJXCIsXG4gICAgNDogXCJCcm9uemUgSUlcIixcbiAgICA1OiBcIkJyb256ZSBJXCIsXG4gICAgNjogXCJTaWx2ZXIgVlwiLFxuICAgIDc6IFwiU2lsdmVyIElWXCIsXG4gICAgODogXCJTaWx2ZXIgSUlJXCIsXG4gICAgOTogXCJTaWx2ZXIgSUlcIixcbiAgICAxMDogXCJTaWx2ZXIgSVwiLFxuICAgIDExOiBcIkdvbGQgVlwiLFxuICAgIDEyOiBcIkdvbGQgSVZcIixcbiAgICAxMzogXCJHb2xkIElJSVwiLFxuICAgIDE0OiBcIkdvbGQgSUlcIixcbiAgICAxNTogXCJHb2xkIElcIixcbiAgICAxNjogXCJQbGF0aW51bSBWXCIsXG4gICAgMTc6IFwiUGxhdGludW0gSVZcIixcbiAgICAxODogXCJQbGF0aW51bSBJSUlcIixcbiAgICAxOTogXCJQbGF0aW51bSBJSVwiLFxuICAgIDIwOiBcIlBsYXRpbnVtIElcIixcbiAgICAyMTogXCJEaWFtb25kIFZcIixcbiAgICAyMjogXCJEaWFtb25kIElWXCIsXG4gICAgMjM6IFwiRGlhbW9uZCBJSUlcIixcbiAgICAyNDogXCJEaWFtb25kIElJXCIsXG4gICAgMjU6IFwiRGlhbW9uZCBJXCIsXG4gICAgMjY6IFwiUnVieSBWXCIsXG4gICAgMjc6IFwiUnVieSBJVlwiLFxuICAgIDI4OiBcIlJ1YnkgSUlJXCIsXG4gICAgMjk6IFwiUnVieSBJSVwiLFxuICAgIDMwOiBcIlJ1YnkgSVwiLFxuICAgIDMxOiBcIk1hc3RlclwiLFxufTtcbmV4cG9ydCBjb25zdCBMQU5HVUFHRVMgPSB7XG4gICAg7JWE7Z2sOiBcImFoZXVpXCIsXG4gICAg7JeE7KSA7IudOiBcInVtbVwiLFxuICAgIEFkYTogXCJhZGFcIixcbiAgICBcIkFsZ29sIDY4XCI6IFwiYVwiLFxuICAgIEFQRUNPREU6IFwiYXBlXCIsXG4gICAgQXNzZW1ibHk6IFwib1wiLFxuICAgIFwiQXNzZW1ibHkgKDMyYml0KVwiOiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICg2NGJpdClcIjogXCJvXCIsXG4gICAgYXdrOiBcImF3a1wiLFxuICAgIEJhc2g6IFwic2hcIixcbiAgICBiYzogXCJiY1wiLFxuICAgIEJlZnVuZ2U6IFwiYmZcIixcbiAgICBCb286IFwiYm9vXCIsXG4gICAgXCJCcmFpbmYqKmtcIjogXCJiZlwiLFxuICAgIEM6IFwiY1wiLFxuICAgIFwiQyNcIjogXCJjc1wiLFxuICAgIFwiQyMgMy4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA2LjAgKE1vbm8pXCI6IFwiY3NcIixcbiAgICBcIkMjIDkuMCAoLk5FVClcIjogXCJjc1wiLFxuICAgIFwiQysrXCI6IFwiY2NcIixcbiAgICBcIkMrKzExXCI6IFwiY2NcIixcbiAgICBcIkMrKzExIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTRcIjogXCJjY1wiLFxuICAgIFwiQysrMTQgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysxN1wiOiBcImNjXCIsXG4gICAgXCJDKysxNyAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwXCI6IFwiY2NcIixcbiAgICBcIkMrKzIwIChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrOThcIjogXCJjY1wiLFxuICAgIFwiQysrOTggKENsYW5nKVwiOiBcImNjXCIsXG4gICAgQzExOiBcImNcIixcbiAgICBcIkMxMSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEMyeDogXCJjXCIsXG4gICAgXCJDMnggKENsYW5nKVwiOiBcImNcIixcbiAgICBDOTA6IFwiY1wiLFxuICAgIFwiQzkwIChDbGFuZylcIjogXCJjXCIsXG4gICAgQzk5OiBcImNcIixcbiAgICBcIkM5OSAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIENvYm9sOiBcImNvYlwiLFxuICAgIENvYnJhOiBcImNvYnJhXCIsXG4gICAgQ29xOiBcInZcIixcbiAgICBDcnlzdGFsOiBcImNyXCIsXG4gICAgRDogXCJkXCIsXG4gICAgXCJEIChMREMpXCI6IFwiZFwiLFxuICAgIFwiRiNcIjogXCJmc1wiLFxuICAgIFwiRiMgKC5ORVQpXCI6IFwiZnNcIixcbiAgICBcIkYjIChNb25vKVwiOiBcImZzXCIsXG4gICAgRm9ydHJhbjogXCJmXCIsXG4gICAgRnJlZUJBU0lDOiBcImJhc1wiLFxuICAgIEdvOiBcImdvXCIsXG4gICAgXCJHbyAoZ2NjZ28pXCI6IFwiZ29cIixcbiAgICBHb2xmc2NyaXB0OiBcImdzXCIsXG4gICAgSGFza2VsbDogXCJoc1wiLFxuICAgIEhheGU6IFwicHlcIixcbiAgICBJTlRFUkNBTDogXCJpXCIsXG4gICAgSmF2YTogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDExXCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxNVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOFwiOiBcImphdmFcIixcbiAgICBcIkphdmEgOCAoT3BlbkpESylcIjogXCJqYXZhXCIsXG4gICAgS290bGluOiBcImt0XCIsXG4gICAgXCJLb3RsaW4gKEpWTSlcIjogXCJrdFwiLFxuICAgIFwiS290bGluIChOYXRpdmUpXCI6IFwia3RcIixcbiAgICBMT0xDT0RFOiBcImxvbFwiLFxuICAgIEx1YTogXCJsdWFcIixcbiAgICBNaW5lY3JhZnQ6IFwibWNhXCIsXG4gICAgTmVtZXJsZTogXCJuXCIsXG4gICAgTmltcm9kOiBcIm5pbVwiLFxuICAgIFwibm9kZS5qc1wiOiBcImpzXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiOiBcIm1cIixcbiAgICBcIk9iamVjdGl2ZS1DKytcIjogXCJtbVwiLFxuICAgIE9DYW1sOiBcIm1sXCIsXG4gICAgUGFzY2FsOiBcInBhc1wiLFxuICAgIFBlcmw6IFwicGxcIixcbiAgICBQSFA6IFwicGhwXCIsXG4gICAgUGlrZTogXCJwaWtlXCIsXG4gICAgUHlQeTogXCJweVwiLFxuICAgIFB5UHkyOiBcInB5XCIsXG4gICAgUHlQeTM6IFwicHlcIixcbiAgICBQeXRob246IFwicHlcIixcbiAgICBcIlB5dGhvbiAyXCI6IFwicHlcIixcbiAgICBcIlB5dGhvbiAzXCI6IFwicHlcIixcbiAgICBSaGlubzogXCJqc1wiLFxuICAgIFJ1Ynk6IFwicmJcIixcbiAgICBcIlJ1YnkgMS44XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMS45XCI6IFwicmJcIixcbiAgICBcIlJ1YnkgMlwiOiBcInJiXCIsXG4gICAgUnVzdDogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE1XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxOFwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMTlcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDIxXCI6IFwicnNcIixcbiAgICBTY2FsYTogXCJzY2FsYVwiLFxuICAgIFNjaGVtZTogXCJzY21cIixcbiAgICBzZWQ6IFwic2VkXCIsXG4gICAgU3dpZnQ6IFwic3dpZnRcIixcbiAgICBTeXN0ZW1WZXJpbG9nOiBcInN2XCIsXG4gICAgVGNsOiBcInRjbFwiLFxuICAgIFRleHQ6IFwidHh0XCIsXG4gICAgVHlwZVNjcmlwdDogXCJ0c1wiLFxuICAgIFwiVkIuTkVUIDIuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVkIuTkVUIDQuMCAoTW9ubylcIjogXCJ2YlwiLFxuICAgIFwiVmlzdWFsIEJhc2ljXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpYyAoLk5FVClcIjogXCJ2YlwiLFxuICAgIFdoaXRlc3BhY2U6IFwid3NcIixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7ICQsIGNvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyLCBjcmVhdGVUaW1lciwgZW5yb2xsRXZlbnQsIGdldFF1ZXJ5UGFyYW0sIGdldFRpbWVEaWZmLCBoYXNFbGVtZW50LCBpbnNlcnRIVE1MLCBMQU5HVUFHRVMsIFNPTFZFREFDX0xFVkVMLCB9IGZyb20gXCIuL3V0aWxzL2pzVXRpbHNcIjtcbmltcG9ydCBcIi4vQmFla2p1bi5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSwgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIH0gZnJvbSBcIi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7IGdldEJhZWtqdW5Qcm9ibGVtRGVzY3JpcHRpb24sIGdldEJhZWtqdW5Tb2x2ZWREYXRhLCBnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWMsIH0gZnJvbSBcIi4vQVBJL2dldFJlcUFQSVwiO1xuaW1wb3J0IHsgY29tbWl0Q29kZVRvUmVwbyB9IGZyb20gXCIuL0FQSS9wb3N0UmVxQVBJXCI7XG5jbGFzcyBCYWVranVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyBCYWVranVuUHJvYmxlbUlkOiBiYWVranVuUHJvYmxlbUlkIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiQmFla2p1blByb2JsZW1JZFwiKSk7XG4gICAgICAgICAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgICAgICAgICAgaWYgKCFyZXBvTmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvc2l0b3J56rCAIOyVhOyngSDshKTsoJXrkJjsp4DslYrslZjsirXri4jri6QuXCIpO1xuICAgICAgICAgICAgaWYgKCFiYWVranVuUHJvYmxlbUlkIHx8ICF0aGlzLmNoZWNrUHJvYmxlbUlkKGJhZWtqdW5Qcm9ibGVtSWQpKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgQmFla2p1blByb2JsZW1JZDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCJodHRwczovL3d3dy5hY21pY3BjLm5ldC9wcm9ibGVtL1wiKVsxXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgYmFla2p1blRpbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJiYWVranVuVGltZVwiKSk7XG4gICAgICAgICAgICBpZiAoIWJhZWtqdW5UaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgYmFla2p1blRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFNvbHZpbmcgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlzVGltZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJpc1RpbWVyXCIpKTtcbiAgICAgICAgICAgIGlmIChpc1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCYWVranVuVGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVhZHlUb1N1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3VibWl0RXZlbnQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRCYWVranVuVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc2V0VGltZXJUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN1Ym1pdEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gJChcIiNzdWJtaXRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgZW5yb2xsRXZlbnQoc3VibWl0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRlZFByb2JsZW06IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvc3VibWl0L1wiKVsxXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFRpbWVyID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyBiYWVranVuVGltZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcImJhZWtqdW5UaW1lXCIpKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjcmVhdGVUaW1lcihiYWVranVuVGltZSwgdGhpcy5yZVJlbmRlclRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGVja1N1Ym1pdGVkID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyBzdWJtaXRlZFByb2JsZW0gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJzdWJtaXRlZFByb2JsZW1cIikpO1xuICAgICAgICAgICAgaWYgKHN1Ym1pdGVkUHJvYmxlbSAmJiBzdWJtaXRlZFByb2JsZW0gPT09IGdldFF1ZXJ5UGFyYW0oXCJwcm9ibGVtX2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlKFwic3VibWl0ZWRQcm9ibGVtXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hlY2tTdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0TXNnID0gJChcIi5yZXN1bHQtdGV4dFwiKS5pbm5lclRleHQ7XG4gICAgICAgICAgICBpZiAocmVzdWx0TXNnID09PSBcIuunnuyVmOyKteuLiOuLpCEhXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjaGVja1N1Y2Nlc3NJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNUYWJsZSA9ICQoXCIjc3RhdHVzLXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdGVkSW5mbyA9IHN0YXR1c1RhYmxlLnJvd3NbMV07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RWxlbWVudCA9IHN1Ym1pdGVkSW5mby5jZWxsc1szXTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRWxlbWVudChcIi5yZXN1bHQtYWNcIiwgcmVzdWx0RWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja1N1Y2Nlc3NJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU3VjY2VzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGJhZWtqdW5UaW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiYmFla2p1blRpbWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvbklkID0gc3VibWl0ZWRJbmZvLmNlbGxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2JsZW1JZCA9IGdldFF1ZXJ5UGFyYW0oXCJwcm9ibGVtX2lkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlbnRUaW1lID0gc3VibWl0ZWRJbmZvLmNlbGxzWzVdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwZW50TWVtb3J5ID0gc3VibWl0ZWRJbmZvLmNlbGxzWzRdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlID0gJChcImFcIiwgc3VibWl0ZWRJbmZvLmNlbGxzWzZdKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb2x2aW5nVGltZSA9IE9iamVjdC52YWx1ZXMoZ2V0VGltZURpZmYoYmFla2p1blRpbWUsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSkuam9pbihcIiA6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZShcImJhZWtqdW5UaW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJTdWNjZXNzKHByb2JsZW1JZCwgc3VibWlzc2lvbklkLCBzb2x2aW5nVGltZSwgc3BlbnRUaW1lLCBzcGVudE1lbW9yeSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJGYWlsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZnRlclN1Y2Nlc3MgPSAocHJvYmxlbUlkLCBzdWJtaXNzaW9uSWQsIHNvbHZpbmdUaW1lLCBzcGVudFRpbWUsIHNwZW50TWVtb3J5LCBsYW5ndWFnZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHlpZWxkIGdldEJhZWtqdW5Tb2x2ZWREYXRhKHN1Ym1pc3Npb25JZCk7XG4gICAgICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpbnB1dCwgb3V0cHV0IH0gPSB5aWVsZCBnZXRCYWVranVuUHJvYmxlbURlc2NyaXB0aW9uKHByb2JsZW1JZCk7XG4gICAgICAgICAgICBjb25zdCB7IGFjY2VwdGVkVXNlckNvdW50LCBhdmVyYWdlVHJpZXMsIG9mZmljaWFsLCBsZXZlbCwgdGl0bGVLbywgdGFncywgfSA9IHlpZWxkIGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYyhwcm9ibGVtSWQpO1xuICAgICAgICAgICAgY29uc3QgeyBkaXJlY3RvcnksIG1lc3NhZ2UsIGZpbGVOYW1lLCByZWFkTWUgfSA9IHRoaXMuY3JlYXRlUmVhZG1lKHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRVc2VyQ291bnQsXG4gICAgICAgICAgICAgICAgYXZlcmFnZVRyaWVzLFxuICAgICAgICAgICAgICAgIG9mZmljaWFsLFxuICAgICAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgICAgIHRpdGxlS28sXG4gICAgICAgICAgICAgICAgcHJvYmxlbUlkLFxuICAgICAgICAgICAgICAgIHNvbHZpbmdUaW1lLFxuICAgICAgICAgICAgICAgIHNwZW50VGltZSxcbiAgICAgICAgICAgICAgICBzcGVudE1lbW9yeSxcbiAgICAgICAgICAgICAgICB0YWdzLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBjb21taXRDb2RlVG9SZXBvKHsgZGlyZWN0b3J5LCBtZXNzYWdlLCBmaWxlTmFtZSwgcmVhZE1lLCBjb2RlIH0pO1xuICAgICAgICAgICAgeWllbGQgdGhpcy5yZW5kZXJTdWNjZXNzTWFyaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZnRlckZhaWwgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckZhaWxNYXJrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JlYXRlUmVhZG1lID0gKHsgZGVzY3JpcHRpb24sIGlucHV0LCBvdXRwdXQsIGFjY2VwdGVkVXNlckNvdW50LCBhdmVyYWdlVHJpZXMsIG9mZmljaWFsLCBsZXZlbCwgdGl0bGVLbywgcHJvYmxlbUlkLCBzb2x2aW5nVGltZSwgc3BlbnRUaW1lLCBzcGVudE1lbW9yeSwgdGFncywgbGFuZ3VhZ2UsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGBCYWVranVuLyR7U09MVkVEQUNfTEVWRUxbbGV2ZWxdLnJlcGxhY2UoLyAuKi8sIFwiXCIpfS8ke3Byb2JsZW1JZH0u4oCFJHtjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhcih0aXRsZUtvKX1gO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBbJHtsZXZlbH1dICR7dGl0bGVLb30gLSBUaW1lOiAke3NwZW50VGltZX0gbXMsIE1lbW9yeTogJHtzcGVudE1lbW9yeX0gS0IsIFRpbWUgdG8gc29sdmU6ICR7c29sdmluZ1RpbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGFncy5tYXAoKHRhZykgPT4gdGFnLmRpc3BsYXlOYW1lc1swXS5uYW1lKS5qb2luKFwiLCBcIik7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGAke2NvbnZlcnRTaW5nbGVDaGFyVG9Eb3VibGVDaGFyKHRpdGxlS28pfS4ke0xBTkdVQUdFU1tsYW5ndWFnZV19YDtcbiAgICAgICAgICAgIC8vIHByZXR0aWVyIC0gaWdub3JlIC0gc3RhcnQ7XG4gICAgICAgICAgICBjb25zdCByZWFkTWUgPSBgIyBbJHtsZXZlbH1dICR7dGl0bGVLb30gLSAke3Byb2JsZW1JZH0gXFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYFvrrLjsoJwg66eB7YGsXShodHRwczovL3d3dy5hY21pY3BjLm5ldC9wcm9ibGVtLyR7cHJvYmxlbUlkfSkgXFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYCMjIyDshLHriqUg7JqU7JW9XFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYOuplOuqqOumrDogJHtzcGVudE1lbW9yeX0gS0IsIGAgK1xuICAgICAgICAgICAgICAgIGDsi5zqsIQ6ICR7c3BlbnRUaW1lfSBtc1xcblxcbmAgK1xuICAgICAgICAgICAgICAgIGDtkoDsnbTsi5zqsIQ6ICR7c29sdmluZ1RpbWV9XFxuXFxuYCArXG4gICAgICAgICAgICAgICAgYCMjIyDrtoTrpZhcXG5cXG5gICtcbiAgICAgICAgICAgICAgICBgJHtjYXRlZ29yeX1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAoISFkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICA/IFwiXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyDrrLjsoJwg7ISk66qFXFxuXFxuJHtkZXNjcmlwdGlvbn1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAjIyMg7J6F66ClIFxcblxcbiAke2lucHV0fVxcblxcbmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCMjIyDstpzroKUgXFxuXFxuICR7b3V0cHV0fVxcblxcbmBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRpcmVjdG9yeSwgbWVzc2FnZSwgZmlsZU5hbWUsIHJlYWRNZSB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFNvbHZlZERhdGEgPSAoc3VibWlzc2lvbklkKSA9PiB7IH07XG4gICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0RWxlbWVudCA9ICQoXCIucmVzdWx0XCIpO1xuICAgICAgICAgICAgcmVzdWx0RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctc29sdmVcIj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrUHJvYmxlbUlkID0gKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdGVkTGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KC89fCZ8XFwvLyk7XG4gICAgICAgICAgICBpZiAoc3BsaXRlZExpbmsuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVSZW5kZXJUaW1lID0gKHsgaCwgbSwgcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lRWxlbWVudCA9ICQoXCIudGltZXJcIik7XG4gICAgICAgICAgICB0aW1lRWxlbWVudC5pbm5lclRleHQgPSBgVGltZXI6ICR7aH06JHttfToke3N9IGA7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0VGltZXJUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiLnBhZ2UtaGVhZGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBcImFmdGVyYmVnaW5cIjtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInRpbWVyLWNvbnRhaW5lclwiID5cbiAgICA8cCBjbGFzcz1cInRpbWVyXCI+PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgICAgICBpbnNlcnRIVE1MKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyRmFpbE1hcmsgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXNFbGVtZW50ID0gJChcIi5sb2FkaW5nLXNvbHZlXCIpO1xuICAgICAgICAgICAgc3RhdHVzRWxlbWVudC5jbGFzc05hbWUgPSBcImZhaWwtc29sdmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdWNjZXNzTWFyayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0VsZW1lbnQgPSAkKFwiLmxvYWRpbmctc29sdmVcIik7XG4gICAgICAgICAgICBzdGF0dXNFbGVtZW50LmNsYXNzTmFtZSA9IFwic3VjY2Vzcy1zb2x2ZVwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5jaGVja1N1Ym1pdGVkKCk7XG4gICAgfVxufVxuY29uc3QgYmFla2p1biA9IG5ldyBCYWVranVuKCk7XG5pZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvcHJvYmxlbS9cIikpIHtcbiAgICBiYWVranVuLnN0YXJ0U29sdmluZygpO1xufVxuZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIvc3VibWl0L1wiKSkge1xuICAgIGJhZWtqdW4ucmVhZHlUb1N1Ym1pdCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9