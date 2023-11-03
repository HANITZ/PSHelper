import { Component } from "@Components";
import { Runtime } from "./Runtime";
import { $, selectEl } from "@utils";
import { Memory } from "./Memory";
import { EfficiencyChart } from "./EfficiencyChart";
import { Chart, registerables } from "chart.js";

type PropsModalContent = {
  avgMemory: number;
  avgTime: number;
  lowMemories: Array<string | number>[];
  lowTimes: Array<string | number>[];
  spentMemory: string;
  spentTime: string;
  avatarUrl: string;
  myRuntimePercent: number;
  myMemoryPercent: number;
  effShow: "RUNTIME" | "MEMORY";
};

Chart.register(...registerables);

export default class ModalContent extends Component<PropsModalContent> {
  constructor({ node, state }: { node: Element; state: PropsModalContent }) {
    super({ node, state });
    this.activateElement("time-wrap");
  }

  createChildComponents(): void {
    const {
      spentMemory,
      spentTime,
      avgMemory,
      avgTime,
      lowMemories,
      lowTimes,
      avatarUrl,
      myRuntimePercent,
      myMemoryPercent,
      effShow,
    } = this.state;
    new Runtime({
      node: selectEl("Runtime", this.node),
      state: { spentTime, myRuntimePercent },
    });

    new Memory({
      node: selectEl("Memory", this.node),
      state: { spentMemory, myMemoryPercent },
    });
    if (effShow === "RUNTIME") {
      new EfficiencyChart({
        node: selectEl("EfficiencyChart", this.node),
        state: {
          data: lowTimes.map((memory) => memory[1]),
          links: lowTimes.map((memory) =>
            memory[2] ? memory[2] : ""
          ) as string[],
          myData: spentTime,
          avatarUrl,
          effShow,
        },
      });
    } else {
      new EfficiencyChart({
        node: selectEl("EfficiencyChart", this.node),
        state: {
          data: lowMemories.map((memory) => memory[0]),
          links: lowMemories.map((memory) =>
            memory[2] ? memory[2] : ""
          ) as string[],
          myData: spentMemory,
          avatarUrl,
          effShow,
        },
      });
    }
  }
  setEvent(): void {
    const state = this.state;
    $(".time-wrap", this.node as HTMLElement).addEventListener("click", () => {
      this.setState({ ...state, effShow: "RUNTIME" });
      this.activateElement("time-wrap");
    });

    $(".memory-wrap", this.node as HTMLElement).addEventListener(
      "click",
      () => {
        this.setState({ ...state, effShow: "MEMORY" });
        this.activateElement("memory-wrap");
      }
    );
  }
  activateElement(type: string) {
    // time-wrap 및 memory-wrap 요소들
    const timeWrapElement = (this.node as HTMLElement).querySelector(
      ".time-wrap"
    );
    const memoryWrapElement = (this.node as HTMLElement).querySelector(
      ".memory-wrap"
    );

    // 선택된 요소에 active 클래스 추가, 나머지 요소에서는 제거
    if (type === "time-wrap" && timeWrapElement) {
      timeWrapElement.classList.add("active");
      if (memoryWrapElement) {
        memoryWrapElement.classList.remove("active");
      }
    } else if (type === "memory-wrap" && memoryWrapElement) {
      memoryWrapElement.classList.add("active");
      if (timeWrapElement) {
        timeWrapElement.classList.remove("active");
      }
    }
  }

  template(): string {
    return `
    <div class="ps-modal-body">
      <div class="solving-analysis">
        <Runtime class="time-wrap" active></Runtime>
        <Memory class="memory-wrap">
          <div class"memory-title">
            <div>Memory</div>
          </div>
        </Memory>
      </div>
      <div class="eff-wrap">
        <EfficiencyChart ></EfficiencyChart>
      </div>
    </div>
        `;
  }
}
