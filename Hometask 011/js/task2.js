let operationInUse = [];
const operations = getData()[2];
const operationsNames = getData()[1];

const firstNumber = getValidNumber('first');
const operation = getValidOperation();
const secondNumber = getValidNumber('second');

const result = doMath(firstNumber,operation, secondNumber);

showResult();

function getData(first, second) {
    const operationsObj = {
        summ: {symbol: '+', action: doSumm(first, second)},
        subtraction: {symbol: '-', action: doSubtraction(first, second)},
        multiplication: {symbol: '*', action: doMultiplication(first, second)},
        division: {symbol: '/', action: doDivision(first, second)},
        remainder: {symbol: '%', action: doRemainder(first, second)},
        exponentiation: {symbol: '^', action: doExponentiation(first, second)},
    };
    const operNames = Object.keys(operationsObj);
    let symbols = [];
    for (let i = 0; i < operNames.length; i++) {
        symbols.push(operationsObj[operNames[i]]['symbol']);
    };
    return [operationsObj, operNames, symbols];
}

function getOperationsDescriptions() {
    let message = '';
    for (let i = 0; i < operations.length; i++) {
        message += `${operations[i]}    ${operationsNames[i]}\n`;
    };
    return message;
}

function isValidDivision(inputNumber) {
    let valObj = getData()[0];
    if (operationInUse.length < 1) {
        return true;
    }else if ((operation === valObj.division.symbol || operation === valObj.remainder.symbol) && inputNumber === 0){
        return alert(`Can't divide by ${inputNumber}!`);
    } else {
        return true;
    };
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
        oper = prompt(`Enter operation:\n${getOperationsDescriptions()}`);
    } while(!operations.includes(oper));
    operationInUse.push(oper);
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
    let valObj = getData(x,y)[0];
    for (let i = 0; i < operationsNames.length; i++) {
        if (valObj[operationsNames[i]].symbol === oper) {
            return valObj[operationsNames[i]].action;
        };
    };
}

function showResult() {
    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}