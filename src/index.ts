
async function Git() {
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
  console.log(res.access_token);
}

Git();
