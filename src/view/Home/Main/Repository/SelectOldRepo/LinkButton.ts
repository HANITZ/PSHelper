import { selectEl } from "../../../../../utils/jsUtils";
import Component from "../../../Component";

type PropsButton = {
  btnName?: string;
  LinkHandler: Function;
};

export default class LinkButton extends Component<PropsButton> {
  setEvent() {
    const { LinkHandler } = this.state;
    this.node.addEventListener("click", (e) => {
      e.preventDefault();
      LinkHandler();
    });
  }

  template() {
    const { btnName } = this.state;

    return `<div>${btnName ? btnName : "버튼"}</div>`;
  }
}
