import { Component } from "@Components";
import "./SmallTimer.css";
type PropsSmallTimer = {
  hour?: string;
  min?: string;
  sec?: string;
};

export default class SmallTimer extends Component<PropsSmallTimer> {
  template(): string {
    const { hour, min, sec } = this.state;

    return `<div >
        <p class="small-timer">Timer: ${hour ? hour : `00`}:${
      min ? min : `00`
    }:${sec ? sec : `00`}</p>
        </div>`;
  }
}
