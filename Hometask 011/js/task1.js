document.write(`<h3>Написать функцию, которая принимает 1 параметр. При первом вызове, 
она ero запоминает, при втором — суммирует переданный параметр c тем, 
что передали первый раз и тд. Всё это c замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28</h3>`);

function appendix () {
    let result = 0;
    return function (num) {
        console.log(`${result} + ${num} = ${result + num}`);
        return result += num;
    }
}

function main (){
    let counter = 0;
    do {
        let inputNumber = prompt('Enter any number. If you want to stop the summation, enter "stop".');
        if (inputNumber === null) {
            alert(`"You have stopped the summation.`);
            break;
        } else if (isNaN(inputNumber) || !(inputNumber)) {
            alert('Numbers only!');
        } else {
            appendixSum(parseInt(inputNumber));
            counter ++;
        };
    } while(counter < 10);
}

const appendixSum = appendix();
main();
