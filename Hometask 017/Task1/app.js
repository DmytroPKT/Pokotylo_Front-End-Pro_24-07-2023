'use strickt';

const inputField = document.getElementById('inputField');
const infoField = document.getElementById('info');

inputField.addEventListener('focus', () => {
    infoField.style.display = 'block';
});

inputField.addEventListener('blur', () => {
    infoField.style.display = 'none';
});