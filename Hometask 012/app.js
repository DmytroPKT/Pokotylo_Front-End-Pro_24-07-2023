const taskArray = [1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7', 'Bill', 'Jack', 'Kate', 'Bill', 'Bill', 7, 7, 7, 7, 7, 7, 7, 7];

appendixElements(taskArray);
showArray(taskArray, 'Input');
const valueToremove = inputValueToRemove(taskArray);
removeElement(taskArray, valueToremove);
showArray(taskArray, 'Output');

function appendixElements(arr) {
    let input;
    do {
        input = prompt(`Enter elements which you want add to array ${arr}.\n\nIf you don't want to add any more elements - press CANCEL.`);
        arr.push(input);
    } while (input != null);
    arr.pop();
    return arr;
}


function removeElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) { // Since the array can contain numbers of numeric type and numbers of string type. Equality is non-strict.
            arr.splice(i, 1);
            return removeElement(arr, value);
        };
    };
    return arr;
}

function inputValueToRemove(arr) {
    let input;
    let requirements;
    do {
        input = prompt(`Enter any value to remove from ${arr}:`);
        requirements = arr.includes(input);
        !requirements && alert(`There is no any ' ${input} ' in ${arr}!`);
    } while (!requirements);
    return input;
}

function showArray(arr, arrName) {
    console.log(`${arrName} array: ${arr}.${arr.length}`);
}