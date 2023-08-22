import {
  $,
  $$,
  convertSingleCharToDoubleChar,
  enrollEvent,
  getElById,
} from "./utils/jsUtils";
import { setChromeLocalStorage, getChromeLocalStorage } from "./chromeUtils";
import {
  createBlob,
  createCommit,
  createTree,
  updateHead,
} from "./API/postReqAPI";
import { getDefaultBranch, getReference } from "./API/getReqAPI";

interface PROBLEM {
  PROBLEM: {
    isSolved: string;
    title: string;
    level: string;
    finishedCount: string;
    acceptanceRate: string;
  };
}

class Programmers {
  constructor() {
    this.init();
  }
  init = () => {};

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
      const title = $("td.title", tr)!.innerText;
      const level = $("td.level", tr)!.innerText;
      const finishedCount = $("td.finished-count", tr)!.innerText;
      const acceptanceRate = $("td.acceptance-rate", tr)!.innerText;

      enrollEvent(tr, "click", () => {
        setChromeLocalStorage({
          PROBLEM: {
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

  startSolve = () => {
    this.setEvents();
  };
  setEvents = () => {
    const submitButton = getElById("submit-code");

    enrollEvent(submitButton, "click", () => {
      const startTime = new Date().getTime();
      const interval = setInterval(async () => {
        const nowTime = new Date().getTime();
        if (this.checkSuccess()) {
          const solvedData = await this.parseCode();
          clearInterval(interval);
          this.uploadCode(solvedData);
        }
        if (nowTime - startTime >= 20000) {
          clearInterval(interval);
        }
      }, 2000);
    });
  };
  uploadCode = async ({
    directory,
    code,
    message,
    readMe,
    fileName,
  }: FilesReadyToUproad) => {
    const defaultBranch = await getDefaultBranch();
    const { refSHA, ref } = await getReference(defaultBranch);
    const sourceCode = await createBlob(code, fileName, directory);
    const sourceReadMe = await createBlob(readMe, "README.md", directory);
    const treeSHA = await createTree(refSHA, [sourceCode, sourceReadMe]);
    const commitSHA = await createCommit(message, treeSHA, refSHA);
    const newHeadSHA = await updateHead(ref, commitSHA);
  };

  checkSuccess = () => {
    const modalText = $(".modal-title");
    if (modalText.innerText.includes("정답입니다")) {
      return true;
    }
    return false;
  };

  parseCode = async () => {
    const problemData = (await getChromeLocalStorage("PROBLEM")) as PROBLEM;
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
    console.log(avgTime, avgMemory);
    const a = $$(".result.passed");
    a.forEach((aa) => {
      console.log(aa);
    });

    return this.makeFiles({
      link,
      problemData,
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
    return $$("tr", $("tbody"))
      .slice(4)
      .map((tr) => $(".result", tr)!.innerText)
      .map((node) => node.replace(/[^., 0-9]/g, "").trim())
      .map((node) => node.split(", "))
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
      .map((num) => num.toString());
  };
  makeFiles = ({
    link,
    problemData,
    problemId,
    division,
    problemDescription,
    languageExtension,
    resultMessage,
    code,
    avgTime,
    avgMemory,
  }: RawFiles): FilesReadyToUproad => {
    const { level, isSolved, finishedCount, acceptanceRate } =
      problemData.PROBLEM;
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
      `# [${level}] ${problemData.PROBLEM.title} - ${problemId} \n\n` +
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
}

type RawFiles = {
  link: string;
  problemData: PROBLEM;
  problemId: string | null;
  division: string;
  problemDescription: string;
  languageExtension: string;
  resultMessage: string;
  code: string;
  avgTime: string;
  avgMemory: string;
};
type FilesReadyToUproad = {
  directory: string;
  message: string;
  fileName: string;
  readMe: string;
  code: string;
};
const programmers = new Programmers();
if (
  window.location.href.includes("/learn/courses/30") &&
  window.location.href.includes("lessons")
) {
  programmers.startSolve();
} else if (window.location.href.includes("challenges")) {
  programmers.readySolve();
}
