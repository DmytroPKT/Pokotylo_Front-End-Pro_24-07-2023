'use strickt';

const rowsNumber = 10;
const cellsNumber = 10;
const table = document.getElementById('dynamicTable');
let tableNumbers = 1;

for (let i = 0; i < rowsNumber; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cellsNumber; j++) {
        const cell = row.insertCell();
        cell.textContent = tableNumbers++;
    }
};