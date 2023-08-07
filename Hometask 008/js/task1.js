document.write(`<h3>Створити масив, довжину та елементи якого задає користувач.
Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно).
У міру змін виводити вміст масиву на сторінку.</h3><hr>`);

let arrLength, userArray = [];

while(!arrLength || isNaN(arrLength) || arrLength < 1) {
    arrLength = parseInt(prompt('Please enter the length of the array:'));
    for (let i = 1; i <= arrLength; i++) {
        userArray.push(prompt(`Please enter array element #${i}:`))
    };
};

document.write(`<p>Input array: ${userArray}.</p>`);

document.write(`<p>Sorted array: ${userArray.sort()}.</p>`);

userArray.splice(2,3);
document.write(`<p>Cutted array: ${userArray}.</p>`);