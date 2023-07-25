//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

const firstNumber = parseFloat(prompt('Enter first number: '))
const secondNumber = parseFloat(prompt('Enter second number: '))

if (firstNumber % secondNumber != 0) {
    console.log('The second number is not a divisor of the first !');
} else {
    console.log('The second number is a divisor of the first ');
}

if (secondNumber % firstNumber != 0) {
    console.log('The first number is not a divisor of the second !');
   
} else {
    console.log('The first number is a divisor of the second ');
    
}