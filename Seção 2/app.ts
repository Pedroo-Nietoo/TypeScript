let userInput: unknown; //unknown != any -> unknown checa o tipo atual armazenado
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(msg: string, code: number): never { //nunca produz um valor de retorno (never)
  throw { msg: msg, errorCode: code };
}

generateError("An error ocurred!", 500);
