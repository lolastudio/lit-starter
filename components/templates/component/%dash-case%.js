import { LitElement, html, css } from '/web_modules/lit-element.js';

class %pascal-case% extends LitElement {
	constructor() {
		super();
	}

	get styles() {
		return css``;
	}

	render() {
		return html`
			<style>${this.styles}</style>
			%dash-case% web component
		`;
	}
}

customElements.define('%dash-case%', %pascal-case%);

export default %pascal-case%; 