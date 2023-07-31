document.write('Hometask 7 - 1st task. Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)');

let start = 20;
const end = 30;
let result = '';

while(start <= end) {
    result += `${start} `;
    start += 0.5;
};
console.log(result);
