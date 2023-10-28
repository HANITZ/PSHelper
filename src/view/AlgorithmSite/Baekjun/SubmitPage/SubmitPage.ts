import { Component } from "@Components";
import { Baekjun } from "@Controller/Baekjun";
import { chromeStorageId, setChromeLocalStorage } from "@utils";

type PropsSubmitPage = {

};

export default class SubmitPage extends Component<PropsSubmitPage> {
  setEvent() {
    this.node.addEventListener("click", () => {
      setChromeLocalStorage({
        [chromeStorageId.SubmissionId]: Baekjun.getProblemId(window.location.href),
      });
    });
  }
  render(): void {
    this.setEvent();
  }
}
