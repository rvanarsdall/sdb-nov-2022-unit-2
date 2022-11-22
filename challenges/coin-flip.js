/* 
Bronze:
- initialize a variable called coinFlip.
- coinFlip can either be a 0 or a 1
- create an if-else block  - if coinFlip is equal to zero - console log - "Heads" else console log "Tails"

*/
var coinFlip = 0;
if (coinFlip == 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}
/* 
Silver: 
- initialize a variable called headsOrTails and set it to null
- console.log headsOrTails outside and at the end of the if-else block
- if coinFlip is equal to zero - store the value of headsOrTails to "Heads" else it is "Tails"
*/
var coinFlip = 1;
var headsOrTails = null;
if (coinFlip == 0) {
  headsOrTails = "Heads";
} else {
  headsOrTails = "Tails";
}
console.log(headsOrTails);

/* 
Gold:
- instead of making coinFlip a hard-coded value of 0 or 1. Make it a random number using Math.floor and Math.random

*/

var coinFlip = Math.floor(Math.random() * 2);
var headsOrTails = null;
if (coinFlip == 0) {
  //   console.log("Heads");
  headsOrTails = "Heads";
} else {
  //   console.log("Tails");
  headsOrTails = "Tails";
}
console.log(headsOrTails);
