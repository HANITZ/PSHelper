/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    BaekjunProblemId: "BaekjunProblemId",
    BaekjunStartTime: "BaekjunStartTime",
    Repo: "Repo",
    Timer: "Timer",
    Upload: "Upload",
    SubmissionId: "SubmissionId",
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
    ? `# [${level}] ${title} - ${problemId} \n\n` +
        `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n` +
        `### 성능 요약\n\n` +
        `평균 소요 메모리: ${spentMemory} KB, ` +
        `평균 소요 시간: ${spentTime} ms\n\n` +
        `풀이시간: ${solvingTime}\n\n` +
        `### 분류\n\n` +
        `${category}\n\n` +
        `### 문제 설명\n\n${description}\n\n`
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils */ "./src/utils/index.ts");
/* harmony import */ var _backgroundAPI_getReqBackgroundAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundAPI/getReqBackgroundAPI */ "./src/background/backgroundAPI/getReqBackgroundAPI.ts");


const messageHandler = (req, sender, sendResponse) => {
    // switch (req.action) {
    //   case "PSHELPER_TOKEN":
    //     setChromeLocalStorage({
    //       GITHUB_TOKEN: req.token,
    //       USER: req.user.login,
    //     }).then(sendResponse({ success: true }));
    //     sendResponse({ success: true });
    //     break;
    //   case "baekjun":
    //     break;
    //   case "repoName":
    //     break;
    // }
    if (req.action === "PSHELPER_TOKEN") {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
            GITHUB_TOKEN: req.token,
            USER: req.user.login,
        }).then(sendResponse({ success: true }));
        sendResponse({ success: true });
    }
    else if (req.action === "baekjun" &&
        req.task === "getProblemInfoBySolvedAc") {
        (0,_backgroundAPI_getReqBackgroundAPI__WEBPACK_IMPORTED_MODULE_1__.getProblemInfoBySolvedAcAPI)(req.problemId).then((res) => sendResponse(res));
        return true;
    }
    else if (req.action === "repoName") {
        if (req.method === "post") {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
                repoName: req.repoName,
            });
        }
    }
    else if (req.action === "Timer" && req.method === "post") {
        console.log(req);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({ Timer: req.isActive });
    }
    else if (req.action === "Upload" && req.method === "post") {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({ Upload: req.isActive });
    }
};
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getChromeMessage)(messageHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1Asb0VBQW9FLFVBQVU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQk07QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYyxTQUFJLElBQUksU0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUJBQXlCO0FBQ3pCLDRDQUE0QztBQUM1QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLHNEQUFzRDtBQUN0RCxDQUFDO0FBQ007QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQwQjtBQUNFO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ087QUFDUCw2REFBNkQsRUFBRTtBQUMvRCwrQ0FBK0MsRUFBRTtBQUNqRCxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZSxFQUFFO0FBQ3pEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixxQkFBcUIsU0FBUztBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNPLHNCQUFzQix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGFBQWE7QUFDYixjQUFjO0FBQ2QsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2YsY0FBYztBQUNkLGVBQWU7QUFDZixjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZjtBQUNBLGdGQUFnRjtBQUNoRjtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx5QkFBeUIsc0ZBQXNGO0FBQ3RILFlBQVksTUFBTSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQzVDLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMscUJBQXFCLFdBQVc7QUFDaEMsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQSxXQUFXLFNBQVM7QUFDcEIsd0JBQXdCLFlBQVk7QUFDcEMsV0FBVyxPQUFPLElBQUksV0FBVztBQUNqQyxtREFBbUQsVUFBVTtBQUM3RDtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHFCQUFxQixXQUFXO0FBQ2hDLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLHdCQUF3QixZQUFZO0FBQzdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0VkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFDaUI7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0IsZUFBZTtBQUNqRCwwQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQXFCO0FBQzdCO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQixlQUFlO0FBQzlDLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0ZBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBcUI7QUFDakM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFxQixHQUFHLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0EsUUFBUSw2REFBcUIsR0FBRyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBLHdEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZEFQSS9nZXRSZXFCYWNrZ3JvdW5kQVBJLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9jaHJvbWVVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9qc1V0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBY0FQSSA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9zb2x2ZWQuYWMvYXBpL3YzL3Byb2JsZW0vc2hvdz9wcm9ibGVtSWQ9JHtwcm9ibGVtSWR9YDtcbiAgICByZXR1cm4geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBlcnJvck1zZyA9IHtcbiAgICBOb3RGb3VuZFJlcG86IFwiUmVwb3NpdG9yeeqwgCDslYTsp4Eg7ISk7KCV65CY7KeAIOyViuyVmOyKteuLiOuLpC5cIixcbn07XG5leHBvcnQgY29uc3QgY2hyb21lU3RvcmFnZUlkID0ge1xuICAgIEJhZWtqdW5Qcm9ibGVtSWQ6IFwiQmFla2p1blByb2JsZW1JZFwiLFxuICAgIEJhZWtqdW5TdGFydFRpbWU6IFwiQmFla2p1blN0YXJ0VGltZVwiLFxuICAgIFJlcG86IFwiUmVwb1wiLFxuICAgIFRpbWVyOiBcIlRpbWVyXCIsXG4gICAgVXBsb2FkOiBcIlVwbG9hZFwiLFxuICAgIFN1Ym1pc3Npb25JZDogXCJTdWJtaXNzaW9uSWRcIixcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChfYSwgZm4pID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9ICgpID0+IHsgfTsgfVxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVTeW5jU3RvcmFnZSA9IChrZXksIGZuKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldLCBmbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUNocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoa2V5KTtcbn07XG5leHBvcnQgY29uc3Qgc2VuZENocm9tZU1lc3NhZ2UgPSAoX2EsIGNhbGxiYWNrRm4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChjYWxsYmFja0ZuKSB7XG4gICAgICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNhbGxiYWNrRm4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldENocm9tZU1lc3NhZ2UgPSAoZm4pID0+IHtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZm4pO1xufTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2pzVXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY2hyb21lVXRpbHNcIjtcbiIsImV4cG9ydCBjb25zdCAkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCAkJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnRzKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudHPrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRFbEJ5SWQgPSAodGFyZ2V0SWQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldElkfWlk66W8IOqwgOynhCDsl5jrpqzrqLztirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgZW5yb2xsRXZlbnQgPSAoZWwsIHR5cGUsIGZuLCBvcHRpb25zKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgb3B0aW9ucyk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCBiNjRFbmNvZGVVbmljb2RlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOT1BLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKGAweCR7cH1gKSk7XG4gICAgfSkpO1xufTtcbmV4cG9ydCBjb25zdCBjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhciA9ICh0ZXh0KSA9PiB7XG4gICAgLy8gc2luZ2xlQ2hhciB0byBkb3VibGVDaGFyIG1hcHBpbmdcbiAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgIFwiIVwiOiBcIu+8gVwiLFxuICAgICAgICBcIiVcIjogXCLvvIVcIixcbiAgICAgICAgXCImXCI6IFwi77yGXCIsXG4gICAgICAgIFwiKFwiOiBcIu+8iFwiLFxuICAgICAgICBcIilcIjogXCLvvIlcIixcbiAgICAgICAgXCIqXCI6IFwi77yKXCIsXG4gICAgICAgIFwiK1wiOiBcIu+8i1wiLFxuICAgICAgICBcIixcIjogXCLvvIxcIixcbiAgICAgICAgXCItXCI6IFwi77yNXCIsXG4gICAgICAgIFwiLlwiOiBcIu+8jlwiLFxuICAgICAgICBcIi9cIjogXCLvvI9cIixcbiAgICAgICAgXCI6XCI6IFwi77yaXCIsXG4gICAgICAgIFwiO1wiOiBcIu+8m1wiLFxuICAgICAgICBcIjxcIjogXCLvvJxcIixcbiAgICAgICAgXCI9XCI6IFwi77ydXCIsXG4gICAgICAgIFwiPlwiOiBcIu+8nlwiLFxuICAgICAgICBcIj9cIjogXCLvvJ9cIixcbiAgICAgICAgXCJAXCI6IFwi77ygXCIsXG4gICAgICAgIFwiW1wiOiBcIu+8u1wiLFxuICAgICAgICBcIlxcXFxcIjogXCLvvLxcIixcbiAgICAgICAgXCJdXCI6IFwi77y9XCIsXG4gICAgICAgIFwiXlwiOiBcIu+8vlwiLFxuICAgICAgICBfOiBcIu+8v1wiLFxuICAgICAgICBcImBcIjogXCLvvYBcIixcbiAgICAgICAgXCJ7XCI6IFwi772bXCIsXG4gICAgICAgIFwifFwiOiBcIu+9nFwiLFxuICAgICAgICBcIn1cIjogXCLvvZ1cIixcbiAgICAgICAgXCJ+XCI6IFwi772eXCIsXG4gICAgICAgIFwiIFwiOiBcIuKAhVwiLCAvLyDqs7XrsLHrp4wg7KCE6rCB66y47J6Q6rCAIOyVhOuLjCBGT1VSLVBFUi1FTSBTUEFDReuhnCDrs4DtmZhcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1shJSYoKSorLFxcLS4vOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+IF0vZywgKGspID0+IG1hcFtrXSk7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWVUaW1lciA9IChjYWxsYmFja0ZuKSA9PiB7XG4gICAgbGV0IFtzZWNzLCBtaW5zLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlY3MrKztcbiAgICAgICAgaWYgKHNlY3MgPT0gNjApIHtcbiAgICAgICAgICAgIHNlY3MgPSAwO1xuICAgICAgICAgICAgbWlucysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW5zID09IDYwKSB7XG4gICAgICAgICAgICBtaW5zID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMudG9TdHJpbmcoKSA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5zIDwgMTAgPyBcIjBcIiArIG1pbnMudG9TdHJpbmcoKSA6IG1pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcyA9IHNlY3MgPCAxMCA/IFwiMFwiICsgc2Vjcy50b1N0cmluZygpIDogc2Vjcy50b1N0cmluZygpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyID0gKHN0YXJ0VGltZSwgY2FsbGJhY2tGbikgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHsgaCwgbSwgcyB9ID0gZ2V0VGltZURpZmYoc3RhcnRUaW1lLCBub3dUaW1lKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBpbnNlcnRIVE1MID0gKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSkgPT4ge1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uLCBodG1sKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0VGltZURpZmYgPSAoc3RhcnRUaW1lLCBub3dUaW1lKSA9PiB7XG4gICAgbGV0IFtob3VyLCBtaW4sIHNlY10gPSBbMCwgMCwgMF07XG4gICAgbGV0IHRpbWVEaWZmU2VjID0gTWF0aC5mbG9vcigobm93VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgICBpZiAodGltZURpZmZTZWMgPiAzNjAwKSB7XG4gICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gMzYwMCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSAzNjAwO1xuICAgIH1cbiAgICBpZiAodGltZURpZmZTZWMgPiA2MCkge1xuICAgICAgICBtaW4gPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gNjApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgNjA7XG4gICAgfVxuICAgIHNlYyA9IHRpbWVEaWZmU2VjO1xuICAgIGNvbnN0IGggPSBob3VyIDwgMTAgPyBcIjBcIiArIGhvdXIudG9TdHJpbmcoKSA6IGhvdXIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtID0gbWluIDwgMTAgPyBcIjBcIiArIG1pbi50b1N0cmluZygpIDogbWluLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcyA9IHNlYyA8IDEwID8gXCIwXCIgKyBzZWMudG9TdHJpbmcoKSA6IHNlYy50b1N0cmluZygpO1xuICAgIHJldHVybiB7IGgsIG0sIHMgfTtcbn07XG5leHBvcnQgY29uc3QgaGFzRWxlbWVudCA9ICh0YXJnZXQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBodG1sRW50aXR5RGVjb2RlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCB1bmVzY2FwZWQgPSB7XG4gICAgICAgIFwiJmFtcDtcIjogXCImXCIsXG4gICAgICAgIFwiJiMzODtcIjogXCImXCIsXG4gICAgICAgIFwiJmx0O1wiOiBcIjxcIixcbiAgICAgICAgXCImIzYwO1wiOiBcIjxcIixcbiAgICAgICAgXCImZ3Q7XCI6IFwiPlwiLFxuICAgICAgICBcIiYjNjI7XCI6IFwiPlwiLFxuICAgICAgICBcIiZhcG9zO1wiOiBcIidcIixcbiAgICAgICAgXCImIzM5O1wiOiBcIidcIixcbiAgICAgICAgXCImcXVvdDtcIjogJ1wiJyxcbiAgICAgICAgXCImIzM0O1wiOiAnXCInLFxuICAgICAgICBcIiZuYnNwO1wiOiBcIiBcIixcbiAgICAgICAgXCImIzE2MDtcIjogXCIgXCIsXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MCk7L2csICh3b3JkKSA9PiB1bmVzY2FwZWRbd29yZF0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRRdWVyeVBhcmFtID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChxdWVyeSk7XG4gICAgaWYgKCFwYXJhbSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgRm91bmQgUXVlcnkgJHtxdWVyeX1gKTtcbiAgICByZXR1cm4gcGFyYW07XG59O1xuZXhwb3J0IGNvbnN0IFNPTFZFREFDX0xFVkVMID0ge1xuICAgIDA6IFwiVW5yYXRlZFwiLFxuICAgIDE6IFwiQnJvbnplIFZcIixcbiAgICAyOiBcIkJyb256ZSBJVlwiLFxuICAgIDM6IFwiQnJvbnplIElJSVwiLFxuICAgIDQ6IFwiQnJvbnplIElJXCIsXG4gICAgNTogXCJCcm9uemUgSVwiLFxuICAgIDY6IFwiU2lsdmVyIFZcIixcbiAgICA3OiBcIlNpbHZlciBJVlwiLFxuICAgIDg6IFwiU2lsdmVyIElJSVwiLFxuICAgIDk6IFwiU2lsdmVyIElJXCIsXG4gICAgMTA6IFwiU2lsdmVyIElcIixcbiAgICAxMTogXCJHb2xkIFZcIixcbiAgICAxMjogXCJHb2xkIElWXCIsXG4gICAgMTM6IFwiR29sZCBJSUlcIixcbiAgICAxNDogXCJHb2xkIElJXCIsXG4gICAgMTU6IFwiR29sZCBJXCIsXG4gICAgMTY6IFwiUGxhdGludW0gVlwiLFxuICAgIDE3OiBcIlBsYXRpbnVtIElWXCIsXG4gICAgMTg6IFwiUGxhdGludW0gSUlJXCIsXG4gICAgMTk6IFwiUGxhdGludW0gSUlcIixcbiAgICAyMDogXCJQbGF0aW51bSBJXCIsXG4gICAgMjE6IFwiRGlhbW9uZCBWXCIsXG4gICAgMjI6IFwiRGlhbW9uZCBJVlwiLFxuICAgIDIzOiBcIkRpYW1vbmQgSUlJXCIsXG4gICAgMjQ6IFwiRGlhbW9uZCBJSVwiLFxuICAgIDI1OiBcIkRpYW1vbmQgSVwiLFxuICAgIDI2OiBcIlJ1YnkgVlwiLFxuICAgIDI3OiBcIlJ1YnkgSVZcIixcbiAgICAyODogXCJSdWJ5IElJSVwiLFxuICAgIDI5OiBcIlJ1YnkgSUlcIixcbiAgICAzMDogXCJSdWJ5IElcIixcbiAgICAzMTogXCJNYXN0ZXJcIixcbn07XG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0ge1xuICAgIOyVhO2drDogXCJhaGV1aVwiLFxuICAgIOyXhOykgOyLnTogXCJ1bW1cIixcbiAgICBBZGE6IFwiYWRhXCIsXG4gICAgXCJBbGdvbCA2OFwiOiBcImFcIixcbiAgICBBUEVDT0RFOiBcImFwZVwiLFxuICAgIEFzc2VtYmx5OiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICgzMmJpdClcIjogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoNjRiaXQpXCI6IFwib1wiLFxuICAgIGF3azogXCJhd2tcIixcbiAgICBCYXNoOiBcInNoXCIsXG4gICAgYmM6IFwiYmNcIixcbiAgICBCZWZ1bmdlOiBcImJmXCIsXG4gICAgQm9vOiBcImJvb1wiLFxuICAgIFwiQnJhaW5mKiprXCI6IFwiYmZcIixcbiAgICBDOiBcImNcIixcbiAgICBcIkMjXCI6IFwiY3NcIixcbiAgICBcIkMjIDMuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgNi4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA5LjAgKC5ORVQpXCI6IFwiY3NcIixcbiAgICBcIkMrK1wiOiBcImNjXCIsXG4gICAgXCJDKysxMVwiOiBcImNjXCIsXG4gICAgXCJDKysxMSAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE0XCI6IFwiY2NcIixcbiAgICBcIkMrKzE0IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTdcIjogXCJjY1wiLFxuICAgIFwiQysrMTcgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysyMFwiOiBcImNjXCIsXG4gICAgXCJDKysyMCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzk4XCI6IFwiY2NcIixcbiAgICBcIkMrKzk4IChDbGFuZylcIjogXCJjY1wiLFxuICAgIEMxMTogXCJjXCIsXG4gICAgXCJDMTEgKENsYW5nKVwiOiBcImNcIixcbiAgICBDMng6IFwiY1wiLFxuICAgIFwiQzJ4IChDbGFuZylcIjogXCJjXCIsXG4gICAgQzkwOiBcImNcIixcbiAgICBcIkM5MCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5OTogXCJjXCIsXG4gICAgXCJDOTkgKENsYW5nKVwiOiBcImNcIixcbiAgICBDb2JvbDogXCJjb2JcIixcbiAgICBDb2JyYTogXCJjb2JyYVwiLFxuICAgIENvcTogXCJ2XCIsXG4gICAgQ3J5c3RhbDogXCJjclwiLFxuICAgIEQ6IFwiZFwiLFxuICAgIFwiRCAoTERDKVwiOiBcImRcIixcbiAgICBcIkYjXCI6IFwiZnNcIixcbiAgICBcIkYjICguTkVUKVwiOiBcImZzXCIsXG4gICAgXCJGIyAoTW9ubylcIjogXCJmc1wiLFxuICAgIEZvcnRyYW46IFwiZlwiLFxuICAgIEZyZWVCQVNJQzogXCJiYXNcIixcbiAgICBHbzogXCJnb1wiLFxuICAgIFwiR28gKGdjY2dvKVwiOiBcImdvXCIsXG4gICAgR29sZnNjcmlwdDogXCJnc1wiLFxuICAgIEhhc2tlbGw6IFwiaHNcIixcbiAgICBIYXhlOiBcInB5XCIsXG4gICAgSU5URVJDQUw6IFwiaVwiLFxuICAgIEphdmE6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxMVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgMTVcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDhcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDggKE9wZW5KREspXCI6IFwiamF2YVwiLFxuICAgIEtvdGxpbjogXCJrdFwiLFxuICAgIFwiS290bGluIChKVk0pXCI6IFwia3RcIixcbiAgICBcIktvdGxpbiAoTmF0aXZlKVwiOiBcImt0XCIsXG4gICAgTE9MQ09ERTogXCJsb2xcIixcbiAgICBMdWE6IFwibHVhXCIsXG4gICAgTWluZWNyYWZ0OiBcIm1jYVwiLFxuICAgIE5lbWVybGU6IFwiblwiLFxuICAgIE5pbXJvZDogXCJuaW1cIixcbiAgICBcIm5vZGUuanNcIjogXCJqc1wiLFxuICAgIFwiT2JqZWN0aXZlLUNcIjogXCJtXCIsXG4gICAgXCJPYmplY3RpdmUtQysrXCI6IFwibW1cIixcbiAgICBPQ2FtbDogXCJtbFwiLFxuICAgIFBhc2NhbDogXCJwYXNcIixcbiAgICBQZXJsOiBcInBsXCIsXG4gICAgUEhQOiBcInBocFwiLFxuICAgIFBpa2U6IFwicGlrZVwiLFxuICAgIFB5UHk6IFwicHlcIixcbiAgICBQeVB5MjogXCJweVwiLFxuICAgIFB5UHkzOiBcInB5XCIsXG4gICAgUHl0aG9uOiBcInB5XCIsXG4gICAgXCJQeXRob24gMlwiOiBcInB5XCIsXG4gICAgXCJQeXRob24gM1wiOiBcInB5XCIsXG4gICAgUmhpbm86IFwianNcIixcbiAgICBSdWJ5OiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOFwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOVwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDJcIjogXCJyYlwiLFxuICAgIFJ1c3Q6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxNVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMThcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE5XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAyMVwiOiBcInJzXCIsXG4gICAgU2NhbGE6IFwic2NhbGFcIixcbiAgICBTY2hlbWU6IFwic2NtXCIsXG4gICAgc2VkOiBcInNlZFwiLFxuICAgIFN3aWZ0OiBcInN3aWZ0XCIsXG4gICAgU3lzdGVtVmVyaWxvZzogXCJzdlwiLFxuICAgIFRjbDogXCJ0Y2xcIixcbiAgICBUZXh0OiBcInR4dFwiLFxuICAgIFR5cGVTY3JpcHQ6IFwidHNcIixcbiAgICBcIlZCLk5FVCAyLjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZCLk5FVCA0LjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpY1wiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWMgKC5ORVQpXCI6IFwidmJcIixcbiAgICBXaGl0ZXNwYWNlOiBcIndzXCIsXG59O1xuZXhwb3J0IGNvbnN0IGdldFJlYWRtZVRleHQgPSAoeyBsZXZlbCwgdGl0bGUsIHNvbHZpbmdUaW1lLCBwcm9ibGVtSWQsIHNwZW50TWVtb3J5LCBzcGVudFRpbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgfSkgPT4gbGV2ZWxcbiAgICA/IGAjIFske2xldmVsfV0gJHt0aXRsZX0gLSAke3Byb2JsZW1JZH0gXFxuXFxuYCArXG4gICAgICAgIGBb66y47KCcIOunge2BrF0oaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH0pIFxcblxcbmAgK1xuICAgICAgICBgIyMjIOyEseuKpSDsmpTslb1cXG5cXG5gICtcbiAgICAgICAgYO2Pieq3oCDshozsmpQg66mU66qo66asOiAke3NwZW50TWVtb3J5fSBLQiwgYCArXG4gICAgICAgIGDtj4nqt6Ag7IaM7JqUIOyLnOqwhDogJHtzcGVudFRpbWV9IG1zXFxuXFxuYCArXG4gICAgICAgIGDtkoDsnbTsi5zqsIQ6ICR7c29sdmluZ1RpbWV9XFxuXFxuYCArXG4gICAgICAgIGAjIyMg67aE66WYXFxuXFxuYCArXG4gICAgICAgIGAke2NhdGVnb3J5fVxcblxcbmAgK1xuICAgICAgICBgIyMjIOusuOygnCDshKTrqoVcXG5cXG4ke2Rlc2NyaXB0aW9ufVxcblxcbmBcbiAgICA6IGAjICR7dGl0bGV9IC0gJHtwcm9ibGVtSWR9IFxcblxcbmAgK1xuICAgICAgICBgW+usuOygnCDrp4HtgaxdKGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHtwcm9ibGVtSWR9KSBcXG5cXG5gICtcbiAgICAgICAgYCMjIyDshLHriqUg7JqU7JW9XFxuXFxuYCArXG4gICAgICAgIGDtj4nqt6Ag7IaM7JqUIOuplOuqqOumrDogJHtzcGVudE1lbW9yeX0gS0IsIGAgK1xuICAgICAgICBg7Y+J6regIOyGjOyalCDsi5zqsIQ6ICR7c3BlbnRUaW1lfSBtc1xcblxcbmAgK1xuICAgICAgICBg7ZKA7J207Iuc6rCEOiAke3NvbHZpbmdUaW1lfVxcblxcbmAgK1xuICAgICAgICBgIyMjIOu2hOulmFxcblxcbmAgK1xuICAgICAgICBgJHtjYXRlZ29yeX1cXG5cXG5gICtcbiAgICAgICAgYCMjIyDrrLjsoJwg7ISk66qFXFxuXFxuJHtkZXNjcmlwdGlvbn1cXG5cXG5gO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBuZXdOb2RlID0gQXJyYXkuZnJvbShuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMudGVtcGxhdGUoKSwgXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbik7XG4gICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlWzBdLCBub2RlLm5leHRTaWJsaW5nKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IG5vZGVDbGFzcyA9IG5vZGUuY2xhc3NMaXN0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobm9kZUNsYXNzKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBub2RlQ2xhc3M7XG4gICAgfVxuICAgIG5vZGUucmVtb3ZlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lVHdvKGEsIGIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0Q2hyb21lTWVzc2FnZSwgc2V0Q2hyb21lTG9jYWxTdG9yYWdlIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJIH0gZnJvbSBcIi4vYmFja2dyb3VuZEFQSS9nZXRSZXFCYWNrZ3JvdW5kQVBJXCI7XG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IChyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gc3dpdGNoIChyZXEuYWN0aW9uKSB7XG4gICAgLy8gICBjYXNlIFwiUFNIRUxQRVJfVE9LRU5cIjpcbiAgICAvLyAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHtcbiAgICAvLyAgICAgICBHSVRIVUJfVE9LRU46IHJlcS50b2tlbixcbiAgICAvLyAgICAgICBVU0VSOiByZXEudXNlci5sb2dpbixcbiAgICAvLyAgICAgfSkudGhlbihzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pKTtcbiAgICAvLyAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gICBjYXNlIFwiYmFla2p1blwiOlxuICAgIC8vICAgICBicmVhaztcbiAgICAvLyAgIGNhc2UgXCJyZXBvTmFtZVwiOlxuICAgIC8vICAgICBicmVhaztcbiAgICAvLyB9XG4gICAgaWYgKHJlcS5hY3Rpb24gPT09IFwiUFNIRUxQRVJfVE9LRU5cIikge1xuICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgR0lUSFVCX1RPS0VOOiByZXEudG9rZW4sXG4gICAgICAgICAgICBVU0VSOiByZXEudXNlci5sb2dpbixcbiAgICAgICAgfSkudGhlbihzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJiYWVranVuXCIgJiZcbiAgICAgICAgcmVxLnRhc2sgPT09IFwiZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjXCIpIHtcbiAgICAgICAgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJKHJlcS5wcm9ibGVtSWQpLnRoZW4oKHJlcykgPT4gc2VuZFJlc3BvbnNlKHJlcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJyZXBvTmFtZVwiKSB7XG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcInBvc3RcIikge1xuICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICByZXBvTmFtZTogcmVxLnJlcG9OYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJUaW1lclwiICYmIHJlcS5tZXRob2QgPT09IFwicG9zdFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7IFRpbWVyOiByZXEuaXNBY3RpdmUgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlcS5hY3Rpb24gPT09IFwiVXBsb2FkXCIgJiYgcmVxLm1ldGhvZCA9PT0gXCJwb3N0XCIpIHtcbiAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgVXBsb2FkOiByZXEuaXNBY3RpdmUgfSk7XG4gICAgfVxufTtcbmdldENocm9tZU1lc3NhZ2UobWVzc2FnZUhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9