import { Component } from "@Components";
import { ChromeStorage } from "@Data/ChromeStorage";
import { Timer } from "@Timer";
import {
  $,
  $$,
  GetTimeDiff,
  chromeStorageId,
  errorMsg,
  getChromeLocalStorage,
  insertHTML,
  isUndefined,
  selectEl,
  setChromeLocalStorage,
} from "@utils";
import { SmallTimer } from "./SmallTimer";
import { LargeTimer } from "./LargeTimer";
import "./ProblemPage.css";

type PropsProblemPage = {
  hour?: string;
  min?: string;
  sec?: string;
  isTimer: boolean;
  isUpload: boolean;
};

export default class ProblemPage extends Component<PropsProblemPage> {
  timer: Timer | undefined;

  async componentDidMount(): Promise<void> {
    const { isTimer } = this.state;

    if (isTimer) {
      this.timer = new Timer({});
      this.timer.createTimer(this.timerHandler.bind(this));
    }
  }

  timerHandler({ h, m, s }: GetTimeDiff) {
    this.setState({ hour: h, min: m, sec: s });
  }
  async createChildComponents() {
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
