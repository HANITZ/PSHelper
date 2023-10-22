import Component from "../../Component";

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
