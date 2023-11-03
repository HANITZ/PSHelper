import { Component } from "@Components";
import { Programmers } from "@Controller/Programmers";
import {
  $,
  $$,
  chromeStorageId,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "@utils";

type PropsBeforeProblemPage = {};

export default class BeforeProblemPage extends Component<PropsBeforeProblemPage> {
  setEvent() {
    const problems = Programmers.getProblemInfoFromList();
    problems.forEach((problem) => {
      const { isSolved, title, level, finishedCount, acceptanceRate, element } =
        problem;
      element.addEventListener("click", async () => {
        setChromeLocalStorage({
          [chromeStorageId.ProgrammersProblemInfo]: {
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
