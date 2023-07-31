import { getChromeMessage, setChromeStorage } from "./chromeUtils";

const messageHandler = (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    setChromeStorage({ GITHUB_TOKEN: req.token });

    console.log(req.token);
  }
};

getChromeMessage(messageHandler);
