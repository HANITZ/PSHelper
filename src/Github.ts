import { closeCurrentTab, sendChromeMessage } from "./chromeUtils";
import { getAccessToken } from "./getReqAPI";

export async function Github() {
  const url = new URL(window.location.href);
  const githubCode = url.searchParams.get("code");
  if (!githubCode) throw new Error("Failed Get GITHUB Authorization Code ");
  try {
    const res = await getAccessToken(githubCode);
    if (res) {
      sendChromeMessage({
        closeWebPage: true,
        isSuccess: true,
        token: res.access_token,
        action: "PSHELPER_TOKEN",
      });
      window.close();
    }
  } catch (error) {
    throw error;
  }
}

Github();
