// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let firstNumber = parseFloat(prompt('Enter first number'))
let secondNumber = parseFloat(prompt('Enter second number'))

let firstNumberLastDigit = firstNumber % 10
let secondNumberLastDigit = secondNumber % 10


if (firstNumber % 2 === 0) {
    console.log(`First number is pair, last digit of ${firstNumber} is ${firstNumberLastDigit}`)
} else {
    console.log(`First number is not pair,  last digit of ${firstNumber} is ${firstNumberLastDigit}`)
}

if (secondNumber % 2 === 0) {
    console.log(`Second number is a pair, last digit of ${secondNumber} is ${secondNumberLastDigit}`)
} else {
    console.log(`Second number is not pair, , last digit of ${secondNumber} is ${secondNumberLastDigit}`)
}
