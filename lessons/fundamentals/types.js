/* 
Types - Data Types

- Strings
- Boolean (truthy and falsey)
- Numbers
*/

/* 
Strings
- are datatypes used to represent text and are wrapped in single quotes, double quotes, or backticks
-
*/
var stringOne = "double quotes";
// prettier-ignore
var stringTwo = 'single quotes'

var stringThree = `back ticks`;

// use a comma to seperate two variables for printing to the console
console.log(stringOne, stringTwo);
// ! Adding strings together
// Example of putting together two strings
// !Problem is they are smashed together
console.log(stringOne + stringTwo); // output: double quotessingle quotes
// ! The Fix
console.log(stringOne + " " + stringTwo);
// Using Backticks
console.log(`${stringOne} ${stringTwo}`); //output: double quotes single quotes

// ! CHALLENGE STRING
// ? Declare and Initialize a variable called greeting set it equal to "Good Afternoon"
// ? Declare and Initialize a variable called  firstName set it equal to your name
// ? using backticks console log the following "Good Afternoon Rob" with proper spacing
var greeting = "Good Afternoon";
var firstName = "Rob";

console.log(`${greeting} ${firstName}`);

// ! If you want to find out what type the variable is you can use typeof

console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log(moneyOne + moneyTwo);
//  Combining two or more strings is called concatenation.

/* 
Numbers

*/

let currentTemp = 23;
console.log("currentTemp:", currentTemp);

let calculatedTip = 50 * 0.25;
console.log("calculatedTip", calculatedTip.toFixed(2));

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log("numbersAreHard", numbersAreHard);

// ! Convert Strings to Numbers
// Way Number 1
// Number()

console.log(
  "Converting String to Number:",
  Number(moneyOne) + Number(moneyTwo)
);
// Way Number 2
//  add a plus to the start of the variable
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);

/* 
Booleans:
- Only has two possible values
 true or false
*/

var isOver21 = true;
console.log("isOver21", isOver21);
var isTeenager = false;
console.log("isTeenager", isTeenager);
console.log("typeof", typeof isOver21);

/* 
Null
- Null is an empty value.
- Think of it as we have an empty container - nothing is in it but it exists as space to fill later on.
*/

var isLoggedIn = null;

/* 
Undefined
- No value is assigned and does not act as an empty container

*/

var myName;
//  because we did not assign a value the default is undefinded

var myLastName = undefined;
var myAddress = "";
console.log("typeof myAddress", typeof myAddress);
var notNumber = "name" / "15";
// Using Boolean we can check to see if a variable contains data
// undefined, null, 0, NaN, empty string quotes will all produce a false

console.log("myLastName", Boolean(myLastName));
console.log(Boolean(isLoggedIn));
console.log(Boolean(myAddress));
console.log(Boolean(notNumber));
console.log(Boolean(0));
