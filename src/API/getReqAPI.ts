import { getChromeLocalStorage } from "../chromeUtils";
import { User, repoNameObj } from "./postReqAPI";

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
export type repos = {
  [key: string]: string;
};
type Token = {
  GITHUB_TOKEN: string;
};
export const getUserRepos = async (): Promise<repos[]> => {
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  if (!GITHUB_TOKEN) throw new Error("Token 정보를 가져오지 못했습니다.");
  const res = await (
    await fetch("https://api.github.com/user/repos", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
  ).json();
  return res;
};

export const getDefaultBranch = async () => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const host = `https://api.github.com/repos/${user}/${repoName}`;
  const res = await (
    await fetch(host, {
      method: "get",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
  ).json();
  return res.default_branch;
};

export const getReference = async (branch = "main") => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const host = `https://api.github.com/repos/${user}/${repoName}/git/ref/heads/${branch}`;
  const res = await (
    await fetch(host, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
  ).json();
  return { refSHA: res.object.sha, ref: res.ref };
};
