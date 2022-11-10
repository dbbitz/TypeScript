class Validator {
    data;
    constructor(data:any){
        this.data = data
    }
}

class StringValidator extends Validator{
    constructor(data:any){
        if(typeof(data) == "string"){
            super(data)
        }
        else{
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator{
    constructor(data:any){
        if(typeof(data) == "boolean"){
            super(data)
        }
        else{
            throw new Error("O tipo está errado");
        }
    }
}

class Numbervalidator extends Validator{
    constructor(data:any){
        if(typeof(data) == "number"){
            super(data)
        }
        else{
            throw new Error("O tipo está errado");
        }
    }
}

class RegexValidator{
    constructor(data:any){
        
    }
    get regex(){
        return new RegExp("");
    }
}

class EmailValidator extends RegexValidator{
    constructor(data:any){
        const re = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim 
        if(!re.test(data)){
            console.log(re.test(data))
            throw new Error("Formato inválido")
        }
        else{
            console.log(!re.test(data))
            super(data)
        }
    }
}

class PasswordValidator extends RegexValidator{
    constructor(data:any){
        const re = /^\w{1,}$/gim
        if(!re.test(data)){
            throw new Error("Formato inválido")
        }
        else{
            super(data)
        }
    }
}

class NameValidator extends RegexValidator{
    constructor(data:any){
        const re = /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim
        if(!re.test(data)){
            throw new Error("Formato inválido")
        }
        else{
            super(data)
        }
    }
}


export {RegexValidator,EmailValidator,PasswordValidator,NameValidator};


