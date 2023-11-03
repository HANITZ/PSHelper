import { BaekjunProblemInfoBySolAc } from "@Data/Baekjun";
import { ChromeStorage } from "@Data/ChromeStorage/types";
import {
  $,
  $$,
  LANGUAGES,
  Language,
  SOLVEDAC_LEVEL,
  chromeStorageId,
  convertSingleCharToDoubleChar,
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  getQueryParam,
  getReadmeText,
  getTimeDiff,
  hasElement,
  insertHTML,
} from "@utils";
import {
  getBaekjunProblemDescription,
  getBaekjunSolvedData,
  getProblemInfoBySolvedAc,
} from "API/getReqAPI";
import { commitCodeToRepo } from "API/postReqAPI";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { Modal } from "view/Modal";
>>>>>>> cb8c98f (refactor: 이전 코드 삭제)
>>>>>>> 30dbf49 (refactor: 이전 코드 삭제)

interface BaekjunProblemId {
  BaekjunProblemId: string;
}

interface BaekjunTime {
  baekjunTime: number;
}

interface SubmitedProblem {
  submitedProblem: string;
}

<<<<<<< HEAD


=======
<<<<<<< HEAD


=======
>>>>>>> cb8c98f (refactor: 이전 코드 삭제)
>>>>>>> 30dbf49 (refactor: 이전 코드 삭제)
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
<<<<<<< HEAD
export type ParamBaekCreateProblemContent = ParamCreateProblemContent & BaekjunLevel;
=======
<<<<<<< HEAD
export type ParamBaekCreateProblemContent = ParamCreateProblemContent & BaekjunLevel;
=======
export type ParamBaekCreateProblemContent = ParamCreateProblemContent &
  BaekjunLevel;
>>>>>>> cb8c98f (refactor: 이전 코드 삭제)
>>>>>>> 30dbf49 (refactor: 이전 코드 삭제)
export type ParamBaekGetMessage = ParamGetMessage & BaekjunLevel;
export type ParamBaekGetDirectory = ParamGetDirectory & BaekjunLevel;
export interface ParamGetMessage {
  title: string;
  spentMemory: string;
  spentTime: string;
  solvingTime: string;
}

type ProblemInfo = {
  submissionId: string;
  problemId: string;
  spentTime: string;
  spentMemory: string;
  language: keyof typeof Language;
  solvingTime: string;
  code: string;
  description: string;
};

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
          this.renderModal(submitedInfo);
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

    return {
      submissionId,
      problemId,
      spentTime: submitedInfo.cells[5].innerText,
      spentMemory: submitedInfo.cells[4].innerText,
      language: $("a", submitedInfo.cells[6])
        .innerText as keyof typeof Language,
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

    callback({ modal: true });
    deleteChromeLocalStorage(chromeStorageId.BaekjunStartTime);
    deleteChromeLocalStorage(chromeStorageId.BaekjunProblemId);
  }

  static async renderModal(submitedInfo: HTMLTableRowElement) {
    const data = await Baekjun.getProblemInfoByDom(submitedInfo);
    const {
      problemId,
      submissionId,
      solvingTime,
      code,
      description,
      language,
      spentMemory,
      spentTime,
    } = data;
    let res;
    let nextStartNum;
    const others: Array<string | number>[] = [];
    for (let n = 0; n < 10; n++) {
      if (n == 0) {
        res = await fetch(
          `https://www.acmicpc.net/status?problem_id=${problemId}&language_id=${Language[language]}&result_id=4&from_problem=1`
        )
          .then((response) => response.text())
          .then((data) =>
            new window.DOMParser().parseFromString(data, "text/html")
          );
      } else {
        if (!nextStartNum) {
          continue;
        }
        res = await fetch(
          `https://www.acmicpc.net/status?problem_id=${problemId}&language_id=${Language[language]}&result_id=4&from_problem=1&top=${nextStartNum}`
        )
          .then((response) => response.text())
          .then((data) =>
            new window.DOMParser().parseFromString(data, "text/html")
          );
      }

      const rows = $$("tr", $("tbody", res)).slice(1, undefined);
      rows.forEach((row) => {
        const tds = $$("td", row);
        const memory = tds[4].textContent as string;
        const time = tds[5].textContent as string;

        const link = tds[6].querySelector("a");
        if (link) {
          others.push([
            (Number(memory) / 1000).toFixed(2),
            Number(time),
            link.href,
          ]);
          return;
        }

        others.push([(Number(memory) / 1000).toFixed(2), Number(time)]);
      });

      const nextPage = res.querySelector(
        "#next_page"
      ) as HTMLAnchorElement | null;

      if (nextPage) {
        nextStartNum = nextPage.href.split("top=")[1];
      }
    }

    const avgMemory = Math.round(
      others.reduce((acc, value) => acc + Number(value[0]), 0) / others.length
    );
    const avgTime =
      Math.round(
        (others.reduce((acc, value) => acc + Number(value[1]), 0) /
          others.length) *
          100
      ) / 100;

    const lowMemories = [...others].sort((a, b) => Number(a[0]) - Number(b[0]));
    const lowTimes = [...others].sort((a, b) => Number(a[1]) - Number(b[1]));

    const myMemory = (Number(spentMemory) / 1000).toString();

    console.log(lowMemories, "lowMemories");
    console.log(lowTimes, "lowTimes");

    const myRuntimePercent = [
      ...others.map((item) => item[1]),
      Number(spentTime),
    ]
      .sort((a, b) => Number(a) - Number(b))
      .indexOf(Number(spentTime));

    const myMemoryPercent = [
      ...others.map((item) => Number(item) / 1000),
      Number(myMemory),
    ]
      .sort((a, b) => a - b)
      .indexOf(Number(myMemory));

    insertHTML({
      element: $(".container.content"),
      position: "afterbegin",
      html: `<Modal></Modal>`,
    });
    new Modal({
      node: $("Modal"),
      state: {
        isOpen: true,
        avgMemory,
        avgTime,
        lowMemories,
        lowTimes,
        spentMemory: myMemory,
        spentTime,
        solvingTime,
        submissionId,
        myRuntimePercent,
        myMemoryPercent,
      },
    });
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
