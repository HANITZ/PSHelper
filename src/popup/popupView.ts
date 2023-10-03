import { $, insertHTML } from "../utils/jsUtils";
import { Repos } from "./popup";

type RenderPopup = {
  type: string;
  user?: string;
  repoName?: string;
  repos?: Repos[];
};

export const renderPopup = ({ type, user, repoName, repos }: RenderPopup) => {
  const logoText = $(".logo-text");
  const repoContainer = $(".repo-container");
  const logoLoginedText = $(".logo-text-logined");
  const logoLinkedText = $(".logo-repo-logined");
  const optionContainer = $(".option-container");
  const selectTypeElement = $(".dropdown-select-type");
  const selectTypeText = $(".select-type") as HTMLInputElement;
  const repoDiv = $(".options-repo");
  const verifyButton = $("#verify-repo");
  const enrollButton = $("#create-repo");
  const selectRepoElement = $(".dropdown-select-repo");
  const enrollStatusElement = $(".status");
  const inputElement = $(".new-repo-input") as HTMLInputElement;

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
      enrollStatusElement.className = "status";
      inputElement.value = "";
      break;
    case "afterLink":
      repoContainer.style.display = "none";
      optionContainer.style.display = "";
      logoText.style.display = "none";
      logoLoginedText.style.display = "";
      logoLinkedText.style.display = "";
      logoLoginedText.innerText = `User: ${user}`;
      logoLinkedText.innerText = `Repository: ${repoName}`;
      optionContainer.style.display = "";
      break;
    case "setOldRepos":
      repos!.forEach((repo) => {
        repoDiv.insertAdjacentHTML(
          "beforeend",
          `<div class="option-repo">${repo.name}</div>`
        );
      });
      break;

    case "selectTypeChange":
      selectTypeElement.classList.toggle("active");
      verifyButton.style.display = "";
      enrollButton.style.display = "none";
      enrollStatusElement.className = "status";
      break;

    case "afterClickedSelectType":
      selectTypeElement.classList.remove("active");
      changeTypeContents(selectTypeText.value);
      break;
    case "typeNewRepo":
      verifyButton.style.display = "";
      enrollButton.style.display = "none";
      break;

    case "afterVerified":
      verifyButton.style.display = "none";
      enrollButton.style.display = "";
      break;
    case "clickRepoBar":
      selectRepoElement.classList.toggle("active");
      break;
    case "blurOldRepoList":
      selectRepoElement.classList.remove("active");
      break;
    case "startLoading":
      enrollStatusElement.classList.add("loading-enroll");
      break;
    case "successEnroll":
      enrollStatusElement.classList.remove("loading-enroll");
      enrollStatusElement.classList.add("success-enroll");
      break;
    case "failEnroll":
      enrollStatusElement.classList.remove("loading-enroll");
      enrollStatusElement.classList.add("fail-enroll");
      break;
    case "resetStatus":
      enrollStatusElement.className = "status";
      break;
    default:
      break;
  }
};

const changeTypeContents = (type: string) => {
  const defaultRepoDiv = $(".default-select");
  const newRepoDiv = $(".new-repo-create");
  const oldRepoDiv = $(".old-repo-select");
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
};
