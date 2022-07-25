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
function updateDisplay(input){
    display.textContent = input;
}
function clearDisplay() {
    display.textContent = '0';
}
let storedValue;
function storeValue(value) {
    storedValue = value;
}
function clearValue() {
    storedValue = undefined;
}
let storedOperator;
function storeOperator(operator) {
 storedOperator = operator;
}
function clearOperator() {
    storedOperator = undefined;
}
function clearAll() {
    clearDisplay();
    clearOperator();
    clearValue();
}
let currentValue;
let startNew = true;
function processNumber(number) {
    if (currentValue == '0'|| startNew) {
        if (!isNaN(number)) {
            currentValue = number;
        }
        else {
            currentValue += '.';
        }
        startNew = false;
    }                
    else {
        if (!isNaN(number)) {
            currentValue += number;
        }
        else if (!currentValue.includes('.')) {
            currentValue += '.';
        }
    }
    updateDisplay(currentValue);
}
function calculate() {
    let result = operate(storedOperator, storedValue, currentValue);
    if (isFinite(result)) {
        return result;
    }
    else {
        clearAll();
        return "Can't do that.";
    }
}
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
            let buttonPressed = button.textContent;
            //when number is pressed
            if (button.classList.contains('number')) {
                processNumber(buttonPressed);
            }
            //when an operator is pressed
            else if (button.classList.contains('operator')) {
                if (storedValue != undefined) {
                    updateDisplay(calculate());
                }
                storeValue(display.textContent);
                storeOperator(buttonPressed);
                startNew = true;
            }
            //when = is pressed
            else if (buttonPressed == '=') {
                if (storedValue != undefined && storedOperator != undefined){
                    updateDisplay(calculate());
                    startNew = true;
                }
            }
            //when c button is pressed
            else if (buttonPressed == 'C') {
                clearAll();
            }
    });
});