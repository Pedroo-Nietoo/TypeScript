//interface -> auxilia a definir a estrutura de um objeto, typescript puro, não existe no js
//type = mais flexível, interface = mais claro, apenas estrutura do objeto

// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string; //propriedade é opcional
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

//class Person implements Greetable, OutraInterface { }
class Person implements Greetable {
    name?: string;
    age = 30;
    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi')
        }
        
    }
}

let user1: Greetable;

user1 = new Person()
// user1 = new Person('Pedro')

user1.greet('Hi, I am');
console.log(user1)