class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
    }
}

// Create a new calculator object
const calculator = new Calculator();

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Select the operation (+, -, *, /):");

switch (operation) {
    case "+":
        calculator.add(num1);
        calculator.add(num2);
        break;
    case "-":
        calculator.subtract(num1);
        calculator.subtract(num2);
        break;
    case "*":
        calculator.multiply(num1);
        calculator.multiply(num2);
        break;
    case "/":
        calculator.divide(num1);
        calculator.divide(num2);
        break;
    default:
        console.log("Invalid operation selected.");
}

// Print the result
console.log("Result:", calculator.result);

// Addition method
Calculator.prototype.add = function(num) {
    this.result += num;
};

// Subtraction method
Calculator.prototype.subtract = function(num) {
    this.result -= num;
};

// Multiplication method
Calculator.prototype.multiply = function(num) {
    this.result *= num;
};

// Division method
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
};

// Create a new calculator object
calculator = new Calculator();

// Perform calculations
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);

// Print the result
console.log("Result:", calculator.result);