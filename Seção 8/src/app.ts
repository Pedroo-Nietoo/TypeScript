//decorator == "função" que você aplica a algo (geralmente, classes) de uma certa forma
//precisa de pelo menos um parâmetro
//decoratos são executados quando sua classe é definida, não instanciada
//são executados de baixo para cima, e sua ordem de execução depende do que for posto antes do decorator fabric

function Logger(logString: string) {//Decorator
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) { //?Meta programming /// Muito legal
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) { //decorator fabric
        return class extends originalConstructor { //quando a classe é instanciada, e não definida
            constructor(..._: any[]) { //_ = não usamos e vamos ignorar, mas aceitamos
                super();
                console.log('Renderizando template...')
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

@Logger('Logando - PESSOA') //@ -> identificador especial que o TS vê e identifica, após ele deve ter o nome da função que será usada com decorator
@WithTemplate(`<h1>My Person Object</h1>`, 'app')
class Pessoa {
    name = 'Pedro';

    constructor() {
        console.log('Criando novo objeto de pessoa...');
    }
}

const p = new Pessoa();

console.log(p);

//--------------------
function Log(target: any, propertyName: string) { //dá pra retornar algo, mas o TS vai ignorar
    console.log('Property decorator!')
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) { //dá pra retornar algo
    console.log('Acessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { //dá pra retornar algo
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) { //dá pra retornar algo, mas o TS vai ignorar
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Preço inválido - deveria ser positivo!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}


function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'Funciona!'

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const pr = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', pr.showMessage);


//-----------------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] //['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Input inválido, por favor tente novamente!');
        return;
    }
    console.log(createdCourse);
})