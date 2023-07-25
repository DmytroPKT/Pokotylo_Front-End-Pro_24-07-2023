// Дано тризначне число.
//      Визначити чи є парною сума його цифр.
//      Визначити, чи кратна сума цифр п'яти.
//      Визначити чи є добуток його цифр більше 100.

let userNumber = parseInt(prompt('Please enter a three-digit number'), 577)

let firstDigit = parseInt(userNumber / 100)
let secondDigit = parseInt((userNumber / 10) % 10)
let thirdDigit = parseInt(userNumber % 10)


let userNumberSum = firstDigit + secondDigit + thirdDigit
let userNumberMultip = firstDigit * secondDigit * thirdDigit

if (userNumberSum % 2 === 0) {
    console.log(`Digits sum (${userNumberSum}) of ${userNumber} is pair`)
} else {
    console.log(`Digits sum (${userNumberSum}) of ${userNumber} is not pair`)
}

if (userNumberSum % 5 === 0) {
    console.log(`Digits sum of ${userNumber}  is multiple by 5 (${userNumberSum})`)
} else {
    console.log(`Digits sum of ${userNumber} is not a multiple by 5 (${userNumberSum})`)
}

if (userNumberMultip > 100) {
    console.log(`Digits multiplication (${userNumberMultip}) of ${userNumber} is more than 100 `)
} else {
    console.log(`Digits multiplication (${userNumberMultip}) of ${userNumber} is less than 100 `)
}

