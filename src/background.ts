import { Octokit } from "octokit";
import {
  getChromeLocalStorage,
  getChromeMessage,
  setChromeLocalStorage,
} from "./chromeUtils";

const messageHandler = async (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    setChromeLocalStorage({ GITHUB_TOKEN: req.token });

    const octokit = new Octokit({
      auth: req.token,
    });
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log(login);
  }
};

getChromeMessage(messageHandler);
