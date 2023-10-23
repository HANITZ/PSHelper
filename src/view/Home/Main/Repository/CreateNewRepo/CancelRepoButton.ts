import { Component } from "@Component";

type PropsCancelRepoButton = {
  btnName?: string;
  setStateNewRepo: Function;
};

export default class CancelRepoButton extends Component<PropsCancelRepoButton> {
  setEvent(): void {
    const { setStateNewRepo } = this.state;
    this.node.addEventListener("click", (e) => {
      e.preventDefault();

      setStateNewRepo({ isVerified: false, textValue: "" });
    });
  }

  template() {
    const { btnName } = this.state;

    return `
        <div>${btnName ? btnName : "버튼"}</div>
        `;
  }
}
