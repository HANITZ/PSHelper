/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***********************!*\
  !*** ./src/Github.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Github: () => (/* binding */ Github)
/* harmony export */ });
/* harmony import */ var _utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chromeUtils */ "./src/utils/chromeUtils.ts");
/* harmony import */ var _API_getReqAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API/getReqAPI */ "./src/API/getReqAPI.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function Github() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(window.location.href);
        const githubCode = url.searchParams.get("code");
        if (!githubCode)
            throw new Error("Failed Get GITHUB Authorization Code ");
        try {
            const res = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)(githubCode);
            const user = yield (0,_API_getReqAPI__WEBPACK_IMPORTED_MODULE_1__.getUserInfo)(res.access_token);
            if (res) {
                yield (0,_utils_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.sendChromeMessage)({
                    token: res.access_token,
                    user,
                    action: "PSHELPER_TOKEN",
                });
                window.close();
            }
        }
        catch (error) {
            throw error;
        }
    });
}
Github();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDd0Q7QUFDTTtBQUN2RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4REFBYztBQUM1QywrQkFBK0IsMkRBQVc7QUFDMUM7QUFDQSxzQkFBc0IscUVBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0FQSS9nZXRSZXFBUEkudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvY2hyb21lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvdXRpbHMvanNVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1BTSGVscGVyLy4vc3JjL0dpdGh1Yi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENocm9tZUxvY2FsU3RvcmFnZSwgc2VuZENocm9tZU1lc3NhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7ICQsIGh0bWxFbnRpdHlEZWNvZGUgfSBmcm9tIFwiLi4vdXRpbHMvanNVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKHRva2VuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJcIjtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYHRva2VuICR7dG9rZW59YCxcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAoY29kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2FjY2Vzc190b2tlblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICB9KSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVwb3MgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgaWYgKCFHSVRIVUJfVE9LRU4pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIOygleuztOulvCDqsIDsoLjsmKTsp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXIvcmVwb3NcIiwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEJyYW5jaCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgVVNFUjogdXNlciB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIlVTRVJcIikpO1xuICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJyZXBvTmFtZVwiKSk7XG4gICAgY29uc3QgeyBHSVRIVUJfVE9LRU4gfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIikpO1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3VzZXJ9LyR7cmVwb05hbWV9YDtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcy5kZWZhdWx0X2JyYW5jaDtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFJlZmVyZW5jZSA9IChicmFuY2ggPSBcIm1haW5cIikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX0vZ2l0L3JlZi9oZWFkcy8ke2JyYW5jaH1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiB7IHJlZlNIQTogcmVzLm9iamVjdC5zaGEsIHJlZjogcmVzLnJlZiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blNvbHZlZERhdGEgPSAoc3VibWlzc2lvbklkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3NvdXJjZS9kb3dubG9hZC8ke3N1Ym1pc3Npb25JZH1gO1xuICAgIGNvbnN0IGNvZGUgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2VjLUZldGNoLURlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtTW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICByZXR1cm4gY29kZTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldEJhZWtqdW5Qcm9ibGVtRGVzY3JpcHRpb24gPSAocHJvYmxlbUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vd3d3LmFjbWljcGMubmV0L3Byb2JsZW0vJHtwcm9ibGVtSWR9YDtcbiAgICBjb25zdCBkb2MgPSB5aWVsZCAoeWllbGQgZmV0Y2goaG9zdCwge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwic2VjLWZldGNoLWRlc3RcIjogXCJkb2N1bWVudFwiLFxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtbW9kZVwiOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgIH0sXG4gICAgfSkpLnRleHQoKTtcbiAgICBjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkb2MsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1faW5wdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3Qgb3V0cHV0ID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fb3V0cHV0XCIsIGh0bWwpLmlubmVySFRNTC50cmltKCkpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaHRtbEVudGl0eURlY29kZSgkKFwiI3Byb2JsZW1fZGVzY3JpcHRpb25cIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgcmV0dXJuIHsgaW5wdXQsIG91dHB1dCwgZGVzY3JpcHRpb24gfTtcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1JbmZvQnlTb2x2ZWRBYyA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogXCJiYWVranVuXCIsXG4gICAgICAgIHRhc2s6IFwiZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjXCIsXG4gICAgICAgIHByb2JsZW1JZCxcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGZuKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoa2V5LCBmbikgPT4ge1xuICAgIGlmIChmbikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSwgZm4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZUxvY2FsU3RvcmFnZSA9IChfYSkgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBkZWxldGVDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGtleSk7XG59O1xuZXhwb3J0IGNvbnN0IHNlbmRDaHJvbWVNZXNzYWdlID0gKF9hLCBjYWxsYmFja0ZuKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoY2FsbGJhY2tGbikge1xuICAgICAgICByZXR1cm4gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBjYWxsYmFja0ZuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRDaHJvbWVNZXNzYWdlID0gKGZuKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZuKTtcbn07XG4iLCJleHBvcnQgY29uc3QgJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJlbnRFbFxuICAgICAgICA/IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldE5hbWUpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnTrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgJCQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50cylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldE5hbWV9IGVsZW1lbnRz66W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0RWxCeUlkID0gKHRhcmdldElkKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0YXJnZXRJZH1pZOulvCDqsIDsp4Qg7JeY66as66i87Yq466W8IOywvuydhCDsiJgg7JeG7Iq164uI64ukYCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGNvbnN0IGVucm9sbEV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBpc09iakVtcHR5ID0gKG9iaikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pO1xufTtcbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IChlbCwgdHlwZSwgZm4pID0+IHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbn07XG5leHBvcnQgY29uc3QgYjY0RW5jb2RlVW5pY29kZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTk9QS1GXXsyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihgMHgke3B9YCkpO1xuICAgIH0pKTtcbn07XG5leHBvcnQgY29uc3QgY29udmVydFNpbmdsZUNoYXJUb0RvdWJsZUNoYXIgPSAodGV4dCkgPT4ge1xuICAgIC8vIHNpbmdsZUNoYXIgdG8gZG91YmxlQ2hhciBtYXBwaW5nXG4gICAgY29uc3QgbWFwID0ge1xuICAgICAgICBcIiFcIjogXCLvvIFcIixcbiAgICAgICAgXCIlXCI6IFwi77yFXCIsXG4gICAgICAgIFwiJlwiOiBcIu+8hlwiLFxuICAgICAgICBcIihcIjogXCLvvIhcIixcbiAgICAgICAgXCIpXCI6IFwi77yJXCIsXG4gICAgICAgIFwiKlwiOiBcIu+8ilwiLFxuICAgICAgICBcIitcIjogXCLvvItcIixcbiAgICAgICAgXCIsXCI6IFwi77yMXCIsXG4gICAgICAgIFwiLVwiOiBcIu+8jVwiLFxuICAgICAgICBcIi5cIjogXCLvvI5cIixcbiAgICAgICAgXCIvXCI6IFwi77yPXCIsXG4gICAgICAgIFwiOlwiOiBcIu+8mlwiLFxuICAgICAgICBcIjtcIjogXCLvvJtcIixcbiAgICAgICAgXCI8XCI6IFwi77ycXCIsXG4gICAgICAgIFwiPVwiOiBcIu+8nVwiLFxuICAgICAgICBcIj5cIjogXCLvvJ5cIixcbiAgICAgICAgXCI/XCI6IFwi77yfXCIsXG4gICAgICAgIFwiQFwiOiBcIu+8oFwiLFxuICAgICAgICBcIltcIjogXCLvvLtcIixcbiAgICAgICAgXCJcXFxcXCI6IFwi77y8XCIsXG4gICAgICAgIFwiXVwiOiBcIu+8vVwiLFxuICAgICAgICBcIl5cIjogXCLvvL5cIixcbiAgICAgICAgXzogXCLvvL9cIixcbiAgICAgICAgXCJgXCI6IFwi772AXCIsXG4gICAgICAgIFwie1wiOiBcIu+9m1wiLFxuICAgICAgICBcInxcIjogXCLvvZxcIixcbiAgICAgICAgXCJ9XCI6IFwi772dXCIsXG4gICAgICAgIFwiflwiOiBcIu+9nlwiLFxuICAgICAgICBcIiBcIjogXCLigIVcIiwgLy8g6rO167Cx66eMIOyghOqwgeusuOyekOqwgCDslYTri4wgRk9VUi1QRVItRU0gU1BBQ0XroZwg67OA7ZmYXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bISUmKCkqKyxcXC0uLzo7PD0+P0BcXFtcXFxcXFxdXl9ge3x9fiBdL2csIChrKSA9PiBtYXBba10pO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVlVGltZXIgPSAoY2FsbGJhY2tGbikgPT4ge1xuICAgIGxldCBbc2VjcywgbWlucywgaG91cnNdID0gWzAsIDAsIDBdO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZWNzKys7XG4gICAgICAgIGlmIChzZWNzID09IDYwKSB7XG4gICAgICAgICAgICBzZWNzID0gMDtcbiAgICAgICAgICAgIG1pbnMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWlucyA9PSA2MCkge1xuICAgICAgICAgICAgbWlucyA9IDA7XG4gICAgICAgICAgICBob3VycysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VycyA9PSAxMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaCA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzLnRvU3RyaW5nKCkgOiBob3Vycy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBtID0gbWlucyA8IDEwID8gXCIwXCIgKyBtaW5zLnRvU3RyaW5nKCkgOiBtaW5zLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHMgPSBzZWNzIDwgMTAgPyBcIjBcIiArIHNlY3MudG9TdHJpbmcoKSA6IHNlY3MudG9TdHJpbmcoKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lciA9IChzdGFydFRpbWUsIGNhbGxiYWNrRm4pID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB7IGgsIG0sIHMgfSA9IGdldFRpbWVEaWZmKHN0YXJ0VGltZSwgbm93VGltZSk7XG4gICAgICAgIGNhbGxiYWNrRm4oeyBoLCBtLCBzIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aW1lcjtcbn07XG5leHBvcnQgY29uc3QgaW5zZXJ0SFRNTCA9ICh7IGVsZW1lbnQsIHBvc2l0aW9uLCBodG1sIH0pID0+IHtcbiAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgaHRtbCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFRpbWVEaWZmID0gKHN0YXJ0VGltZSwgbm93VGltZSkgPT4ge1xuICAgIGxldCBbaG91ciwgbWluLCBzZWNdID0gWzAsIDAsIDBdO1xuICAgIGxldCB0aW1lRGlmZlNlYyA9IE1hdGguZmxvb3IoKG5vd1RpbWUgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG4gICAgaWYgKHRpbWVEaWZmU2VjID4gMzYwMCkge1xuICAgICAgICBob3VyID0gTWF0aC5mbG9vcih0aW1lRGlmZlNlYyAvIDM2MDApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgMzYwMDtcbiAgICB9XG4gICAgaWYgKHRpbWVEaWZmU2VjID4gNjApIHtcbiAgICAgICAgbWluID0gTWF0aC5mbG9vcih0aW1lRGlmZlNlYyAvIDYwKTtcbiAgICAgICAgdGltZURpZmZTZWMgPSB0aW1lRGlmZlNlYyAlIDYwO1xuICAgIH1cbiAgICBzZWMgPSB0aW1lRGlmZlNlYztcbiAgICBjb25zdCBoID0gaG91ciA8IDEwID8gXCIwXCIgKyBob3VyLnRvU3RyaW5nKCkgOiBob3VyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbSA9IG1pbiA8IDEwID8gXCIwXCIgKyBtaW4udG9TdHJpbmcoKSA6IG1pbi50b1N0cmluZygpO1xuICAgIGNvbnN0IHMgPSBzZWMgPCAxMCA/IFwiMFwiICsgc2VjLnRvU3RyaW5nKCkgOiBzZWMudG9TdHJpbmcoKTtcbiAgICByZXR1cm4geyBoLCBtLCBzIH07XG59O1xuZXhwb3J0IGNvbnN0IGhhc0VsZW1lbnQgPSAodGFyZ2V0LCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaHRtbEVudGl0eURlY29kZSA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgdW5lc2NhcGVkID0ge1xuICAgICAgICBcIiZhbXA7XCI6IFwiJlwiLFxuICAgICAgICBcIiYjMzg7XCI6IFwiJlwiLFxuICAgICAgICBcIiZsdDtcIjogXCI8XCIsXG4gICAgICAgIFwiJiM2MDtcIjogXCI8XCIsXG4gICAgICAgIFwiJmd0O1wiOiBcIj5cIixcbiAgICAgICAgXCImIzYyO1wiOiBcIj5cIixcbiAgICAgICAgXCImYXBvcztcIjogXCInXCIsXG4gICAgICAgIFwiJiMzOTtcIjogXCInXCIsXG4gICAgICAgIFwiJnF1b3Q7XCI6ICdcIicsXG4gICAgICAgIFwiJiMzNDtcIjogJ1wiJyxcbiAgICAgICAgXCImbmJzcDtcIjogXCIgXCIsXG4gICAgICAgIFwiJiMxNjA7XCI6IFwiIFwiLFxuICAgIH07XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvJig/OmFtcHwjMzh8bHR8IzYwfGd0fCM2MnxhcG9zfCMzOXxxdW90fCMzNHxuYnNwfCMxNjApOy9nLCAod29yZCkgPT4gdW5lc2NhcGVkW3dvcmRdKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0UXVlcnlQYXJhbSA9IChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQocXVlcnkpO1xuICAgIGlmICghcGFyYW0pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IEZvdW5kIFF1ZXJ5ICR7cXVlcnl9YCk7XG4gICAgcmV0dXJuIHBhcmFtO1xufTtcbmV4cG9ydCBjb25zdCBTT0xWRURBQ19MRVZFTCA9IHtcbiAgICAwOiBcIlVucmF0ZWRcIixcbiAgICAxOiBcIkJyb256ZSBWXCIsXG4gICAgMjogXCJCcm9uemUgSVZcIixcbiAgICAzOiBcIkJyb256ZSBJSUlcIixcbiAgICA0OiBcIkJyb256ZSBJSVwiLFxuICAgIDU6IFwiQnJvbnplIElcIixcbiAgICA2OiBcIlNpbHZlciBWXCIsXG4gICAgNzogXCJTaWx2ZXIgSVZcIixcbiAgICA4OiBcIlNpbHZlciBJSUlcIixcbiAgICA5OiBcIlNpbHZlciBJSVwiLFxuICAgIDEwOiBcIlNpbHZlciBJXCIsXG4gICAgMTE6IFwiR29sZCBWXCIsXG4gICAgMTI6IFwiR29sZCBJVlwiLFxuICAgIDEzOiBcIkdvbGQgSUlJXCIsXG4gICAgMTQ6IFwiR29sZCBJSVwiLFxuICAgIDE1OiBcIkdvbGQgSVwiLFxuICAgIDE2OiBcIlBsYXRpbnVtIFZcIixcbiAgICAxNzogXCJQbGF0aW51bSBJVlwiLFxuICAgIDE4OiBcIlBsYXRpbnVtIElJSVwiLFxuICAgIDE5OiBcIlBsYXRpbnVtIElJXCIsXG4gICAgMjA6IFwiUGxhdGludW0gSVwiLFxuICAgIDIxOiBcIkRpYW1vbmQgVlwiLFxuICAgIDIyOiBcIkRpYW1vbmQgSVZcIixcbiAgICAyMzogXCJEaWFtb25kIElJSVwiLFxuICAgIDI0OiBcIkRpYW1vbmQgSUlcIixcbiAgICAyNTogXCJEaWFtb25kIElcIixcbiAgICAyNjogXCJSdWJ5IFZcIixcbiAgICAyNzogXCJSdWJ5IElWXCIsXG4gICAgMjg6IFwiUnVieSBJSUlcIixcbiAgICAyOTogXCJSdWJ5IElJXCIsXG4gICAgMzA6IFwiUnVieSBJXCIsXG4gICAgMzE6IFwiTWFzdGVyXCIsXG59O1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IHtcbiAgICDslYTtnaw6IFwiYWhldWlcIixcbiAgICDsl4TspIDsi506IFwidW1tXCIsXG4gICAgQWRhOiBcImFkYVwiLFxuICAgIFwiQWxnb2wgNjhcIjogXCJhXCIsXG4gICAgQVBFQ09ERTogXCJhcGVcIixcbiAgICBBc3NlbWJseTogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoMzJiaXQpXCI6IFwib1wiLFxuICAgIFwiQXNzZW1ibHkgKDY0Yml0KVwiOiBcIm9cIixcbiAgICBhd2s6IFwiYXdrXCIsXG4gICAgQmFzaDogXCJzaFwiLFxuICAgIGJjOiBcImJjXCIsXG4gICAgQmVmdW5nZTogXCJiZlwiLFxuICAgIEJvbzogXCJib29cIixcbiAgICBcIkJyYWluZioqa1wiOiBcImJmXCIsXG4gICAgQzogXCJjXCIsXG4gICAgXCJDI1wiOiBcImNzXCIsXG4gICAgXCJDIyAzLjAgKE1vbm8pXCI6IFwiY3NcIixcbiAgICBcIkMjIDYuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgOS4wICguTkVUKVwiOiBcImNzXCIsXG4gICAgXCJDKytcIjogXCJjY1wiLFxuICAgIFwiQysrMTFcIjogXCJjY1wiLFxuICAgIFwiQysrMTEgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysxNFwiOiBcImNjXCIsXG4gICAgXCJDKysxNCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE3XCI6IFwiY2NcIixcbiAgICBcIkMrKzE3IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMjBcIjogXCJjY1wiLFxuICAgIFwiQysrMjAgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKys5OFwiOiBcImNjXCIsXG4gICAgXCJDKys5OCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBDMTE6IFwiY1wiLFxuICAgIFwiQzExIChDbGFuZylcIjogXCJjXCIsXG4gICAgQzJ4OiBcImNcIixcbiAgICBcIkMyeCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5MDogXCJjXCIsXG4gICAgXCJDOTAgKENsYW5nKVwiOiBcImNcIixcbiAgICBDOTk6IFwiY1wiLFxuICAgIFwiQzk5IChDbGFuZylcIjogXCJjXCIsXG4gICAgQ29ib2w6IFwiY29iXCIsXG4gICAgQ29icmE6IFwiY29icmFcIixcbiAgICBDb3E6IFwidlwiLFxuICAgIENyeXN0YWw6IFwiY3JcIixcbiAgICBEOiBcImRcIixcbiAgICBcIkQgKExEQylcIjogXCJkXCIsXG4gICAgXCJGI1wiOiBcImZzXCIsXG4gICAgXCJGIyAoLk5FVClcIjogXCJmc1wiLFxuICAgIFwiRiMgKE1vbm8pXCI6IFwiZnNcIixcbiAgICBGb3J0cmFuOiBcImZcIixcbiAgICBGcmVlQkFTSUM6IFwiYmFzXCIsXG4gICAgR286IFwiZ29cIixcbiAgICBcIkdvIChnY2NnbylcIjogXCJnb1wiLFxuICAgIEdvbGZzY3JpcHQ6IFwiZ3NcIixcbiAgICBIYXNrZWxsOiBcImhzXCIsXG4gICAgSGF4ZTogXCJweVwiLFxuICAgIElOVEVSQ0FMOiBcImlcIixcbiAgICBKYXZhOiBcImphdmFcIixcbiAgICBcIkphdmEgMTFcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDE1XCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSA4XCI6IFwiamF2YVwiLFxuICAgIFwiSmF2YSA4IChPcGVuSkRLKVwiOiBcImphdmFcIixcbiAgICBLb3RsaW46IFwia3RcIixcbiAgICBcIktvdGxpbiAoSlZNKVwiOiBcImt0XCIsXG4gICAgXCJLb3RsaW4gKE5hdGl2ZSlcIjogXCJrdFwiLFxuICAgIExPTENPREU6IFwibG9sXCIsXG4gICAgTHVhOiBcImx1YVwiLFxuICAgIE1pbmVjcmFmdDogXCJtY2FcIixcbiAgICBOZW1lcmxlOiBcIm5cIixcbiAgICBOaW1yb2Q6IFwibmltXCIsXG4gICAgXCJub2RlLmpzXCI6IFwianNcIixcbiAgICBcIk9iamVjdGl2ZS1DXCI6IFwibVwiLFxuICAgIFwiT2JqZWN0aXZlLUMrK1wiOiBcIm1tXCIsXG4gICAgT0NhbWw6IFwibWxcIixcbiAgICBQYXNjYWw6IFwicGFzXCIsXG4gICAgUGVybDogXCJwbFwiLFxuICAgIFBIUDogXCJwaHBcIixcbiAgICBQaWtlOiBcInBpa2VcIixcbiAgICBQeVB5OiBcInB5XCIsXG4gICAgUHlQeTI6IFwicHlcIixcbiAgICBQeVB5MzogXCJweVwiLFxuICAgIFB5dGhvbjogXCJweVwiLFxuICAgIFwiUHl0aG9uIDJcIjogXCJweVwiLFxuICAgIFwiUHl0aG9uIDNcIjogXCJweVwiLFxuICAgIFJoaW5vOiBcImpzXCIsXG4gICAgUnVieTogXCJyYlwiLFxuICAgIFwiUnVieSAxLjhcIjogXCJyYlwiLFxuICAgIFwiUnVieSAxLjlcIjogXCJyYlwiLFxuICAgIFwiUnVieSAyXCI6IFwicmJcIixcbiAgICBSdXN0OiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMTVcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE4XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxOVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMjFcIjogXCJyc1wiLFxuICAgIFNjYWxhOiBcInNjYWxhXCIsXG4gICAgU2NoZW1lOiBcInNjbVwiLFxuICAgIHNlZDogXCJzZWRcIixcbiAgICBTd2lmdDogXCJzd2lmdFwiLFxuICAgIFN5c3RlbVZlcmlsb2c6IFwic3ZcIixcbiAgICBUY2w6IFwidGNsXCIsXG4gICAgVGV4dDogXCJ0eHRcIixcbiAgICBUeXBlU2NyaXB0OiBcInRzXCIsXG4gICAgXCJWQi5ORVQgMi4wIChNb25vKVwiOiBcInZiXCIsXG4gICAgXCJWQi5ORVQgNC4wIChNb25vKVwiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWNcIjogXCJ2YlwiLFxuICAgIFwiVmlzdWFsIEJhc2ljICguTkVUKVwiOiBcInZiXCIsXG4gICAgV2hpdGVzcGFjZTogXCJ3c1wiLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzZW5kQ2hyb21lTWVzc2FnZSB9IGZyb20gXCIuL3V0aWxzL2Nocm9tZVV0aWxzXCI7XG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbiwgZ2V0VXNlckluZm8gfSBmcm9tIFwiLi9BUEkvZ2V0UmVxQVBJXCI7XG5leHBvcnQgZnVuY3Rpb24gR2l0aHViKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBnaXRodWJDb2RlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjb2RlXCIpO1xuICAgICAgICBpZiAoIWdpdGh1YkNvZGUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgR2V0IEdJVEhVQiBBdXRob3JpemF0aW9uIENvZGUgXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZ2V0QWNjZXNzVG9rZW4oZ2l0aHViQ29kZSk7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0geWllbGQgZ2V0VXNlckluZm8ocmVzLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZENocm9tZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVzLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIlBTSEVMUEVSX1RPS0VOXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuR2l0aHViKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=