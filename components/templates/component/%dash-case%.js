import { LitElement, html, css } from '/web_modules/lit-element.js';

class %pascal-case% extends LitElement {
	constructor() {
		super();
	}

	static get styles() {
		return css``;
	}

	render() {
		return html`
			%dash-case% web component
		`;
	}
}

customElements.define('%dash-case%', %pascal-case%);

export default %pascal-case%; 
