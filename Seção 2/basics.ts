function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== "number" && typeof n2 !== "number") {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
}

const number1: number = 5; // -> Annotation
const number2 = 2.8; // -> Inference
const printResult: boolean = true;
const resultPhrase: string = 'Result is: '

add(number1, number2, printResult, resultPhrase);