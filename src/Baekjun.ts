import { $, createTimer } from "./utils/jsUtils";
import "./Baekjun.css";
class Baekjun {
  secs: string | undefined;
  mins: string | undefined;
  hours: string | undefined;
  timer: NodeJS.Timer | undefined;

  constructor() {
    this.init();
  }

  init = () => {};
  startSolving = () => {
    const headerElement = $(".page-header");
    console.log(headerElement);
    headerElement.insertAdjacentHTML(
      "beforeend",
      `
    <div class="timer-container" >
    <p class="timer"  ></p>
    </div>
    `
    );
    this.setTimer();
  };

  setTimer = () => {
    const timerHandler = (h: string, m: string, s: string) => {
      this.secs = s;
      this.mins = m;
      this.hours = h;
      this.reRenderTime();
    };
    this.timer = createTimer(timerHandler.bind(this));
  };

  reRenderTime = () => {
    const timeElement = $(".timer");
    timeElement.innerText = `Timer: ${this.hours}:${this.mins}:${this.secs} `;
  };

  setTimerTemplate = () => {};
}

const baekjun = new Baekjun();
if (window.location.href.includes("/problem/")) {
  baekjun.startSolving();
}
console.log("백준실행");
