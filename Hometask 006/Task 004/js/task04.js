let start = 1;
const end = 15;
let result = 0;

for (;start <= 15; start++) {
    console.log(`result = ${result} + ${start} = ${result + start}`)
    result += start
}
console.log(result)