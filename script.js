function add(num1, num2) {
    return num1 + num2;
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
//checks if input is one of the 4 usable operators
function isOperator(input) {
    return input == '+' || input == '-' || input == '*' || input == '/';
}
let display = document.querySelector('#display');
//updates display with numerical input or .
function updateDisplay(input) {
    let displayValue = display.textContent;
    if (displayValue == '0') {
        if (!isNaN(input)) {
            displayValue = input;
        }
        else {
            displayValue += '.';
        }
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
function clearDisplay() {
    display.textContent = '0';
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
                
            }
            //when = is pressed
            else if (buttonPressed == '=') {
                
            }
            //when c button is pressed
            else if (buttonPressed == 'c') {
                clearDisplay();
            }
    });
});