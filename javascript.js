const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const display = document.querySelector('.display');

numbers.forEach((button) =>
  button.addEventListener('click', () => display.textContent += button.textContent)
);

function add(a, b) {
    console.log(a + b);
};

function subtract(a, b) {
    console.log(a - b);
};

function multiply(a, b) {
    console.log(a * b);
};

function divide(a, b) {
    console.log(a / b);
};

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        default:
            alert("Error.");
    };
};

operate(3, 7, "-");
operate(3, 7, "+");
operate(3, 7, "*");
operate(3, 7, "/");


