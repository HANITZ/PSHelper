import { Component } from "@Components";
import { SubmitedUser } from "./SubmitedUser";
import { selectEl } from "@utils";



type PropsModalHeader = {}


export default class ModalHeader extends Component<PropsModalHeader>{

    createChildComponents(): void {
      
      new SubmitedUser({
        node: selectEl("SubmitedUser", this.node),
        state: {}
      })
    }

    template(){
        
        return `
        <div>
          <SubmitedUser class="ps-user"></SubmitedUser>
        </div>
        
        `
    }
}