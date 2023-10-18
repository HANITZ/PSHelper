import Component from "./Component";

type PropsOption = {
  isTimer: boolean;
  isUpload: boolean;
};

export default class OptionPopup extends Component<PropsOption> {
  template(): string {
    return `
    <div class="option-container" >
    
    </div>
    `
  }
}
