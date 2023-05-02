function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

printResult(add(12, 5));

let combineValues: (i: number, j: number) => number; //Só aceita funções que tenham 2 params number e retorne number

combineValues = add;
// combineValues = printResult; -> !ERROR!
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result)
})