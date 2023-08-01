document.write('Hometask 7 - 3rd task. Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N');

const userNumber = parseInt(prompt('Please, enter number:'));
let start = 1;
const end = 100;
let result = [];

if (!userNumber || userNumber < 1) {
    alert('Invalid data!');
} else {
    for (; start<=end; start++) {
        if ((start ** 2) <= userNumber) {
            result.push(start);
        }
    }
    console.log(`Whole numbers from 1 to 100, the square of which does not exceed ${userNumber}: ${result}.`);
}


