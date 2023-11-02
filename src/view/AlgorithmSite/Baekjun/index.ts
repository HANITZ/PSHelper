import {
  $,
  chromeStorageId,
  deleteChromeLocalStorage,
  errorMsg,
  getChromeLocalStorage,
  insertHTML,
  isUndefined,
} from "@utils";
import ProblemPage from "./ProblemPage/ProblemPage";
import SubmitPage from "./SubmitPage/SubmitPage";
import { ChromeStorage } from "@Data/ChromeStorage/types";
import SubmitedListPage from "./SubmitedListPage/SubmitedListPage";
import { Modal } from "view/Modal";
import "../../Modal/Modal.css";

if (window.location.href.includes("/problem/")) {
  getChromeLocalStorage(chromeStorageId.Timer).then((res) => {
    const { Timer } = res as Partial<ChromeStorage>;
    if (isUndefined(Timer))
      throw new Error(errorMsg.NotFoundRepo);
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
  new SubmitPage({
    node: $("#submit_button"),
    state: {},
  });
} else {
  getChromeLocalStorage(chromeStorageId.SubmissionId).then((res) => {
    const { SubmissionId } = res as Partial<ChromeStorage>;
    if (!isUndefined(SubmissionId)) {
      insertHTML({
        element: $(".result"),
        position: "beforeend",
        html: `<div class="status" ></div>`,
      });
      new SubmitedListPage({
        node: $(".status"),
        state: { status: "loading" },
      });
      deleteChromeLocalStorage(chromeStorageId.SubmissionId);
    }
  });
}

// insertHTML({
//   element: $(".result"),
//   position: "beforeend",
//   html: `<div class="status" ></div>`,
// });
// new SubmitedListPage({
//   node: $(".status"),
//   state: { status: "loading" },
// });
// new Modal({
//   node: $('.wrapper'),
//   state:{}
// })

const contentElement = $(".container.content");
const html = `
  <div class="ps-modal-container"  >
    <div class="ps-modal-header">
      <div class="ps-user">
        <span>HANITZ</span>
        <span>submited at Oct 25, 2023 16:17</span>
      </div>
    </div>
    <div class="ps-modal-body">
      <div class="solving-analysis">
        <div class="time-wrap" >
          <div class="time-title" >
            <div>풀이</div>
            <div>Runtime</div>
          </div>
          <div class="time-body">
            <div>50ms</div>
          </div>
        </div>
        <div class="memory-wrap">
          <div class"memory-title">
            <div>Memory</div>
          </div>
        </div>
      </div>
      <div class="eff-wrap">
        <div class="eff-header">
          <div class="eff-category">
            <div>Runtime</div>
            <div>Memory</div>
          </div>
        </div>
        <div class="eff-body">
          <div class="chart-top" data-highcharts-chart="10" >
            <div class="chart-top-content">

            </div>
          </div>
          <div class="chart-bottom"></div>
        </div>
      
      </div>
    </div>

  </div>
`;
// insertHTML({ element: contentElement, position: "beforeend", html });