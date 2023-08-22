import {
  getChromeLocalStorage,
  getChromeMessage,
  setChromeLocalStorage,
} from "./chromeUtils";
const messageHandler = async (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    console.log(req.user.login);
    setChromeLocalStorage({ GITHUB_TOKEN: req.token });
    setChromeLocalStorage({ USER: req.user.login });
  }
};

getChromeMessage(messageHandler);
