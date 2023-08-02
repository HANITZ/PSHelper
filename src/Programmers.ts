import { $, $$, enrollEvent, getElById } from "./utils/jsUtils";
import {
  getChromeMessage,
  setChromeStorage,
  getChromeStorage,
} from "./chromeUtils";

interface PROBLEM {
  PROBLEM: {
    isSolved: string;
    title: string;
    level: string;
    finishedCount: string;
    acceptanceRage: string;
  };
}

class Programmers {
  constructor() {}
  readySolve = async () => {
    const tableCheckInterval = setInterval(() => {
      const elements = $$("tr", $("table") as HTMLElement);
      if (elements) {
        this.setProblemsEvent(elements);
        clearInterval(tableCheckInterval);
      }
    }, 1000);
  };
  setProblemsEvent = (problems: NodeListOf<HTMLElement>) => {
    Array.from(problems)
      .slice(1)
      .forEach((tr) => {
        const isSolved = $("td.status.solved", tr) ? "solved" : "unsolved";
        const title = $("td.title", tr)!.innerText;
        const level = $("td.level", tr)!.innerText;
        const finishedCount = $("td.finished-count", tr)!.innerText;
        const acceptanceRate = $("td.acceptance-rate", tr)!.innerText;

        enrollEvent(tr, "click", () => {
          setChromeStorage({
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
    if (!submitButton) return;

    enrollEvent(submitButton, "click", () => {
      this.checkSuccess();
    });
  };
  checkSuccess = () => {
    const modalCheckInterval = setInterval(() => {
      const modalText = $("div.modal-header > h4");
      if (!modalText) return;
      if (modalText.innerText.includes("정답입니다")) {
        this.parseCode();
        clearInterval(modalCheckInterval);
      }
    }, 1000);
  };

  parseCode = async () => {
    const problemData = (await getChromeStorage("PROBLEM")) as PROBLEM;

    const metaTag = $("head > meta[name$=url]") as HTMLMetaElement;
    const link = metaTag.content.replace(/\?.*/g, "").trim();
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

    let code = $("textarea#code")!.innerText;

    const resultMessage =
      Array.prototype.slice
        .call($$("#output > pre.console-content > div.console-message"))
        .map((x) => x.innerText)
        .filter((x) => x.includes(": "))
        .reduce((x, y) => `${x}<br/>${y}`, "") || "Empty";
    const [avgTime, avgMemory] = Array.prototype.slice
      .call($$("tr", $("console-test-group") as HTMLElement))
      .slice(4)
      .map((tr) => $("td.result.passed", tr)!.innerText)
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

    const aa = await this.makeReadMe({
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
    console.log(aa);
  };

  makeReadMe = ({
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
  }: ReadeMe): string => {
    return (
      `# [${problemData.PROBLEM.level}] ${problemData.PROBLEM.title} - ${problemId} \n\n` +
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
      `> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges`
    );
  };
}
interface ReadeMe {
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
}
const programmers = new Programmers();

if (
  window.location.href.includes("/learn/courses/30") &&
  window.location.href.includes("lessons")
) {
  programmers.startSolve();
} else if (window.location.href.includes("challenges")) {
  programmers.readySolve();
}
