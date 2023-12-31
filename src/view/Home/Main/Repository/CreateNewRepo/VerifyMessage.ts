import { Component } from "@Components";

type PropsVerifyMessage = {
  message: string;
};

export default class VerifyMessage extends Component<PropsVerifyMessage> {
  template() {
    const { message } = this.state;
    return `
        <div>${message}</div>
        `;
  }
}
