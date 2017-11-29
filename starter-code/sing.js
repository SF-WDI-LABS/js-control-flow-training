console.log("sing.js loaded");

let question = prompt("How many verses do you want to hear?", "Enter a number less than 100");


for (var i = question; i >= 0; i -=1) {
  if (i > 2) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");
} else if (i ===2) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottle of beer on the wall!");
} else if (i === 1) {
  console.log(i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down, pass it around, no more bottles of beer on the wall!");
} else if (i === 0) {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! None to take down, none to pass it around, no more bottles of beer on the wall!");
}
}