'use strickt';

const inputListPoints = ['1', ['1.1', ['1.1.1', '1.1.2', '1.1.3'], '1.2', ['1.2.1', '1.2.2', '1.2.3'], '1.3', ['1.3.1', '1.3.2', '1.3.3']], '2', ['2.1', ['2.1.1', '2.1.2', '2.1.3'], '2.2', ['2.2.1', '2.2.2', '2.2.3'], '2.3', ['2.3.1', '2.3.2', '2.3.3']], '3', ['3.1', ['3.1.1', '3.1.2', '3.1.3'], '3.2', ['3.2.1', '3.2.2', '3.2.3'], '3.3', ['3.3.1', '3.3.2', '3.3.3']]];
const result = generateList(inputListPoints);
document.body.innerHTML = result;

function generateList(input) {
    let list = '<ul>';
    for (const item of input) {
        list += '<li>';

        if (Array.isArray(item)) {
            list += generateList(item);
        } else {
            list += `Point No ${item}`;
        }

        list += '</li>';
    }

    list += '</ul>'
    return list;
}



