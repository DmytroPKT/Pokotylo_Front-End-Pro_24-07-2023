const inputString = getInputString();
const valuesToRemove = getValuesToDelete();

const newString = main(inputString, valuesToRemove);

showResult();


function getInputString() {
    let input;
    do {
        input = prompt('Please, enter string');
    } while(!input);
    return input;
}

function getValuesToDelete() {
    let input;
    let dataArr = [];
    do {
        input = prompt(`Enter value to remove from "${inputString}". If you want to stop - click CANCEL.`);
        if (input === null && dataArr.length < 1) {
            alert(`You doesn't enter any value!`);
            break;
        } else if (input === null) {
            break;
        } else if (input === '' || input.length > 1 || !input) {
            alert(`Invalid input!`);
        }else {
            dataArr.push(input);
        }
    }while(input != null);    
    return dataArr;
}

function main(str, values) {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (str[i] === values[j]){
                break;
            } else if (j === (values.length - 1)) {
                newString += str[i];
            };
        };
    };
    return newString;
}

function showResult () {
    if (valuesToRemove.length != 0) {
        console.log(`${valuesToRemove} was removed from ${inputString}\noutput result - ${newString}`);
    } else {
        console.log('You doesn\'t enter any value to remove!');
    };
}
