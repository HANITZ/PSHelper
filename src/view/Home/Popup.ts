import { User } from "../../API/postReqAPI";
import { selectEl, getChromeLocalStorage } from "@utils";
import { Component } from "@Component";
import { Footer } from "@Footer";
import { Main } from "@Main";
import { OptionPopup } from "@OptionPopup";
import "./Popup.css";

type PropsPopup = {
  user?: string;
  repoName?: string;
};

export default class Popup extends Component<PropsPopup> {
  createChildComponents() {
    const { user, repoName } = this.state;

    new Main({
      node: selectEl("MainContainer", this.node),
      state: {
        user,
        repoName,
        setStatePopup: this.setState.bind(this),
      },
    });

    if (repoName) {
      new OptionPopup({
        node: selectEl("OptionContainer", this.node),
        state: {},
      });
    }

    new Footer({
      node: selectEl("Footer", this.node),
      state: {},
    });
  }

  async componentDidMount(): Promise<void> {
    const { USER: user } = (await getChromeLocalStorage("USER")) as User;
    const { repoName } = (await getChromeLocalStorage("repoName")) as {
      repoName: string;
    };

    this.setState({ user, repoName });
  }

  template() {
    const { repoName } = this.state;

    return `
    <div id="root" >
      <MainContainer  class="main-container"></MainContainer>
      ${
        repoName
          ? `<OptionContainer class="option-container"></OptionContainer>`
          : ``
      }
      <Footer class="footer"></Footer>
    <div>
  `;
  }
}
