import { Component } from "@Components";

type PropsMemory = {
  spentMemory: string;
  myMemoryPercent: number;
};

export default class Memory extends Component<PropsMemory> {
  template(): string {
    const { myMemoryPercent, spentMemory } = this.state;
    return `
        <div class="memory-wrap" >
          <div class="title">
            <span>⚙️ Memory</span>
          </div>
          <div class="runtime-wrap" >
            <div class="runtime-content" > 
              <div class="value">
                <div >${spentMemory}</div>
                <span class="unit" >mb</span>
              </div>
            </div>

            <div class="runtime-content" >
              <div class="value" >
                <div>상위</div>
                <div >${myMemoryPercent} %</div>
              </div>
            </div>
          </div>
        </div>
        `;
  }
}
