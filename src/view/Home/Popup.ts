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
    const state = {};
    super({ node, state });
  }
  async createChildComponents() {
    const { USER } = (await getChromeLocalStorage("USER")) as User;
    const { repoName } = (await getChromeLocalStorage("repoName")) as RepoName;
    console.log("시작");
    console.log(this.node);
    const mainEl = new Main({
      node: selectEl("MainContainer", this.node),
      state: {
        user: USER,
        repoName,
      },
    });
    console.log("통과");
    const optionEl = new OptionPopup({
      node: selectEl("OptionContainer", this.node),
      state: {
        isUpload: true,
        isTimer: true,
      },
    });

    const footerBtn = new Footer({
      node: selectEl("Footer", this.node),
      state: {},
    });
  }

  template() {
    return `
    <div id="root" >
      <MainContainer ></MainContainer>
      <OptionContainer></OptionContainer>
      <Footer></Footer>
    <div >
  `;
  }
}
