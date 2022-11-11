import { NameValidator, EmailValidator, PasswordValidator } from './validators/validator.js'

interface ApiResponde<T>{
  data: T,
  errors: Array<String>
}

interface UserData{
  id: Number,
  email: String,
  name: String
}

interface LoginData{
  id: any
}

let user:UserData;

class EmailInput extends HTMLElement {
  constructor() {
    // Sempre chame super primeiro no construtor
    super();

    // escreva a funcionalidade do elemento aqui
    const shadow = this.attachShadow({ mode: 'open' })

    let label = document.createElement('label')
    shadow.appendChild(label)
    label.innerHTML = 'Email: '

    let input: any = document.createElement('input')
    shadow.appendChild(input)

    input.onchange = () => {
      console.log(new EmailValidator(input.value));
      user.email = input.value
    };
  }
}
customElements.define('email-input', EmailInput)

class PasswordInput extends HTMLElement {
  constructor() {
    // Sempre chame super primeiro no construtor
    super();

    // escreva a funcionalidade do elemento aqui
    const shadow = this.attachShadow({ mode: 'open' })

    let label = document.createElement('label')
    shadow.appendChild(label)
    label.innerHTML = 'Password: '

    let input: any = document.createElement('input')
    shadow.appendChild(input)
    input.onchange = () => {
      console.log(new PasswordValidator(input.value));
    };
    user.id = input.value
  }
}
customElements.define('password-input', PasswordInput)

class NameInput extends HTMLElement {
  constructor() {
    // Sempre chame super primeiro no construtor
    super();

    // escreva a funcionalidade do elemento aqui
    const shadow = this.attachShadow({ mode: 'open' })

    let label = document.createElement('label')
    shadow.appendChild(label)
    label.innerHTML = 'Name: '

    let input: any = document.createElement('input')
    shadow.appendChild(input)
    input.onchange = () => {
      console.log(new NameValidator(input.value));
      user.name = input.value
    };
  }
}

customElements.define('name-input', NameInput)


class Buttons extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })

    let btnLogin = document.createElement('input')
    shadow.appendChild(btnLogin)
    btnLogin.type = 'button'
    btnLogin.value = 'Logar'
    btnLogin.onclick = () => {
      console.log('oi')
    }

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./style.css");

    // Attach the created element to the shadow DOM
    shadow.appendChild(linkElem);


  }
}

customElements.define('button-input', Buttons)


