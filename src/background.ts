const messageHandler = (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    chrome.storage.local.set({ GITHUB_TOKEN: req.token });
  }
};

chrome.runtime.onMessage.addListener(messageHandler);
