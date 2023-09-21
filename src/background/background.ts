
import { getChromeMessage, setChromeLocalStorage } from "../chromeUtils";
import { getProblemInfoBySolvedAcAPI } from "./backgroundAPI/getReqBackgroundAPI";

const messageHandler = (req: any, sender: any, sendResponse: any) => {
  console.log(req);
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    setChromeLocalStorage({
      GITHUB_TOKEN: req.token,
      USER: req.user.login,
      isUpload: true,
      isTimer: true,
    }).then(sendResponse({ success: true }));

    sendResponse({ success: true });
  } else if (
    req &&
    req.action === "baekjun" &&
    req.task === "getProblemInfoBySolvedAc"
  ) {
    getProblemInfoBySolvedAcAPI(req.problemId).then((res) => sendResponse(res));

    return true;
  }
};

chrome.runtime.onMessage.addListener(messageHandler);
