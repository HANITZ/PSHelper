import { Repos, getUserRepos } from "../../../../API/getReqAPI";
import { selectEl } from "@utils";
import { Component } from "@Component";
import { CreateNewRepo } from "@CreateNewRepo";
import { SelectOldRepo } from "@SelectOldRepo";
import { SelectType } from "@SelectType";
import "./Repository.css";

type PropsRepository = {
  type?: string;
  repos?: Repos[];
  setStatePopup: Function;
};

export default class Repository extends Component<PropsRepository> {
  createChildComponents() {
    const { type, setStatePopup, repos } = this.state;

    new SelectType({
      node: selectEl("SelectType", this.node),
      state: {
        type,
        setKey: this.setState.bind(this),
        selectList: ["New", "Old"],
      },
    });
    if (!repos) return;

    switch (type) {
      case "New":
        new CreateNewRepo({
          node: selectEl("CreateNewRepo", this.node),
          state: { isVerified: false, repos, setStatePopup },
        });
        break;
      case "Old":
        new SelectOldRepo({
          node: selectEl("SelectOldRepo", this.node),
          state: { repos, setStatePopup },
        });
        break;
    }
  }
  async componentDidMount() {
    const repos = await getUserRepos();
    const newState = {
      ...this.state,
      repos,
    };
    this.setState(newState);
  }

  template(): string {
    const { type } = this.state;
    return `
    <div>
      <SelectType class="repo-type" ></SelectType>
      <div class="repo-content">
      ${type ? `` : `<input class="before-select-type" readonly /> `}
      ${type === "New" ? `<CreateNewRepo></CreateNewRepo>` : ""}
      ${
        type === "Old"
          ? `<SelectOldRepo class="old-repo-select" ></SelectOldRepo>`
          : ``
      }
      </div>
    </div>
    `;
  }
}
