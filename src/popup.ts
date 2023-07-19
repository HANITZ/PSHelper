import { $, getElById } from "./utils/getElement";

const enrollEl = getElById("enroll");
if (!enrollEl) throw new Error("enrollEl 엘리먼트를 찾지 못했습니다.");
enrollEl.addEventListener("click", () => {
  chrome.tabs.create({
    url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo`,
  });
});