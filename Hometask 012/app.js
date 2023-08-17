// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

// const taskArray = [1, 2, 3, 4, 5, 6, 7];
const taskArray = [1, 2, 3, 4, 5, 6, 7, 'Kate', 'John','1', '2', '3', '4', '5', '6', '7'];


showArray('Input');
const valueToremove = inputValue();
removeElement(taskArray, valueToremove);
showArray('Output');

function removeElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            arr.splice(i,1);
        };
    }return arr;
}

function inputValue() {
    let input;
    do {
        input = prompt(`Enter any value to remove from ${taskArray}:`);
    }while(!taskArray.includes(input));
    return input;
}

function showArray(arrName) {
    console.log(`${arrName} array: ${taskArray}.`)
}