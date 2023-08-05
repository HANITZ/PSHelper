import { Octokit } from "octokit";
import { getChromeMessage, setChromeLocalStorage } from "./chromeUtils";

const messageHandler = async (req: any, sender: any, sendResponse: any) => {
  if (req && req.isSuccess && req.action === "PSHELPER_TOKEN") {
    setChromeLocalStorage({ GITHUB_TOKEN: req.token });
    
    const octokit = new Octokit({
      auth: req.token,
    });
    const res = await octokit.request("GET /user/repos");
  }
};

const a = getChromeMessage(messageHandler);
