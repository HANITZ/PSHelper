chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({ url: "index.html" });
});

const messageHandler = (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    chrome.storage.local.set({ GITHUB_TOKEN: req.token });
    console.log("성공");
    chrome.storage.local.get("GITHUB_TOKEN", (data) => {
      console.log(data);
    });
  }
};

chrome.runtime.onMessage.addListener(messageHandler);
