document.write('Hometask 6 - 4th task. Знайти суму всіх цілих чисел від 1 до 15.');

let start = 1;
const end = 15;
let result = 0;

for (;start <= end; start++) {
    console.log(`${result} + ${start} = ${result + start}`);
    result += start;
}
console.log(`Final result: ${result}`);