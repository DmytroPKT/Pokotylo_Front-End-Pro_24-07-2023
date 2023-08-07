document.write('<h3>Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]</h3><hr><br />');

let operatingArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

function compare(a,b) {
    return a -b;
};
const sortedArray = operatingArray.toSorted(compare);

let positiveNumbersSum = 0, positiveNumbersCount = 0, negativeElementsCount = 0, minNumber, minNumbersIndexes = [], maxNumber, maxNumbersIndexes = [];
let oddPositiveElementsCount = 0, evenPositiveElementsCount = 0, oddPositiveSum = 0, evenPositiveSum = 0, positiveNumbersMultip = 1;

for (let i = 0; i < operatingArray.length; i++) {
    if (operatingArray[i] > 0) {
        positiveNumbersSum += operatingArray[i];
        positiveNumbersCount ++;
        positiveNumbersMultip *= operatingArray[i];
        if (operatingArray[i] === sortedArray[sortedArray.length - 1]) {
            maxNumber = operatingArray[i];
            maxNumbersIndexes.push(i);
        };
        if (operatingArray[i] % 2 != 0) {
            oddPositiveElementsCount ++;
            oddPositiveSum += operatingArray[i];
        } else {
            evenPositiveElementsCount ++;
            evenPositiveSum += operatingArray[i];
        };
        
    } else if (operatingArray[i] < 0) {
        negativeElementsCount ++;
        if (operatingArray[i] === sortedArray[0]) {
            minNumber = operatingArray[i];
            minNumbersIndexes.push(i);
        };
    };
    if (operatingArray[i] != sortedArray[sortedArray.length - 1]) {
        operatingArray[i] = 0;
    };
};


document.write(`<h4>1.Знайти суму та кількість позитивних елементів:</h4>
    <p>Sum of positive elements in the array: ${positiveNumbersSum};</p>
    <p>Number of positive elements in the array: ${positiveNumbersCount}.</p><br />
<h4>2.Знайти мінімальний елемент масиву та його порядковий номер:</h4>
    <p>Minimum element(s) of the array: ${minNumber};</p>
    <p>Index(es) of the minimum element(s) of the array: ${minNumbersIndexes}.</p><br />
<h4>3.Знайти максимальний елемент масиву та його порядковий номер:</h4>
    <p>Maximum element(s) of the array: ${maxNumber};</p>
    <p>Index(es) of the maximal element(s) of the array: ${maxNumbersIndexes}.</p><br />
<h4>4.Визначити кількість негативних елементів:</h4>
    <p>Number of negative elements in the array: ${negativeElementsCount}.</p><br />
<h4>5.Знайти кількість непарних позитивних елементів:</h4>
    <p>Number of odd positive elements in the array: ${oddPositiveElementsCount}.</p><br />
<h4>6.Визначити кількість парних позитивних елементів:</h4>
    <p>Number of even positive elements in the array: ${evenPositiveElementsCount}.</p><br />
<h4>7.Знайти суму парних позитивних елементів:</h4>
    <p>Sum of even positive elements in the array: ${evenPositiveSum}.</p><br />
<h4>8.Знайти суму непарних позитивних елементів:</h4>
    <p>Sum of odd positive elements in the array: ${oddPositiveSum}.</p><br />
<h4>9.Знайти добуток позитивних елементів:</h4>
    <p>Multiplication of positive numbers in the array: ${positiveNumbersMultip}.</p><br /><br />
<h4>10.Знайти найбільший серед елементів масиву, решту занулити:</h4>
    <p>Zero array: ${operatingArray}.</p>`);