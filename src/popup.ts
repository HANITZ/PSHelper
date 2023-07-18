import { $, getElById } from "./utils/getElement";

const enrollEl = getElById("enroll");
if (!enrollEl) throw new Error("enrollEl 엘리먼트를 찾지 못했습니다.");
enrollEl.addEventListener("click", () => {
  window.open(
    "https://github.com/login/oauth/authorize?client_id=2f17ed4238f44ec245f1"
  );
});

// chrome-extension://hnebgpjnajdmkcncbgfahhnhaennabjb/index.html
const clientId = "2f17ed4238f44ec245f1";
const clientSecret = "8c8c6a50541877de8ae16921d0b8286d52f97cbc";
