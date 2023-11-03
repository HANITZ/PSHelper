import {
  $,
  chromeStorageId,
  errorMsg,
  getChromeLocalStorage,
  insertHTML,
  isUndefined,
} from "@utils";
import { BeforeProblemPage } from "./BeforeProblemPage";
import { ChromeStorage } from "@Data/ChromeStorage";
import { ProblemPage } from "./ProblemPage";

getChromeLocalStorage(chromeStorageId.Timer).then((res) => {
  const { Timer } = res as Partial<ChromeStorage>;
  if (isUndefined(Timer))
    throw new Error("[PSHelper]Repository가 설정되지 않았습니다.");

  if (window.location.href.includes("challenges")) {
    const tableCheckInterval = setInterval(() => {
      if ($("table")) {
        new BeforeProblemPage({
          node: $("table"),
          state: {},
        });
        clearInterval(tableCheckInterval);
      }
    }, 1000);
  } else if (
    window.location.href.includes("/learn/courses/30") &&
    window.location.href.includes("lessons")
  ) {
    insertHTML({
      element: $(".nav.navbar-nav"),
      position: "afterbegin",
      html: `<div class="large-timer"></div>`,
    });
    insertHTML({
      element: $(".navbar"),
      position: "beforeend",
      html: `<div class="small-timer"></div>`,
    });
    getChromeLocalStorage([chromeStorageId.Timer, chromeStorageId.Upload]).then(
      (res) => {
        const { Timer, Upload } = res as Partial<ChromeStorage>;

        if (typeof Timer === "boolean" && typeof Upload === "boolean") {
          new ProblemPage({
            node: $("body"),
            state: {
              isTimer: Timer,
              isUpload: Upload,
            },
          });
          return;
        }
        throw new Error(errorMsg.NotFoundRepo);
      }
    );
  }
});
