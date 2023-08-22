const characters = 'ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_+-=}{[]№';
const minLength = 5;
const maxLength = 50;

const keyLength = getKeyLength(minLength, maxLength);

const newKey = generateKey(keyLength, characters);

showResult(newKey);

function generateKey(len, chars) {
    let result = '';
    for (let i = 0; i < len; i++) {
        const generatedValue = Math.floor(Math.random() * chars.length);
        result += chars.charAt(generatedValue);
    }
    return result;
}

function getKeyLength(min, max) {
    let input, requirements;
    do {
        input = parseInt(prompt('Please, enter key length:'));
        requirements = (!isNaN(input) && (input >= min) && (input <= max));
        !requirements && alert(`Only numeric value! Key length can\'t be less than ${min} or more than ${max}!`)
    } while(!requirements);
    return input;
}

function showResult(res) {
    console.log(`New key: ${res}`)
}






