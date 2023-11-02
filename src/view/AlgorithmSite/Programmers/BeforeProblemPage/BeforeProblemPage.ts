import { Component } from "@Components";
import { Programmers } from "@Controller/Programmers";
import { $, $$, setChromeLocalStorage } from "@utils";

type PropsBeforeProblemPage = {};

export default class BeforeProblemPage extends Component<PropsBeforeProblemPage> {
  setEvent() {
    const problems = Programmers.getProblemInfoFromList();
    problems.forEach((problem) => {
      const { isSolved, title, level, finishedCount, acceptanceRate } = problem;
      problem.element.addEventListener("click", () => {
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
