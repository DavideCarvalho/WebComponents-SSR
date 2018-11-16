const { props, withComponent } = require('skatejs/dist/node/index');

class Skate extends withComponent() {
  static get props() {
    return {
      name: props.string
    };
  }
  render({ name }) {
    return `Hello, ${name}!`;
  }
}

customElements.define('x-skate', Skate);
module.exports = Skate;