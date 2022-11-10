import { NameValidator, EmailValidator, PasswordValidator } from './validators/validator.js';
class EmailInput extends HTMLElement {
    constructor() {
        // Sempre chame super primeiro no construtor
        super();
        // escreva a funcionalidade do elemento aqui
        const shadow = this.attachShadow({ mode: 'open' });
        let label = document.createElement('label');
        shadow.appendChild(label);
        label.innerHTML = 'Email: ';
        let input = document.createElement('input');
        shadow.appendChild(input);
        input.onchange = () => {
            console.log(new EmailValidator(input.value));
        };
    }
}
customElements.define('email-input', EmailInput);
class PasswordInput extends HTMLElement {
    constructor() {
        // Sempre chame super primeiro no construtor
        super();
        // escreva a funcionalidade do elemento aqui
        const shadow = this.attachShadow({ mode: 'open' });
        let label = document.createElement('label');
        shadow.appendChild(label);
        label.innerHTML = 'Password: ';
        let input = document.createElement('input');
        shadow.appendChild(input);
        input.onchange = () => {
            console.log(new PasswordValidator(input.value));
        };
        input.type = 'password';
    }
}
customElements.define('password-input', PasswordInput);
class NameInput extends HTMLElement {
    constructor() {
        // Sempre chame super primeiro no construtor
        super();
        // escreva a funcionalidade do elemento aqui
        const shadow = this.attachShadow({ mode: 'open' });
        let label = document.createElement('label');
        shadow.appendChild(label);
        label.innerHTML = 'Name: ';
        let input = document.createElement('input');
        shadow.appendChild(input);
        input.onchange = () => {
            console.log(new NameValidator(input.value));
        };
    }
}
customElements.define('name-input', NameInput);
class Buttons extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        let btnRegister = document.createElement('input');
        shadow.appendChild(btnRegister);
        btnRegister.type = 'button';
        btnRegister.value = 'Cadastrar';
        let btnLogin = document.createElement('input');
        shadow.appendChild(btnLogin);
        btnLogin.type = 'button';
        btnLogin.value = 'Logar';
        let btnUpdate = document.createElement('input');
        shadow.appendChild(btnUpdate);
        btnUpdate.type = 'button';
        btnUpdate.value = 'Atualizar';
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "./style.css");
        // Attach the created element to the shadow DOM
        shadow.appendChild(linkElem);
    }
}
customElements.define('button-input', Buttons);
