import { createChromeTabs, getChromeLocalStorage } from "./chromeUtils";
import { $, enrollEvent } from "./utils/jsUtils";
import "./popup.css";
import { isObjEmpty } from "./utils/jsUtils";
import { $$ } from "./utils/jsUtils";

class Popup {
  element: HTMLElement | null;
  isLogined: boolean = false;
  constructor(element: HTMLElement | null) {
    this.element = element;
    this.setEvent();
    this.init();
    this.setOption();
  }

  setOption = () => {};

  init = async () => {
    console.log("시작");
    if (await this.checkLogin()) {
      const a = setInterval(async () => {
        const token = await getChromeLocalStorage("GITHUB_TOKEN");
        const user = await getChromeLocalStorage("USER");
        console.log(user);
        console.log(token);
        // createChromeTabs({
        //   url: `chrome-extension://${process.env.CHROME_NUMBER}/home.html`,
        //   active: false,
        // });
        clearInterval(a);
      }, 1000);
      return;
    }

    console.log("토큰 없음");
    return;
  };

  checkLogin = async () => {
    const user = await getChromeLocalStorage("USER");
    if (isObjEmpty(user)) {
      return false;
    }
    return true;
  };

  setEvent = () => {
    const enrollElement = $(".logo-button");
    enrollEvent(enrollElement, "click", async () => {
      createChromeTabs({
        url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
        active: false,
      });
      this.isLogined = true;
      this.init();
    });
    // type Select
    const selectTypeElement = $(".dropdown-select-type");
    const selectTypeText = $(".select-type") as HTMLInputElement;

    enrollEvent(selectTypeElement, "click", () => {
      selectTypeElement.classList.toggle("active");
    });

    enrollEvent(selectTypeText, "blur", () => {
      selectTypeElement.classList.remove("active");
    });

    const typeOptions = $$(".option-type");
    typeOptions.forEach((option) => {
      enrollEvent(option, "mouseover", (event) => {
        selectTypeText.value = option.innerText;
      });
    });

    // repo Select
    const selectRepoElement = $(".dropdown-select-repo");
    const selectRepoText = $(".select-repo") as HTMLInputElement;

    enrollEvent(selectRepoElement, "click", () => {
      selectRepoElement.classList.toggle("active");
    });

    enrollEvent(selectRepoText, "blur", () => {
      selectRepoElement.classList.remove("active");
    });

    const repoOptions = $$(".option-repo");
    repoOptions.forEach((option) => {
      enrollEvent(option, "mouseover", (event) => {
        selectRepoText.value = option.innerText;
      });
    });
  };
}
try {
  new Popup($("#root"));
} catch (e) {
  throw e;
}
