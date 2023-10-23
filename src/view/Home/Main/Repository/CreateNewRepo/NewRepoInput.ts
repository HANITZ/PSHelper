import { Component } from "@Component";

type PropsNewRepoInput = {
  text?: string;
  defaultText: string;
  setStateInput: Function;
};

export default class NewRepoInput extends Component<PropsNewRepoInput> {
  setEvent() {
    const { setStateInput } = this.state;
    this.node.addEventListener("change", (e) => {
      e.preventDefault();
      const inputEl = e.target as HTMLInputElement;
      setStateInput({ text: inputEl.value });
    });
  }

  template() {
    const { text, defaultText } = this.state;

    return `
    <input type="text" placeholder="${defaultText}" ${
      text ? `value="${text}"` : ``
    }/>
    `;
  }
}
