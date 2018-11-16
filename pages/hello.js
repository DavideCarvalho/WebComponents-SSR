class Hello extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" }).innerHTML = `
        Hello World from SSR Web Components <slot></slot>!
      `;
    }
  }
}
customElements.define("x-hello", Hello);
module.exports = Hello;