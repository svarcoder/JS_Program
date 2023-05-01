/** Javascript Program to Solve Quadratic Equation */

let root1, root2;

let fNum = prompt("Enter the first number: ");
let sNum = prompt("Enter the second number: ");
let tNum = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = sNum * sNum - 4 * fNum * tNum;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-sNum + Math.sqrt(discriminant)) / (2 * fNum);
  root2 = (-sNum - Math.sqrt(discriminant)) / (2 * fNum);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
  root1 = root2 = -sNum / (2 * fNum);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
  let realPart = (-sNum / (2 * fNum)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * fNum)).toFixed(2);

  // result
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

/** Javascript Program to Check if a number is Positive, Negative, or Zero */

const inputNumber = prompt("Enter a number: ");

if (inputNumber >= 0) {
  if (inputNumber == 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is positive");
  }
} else {
  console.log("The number is negative");
}

/** Javascript Program to Check if a Number is Odd or Even */

const inputNumber2 = prompt("Enter a number: ");

//check if the number is even
if (inputNumber2 % 2 == 0) {
  console.log("The number is even.");
}

// if the number is odd
else {
  console.log("The number is odd.");
}

/** JavaScript Program to Find the Largest Among Three Numbers */

//Largest Number Among Three Numbers
const input1 = parseFloat(prompt("Enter first number: "));
const input2 = parseFloat(prompt("Enter second number: "));
const input3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if (input1 >= input2 && input1 >= input3) {
  largest = input1;
} else if (input2 >= input1 && input2 >= input3) {
  largest = input2;
} else {
  largest = input3;
}

// display the result
console.log("The largest number is " + largest);

//Using Math.max()
const input4 = parseFloat(prompt("Enter first number: "));
const input5 = parseFloat(prompt("Enter second number: "));
const input6 = parseFloat(prompt("Enter third number: "));

const largest2 = Math.max(input4, input5, input6);

// display the result
console.log("The largest number is " + largest2);

/** JavaScript Program to Check Prime Number */

const inputNumberP = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (inputNumberP === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (inputNumberP > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < inputNumberP; i++) {
    if (inputNumberP % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${inputNumberP} is a prime number`);
  } else {
    console.log(`${inputNumberP} is a not prime number`);
  }
}
// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

/** JavaScript Program to Print All Prime Numbers in an Interval */

const lowerNumber = parseInt(prompt("Enter lower number: "));
const higherNumber = parseInt(prompt("Enter higher number: "));

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

/** JavaScript Program to Find the Factorial of a Number */

const inputNumberF = parseInt(prompt("Enter a positive integer: "));

// checking if number is negative
if (inputNumberF < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (inputNumberF === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  for (i = 1; i <= inputNumberF; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${inputNumberF} is ${fact}.`);
}

/** JavaScript Program to Display the Multiplication Table */

const inputNumberMT = parseInt(prompt("Enter an integer: "));

//creating a multiplication table
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * inputNumberMT;

  // display the result
  console.log(`${inputNumberMT} * ${i} = ${result}`);
}

/** JavaScript Program to Print the Fibonacci Sequence */

const inputNumberFS = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

for (let i = 1; i <= inputNumberFS; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

/** JavaScript Program to Check Armstrong Number */

const inputNumberA = prompt("Enter a positive integer");
const numberOfDigits = inputNumberA.length;
let sumA = 0;

// create a temporary variable
let temp = inputNumberA;

while (temp > 0) {
  let remainder = temp % 10;

  sumA += remainder ** numberOfDigits;

  // removing last digit from the number
  temp = parseInt(temp / 10); // convert float into integer
}

if (sumA == inputNumberA) {
  console.log(`${inputNumberA} is an Armstrong number`);
} else {
  console.log(`${inputNumberA} is not an Armstrong number.`);
}

/** JavaScript Program to Find Armstrong Number in an Interval */

const lowNumber = parseInt(prompt("Enter a positive low integer value: "));
const highNumber = parseInt(prompt("Enter a positive high integer value: "));

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {
  // converting number to string
  let numberOfDigits = i.toString().length;

  let sum = 0;

  // create a temporary variable
  let temp = i;

  /* loop through a number to find if 
    a number is an Armstrong number */
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  if (sum == i) {
    console.log(i);
  }
}

/** JavaScript Program to Make a Simple Calculator */

const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const inputNumberC1 = parseFloat(prompt("Enter first number: "));
const inputNumberC2 = parseFloat(prompt("Enter second number: "));

let result;

// using if...else if... else
if (operator == "+") {
  result = inputNumberC1 + inputNumberC2;
} else if (operator == "-") {
  result = inputNumberC1 - inputNumberC2;
} else if (operator == "*") {
  result = inputNumberC1 * inputNumberC2;
} else {
  result = inputNumberC1 / inputNumberC2;
}

// display the result
console.log(`${inputNumberC1} ${operator} ${inputNumberC2} = ${result}`);

/** JavaScript Program to Find the Sum of Natural Numbers */

const number = parseInt(prompt("Enter a positive integer: "));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
  sum += i;
}

console.log("The sum of natural numbers:", sum);

/** JavaScript Program to Check if the Numbers Have Same Last Digit */

const a = prompt("Enter a first integer: ");
const b = prompt("Enter a second integer: ");
const c = prompt("Enter a third integer: ");

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if (result1 == result2 && result1 == result3) {
  console.log(`${a}, ${b} and ${c} have the same last digit.`);
} else {
  console.log(`${a}, ${b} and ${c} have different last digit.`);
}

/** JavaScript Program to Find HCF or GCD */

let hcf;

const number1 = prompt("Enter a first positive integer: ");
const number2 = prompt("Enter a second positive integer: ");

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {
  // check if is factor of both integers
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

/** JavaScript Program to Find LCM */

const num1 = prompt("Enter a first positive integer: ");
const num2 = prompt("Enter a second positive integer: ");

// higher number among number1 and number2 is stored in max
let max = num1 > num2 ? num1 : num2;

// while loop
while (true) {
  if (max % num1 == 0 && max % num2 == 0) {
    console.log(`The LCM of ${num1} and ${num2} is ${max}`);
    break;
  }
  max++;
}

/** JavaScript Program to Find the Factors of a Number */

const num = prompt("Enter a positive number: ");

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for (let i = 1; i <= num; i++) {
  // check if number is a factor
  if (num % i == 0) {
    console.log(i);
  }
}

/** JavaScript Program to Display Fibonacci Sequence Using Recursion */

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
