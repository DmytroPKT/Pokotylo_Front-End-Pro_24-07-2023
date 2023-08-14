const minLength = 1;

const mainLenFunct = getSize();
const mainLength = mainLenFunct('Main');

const result = getArray(mainLength);
console.log(result);

function getSize () {
    let counter = 1;
    return function (name) {
        let input;
        do {
            input = parseInt(prompt(`Enter length (min length = ${minLength}) for ${name} array No${counter}`));
        } while(isNaN(input) || input < minLength);
        counter ++;
        return input;
    }
}

function getArray (mainLen) {
    let mainArray = [];
    const innerLenFunct = getSize();
    for(let i = 0; i < mainLen; i++) {
        let innerArray = [];
        const innerLength = innerLenFunct('Inner');
        for(let j= 0; j < innerLength; j++) {
            let input = prompt(`Enter value for [${i + 1}/${mainLen}] [${j + 1}/${innerLength}].`);
            innerArray.push(input);
        }
        mainArray.push(innerArray);
    }
    return mainArray;
}