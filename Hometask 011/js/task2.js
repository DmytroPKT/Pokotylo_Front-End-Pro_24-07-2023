document.write(`<h3>Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, 
указанного в переменной znak. Оба числа и знак получаются от пользователя.</h3>`);

const operators = ['+', '-', '*', '/', '%', '**']
const firstNumber = getNumber('first');
const operator = prompt(`Enter operator:${operators.join('\n')}`)
const secondNumber = getNumber('second');

function getNumber(numberName) {
    return parseInt(prompt(`Enter ${numberName} number: `))
}

function isValidOperation() {
    return operators.includes(operator)
}

function isValidNumbers() {
    return !isNaN(firstNumber) && !isNaN(secondNumber);
}

function isValidDivision() {
    return (operator != '/' || operator != '%') && secondNumber != 0;
}

if (isValidDivision() && isValidNumbers() && isValidOperation()) {
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${div(firstNumber, secondNumber)}`)
}



function summ(x,y) {
    return x + y;
}

function sub(x,y) {
    return x - y;
}

function mul(x,y) {
    return x * y;
}

function div(x,y) {
    return x / y;
}

function dwr(x,y) {
    return x % y;
}

function exp(x,y) {
    return x ** y;
}