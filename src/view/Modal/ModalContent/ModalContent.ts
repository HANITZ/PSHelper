import { Component } from "@Components";
import { Runtime } from "./Runtime";
import { selectEl } from "@utils";
import { Memory } from "./Memory";


type PropsModalContent = {

}




export default class ModalContent extends Component<PropsModalContent>{

    createChildComponents(): void {
      
      new Runtime({
        node: selectEl("Runtime", this.node),
        state: {}
      })

      new Memory({
        node: selectEl("Memory", this.node),
        state: {}
      })
    }


    template(): string {
        
        return `
        <div>
          <div class="solving-analysis">
            <Runtime class="time-wrap"></Runtime>
            <Memory class="memory-wrap"></Memory>
          </div>
          <EfficiencyChart  class="eff-body"></EfficiencyChart>
        </div>
        `
    }
}