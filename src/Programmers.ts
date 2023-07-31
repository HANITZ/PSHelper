import { $, $$, enrollEvent, getElById } from "./utils/jsUtils";
import { getChromeMessage, setChromeStorage, getChromeStorage } from "./chromeUtils";


interface  PROBLEM {
    isSolved: string,
    title: string,
    level: string,
    finishedCoun: string,
    acceptanceRage: string
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
        console.log(title);
        console.log(isSolved);
        console.log(acceptanceRate);
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
    getChromeStorage("PROBLEM", (data:PROBLEM) => {
      console.log(data);
    });
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
      if (modalText.innerText.includes("정답입니다.")) {
        this.parse();
        clearInterval(modalCheckInterval);
      }
    }, 1000);
  };

  parse = () => {
    console.log(window.location.href);
    const metaTag = $("head > meta[name$=url]") as any;
    const link = metaTag.content.replace(/\?.*/g, "").trim();
    const problemId = $("div.main > div.lesson-content")!.getAttribute(
      "data-lesson-id"
    );
    const tcBtn = getElById("btn-show-question");
    console.log(tcBtn);
    if (!tcBtn) return;
    console.log(tcBtn.getAttribute("href"));
  };
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
