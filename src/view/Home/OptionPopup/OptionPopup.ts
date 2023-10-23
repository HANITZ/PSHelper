import {
  isUndefined,
  selectEl,
  getChromeLocalStorage,
  sendChromeMessage,
} from "@utils";
import { Component } from "@Component";
import { OptionSlide } from "@OptionPopup/OptionSlide";
import "./OptionPopup.css";

type PropsOptionPopup = {
  Timer?: boolean;
  Upload?: boolean;
};

export default class OptionPopup extends Component<PropsOptionPopup> {
  createChildComponents() {
    const { Timer, Upload } = this.state;

    new OptionSlide({
      node: selectEl("OptionIsUpload", this.node),
      state: {
        id: "Upload",
        isActive: Upload,
        optionTitle: "Uploading code to Repo",
      },
    });

    new OptionSlide({
      node: selectEl("OptionIsTimer", this.node),
      state: {
        id: "Timer",
        isActive: Timer,
        optionTitle: "Auto Timer",
      },
    });
  }
  async componentDidMount() {
    let { Timer } = (await getChromeLocalStorage("Timer")) as {
      Timer: boolean;
    };
    let { Upload } = (await getChromeLocalStorage("Upload")) as {
      Upload: boolean;
    };

    if (isUndefined(Timer)) {
      Timer = true;
      sendChromeMessage({ action: "Timer", method: "post", isActive: Timer });
    }
    if (isUndefined(Upload)) {
      Upload = true;
      sendChromeMessage({ action: "Upload", method: "post", isActive: Upload });
    }
    this.setState({ Timer, Upload });
  }
  template(): string {
    return `
    <div>
      <div class="option-header">
        <h1 class="option-title">Option</h1>
      </div>
      <div class="option-body">
        <OptionIsUpload class="option isUpload"></OptionIsUpload>
        <OptionIsTimer class="option isTimer" ></OptionIsTimer>
      </div>
    </div>
    `;
  }
}
