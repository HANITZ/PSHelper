const getUserInfo = async (token: Response) => {
  const host = "https://api.github.com/user";
  const res = await (
    await fetch(host, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `token ${token}`,
        Accept: "application/json",
      },
    })
  ).json();

  return res;
};

async function Github() {
  const url = new URL(window.location.href);
  const githubCode = url.searchParams.get("code");

  if (!githubCode) throw new Error("GITGUB인증실패");
  const getAccessToken = async (code: string): Promise<any> => {
    const res = await (
      await fetch("https://github.com/login/oauth/access_token", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      })
    ).json();

    return res;
  };

  const res = await getAccessToken(githubCode);
  chrome.runtime.sendMessage({
    closeWebPage: true,
    isSuccess: true,
    token: res.access_token,
    action: "PSHELPER_TOKEN",
  });
  chrome.runtime.onMessage.addListener((req: any) => {
    console.log(123);
  });
  getUserInfo(res.access_token);
  return res.access_token;
}

if (window.location.host === "github.com") {
  const token = Github();
}
