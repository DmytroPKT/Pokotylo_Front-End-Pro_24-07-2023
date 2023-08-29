'use strickt';

const minLength = 5;
const maxLength = 50;

const keyLength = getKeyLength(minLength, maxLength);

const newKey = generateKey(keyLength, characters);

showResult(newKey);