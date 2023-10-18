import Component from "../Component";


type PropsInput = {
    content?:string
}

export default class Input extends Component<PropsInput> {

    template(): string {
        const {content} = this.state

        return `
        <input class="new-repo-input" type="text" placeholder="${content ? content :"Create New Repo"}"/>
        `
    }
}