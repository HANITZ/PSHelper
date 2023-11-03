import { Component } from "@Components";
import { SubmitedUser } from "./SubmitedUser";
import { $, CloseButton, selectEl } from "@utils";

type PropsModalHeader = {
  name?: string;
  submitedTime: Date;
  submissionId: string;
  solvingTime: string;
  onClose: Function;
};

export default class ModalHeader extends Component<PropsModalHeader> {
  createChildComponents(): void {}
  setEvent(): void {
    const { onClose } = this.state;
    $(".close-btn", this.node as HTMLElement).addEventListener("click", () =>
      onClose()
    );
  }
  template() {
    const { name, submitedTime, submissionId, solvingTime } = this.state;
    const time = submitedTime.toLocaleString();
    return `
    <div class="ps-modal-header">
      <div class="ps-user">
        <span class="name">${name}</span>
        <span class="submitted-time">${time}</span>
        <span class="submission-id">제출 ID : ${submissionId}</span>
        <span class="solve-time" >풀이시간 : ${solvingTime}</span>
      </div>
      <div class="close-btn" >
        ${CloseButton()}
      </div>
    </div>
        `;
  }
}
