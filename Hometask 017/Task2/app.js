'use strickt';

const inputButton = document.getElementById('inputButton');
const redirButton = document.getElementById('redirectButton');
let inputLink = '';

inputButton.addEventListener('click', () => {
    let userInput = prompt('Enter link here: ');
    if (userInput) {
        if (!userInput.startsWith('http://') && !userInput.startsWith('https://')) {
            inputLink = 'http://' + userInput;
        } else {
            inputLink = userInput;
        }
    }
});

redirButton.addEventListener('click', () => {
    if (inputLink) {
        window.location.href = inputLink;
    } else {
        alert('No link entered!');
    }
});