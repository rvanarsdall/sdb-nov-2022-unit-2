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
