

type ComponentProps<T> = {
    node: Element
    state: T | null
}


export default abstract class Component <T>{
    #node: Element
    #state: T |{}
    constructor({node, state}: ComponentProps<T>){
        this.#node = node
        this.#state = state ? state : {}
        this.init()
        this.render()
    }

    setState = (newState:object) => {
        this.#state = {
            ...this.#state,
            ...newState
        }
        this.render()
    }

    render = ():void  => {}

    template = ():string => ''

    init = ()=>{
        this.render()
    }

}

