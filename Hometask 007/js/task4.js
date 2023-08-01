document.write('Hometask 7 - 4th task. Дано ціле число. 3\'ясувати, чи воно простим (простим називається число, більше ніж 1, які не мають інших дільників крім 1 i ce6e).');


let userNumber;
let divisorsCounter = 0;
let divisors = [];

while (isNaN(userNumber) || userNumber <= 1) {
    userNumber = parseInt(prompt('Please enter number bigger than 1:'))
    if (!isNaN(userNumber) && userNumber > 1) {
        for (let i = 1; i <= userNumber; i++) {
            if (userNumber % i === 0) {
                divisorsCounter ++;
                divisors.push(i);
            };
        };
        if (divisorsCounter === 2) {
            console.log(`The number ${userNumber} is a prime number.`);
        } else {
            console.log(`The number ${userNumber} is not a prime number. It can be divided by: ${divisors} (${divisorsCounter} divisors).`);
        };
    };
};
