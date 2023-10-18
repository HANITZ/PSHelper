import { selectEl } from "../../../utils/jsUtils";
import Component from "../Component";

type PropsButton = {
    btnName?: string 
}

export default class Button extends Component<PropsButton> {
    
    setEvent(){
        selectEl("#link-repo", this.node).addEventListener("click", ()=>{
            
        })
    }

    template(){
        const { btnName } = this.state


        return `
        <div id="link-repo" class="new-repo-button">${btnName ? btnName : "버튼"}</div>
        `
    }
}