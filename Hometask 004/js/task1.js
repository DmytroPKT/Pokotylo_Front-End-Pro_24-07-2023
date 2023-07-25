// Дано два різні числа. Визначити, яке з них більше, а яке менше.
const numberA =  parseFloat(prompt('Enter number A'))
const numberB = parseFloat(prompt('Enter number B'))


if (!numberA || isNaN(numberA) || !numberB || isNaN(numberB)) {
    alert('Invalid data')
} else {
    if (numberA > numberB) {
        alert(`${numberA} is bigger than ${numberB}`)
    } else if (numberB > numberA) {
        alert(`${numberB} is bigger than ${numberA}`)
    } else {
        alert('Numbers are equal')
    }
}

