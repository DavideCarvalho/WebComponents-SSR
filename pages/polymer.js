import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {

  render() {
    return html`<style> .mood { color: green; } </style>
      Web Components are <span class="mood">Awesome</span>!`;
  }

}
// customElements.define('my-element', MyElement);
module.exports = MyElement;