import { getChromeMessage, setChromeLocalStorage } from "@utils";
import { getProblemInfoBySolvedAcAPI } from "./backgroundAPI/getReqBackgroundAPI";

const messageHandler = (req: any, sender: any, sendResponse: any) => {
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
    setChromeLocalStorage({
      GITHUB_TOKEN: req.token,
      USER: req.user.login,
    }).then(sendResponse({ success: true }));
    sendResponse({ success: true });
  } else if (
    req.action === "baekjun" &&
    req.task === "getProblemInfoBySolvedAc"
  ) {
    getProblemInfoBySolvedAcAPI(req.problemId).then((res) => sendResponse(res));
    return true;
  } else if (req.action === "repoName") {
    if (req.method === "post") {
      setChromeLocalStorage({
        repoName: req.repoName,
      });
    }
  } else if (req.action === "Timer" && req.method === "post") {
    console.log(req);
    setChromeLocalStorage({ Timer: req.isActive });
  } else if (req.action === "Upload" && req.method === "post") {
    setChromeLocalStorage({ Upload: req.isActive });
  }
};

getChromeMessage(messageHandler);
