import { $, chromeStorageId, getChromeLocalStorage, isUndefined } from "@utils";
import { BeforeProblemPage } from "./BeforeProblemPage";
import { ChromeStorage } from "@Data/ChromeStorage";

getChromeLocalStorage(chromeStorageId.Timer).then((res) => {
  const { Timer } = res as Partial<ChromeStorage>;
  if (isUndefined(Timer))
    throw new Error("[PSHelper]Repository가 설정되지 않았습니다.");

  if (window.location.href.includes("challenges")) {
    new BeforeProblemPage({
      node: $("table"),
      state: {},
    });
  } else if (
    window.location.href.includes("/learn/courses/30") &&
    window.location.href.includes("lessons")
  ) {
    
  }
});
