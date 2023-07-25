// Дано тризначне число.
//      Чи правда, що всі цифри однакові?
//      Чи є серед цифр цифри однакові?

const userNumber = prompt('Please, enter three-digit number: ',123)

const firstDigit = parseInt(userNumber / 100)
const secondDigit = parseInt((userNumber / 10) % 10)
const thirdDigit = parseInt(userNumber % 10)



if (firstDigit === secondDigit && firstDigit === thirdDigit) {
    console.log(`All digits of ${userNumber} are equal`)
} else if (firstDigit === secondDigit) {
    console.log(`Only first and second digits of ${userNumber} are equal`)
} else if (firstDigit === thirdDigit) {
    console.log(`Only first and third digits of ${userNumber} are equal`)
} else if (secondDigit === thirdDigit) {
    console.log(`Only second and third digits of ${userNumber} are equal`)
} else {
    console.log(`No any equal digits for ${userNumber}`)
}



console.log(userNumber, firstDigit, secondDigit, thirdDigit)
