import { Component } from "@Components";

type PropsSmallTimer = {
  hour?: string;
  min?: string;
  sec?: string;
};

export default class SmallTimer extends Component<PropsSmallTimer> {
  template(): string {
    const { hour, min, sec } = this.state;

    return `<div >
        <p class="timer" style= "color: #B2C0CC; font-weight: 500;   margin: 0; padding: 0.25rem 0.5rem 0.25rem 0"  >Timer: ${
          hour ? hour : `00`
        }:${min ? min : `00`}:${sec ? sec : `00`}</p>
        </div>`;
  }
}
