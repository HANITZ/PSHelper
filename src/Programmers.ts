import { $, enrollEvent, getElById } from "./utils/jsUtils";

class Programmers {
  constructor(link: string) {
    if (link.includes("/learn/courses/30/lessons")) {
      this.init();
    }
  }

  init = () => {
    this.setEvents();
  };
  setEvents = () => {
    const submitButton = getElById("submit-code");
    if (!submitButton) return;

    enrollEvent(submitButton, "click", () => {
      this.checkSuccess();
    });
  };
  checkSuccess = () => {
    const interval = setInterval(() => {
      const modalText = $("div.modal-header > h4");
      if (!modalText) return;
      if (modalText.innerText.includes("정답")) {
        clearInterval(interval);
      }
    }, 1000);
  };
}

new Programmers(window.location.href);
