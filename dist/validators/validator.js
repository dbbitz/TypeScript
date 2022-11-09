class Validator {
    constructor(data) {
        this.data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        if (typeof (data) == "string") {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof (data) == "boolean") {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class Numbervalidator extends Validator {
    constructor(data) {
        if (typeof (data) == "number") {
            super(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class RegexValidator extends StringValidator {
    constructor(data) {
        super(data);
        const re = new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
        if (!re.test(data)) {
            throw new Error("O formato está errado");
        }
    }
}
export default RegexValidator;
