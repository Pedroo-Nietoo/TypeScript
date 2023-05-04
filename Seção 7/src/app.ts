/* Generic type -> tipo que está  meio conectado com algum tipo e é
flexível quanto ao tipo exato que esse outro tipo é*/

// const names: Array<string> = ['Pedro', 'João', 'Júlia'] //string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// })

//? Tive que add 'extends object' para funcionar
//Type constrain _-> Para -> estabelecer restrições em relação aos tipos em que seus tipos genéricos podem se basear.
//Usamos 'extends'

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Pedro' }, { age: 17 });
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescrbibe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'

    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescrbibe(['Programação', 'Dormir']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'Pedro' }, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item)) {
            return;
        }
        return this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('João')
textStorage.addItem('Pedro');
textStorage.removeItem('João');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Testando...'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// //...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

//!bônus

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; //muda para um tipo que é um onjeto onde todas as propriedades são opcionais
    courseGoal .title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; //*Type casting
} 

const names: Readonly<string[]> = ['A', 'B'];
// names.push('C'); !ERROR!
// names.pop() !ERROR!