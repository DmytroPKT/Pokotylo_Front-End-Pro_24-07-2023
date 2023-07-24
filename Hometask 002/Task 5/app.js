const randomNumber = 74532
const firstNumber = parseInt(randomNumber / 10000)
const secondNumber = parseInt((randomNumber / 1000) % 10)
const thirdNumber = parseInt((randomNumber / 100) % 10)
const fourthNumber = parseInt((randomNumber / 10) % 10)
const fifthNumber = parseInt(randomNumber % 10)

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber)
