import { getChromeLocalStorage } from "../chromeUtils";
import { b64EncodeUnicode } from "../utils/jsUtils";

export const postNewRepo = async (name: string): Promise<any> => {
  const host = "https://api.github.com/user/repos";
  const data = JSON.stringify({
    name,
    private: true,
    auto_init: true,
    description: "알고리즘 자동 기록 보관소",
  });

  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  if (!GITHUB_TOKEN) throw new Error("Token 정보를 가져오지 못했습니다.");
  const res = await (
    await fetch(host, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: data,
    })
  ).json();
  return res;
};
export type User = {
  USER: string;
};
type Token = {
  GITHUB_TOKEN: string;
};
export type repoNameObj = {
  repoName: string;
};

// export type NewBlob = {
//   path: string;
//   sha: string;
//   mode: string;
//   type: string;
// };
export const createBlob = async (
  content: string,
  fileName: string,
  directory: string
): Promise<any> => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const path = `${directory}/${fileName}`;
  if (!GITHUB_TOKEN) throw new Error("Token 정보를 가져오지 못했습니다.");
  const host = `https://api.github.com/repos/${user}/${repoName}/git/blobs`;
  const data = JSON.stringify({
    content: b64EncodeUnicode(content),
    encoding: "base64",
  });
  const res = await (
    await fetch(host, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: data,
    })
  ).json();
  return { path, sha: res.sha, mode: "100644", type: "blob" };
};

type CreateTree = (refSHA: string, tree_items: any[]) => Promise<any>;
export const createTree: CreateTree = async (refSHA, tree_items) => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const host = `https://api.github.com/repos/${user}/${repoName}/git/trees`;
  const data = JSON.stringify({ tree: tree_items, base_tree: refSHA });
  const res = await (
    await fetch(host, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: data,
    })
  ).json();
  return res.sha;
};

type CreateCommit = (
  message: string,
  treeSHA: string,
  refSHA: string
) => Promise<any>;
export const createCommit: CreateCommit = async (message, treeSHA, refSHA) => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const host = `https://api.github.com/repos/${user}/${repoName}/git/commits`;
  const data = JSON.stringify({ message, tree: treeSHA, parent: [refSHA] });
  const res = await (
    await fetch(host, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      body: data,
    })
  ).json();
  return res.sha;
};

type UpdateHead = (
  ref: string,
  commitSHA: string,
  force?: boolean
) => Promise<any>;
export const updateHead: UpdateHead = async (ref, commitSHA, force = true) => {
  const { USER: user } = (await getChromeLocalStorage("USER")) as User;
  const { repoName } = (await getChromeLocalStorage("repoName")) as repoNameObj;
  const { GITHUB_TOKEN } = (await getChromeLocalStorage(
    "GITHUB_TOKEN"
  )) as Token;
  const host = `https://api.github.com/repos/${user}/${repoName}/git/refs/heads/main`;
  const data = JSON.stringify({ sha: commitSHA, force });
  const res = await (
    await fetch(host, {
      method: "PATCH",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: data,
    })
  ).json();
  return res;
};
