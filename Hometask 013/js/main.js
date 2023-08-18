const minDegree = -5;
const maxDegree = 100;

const inputNumber = getNumber('Enter any number: ');
const inputDegree = getNumber('Enter degree', minDegree, maxDegree);

const result = doExponentiation(inputNumber, inputDegree);

showResult(inputNumber, inputDegree, result);