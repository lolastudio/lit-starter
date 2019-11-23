import { LitElement, html } from '/web_modules/lit-element.js';

class HelloWeb extends LitElement {
    render() {
        return html`
            Hello web!
        `;
    }
}

customElements.define('hello-web', HelloWeb);