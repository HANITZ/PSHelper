import { Component } from "@Components";
import "./loading.css";
import "./success.css";
import "./fail.css";
import { chromeStorageId } from "@utils";

type PropsStatus = {
  site?: string;
};

export default class Status extends Component<PropsStatus> {
  template() {
    const { site } = this.state;

    if (site === chromeStorageId.Programmers) {
      return `
      <div>
        <span class="mark-programmers" >
          <div></div>
        </span>
      </div>
      `;
    }

    return `
      <div class="status">
        <div></div>
        <div></div>
        <div></div>
      </div>
      `;
  }
}
