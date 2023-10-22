import { selectEl } from "../../../../../utils/jsUtils";
import Component from "../../../Component";

type PropsVerifyButton = {
  btnName?: string;
  verifyHandler: Function;
};

export default class VerifyButton extends Component<PropsVerifyButton> {
  setEvent() {
    const { verifyHandler } = this.state;
    this.node.addEventListener("click", () => {
      verifyHandler();
    });
  }

  template() {
    const { btnName } = this.state;

    return `
    <div>${btnName ? btnName : "버튼"}</div>`;
  }
}
