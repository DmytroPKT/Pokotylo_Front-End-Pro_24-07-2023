// Визначити, чи є задане шестизначне число дзеркальним?

const userNumber = prompt('Please, enter 6-digit number: ',123321)

const firstDigit = parseInt(userNumber / 100000)
const secondDigit = parseInt((userNumber / 10000) % 10)
const thirdDigit = parseInt((userNumber / 1000) % 10)
const fourthDigit = parseInt((userNumber / 100) % 10)
const fifthDigit = parseInt((userNumber / 10) % 10)
const sixthDigit = parseInt(userNumber % 10)

if (firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit) {
    console.log(`${userNumber} is a palindrome number.`)
} else {
    console.log(`${userNumber} is not a palindrome number`)
}