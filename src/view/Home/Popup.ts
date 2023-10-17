import { User } from "../../API/postReqAPI";
import { RepoName } from "../../Popup/Popup";
import { getChromeLocalStorage } from "../../utils/chromeUtils";
import { $, selectEl } from "../../utils/jsUtils";
import Component, { ComponentProps } from "./Component";
import Footer from "./Footer";
import Main from "./Main";
import OptionPopup from "./OptionPopup";

type PropsPopup = {};

export default class Popup extends Component<PropsPopup> {
  constructor({ node }: ComponentProps<PropsPopup>) {
    const state = {
      isTimer: true,
      isUpload: true,
    };
    super({ node, state });
  }
  async createChildComponents() {
    const { USER } = (await getChromeLocalStorage("USER")) as User;
    const { repoName } = (await getChromeLocalStorage("repoName")) as RepoName;

    const mainEl = new Main({
      node: selectEl(".main-container", this.node),
      state: {
        user: USER,
        repoName,
      },
    });

    const optionEl = new OptionPopup({
      node: selectEl(".option-container", this.node),
      state: {
        isUpload: true,
        isTimer: true,
      },
    });

    const footerBtn = new Footer({
      node: selectEl("footer", this.node),
      state: {},
    });
  }

  template() {
    return `
  <div class="main-container"></div>
  <div class="option-container" style="display: none"></div>
  <footer></footer>
  `;
  }
}
