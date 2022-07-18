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
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
            let buttonPressed = button.id;
            let displayValue = display.textContent;
            console.log((buttonPressed));
            //when number is pressed
            if (!isNaN(buttonPressed) || buttonPressed == 'dot') {
                //if display is empty
                if (displayValue == '0') {
                    if (!isNaN(buttonPressed)) {
                        displayValue = buttonPressed;
                    }
                    else {
                        displayValue += '.';
                    }
                }
                else {
                    if (!isNaN(buttonPressed)) {
                        displayValue += button.id;
                    }
                    else if (!displayValue.includes('.')) {
                        displayValue += '.';
                    }
                }
            }
            else if (buttonPressed == 'c') {
                displayValue = '0';
            }
            display.textContent = displayValue;
    });
});