// const add = (n1: number, n2: number) => {
//     return n1 + n2
// };
// console.log(add(2, 5));

// const sub = (a: number, b: number) => a - b;
// console.log(sub(10, 4));

// const printOutput: (a: string | number) => void = output => console.log(output);
// console.log(printOutput(add(5, 2)))

// const button = document.querySelector('button');
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['Coding', 'Volleyball', 'Scouts'];
const activeHobbies = ['Reading']; //['Reading', ...hobbies]
activeHobbies.push(...hobbies) //se der push sem spread, cria uma nested array
console.log(activeHobbies)

const person = {
    fname: 'Pedro',
    age: 17
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
    return numbers.reduce((currentReult, currentValue) => {
        return currentReult + currentValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers)

//Array Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2)

const {fname: userName, age} = person;
console.log(userName, age,);