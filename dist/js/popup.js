/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chromeUtils.ts":
/*!****************************!*\
  !*** ./src/chromeUtils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCurrentTab: () => (/* binding */ closeCurrentTab),
/* harmony export */   createChromeTabs: () => (/* binding */ createChromeTabs),
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
const getChromeLocalStorage = (key, fn) => {
    if (fn) {
        chrome.storage.local.get([key], fn);
        return;
    }
    return chrome.storage.local.get([key]);
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
/* harmony export */   enrollEvent: () => (/* binding */ enrollEvent),
/* harmony export */   getElById: () => (/* binding */ getElById),
/* harmony export */   isObjEmpty: () => (/* binding */ isObjEmpty)
/* harmony export */ });
const $ = (targetName, parentEl) => {
    if (parentEl)
        return parentEl.querySelector(targetName);
    return document.querySelector(targetName);
};
const $$ = (targetName, parentEl) => {
    if (parentEl)
        return parentEl.querySelectorAll(targetName);
    return document.querySelectorAll(targetName);
};
const getElById = (targetId) => {
    return document.getElementById(targetId);
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
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chromeUtils */ "./src/chromeUtils.ts");
/* harmony import */ var _utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/jsUtils */ "./src/utils/jsUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Popup {
    constructor(element) {
        this.isLogined = false;
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            if (this.isLogined) {
                const a = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    const token = yield (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.getChromeLocalStorage)("GITHUB_TOKEN");
                    if (token) {
                        (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.createChromeTabs)({
                            url: `chrome-extension://${"hnebgpjnajdmkcncbgfahhnhaennabjb"}/home.html`,
                            active: true,
                        });
                        this.element.innerHTML = this.getLoginedTemplate();
                        clearInterval(a);
                    }
                }), 1000);
                return;
            }
            this.element.innerHTML = this.getBasicTemplate();
            this.setEvent();
            console.log("토큰 없음");
            return;
        });
        this.setEvent = () => {
            const enrollEl = (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.getElById)("enroll");
            if (!enrollEl)
                throw new Error("enrollEl 엘리먼트를 찾지 못했습니다.");
            (0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.enrollEvent)(enrollEl, "click", () => __awaiter(this, void 0, void 0, function* () {
                (0,_chromeUtils__WEBPACK_IMPORTED_MODULE_0__.createChromeTabs)({
                    url: `https://github.com/login/oauth/authorize?client_id=${"2f17ed4238f44ec245f1"}`,
                    active: false,
                });
                this.isLogined = true;
                this.init();
            }));
        };
        this.getLoginedTemplate = () => {
            return `
    <h1>PSHELPER</h1>
    `;
        };
        this.getBasicTemplate = () => {
            return `
    <h1>PSHELPER</h1>
    <button id="enroll">Connect with GitHub</button>`;
        };
        this.element = element;
        this.init();
    }
}
new Popup((0,_utils_jsUtils__WEBPACK_IMPORTED_MODULE_1__.$)("#root"));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYyxTQUFJLElBQUksU0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ087QUFDUDtBQUNBLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5QkFBeUI7QUFDekIsNkNBQTZDO0FBQzdDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDeUU7QUFDYjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUVBQXFCO0FBQzdEO0FBQ0Esd0JBQXdCLDhEQUFnQjtBQUN4Qyx1REFBdUQsa0NBQXlCLENBQUM7QUFDakY7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZCQUE2Qix5REFBUztBQUN0QztBQUNBO0FBQ0EsWUFBWSwyREFBVztBQUN2QixnQkFBZ0IsOERBQWdCO0FBQ2hDLCtFQUErRSxzQkFBNEIsQ0FBQztBQUM1RztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaURBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy9jaHJvbWVVdGlscy50cyIsIndlYnBhY2s6Ly9QU0hlbHBlci8uL3NyYy91dGlscy9qc1V0aWxzLnRzIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QU0hlbHBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1BTSGVscGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUFNIZWxwZXIvLi9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNocm9tZVRhYnMgPSAoX2EpID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoX2EsIGZuKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgaWYgKGZuID09PSB2b2lkIDApIHsgZm4gPSAoKSA9PiB7IH07IH1cbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGZuKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lU3luY1N0b3JhZ2UgPSAoa2V5LCBmbikgPT4ge1xuICAgIGlmIChmbikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSwgZm4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENocm9tZUxvY2FsU3RvcmFnZSA9IChfYSwgZm4pID0+IHtcbiAgICB2YXIgcHJvcHMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBpZiAoZm4gPT09IHZvaWQgMCkgeyBmbiA9ICgpID0+IHsgfTsgfVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGZuKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlID0gKGtleSwgZm4pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtrZXldLCBmbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChba2V5XSk7XG59O1xuZXhwb3J0IGNvbnN0IHNlbmRDaHJvbWVNZXNzYWdlID0gKF9hKSA9PiB7XG4gICAgdmFyIHByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hyb21lTWVzc2FnZSA9IChmbikgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmbik7XG59O1xuZXhwb3J0IGNvbnN0IGNsb3NlQ3VycmVudFRhYiA9IChwYXJlbnQpID0+IHtcbiAgICBsZXQgdGhhdCA9IHBhcmVudDtcbiAgICBjaHJvbWUudGFicyA9IHBhcmVudDtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICBpZiAodGFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFiSWQgPSB0YWJzWzBdLmlkO1xuICAgICAgICAgICAgaWYgKCF0YWJJZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUodGFiSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIu2OmOydtOyngCDri6vtnphcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCAkID0gKHRhcmdldE5hbWUsIHBhcmVudEVsKSA9PiB7XG4gICAgaWYgKHBhcmVudEVsKVxuICAgICAgICByZXR1cm4gcGFyZW50RWwucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKTtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXROYW1lKTtcbn07XG5leHBvcnQgY29uc3QgJCQgPSAodGFyZ2V0TmFtZSwgcGFyZW50RWwpID0+IHtcbiAgICBpZiAocGFyZW50RWwpXG4gICAgICAgIHJldHVybiBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpO1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldE5hbWUpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRFbEJ5SWQgPSAodGFyZ2V0SWQpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xufTtcbmV4cG9ydCBjb25zdCBlbnJvbGxFdmVudCA9IChlbCwgdHlwZSwgZm4pID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbn07XG5leHBvcnQgY29uc3QgaXNPYmpFbXB0eSA9IChvYmopID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaikgPT09IEpTT04uc3RyaW5naWZ5KHt9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgY3JlYXRlQ2hyb21lVGFicywgZ2V0Q2hyb21lTG9jYWxTdG9yYWdlLCB9IGZyb20gXCIuL2Nocm9tZVV0aWxzXCI7XG5pbXBvcnQgeyAkLCBlbnJvbGxFdmVudCwgZ2V0RWxCeUlkIH0gZnJvbSBcIi4vdXRpbHMvanNVdGlsc1wiO1xuY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2luZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IHNldEludGVydmFsKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB5aWVsZCBnZXRDaHJvbWVMb2NhbFN0b3JhZ2UoXCJHSVRIVUJfVE9LRU5cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2hyb21lVGFicyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgY2hyb21lLWV4dGVuc2lvbjovLyR7cHJvY2Vzcy5lbnYuQ0hST01FX05VTUJFUn0vaG9tZS5odG1sYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmdldExvZ2luZWRUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCAxMDAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nZXRCYXNpY1RlbXBsYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIu2GoO2BsCDsl4bsnYxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW5yb2xsRWwgPSBnZXRFbEJ5SWQoXCJlbnJvbGxcIik7XG4gICAgICAgICAgICBpZiAoIWVucm9sbEVsKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVucm9sbEVsIOyXmOumrOuovO2KuOulvCDssL7sp4Ag66q77ZaI7Iq164uI64ukLlwiKTtcbiAgICAgICAgICAgIGVucm9sbEV2ZW50KGVucm9sbEVsLCBcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDaHJvbWVUYWJzKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZT9jbGllbnRfaWQ9JHtwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lEfWAsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2luZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldExvZ2luZWRUZW1wbGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgPGgxPlBTSEVMUEVSPC9oMT5cbiAgICBgO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEJhc2ljVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgIDxoMT5QU0hFTFBFUjwvaDE+XG4gICAgPGJ1dHRvbiBpZD1cImVucm9sbFwiPkNvbm5lY3Qgd2l0aCBHaXRIdWI8L2J1dHRvbj5gO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG59XG5uZXcgUG9wdXAoJChcIiNyb290XCIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==