/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

const messageHandler = (req, sender, sendResponse) => {
    if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
        chrome.storage.local.set({ GITHUB_TOKEN: req.token });
    }
};
chrome.runtime.onMessage.addListener(messageHandler);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMseUJBQXlCO0FBQzVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IChyZXEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcSAmJiByZXEuaXNTdWNjZXNzICYmIHJlcS5hY3Rpb24gPT09IFwiUFNIRUxQRVJfVE9LRU5cIikge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBHSVRIVUJfVE9LRU46IHJlcS50b2tlbiB9KTtcbiAgICB9XG59O1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==