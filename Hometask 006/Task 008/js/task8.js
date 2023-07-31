document.write('Hometask 6 - 8th task. Вивести всі числа в діапазоні від 100 до 200, які кратні 3');

let start = 100;
const end = 200;
let result = "";

while (start <= end) {
    if (start % 3 === 0) {
        result += `${start} `;
    }
    start++;
}
console.log(result);
