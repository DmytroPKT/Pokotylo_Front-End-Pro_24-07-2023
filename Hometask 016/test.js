'use strickt';

let cacheList = [];
const cacheLimit = 10;
const operationFunction = (s, j) => {
    let out = s * j
    console.log(`Output for ${s} & ${j} is ${out}`)
    return out;
}

function cacheInnerFunction(operFunc, cache, limit) {
    return function (...args) {
        let input = args.join(' & ');
        for (let f of cache) {
            if (f.input === input) {
                console.log(`Cache output for ${input} is ${f.output}`);
                return cache;
                
            };
        }
        if (cache.length >= limit) {
            cache.shift();
        }

        const output = operFunc(...args);
        cache.push({ input, output });
        return cache;
    }
}

const cacheDissection = cacheInnerFunction(operationFunction,cacheList, cacheLimit);

function getNumbers(name) {
    let input;
    do {
        input = parseInt(prompt(`Enter ${name} number: `))
    } while(isNaN(input));
    return input;
}

function main(fnNumber, fnDissect) {
    let confirmMessage = true;
    while (confirmMessage) {
        confirmMessage = confirm('Are you want to continue?');
        if (!confirmMessage) {
            break;
        }
        let first = fnNumber('first');
        let second = fnNumber('second');
        fnDissect(first, second);
    }
}


cacheDissection(1, 2);
cacheDissection(1, 2);
cacheDissection(1, 2);
cacheDissection(1, 2);
cacheDissection(2, 2);
cacheDissection(2, 2);
cacheDissection(2, 2);
cacheDissection(2, 2);
cacheDissection(3, 2);
cacheDissection(3, 2);
cacheDissection(3, 2);
cacheDissection(3, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(4, 2);
cacheDissection(5, 2);
cacheDissection(5, 2);
cacheDissection(5, 2);
cacheDissection(6, 2);
cacheDissection(6, 2);
cacheDissection(6, 2);
cacheDissection(6, 2);
cacheDissection(7, 2);
cacheDissection(7, 2);
cacheDissection(7, 2);
cacheDissection(7, 2);
cacheDissection(8, 2);
cacheDissection(8, 2);
cacheDissection(8, 2);
cacheDissection(8, 2);
cacheDissection(8, 2);
cacheDissection(9, 2);
cacheDissection(9, 2);
cacheDissection(9, 2);
cacheDissection(9, 2);
cacheDissection(10, 2);
cacheDissection(10, 2);
cacheDissection(10, 2);
cacheDissection(10, 2);
cacheDissection(10, 2);
cacheDissection(11, 2);
cacheDissection(11, 2);
cacheDissection(11, 2);
cacheDissection(11, 22);
main(getNumbers, cacheDissection);
console.log(cacheList)