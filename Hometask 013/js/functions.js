function getNumber(message, min, max) {
    let input;
    let requirements;
    do {
        input = parseInt(prompt(message));
        requirements = min && max && ((input < min) || (input > max));
        requirements && alert(`${message} can't be more than ${max} or less that ${min}!`);
    } while (isNaN(input) || requirements);
    return input;
}

function doExponentiation(num, degree) {
    let result = num;
    if (degree === 0) {
        result = 1;
        return result;
    } else if (degree === 1) {
        return result;
    } else if (degree === -1) {
        return 1 / result;
    } else if (degree < -1) {
        return ((1 / result) * doExponentiation(num, degree + 1));
    }
    else {
        return result * doExponentiation(num, degree - 1);
    };
}

function showResult(num, degree, res) {
    (!isFinite(res) || (res < 1)) ? console.log(`${num} ^ ${degree} = ${res}`) : console.log(`${num} ^ ${degree} = ${BigInt(res)}`);
}