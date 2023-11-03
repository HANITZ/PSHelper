import { Component } from "@Components";
import "./LargeTimer.css";

type PropsLargeTimer = {
  hour?: string;
  min?: string;
  sec?: string;
};

export default class LargeTimer extends Component<PropsLargeTimer> {
  template(): string {
    const { hour, min, sec } = this.state;
    return `<li >
        <p class="large-timer"  >Timer: ${hour ? hour : `00`}:${min ? min : `00`}:${
      sec ? sec : `00`
    }</p>
        </li>`;
  }
}
