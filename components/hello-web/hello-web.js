import { LitElement, html, css } from '/web_modules/lit-element.js';

class HelloWeb extends LitElement {
	constructor() {
		super();
	}

	get styles() {
		return css``;
	}

	render() {
		return html`
			<style>${this.styles}</style>
			Hello web!
		`;
	}
}

customElements.define('hello-web', HelloWeb);

export default HelloWeb; 