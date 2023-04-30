/** JavaScript Program To Print Hello World */

// 1. Using console.log()
console.log("Hello World");

// 2. Using alert()
alert("Hello, World!");

// 3. Using document.write()
document.write("Hello, World!");

/** JavaScript Program to Add Two Numbers */

// store input numbers
const num1 = parseInt(prompt("Enter the first number "));
const num2 = parseInt(prompt("Enter the second number "));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

/** JavaScript Program to Find the Square Root */
const number1 = 2.25;
const number2 = -4;
const number3 = "hello";

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

/** JavaScript Program to Calculate the Area of a Triangle */

//Area When Base and Height is Known
const baseValue = prompt("Enter the base of a triangle: ");
const heightValue = prompt("Enter the height of a triangle: ");

const areaValue1 = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue1}`);

//Area When All Sides are Known
const side1 = parseInt(prompt("Enter side1: "));
const side2 = parseInt(prompt("Enter side2: "));
const side3 = parseInt(prompt("Enter side3: "));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue2 = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(`The area of the triangle is ${areaValue2}`);

/** JavaScript Program to Swap Two Variables */

//Using a Temporary Variable
let a = prompt("Enter the first variable: ");
let b = prompt("Enter the second variable: ");

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//Using Arithmetic Operators
let c = parseInt(prompt("Enter the first variable: "));
let d = parseInt(prompt("Enter the second variable: "));

// addition and subtraction operator
c = c + d;
d = c - d;
c = c - d;

console.log(`The value of a after swapping: ${c}`);
console.log(`The value of b after swapping: ${d}`);

/** JavaScript Program to Convert Kilometers to Miles */

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ");

// conversion factor
const factor = 0.621371;

// calculate miles
const miles = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

/** Javascript Program to Convert Celsius to Fahrenheit */

// ask the celsius value to the user
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = celsius * 1.8 + 32;

// display the result
console.log(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
);

/** Javascript Program to Convert Fahrenheit to Celsius */

// ask the celsius value to the user
const fahrenheit2 = prompt("Enter a fahrenheit value: ");

// calculate fahrenheit
const celsius2 = ((fahrenheit2 - 32) * 5) / 9;

// display the result
console.log(
  `${fahrenheit2} degree fahrenheit is equal to ${celsius2} degree celsius.`
);

/** JavaScript Program To Work With Constants */

const n = 5;
console.log(n);

// constants are block-scoped
{
  const n = 50;
  console.log(n);
}
console.log(n);

const arr = ["work", "exercise", "eat"];
console.log(arr);

// add elements to arr array
arr[3] = "hello";
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// n = 8;

// throws an error
// const x;

/** JavaScript Program to Write to Console */

// passing number
console.log(8);

// passing string
console.log("hello");

// passing variable
const x = "hello";
console.log(x);

// passing function
function sayName() {
  return "Hello John";
}
console.log(sayName());

// passing string and a variable
const name = "John";
console.log("Hello " + name);

// passing object
let obj = {
  name: "John",
  age: 28,
};
console.log(obj);
