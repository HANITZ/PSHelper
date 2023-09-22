import { getChromeLocalStorage } from "./utils/chromeUtils";
import { IsTimer } from "./popup";
import { $ } from "./utils/jsUtils";

class Leetcode {
  constructor() {
    this.init();
    this.setEvent();
  }

  init = async () => {
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
    if (isTimer) {
      this.setTimer();
    }
  };

  setTimer = () => {
    const nav = $("div");
    console.log(nav);
  };

  setEvent = () => {};
}

new Leetcode();
