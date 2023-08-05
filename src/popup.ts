import {
  createChromeTabs,
  getChromeLocalStorage,
  getChromeMessage,
} from "./chromeUtils";
import { $, enrollEvent, getElById, isObjEmpty } from "./utils/jsUtils";

class Popup {
  element: HTMLElement | null;
  constructor(element: HTMLElement | null) {
    this.element = element;
    this.init();
  }

  init = async () => {
    const token = await getChromeLocalStorage("GITHUB_TOKEN");
    if (!token) throw new Error("Not Found GITHUB Token");
    if (isObjEmpty(token)) {
      this.element!.innerHTML = this.getBasicTemplate();
      this.setEvent();
      console.log("토큰 없음");
      return;
    }

    console.log("토큰있음");
    this.element!.innerHTML = this.getLoginedTemplate();
  };

  setEvent = () => {
    const enrollEl = getElById("enroll");
    if (!enrollEl) throw new Error("enrollEl 엘리먼트를 찾지 못했습니다.");
    enrollEvent(enrollEl, "click", () => {
      createChromeTabs({
        url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
        active: false,
      });
      this.init();
    });
  };
  getLoginedTemplate = () => {
    return `
    <h1>PSHELPER</h1>
    `;
  };
  getBasicTemplate = () => {
    return `
    <h1>PSHELPER</h1>
    <button id="enroll">Enroll GitHub</button>`;
  };
}
new Popup($("#root"));
