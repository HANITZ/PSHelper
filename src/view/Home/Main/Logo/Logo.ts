import { selectEl, sendChromeMessage } from "@utils";
import { Component } from "@Components";
import "./Logo.css";

type PropsLogo = {
  user?: string;
  repoName?: string;
  setStatePopup: Function;
};

export default class Logo extends Component<PropsLogo> {
  setEvent(): void {
    const { user, repoName, setStatePopup } = this.state;

    selectEl(".logo-button", this.node).addEventListener("click", () => {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
      );
    });

    if (repoName) {
      selectEl(".logo-repo-logined", this.node).addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          sendChromeMessage({ action: "repoName", repoName: "" });
          const newState = {
            ...this.state,
            repoName: "",
          };
          setStatePopup(newState);
        }
      );
    }
  }
  template() {
    const { repoName, user } = this.state;
    return `
    <div>
      <img class="logo-button" src="./PSHelper.png" alt="" />
      ${
        user
          ? `<div class="logo-text-logined" >User: ${user}</div>`
          : '<div class="logo-text" >Click Logo to connect to GitHub</div>'
      }
      ${
        repoName
          ? `<div class="logo-repo-logined" >Repository: ${repoName}</div>`
          : ``
      }
    </div>
    `;
  }
}
