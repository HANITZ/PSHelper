import { Component } from "@Components";
import { SmallTimer } from "./SmallTimer";
import {
  GetTimeDiff,
  chromeStorageId,
  selectEl,
  setChromeLocalStorage,
} from "@utils";
import { LargeTimer } from "./LargeTimer";
import { Timer } from "@Timer";

type PropsProgrammersTimer = {
  isTimer: boolean;
  hour?: string;
  min?: string;
  sec?: string;
};

export default class ProgrammersTimer extends Component<PropsProgrammersTimer> {
  timer: Timer | undefined;

  async componentDidMount(): Promise<void> {
    const { isTimer } = this.state;

    if (isTimer) {
      const nowTime = new Date().getTime();
      this.timer = new Timer({ startTime: nowTime });
      setChromeLocalStorage({
        [chromeStorageId.ProgrammersStartTime]: nowTime,
      });
      this.timer.createTimer(this.timerHandler.bind(this));
    }
  }

  timerHandler({ h, m, s }: GetTimeDiff) {
    this.setState({ hour: h, min: m, sec: s });
  }

  createChildComponents() {
    const { isTimer, hour, min, sec } = this.state;

    if (isTimer) {
      new SmallTimer({
        node: selectEl(".small-timer", this.node),
        state: { hour, min, sec },
      });

      new LargeTimer({
        node: selectEl(".large-timer", this.node),
        state: { hour, min, sec },
      });
    }
  }

  render() {
    this.createChildComponents();
    this.setEvent();
  }
}
