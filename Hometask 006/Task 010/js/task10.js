document.write('Hometask 6 - 8th task. Надрукувати повну таблицю множення від 1 до 10');

let start = 1;
const end = 10;

for (;start<=end;start++) {
    console.log(`The multiplication table for the number ${start}:`);
    for(let i = 1; i <= 10; i++) {
        console.log(`${start} * ${i} = ${start * i}`);
    }
    console.log('\n');
};
