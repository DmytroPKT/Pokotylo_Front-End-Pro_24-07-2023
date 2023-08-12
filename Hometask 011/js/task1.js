function doAppendix () {
    let result = 0;
    return function (num) {
        console.log(`${result} + ${num} = ${result + num}`);
        return result += num;
    }
}

const appendix = doAppendix();

doInput();

function doInput (){
    let counter = 0;
    do {
        let inputNumber = prompt('Enter any number:');
        if (inputNumber === null) {
            alert('You have stopped the summation.');
            break;
        } else if (isNaN(inputNumber) || !(inputNumber)) {
            alert('Numbers only!');
        } else {
            appendix(parseInt(inputNumber));
            counter ++;
        };
    } while(counter < 10);
}