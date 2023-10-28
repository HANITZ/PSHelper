import { selectAllEl, selectEl } from "../../../../../utils/jsUtils";
import { Component } from "@Components";
import "./SelectType.css";

type PropsSelectType = {
  type?: string;
  setKey: Function;
  selectList: string[];
};

export default class SelectType extends Component<PropsSelectType> {
  setEvent(): void {
    const { setKey } = this.state;
    selectEl(".dropdown-select-type", this.node).addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        selectEl(".dropdown-select-type", this.node).classList.toggle("active");
      }
    );

    selectEl(".select-type", this.node).addEventListener("blur", (e) => {
      e.preventDefault();
      const inputEl = e.target as HTMLInputElement;
      selectEl(".dropdown-select-type", this.node).classList.remove("active");
      setKey({ type: inputEl.value });
    });

    selectAllEl(".option-type", this.node).forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        const inputEl = selectEl(".select-type", this.node) as HTMLInputElement;
        const optionEl = e.target as HTMLElement;
        inputEl.value = optionEl.innerText;
      });
    });
  }

  template(): string {
    const { type, selectList } = this.state;

    return `
    <div>
      <div class="dropdown-select-type">
        <input
          type="text"
          class="select-type"
          readonly
          placeholder="${type ? type : "Select"}"
        />
        <div class="options-type">
          ${selectList
            .map((name) => `<div class="option-type">${name}</div>`)
            .join(" ")}
        </div>
      </div>
    </div>
      `;
  }
}
