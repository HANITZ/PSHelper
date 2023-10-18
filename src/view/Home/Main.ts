import { selectEl } from "../../utils/jsUtils";
import Component, { ComponentProps } from "./Component";
import Logo from "./Logo/Logo";
import Repository from "./Repository/Repository";

type PropsMain = {
  user: string;
  repoName: string;
};

export default class Main extends Component<PropsMain> {
  constructor({ node, state }: ComponentProps<PropsMain>) {
    const initialState = {
      ...state,
      type: "default",
    };
    super({ node, state: initialState });
  }

  async createChildComponents() {
    const { user, repoName } = this.state;

    new Logo({
      node: selectEl("LogoContainer", this.node),
      state: this.state,
    });

    if (user && !repoName) {
      new Repository({
        node: selectEl("RepoContainer", this.node),
        state: {},
      });
    }
  }

  template() {
    const { user, repoName } = this.state;
    return `
    <div class="main-container" >
      <LogoContainer></LogoContainer>
      ${user ? (repoName ? "" : '<RepoContainer></RepoContainer>') : ""}
    </div>
    `;
  }
}
