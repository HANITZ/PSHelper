import { BaekjunProblemInfoBySolAc } from "@Data/Baekjun";
import { ChromeStorage } from "@Data/ChromeStorage/types";
import {
  $,
  LANGUAGES,
  SOLVEDAC_LEVEL,
  chromeStorageId,
  convertSingleCharToDoubleChar,
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  getQueryParam,
  getReadmeText,
  getTimeDiff,
  hasElement,
} from "@utils";
import {
  getBaekjunProblemDescription,
  getBaekjunSolvedData,
  getProblemInfoBySolvedAc,
} from "API/getReqAPI";
import { commitCodeToRepo } from "API/postReqAPI";
import {
  ParamBaekGetDirectory,
  ParamBaekGetMessage,
  ParamGetFileName,
} from "Baekjun/Baekjun";

type ProblemInfo = {
  submissionId: string;
  problemId: string;
  spentTime: string;
  spentMemory: string;
  language: string;
  solvingTime: string;
  code: string;
  description: string;
};

export default class Baekjun {
  static getProblemId = (url: string) => {
    if (url.includes("problem")) {
      return url.split("https://www.acmicpc.net/problem/")[1];
    }
    return url.split("https://www.acmicpc.net/submit/")[1];
  };

  static checkProblemId = (id: string): boolean => {
    const splitedLink = window.location.href.split(/=|&|\//);
    if (splitedLink.includes(id)) {
      return true;
    }
    return false;
  };

  static checkSuccess = () => {
    const resultMsg = $(".result-text").innerText;
    if (resultMsg === "맞았습니다!!") {
      return true;
    }
    return false;
  };

  static async checkSubmission(callback: Function) {
    const submissionInterval = setInterval(async () => {
      const statusTable = $("#status-table") as HTMLTableElement;
      const submitedInfo = statusTable.rows[1];
      const resultElement = submitedInfo.cells[3] as HTMLElement;

      if (hasElement(".result-ac", resultElement)) {
        clearInterval(submissionInterval);
        if (this.checkSuccess()) {
          callback({ status: "success" });
          this.afterSuccess(submitedInfo, callback);
          return;
        }
        callback({ status: "fail" });
      }
    }, 1500);
  }

  static async getProblemInfoByDom(
    submitedInfo: HTMLTableRowElement
  ): Promise<ProblemInfo> {
    const { BaekjunStartTime } = (await getChromeLocalStorage(
      chromeStorageId.BaekjunStartTime
    )) as Partial<ChromeStorage>;
    const submissionId = submitedInfo.cells[0].innerText;
    const problemId = getQueryParam("problem_id");
    console.log(BaekjunStartTime);
    console.log(getTimeDiff(BaekjunStartTime as number, new Date().getTime()));
    return {
      submissionId,
      problemId,
      spentTime: submitedInfo.cells[5].innerText,
      spentMemory: submitedInfo.cells[4].innerText,
      language: $("a", submitedInfo.cells[6]).innerText,
      solvingTime: Object.values(
        getTimeDiff(BaekjunStartTime as number, new Date().getTime())
      ).join(" : "),
      code: await getBaekjunSolvedData(submissionId),
      description: await getBaekjunProblemDescription(problemId),
    };
  }

  static async afterSuccess(
    submitedInfo: HTMLTableRowElement,
    callback: Function
  ) {
    const { Upload } = (await getChromeLocalStorage(
      chromeStorageId.Upload
    )) as Partial<ChromeStorage>;
    const problemContent = await this.createProblemContent(submitedInfo);
    if (Upload) {
      await commitCodeToRepo({ ...problemContent });
    }
    // this.renderModalAfterSuccess(solvingTime);
    callback({ modal: true });
    deleteChromeLocalStorage(chromeStorageId.BaekjunStartTime);
    deleteChromeLocalStorage(chromeStorageId.BaekjunProblemId);
  }

  static async createProblemContent(submitedInfo: HTMLTableRowElement) {
    const {
      submissionId,
      problemId,
      spentTime,
      spentMemory,
      language,
      solvingTime,
      code,
      description,
    }: ProblemInfo = await this.getProblemInfoByDom(submitedInfo);

    const {
      acceptedUserCount,
      averageTries,
      official,
      level,
      titleKo,
      tags,
    }: BaekjunProblemInfoBySolAc = await getProblemInfoBySolvedAc(problemId);
    const category = tags.map((tag) => tag.displayNames[0].name).join(", ");

    const directory = this.getDirectory({ level, problemId, title: titleKo });
    const message = this.getMessage({
      level,
      spentMemory,
      spentTime,
      solvingTime,
      title: titleKo,
    });
    const fileName = this.getFileName({ title: titleKo, language });

    const readMe = getReadmeText({
      level,
      title: titleKo,
      solvingTime,
      problemId,
      spentMemory,
      spentTime,
      category,
      description,
    });
    return { directory, message, fileName, readMe, code };
  }

  static getFileName({ title, language }: ParamGetFileName) {
    return `${convertSingleCharToDoubleChar(title)}.${LANGUAGES[language]}`;
  }
  static getMessage({
    level,
    title,
    spentMemory,
    spentTime,
    solvingTime,
  }: ParamBaekGetMessage) {
    return `[${SOLVEDAC_LEVEL[level]}] Title: ${title} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;
  }
  static getDirectory({ level, problemId, title }: ParamBaekGetDirectory) {
    return `Baekjun/${SOLVEDAC_LEVEL[level].replace(
      / .*/,
      ""
    )}/${problemId}. ${convertSingleCharToDoubleChar(title)}`;
  }
}
