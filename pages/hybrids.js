const { html, define } = require('hybrids');

const myComponent = {
  render: () => html`
    Hello SSR Web Components from Hybrids
  `
}

const myClass = define('my-component', myComponent);
console.log(myClass.toString());
module.exports = myClass;