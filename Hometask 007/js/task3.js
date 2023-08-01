document.write('Hometask 7 - 3rd task. Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N');

let userNumber
let startInput = 1;
let start = startInput;
const end = 100;
let result = [];


while (isNaN(userNumber) || userNumber < 1) {
    userNumber = parseInt(prompt('Please, enter number:'));
    if (!isNaN(userNumber) && 1 <= userNumber) {
        for (; start <= end; start++) {
            if ((start ** 2) <= userNumber) {
                result.push(start);
            };
        };
        console.log(`Whole numbers from ${startInput} to ${end}, the square of which does not exceed ${userNumber}: ${result}.`);
    };
};
