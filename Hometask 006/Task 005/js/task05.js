document.write('Hometask 6 - 5th task. Знайти добуток ycix цілих чисел від 15 до 35.');

let start = 15;
const end = 35;
let result = 1

for (;start <= end; start++) {
    console.log(`${BigInt(result)} * ${start} = ${BigInt(result * start)}`);
    result *= start;
}
console.log(`Final result: ${BigInt(result)}`);