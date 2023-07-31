document.write('Hometask 6 - 6th task. Вивести суму лише парних чисел y діапазоні від 30 до 80');

let start = 30;
const end = 80;
result = 0;

for (;start <= end; start++) {
    if (start % 2 != 0) {
        continue;
    }
    console.log(`${result} + ${start} = ${result + start}`);
    result += start;
}
console.log(`Result: ${result}`);


