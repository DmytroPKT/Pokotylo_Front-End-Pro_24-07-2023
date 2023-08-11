const operations = ['+', '-', '*', '/', '%', '**']
const firstNumber = parseInt(prompt(getNumber('first')));
const operation = prompt(`Enter operator:${operations.join('\n')}`)
const secondNumber = parseInt(prompt(getNumber('second')));



operations.includes(operation)


const foundElement = operators.find(ele => ele === operator);
console.log(foundElement);
