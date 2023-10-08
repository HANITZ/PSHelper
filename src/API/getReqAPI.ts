import { getProblemInfoBySolvedAcAPI } from "../background/backgroundAPI/getReqBackgroundAPI";
import { getChromeLocalStorage, sendChromeMessage } from "../utils/chromeUtils";
import { $, htmlEntityDecode } from "../utils/jsUtils";
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

export const getBaekjunSolvedData = async (
  submissionId: string
): Promise<string> => {
  const host = `https://www.acmicpc.net/source/download/${submissionId}`;
  const code = await (
    await fetch(host, {
      method: "get",
      headers: {
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
      },
    })
  ).text();
  return code;
};

export const getBaekjunProblemDescription = async (problemId: string) => {
  const host = `https://www.acmicpc.net/problem/${problemId}`;
  const doc = await (
    await fetch(host, {
      method: "get",
      headers: {
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
      },
    })
  ).text();
  const html = new DOMParser().parseFromString(doc, "text/html");
  const input = htmlEntityDecode($("#problem_input", html).innerHTML.trim());
  const output = htmlEntityDecode($("#problem_output", html).innerHTML.trim());
  const description = htmlEntityDecode(
    $("#problem_description", html).innerHTML.trim()
  );
  return { input, output, description };
};

export const getProblemInfoBySolvedAc = async (problemId: string) => {
  const data = await sendChromeMessage({
    action: "baekjun",
    task: "getProblemInfoBySolvedAc",
    problemId,
  });
  // 임시
  const a = getProblemInfoBySolvedAcAPI(problemId);
  console.log(a);
  //

  return data;
};
