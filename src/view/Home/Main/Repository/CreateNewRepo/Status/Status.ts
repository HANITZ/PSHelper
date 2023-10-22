import Component from "../../../../Component";
import "./loading.css";
import "./success.css";
import "./fail.css";

type PropsStatus = {};

export default class Status extends Component<PropsStatus> {
  template() {
    return `
      <div class="status">
        <div></div>
        <div></div>
        <div></div>
      </div>
      `;
  }
}
