import Component from "../../../Components/Core/Component/Component";
import "./Footer.css";

export default class Footer extends Component<{}> {
  setEvent(): void {
    this.node.addEventListener("click", () => {
      window.open("https://github.com/HANITZ/PSHelper");
    });
  }

  template(): string {
    return `
    <div>
      <span class="footer-name">PSHelper</span>
    </div>
        `;
  }
}
