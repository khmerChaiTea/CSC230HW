/* What is JavaScript? it's a programming language
    On browser uses JavaScrip Engine; On C++ uses Node */

// This is my first JavaScript code! JS use to implement behavior
console.log("Hello World"); /* log a message */

let name = "Prem";
console.log(name);

/**
 * Rule#1: cannot be a reserve keyword
 * Rule#2: should be meaningful and descriptive name
 * Rule#3: cannot start with a number (1name)
 * Rule#4: cannot contain a space or hyphen (-)
 * They are case-sensitive
 * const is the default choice can't change variable
 */
let firstName = "Prem";
let lastName = "Chhay";
console.log(firstName);
console.log(lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Run this code separately from the above
/**
 * The code below show error
 * const is the default choice can't change variable
 */
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Run this code separately from the above
// String Literal
let name = "Mosh";
// Number Literal
let age = 30;
// Boolean Literal
let isApproved = false;
// undefined is a type and also a value
let firstName = undefined;
let selectedColor = null;
console.log(typeof name);
console.log(typeof age);
console.log((name = 1));
// dynamic language
console.log(typeof name);
console.log(typeof age);
console.log((age = 30.1));
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);

// Run this code separately from the above
// Reference the person object
let person = {
  name: "Mosh",
  age: 30,
};
console.log(person);

// dot Notation - use this one it is cleaner and easier
person.name = "John";
console.log(person.name);

// Bracket Notation
person["name"] = "Mary";
console.log(person.name);

let selection = "name";
person[selection] = "Mary";
console.log(person.name);

// Run this code separately from the above
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors[0]);
console.log(selectedColors);

// Run this code separately from the above
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(typeof selectedColors);
console.log(selectedColors.length);

// Run this code separately from the above
// Defined a function
function greet() {
  console.log("Hello World");
}
// Call the function
greet();

// Run this code separately from the above
// Name is a parameter of the function
function greet(name) {
  console.log("Hello " + name);
}
// Add an argument 'John'
greet("John");
greet("Mary");

// Run this code separately from the above
// Name is a parameter of the function
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
// Add an argument 'John'
greet("John", "Smith");

// Run this code separately from the above
// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
// Calculating a value
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);

// Run this code separately from the above
// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));
