document.write('Hometask 7 - 2nd task. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів');

const uahUsd = 40;
let start = 10;
const end = 100;

for(;start <= end; start += 10) {
    console.log(`Exchange rate for ${start} USD = ${start * uahUsd} UAH.`);
}
