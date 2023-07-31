document.write(`Hometask 6 - 9th task. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
a.Визначити кількість його парних дільників;
b.Знайти суму його парних дільників.`);

const userNumber = parseInt(prompt('Please enter natural number: '));
let numberDivisors = '';
let evenNumberDivisors = [];
let evenNumberDivisorsSum = 0;

for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i != 0) {
        continue;
    }
    if (i % 2 === 0) {
        evenNumberDivisors.push(i);
        evenNumberDivisorsSum += i;
    }
    if (userNumber === i) {
        numberDivisors += `${i}`;
        break;
    }
    numberDivisors += `${i}, `;
}

console.log(`The number ${userNumber} can be divided by: ${numberDivisors};
\n\ta.The even divisors of the number ${userNumber} are: ${evenNumberDivisors}. Their count is ${evenNumberDivisors.length};
\n\tb.The sum of even divisors of the number ${userNumber} is ${evenNumberDivisorsSum}.`);