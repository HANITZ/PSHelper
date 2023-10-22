import { $$, Time, createTimer } from "../utils/jsUtils";

export class AlgorithmSite {
  timer: NodeJS.Timer | undefined;

  constructor() {}

  setTimer = (startTime: number) => {
    this.timer = createTimer(startTime, this.reRenderTime);
  };

  reRenderTime = ({ h, m, s }: Time) => {
    const timeElements = $$(".timer");
    timeElements.forEach((el) => {
      el.innerText = `Timer: ${h}:${m}:${s}`;
    });
  };


}
