'use strickt';

let cacheList = [];
const cacheLimit = 10;

const cacheDissection = cacheHandler(operationFunction, cacheList, cacheLimit);

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

getInput(getNumbers, cacheDissection);

showResult(cacheList);