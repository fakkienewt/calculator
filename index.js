const ac = document.querySelector('.ac');
const allNumbers = document.querySelectorAll('.btns');
const firstNumber = document.querySelector('#first-number');
const equal = document.querySelector('.equal');
const allOperators = document.querySelectorAll('.operator');
const plusMinus = document.querySelector('.plus-minus');
const minus = document.querySelector('.minus');
const erase = document.querySelector('.erase');

const action = ['+', '-', '*', '/', '.', '%', '=']; //'+/-',

allNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        const numberValue = number.textContent;
        if (firstNumber.textContent === '0') {
            firstNumber.textContent = numberValue;
        } else {
            firstNumber.textContent += numberValue;
        }
    });
});

minus.addEventListener('click', () => {
    if (firstNumber.textContent === '0') {
        firstNumber.textContent = '-';
    }
});

allOperators.forEach((operator) => {
    operator.addEventListener('click', () => {
        const operatorValue = operator.textContent;
        if (firstNumber.textContent !== '0' && !action.includes(firstNumber.textContent[firstNumber.textContent.length - 1])) {
            firstNumber.textContent += operatorValue;
        } else {
            return;
        }
    });
});

ac.addEventListener('click', () => {
    firstNumber.textContent = '0';
});

equal.addEventListener('click', () => {
    if (firstNumber.textContent === '0') {
        return;
    } else {
        let result = eval(firstNumber.textContent);
        firstNumber.textContent = result;
    }
});

erase.addEventListener('click', () => {
    let currentValue = firstNumber.textContent;
    if (currentValue === '0') return;
    if (currentValue.length === 1) {
        firstNumber.textContent = '0';
    } else {
        firstNumber.textContent = currentValue.slice(0, -1);
    }
});

plusMinus.addEventListener('click', () => {
    const currentValue = firstNumber.textContent;
    if (currentValue === '0') return;
    if (firstNumber.textContent !== '0') {
        const res = +currentValue * -1;
        firstNumber.textContent = `(${res})`;
    }
});

// plusMinus.addEventListener('click', () => {
//     const currentValue = firstNumber.textContent;
//     if (currentValue === '0') return;
//     if (firstNumber.textContent !== '0' && !firstNumber.textContent.includes(action)) {
//         const res = +currentValue * -1;
//         firstNumber.textContent = `(${res})`;
//     }
// });
