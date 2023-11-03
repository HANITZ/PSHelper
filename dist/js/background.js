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

/***/ "./src/utils/CloseButton.ts":
/*!**********************************!*\
  !*** ./src/utils/CloseButton.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseButton: () => (/* binding */ CloseButton)
/* harmony export */ });
const CloseButton = () => `<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>`;


/***/ }),

/***/ "./src/utils/Constants.ts":
/*!********************************!*\
  !*** ./src/utils/Constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Language: () => (/* binding */ Language),
/* harmony export */   chromeStorageId: () => (/* binding */ chromeStorageId),
/* harmony export */   errorMsg: () => (/* binding */ errorMsg),
/* harmony export */   errorMsh: () => (/* binding */ errorMsh)
/* harmony export */ });
const errorMsg = {
    NotFoundRepo: "Repository가 아직 설정되지 않았습니다.",
};
const chromeStorageId = {
    BaekjunProblemId: "BaekjunProblemId",
    BaekjunStartTime: "BaekjunStartTime",
    Programmers: "Programmers",
    ProgrammersProblemInfo: "ProgrammersProblemInfo",
    ProgrammersStartTime: "ProgrammersStartTime",
    Repo: "Repo",
    Timer: "Timer",
    Upload: "Upload",
    SubmissionId: "SubmissionId",
};
const errorMsh = {
    NotFoundRepo: "[PSHelper]Repository가 설정되지 않았습니다.",
};
const Language = {
    "Python 3": "28",
    PyPy3: "73",
    "C++17": "84",
    "Java 11": "93",
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
    if (typeof key === "string") {
        return chrome.storage.local.get([key]);
    }
    return chrome.storage.local.get([...key]);
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
/* harmony export */   CloseButton: () => (/* reexport safe */ _CloseButton__WEBPACK_IMPORTED_MODULE_3__.CloseButton),
/* harmony export */   LANGUAGES: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES),
/* harmony export */   Language: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.Language),
/* harmony export */   SOLVEDAC_LEVEL: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.SOLVEDAC_LEVEL),
/* harmony export */   abc: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.abc),
/* harmony export */   addComponents: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.addComponents),
/* harmony export */   b64EncodeUnicode: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.b64EncodeUnicode),
/* harmony export */   chromeStorageId: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.chromeStorageId),
/* harmony export */   convertSingleCharToDoubleChar: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.convertSingleCharToDoubleChar),
/* harmony export */   createTimer: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.createTimer),
/* harmony export */   createeTimer: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.createeTimer),
/* harmony export */   deleteChromeLocalStorage: () => (/* reexport safe */ _chromeUtils__WEBPACK_IMPORTED_MODULE_2__.deleteChromeLocalStorage),
/* harmony export */   enrollEvent: () => (/* reexport safe */ _jsUtils__WEBPACK_IMPORTED_MODULE_0__.enrollEvent),
/* harmony export */   errorMsg: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.errorMsg),
/* harmony export */   errorMsh: () => (/* reexport safe */ _Constants__WEBPACK_IMPORTED_MODULE_1__.errorMsh),
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
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CloseButton */ "./src/utils/CloseButton.ts");






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
/* harmony export */   abc: () => (/* binding */ abc),
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
let abc = {
    current: null,
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
    if (req.action === "PSHELPER_TOKEN") {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setChromeLocalStorage)({
            GITHUB_TOKEN: req.token,
            USER: req.user.login,
            AVATARURL: req.user.avatar_url,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1Asb0VBQW9FLFVBQVU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSxzREFBc0Q7QUFDdEQsQ0FBQztBQUNNO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQwQjtBQUNFO0FBQ0U7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ087QUFDUCw2REFBNkQsRUFBRTtBQUMvRCwrQ0FBK0MsRUFBRTtBQUNqRCxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZSxFQUFFO0FBQ3pEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUIsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixxQkFBcUIsU0FBUztBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNPLHNCQUFzQix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGFBQWE7QUFDYixjQUFjO0FBQ2QsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2YsY0FBYztBQUNkLGVBQWU7QUFDZixjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZjtBQUNBLGdGQUFnRjtBQUNoRjtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx5QkFBeUIsc0ZBQXNGO0FBQ3RILFlBQVksTUFBTSxJQUFJLE9BQU8sSUFBSSxXQUFXO0FBQzVDLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMscUJBQXFCLFdBQVc7QUFDaEMsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQSxXQUFXLFNBQVM7QUFDcEIsd0JBQXdCLFlBQVk7QUFDcEMsV0FBVyxPQUFPLElBQUksV0FBVztBQUNqQyxtREFBbUQsVUFBVTtBQUM3RDtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHFCQUFxQixXQUFXO0FBQ2hDLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLHdCQUF3QixZQUFZO0FBQzdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUN6VkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0U7QUFDZ0I7QUFDbEY7QUFDQTtBQUNBLFFBQVEsNkRBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCLGVBQWU7QUFDOUMsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRkFBMkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFxQjtBQUNqQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQXFCLEdBQUcscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQSxRQUFRLDZEQUFxQixHQUFHLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0Esd0RBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kQVBJL2dldFJlcUJhY2tncm91bmRBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvQ2xvc2VCdXR0b24udHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2Nocm9tZVV0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL3V0aWxzL2pzVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJID0gKHByb2JsZW1JZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL3NvbHZlZC5hYy9hcGkvdjMvcHJvYmxlbS9zaG93P3Byb2JsZW1JZD0ke3Byb2JsZW1JZH1gO1xuICAgIHJldHVybiB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IENsb3NlQnV0dG9uID0gKCkgPT4gYDxzdmcgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cG9seWdvbiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgcG9pbnRzPVwiOCA5LjQxNCAzLjcwNyAxMy43MDcgMi4yOTMgMTIuMjkzIDYuNTg2IDggMi4yOTMgMy43MDcgMy43MDcgMi4yOTMgOCA2LjU4NiAxMi4yOTMgMi4yOTMgMTMuNzA3IDMuNzA3IDkuNDE0IDggMTMuNzA3IDEyLjI5MyAxMi4yOTMgMTMuNzA3IDggOS40MTRcIi8+PC9zdmc+YDtcbiIsImV4cG9ydCBjb25zdCBlcnJvck1zZyA9IHtcbiAgICBOb3RGb3VuZFJlcG86IFwiUmVwb3NpdG9yeeqwgCDslYTsp4Eg7ISk7KCV65CY7KeAIOyViuyVmOyKteuLiOuLpC5cIixcbn07XG5leHBvcnQgY29uc3QgY2hyb21lU3RvcmFnZUlkID0ge1xuICAgIEJhZWtqdW5Qcm9ibGVtSWQ6IFwiQmFla2p1blByb2JsZW1JZFwiLFxuICAgIEJhZWtqdW5TdGFydFRpbWU6IFwiQmFla2p1blN0YXJ0VGltZVwiLFxuICAgIFByb2dyYW1tZXJzOiBcIlByb2dyYW1tZXJzXCIsXG4gICAgUHJvZ3JhbW1lcnNQcm9ibGVtSW5mbzogXCJQcm9ncmFtbWVyc1Byb2JsZW1JbmZvXCIsXG4gICAgUHJvZ3JhbW1lcnNTdGFydFRpbWU6IFwiUHJvZ3JhbW1lcnNTdGFydFRpbWVcIixcbiAgICBSZXBvOiBcIlJlcG9cIixcbiAgICBUaW1lcjogXCJUaW1lclwiLFxuICAgIFVwbG9hZDogXCJVcGxvYWRcIixcbiAgICBTdWJtaXNzaW9uSWQ6IFwiU3VibWlzc2lvbklkXCIsXG59O1xuZXhwb3J0IGNvbnN0IGVycm9yTXNoID0ge1xuICAgIE5vdEZvdW5kUmVwbzogXCJbUFNIZWxwZXJdUmVwb3NpdG9yeeqwgCDshKTsoJXrkJjsp4Ag7JWK7JWY7Iq164uI64ukLlwiLFxufTtcbmV4cG9ydCBjb25zdCBMYW5ndWFnZSA9IHtcbiAgICBcIlB5dGhvbiAzXCI6IFwiMjhcIixcbiAgICBQeVB5MzogXCI3M1wiLFxuICAgIFwiQysrMTdcIjogXCI4NFwiLFxuICAgIFwiSmF2YSAxMVwiOiBcIjkzXCIsXG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGZuKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoa2V5LCBmbikgPT4ge1xuICAgIGlmIChmbikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSwgZm4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZUxvY2FsU3RvcmFnZSA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsuLi5rZXldKTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSwgY2FsbGJhY2tGbikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2FsbGJhY2tGbik7XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTWVzc2FnZSA9IChmbikgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmbik7XG59O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vanNVdGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jaHJvbWVVdGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vQ2xvc2VCdXR0b25cIjtcbiIsImV4cG9ydCBjb25zdCAkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxFbCA9IChzZWxlY3RvciwgY29udGV4dCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCAkJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnRzKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudHPrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRFbEJ5SWQgPSAodGFyZ2V0SWQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldElkfWlk66W8IOqwgOynhCDsl5jrpqzrqLztirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgZW5yb2xsRXZlbnQgPSAoZWwsIHR5cGUsIGZuLCBvcHRpb25zKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgb3B0aW9ucyk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCBiNjRFbmNvZGVVbmljb2RlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOT1BLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKGAweCR7cH1gKSk7XG4gICAgfSkpO1xufTtcbmV4cG9ydCBjb25zdCBjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhciA9ICh0ZXh0KSA9PiB7XG4gICAgLy8gc2luZ2xlQ2hhciB0byBkb3VibGVDaGFyIG1hcHBpbmdcbiAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgIFwiIVwiOiBcIu+8gVwiLFxuICAgICAgICBcIiVcIjogXCLvvIVcIixcbiAgICAgICAgXCImXCI6IFwi77yGXCIsXG4gICAgICAgIFwiKFwiOiBcIu+8iFwiLFxuICAgICAgICBcIilcIjogXCLvvIlcIixcbiAgICAgICAgXCIqXCI6IFwi77yKXCIsXG4gICAgICAgIFwiK1wiOiBcIu+8i1wiLFxuICAgICAgICBcIixcIjogXCLvvIxcIixcbiAgICAgICAgXCItXCI6IFwi77yNXCIsXG4gICAgICAgIFwiLlwiOiBcIu+8jlwiLFxuICAgICAgICBcIi9cIjogXCLvvI9cIixcbiAgICAgICAgXCI6XCI6IFwi77yaXCIsXG4gICAgICAgIFwiO1wiOiBcIu+8m1wiLFxuICAgICAgICBcIjxcIjogXCLvvJxcIixcbiAgICAgICAgXCI9XCI6IFwi77ydXCIsXG4gICAgICAgIFwiPlwiOiBcIu+8nlwiLFxuICAgICAgICBcIj9cIjogXCLvvJ9cIixcbiAgICAgICAgXCJAXCI6IFwi77ygXCIsXG4gICAgICAgIFwiW1wiOiBcIu+8u1wiLFxuICAgICAgICBcIlxcXFxcIjogXCLvvLxcIixcbiAgICAgICAgXCJdXCI6IFwi77y9XCIsXG4gICAgICAgIFwiXlwiOiBcIu+8vlwiLFxuICAgICAgICBfOiBcIu+8v1wiLFxuICAgICAgICBcImBcIjogXCLvvYBcIixcbiAgICAgICAgXCJ7XCI6IFwi772bXCIsXG4gICAgICAgIFwifFwiOiBcIu+9nFwiLFxuICAgICAgICBcIn1cIjogXCLvvZ1cIixcbiAgICAgICAgXCJ+XCI6IFwi772eXCIsXG4gICAgICAgIFwiIFwiOiBcIuKAhVwiLCAvLyDqs7XrsLHrp4wg7KCE6rCB66y47J6Q6rCAIOyVhOuLjCBGT1VSLVBFUi1FTSBTUEFDReuhnCDrs4DtmZhcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1shJSYoKSorLFxcLS4vOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+IF0vZywgKGspID0+IG1hcFtrXSk7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWVUaW1lciA9IChjYWxsYmFja0ZuKSA9PiB7XG4gICAgbGV0IFtzZWNzLCBtaW5zLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlY3MrKztcbiAgICAgICAgaWYgKHNlY3MgPT0gNjApIHtcbiAgICAgICAgICAgIHNlY3MgPSAwO1xuICAgICAgICAgICAgbWlucysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW5zID09IDYwKSB7XG4gICAgICAgICAgICBtaW5zID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMudG9TdHJpbmcoKSA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5zIDwgMTAgPyBcIjBcIiArIG1pbnMudG9TdHJpbmcoKSA6IG1pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcyA9IHNlY3MgPCAxMCA/IFwiMFwiICsgc2Vjcy50b1N0cmluZygpIDogc2Vjcy50b1N0cmluZygpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyID0gKHN0YXJ0VGltZSwgY2FsbGJhY2tGbikgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHsgaCwgbSwgcyB9ID0gZ2V0VGltZURpZmYoc3RhcnRUaW1lLCBub3dUaW1lKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBpbnNlcnRIVE1MID0gKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSkgPT4ge1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uLCBodG1sKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0VGltZURpZmYgPSAoc3RhcnRUaW1lLCBub3dUaW1lKSA9PiB7XG4gICAgbGV0IFtob3VyLCBtaW4sIHNlY10gPSBbMCwgMCwgMF07XG4gICAgbGV0IHRpbWVEaWZmU2VjID0gTWF0aC5mbG9vcigobm93VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgICBpZiAodGltZURpZmZTZWMgPiAzNjAwKSB7XG4gICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gMzYwMCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSAzNjAwO1xuICAgIH1cbiAgICBpZiAodGltZURpZmZTZWMgPiA2MCkge1xuICAgICAgICBtaW4gPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gNjApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgNjA7XG4gICAgfVxuICAgIHNlYyA9IHRpbWVEaWZmU2VjO1xuICAgIGNvbnN0IGggPSBob3VyIDwgMTAgPyBcIjBcIiArIGhvdXIudG9TdHJpbmcoKSA6IGhvdXIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtID0gbWluIDwgMTAgPyBcIjBcIiArIG1pbi50b1N0cmluZygpIDogbWluLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcyA9IHNlYyA8IDEwID8gXCIwXCIgKyBzZWMudG9TdHJpbmcoKSA6IHNlYy50b1N0cmluZygpO1xuICAgIHJldHVybiB7IGgsIG0sIHMgfTtcbn07XG5leHBvcnQgY29uc3QgaGFzRWxlbWVudCA9ICh0YXJnZXQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBodG1sRW50aXR5RGVjb2RlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCB1bmVzY2FwZWQgPSB7XG4gICAgICAgIFwiJmFtcDtcIjogXCImXCIsXG4gICAgICAgIFwiJiMzODtcIjogXCImXCIsXG4gICAgICAgIFwiJmx0O1wiOiBcIjxcIixcbiAgICAgICAgXCImIzYwO1wiOiBcIjxcIixcbiAgICAgICAgXCImZ3Q7XCI6IFwiPlwiLFxuICAgICAgICBcIiYjNjI7XCI6IFwiPlwiLFxuICAgICAgICBcIiZhcG9zO1wiOiBcIidcIixcbiAgICAgICAgXCImIzM5O1wiOiBcIidcIixcbiAgICAgICAgXCImcXVvdDtcIjogJ1wiJyxcbiAgICAgICAgXCImIzM0O1wiOiAnXCInLFxuICAgICAgICBcIiZuYnNwO1wiOiBcIiBcIixcbiAgICAgICAgXCImIzE2MDtcIjogXCIgXCIsXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MCk7L2csICh3b3JkKSA9PiB1bmVzY2FwZWRbd29yZF0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRRdWVyeVBhcmFtID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChxdWVyeSk7XG4gICAgaWYgKCFwYXJhbSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgRm91bmQgUXVlcnkgJHtxdWVyeX1gKTtcbiAgICByZXR1cm4gcGFyYW07XG59O1xuZXhwb3J0IGNvbnN0IFNPTFZFREFDX0xFVkVMID0ge1xuICAgIDA6IFwiVW5yYXRlZFwiLFxuICAgIDE6IFwiQnJvbnplIFZcIixcbiAgICAyOiBcIkJyb256ZSBJVlwiLFxuICAgIDM6IFwiQnJvbnplIElJSVwiLFxuICAgIDQ6IFwiQnJvbnplIElJXCIsXG4gICAgNTogXCJCcm9uemUgSVwiLFxuICAgIDY6IFwiU2lsdmVyIFZcIixcbiAgICA3OiBcIlNpbHZlciBJVlwiLFxuICAgIDg6IFwiU2lsdmVyIElJSVwiLFxuICAgIDk6IFwiU2lsdmVyIElJXCIsXG4gICAgMTA6IFwiU2lsdmVyIElcIixcbiAgICAxMTogXCJHb2xkIFZcIixcbiAgICAxMjogXCJHb2xkIElWXCIsXG4gICAgMTM6IFwiR29sZCBJSUlcIixcbiAgICAxNDogXCJHb2xkIElJXCIsXG4gICAgMTU6IFwiR29sZCBJXCIsXG4gICAgMTY6IFwiUGxhdGludW0gVlwiLFxuICAgIDE3OiBcIlBsYXRpbnVtIElWXCIsXG4gICAgMTg6IFwiUGxhdGludW0gSUlJXCIsXG4gICAgMTk6IFwiUGxhdGludW0gSUlcIixcbiAgICAyMDogXCJQbGF0aW51bSBJXCIsXG4gICAgMjE6IFwiRGlhbW9uZCBWXCIsXG4gICAgMjI6IFwiRGlhbW9uZCBJVlwiLFxuICAgIDIzOiBcIkRpYW1vbmQgSUlJXCIsXG4gICAgMjQ6IFwiRGlhbW9uZCBJSVwiLFxuICAgIDI1OiBcIkRpYW1vbmQgSVwiLFxuICAgIDI2OiBcIlJ1YnkgVlwiLFxuICAgIDI3OiBcIlJ1YnkgSVZcIixcbiAgICAyODogXCJSdWJ5IElJSVwiLFxuICAgIDI5OiBcIlJ1YnkgSUlcIixcbiAgICAzMDogXCJSdWJ5IElcIixcbiAgICAzMTogXCJNYXN0ZXJcIixcbn07XG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0ge1xuICAgIOyVhO2drDogXCJhaGV1aVwiLFxuICAgIOyXhOykgOyLnTogXCJ1bW1cIixcbiAgICBBZGE6IFwiYWRhXCIsXG4gICAgXCJBbGdvbCA2OFwiOiBcImFcIixcbiAgICBBUEVDT0RFOiBcImFwZVwiLFxuICAgIEFzc2VtYmx5OiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICgzMmJpdClcIjogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoNjRiaXQpXCI6IFwib1wiLFxuICAgIGF3azogXCJhd2tcIixcbiAgICBCYXNoOiBcInNoXCIsXG4gICAgYmM6IFwiYmNcIixcbiAgICBCZWZ1bmdlOiBcImJmXCIsXG4gICAgQm9vOiBcImJvb1wiLFxuICAgIFwiQnJhaW5mKiprXCI6IFwiYmZcIixcbiAgICBDOiBcImNcIixcbiAgICBcIkMjXCI6IFwiY3NcIixcbiAgICBcIkMjIDMuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgNi4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA5LjAgKC5ORVQpXCI6IFwiY3NcIixcbiAgICBcIkMrK1wiOiBcImNjXCIsXG4gICAgXCJDKysxMVwiOiBcImNjXCIsXG4gICAgXCJDKysxMSAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE0XCI6IFwiY2NcIixcbiAgICBcIkMrKzE0IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTdcIjogXCJjY1wiLFxuICAgIFwiQysrMTcgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysyMFwiOiBcImNjXCIsXG4gICAgXCJDKysyMCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzk4XCI6IFwiY2NcIixcbiAgICBcIkMrKzk4IChDbGFuZylcIjogXCJjY1wiLFxuICAgIEMxMTogXCJjXCIsXG4gICAgXCJDMTEgKENsYW5nKVwiOiBcImNcIixcbiAgICBDMng6IFwiY1wiLFxuICAgIFwiQzJ4IChDbGFuZylcIjogXCJjXCIsXG4gICAgQzkwOiBcImNcIixcbiAgICBcIkM5MCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5OTogXCJjXCIsXG4gICAgXCJDOTkgKENsYW5nKVwiOiBcImNcIixcbiAgICBDb2JvbDogXCJjb2JcIixcbiAgICBDb2JyYTogXCJjb2JyYVwiLFxuICAgIENvcTogXCJ2XCIsXG4gICAgQ3J5c3RhbDogXCJjclwiLFxuICAgIEQ6IFwiZFwiLFxuICAgIFwiRCAoTERDKVwiOiBcImRcIixcbiAgICBcIkYjXCI6IFwiZnNcIixcbiAgICBcIkYjICguTkVUKVwiOiBcImZzXCIsXG4gICAgXCJGIyAoTW9ubylcIjogXCJmc1wiLFxuICAgIEZvcnRyYW46IFwiZlwiLFxuICAgIEZyZWVCQVNJQzogXCJiYXNcIixcbiAgICBHbzogXCJnb1wiLFxuICAgIFwiR28gKGdjY2dvKVwiOiBcImdvXCIsXG4gICAgR29sZnNjcmlwdDogXCJnc1wiLFxuICAgIEhhc2tlbGw6IFwiaHNcIixcbiAgICBIYXhlOiBcInB5XCIsXG4gICAgSU5URVJDQUw6IFwiaVwiLFxuICAgIEphdmE6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxMVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgMTVcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDhcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDggKE9wZW5KREspXCI6IFwiamF2YVwiLFxuICAgIEtvdGxpbjogXCJrdFwiLFxuICAgIFwiS290bGluIChKVk0pXCI6IFwia3RcIixcbiAgICBcIktvdGxpbiAoTmF0aXZlKVwiOiBcImt0XCIsXG4gICAgTE9MQ09ERTogXCJsb2xcIixcbiAgICBMdWE6IFwibHVhXCIsXG4gICAgTWluZWNyYWZ0OiBcIm1jYVwiLFxuICAgIE5lbWVybGU6IFwiblwiLFxuICAgIE5pbXJvZDogXCJuaW1cIixcbiAgICBcIm5vZGUuanNcIjogXCJqc1wiLFxuICAgIFwiT2JqZWN0aXZlLUNcIjogXCJtXCIsXG4gICAgXCJPYmplY3RpdmUtQysrXCI6IFwibW1cIixcbiAgICBPQ2FtbDogXCJtbFwiLFxuICAgIFBhc2NhbDogXCJwYXNcIixcbiAgICBQZXJsOiBcInBsXCIsXG4gICAgUEhQOiBcInBocFwiLFxuICAgIFBpa2U6IFwicGlrZVwiLFxuICAgIFB5UHk6IFwicHlcIixcbiAgICBQeVB5MjogXCJweVwiLFxuICAgIFB5UHkzOiBcInB5XCIsXG4gICAgUHl0aG9uOiBcInB5XCIsXG4gICAgXCJQeXRob24gMlwiOiBcInB5XCIsXG4gICAgXCJQeXRob24gM1wiOiBcInB5XCIsXG4gICAgUmhpbm86IFwianNcIixcbiAgICBSdWJ5OiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOFwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOVwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDJcIjogXCJyYlwiLFxuICAgIFJ1c3Q6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxNVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMThcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE5XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAyMVwiOiBcInJzXCIsXG4gICAgU2NhbGE6IFwic2NhbGFcIixcbiAgICBTY2hlbWU6IFwic2NtXCIsXG4gICAgc2VkOiBcInNlZFwiLFxuICAgIFN3aWZ0OiBcInN3aWZ0XCIsXG4gICAgU3lzdGVtVmVyaWxvZzogXCJzdlwiLFxuICAgIFRjbDogXCJ0Y2xcIixcbiAgICBUZXh0OiBcInR4dFwiLFxuICAgIFR5cGVTY3JpcHQ6IFwidHNcIixcbiAgICBcIlZCLk5FVCAyLjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZCLk5FVCA0LjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpY1wiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWMgKC5ORVQpXCI6IFwidmJcIixcbiAgICBXaGl0ZXNwYWNlOiBcIndzXCIsXG59O1xuZXhwb3J0IGNvbnN0IGdldFJlYWRtZVRleHQgPSAoeyBsZXZlbCwgdGl0bGUsIHNvbHZpbmdUaW1lLCBwcm9ibGVtSWQsIHNwZW50TWVtb3J5LCBzcGVudFRpbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgfSkgPT4gbGV2ZWxcbiAgICA/IGAjIFske2xldmVsfV0gJHt0aXRsZX0gLSAke3Byb2JsZW1JZH0gXFxuXFxuYCArXG4gICAgICAgIGBb66y47KCcIOunge2BrF0oaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH0pIFxcblxcbmAgK1xuICAgICAgICBgIyMjIOyEseuKpSDsmpTslb1cXG5cXG5gICtcbiAgICAgICAgYO2Pieq3oCDshozsmpQg66mU66qo66asOiAke3NwZW50TWVtb3J5fSBLQiwgYCArXG4gICAgICAgIGDtj4nqt6Ag7IaM7JqUIOyLnOqwhDogJHtzcGVudFRpbWV9IG1zXFxuXFxuYCArXG4gICAgICAgIGDtkoDsnbTsi5zqsIQ6ICR7c29sdmluZ1RpbWV9XFxuXFxuYCArXG4gICAgICAgIGAjIyMg67aE66WYXFxuXFxuYCArXG4gICAgICAgIGAke2NhdGVnb3J5fVxcblxcbmAgK1xuICAgICAgICBgIyMjIOusuOygnCDshKTrqoVcXG5cXG4ke2Rlc2NyaXB0aW9ufVxcblxcbmBcbiAgICA6IGAjICR7dGl0bGV9IC0gJHtwcm9ibGVtSWR9IFxcblxcbmAgK1xuICAgICAgICBgW+usuOygnCDrp4HtgaxdKGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHtwcm9ibGVtSWR9KSBcXG5cXG5gICtcbiAgICAgICAgYCMjIyDshLHriqUg7JqU7JW9XFxuXFxuYCArXG4gICAgICAgIGDtj4nqt6Ag7IaM7JqUIOuplOuqqOumrDogJHtzcGVudE1lbW9yeX0gS0IsIGAgK1xuICAgICAgICBg7Y+J6regIOyGjOyalCDsi5zqsIQ6ICR7c3BlbnRUaW1lfSBtc1xcblxcbmAgK1xuICAgICAgICBg7ZKA7J207Iuc6rCEOiAke3NvbHZpbmdUaW1lfVxcblxcbmAgK1xuICAgICAgICBgIyMjIOu2hOulmFxcblxcbmAgK1xuICAgICAgICBgJHtjYXRlZ29yeX1cXG5cXG5gICtcbiAgICAgICAgYCMjIyDrrLjsoJwg7ISk66qFXFxuXFxuJHtkZXNjcmlwdGlvbn1cXG5cXG5gO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBuZXdOb2RlID0gQXJyYXkuZnJvbShuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMudGVtcGxhdGUoKSwgXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZHJlbik7XG4gICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlWzBdLCBub2RlLm5leHRTaWJsaW5nKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IG5vZGVDbGFzcyA9IG5vZGUuY2xhc3NMaXN0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAobm9kZUNsYXNzKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBub2RlQ2xhc3M7XG4gICAgfVxuICAgIG5vZGUucmVtb3ZlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lVHdvKGEsIGIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBsZXQgYWJjID0ge1xuICAgIGN1cnJlbnQ6IG51bGwsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDaHJvbWVNZXNzYWdlLCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UsIH0gZnJvbSBcIkB1dGlsc1wiO1xuaW1wb3J0IHsgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJIH0gZnJvbSBcIi4vYmFja2dyb3VuZEFQSS9nZXRSZXFCYWNrZ3JvdW5kQVBJXCI7XG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IChyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5hY3Rpb24gPT09IFwiUFNIRUxQRVJfVE9LRU5cIikge1xuICAgICAgICBzZXRDaHJvbWVMb2NhbFN0b3JhZ2Uoe1xuICAgICAgICAgICAgR0lUSFVCX1RPS0VOOiByZXEudG9rZW4sXG4gICAgICAgICAgICBVU0VSOiByZXEudXNlci5sb2dpbixcbiAgICAgICAgICAgIEFWQVRBUlVSTDogcmVxLnVzZXIuYXZhdGFyX3VybCxcbiAgICAgICAgfSkudGhlbihzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJiYWVranVuXCIgJiZcbiAgICAgICAgcmVxLnRhc2sgPT09IFwiZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjXCIpIHtcbiAgICAgICAgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjQVBJKHJlcS5wcm9ibGVtSWQpLnRoZW4oKHJlcykgPT4gc2VuZFJlc3BvbnNlKHJlcykpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJyZXBvTmFtZVwiKSB7XG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcInBvc3RcIikge1xuICAgICAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICByZXBvTmFtZTogcmVxLnJlcG9OYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmFjdGlvbiA9PT0gXCJUaW1lclwiICYmIHJlcS5tZXRob2QgPT09IFwicG9zdFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgICAgIHNldENocm9tZUxvY2FsU3RvcmFnZSh7IFRpbWVyOiByZXEuaXNBY3RpdmUgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlcS5hY3Rpb24gPT09IFwiVXBsb2FkXCIgJiYgcmVxLm1ldGhvZCA9PT0gXCJwb3N0XCIpIHtcbiAgICAgICAgc2V0Q2hyb21lTG9jYWxTdG9yYWdlKHsgVXBsb2FkOiByZXEuaXNBY3RpdmUgfSk7XG4gICAgfVxufTtcbmdldENocm9tZU1lc3NhZ2UobWVzc2FnZUhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9