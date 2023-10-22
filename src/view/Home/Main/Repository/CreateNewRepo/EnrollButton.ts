import { selectEl } from "../../../../../utils/jsUtils";
import Component from "../../../Component";

type PropsButton = {
  btnName?: string;
  enrollHandler: Function;
};

export default class EnrollButton extends Component<PropsButton> {
  setEvent() {
    const { enrollHandler } = this.state;
    this.node.addEventListener("click", (e) => {
      e.preventDefault();
      enrollHandler();
    });
  }

  template() {
    const { btnName } = this.state;

    return `
    <div>${btnName ? btnName : "버튼"}</div>`;
  }
}
