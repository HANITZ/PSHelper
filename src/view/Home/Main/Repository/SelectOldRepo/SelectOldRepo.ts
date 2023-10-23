import { Repos } from "../../../../../API/getReqAPI";
import { selectAllEl, selectEl, sendChromeMessage } from "@utils";
import { Component } from "@Component";
import LinkButton from "./LinkButton";
import "./SelectOldRepo.css";

type PropsSelectOldRepo = {
  selected?: string;
  repos: Repos[];
  setStatePopup: Function;
};

export default class SelectOldRepo extends Component<PropsSelectOldRepo> {
  setEvent() {
    selectEl(".dropdown-select-repo", this.node).addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        selectEl(".dropdown-select-repo", this.node).classList.toggle("active");
      }
    );

    selectEl(".select-repo", this.node).addEventListener("blur", (e) => {
      e.preventDefault();
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

  createChildComponents() {
    const { selected } = this.state;

    if (selected) {
      new LinkButton({
        node: selectEl("LinkButton", this.node),
        state: {
          btnName: "Link",
          LinkHandler: this.LinkHandler.bind(this),
        },
      });
    }
  }
  LinkHandler() {
    const { setStatePopup } = this.state;
    sendChromeMessage({
      action: "repoName",
      method: "post",
      repoName: this.state.selected,
    });
    setStatePopup({ repoName: this.state.selected });
  }

  template() {
    const { repos, selected } = this.state;
    return `
    <div>
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
      ${selected ? '<LinkButton class="new-repo-button"></LinkButton>' : ""}
    </div>
    `;
  }
}
