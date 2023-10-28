import { Component } from "@Components";
import "./Modal.css";
import { ModalHeader } from "./ModalHeader";
import { selectEl } from "@utils";

type PropsModal = {};

export default class Modal extends Component<PropsModal> {


  createChildComponents(){
    new ModalHeader({
      node: selectEl("ModalHeader", this.node),
      state: {}
    })

    
  }

  template() {
    return `
      <div class="ps-modal-container">
        <ModalHeader class="ps-modal-header" ></ModalHeader>
        <ModalContent class="ps-modal-body" ></ModalContent>
      </div>
      `;
  }
}
