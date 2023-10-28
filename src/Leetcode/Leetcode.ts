import { getChromeLocalStorage } from "../utils/chromeUtils";
import { $ } from "../utils/jsUtils";

class Leetcode {
  constructor() {
    this.init();
    this.setEvent();
  }

  init = async () => {
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as {isTimer: boolean}
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
