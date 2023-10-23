import { Component } from "Components/Component";

type PropsButton = {
  name?: string;
  onClick: Function;
};

export default class Button extends Component<PropsButton> {
  setEvent(): void {
    const { onClick } = this.state;
    this.node.addEventListener("click", (e) => {
      e.preventDefault();
      onClick();
    });
  }

  template(): string {
    const { name } = this.state;

    return `<div>${name ? name : "버튼"}</div>`;
  }
}
