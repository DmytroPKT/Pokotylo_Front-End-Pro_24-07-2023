let arrayForValidation = [];

const operations = getData();
console.log(operations)
function getData(first, second) {
    const operationsObj = {
        summ: {symbol: '+', action: doSumm(first, second)},
        subtraction: {symbol: '-', action: doSubtraction(first, second)},
        multiplication: {symbol: '*', action: doMultiplication(first, second)},
        division: {symbol: '/', action: doDivision(first, second)},
        remainder: {symbol: '%', action: doRemainder(first, second)},
        exponentiation: {symbol: '^', action: doExponentiation(first, second)},
    };
    const operKeys = Object.keys(operationsObj)
    let operSymbols = [];
    for (let i = 0; i < operKeys.length; i++) {
        operSymbols.push(operationsObj[operKeys[i]]['symbol']);
    }
    return [operationsObj, operKeys, operSymbols];
 
  
}

// function isValidDivision(inputNumber) {
//     let valObj = getData(1,2);
//     if (arrayForValidation.length < 1) {
//         return true;
//     }else if ((operation === valObj.division.symbol || operation === valObj.remainder.symbol) && inputNumber === 0){
//         return alert(`Can't divide by ${inputNumber}!`);
//     } else {
//         return true;
//     };
// }

// function getValidNumber(numberName) {
//     let input;
//     do{
//         input = parseInt(prompt(`Enter ${numberName} number: `));
//     } while(isNaN(input) || !isValidDivision(input));
//     return input;
// }

// function getValidOperation() {
//     let oper;
//     do{
//         oper = prompt(`Enter operator:\n${operationsMessage()}`);
//     } while(!operations.includes(oper));
//     arrayForValidation.push(oper);
//     return oper;
// }

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

// function doMath(x, oper, y) {
//     let valObj = getData(x,y);
//     let valKeys = Object.keys(valObj);
//     for (let i = 0; i < operations.length; i++) {
//         if (valObj[valKeys[i]].symbol === oper) {
//             return valObj[valKeys[i]].action;
//         };
//     };
// }

// function showResult() {
//     alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
// }