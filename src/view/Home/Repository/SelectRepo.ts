import { Repos } from "../../../API/getReqAPI";
import { selectAllEl, selectEl } from "../../../utils/jsUtils";
import Component from "../Component";
import Button from "./Button";

type PropsSelectRepo = {
  selected?: string;
  repos: Repos[];
};

export default class SelectRepo extends Component<PropsSelectRepo> {
  setEvent() {
    selectEl(".dropdown-select-repo", this.node).addEventListener(
      "click",
      () => {
        selectEl(".dropdown-select-repo", this.node).classList.toggle("active");
      }
    );

    selectEl(".select-repo", this.node).addEventListener("blur", (e) => {
      const inputEl = e.target as HTMLInputElement;
      this.setState({ selected: inputEl.value });
    });

    selectAllEl(".option-repo", this.node).forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        const inputEl = selectEl(".select-repo", this.node) as HTMLInputElement;
        const optionEl = e.target as HTMLElement;
        inputEl.value = optionEl.innerText;
      });
    });
  }

  async createChildComponents() {
    new Button({
      node: selectEl(".link", this.node),
      state: {
        btnName: "Link",
      },
    });
  }

  template() {
    const { repos, selected } = this.state;
    return `
    <div style="display: flex;" >
      <div class="dropdown-select-repo">
        <input type="text" class="select-repo" readonly placeholder="${
          selected ? selected : "Select Your Repo"
        }" />
        <div class="options-repo">
        ${repos
          .map((repo) => `<div class="option-repo">${repo.name}</div>`)
          .join(" ")}
        </div>
      </div>
      <div class="link"></div>
    </div>
    `;
  }
}
