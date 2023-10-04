import {
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "../utils/chromeUtils";
import { $, enrollEvent, removeEvent } from "../utils/jsUtils";
import "./popup.css";
import { isObjEmpty } from "../utils/jsUtils";
import { $$ } from "../utils/jsUtils";
import { getUserRepos } from "../API/getReqAPI";
import { postNewRepo } from "../API/postReqAPI";
import { renderPopup } from "./renderPopup";

export type Repos = {
  [key: string]: string;
};

type USER = {
  USER: string;
};

export type RepoName = {
  repoName: string;
};

export type IsUpload = {
  isUpload: boolean;
};

export type IsTimer = {
  isTimer: boolean;
};

class Popup {
  repos: Repos[] | undefined;
  #canSubmit = false;

  constructor() {
    this.setEvent();
    this.init();
    this.setOption();
  }

  init = async () => {
    if (!(await this.checkLogin())) {
      renderPopup({ type: "beforeLogin" });
      return;
    }
    const { USER: user } = (await getChromeLocalStorage("USER")) as USER;
    this.repos = await getUserRepos();
    this.setOldRepos();

    if (!(await this.checkLinkedRepo())) {
      renderPopup({ type: "afterLogin", user });
      return;
    }

    const { repoName: linkedRepo } = (await getChromeLocalStorage(
      "repoName"
    )) as RepoName;
    renderPopup({ type: "afterLink", user, repoName: linkedRepo });
    return;
  };

  checkLinkedRepo = async () => {
    const user = await getChromeLocalStorage("repoName");
    if (isObjEmpty(user)) {
      return false;
    }
    return true;
  };

  setOldRepos = () => {
    renderPopup({ type: "setOldRepos", repos: this.repos });
    const selectRepoText = $(".select-repo") as HTMLInputElement;
    const repoOptions = $$(".option-repo");
    repoOptions.forEach((option) => {
      enrollEvent(option, "mouseover", (event) => {
        selectRepoText.value = option.innerText;
        this.#canSubmit = true;
      });
    });
  };

  setOption = async () => {
    const isUploadInputElement = $("#isupload") as HTMLInputElement;
    const isTimerInputElement = $("#istimer") as HTMLInputElement;
    const { isUpload } = (await getChromeLocalStorage("isUpload")) as IsUpload;
    const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
    isUploadInputElement.checked = isUpload;
    isTimerInputElement.checked = isTimer;

    enrollEvent(isUploadInputElement, "change", async (e) => {
      const { isUpload } = (await getChromeLocalStorage(
        "isUpload"
      )) as IsUpload;
      setChromeLocalStorage({ isUpload: !isUpload });
    });

    enrollEvent(isTimerInputElement, "change", async () => {
      const { isTimer } = (await getChromeLocalStorage("isTimer")) as IsTimer;
      setChromeLocalStorage({ isTimer: !isTimer });
    });
  };

  validateNewRepoName = async (name: string) => {
    if (name === "") return "이름을 입력해주세요";
    if (name.length >= 20) return "20자 이상의 이름을 설정할 수 없습니다";
    const reg = /^[A-Za-z0-9]{1,20}$/;
    if (!reg.test(name))
      return "알파벳과 숫자를 제외한 문자를 입력할 수 없습니다";
    if (!this.repos) throw new Error("Repo 정보가 존재하지 않습니다.");
    for (const repo of this.repos) {
      if (name === repo.name) return `이미 존재하는 Repo입니다.`;
    }
    return "";
  };

  checkLogin = async () => {
    const user = await getChromeLocalStorage("USER");
    if (isObjEmpty(user)) {
      return false;
    }
    return true;
  };

  setEvent = () => {
    // logo click
    const enrollElement = $(".logo-button");
    enrollEvent(enrollElement, "click", async () => {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
      );
    });
    // type Select
    const selectTypeElement = $(".dropdown-select-type");
    const selectTypeText = $(".select-type") as HTMLInputElement;

    enrollEvent(selectTypeElement, "click", () => {
      renderPopup({ type: "selectTypeChange" });
      this.#canSubmit = false;
    });

    enrollEvent(selectTypeText, "blur", () => {
      renderPopup({ type: "afterClickedSelectType" });
      const newInputEl = $("input", $(".new-repo-create")) as HTMLInputElement;
      const oldInputEl = $("input", $(".old-repo-select")) as HTMLInputElement;
      newInputEl.value = "";
      oldInputEl.value = "";
      verifyMsg.innerText = "";
    });

    const typeOptions = $$(".option-type");
    typeOptions.forEach((option) => {
      enrollEvent(option, "mouseenter", () => {
        selectTypeText.value = option.innerText;
      });
    });

    // new repo input
    const verifyMsg = $(".verify-message") as HTMLSpanElement;
    const newInputElement = $(".new-repo-input") as HTMLInputElement;

    enrollEvent(newInputElement, "keyup", () => {
      renderPopup({ type: "typeNewRepo" });
      verifyMsg.innerText = "";
    });

    // new repo verify
    const verifyButton = $("#verify-repo");
    const enrollButton = $("#create-repo");
    enrollEvent(verifyButton, "click", async () => {
      const newRepoName = newInputElement.value.trim();
      const validateMsg = await this.validateNewRepoName(newRepoName);
      if (validateMsg) {
        const verifyMsg = $(".verify-message") as HTMLSpanElement;
        verifyMsg.innerText = validateMsg;
        return;
      }
      renderPopup({ type: "afterVerified" });
      this.#canSubmit = true;
    });

    // repo Select
    const selectRepoElement = $(".dropdown-select-repo");
    const selectRepoText = $(".select-repo") as HTMLInputElement;

    enrollEvent(selectRepoElement, "click", () => {
      renderPopup({ type: "clickRepoBar" });
    });

    enrollEvent(selectRepoText, "blur", () => {
      renderPopup({ type: "blurOldRepoList" });
    });

    // new repo enroll
    enrollEvent(enrollButton, "click", async () => {
      if (!this.#canSubmit) {
        throw new Error("Repo를 생성할 수 없습니다");
      }
      const inputElement = $(".new-repo-input") as HTMLInputElement;
      const repoName = inputElement.value.trim();
      renderPopup({ type: "startLoading" });
      try {
        const res = await postNewRepo(repoName);
        setChromeLocalStorage({
          repoName: res.name,
        });
        renderPopup({ type: "successEnroll" });
      } catch {
        renderPopup({ type: "failEnroll" });
        enrollEvent(
          document,
          "click",
          () => {
            renderPopup({ type: "resetStatus" });
          },
          { once: true }
        );
      }
      this.init();
    });

    // link old repo
    const linkRepoButton = $("#link-repo");
    enrollEvent(linkRepoButton, "click", async () => {
      if (!this.#canSubmit) {
        throw new Error("Repo를 연결할 수 없습니다.");
      }
      const inputElement = $(".dropdown-select-repo input") as HTMLInputElement;
      const repoName = inputElement.value;
      setChromeLocalStorage({
        repoName: repoName,
      });
      this.init();
    });

    const linkedRepo = $(".logo-repo-logined");
    enrollEvent(linkedRepo, "click", () => {
      deleteChromeLocalStorage("repoName");
      this.init();
    });

    // footer
    const footer = $("footer");
    enrollEvent(footer, "click", () =>
      window.open(`https://github.com/HANITZ/PSHelper`)
    );
  };
}

new Popup();
