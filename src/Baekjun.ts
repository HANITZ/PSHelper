import {
  $,
  $$,
  createTimer,
  enrollEvent,
  getTimeDiff,
  getTimeNow,
  hasElement,
  isObjEmpty,
} from "./utils/jsUtils";
import "./Baekjun.css";
import {
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "./chromeUtils";
import { IsTimer } from "./popup";

type BaekjunProblemId = {
  BaekjunProblemId: string;
};

type BaekjunTime = {
  baekjunTime: number;
};

type SubmitedProblem = {
  submitedProblem: string;
};

class Baekjun {
  constructor() {
    this.init();
    this.checkSubmited();
  }

  getProblemNumber = (): string => {
    const problemId = $(
      "ul.problem-menu > li:nth-child(1) > a"
    ).innerText.trim();
    return problemId.substring(0, problemId.length - 1);
  };

  checkSubmited = async () => {
    const { submitedProblem } = (await getChromeLocalStorage(
      "submitedProblem"
    )) as SubmitedProblem;
    console.log(submitedProblem);
    if (submitedProblem && submitedProblem === this.getProblemNumber()) {
      deleteChromeLocalStorage("submitedProblem");
      this.afterSubmit();
    }
  };
  checkSuccess = () => {
    const resultMsg = $(".result-text").innerText;
    if (resultMsg === "맞았습니다!!") {
      return true;
    }
    return false;
  };
  afterSubmit = async () => {
    this.startLoading();
    const checkSuccessInterval = setInterval(() => {
      const statusTable = $("#status-table") as HTMLTableElement;
      const isCorrectElement = statusTable.rows[1].cells[3] as HTMLElement;
      if (hasElement(".result-ac", isCorrectElement)) {
        if (this.checkSuccess()) {
          clearInterval(checkSuccessInterval);
          this.afterSuccess();
          return;
        }

        clearInterval(checkSuccessInterval);
        this.afterFail();
      }
    }, 2000);
  };

  afterSuccess = () => {
    this.renderSuccessMark();
    this.getSolvedData();
    const categories = $$(".CodeMirror-line > span > span");
  };

  afterFail = () => {
    this.renderFailMark();
  };

  getSolvedData = () => {};

  startLoading = () => {
    const resultElement = $(".result");

    resultElement.insertAdjacentHTML(
      "beforeend",
      `
      <div class="loading-solve">
      <div></div>
      <div></div>
      <div></div>
      </div>
    `
    );
  };

  init = async () => {
    const { BaekjunProblemId: baekjunProblemId } = (await getChromeLocalStorage(
      "BaekjunProblemId"
    )) as BaekjunProblemId;

    if (!baekjunProblemId || !this.checkProblemId(baekjunProblemId)) {
      setChromeLocalStorage({
        BaekjunProblemId: window.location.href.split(
          "https://www.acmicpc.net/problem/"
        )[1],
      });
      setChromeLocalStorage({ baekjunTime: getTimeNow() });
      return;
    }
  };

  checkProblemId = (id: string): boolean => {
    const splitedLink = window.location.href.split(/=|&|\//);
    if (splitedLink.includes(id)) {
      return true;
    }
    return false;
  };

  startSolving = async () => {
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
    if (isTimer) {
      this.setTimer();
    }
  };

  readyToSubmit = () => {
    this.setSubmitEvent();
  };

  setSubmitEvent = () => {
    const submitButton = $("#submit_button");

    enrollEvent(submitButton, "click", () => {
      setChromeLocalStorage({ submitedProblem: this.getProblemNumber() });
    });
  };

  parseCode = () => {
    const textAreaElement = $(".CodeMirror-code");
    console.log(textAreaElement.innerHTML);
  };

  setTimer = async () => {
    this.setTimerTemplate();

    const { baekjunTime } = (await getChromeLocalStorage(
      "baekjunTime"
    )) as BaekjunTime;
    getTimeDiff(baekjunTime, this.reRenderTime);
  };

  reRenderTime = (h: string, m: string, s: string) => {
    const timeElement = $(".timer");
    timeElement.innerText = `Timer: ${h}:${m}:${s} `;
  };

  setTimerTemplate = () => {
    const headerElement = $(".page-header");

    headerElement.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="timer-container" >
    <p class="timer"  ></p>
    </div>
    `
    );
  };

  renderFailMark = () => {
    const statusElement = $(".loading-solve");
    statusElement.className = "fail-solve";
  };

  renderSuccessMark = () => {
    const statusElement = $(".loading-solve");
    statusElement.className = "success-solve";
  };
}

const baekjun = new Baekjun();

if (window.location.href.includes("/problem/")) {
  baekjun.startSolving();
} else if (window.location.href.includes("/submit/")) {
  baekjun.readyToSubmit();
}
console.log("백준실행");
