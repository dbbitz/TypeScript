class Validator {
    data;
    constructor(data:any){
        this.data = data
        console.log("Tipo validado")
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
let a = new StringValidator("oi")
let b = new BooleanValidator(true)
let c = new Numbervalidator(2)



