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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsYUFBYTtBQUNiLGNBQWM7QUFDZCxhQUFhO0FBQ2IsY0FBYztBQUNkLGVBQWU7QUFDZixjQUFjO0FBQ2QsZUFBZTtBQUNmLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3RDtBQUNNO0FBQ3ZEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhEQUFjO0FBQzVDLCtCQUErQiwyREFBVztBQUMxQztBQUNBLHNCQUFzQixxRUFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvQVBJL2dldFJlcUFQSS50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9jaHJvbWVVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9qc1V0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvR2l0aHViLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCBzZW5kQ2hyb21lTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9jaHJvbWVVdGlsc1wiO1xuaW1wb3J0IHsgJCwgaHRtbEVudGl0eURlY29kZSB9IGZyb20gXCIuLi91dGlscy9qc1V0aWxzXCI7XG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlclwiO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IChjb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCAoeWllbGQgZmV0Y2goXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn0pO1xuZXhwb3J0IGNvbnN0IGdldFVzZXJSZXBvcyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBpZiAoIUdJVEhVQl9UT0tFTilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4g7KCV67O066W8IOqwgOyguOyYpOyngCDrqrvtlojsirXri4jri6QuXCIpO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlci9yZXBvc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59KTtcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QnJhbmNoID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyBVU0VSOiB1c2VyIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiVVNFUlwiKSk7XG4gICAgY29uc3QgeyByZXBvTmFtZSB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcInJlcG9OYW1lXCIpKTtcbiAgICBjb25zdCB7IEdJVEhVQl9UT0tFTiB9ID0gKHlpZWxkIGdldENocm9tZUxvY2FsU3RvcmFnZShcIkdJVEhVQl9UT0tFTlwiKSk7XG4gICAgY29uc3QgaG9zdCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvTmFtZX1gO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzLmRlZmF1bHRfYnJhbmNoO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UmVmZXJlbmNlID0gKGJyYW5jaCA9IFwibWFpblwiKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IFVTRVI6IHVzZXIgfSA9ICh5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJVU0VSXCIpKTtcbiAgICBjb25zdCB7IHJlcG9OYW1lIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwicmVwb05hbWVcIikpO1xuICAgIGNvbnN0IHsgR0lUSFVCX1RPS0VOIH0gPSAoeWllbGQgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlKFwiR0lUSFVCX1RPS0VOXCIpKTtcbiAgICBjb25zdCBob3N0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHt1c2VyfS8ke3JlcG9OYW1lfS9naXQvcmVmL2hlYWRzLyR7YnJhbmNofWA7XG4gICAgY29uc3QgcmVzID0geWllbGQgKHlpZWxkIGZldGNoKGhvc3QsIHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke0dJVEhVQl9UT0tFTn1gLFxuICAgICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHsgcmVmU0hBOiByZXMub2JqZWN0LnNoYSwgcmVmOiByZXMucmVmIH07XG59KTtcbmV4cG9ydCBjb25zdCBnZXRCYWVranVuU29sdmVkRGF0YSA9IChzdWJtaXNzaW9uSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvc291cmNlL2Rvd25sb2FkLyR7c3VibWlzc2lvbklkfWA7XG4gICAgY29uc3QgY29kZSA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZWMtRmV0Y2gtRGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcIlNlYy1GZXRjaC1Nb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIHJldHVybiBjb2RlO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0QmFla2p1blByb2JsZW1EZXNjcmlwdGlvbiA9IChwcm9ibGVtSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGhvc3QgPSBgaHR0cHM6Ly93d3cuYWNtaWNwYy5uZXQvcHJvYmxlbS8ke3Byb2JsZW1JZH1gO1xuICAgIGNvbnN0IGRvYyA9IHlpZWxkICh5aWVsZCBmZXRjaChob3N0LCB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtZGVzdFwiOiBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1tb2RlXCI6IFwibmF2aWdhdGVcIixcbiAgICAgICAgfSxcbiAgICB9KSkudGV4dCgpO1xuICAgIGNvbnN0IGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRvYywgXCJ0ZXh0L2h0bWxcIik7XG4gICAgY29uc3QgaW5wdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9pbnB1dFwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICBjb25zdCBvdXRwdXQgPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9vdXRwdXRcIiwgaHRtbCkuaW5uZXJIVE1MLnRyaW0oKSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBodG1sRW50aXR5RGVjb2RlKCQoXCIjcHJvYmxlbV9kZXNjcmlwdGlvblwiLCBodG1sKS5pbm5lckhUTUwudHJpbSgpKTtcbiAgICByZXR1cm4geyBpbnB1dCwgb3V0cHV0LCBkZXNjcmlwdGlvbiB9O1xufSk7XG5leHBvcnQgY29uc3QgZ2V0UHJvYmxlbUluZm9CeVNvbHZlZEFjID0gKHByb2JsZW1JZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHNlbmRDaHJvbWVNZXNzYWdlKHtcbiAgICAgICAgYWN0aW9uOiBcImJhZWtqdW5cIixcbiAgICAgICAgdGFzazogXCJnZXRQcm9ibGVtSW5mb0J5U29sdmVkQWNcIixcbiAgICAgICAgcHJvYmxlbUlkLFxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVDaHJvbWVUYWJzID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZVN5bmNTdG9yYWdlID0gKF9hLCBmbikgPT4ge1xuICAgIHZhciBwcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gKCkgPT4geyB9OyB9XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZVN5bmNTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0sIGZuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW2tleV0pO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDaHJvbWVMb2NhbFN0b3JhZ2UgPSAoX2EpID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENocm9tZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldKTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQ2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBzZW5kQ2hyb21lTWVzc2FnZSA9IChfYSwgY2FsbGJhY2tGbikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgcmV0dXJuIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2FsbGJhY2tGbik7XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpO1xufSk7XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTWVzc2FnZSA9IChmbikgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmbik7XG59O1xuZXhwb3J0IGNvbnN0IGNsb3NlQ3VycmVudFRhYiA9IChwYXJlbnQpID0+IHtcbiAgICBsZXQgdGhhdCA9IHBhcmVudDtcbiAgICBjaHJvbWUudGFicyA9IHBhcmVudDtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICBpZiAodGFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFiSWQgPSB0YWJzWzBdLmlkO1xuICAgICAgICAgICAgaWYgKCF0YWJJZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUodGFiSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIu2OmOydtOyngCDri6vtnphcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCAkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBhcmVudEVsXG4gICAgICAgID8gcGFyZW50RWwucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKVxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0TmFtZSk7XG4gICAgaWYgKCFlbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudOulvCDssL7snYQg7IiYIOyXhuyKteuLiOuLpGApO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCAkJCA9ICh0YXJnZXROYW1lLCBwYXJlbnRFbCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcGFyZW50RWxcbiAgICAgICAgPyBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXROYW1lKTtcbiAgICBpZiAoIWVsZW1lbnRzKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFyZ2V0TmFtZX0gZWxlbWVudHPrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRFbEJ5SWQgPSAodGFyZ2V0SWQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhcmdldElkfWlk66W8IOqwgOynhCDsl5jrpqzrqLztirjrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6RgKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgY29uc3QgZW5yb2xsRXZlbnQgPSAoZWwsIHR5cGUsIGZuKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG59O1xuZXhwb3J0IGNvbnN0IGlzT2JqRW1wdHkgPSAob2JqKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopID09PSBKU09OLnN0cmluZ2lmeSh7fSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xufTtcbmV4cG9ydCBjb25zdCBiNjRFbmNvZGVVbmljb2RlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOT1BLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKGAweCR7cH1gKSk7XG4gICAgfSkpO1xufTtcbmV4cG9ydCBjb25zdCBjb252ZXJ0U2luZ2xlQ2hhclRvRG91YmxlQ2hhciA9ICh0ZXh0KSA9PiB7XG4gICAgLy8gc2luZ2xlQ2hhciB0byBkb3VibGVDaGFyIG1hcHBpbmdcbiAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgIFwiIVwiOiBcIu+8gVwiLFxuICAgICAgICBcIiVcIjogXCLvvIVcIixcbiAgICAgICAgXCImXCI6IFwi77yGXCIsXG4gICAgICAgIFwiKFwiOiBcIu+8iFwiLFxuICAgICAgICBcIilcIjogXCLvvIlcIixcbiAgICAgICAgXCIqXCI6IFwi77yKXCIsXG4gICAgICAgIFwiK1wiOiBcIu+8i1wiLFxuICAgICAgICBcIixcIjogXCLvvIxcIixcbiAgICAgICAgXCItXCI6IFwi77yNXCIsXG4gICAgICAgIFwiLlwiOiBcIu+8jlwiLFxuICAgICAgICBcIi9cIjogXCLvvI9cIixcbiAgICAgICAgXCI6XCI6IFwi77yaXCIsXG4gICAgICAgIFwiO1wiOiBcIu+8m1wiLFxuICAgICAgICBcIjxcIjogXCLvvJxcIixcbiAgICAgICAgXCI9XCI6IFwi77ydXCIsXG4gICAgICAgIFwiPlwiOiBcIu+8nlwiLFxuICAgICAgICBcIj9cIjogXCLvvJ9cIixcbiAgICAgICAgXCJAXCI6IFwi77ygXCIsXG4gICAgICAgIFwiW1wiOiBcIu+8u1wiLFxuICAgICAgICBcIlxcXFxcIjogXCLvvLxcIixcbiAgICAgICAgXCJdXCI6IFwi77y9XCIsXG4gICAgICAgIFwiXlwiOiBcIu+8vlwiLFxuICAgICAgICBfOiBcIu+8v1wiLFxuICAgICAgICBcImBcIjogXCLvvYBcIixcbiAgICAgICAgXCJ7XCI6IFwi772bXCIsXG4gICAgICAgIFwifFwiOiBcIu+9nFwiLFxuICAgICAgICBcIn1cIjogXCLvvZ1cIixcbiAgICAgICAgXCJ+XCI6IFwi772eXCIsXG4gICAgICAgIFwiIFwiOiBcIuKAhVwiLCAvLyDqs7XrsLHrp4wg7KCE6rCB66y47J6Q6rCAIOyVhOuLjCBGT1VSLVBFUi1FTSBTUEFDReuhnCDrs4DtmZhcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1shJSYoKSorLFxcLS4vOjs8PT4/QFxcW1xcXFxcXF1eX2B7fH1+IF0vZywgKGspID0+IG1hcFtrXSk7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWVUaW1lciA9IChjYWxsYmFja0ZuKSA9PiB7XG4gICAgbGV0IFtzZWNzLCBtaW5zLCBob3Vyc10gPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNlY3MrKztcbiAgICAgICAgaWYgKHNlY3MgPT0gNjApIHtcbiAgICAgICAgICAgIHNlY3MgPSAwO1xuICAgICAgICAgICAgbWlucysrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW5zID09IDYwKSB7XG4gICAgICAgICAgICBtaW5zID0gMDtcbiAgICAgICAgICAgIGhvdXJzKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXJzID09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMudG9TdHJpbmcoKSA6IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5zIDwgMTAgPyBcIjBcIiArIG1pbnMudG9TdHJpbmcoKSA6IG1pbnMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcyA9IHNlY3MgPCAxMCA/IFwiMFwiICsgc2Vjcy50b1N0cmluZygpIDogc2Vjcy50b1N0cmluZygpO1xuICAgICAgICBjYWxsYmFja0ZuKHsgaCwgbSwgcyB9KTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gdGltZXI7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWVyID0gKHN0YXJ0VGltZSwgY2FsbGJhY2tGbikgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHsgaCwgbSwgcyB9ID0gZ2V0VGltZURpZmYoc3RhcnRUaW1lLCBub3dUaW1lKTtcbiAgICAgICAgY2FsbGJhY2tGbih7IGgsIG0sIHMgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRpbWVyO1xufTtcbmV4cG9ydCBjb25zdCBpbnNlcnRIVE1MID0gKHsgZWxlbWVudCwgcG9zaXRpb24sIGh0bWwgfSkgPT4ge1xuICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uLCBodG1sKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0VGltZURpZmYgPSAoc3RhcnRUaW1lLCBub3dUaW1lKSA9PiB7XG4gICAgbGV0IFtob3VyLCBtaW4sIHNlY10gPSBbMCwgMCwgMF07XG4gICAgbGV0IHRpbWVEaWZmU2VjID0gTWF0aC5mbG9vcigobm93VGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgICBpZiAodGltZURpZmZTZWMgPiAzNjAwKSB7XG4gICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gMzYwMCk7XG4gICAgICAgIHRpbWVEaWZmU2VjID0gdGltZURpZmZTZWMgJSAzNjAwO1xuICAgIH1cbiAgICBpZiAodGltZURpZmZTZWMgPiA2MCkge1xuICAgICAgICBtaW4gPSBNYXRoLmZsb29yKHRpbWVEaWZmU2VjIC8gNjApO1xuICAgICAgICB0aW1lRGlmZlNlYyA9IHRpbWVEaWZmU2VjICUgNjA7XG4gICAgfVxuICAgIHNlYyA9IHRpbWVEaWZmU2VjO1xuICAgIGNvbnN0IGggPSBob3VyIDwgMTAgPyBcIjBcIiArIGhvdXIudG9TdHJpbmcoKSA6IGhvdXIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtID0gbWluIDwgMTAgPyBcIjBcIiArIG1pbi50b1N0cmluZygpIDogbWluLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcyA9IHNlYyA8IDEwID8gXCIwXCIgKyBzZWMudG9TdHJpbmcoKSA6IHNlYy50b1N0cmluZygpO1xuICAgIHJldHVybiB7IGgsIG0sIHMgfTtcbn07XG5leHBvcnQgY29uc3QgaGFzRWxlbWVudCA9ICh0YXJnZXQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCBjb25zdCBodG1sRW50aXR5RGVjb2RlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCB1bmVzY2FwZWQgPSB7XG4gICAgICAgIFwiJmFtcDtcIjogXCImXCIsXG4gICAgICAgIFwiJiMzODtcIjogXCImXCIsXG4gICAgICAgIFwiJmx0O1wiOiBcIjxcIixcbiAgICAgICAgXCImIzYwO1wiOiBcIjxcIixcbiAgICAgICAgXCImZ3Q7XCI6IFwiPlwiLFxuICAgICAgICBcIiYjNjI7XCI6IFwiPlwiLFxuICAgICAgICBcIiZhcG9zO1wiOiBcIidcIixcbiAgICAgICAgXCImIzM5O1wiOiBcIidcIixcbiAgICAgICAgXCImcXVvdDtcIjogJ1wiJyxcbiAgICAgICAgXCImIzM0O1wiOiAnXCInLFxuICAgICAgICBcIiZuYnNwO1wiOiBcIiBcIixcbiAgICAgICAgXCImIzE2MDtcIjogXCIgXCIsXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mKD86YW1wfCMzOHxsdHwjNjB8Z3R8IzYyfGFwb3N8IzM5fHF1b3R8IzM0fG5ic3B8IzE2MCk7L2csICh3b3JkKSA9PiB1bmVzY2FwZWRbd29yZF0pO1xufTtcbmV4cG9ydCBjb25zdCBnZXRRdWVyeVBhcmFtID0gKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChxdWVyeSk7XG4gICAgaWYgKCFwYXJhbSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgRm91bmQgUXVlcnkgJHtxdWVyeX1gKTtcbiAgICByZXR1cm4gcGFyYW07XG59O1xuZXhwb3J0IGNvbnN0IFNPTFZFREFDX0xFVkVMID0ge1xuICAgIDA6IFwiVW5yYXRlZFwiLFxuICAgIDE6IFwiQnJvbnplIFZcIixcbiAgICAyOiBcIkJyb256ZSBJVlwiLFxuICAgIDM6IFwiQnJvbnplIElJSVwiLFxuICAgIDQ6IFwiQnJvbnplIElJXCIsXG4gICAgNTogXCJCcm9uemUgSVwiLFxuICAgIDY6IFwiU2lsdmVyIFZcIixcbiAgICA3OiBcIlNpbHZlciBJVlwiLFxuICAgIDg6IFwiU2lsdmVyIElJSVwiLFxuICAgIDk6IFwiU2lsdmVyIElJXCIsXG4gICAgMTA6IFwiU2lsdmVyIElcIixcbiAgICAxMTogXCJHb2xkIFZcIixcbiAgICAxMjogXCJHb2xkIElWXCIsXG4gICAgMTM6IFwiR29sZCBJSUlcIixcbiAgICAxNDogXCJHb2xkIElJXCIsXG4gICAgMTU6IFwiR29sZCBJXCIsXG4gICAgMTY6IFwiUGxhdGludW0gVlwiLFxuICAgIDE3OiBcIlBsYXRpbnVtIElWXCIsXG4gICAgMTg6IFwiUGxhdGludW0gSUlJXCIsXG4gICAgMTk6IFwiUGxhdGludW0gSUlcIixcbiAgICAyMDogXCJQbGF0aW51bSBJXCIsXG4gICAgMjE6IFwiRGlhbW9uZCBWXCIsXG4gICAgMjI6IFwiRGlhbW9uZCBJVlwiLFxuICAgIDIzOiBcIkRpYW1vbmQgSUlJXCIsXG4gICAgMjQ6IFwiRGlhbW9uZCBJSVwiLFxuICAgIDI1OiBcIkRpYW1vbmQgSVwiLFxuICAgIDI2OiBcIlJ1YnkgVlwiLFxuICAgIDI3OiBcIlJ1YnkgSVZcIixcbiAgICAyODogXCJSdWJ5IElJSVwiLFxuICAgIDI5OiBcIlJ1YnkgSUlcIixcbiAgICAzMDogXCJSdWJ5IElcIixcbiAgICAzMTogXCJNYXN0ZXJcIixcbn07XG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0ge1xuICAgIOyVhO2drDogXCJhaGV1aVwiLFxuICAgIOyXhOykgOyLnTogXCJ1bW1cIixcbiAgICBBZGE6IFwiYWRhXCIsXG4gICAgXCJBbGdvbCA2OFwiOiBcImFcIixcbiAgICBBUEVDT0RFOiBcImFwZVwiLFxuICAgIEFzc2VtYmx5OiBcIm9cIixcbiAgICBcIkFzc2VtYmx5ICgzMmJpdClcIjogXCJvXCIsXG4gICAgXCJBc3NlbWJseSAoNjRiaXQpXCI6IFwib1wiLFxuICAgIGF3azogXCJhd2tcIixcbiAgICBCYXNoOiBcInNoXCIsXG4gICAgYmM6IFwiYmNcIixcbiAgICBCZWZ1bmdlOiBcImJmXCIsXG4gICAgQm9vOiBcImJvb1wiLFxuICAgIFwiQnJhaW5mKiprXCI6IFwiYmZcIixcbiAgICBDOiBcImNcIixcbiAgICBcIkMjXCI6IFwiY3NcIixcbiAgICBcIkMjIDMuMCAoTW9ubylcIjogXCJjc1wiLFxuICAgIFwiQyMgNi4wIChNb25vKVwiOiBcImNzXCIsXG4gICAgXCJDIyA5LjAgKC5ORVQpXCI6IFwiY3NcIixcbiAgICBcIkMrK1wiOiBcImNjXCIsXG4gICAgXCJDKysxMVwiOiBcImNjXCIsXG4gICAgXCJDKysxMSAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzE0XCI6IFwiY2NcIixcbiAgICBcIkMrKzE0IChDbGFuZylcIjogXCJjY1wiLFxuICAgIFwiQysrMTdcIjogXCJjY1wiLFxuICAgIFwiQysrMTcgKENsYW5nKVwiOiBcImNjXCIsXG4gICAgXCJDKysyMFwiOiBcImNjXCIsXG4gICAgXCJDKysyMCAoQ2xhbmcpXCI6IFwiY2NcIixcbiAgICBcIkMrKzk4XCI6IFwiY2NcIixcbiAgICBcIkMrKzk4IChDbGFuZylcIjogXCJjY1wiLFxuICAgIEMxMTogXCJjXCIsXG4gICAgXCJDMTEgKENsYW5nKVwiOiBcImNcIixcbiAgICBDMng6IFwiY1wiLFxuICAgIFwiQzJ4IChDbGFuZylcIjogXCJjXCIsXG4gICAgQzkwOiBcImNcIixcbiAgICBcIkM5MCAoQ2xhbmcpXCI6IFwiY1wiLFxuICAgIEM5OTogXCJjXCIsXG4gICAgXCJDOTkgKENsYW5nKVwiOiBcImNcIixcbiAgICBDb2JvbDogXCJjb2JcIixcbiAgICBDb2JyYTogXCJjb2JyYVwiLFxuICAgIENvcTogXCJ2XCIsXG4gICAgQ3J5c3RhbDogXCJjclwiLFxuICAgIEQ6IFwiZFwiLFxuICAgIFwiRCAoTERDKVwiOiBcImRcIixcbiAgICBcIkYjXCI6IFwiZnNcIixcbiAgICBcIkYjICguTkVUKVwiOiBcImZzXCIsXG4gICAgXCJGIyAoTW9ubylcIjogXCJmc1wiLFxuICAgIEZvcnRyYW46IFwiZlwiLFxuICAgIEZyZWVCQVNJQzogXCJiYXNcIixcbiAgICBHbzogXCJnb1wiLFxuICAgIFwiR28gKGdjY2dvKVwiOiBcImdvXCIsXG4gICAgR29sZnNjcmlwdDogXCJnc1wiLFxuICAgIEhhc2tlbGw6IFwiaHNcIixcbiAgICBIYXhlOiBcInB5XCIsXG4gICAgSU5URVJDQUw6IFwiaVwiLFxuICAgIEphdmE6IFwiamF2YVwiLFxuICAgIFwiSmF2YSAxMVwiOiBcImphdmFcIixcbiAgICBcIkphdmEgMTVcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDhcIjogXCJqYXZhXCIsXG4gICAgXCJKYXZhIDggKE9wZW5KREspXCI6IFwiamF2YVwiLFxuICAgIEtvdGxpbjogXCJrdFwiLFxuICAgIFwiS290bGluIChKVk0pXCI6IFwia3RcIixcbiAgICBcIktvdGxpbiAoTmF0aXZlKVwiOiBcImt0XCIsXG4gICAgTE9MQ09ERTogXCJsb2xcIixcbiAgICBMdWE6IFwibHVhXCIsXG4gICAgTWluZWNyYWZ0OiBcIm1jYVwiLFxuICAgIE5lbWVybGU6IFwiblwiLFxuICAgIE5pbXJvZDogXCJuaW1cIixcbiAgICBcIm5vZGUuanNcIjogXCJqc1wiLFxuICAgIFwiT2JqZWN0aXZlLUNcIjogXCJtXCIsXG4gICAgXCJPYmplY3RpdmUtQysrXCI6IFwibW1cIixcbiAgICBPQ2FtbDogXCJtbFwiLFxuICAgIFBhc2NhbDogXCJwYXNcIixcbiAgICBQZXJsOiBcInBsXCIsXG4gICAgUEhQOiBcInBocFwiLFxuICAgIFBpa2U6IFwicGlrZVwiLFxuICAgIFB5UHk6IFwicHlcIixcbiAgICBQeVB5MjogXCJweVwiLFxuICAgIFB5UHkzOiBcInB5XCIsXG4gICAgUHl0aG9uOiBcInB5XCIsXG4gICAgXCJQeXRob24gMlwiOiBcInB5XCIsXG4gICAgXCJQeXRob24gM1wiOiBcInB5XCIsXG4gICAgUmhpbm86IFwianNcIixcbiAgICBSdWJ5OiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOFwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDEuOVwiOiBcInJiXCIsXG4gICAgXCJSdWJ5IDJcIjogXCJyYlwiLFxuICAgIFJ1c3Q6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAxNVwiOiBcInJzXCIsXG4gICAgXCJSdXN0IDIwMThcIjogXCJyc1wiLFxuICAgIFwiUnVzdCAyMDE5XCI6IFwicnNcIixcbiAgICBcIlJ1c3QgMjAyMVwiOiBcInJzXCIsXG4gICAgU2NhbGE6IFwic2NhbGFcIixcbiAgICBTY2hlbWU6IFwic2NtXCIsXG4gICAgc2VkOiBcInNlZFwiLFxuICAgIFN3aWZ0OiBcInN3aWZ0XCIsXG4gICAgU3lzdGVtVmVyaWxvZzogXCJzdlwiLFxuICAgIFRjbDogXCJ0Y2xcIixcbiAgICBUZXh0OiBcInR4dFwiLFxuICAgIFR5cGVTY3JpcHQ6IFwidHNcIixcbiAgICBcIlZCLk5FVCAyLjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZCLk5FVCA0LjAgKE1vbm8pXCI6IFwidmJcIixcbiAgICBcIlZpc3VhbCBCYXNpY1wiOiBcInZiXCIsXG4gICAgXCJWaXN1YWwgQmFzaWMgKC5ORVQpXCI6IFwidmJcIixcbiAgICBXaGl0ZXNwYWNlOiBcIndzXCIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHNlbmRDaHJvbWVNZXNzYWdlIH0gZnJvbSBcIi4vdXRpbHMvY2hyb21lVXRpbHNcIjtcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuLCBnZXRVc2VySW5mbyB9IGZyb20gXCIuL0FQSS9nZXRSZXFBUElcIjtcbmV4cG9ydCBmdW5jdGlvbiBHaXRodWIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IGdpdGh1YkNvZGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XG4gICAgICAgIGlmICghZ2l0aHViQ29kZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCBHZXQgR0lUSFVCIEF1dGhvcml6YXRpb24gQ29kZSBcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRBY2Nlc3NUb2tlbihnaXRodWJDb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB5aWVsZCBnZXRVc2VySW5mbyhyZXMuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBzZW5kQ2hyb21lTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiUFNIRUxQRVJfVE9LRU5cIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5HaXRodWIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==