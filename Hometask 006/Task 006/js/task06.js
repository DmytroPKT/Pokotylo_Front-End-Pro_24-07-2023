document.write('Hometask 6 - 6th task. Знайти середнє арифметичне всіх цілих чисел від 1 до 500');

let start = 1;
const end = 500;
let result = 0;

for (;start <= end; start++) {
    // console.log(`${result} + ${start} = ${result + start}`)
    result += start;
}

console.log(`${start-end} + ${start-end + 1} + ${start-end+2} + ... +${end} = ${result} \n${result} / ${end} = ${result / end}`)
