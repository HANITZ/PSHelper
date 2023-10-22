import { User } from "../../API/postReqAPI";
import { RepoName } from "../../Popup/Popup";
import { getChromeLocalStorage } from "../../utils/chromeUtils";
import { selectEl } from "../../utils/jsUtils";
import Component, { ComponentProps } from "./Component";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import OptionPopup from "./OptionPopup/OptionPopup";
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
    const { repoName } = (await getChromeLocalStorage("repoName")) as RepoName;

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
