document.write(`Hometask 7 - 5th task. Дано деяке число. 
Визначити, чи можна отримати це число шляхом піднесення числа 3 до деякого степеня. (Наприклад, числа 9, 81 можна отримати, a 13 - ні)`);

let userNumber;
const operatingNumber = 3;

while(isNaN(userNumber) || userNumber <= 0) {
    userNumber = parseInt(prompt('Please enter number, greater than 0:'));
    if (!isNaN(userNumber) && userNumber > 0) {
        if (userNumber % operatingNumber != 0) {
            console.log(`The number ${userNumber} is not even divisible by ${operatingNumber}!`);
        } else {
            for (let i = 1; i <= userNumber; i++){
                if (operatingNumber ** i === userNumber) {
                    console.log(`${operatingNumber} ^ ${i} = ${userNumber}`);
                    break;
                } else if (i === userNumber) {
                    console.log(`The number ${userNumber} cannot be obtained by raising ${operatingNumber} to any power.`);
                };
            };
        };
    };
};
