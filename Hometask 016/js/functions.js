'use strickt';

const operationFunction = (arg1, arg2) => {
    let out = arg1 * arg2;
    console.log(`Output for ${arg1} & ${arg2} is ${out}`);
    return out;
}

function cacheHandler(operFunc, cache, limit) {
    return function (...args) {
        let input = args.join(' & ');
        let reverseInput = input.split('').reverse().join('');
        for (let i of cache) {
            if (i.input === input || i.input === reverseInput) {
                console.log(`Cache output for ${input} is ${i.output}`);
                return cache;
            };
        };

        if (cache.length >= limit) {
            cache.shift();
        };

        const output = operFunc(...args);
        cache.push({ input, output });
        return cache;
    }
}


function getNumbers(name) {
    let input;
    do {
        input = parseInt(prompt(`Enter ${name} number: `));
    } while(isNaN(input));
    return input;
}

function getInput(fnNumber, fnDissect) {
    let confirmMessage = true;
    while (confirmMessage) {
        confirmMessage = confirm('Are you want to continue?');
        if (!confirmMessage) {
            break;
        }
        let first = fnNumber('first');
        let second = fnNumber('second');
        fnDissect(first, second);
    };
}

function showResult(result) {
    console.log(result);
}
