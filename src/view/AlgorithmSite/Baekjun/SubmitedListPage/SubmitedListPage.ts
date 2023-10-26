import { Component, Status } from "@Components";
import { $, selectEl } from "@utils";
import "./SubmitedListPage.css";
import { Baekjun } from "@Controller/Baekjun";

type PropsSubmitPage = {
  status: "loading" | "success" | "fail";
  modal?: boolean;
};

export default class SubmitedListPage extends Component<PropsSubmitPage> {
  async componentDidMount() {
    Baekjun.checkSubmission(this.setState.bind(this));
  }
  createChildComponents() {
    new Status({
      node: selectEl("Status", this.node),
      state: {},
    });
  }

  template() {
    const { status, modal } = this.state;
    console.log(modal);
    return `<div>
    ${status === "loading" ? `<Status class="loading-solve"></Status>` : ``}
    ${status === "success" ? `<Status class="success-solve"></Status>` : ``}
    ${status === "fail" ? `<Status class="fail-solve"></Status>` : ``}
    </div>
    `;
  }
}
