import { Component, Status } from "@Components";
import { chromeStorageId, isUndefined, selectEl } from "@utils";

type PropsProgrammersStatus = {
  isCommited?: boolean;
};

export default class ProgrammersStatus extends Component<PropsProgrammersStatus> {
  createChildComponents(): void {
    new Status({
      node: selectEl("Status", this.node),
      state: {
        site: chromeStorageId.Programmers,
      },
    });
  }

  template(): string {
    const { isCommited } = this.state;

    return `
		<div>
		${
      isUndefined(isCommited)
        ? `<Status class="loading-programmers" ></Status>`
        : isCommited
        ? `<Status class="success-programmers" ></Status>`
        : `<Status class="fail-programmers" ></Status>`
    }
		</div>
		`;
  }
}
