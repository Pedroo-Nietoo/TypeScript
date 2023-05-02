//? type guard -> checa se o método existe antes de tentar utilizá-lo, ou se pode-se fazer algo com ele antes de utilizá-lo

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Employee & Admin; //* Intersection types

const e1: ElevatedEmployee = {
    name: 'Pedro',
    privileges: ['create-server'],
    startDate: new Date(),
};


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //* Intersection types

function add(a: number, b: number): number; //* function overload
function add(a: string, b: string): string; //* function overload
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { //* type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = add(1, 3);
const result = add("A", " B");
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Pedro',
    job: { title: 'Back-End Dev', description: 'My own job' }
};

console.log(fetchedUserData?.job?.title); //* Optional chaining


const userInput = '';

const storedData = userInput ?? 'DEFAULT'; //* Nullish coalescing
console.log(storedData);

//// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);

//     if ('privileges' in emp) { //* type guard
//         console.log('Privileges: ' + emp.privileges);
//     }

//     if ('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate);
//     }
// }

// printEmployeeInfo({ name: 'Pedro', startDate: new Date() });


// class Car {
//     drive() {
//         console.log('Driving...');
//     }

// }
// class Truck {
//     drive() {
//         console.log('Driving...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo...' + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// //Discriminated union -> Padrão utilizado ao trabalhar com union types que torna mais fácil implementar type guards

// interface Bird {
//     type: 'bird' //* discriminated union
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse' //* discriminated union
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input') as HTMLInputElement; //* type casting

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there'
// }

// interface ErrorContainer { //{ email: 'Not a valid e-mail, username: 'Must start with a character! }
//     [prop: string]: string //* index properties
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid e-mail!',
//     username: 'Must start with a capital character!'
// };

// //*function overloads -> definir multiplas assinaturas de funções para uma mesma função
