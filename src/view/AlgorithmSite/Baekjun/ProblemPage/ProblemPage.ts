import { Component } from "@Components";
import {
  BaekjunProblemId,
  BaekjunStartTime,
  ChromeStorage,
} from "@Data/ChromeStorage/types";
import { Timer } from "@Timer";
import { Baekjun } from "@Controller/Baekjun";
import {
  GetTimeDiff,
  chromeStorageId,
  getChromeLocalStorage,
  isUndefined,
  setChromeLocalStorage,
} from "@utils";
import "./ProblemPage.css";

type PropsProblemPage = {
  hour?: string;
  min?: string;
  sec?: string;
};

export default class ProblemPage extends Component<PropsProblemPage> {
  timer: Timer | undefined;

  async componentDidMount(): Promise<void> {
    const { BaekjunProblemId } = (await getChromeLocalStorage(
      chromeStorageId.BaekjunProblemId
    )) as Partial<ChromeStorage>;
    const { BaekjunStartTime } = (await getChromeLocalStorage(
      chromeStorageId.BaekjunStartTime
    )) as Partial<ChromeStorage>;

    // 처음 문제에 접근 했거나 이전에 다른 문제에 접근 한 경우 타이머 초기화
    if (
      isUndefined(BaekjunProblemId) ||
      !Baekjun.checkProblemId(BaekjunProblemId as string)
    ) {
      const nowTime = new Date().getTime();
      this.timer = new Timer({ startTime: nowTime });
      setChromeLocalStorage({
        [chromeStorageId.BaekjunProblemId]: Baekjun.getProblemId(
          window.location.href
        ),
      });
      await setChromeLocalStorage({ [chromeStorageId.BaekjunStartTime]: nowTime });
    } else {
      // 같은 문제 내에서 다시 접근한 경우에는 기존 타이머 지속
      this.timer = new Timer({ startTime: BaekjunStartTime });
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
