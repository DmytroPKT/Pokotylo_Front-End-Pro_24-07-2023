document.write('Hometask 6 - 2nd task. Вивести квадрати чисел від 10 до 20.');

let start = 10;
const end = 20;

do {
    let result = `${start} ^ 2 = ${start**2}`;
    if (start === end) {
        console.log(result + '.');
        break;
    }
    console.log(result + ';');
    start++;
} while(start <= end);