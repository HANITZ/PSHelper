import {
  $,
  $$,
  Time,
  convertSingleCharToDoubleChar,
  createTimer,
  enrollEvent,
  getElById,
  getTimeDiff,
  hasElement,
  insertHTML,
} from "../utils/jsUtils";
import {
  setChromeLocalStorage,
  getChromeLocalStorage,
} from "../utils/chromeUtils";
import { FilesReadyToUproad, commitCodeToRepo } from "../API/postReqAPI";

import "./Programmers.css";
import { IsTimer, IsUpload, RepoName } from "../Popup/Popup";
import { errorMsg } from "../utils/Constants";
import { AlgorithmSite } from "../Component/AlgorithmSite";

type Problem = {
  isSolved: string | "undefined";
  title: string | "undefined";
  level: string | "undefined";
  finishedCount: string | "undefined";
  acceptanceRate: string | "undefined";
};

type ProgrammersTime = {
  ProgrammersTime: number;
};

type makeFilesParam = {
  link: string;
  problemId: string | null;
  division: string;
  problemDescription: string;
  languageExtension: string;
  resultMessage: string;
  code: string;
  avgTime: string;
  avgMemory: string;
};

class Programmers extends AlgorithmSite {
  timer: NodeJS.Timer | undefined;

  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const { repoName } = (await getChromeLocalStorage("repoName")) as RepoName;
    if (!repoName) throw new Error(errorMsg.NotFoundRepo);
  };
  setProgrammersTimer = () => {
    this.setTimerLargeTemplate();
    this.setTimerSmallTemplate();
    const startTime = new Date().getTime();
    setChromeLocalStorage({ ProgrammersTime: startTime });
    this.setTimer(startTime);
  };

  setTimerLargeTemplate = () => {
    const element = $(".nav.navbar-nav");
    const position = "afterbegin";
    const html = `<li class="nav-item"   >
    <p class="timer" style= "color: #B2C0CC; font-weight: 500;   margin: 0; padding: 0.25rem 0.5rem 0.25rem 0"  >Timer: 00:00:00</p>
    </li>`;
    insertHTML({ element, position, html });
  };
  setTimerSmallTemplate = () => {
    const element = $(".navbar");
    const position = "beforeend";
    const html = `<div class="nav-small-timer"  style=""  >
    <p class="timer" style= "color: #B2C0CC; font-weight: 500;   margin: 0; padding: 0.25rem 0.5rem 0.25rem 0"  >Timer: 00:00:00</p>
    </div>`;
    insertHTML({ element, position, html });
  };

  readySolve = async () => {
    const tableCheckInterval = setInterval(() => {
      const elements = $$("tr", $("table") as HTMLElement);
      if (elements) {
        this.setProblemsEvent(elements);
        clearInterval(tableCheckInterval);
      }
    }, 1000);
  };

  setProblemsEvent = (problems: HTMLElement[]) => {
    problems.slice(1).forEach((tr) => {
      const isSolved = $("td.status.solved", tr) ? "solved" : "unsolved";
      const title = $("td.title", tr).innerText;
      const level = $("td.level", tr).innerText;
      const finishedCount = $("td.finished-count", tr).innerText;
      const acceptanceRate = $("td.acceptance-rate", tr).innerText;

      enrollEvent(tr, "click", () => {
        setChromeLocalStorage({
          Problem: {
            isSolved,
            title,
            level,
            finishedCount,
            acceptanceRate,
          },
        });
      });
    });
  };

  startSolving = async () => {
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
    if (isTimer) {
      this.setProgrammersTimer();
    }
    this.setEvents();
  };
  setEvents = () => {
    const submitButton = getElById("submit-code");

    enrollEvent(submitButton, "click", () => {
      const startTime = new Date().getTime();
      const interval = setInterval(async () => {
        const nowTime = new Date().getTime();
        const modalElement = $(".modal-content");
        if (modalElement) {
          if (!hasElement(".mark-programmers")) {
            this.startModalLoading(modalElement);
          }
        }

        if (modalElement && this.checkSuccess(modalElement)) {
          this.afterSuccess(modalElement)

          clearInterval(interval);
        }
        if (nowTime - startTime >= 20000) {
          clearInterval(interval);
          this.renderModalAfterFail(modalElement);
        }
      }, 1000);
    });
  };

  afterSuccess = async (modalElement:HTMLElement) => {
    const code = this.parseCod
    const solvedData = await this.parseCode();
    const { isUpload } = (await getChromeLocalStorage(
      "isUpload"
    )) as IsUpload;
    if (isUpload) {
      await commitCodeToRepo(solvedData);
    }

    const { ProgrammersTime: startTime } = (await getChromeLocalStorage(
      "ProgrammersTime"
    )) as ProgrammersTime;
    const solvingTime = Object.values(
      getTimeDiff(startTime, new Date().getTime())
    ).join(" : ");
    this.renderModalAfterSuccess(modalElement, solvingTime);
  }

  startModalLoading = (modalElement: HTMLElement) => {
    const bodyElement = $(".modal-body", modalElement);
    bodyElement.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="result-container" >
      <span class="mark-programmers" >
      <div id="solve-result-mark" class="loading-programmers"></div>
      </span>
      </div>
      `
    );
  };


  renderModalAfterSuccess = (modalElement: HTMLElement, time?: string) => {
    const markTag = $("#solve-result-mark", modalElement);
    const modalBody = $(".modal-body", modalElement);
    if (time) {
      modalBody.insertAdjacentHTML(
        "beforeend",
        `<span  > 풀이시간: ${time}</span>`
      );
    }
    markTag.className = "success-solve";
  };
  renderModalAfterFail = (modalElement: HTMLElement) => {
    const markTag = $("#solve-result-mark", modalElement);
    markTag.className = "fail-solve";
  };

  checkSuccess = (modalElement: HTMLElement) => {
    const modalTitle = $(".modal-title", modalElement);
    if (modalTitle.innerText.includes("정답입니다")) {
      return true;
    }
    return false;
  };

    
  parseCod = () => {
    return $("textarea#code").innerText;
  }

  makeFiles = async ({
    link,
    problemId,
    division,
    problemDescription,
    languageExtension,
    resultMessage,
    code,
    avgTime,
    avgMemory,
  }: makeFilesParam): Promise<FilesReadyToUproad> => {
    const { level, isSolved, finishedCount, acceptanceRate } =
      (await getChromeLocalStorage("Problem")) as Problem;
    const title = $("li.algorithm-title").innerText.replace(/\\n/g, "").trim();

    const directory = `프로그래머스/${level}/${problemId}.${title}`.replace(
      " ",
      ""
    );
    const message = `[${level}] Title: ${title}, AvgTime: ${avgTime}, AvgMemory: ${avgMemory}`;
    const fileName = `${convertSingleCharToDoubleChar(
      title
    )}.${languageExtension}`;

    const readMe =
      `# [${level}] ${title} - ${problemId} \n\n` +
      `[문제 링크](${link}) \n\n` +
      `### 성능 요약\n\n` +
      `평균 메모리: ${avgMemory}MB, ` +
      `평균 소요 시간: ${avgTime}ms\n\n` +
      `### 구분\n\n` +
      `${division.replace("/", " > ")}\n\n` +
      `### 채점결과\n\n` +
      `${resultMessage}\n\n` +
      `### 문제 설명\n\n` +
      `${problemDescription}\n\n` +
      `> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges`;
    return {
      directory,
      message,
      fileName,
      readMe,
      code,
    };
  };

  parseCode = async () => {
    const link = window.location.href;
    const problemId = $("div.main > div.lesson-content")!.getAttribute(
      "data-lesson-id"
    );
    const division = [...$("ol.breadcrumb")!.childNodes]
      .map((node) => node as HTMLElement)
      .filter((node) => node.className !== "active")
      .map((node) => node.innerText)
      .reduce((a, b) => `${a}/${b}`);
    const problemDescription = $(
      "div.guide-section-description > div.markdown"
    )!.innerHTML;
    const languageExtension = $(
      "div.editor > ul > li.nav-item > a"
    )!.innerText.split(".")[1];
    setTimeout(() => {}, 1000);
    let code = $("textarea#code")!.innerText;
    const resultMessage = this.getResultMessage();
    const [avgTime, avgMemory] = this.getTimeAndMemory();

    return this.makeFiles({
      link,
      problemId,
      division,
      problemDescription,
      languageExtension,
      resultMessage,
      code,
      avgTime,
      avgMemory,
    });
  };
  getResultMessage = () => {
    return (
      $$(".console-message")
        .map((x) => x.innerText)
        .filter((x) => x.includes(": "))
        .reduce((x, y) => `${x}<br/>${y}`, "") || "Empty"
    );
  };

  getTimeAndMemory = () => {
    return $$(".result.passed")
      .map((tr) => tr.innerText)
      .map((node) => node.substring(node.indexOf("(") + 1, node.indexOf(")")))
      .map((node) =>
        node.split(", ").map((word) => {
          if (word.includes("m")) {
            return word.substring(0, word.indexOf("m"));
          }
          return word.substring(0, word.indexOf("M"));
        })
      )
      .reduce(
        (
          [resultTime, resultMemory],
          [currentTime, currentMemory],
          idx,
          arr
        ) => {
          if (idx !== arr.length - 1) {
            resultTime += Number(currentTime);
            resultMemory += Number(currentMemory);
            return [resultTime, resultMemory];
          }

          return [resultTime / arr.length, resultMemory / arr.length];
        },
        [0, 0]
      )
      .map((num) => num.toFixed(2));
  };

}

const programmers = new Programmers();
if (
  window.location.href.includes("/learn/courses/30") &&
  window.location.href.includes("lessons")
) {
  programmers.startSolving();
} else if (window.location.href.includes("challenges")) {
  programmers.readySolve();
}
