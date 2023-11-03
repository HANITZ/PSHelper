import { Button, Component } from "@Components";
import "./Modal.css";
import { ModalHeader } from "./ModalHeader";
import { getChromeLocalStorage, getQueryParam, selectEl } from "@utils";
import { ModalContent } from "./ModalContent";
import { Baekjun } from "@Controller/Baekjun";
import { AvatarURL, User } from "API/postReqAPI";

type PropsModal = {
  isOpen: boolean;
  avgMemory: number;
  avgTime: number;
  lowMemories: Array<string | number>[];
  lowTimes: Array<string | number>[];
  spentTime: string;
  spentMemory: string;
  solvingTime: string;
  submissionId: string;
  myRuntimePercent: number;
  myMemoryPercent: number;
};

export default class Modal extends Component<PropsModal> {
  async createChildComponents() {
    const {
      isOpen,
      avgMemory,
      avgTime,
      lowMemories,
      lowTimes,
      spentMemory,
      spentTime,
      solvingTime,
      submissionId,
      myRuntimePercent,
      myMemoryPercent,
    } = this.state;

    if (isOpen) {
      const { USER: user } = (await getChromeLocalStorage("USER")) as User;
      const { AVATARURL: avatarUrl } = (await getChromeLocalStorage(
        "AVATARURL"
      )) as AvatarURL;

      new ModalHeader({
        node: selectEl("ModalHeader", this.node),
        state: {
          name: user,
          submitedTime: new Date(),
          submissionId,
          solvingTime,
          onClose: this.modalHandler.bind(this),
        },
      });

      new ModalContent({
        node: selectEl("ModalContent", this.node),
        state: {
          avgMemory,
          avgTime,
          lowMemories,
          lowTimes,
          spentMemory,
          spentTime,
          avatarUrl,
          myRuntimePercent,
          myMemoryPercent,
          effShow: "RUNTIME",
        },
      });

      new Button({
        node: selectEl("ModalButton", this.node),
        state: {
          name: "닫기",
          onClick: this.modalHandler.bind(this),
        },
      });
    }
  }

  modalHandler() {
    const state = this.state;
    this.setState({ ...state, isOpen: false });
  }

  template() {
    const { isOpen } = this.state;
    return `
      <div>
      ${
        isOpen &&
        `<div class="ps-modal-container">
          <ModalHeader class="ps-modal-header" ></ModalHeader>
          <ModalContent class="ps-modal-body" ></ModalContent>
        </div>`
      }       
      </div>
      `;
  }
}
