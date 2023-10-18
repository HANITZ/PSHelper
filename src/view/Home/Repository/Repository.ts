import { getUserRepos } from "../../../API/getReqAPI";
import { selectEl } from "../../../utils/jsUtils";
import Component, { ComponentProps } from "../Component";
import SelectRepo from "./SelectRepo";
import SelectType from "./SelectType";

type PropsRepository = {
  type?: string;
};

export default class Repository extends Component<PropsRepository> {
  async createChildComponents(): Promise<void> {
    const { type } = this.state;

    new SelectType({
      node: selectEl("RepoType", this.node),
      state: {
        type,
        setKey: this.setState.bind(this),
        selectList: ["New", "Old"],
      },
    });

    switch (type) {
      case "New":
        break;
      case "Old":
        const repos = await getUserRepos();
        new SelectRepo({
          node: selectEl("SelectRepo", this.node),
          state: {
            repos,
          },
        });
        break;

      default:
        break;
    }
  }

  template(): string {
    const { type } = this.state;
    return `
    <div class="repo-container">
      <RepoType></RepoType>
      <div class="repo-content">
      ${
        type
          ? ``
          : `
          <div class="default-select"> 
            <input type="text" class="before-select-type" readonly /> 
          </div>`
      }
      ${
        type === "New"
          ? `
          <div class="new-repo-create" > 
            <div style="display: flex">
              <input class="new-repo-input" type="text" placeholder="Create New Repo"/>
              <div id="verify-repo" class="new-repo-button">Verify</div>
              <div id="create-repo" class="new-repo-button" style="display: none">Enroll</div>
            </div>  
            <div class="verify-message"></div>
            <div class="status">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>`
          : ""
      }
      ${type === "Old"
        ? `<SelectRepo></SelectRepo>`
        : ``}
      </div>
    </div>
    `;
  }
}
