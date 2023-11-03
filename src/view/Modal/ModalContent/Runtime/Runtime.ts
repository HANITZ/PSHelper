import { Component } from "@Components";

type PropsRuntime = {
  spentTime: string;
  myRuntimePercent: number;
};

export default class Runtime extends Component<PropsRuntime> {
  template(): string {
    const { spentTime, myRuntimePercent } = this.state;
    return `
        <div class="time-wrap" >
          <div class="title">
            <span>⏱ Runtime</span>
          </div>
          <div class="runtime-wrap" >
            <div class="runtime-content" > 
              <div class="value">
                <div>${spentTime}</div>
                <span class="unit" >ms</span>
              </div>
            </div>
            <div class="runtime-content" >
              <div class="value" >
                <div>상위</div>
                <div>${myRuntimePercent} %</div>
              </div>
            </div>
          </div>
        </div>
        `;
  }
}
