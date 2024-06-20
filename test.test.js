// Import the module or class that contains the divide function
const MyClass = require('./myClass');

// Test case 1: Division by a non-zero number
let myObj = new MyClass();
myObj.result = 10;
myObj.divide(2);
console.log(myObj.result); // Expected output: 5

// Test case 2: Division by zero
myObj.result = 10;
myObj.divide(0);
console.log(myObj.result); // Expected output: 10 (unchanged)

// Test case 3: Division by a negative number
myObj.result = 10;
myObj.divide(-5);
console.log(myObj.result); // Expected output: -2

// Test case 4: Division by a decimal number
myObj.result = 10;
myObj.divide(3.5);
console.log(myObj.result); // Expected output: 2.857142857142857// Import the module or class that contains the Calculator class
const Calculator = require('./test');

// Test case 1: Addition
let calculator = new Calculator();
calculator.result = 10;
calculator.add(5);
console.log(calculator.result); // Expected output: 15

// Test case 2: Subtraction
calculator.result = 10;
calculator.subtract(3);
console.log(calculator.result); // Expected output: 7

// Test case 3: Multiplication
calculator.result = 10;
calculator.multiply(2);
console.log(calculator.result); // Expected output: 20

// Test case 4: Division by a non-zero number
calculator.result = 10;
calculator.divide(2);
console.log(calculator.result); // Expected output: 5

// Test case 5: Division by zero
calculator.result = 10;
calculator.divide(0);
console.log(calculator.result); // Expected output: 10 (unchanged)

// Test case 6: Division by a negative number
calculator.result = 10;
calculator.divide(-5);
console.log(calculator.result); // Expected output: -2

// Test case 7: Division by a decimal number
calculator.result = 10;
calculator.divide(3.5);
console.log(calculator.result); // Expected output: 2.857142857142857