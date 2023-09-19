import {
  $,
  $$,
  createTimer,
  enrollEvent,
  getTimeDiff,
  getTimeNow,
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
  tmp = () => {
    // const table = $("#status-table") as HTMLTableElement;
    // function convertResultTableHeader(header: string) {
    //   switch (header) {
    //     case "문제번호":
    //     case "문제":
    //       return "problemId";
    //     case "난이도":
    //       return "level";
    //     case "결과":
    //       return "result";
    //     case "문제내용":
    //       return "problemDescription";
    //     case "언어":
    //       return "language";
    //     case "제출 번호":
    //       return "submissionId";
    //     case "아이디":
    //       return "username";
    //     case "제출시간":
    //     case "제출한 시간":
    //       return "submissionTime";
    //     case "시간":
    //       return "runtime";
    //     case "메모리":
    //       return "memory";
    //     case "코드 길이":
    //       return "codeLength";
    //     default:
    //       return "unknown";
    //   }
    // }

    // const headers = Array.from(table.rows[0].cells, (x) =>
    //   convertResultTableHeader(x.innerText.trim())
    // );
    const table = $("#status-table") as HTMLTableElement;
    const isCorrect = Array.from(table.rows[1].cells)[3];

    // const list = [];
    // for (let i = 1; i < table.rows.length; i++) {
    //   const row = table.rows[i];
    //   const cells = Array.from(row.cells, (x, index) => {
    //     switch (headers[index]) {
    //       case 'result':
    //         return { result: x.innerText.trim(), resultCategory: x.firstChild.getAttribute('data-color').replace('-eng', '').trim() };
    //       case 'language':
    //         return x.innerText.unescapeHtml().replace(/\/.*$/g, '').trim();
    //       case 'submissionTime':
    //         const el = x.querySelector('a.show-date');
    //         if (isNull(el)) return null;
    //         return el.getAttribute('data-original-title');
    //       case 'problemId':
    //         const a = x.querySelector('a.problem_title');
    //         if (isNull(a)) return null;
    //         return {
    //           problemId: a.getAttribute('href').replace(/^.*\/([0-9]+)$/, '$1'),
    //         };
    //       default:
    //         return x.innerText.trim();
    //     }
    //   });
    //   let obj = {};
    //   obj.elementId = row.id;
    //   for (let j = 0; j < headers.length; j++) {
    //     obj[headers[j]] = cells[j];
    //   }
    //   obj = { ...obj, ...obj.result, ...obj.problemId};
    //   list.push(obj);
    // }
    // log('TableList', list);
    // return list;

    const textAreaElement = $(".CodeMirror-code");

    setTimeout(() => {
      const divs = $$(".CodeMirror-line > span > span", textAreaElement);
      const a = divs.map((div) => div.innerHTML);
      // .reduce((acc, div) => acc + div, "");
    }, 5000);
  };

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
      const resultEl = $(".result-ac");
      if (resultEl) {
        if (this.checkSuccess()) {
          console.log("성공");
          this.afterSuccess();
        }
        this.afterFail();
      }
    }, 2000);
  };

  afterSuccess = () => {
    this.renderFailMark();
  };

  afterFail = () => {
    this.renderSuccessMark();
    this.getSolvedData();
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
    this.tmp();

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
baekjun.afterSubmit();
console.log("백준실행");
