import { Component, Status } from "@Components";
import { Programmers } from "@Controller/Programmers";
import { $, chromeStorageId, insertHTML, isUndefined, selectEl } from "@utils";
import { ComponentProps } from "Components/Component/Component";
import "./ProgrammersModal.css";
import ProgrammersStatus from "./ProgrammersStatus/ProgrammersStatus";

type PropsProgrammersModal = {
  isUpload: boolean;
  isSuccess?: boolean;
  isCommited?: boolean;
};

export default class ProgrammersModal extends Component<PropsProgrammersModal> {
  constructor({ node, state }: ComponentProps<PropsProgrammersModal>) {
    const newState = {
      ...state,
      isSuccess: Programmers.checkSuccess(),
    };
    super({ node, state: newState });
  }

  createChildComponents(): void {
    const { isSuccess, isUpload, isCommited } = this.state;
    if (isSuccess) {
      new ProgrammersStatus({
        node: selectEl("ProgrammersStatus", this.node),
        state: {
          isCommited,
        },
      });
    }
  }

  async componentDidMount() {
    const { isUpload, isSuccess } = this.state;
    if (isSuccess) {
      await Programmers.afterSuccess(isUpload, this.setState.bind(this));
    }
  }

  render() {
    this.insertComponent();
    this.createChildComponents();
    this.setEvent();
  }

  insertComponent() {
    insertHTML({
      element: this.node as HTMLElement,
      position: "afterbegin",
      html: this.template(),
    });
    this.node = $(".pshelper-container");
  }

  template() {
    const { isCommited, isSuccess } = this.state;

    if (!isSuccess) {
      return ``;
    }

    return `
		<div class="pshelper-container">
			<ProgrammersStatus  ></ProgrammersStatus>	
		</div>
		`;
  }
  clearComponent() {
    const oldNode = this.node;
    this.node = this.node.parentElement as Element;
    oldNode.remove();
  }

  setState(newState: Partial<PropsProgrammersModal>) {
    this.clearComponent();
    super.setState(newState);
  }
}
