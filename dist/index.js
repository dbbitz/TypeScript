import RegexValidator from "./validators/validator.js";
class EmailInput extends HTMLElement {
    constructor() {
        // Sempre chame super primeiro no construtor
        super();
        // escreva a funcionalidade do elemento aqui
        const shadow = this.attachShadow({ mode: 'open' });
        let input = document.createElement('input');
        shadow.appendChild(input);
        input.onchange = () => {
            console.log(new RegexValidator(input.value));
        };
    }
}
customElements.define('email-input', EmailInput);
