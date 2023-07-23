/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.action.onClicked.addListener(function () {
    chrome.tabs.create({ url: "index.html" });
});
const messageHandler = (req, sender, sendResponse) => {
    if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
        chrome.storage.local.set({ GITHUB_TOKEN: req.token });
        console.log("성공");
        chrome.storage.local.get("GITHUB_TOKEN", (data) => {
            console.log(data);
        });
    }
};
chrome.runtime.onMessage.addListener(messageHandler);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1DQUFtQyx5QkFBeUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1BTSGVscGVyLy4vc3JjL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBcImluZGV4Lmh0bWxcIiB9KTtcbn0pO1xuY29uc3QgbWVzc2FnZUhhbmRsZXIgPSAocmVxLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEgJiYgcmVxLmlzU3VjY2VzcyAmJiByZXEuYWN0aW9uID09PSBcIlBTSEVMUEVSX1RPS0VOXCIpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgR0lUSFVCX1RPS0VOOiByZXEudG9rZW4gfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7ISx6rO1XCIpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJHSVRIVUJfVE9LRU5cIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==