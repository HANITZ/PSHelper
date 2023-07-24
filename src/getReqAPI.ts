export const getUserInfo = async (token: Response): Promise<any> => {
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

export const getAccessToken = async (code: string): Promise<any> => {
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
