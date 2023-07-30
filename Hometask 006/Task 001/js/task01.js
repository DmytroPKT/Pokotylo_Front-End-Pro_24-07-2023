document.write('Hometask 6 - 1st task. Вивести на сторінку в один рядок через кому числа від 10 до 20.');

let result = '';
let start = 10;
const end = 20;

do {
    if (start === end) {
        result +=`${start}.`;
        break;
    }
    result += `${start}, `;
    start++;
} while (start <= end);
console.log(result);