import { $, enrollEvent, getElById, removeEvent } from "./utils/jsUtils";
import { setChromeLocalStorage } from "./chromeUtils";
import { getUserRepos, repos } from "./API/getReqAPI";
import { postNewRepo } from "./API/postReqAPI";

class Home {
  repos: repos[] | undefined;
  isValidate = false;
  canSubmit = false;
  selectType = "";

  constructor() {
    this.init();
    this.setBasicEvent();
  }
  init = async () => {
    this.repos = await getUserRepos();
  };
  renderButton = (button: HTMLButtonElement, type: boolean) => {
    button.disabled = type;
  };
  validateNewRepo = (value: string): boolean => {
    const name = value.trim();
    if (name === "") return false;
    if (name.length >= 20) return false;
    const reg = /^[A-Za-z0-9]{1,20}$/;
    if (!reg.test(name)) return false;
    for (const repo of this.repos!) {
      if (name === repo.name) {
        return false;
      }
    }
    return true;
  };
  validateBeforeSubmit = (type: string) => {
    switch (type) {
      case "new":
        if (!this.isValidate) return false;
        if (!this.canSubmit) return false;
        return true;

      case "link":
        if (!this.canSubmit) return false;
        return true;

      default:
        return false;
    }
  };
  selectionHandler = (value: string, element: HTMLElement) => {
    const submitButton = $("#submit_button") as HTMLButtonElement;
    this.canSubmit = false;
    submitButton.disabled = !this.canSubmit;
    switch (value) {
      case "new":
        this.selectType = "new";
        this.renderTemplate(
          element,
          `<input
              autocomplete="off"
              id="new_repo_name"
              placeholder="Repository Name"
              type="text"
            />
            <button id="validate_button">인증</button>
            <button style="display: none"  id="repo_cancel_button">취소</button>
            `
        );
        const validateButton = $("button", element) as HTMLButtonElement;
        this.renderButton(validateButton, this.isValidate);
        enrollEvent(validateButton, "click", () => {
          const inputEl = $("input", element) as HTMLInputElement;
          const inputRepoName = inputEl.value.trim();
          if (!this.validateNewRepo(inputRepoName)) {
            alert("유효성검사 실패");
            return;
          }
          validateButton.innerText = "인증완료";
          this.isValidate = true;
          this.canSubmit = true;
          validateButton.disabled = this.isValidate;
          submitButton.disabled = !this.canSubmit;
        });

        const inputEl = $("input", element) as HTMLInputElement;
        enrollEvent(inputEl, "input", () => {
          validateButton.innerText = "인증";
          this.isValidate = false;
          this.canSubmit = false;
          validateButton.disabled = this.isValidate;
          submitButton.disabled = !this.canSubmit;
        });
        break;
      case "link":
        this.selectType = "link";
        this.renderTemplate(
          element,
          `<select name="" id="repo_selection">
              <option value="">연결할 레포지토리를 선택해주세요</option>
              ${this.repos!.map(
                (repo) => `<option value=${repo.name} >${repo.name}</option>`
              )} 
            </select>
            <button style="display: none" id="repo_cancel_button">취소</button> `
        );
        const repoSelectEl = $("#repo_selection", element) as HTMLSelectElement;
        enrollEvent(repoSelectEl, "change", (e) => {
          const selectTarget = e.target as HTMLSelectElement;
          if (!selectTarget.value) {
            this.canSubmit = false;
            submitButton.disabled = !this.canSubmit;
            return;
          }
          this.canSubmit = true;
          submitButton.disabled = !this.canSubmit;
        });
        break;
      default:
        this.selectType = "";
        this.renderTemplate(element, "");
        break;
    }
  };
  setBasicEvent = () => {
    const selectEl = getElById("type_selection") as HTMLSelectElement;

    enrollEvent(selectEl, "change", async (event) => {
      const target = event.target as HTMLSelectElement;
      const fieldEl = $(".repo_field");
      this.selectionHandler(target.value, fieldEl);
    });

    const submitButton = $("#submit_button");
    enrollEvent(submitButton, "click", this.repoSubmitHandler);
  };
  submitNewRepo = async () => {
    const name = $("#new_repo_name") as HTMLInputElement;
    const res = await postNewRepo(name.value);
    setChromeLocalStorage({
      repoName: res.name,
    });
  };
  submitSelectedRepo = () => {
    const selectedRepo = $("#repo_selection") as HTMLSelectElement;
    setChromeLocalStorage({
      repoName: selectedRepo.value,
    });
  };
  repoSubmitHandler = async () => {
    const { value: type } = getElById("type_selection") as HTMLSelectElement;
    const submitButton = $("#submit_button");
    const cancelButton = $("#repo_cancel_button") as HTMLButtonElement;

    if (!this.validateBeforeSubmit(type))
      throw new Error("레포지토리 설정에 문제가 있습니다");
    switch (type) {
      case "new":
        await this.submitNewRepo();
        const validateButton = $("#validate_button") as HTMLButtonElement;
        validateButton.style.display = "none";
        const repoInput = $("#new_repo_name") as HTMLInputElement;
        repoInput.disabled = true;
        break;
      case "link":
        await this.submitSelectedRepo();
        const repoSelection = $("#repo_selection") as HTMLSelectElement;
        repoSelection.disabled = true;

        break;
      default:
        break;
    }
    const typeSelection = $("#type_selection") as HTMLSelectElement;
    typeSelection.disabled = true;
    removeEvent(submitButton, "click", this.repoSubmitHandler);
    submitButton.style.display = "none";
    this.canSubmit = false;
    cancelButton.style.display = "";
    enrollEvent(cancelButton, "click", this.cancelSubmitButtonHandler);
  };
  cancelSubmitButtonHandler = () => {
    const { value: type } = getElById("type_selection") as HTMLSelectElement;

    switch (type) {
      case "new":
        const validateButton = $("#validate_button") as HTMLButtonElement;
        validateButton.style.display = "";
        const repoInput = $("#new_repo_name") as HTMLInputElement;
        repoInput.disabled = false;
        break;
      case "link":
        const repoSelection = $("#repo_selection") as HTMLSelectElement;
        repoSelection.disabled = false;
        break;
      default:
        break;
    }
    const submitButton = $("#submit_button");
    const cancelButton = $("#repo_cancel_button");
    const typeSelection = $("#type_selection") as HTMLSelectElement;
    enrollEvent(submitButton, "click", this.repoSubmitHandler);
    submitButton.style.display = "";
    typeSelection.disabled = false;
    this.canSubmit = true;
    removeEvent(cancelButton, "click", this.cancelSubmitButtonHandler);
    cancelButton.style.display = "none";
  };
  renderTemplate = (element: Element, content: string) => {
    element.innerHTML = content;
  };
}

new Home();
