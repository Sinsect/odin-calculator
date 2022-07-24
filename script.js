function add(num1, num2) {
    return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return subtract(num1, num2);
    }
    else if (operator == '*') {
        return multiply(num1, num2);
    }
    else if (operator == '/') {
        return divide(num1, num2);
    }
}
let display = document.querySelector('#display');
//updates display with numerical input or .
let startNew = true;
function updateDisplay(input) {
    let displayValue = display.textContent;
    if (displayValue == '0'|| startNew) {
        if (!isNaN(input)) {
            displayValue = input;
        }
        else {
            displayValue += '.';
        }
        startNew = false;
    }                
    else {
        if (!isNaN(input)) {
            displayValue += input;
        }
        else if (!displayValue.includes('.')) {
            displayValue += '.';
        }
    }
    display.textContent = displayValue;
}
let storedValue;
function storeValue() {
    storedValue = display.textContent;
}
let storedOperator;
function storeOperator(operator) {
 storedOperator = operator;
}
function clearDisplay() {
    display.textContent = '0';
}
function calculate() {
    let currentDisplay = display.textContent;
    console.log({storedOperator});
    console.log({storedValue})
    console.log({currentDisplay});
    display.textContent = operate(storedOperator, storedValue, currentDisplay);
}
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
            let buttonPressed = button.textContent;
            //when number is pressed
            if (button.classList.contains('number')) {
                updateDisplay(buttonPressed);
            }
            //when an operator is pressed
            else if (button.classList.contains('operator')) {
                storeValue();
                storeOperator(buttonPressed);
                startNew = true;
            }
            //when = is pressed
            else if (buttonPressed == '=') {
                calculate();
                startNew = true;
            }
            //when c button is pressed
            else if (buttonPressed == 'C') {
                clearDisplay();
            }
    });
});