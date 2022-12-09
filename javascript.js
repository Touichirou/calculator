const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const display = document.querySelector('.display');
const keys = document.querySelectorAll('[data-key]');

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

document.addEventListener('keydown', function(e) {
    let keyPressed = e.key;
    if (keyPressed === 'Backspace') {
        if (displayValue !== "") {
                displayValue = displayValue.slice(0, -1);
                display.textContent = displayValue;
            }
    } else if (keyPressed === 'Delete') {
        display.textContent = "";
        storedValue = "";
        displayValue = "";
    }   
      else if (display.textContent.length < 22) {
    switch(keyPressed) {
        case '0':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '1':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '2':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '3':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '4':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '5':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '6':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '7':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '8':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '9':
        displayValue += keyPressed;    
        display.textContent = displayValue;
        break;
        case '+':
        display.textContent = "";    
            if (storedValue && displayValue) {
                displayResult()
                operator = keyPressed;
            } else if (storedValue && !displayValue) {
                operator = keyPressed;
            }
              else {storedValue = displayValue;
                operator = keyPressed;
                displayValue = "";  
            }
        break;
        case '-':
        display.textContent = "";    
            if (storedValue && displayValue) {
                displayResult()
                operator = keyPressed;
            } else if (storedValue && !displayValue) {
                operator = keyPressed;
            }
              else {storedValue = displayValue;
                operator = keyPressed;
                displayValue = "";  
            }
        break;
        case '/':
        display.textContent = "";    
            if (storedValue && displayValue) {
                displayResult()
                operator = keyPressed;
            } else if (storedValue && !displayValue) {
                operator = keyPressed;
            }
              else {storedValue = displayValue;
                operator = keyPressed;
                displayValue = "";  
            }
        break;
        case '*':
        display.textContent = "";    
            if (storedValue && displayValue) {
                displayResult()
                operator = keyPressed;
            } else if (storedValue && !displayValue) {
                operator = keyPressed;
            }
              else {storedValue = displayValue;
                operator = keyPressed;
                displayValue = "";  
            }
        break;
        case '=':
            if (storedValue && displayValue) {
                displayResult()
            }
        break;
        case '.':
            if (!displayValue.includes('.') && displayValue != "") {   
                displayValue += keyPressed;
                display.textContent = displayValue;
                }
        break;
    }
    
}});

numbers.forEach((button) =>
  button.addEventListener('click', function() {
    if (display.textContent.length < 22) {
    displayValue += button.textContent;
    display.textContent = displayValue;
  }}))

operators.forEach((button) =>
    button.addEventListener('click', function() {
    display.textContent = "";    
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
    display.textContent = result;
    storedValue = result;
    displayValue = "";
}

function add(a, b) {
    
    return a + b;
};

function subtract(a, b) {
    
    return a - b;
};

function multiply(a, b) {
    
    return a * b;
};

function divide(a, b) {
    
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


