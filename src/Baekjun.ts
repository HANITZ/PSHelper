import {
  $,
  convertSingleCharToDoubleChar,
  createTimer,
  enrollEvent,
  getQueryParam,
  getTimeDiff,
  hasElement,
  insertHTML,
  LANGUAGES,
  SOLVEDAC_LEVEL,
  Time,
} from "./utils/jsUtils";
import "./Baekjun.css";
import {
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "./utils/chromeUtils";
import { IsTimer, RepoName } from "./popup";
import {
  getBaekjunProblemDescription,
  getBaekjunSolvedData,
  getProblemInfoBySolvedAc,
} from "./API/getReqAPI";
import { commitCodeToRepo } from "./API/postReqAPI";

type BaekjunProblemId = {
  BaekjunProblemId: string;
};

type BaekjunTime = {
  baekjunTime: number;
};

type SubmitedProblem = {
  submitedProblem: string;
};

type BaekjunTag = {
  aliases: { alies: string }[];
  bojTagId: number;
  displayNames: { language: string; name: string; short: string }[];
  isMeta: boolean;
  key: string;
  problemCount: number;
};
type BaekjunProblem = {
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
  level: number;
  votedUserCount: number;
  sprout: boolean;
  givesNoRating: boolean;
  isLevelLocked: boolean;
  averageTries: number;
  official: boolean;
  tags: BaekjunTag[];
};

type BaekjunScript = {
  description: string;
  input: string;
  output: string;
};

type ParamCreateReadme = {
  description: string;
  input: string;
  output: string;
  acceptedUserCount: number;
  averageTries: number;
  official: boolean;
  level: number;
  titleKo: string;
  problemId: string;
  solvingTime: string;
  spentTime: string;
  spentMemory: string;
  tags: BaekjunTag[];
  language: string;
};

class Baekjun {
  timer: NodeJS.Timer | undefined;

  constructor() {
    this.init();
    this.checkSubmited();
  }

  init = async () => {
    const { BaekjunProblemId: baekjunProblemId } = (await getChromeLocalStorage(
      "BaekjunProblemId"
    )) as BaekjunProblemId;
    const { repoName } = (await getChromeLocalStorage("repoName")) as RepoName;
    if (!repoName) throw new Error("Repository가 아직 설정되지않았습니다.");

    if (!baekjunProblemId || !this.checkProblemId(baekjunProblemId)) {
      setChromeLocalStorage({
        BaekjunProblemId: window.location.href.split(
          "https://www.acmicpc.net/problem/"
        )[1],
      });
    }

    const { baekjunTime } = (await getChromeLocalStorage(
      "baekjunTime"
    )) as BaekjunTime;
    if (!baekjunTime) {
      setChromeLocalStorage({ baekjunTime: new Date().getTime() });
    }
  };

  startSolving = async () => {
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
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
      this.setTimer();
    };
  };

  setSubmitEvent = () => {
    const submitButton = $("#submit_button");

    enrollEvent(submitButton, "click", () => {
      setChromeLocalStorage({
        submitedProblem: window.location.href.split(
          "https://www.acmicpc.net/submit/"
        )[1],
      });
    });
  };

  setTimer = async () => {
    const { baekjunTime } = (await getChromeLocalStorage(
      "baekjunTime"
    )) as BaekjunTime;

    this.timer = createTimer(baekjunTime, this.reRenderTime);
  };

  checkSubmited = async () => {
    const { submitedProblem } = (await getChromeLocalStorage(
      "submitedProblem"
    )) as SubmitedProblem;

    if (submitedProblem && submitedProblem === getQueryParam("problem_id")) {
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

    const checkSuccessInterval = setInterval(async () => {
      const statusTable = $("#status-table") as HTMLTableElement;
      const submitedInfo = statusTable.rows[1];
      const resultElement = submitedInfo.cells[3] as HTMLElement;

      if (hasElement(".result-ac", resultElement)) {
        clearInterval(checkSuccessInterval);
        if (this.checkSuccess()) {
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
          deleteChromeLocalStorage("baekjunTime");

          clearInterval(this.timer);
          this.afterSuccess(
            problemId,
            submissionId,
            solvingTime,
            spentTime,
            spentMemory,
            language
          );
          return;
        }

        this.afterFail();
      }
    }, 2000);
  };

  afterSuccess = async (
    problemId: string,
    submissionId: string,
    solvingTime: string,
    spentTime: string,
    spentMemory: string,
    language: string
  ) => {
    const code = await getBaekjunSolvedData(submissionId);
    const { description, input, output }: BaekjunScript =
      await getBaekjunProblemDescription(problemId);
    const {
      acceptedUserCount,
      averageTries,
      official,
      level,
      titleKo,
      tags,
    }: BaekjunProblem = await getProblemInfoBySolvedAc(problemId);

    const { directory, message, fileName, readMe } = this.createReadme({
      description,
      input,
      output,
      acceptedUserCount,
      averageTries,
      official,
      level,
      titleKo,
      problemId,
      solvingTime,
      spentTime,
      spentMemory,
      tags,
      language,
    });
    await commitCodeToRepo({ directory, message, fileName, readMe, code });
    await this.renderSuccessMark();
  };

  afterFail = () => {
    this.renderFailMark();
  };

  createReadme = ({
    description,
    input,
    output,
    acceptedUserCount,
    averageTries,
    official,
    level,
    titleKo,
    problemId,
    solvingTime,
    spentTime,
    spentMemory,
    tags,
    language,
  }: ParamCreateReadme) => {
    const directory = `Baekjun/${SOLVEDAC_LEVEL[level].replace(
      / .*/,
      ""
    )}/${problemId}. ${convertSingleCharToDoubleChar(titleKo)}`;
    const message = `[${level}] ${titleKo} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;
    const category = tags.map((tag) => tag.displayNames[0].name).join(", ");
    const fileName = `${convertSingleCharToDoubleChar(titleKo)}.${
      LANGUAGES[language]
    }`;
    // prettier - ignore - start;
    const readMe =
      `# [${level}] ${titleKo} - ${problemId} \n\n` +
      `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n` +
      `### 성능 요약\n\n` +
      `메모리: ${spentMemory} KB, ` +
      `시간: ${spentTime} ms\n\n` +
      `풀이시간: ${solvingTime}\n\n` +
      `### 분류\n\n` +
      `${category}\n\n` +
      (!!description
        ? "" +
          `### 문제 설명\n\n${description}\n\n` +
          `### 입력 \n\n ${input}\n\n` +
          `### 출력 \n\n ${output}\n\n`
        : "");

    return { directory, message, fileName, readMe };
  };

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

  reRenderTime = ({ h, m, s }: Time) => {
    const timeElement = $(".timer");
    timeElement.innerText = `Timer: ${h}:${m}:${s} `;
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
