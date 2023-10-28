import { Component } from "@Components";
import { $, $$, setChromeLocalStorage } from "@utils";

type PropsBeforeProblemPage = {};

export default class BeforeProblemPage extends Component<PropsBeforeProblemPage> {
  setEvent() {
    const problems = $$("tr", this.node as HTMLElement);
    problems.slice(1).forEach((tr) => {
      const isSolved = $("td.status.solved", tr) ? "solved" : "unsolved";
      const title = $("td.title", tr).innerText;
      const level = $("td.level", tr).innerText;
      const finishedCount = $("td.finished-count", tr).innerText;
      const acceptanceRate = $("td.acceptance-rate", tr).innerText;
      tr.addEventListener("click", () => {
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
  }

  render() {
    this.setEvent();
  }
}
