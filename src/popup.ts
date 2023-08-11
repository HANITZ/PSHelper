import {
  createChromeTabs,
  getChromeLocalStorage,
  getChromeMessage,
} from "./chromeUtils";
import { $, enrollEvent, getElById, isObjEmpty } from "./utils/jsUtils";

class Popup {
  element: HTMLElement | null;
  isLogined: boolean = false;
  constructor(element: HTMLElement | null) {
    this.element = element;
    this.init();
  }

  init = async () => {
    console.log(this.isLogined);
    if (this.isLogined) {
      const a = setInterval(async () => {
        const token = await getChromeLocalStorage("GITHUB_TOKEN");
        if (token) {
          createChromeTabs({
            url: `chrome-extension://${process.env.CHROME_NUMBER}/home.html`,
            active: true,
          });
          this.element!.innerHTML = this.getLoginedTemplate();
          clearInterval(a);
        }
      }, 1000);
      return;
    }

    this.element!.innerHTML = this.getBasicTemplate();
    this.setEvent();
    console.log("토큰 없음");
    return;
  };

  setEvent = () => {
    const enrollEl = getElById("enroll");
    if (!enrollEl) throw new Error("enrollEl 엘리먼트를 찾지 못했습니다.");
    enrollEvent(enrollEl, "click", async () => {
      createChromeTabs({
        url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
        active: false,
      });
      this.isLogined = true;
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
    <button id="enroll">Connect with GitHub</button>`;
  };
}
new Popup($("#root"));
