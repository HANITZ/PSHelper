import { Component } from "@Components";
import { BaekjunProblemId, BaekjunStartTime } from "@Data/types";
import { Timer } from "@Timer";
import {
  GetTimeDiff,
  chromeStorageId,
  getChromeLocalStorage,
  isUndefined,
  setChromeLocalStorage,
} from "@utils";
import "./ProblemPage.css";
import { Baekjun } from "Controller/Baekjun";

type PropsProblemPage = {
  hour?: string;
  min?: string;
  sec?: string;
};

export default class ProblemPage extends Component<PropsProblemPage> {
  timer: Timer | undefined;
  async componentDidMount(): Promise<void> {
    const { baekjunStartTime } = (await getChromeLocalStorage(chromeStorageId.baekjunStartTime)) as BaekjunStartTime;
    const { baekjunProblemId } = (await getChromeLocalStorage(chromeStorageId.baekjunProblemId)) as BaekjunProblemId;

    // 처음 문제에 접근 했거나 이전에 다른 문제에 접근 한 경우 타이머 초기화
    if (isUndefined(baekjunProblemId) || !Baekjun.checkProblemId(baekjunProblemId)) {
      const nowTime = new Date().getTime()
      this.timer = new Timer({startTime: nowTime})
      setChromeLocalStorage({[chromeStorageId.baekjunProblemId]: Baekjun.getProblemId(window.location.href),});
      setChromeLocalStorage({[chromeStorageId.baekjunStartTime]: nowTime});
    }else { // 같은 문제 내에서 다시 접근한 경우에는 기존 타이머 지속
      this.timer = new Timer({ startTime: baekjunStartTime });
    }

    this.timer.createTimer(this.timerHandler.bind(this));
  }
  timerHandler({ h, m, s }: GetTimeDiff) {
    this.setState({ hour: h, min: m, sec: s });
  }

  template() {
    const { hour, min, sec } = this.state;
    return `
    <div>
      ${hour ? `<p class="timer">Timer: ${hour}:${min}:${sec}</p>` : ``}
    </div>
    `;
  }
}
