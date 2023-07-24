let firstNumber = prompt('Enter first number:')
const operator = prompt('Enter operator "+" or "-" or "*" or "/":')
let secondNumber = prompt('Enter second number:')
let result = 0

switch (operator) {
    case "+":
        result = Number(firstNumber) + Number(secondNumber)
        break;
    case "-":
        result = firstNumber - secondNumber
        break;
    case "*":
        result = firstNumber * secondNumber
        break;
    case "/":
        result = firstNumber / secondNumber
        break;
}

alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)

