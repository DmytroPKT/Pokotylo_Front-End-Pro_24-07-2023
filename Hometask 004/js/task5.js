// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let userNumber = parseInt(prompt('Please enter a two-digit number'))

let firstDigit = parseInt(userNumber / 10)
let secondDigit = parseInt(userNumber % 10)


if (firstDigit > secondDigit) {
    console.log(`First digit of ${userNumber} is bigger that second`);
} else if (secondDigit > firstDigit) {
    console.log(`Second digit of ${userNumber} is bigger that first`);
} else {
    console.log(`Digits of ${userNumber} are equal`)
}