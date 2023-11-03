import { sendChromeMessage } from "../../utils/chromeUtils";
import { getAccessToken, getUserInfo } from "../../API/getReqAPI";

export default async function Github() {
  const url = new URL(window.location.href);
  const githubCode = url.searchParams.get("code");
  if (!githubCode) throw new Error("Failed Get GITHUB Authorization Code ");
  try {
    const res = await getAccessToken(githubCode);
    const user = await getUserInfo(res.access_token);
    if (res) {
      await sendChromeMessage({
        token: res.access_token,
        user,
        action: "PSHELPER_TOKEN",
      });
      window.close();
    }
  } catch (error) {
    throw error;
  }
}
Github();
