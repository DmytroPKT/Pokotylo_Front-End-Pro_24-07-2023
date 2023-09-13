function createCities() {
    const parent = document.getElementById('citiesBlock');

    const selectElem = document.createElement('select');
    selectElem.name = 'cities';

    for (key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.id = 'city';
        option.textContent = cities[key];

        selectElem.appendChild(option);
    }

    parent.appendChild(selectElem);

}


function createLanguages() {
    const parent = document.getElementById('lang');
    
    for (key in languages) {
        const textLang = document.createElement('p');
        const inputLang = document.createElement('input');
        inputLang.type = 'checkbox';
        inputLang.name = 'languages';
        inputLang.value = key;
        textLang.appendChild(inputLang);
        textLang.append(languages[key]);
        parent.appendChild(textLang);
    }
}