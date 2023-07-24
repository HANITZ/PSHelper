import { createChromeTabs } from "./chromeUtils";
import { getAccessToken } from "./getReqAPI";

async function Github() {
  const url = new URL(window.location.href);
  const githubCode = url.searchParams.get("code");

  if (!githubCode) throw new Error("GITGUB인증실패");

  const res = await getAccessToken(githubCode);
  if (res) {
    createChromeTabs({
      closeWebPage: true,
      isSuccess: true,
      token: res.access_token,
      action: "PSHELPER_TOKEN",
    });
  }
}

if (window.location.host === "github.com") {
  Github();
}
