import { getChromeMessage, setChromeLocalStorage } from "./chromeUtils";
const messageHandler = async (req: any, sender: any, sendResponse: any) => {
  console.log(req);
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    setChromeLocalStorage({ GITHUB_TOKEN: req.token });
    setChromeLocalStorage({ USER: req.user.login });
  }
};
try {
  getChromeMessage(messageHandler);
} catch (e) {
  console.log(e);
}
