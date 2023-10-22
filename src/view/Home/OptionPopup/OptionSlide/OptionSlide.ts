import { sendChromeMessage } from "../../../../utils/chromeUtils";
import { selectEl } from "../../../../utils/jsUtils";
import Component from "../../Component";
import "./OptionSlide.css";

type PropsOption = {
  id: string;
  isActive?: boolean;
  optionTitle: string;
};

export default class OptionSlide extends Component<PropsOption> {
  setEvent() {
    const { id } = this.state;
    selectEl(".slider", this.node).addEventListener("click", (e) => {
      e.preventDefault();
      const input = selectEl("input", this.node) as HTMLInputElement;
      sendChromeMessage({
        action: id,
        method: "post",
        isActive: !input.checked,
      });
      input.checked = !input.checked;
    });
  }
  template() {
    const { id, isActive, optionTitle } = this.state;
    return `
    <div>
      <span>${optionTitle}</span>
      <label for="${id}" class="repo-switch">
        <input type="checkbox" id="${id}" ${isActive ? "checked" : ""} />
        <span class="slider"></span>
      </label>
    </div>
    `;
  }
}
