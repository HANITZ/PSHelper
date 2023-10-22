import {
  $,
  convertSingleCharToDoubleChar,
  enrollEvent,
  getQueryParam,
  getReadmeText,
  getTimeDiff,
  hasElement,
  insertHTML,
  LANGUAGES,
  SOLVEDAC_LEVEL,
} from "../utils/jsUtils";
import "./Baekjun.css";
import {
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "../utils/chromeUtils";
import { IsTimer, IsUpload, RepoName } from "../Popup/Popup";
import {
  getBaekjunProblemDescription,
  getBaekjunSolvedData,
  getProblemInfoBySolvedAc,
} from "../API/getReqAPI";
import { commitCodeToRepo } from "../API/postReqAPI";
import { chromeStorageId, errorMsg } from "../utils/Constants";
import { AlgorithmSite } from "../Component/AlgorithmSite";

interface BaekjunProblemId {
  BaekjunProblemId: string;
}

interface BaekjunTime {
  baekjunTime: number;
}

interface SubmitedProblem {
  submitedProblem: string;
}

interface BaekjunTag {
  aliases: { alies: string }[];
  bojTagId: number;
  displayNames: { language: string; name: string; short: string }[];
  isMeta: boolean;
  key: string;
  problemCount: number;
}
interface BaekjunProblem {
  problemId: number;
  titleKo: string;
  titles: [
    {
      language: string;
      languageDisplayName: string;
      title: string;
      isOriginal: boolean;
    }
  ];
  isSolvable: boolean;
  isPartial: boolean;
  acceptedUserCount: number;
  level: string;
  votedUserCount: number;
  sprout: boolean;
  givesNoRating: boolean;
  isLevelLocked: boolean;
  averageTries: number;
  official: boolean;
  tags: BaekjunTag[];
}

export type ParamCreateProblemContent = {
  description: string;
  acceptedUserCount?: number;
  averageTries?: number;
  official?: boolean;
  title: string;
  problemId: string;
  solvingTime: string;
  spentTime: string;
  spentMemory: string;
  category: string;
  language: string;
};
type BaekjunLevel = {
  level: string;
};
type ParamBaekCreateProblemContent = ParamCreateProblemContent & BaekjunLevel;
type ParamBaekGetMessage = ParamGetMessage & BaekjunLevel;
type ParamBaekGetDirectory = ParamGetDirectory & BaekjunLevel;
export interface ParamGetMessage {
  title: string;
  spentMemory: string;
  spentTime: string;
  solvingTime: string;
}

export interface ParamGetDirectory {
  problemId: string;
  title: string;
}

export interface ParamGetFileName {
  title: string;
  language: string;
}

class Baekjun extends AlgorithmSite {
  timer: NodeJS.Timer | undefined;

  constructor() {
    super();
    this.init();
    this.checkSubmited();
  }

  init = async () => {
    const { BaekjunProblemId: baekjunProblemId } = (await getChromeLocalStorage(
      chromeStorageId.baekjunProblemId
    )) as BaekjunProblemId;
    const { repoName } = (await getChromeLocalStorage(
      chromeStorageId.repo
    )) as RepoName;
    if (!repoName) throw new Error(errorMsg.NotFoundRepo);

    if (!baekjunProblemId || !this.checkProblemId(baekjunProblemId)) {
      setChromeLocalStorage({
        BaekjunProblemId: this.getProblemId(window.location.href),
      });
      setChromeLocalStorage({ baekjunTime: new Date().getTime() });
      return;
    }

    const { baekjunTime } = (await getChromeLocalStorage(
      "baekjunTime"
    )) as BaekjunTime;
    if (!baekjunTime) {
      setChromeLocalStorage({ baekjunTime: new Date().getTime() });
    }
  };
  getProblemId = (url: string) => {
    if (url.includes("problem")) {
      return url.split("https://www.acmicpc.net/problem/")[1];
    }
    return url.split("https://www.acmicpc.net/submit/")[1];
  };

  startSolving = async () => {
    const { isTimer } = (await getChromeLocalStorage(
      chromeStorageId.isTimer
    )) as IsTimer;
    if (isTimer) {
      this.setBaekjunTimer();
    }
  };

  readyToSubmit = () => {
    this.setSubmitEvent();
  };

  setBaekjunTimer = () => {
    window.onload = async () => {
      await this.setTimerTemplate();
      const { baekjunTime } = (await getChromeLocalStorage(
        "baekjunTime"
      )) as BaekjunTime;
      this.setTimer(baekjunTime);
    };
  };

  setSubmitEvent = () => {
    const submitButton = $("#submit_button");

    enrollEvent(submitButton, "click", () => {
      setChromeLocalStorage({
        submitedProblem: this.getProblemId(window.location.href),
      });
    });
  };

  checkSubmited = async () => {
    const { submitedProblem } = (await getChromeLocalStorage(
      chromeStorageId.submitedProblemId
    )) as SubmitedProblem;
    console.log(submitedProblem);
    if (submitedProblem && submitedProblem === getQueryParam("problem_id")) {
      deleteChromeLocalStorage(chromeStorageId.submitedProblemId);
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
    const checkSuccessInterval = setInterval(async () => {
      const statusTable = $("#status-table") as HTMLTableElement;
      const submitedInfo = statusTable.rows[1];
      const resultElement = submitedInfo.cells[3] as HTMLElement;

      if (hasElement(".result-ac", resultElement)) {
        clearInterval(checkSuccessInterval);
        if (this.checkSuccess()) {
          clearInterval(this.timer);
          this.afterSuccess(submitedInfo);
          return;
        }

        this.afterFail();
      }
      if (hasElement(".result-rte", resultElement)) {
        this.afterFail();
        clearInterval(this.timer);
      }
    }, 1500);
  };

  renderModalAfterSuccess = (solvingTime: string) => {
    const contentElement = $(".wrapper");
    console.log(contentElement);
    const html = `
      <div class="modal-baekjun"  tabindex="-1" role="dialog" >
        <div class="modal-document" role="document" >
          <div class="modal-content">
            <div class="modal-header" >
              <button type="button" class="close-button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">x</span>
              </button>
              <h4 aria-hidden="true" >정답입니다</h4>
            </div>
            <div class="modal-body">
              <div class="result-container">
                <span>풀이시간: ${solvingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    insertHTML({ element: contentElement, position: "afterend", html });
  };

  afterSuccess = async (submitedInfo: HTMLTableRowElement) => {
    const { isUpload } = (await getChromeLocalStorage("isUpload")) as IsUpload;
    const { baekjunTime } = (await getChromeLocalStorage(
      "baekjunTime"
    )) as BaekjunTime;
    const submissionId = submitedInfo.cells[0].innerText;
    const problemId = getQueryParam("problem_id");
    const spentTime = submitedInfo.cells[5].innerText;
    const spentMemory = submitedInfo.cells[4].innerText;
    const language = $("a", submitedInfo.cells[6]).innerText;
    const solvingTime = Object.values(
      getTimeDiff(baekjunTime, new Date().getTime())
    ).join(" : ");
    const code = await getBaekjunSolvedData(submissionId);
    const description = await getBaekjunProblemDescription(problemId);

    const {
      acceptedUserCount,
      averageTries,
      official,
      level,
      titleKo,
      tags,
    }: BaekjunProblem = await getProblemInfoBySolvedAc(problemId);
    const category = tags.map((tag) => tag.displayNames[0].name).join(", ");
    

    const problemContent = this.createProblemContent({
      description,
      acceptedUserCount,
      averageTries,
      official,
      level,
      title: titleKo,
      problemId,
      solvingTime,
      spentTime,
      spentMemory,
      category,
      language,
    });

    if (isUpload) {
      await commitCodeToRepo({ ...problemContent, code });
    }
    this.renderModalAfterSuccess(solvingTime);
    await this.renderSuccessMark();
    deleteChromeLocalStorage("baekjunTime");
  };

  afterFail = () => {
    this.renderFailMark();
  };

  createProblemContent = ({
    description,
    acceptedUserCount,
    averageTries,
    official,
    level,
    title,
    problemId,
    solvingTime,
    spentTime,
    spentMemory,
    category,
    language,
  }: ParamBaekCreateProblemContent) => {
    const directory = this.getDirectory({ level, problemId, title });
    const message = this.getMessage({
      level,
      spentMemory,
      spentTime,
      solvingTime,
      title,
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

    return { directory, message, fileName, readMe };
  };
  getFileName = ({ title, language }: ParamGetFileName) =>
    `${convertSingleCharToDoubleChar(title)}.${LANGUAGES[language]}`;
  getMessage = ({
    level,
    title,
    spentMemory,
    spentTime,
    solvingTime,
  }: ParamBaekGetMessage) =>
    `[${SOLVEDAC_LEVEL[level]}] Title: ${title} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;
  getDirectory = ({ level, problemId, title }: ParamBaekGetDirectory) =>
    `Baekjun/${SOLVEDAC_LEVEL[level].replace(
      / .*/,
      ""
    )}/${problemId}. ${convertSingleCharToDoubleChar(title)}`;

  getSolvedData = (submissionId: string) => {};

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

  checkProblemId = (id: string): boolean => {
    const splitedLink = window.location.href.split(/=|&|\//);
    if (splitedLink.includes(id)) {
      return true;
    }
    return false;
  };

  setTimerTemplate = () => {
    const element = $(".page-header");
    const position = "afterbegin";
    const html = `<div class="timer-container" >
    <p class="timer"></p>
    </div>
    `;
    insertHTML({ element, position, html });
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
// baekjun.createModalAfterSuccess("12:12:12");
