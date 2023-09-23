import {
  createChromeTabs,
  deleteChromeLocalStorage,
  getChromeLocalStorage,
  setChromeLocalStorage,
} from "./utils/chromeUtils";
import { $, enrollEvent } from "./utils/jsUtils";
import "./popup.css";
import { isObjEmpty } from "./utils/jsUtils";
import { $$ } from "./utils/jsUtils";
import { getUserRepos } from "./API/getReqAPI";
import { postNewRepo } from "./API/postReqAPI";

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
  element: HTMLElement | null;
  repos: Repos[] | undefined;
  #canSubmit = false;

  constructor(element: HTMLElement | null) {
    this.element = element;
    this.setEvent();
    this.init();
    this.setOption();
  }

  init = async () => {
    if (!(await this.checkLogin())) {
      this.setTemplate("beforeLogin");
      return;
    }
    const { USER: user } = (await getChromeLocalStorage("USER")) as USER;
    this.repos = await getUserRepos();
    this.setOldRepos();

    if (!(await this.checkLinkedRepo())) {
      this.setTemplate("afterLogin", user);
      return;
    }

    const { repoName: linkedRepo } = (await getChromeLocalStorage(
      "repoName"
    )) as RepoName;
    this.setTemplate("afterLink", user, linkedRepo);
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
    const repoDiv = $(".options-repo");
    this.repos?.forEach((repo) => {
      repoDiv.insertAdjacentHTML(
        "beforeend",
        `<div class="option-repo">${repo.name}</div>`
      );
    });
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

  setTemplate = (type: string, user?: string, repo?: string) => {
    const logoText = $(".logo-text");
    const repoContainer = $(".repo-container");
    const logoLoginedText = $(".logo-text-logined");
    const logoLinkedText = $(".logo-repo-logined");
    const optionContainer = $(".option-container");

    switch (type) {
      case "beforeLogin":
        logoText.style.display = "";
        repoContainer.style.display = "none";
        logoLinkedText.style.display = "none";
        break;
      case "afterLogin":
        logoText.style.display = "none";
        repoContainer.style.display = "";
        logoLoginedText.style.display = "";
        logoLinkedText.style.display = "none";
        logoLoginedText.innerText = `User: ${user}`;
        optionContainer.style.display = "none";
        break;
      case "afterLink":
        logoText.style.display = "none";
        logoLoginedText.style.display = "";
        logoLinkedText.style.display = "";
        repoContainer.style.display = "none";
        logoLoginedText.innerText = `User: ${user}`;
        logoLinkedText.innerText = `Repository: ${repo}`;
        optionContainer.style.display = "";
        break;
      default:
        break;
    }
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
      createChromeTabs({
        url: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
        active: true,
      });
    });
    // type Select
    const selectTypeElement = $(".dropdown-select-type");
    const selectTypeText = $(".select-type") as HTMLInputElement;

    enrollEvent(selectTypeElement, "click", () => {
      const verifyButton = $("#verify-repo");
      const enrollButton = $("#create-repo");
      selectTypeElement.classList.toggle("active");
      this.#canSubmit = false;
      verifyButton.style.display = "";
      enrollButton.style.display = "none";
    });

    enrollEvent(selectTypeText, "blur", (e) => {
      selectTypeElement.classList.remove("active");
      const type = selectTypeText.value;

      const defaultRepoDiv = $(".default-select");
      const newRepoDiv = $(".new-repo-create");
      const oldRepoDiv = $(".old-repo-select");
      const newInputEl = $("input", newRepoDiv) as HTMLInputElement;
      const oldInputEl = $("input", oldRepoDiv) as HTMLInputElement;
      newInputEl.value = "";
      oldInputEl.value = "";

      switch (type) {
        case "New":
          defaultRepoDiv.style.display = "none";
          newRepoDiv.style.display = "";
          oldRepoDiv.style.display = "none";
          break;
        case "Old":
          defaultRepoDiv.style.display = "none";
          newRepoDiv.style.display = "none";
          oldRepoDiv.style.display = "";
          break;
        default:
          defaultRepoDiv.style.display = "";
          newRepoDiv.style.display = "none";
          oldRepoDiv.style.display = "none";
          break;
      }
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
      const verifyButton = $("#verify-repo");
      const enrollButton = $("#create-repo");
      verifyMsg.style.display = "none";
      verifyButton.style.display = "";
      enrollButton.style.display = "none";
    });

    // new repo verify
    const verifyButton = $("#verify-repo");
    const enrollButton = $("#create-repo");
    enrollEvent(verifyButton, "click", async () => {
      const newRepoName = newInputElement.value.trim();
      const validateMsg = await this.validateNewRepoName(newRepoName);
      if (validateMsg) {
        const verifyMsg = $(".verify-message") as HTMLSpanElement;
        verifyMsg.style.display = "";
        verifyMsg.innerText = validateMsg;
        return;
      }
      verifyButton.style.display = "none";
      enrollButton.style.display = "";
      this.#canSubmit = true;
    });

    // repo Select
    const selectRepoElement = $(".dropdown-select-repo");
    const selectRepoText = $(".select-repo") as HTMLInputElement;

    enrollEvent(selectRepoElement, "click", () => {
      selectRepoElement.classList.toggle("active");
    });

    enrollEvent(selectRepoText, "blur", () => {
      selectRepoElement.classList.remove("active");
    });

    // new repo enroll
    enrollEvent(enrollButton, "click", async () => {
      if (!this.#canSubmit) {
        throw new Error("Repo를 생성할 수 없습니다");
      }
      const inputElement = $(".new-repo-input") as HTMLInputElement;
      const repoName = inputElement.value.trim();
      const res = await postNewRepo(repoName);
      setChromeLocalStorage({
        repoName: res.name,
      });
      const repoContainer = $(".repo-container");
      repoContainer.style.display = "none";
      const optionContainer = $(".option-container");
      optionContainer.style.display = "";
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
      console.log(repoName);
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
    enrollEvent(footer, "click", () => {
      createChromeTabs({
        url: `https://github.com/HANITZ/PSHelper`,
        active: true,
      });
    });
  };
}
try {
  new Popup($("#root"));
} catch (e) {
  throw e;
}
