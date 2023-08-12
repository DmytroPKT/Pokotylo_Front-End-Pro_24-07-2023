let arrayForValidation = [];
const operations = ['+', '-', '*', '/', '%', '^'];
const firstNumber = getValidNumber('first');
const operation = getValidOperation();
const secondNumber = getValidNumber('second');

const result = doMath(firstNumber,operation,secondNumber);

showResult();

function isValidDivision(inputNumber) {
    if (arrayForValidation.length < 1) {
        return true;
    }else if ((operation === '/' || operation === '%') && inputNumber === 0){
        return alert(`Can't divide by ${inputNumber}!`);
    } else {
        return true;
    }
}

function getValidNumber(numberName) {
    let input;
    do{
        input = parseInt(prompt(`Enter ${numberName} number: `));
    } while(isNaN(input) || !isValidDivision(input));
    return input;
}

function getValidOperation() {
    let oper;
    do{
        oper = prompt(`Enter operator:\n${operations.join('\n')}`);
    } while(!operations.includes(oper));
    arrayForValidation.push(oper);
    return oper;
}

function doSumm(x,y) {
    return x + y;
}

function doSubtraction(x,y) {
    return x - y;
}

function doMultiplication(x,y) {
    return x * y;
}

function doDivision(x,y) {
    return x / y;
}

function doRemainder(x,y) {
    return x % y;
}

function doExponentiation(x,y) {
    return x ** y;
}

function doMath(x, oper, y) {
    switch(oper){
        case('+'):
            return doSumm(x,y);
        case('-'):
            return doSubtraction(x,y);
        case('*'):
            return doMultiplication(x,y);
        case('/'):
            return doDivision(x,y);
        case('%'):
            return doRemainder(x,y);
        case('^'):
            return doExponentiation(x,y);
    };
}

function showResult() {
    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}