import Component from "./Component";

export default class Footer extends Component<{}> {

  setEvent(): void {
    this.node.addEventListener("click", () => {
      window.open("https://github.com/HANITZ/PSHelper");
    });
  }


  template(): string {
    return `
    <div class="footer" >
      <span class="footer-name">PSHelper</span>
    </div>
        `;
  }
}
