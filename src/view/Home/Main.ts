import { selectEl } from "../../utils/jsUtils";
import Component from "./Component";
import Logo from "./Logo/Logo";

type PropsMain = {
  user: string;
  repoName: string;
};

export default class Main extends Component<PropsMain> {
  async createChildComponents() {
    new Logo({
      node: selectEl(".logo-container", this.node),
      state: this.state,
    });
  }

  template() {
    const { user, repoName } = this.state;
    console.log(user, repoName);
    return `
    <div class="logo-container"></div>
    ${user ? '<div class="repo-container"></div>' : ""}
    `;
  }
}
