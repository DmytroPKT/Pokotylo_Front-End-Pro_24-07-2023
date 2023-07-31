document.write('Hometask 6 - 9th task. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');

const userNumber = parseInt(prompt('Please enter natural number: '));
let result = '';

for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i != 0) {
        continue;
    } else if (userNumber === i) {
        result += `${i}.`;
        break;
    }
    
    result += `${i}, `;
}
console.log(`The number ${userNumber} can be divided by: ${result}`);

