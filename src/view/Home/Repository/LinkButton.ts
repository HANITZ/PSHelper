import { selectEl } from "../../../utils/jsUtils";
import Component from "../Component";

type PropsButton = {
  btnName?: string;
};

export default class LinkButton extends Component<PropsButton> {
  setEvent() {
    this.node.addEventListener("click", () => {});
  }

  template() {
    const { btnName } = this.state;

    return `<div>${btnName ? btnName : "버튼"}</div>`;
  }
}
