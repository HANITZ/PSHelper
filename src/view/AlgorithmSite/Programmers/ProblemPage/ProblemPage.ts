import { Component } from "@Components";
import { $, selectEl } from "@utils";
import "./ProblemPage.css";
import { ProgrammersModal } from "./ProgrammersModal";
import ProgrammersTimer from "./ProgrammersTimer/ProgrammersTimer";

type PropsProblemPage = {
  isTimer: boolean;
  isUpload: boolean;
};

export default class ProblemPage extends Component<PropsProblemPage> {
  async componentDidMount(): Promise<void> {}

  async createChildComponents() {
    const { isTimer } = this.state;

    if (isTimer) {
      new ProgrammersTimer({
        node: this.node,
        state: { isTimer },
      });
    }
  }

  setEvent() {
    const { isUpload } = this.state;
    $("#submit-code").addEventListener("click", () => {
      const interval = setInterval(() => {
        const modalElement = $(".modal-body");
        if (modalElement) {
          new ProgrammersModal({
            node: modalElement,
            state: {
              isUpload,
            },
          });
          clearInterval(interval);
        }
      }, 2000);
    });
  }

  render() {
    this.createChildComponents();
    this.setEvent();
  }
}
