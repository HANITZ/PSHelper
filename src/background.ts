import { getChromeMessage, setChromeLocalStorage } from "./chromeUtils";
const messageHandler = async (req: any, sender: any, sendResponse: any) => {
  console.log(req);
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    await setChromeLocalStorage({ GITHUB_TOKEN: req.token });
    await setChromeLocalStorage({ USER: req.user.login });
    await setChromeLocalStorage({
      isUpload: false,
      isTimer: false,
    });
  }
};
try {
  getChromeMessage(messageHandler);
} catch (e) {
  console.log(e);
}
