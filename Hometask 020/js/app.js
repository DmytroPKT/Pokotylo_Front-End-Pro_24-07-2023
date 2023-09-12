const inputElements = document.forms.inputForm.elements;
const inputForm = document.forms.inputForm
const saveButton = document.getElementById("saveButton");
const userData = document.getElementById('userData');
const table = document.querySelector('table');
const resetBtn = document.getElementById('resetBtn');

saveButton.addEventListener('click', () => {
    const userInputObj = {
        'Name:': inputElements.name.value,
        'Family Name:': inputElements.familyname.value,
        'Date of birth:': inputElements.dob.value,
        'Gender:': inputElements.gen.value,
        'City:': cities[inputElements.cities.value],
        'Address:': inputElements.addr.value,
        'Languages:': [...document.querySelectorAll('input[name="languages"]:checked')].map(input => input.value),
    };

    const tableKeys = Object.keys(userInputObj);
    const userInput = Object.values(userInputObj);

    const rowsNumber = tableKeys.length;
    const cellsNumber = 2;

    for (let i = 0; i < rowsNumber; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cellsNumber; j++) {
            const cell = row.insertCell();
            j % 2 != 0 ? cell.textContent = userInput[i] : cell.textContent = tableKeys[i];
        };
    };

    userData.classList.remove("hidden");
    inputForm.classList.add("hidden");

});

resetBtn.addEventListener('click', () => {
    inputForm.reset();
    table.innerHTML = '';
    inputForm.classList.remove("hidden");
    userData.classList.add("hidden");
});