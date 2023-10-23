import { Repos } from "../../../../../API/getReqAPI";
import { postNewRepo } from "../../../../../API/postReqAPI";
import { isUndefined, selectEl, sendChromeMessage } from "@utils";
import { Component } from "@Component";
import CancelRepoButton from "./CancelRepoButton";
import EnrollButton from "./EnrollButton";
import { Status } from "@Status";
import VerifyButton from "./VerifyButton";
import VerifyMessage from "./VerifyMessage";
import "./CreateNewRepo.css";

type PropsCreateNewRepo = {
  isVerified: boolean;
  textValue?: string;
  verifyMsg?: string;
  repos: Repos[];
  status?: "loading" | "success" | "fail";
  setStatePopup: Function;
};

export default class CreateNewRepo extends Component<PropsCreateNewRepo> {
  createChildComponents() {
    const { isVerified, verifyMsg, status } = this.state;

    if (!isUndefined(status)) {
      new Status({
        node: selectEl("Status", this.node),
        state: {},
      });
    }

    if (!isUndefined(verifyMsg)) {
      new VerifyMessage({
        node: selectEl("VerifyMessage", this.node),
        state: { message: verifyMsg as string },
      });
    }

    if (isVerified) {
      new EnrollButton({
        node: selectEl("EnrollButton", this.node),
        state: {
          btnName: "Enroll",
          enrollHandler: this.enrollHandler.bind(this),
        },
      });

      new CancelRepoButton({
        node: selectEl("CancelRepoButton", this.node),
        state: {
          btnName: "Cancel",
          setStateNewRepo: this.setState.bind(this),
        },
      });
      return;
    }

    new VerifyButton({
      node: selectEl("VerifyButton", this.node),
      state: {
        btnName: "Verify",
        verifyHandler: this.verifyHandler.bind(this),
      },
    });
  }

  verifyHandler() {
    const inputEl = selectEl("input", this.node) as HTMLInputElement;
    const verifyMsg = this.validateNewRepoName(inputEl.value);

    if (verifyMsg) {
      this.setState({ ...this.state, verifyMsg });
      return;
    }
    this.setState({
      ...this.state,
      textValue: inputEl.value,
      isVerified: true,
      verifyMsg: undefined,
    });
  }

  async enrollHandler() {
    const { isVerified, textValue, setStatePopup } = this.state;
    if (!isVerified) throw new Error("확인되지않은 레포이름입니다.");

    this.setState({ status: "loading" });
    try {
      await postNewRepo(textValue as string);
      sendChromeMessage({
        action: "repoName",
        method: "post",
        repoName: textValue,
      });
      this.setState({ status: "success" });
      setTimeout(() => {
        setStatePopup({ repoName: textValue });
      }, 700);
    } catch {
      this.setState({ status: "fail" });
    }
  }

  validateNewRepoName(name: string) {
    const { repos } = this.state;
    if (name === "") return "이름을 입력해주세요";
    if (name.length >= 20) return "20자 이상의 이름을 설정할 수 없습니다";
    const reg = /^[A-Za-z0-9]{1,20}$/;
    if (!reg.test(name))
      return "알파벳과 숫자를 제외한 문자를 입력할 수 없습니다";
    if (!repos) throw new Error("Repo 정보가 존재하지 않습니다.");
    for (const repo of repos) {
      if (name === repo.name) return `이미 존재하는 Repo입니다.`;
    }
    return "";
  }

  template() {
    const { isVerified, verifyMsg, textValue, status } = this.state;
    return `
    <div> 
      <div class="new-repo-create">
        <input class="new-repo-input" type="text" placeholder="Create New Repo" autofocus ${
          textValue ? `value="${textValue}"` : ``
        } ${isVerified ? `readonly` : ``} }/>
        ${
          isVerified
            ? `
            <div>
              <EnrollButton class="new-repo-button"></EnrollButton>
              <CancelRepoButton class="cancel-repo-button"></CancelRepoButton>
            </div>
            `
            : '<VerifyButton class="verify-repo-button"></VerifyButton>'
        }
      </div>
      ${
        !isVerified && !isUndefined(verifyMsg)
          ? `<VerifyMessage class="verify-message" ></VerifyMessage>`
          : ``
      }
      ${status === "loading" ? `<Status class="loading-enroll" ></Status>` : ``}
      ${status === "success" ? `<Status class="success-enroll" ></Status>` : ``}
      ${status === "fail" ? `<Status class="fail-enroll" ></Status>` : ``}
    </div>`;
  }
}
