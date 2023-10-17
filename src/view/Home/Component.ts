import { addComponents } from "../../utils/jsUtils";

export type ComponentProps<T> = {
  node: Element;
  state: T | null;
};

export default abstract class Component<T> {
  node: Element;
  #state: T | {};
  constructor({ node, state }: ComponentProps<T>) {
    this.node = node;
    this.#state = state ? state : {};
    this.render();
  }

  setState(newState: object) {
    this.#state = {
      ...this.#state,
      ...newState,
    };
    this.render();
  }

  render(): void {
    addComponents.call(this)
    this.createChildComponents()
  }

  createChildComponents():void{}
  
  update(): void {}

  template(): string {
    return "";
  }

  init(): void {}
}
