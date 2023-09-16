import { getChromeLocalStorage } from "./chromeUtils";
import { IsTimer } from "./popup";

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
    
  };

  setEvent = () => {};
}

new Leetcode();
