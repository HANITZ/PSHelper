import { $, getChromeLocalStorage, insertHTML, isUndefined } from "@utils";
import ProblemPage from "./ProblemPage/ProblemPage";

if (window.location.href.includes("/problem/")) {
  getChromeLocalStorage("Timer").then((res) => {
    const { Timer } = res as { Timer: boolean };
    if (isUndefined(Timer))
      throw new Error("[PSHelper]Repository가 설정되지 않았습니다.");
    if (Timer) {
      insertHTML({
        element: $(".page-header"),
        position: "afterbegin",
        html: `<TimeContainer class="timer-container"></TimeContainer>`,
      });
      new ProblemPage({ node: $("TimeContainer"), state: {} });
    }
  });
} else if (window.location.href.includes("/submit/")) {
}
