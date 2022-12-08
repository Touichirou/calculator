const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const display = document.querySelector('.display');

display.textContent = "";
let storedValue = "";
let operator = "";
let displayValue = "";
let result = "";

clear.addEventListener('click', function() {
    display.textContent = "";
    storedValue = "";
    displayValue = "";
});

numbers.forEach((button) =>
  button.addEventListener('click', function() {
    if (display.textContent.length < 22) {
    displayValue += button.textContent;
    display.textContent = displayValue;
  }}))

operators.forEach((button) =>
    button.addEventListener('click', function() {
        if (storedValue && displayValue) {
            displayResult()
            operator = button.textContent;
        } else if (storedValue && !displayValue) {
            operator = button.textContent;
        }
          else {storedValue = displayValue;
            operator = button.textContent;
            displayValue = "";  
        }
    display.textContent = "";
    })
);

equals.addEventListener('click', function() {
    if (storedValue && displayValue) {
        displayResult()
    }
  });

del.addEventListener('click', function() {
    if (displayValue !== "") {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
}
});

decimal.addEventListener('click', function() {
    if (!displayValue.includes('.') && displayValue != "") {   
    displayValue += this.textContent;
    display.textContent = displayValue;
    }
});

function displayResult() {
    result = (operate(parseFloat(storedValue), parseFloat(displayValue), operator)).toFixed(5) / 1;
    display.textContent += result;
    storedValue = result;
    displayValue = "";
}

function add(a, b) {
    display.textContent = "";
    return a + b;
};

function subtract(a, b) {
    display.textContent = "";
    return a - b;
};

function multiply(a, b) {
    display.textContent = "";
    return a * b;
};

function divide(a, b) {
    display.textContent = "";
    return a / b;
    };

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            alert("Error.");
    };
};


