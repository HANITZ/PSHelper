import { addComponents, isSameTwo } from "../../../utils/jsUtils";

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
    this.componentDidMount();
  }

  setState(newState: Partial<T>): void {
    if (!this.checkChangeState(newState)) {
      return;
    }

    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }

  checkChangeState(newState: Partial<T>): boolean {
    for (const key in newState) {
      if (!Object.prototype.hasOwnProperty.call(newState, key)) {
        throw new Error(`${key}는 상태에 존재하지 않는 변수입니다.`);
      }

      if (!isSameTwo(this.state[key], newState[key])) {
        return true;
      }
    }
    return false;
  }

  render(): void {
    addComponents.call(this);
    this.createChildComponents();
    this.setEvent();
  }
  async componentDidMount(): Promise<void> {}

  createChildComponents(): void {}

  update(): void {}

  template(): string {
    return "";
  }

  setEvent(): void {}
}
