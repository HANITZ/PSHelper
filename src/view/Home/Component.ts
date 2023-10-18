import { addComponents } from "../../utils/jsUtils";

export type ComponentProps<T> = {
  node: Element;
  state: T;
};

export default abstract class Component<T> {
  node: Element;
  state: T;
  constructor({ node, state }: ComponentProps<T>) {
    this.node = node;
    this.state = state;
    this.render();
  }

  setState(newState: Partial<T>) {
    for (const key in newState) {
      if (!Object.prototype.hasOwnProperty.call(newState, key)) {
        throw new Error(`${key}는 상태에 존재하지 않는 변수입니다.`)
      }
      if(this.state[key] === newState[key]){
        return 
      }
    }
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }

  render(): void {
    addComponents.call(this);
    this.createChildComponents();
    this.setEvent();
  }

  async createChildComponents(): Promise<void> {}

  update(): void {}

  template(): string {
    return "";
  }

  setEvent(): void {}
}
