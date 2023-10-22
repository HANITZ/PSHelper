import {
  $,
  $$,
  Time,
  convertSingleCharToDoubleChar,
  createTimer,
  enrollEvent,
  getElById,
  getReadmeText,
  getTimeDiff,
  hasElement,
  insertHTML,
} from "../utils/jsUtils";
import {
  setChromeLocalStorage,
  getChromeLocalStorage,
  deleteChromeLocalStorage,
} from "../utils/chromeUtils";
import { FilesReadyToUproad, commitCodeToRepo } from "../API/postReqAPI";

import "./Programmers.css";
import { IsTimer, IsUpload, RepoName } from "../Popup/Popup";
import { errorMsg } from "../utils/Constants";
import { AlgorithmSite } from "../Component/AlgorithmSite";
import {
  ParamCreateProblemContent,
  ParamGetDirectory,
  ParamGetFileName,
  ParamGetMessage,
} from "../Baekjun/Baekjun";

type Problem = {
  isSolved?: string;
  title?: string;
  level?: string;
  finishedCount?: string;
  acceptanceRate?: string;
};

type ProgrammersLevel = {
  level?: string;
};

type ParamProgCreateProblemContent = ParamCreateProblemContent &
  ProgrammersLevel;
type ParamProgGetMessage = ParamGetMessage & ProgrammersLevel;
type ParamProgGetDirectory = ParamGetDirectory & ProgrammersLevel;

type ProgrammersTime = {
  ProgrammersTime: number;
};

type makeFilesParam = {
  link: string;
  problemId: string | null;
  division: string;
  problemDescription: string;
  languageExtension: string;
  avgTime: string;
  avgMemory: string;
  solvingTime: string;
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
          this.afterSuccess(modalElement);

          clearInterval(interval);
        }
        if (nowTime - startTime >= 20000) {
          clearInterval(interval);
          this.renderModalAfterFail(modalElement);
        }
      }, 1000);
    });
  };

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

  parseCode = () => {
    return $("textarea#code").innerText;
  };

  afterSuccess = async (modalElement: HTMLElement) => {
    const { isUpload } = (await getChromeLocalStorage("isUpload")) as IsUpload;
    const { ProgrammersTime: startTime } = (await getChromeLocalStorage(
      "ProgrammersTime"
    )) as ProgrammersTime;
    const { level } = (await getChromeLocalStorage("Problem")) as Problem;
    const title = $("li.algorithm-title").innerText.replace(/\\n/g, "").trim();
    const solvingTime = Object.values(
      getTimeDiff(startTime, new Date().getTime())
    ).join(" : ");
    const problemId = $("div.main > div.lesson-content").getAttribute(
      "data-lesson-id"
    ) as string;
    const category = [...$("ol.breadcrumb")!.childNodes]
      .map((node) => node as HTMLElement)
      .filter((node) => node.className !== "active")
      .map((node) => node.innerText)
      .join(", ");

    const description = $(
      "div.guide-section-description > div.markdown"
    )!.innerHTML;
    const language = $("div.editor > ul > li.nav-item > a")!.innerText.split(
      "."
    )[1];
    const code = this.parseCode();
    setTimeout(() => {}, 1000);
    const [spentTime, spentMemory] = this.getTimeAndMemory();
    const problemContent = await this.createProblemContent({
      title,
      spentMemory,
      problemId,
      spentTime,
      solvingTime,
      language,
      level,
      description,
      category,
    });

    if (isUpload) {
      await commitCodeToRepo({ ...problemContent, code });
    }

    this.renderModalAfterSuccess(modalElement, solvingTime);
  };

  createProblemContent = async ({
    solvingTime,
    description,
    category,
    level,
    title,
    problemId,
    spentMemory,
    spentTime,
    language,
  }: ParamProgCreateProblemContent) => {
    const directory = this.getDirectory({ title, problemId, level });
    const message = this.getMessage({
      title,
      level,
      spentMemory,
      spentTime,
      solvingTime,
    });
    const fileName = this.getFileName({ title, language });
    const readMe = getReadmeText({
      level,
      title,
      solvingTime,
      problemId,
      spentMemory,
      spentTime,
      category,
      description,
    });
    return { directory, message, fileName, category, readMe };
  };
  getFileName = ({ title, language }: ParamGetFileName) =>
    `${convertSingleCharToDoubleChar(title)}.${language}`;
  getMessage = ({
    level,
    title,
    spentMemory,
    spentTime,
    solvingTime,
  }: ParamProgGetMessage) =>
    level
      ? `[${level}] Title: ${title}, Time: ${spentTime} ms, Memory: ${spentMemory}KB, Time to solve: ${solvingTime}`
      : `Title: ${title}, Time: ${spentTime} ms, Memory: ${spentMemory}KB, Time to solve: ${solvingTime}`;

  getDirectory = ({ level, problemId, title }: ParamProgGetDirectory) =>
    level
      ? `프로그래머스/${level}/${problemId}.${title}`.replace(" ", "")
      : `프로그래머스/${problemId}.${title}`.replace(" ", "");

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
