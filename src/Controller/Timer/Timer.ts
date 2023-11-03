

// 크롬 데이터 쪽으로 빼야할듯
type GetTimeDiff = {
  h: string;
  m: string;
  s: string;
};

type PropsTimer = {
  startTime?: number;
};

export default class Timer {
  #startTime: number;
  #timer: NodeJS.Timer | undefined;

  constructor({ startTime }: PropsTimer) {
    this.#startTime = startTime ? startTime : new Date().getTime();
  }

  createTimer(callbackFn: Function) {
    this.#timer = setInterval(() => {
      const nowTime = new Date().getTime();
      const { h, m, s }: GetTimeDiff = this.getTimeDiff(
        this.#startTime,
        nowTime
      );
      callbackFn({ h, m, s });
    }, 1000);
  }
  getStartTime(): number {
    return this.#startTime;
  }
  getTimeDiff(startTime: number, nowTime: number): GetTimeDiff {
    let [hour, min, sec] = [0, 0, 0];
    let timeDiffSec = Math.floor((nowTime - startTime) / 1000);
    if (timeDiffSec > 3600) {
      hour = Math.floor(timeDiffSec / 3600);
      timeDiffSec = timeDiffSec % 3600;
    }
    if (timeDiffSec > 60) {
      min = Math.floor(timeDiffSec / 60);
      timeDiffSec = timeDiffSec % 60;
    }
    sec = timeDiffSec;
    const h = hour < 10 ? "0" + hour.toString() : hour.toString();
    const m = min < 10 ? "0" + min.toString() : min.toString();
    const s = sec < 10 ? "0" + sec.toString() : sec.toString();
    return { h, m, s };
  }

  stopTimer() {
    clearInterval(this.#timer);
  }
}
