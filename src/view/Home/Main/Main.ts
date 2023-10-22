import { selectEl } from "../../../utils/jsUtils";
import Component, { ComponentProps } from "../Component";
import Logo from "./Logo/Logo";
import Repository from "./Repository/Repository";
import "./Main.css";

type PropsMain = {
  user?: string;
  repoName?: string;
  setStatePopup: Function;
};

export default class Main extends Component<PropsMain> {
  createChildComponents() {
    const { user, repoName, setStatePopup } = this.state;

    new Logo({
      node: selectEl("LogoContainer", this.node),
      state: this.state,
    });

    if (user && !repoName) {
      new Repository({
        node: selectEl("RepoContainer", this.node),
        state: {
          setStatePopup,
        },
      });
    }
  }

  template() {
    const { user, repoName } = this.state;
    return `
    <div>
      <LogoContainer class="logo-container"></LogoContainer>
      ${
        user
          ? repoName
            ? ``
            : `<RepoContainer class="repo-container" ></RepoContainer>`
          : ``
      }
    </div>
    `;
  }
}
