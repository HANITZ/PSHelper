import { selectEl } from "../../../utils/jsUtils";
import Component from "../Component";

type PropsLogo = {
  user?: string;
  repoName?: string;
};

export default class Logo extends Component<PropsLogo> {
  setEvent(): void {
    selectEl(".logo-button", this.node).addEventListener("click", () => {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
      );
    });

    if(this.state.repoName){
        selectEl(".logo-repo-logined", this.node)
    }

  }
  template(): string {
    const { repoName, user } = this.state;
    return `
    <div class="logo-container">
      <img class="logo-button" src="./PSHelper.png" alt="" />
      ${user
      ? `<div class="logo-text-logined" >User: ${user}</div>`
      : '<div class="logo-text" >Click Logo to connect to GitHub</div>'}
      ${repoName
      ?  `<div class="logo-repo-logined" >Repository: ${repoName}</div>`
      : ``}
    </div>
    `;
  }
}
