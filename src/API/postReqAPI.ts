import { getChromeLocalStorage } from "../chromeUtils";

export const postNewRepo = async (name: string): Promise<any> => {
  const host = "https://api.github.com/user/repos";
  const data = JSON.stringify({
    name,
    private: true,
    auto_init: true,
    description: "알고리즘 자동 기록 보관소",
  });
  type Token = {
    GITHUB_TOKEN: string;
  };
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  if (!GITHUB_TOKEN) throw new Error("Token 정보를 가져오지 못했습니다.");
  const res = await (
    await fetch(host, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: data,
    })
  ).json();
  return res;
};
