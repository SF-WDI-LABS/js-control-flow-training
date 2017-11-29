console.log("sing.js loaded");

var userBottle = prompt("How many bottles of beer on the wall?");

var wallBottles = "bottles";
while (numBottle > 0){
console.log(userBottle + “ “ + wallBottles + “ of beer on the wall,”);
console.log(userBottle + “ “ + wallBottles + “ of beer!”);
console.log(“Take one down and pass it around, + userBottle + “ bottles of beer on the wall!”);

userBottles = userBottles - 1;
if (userBottles === 1){
bottles = “bottle”
}
if (userBottles === 0){
console.log(“No more bottles of beer on the wall.”)
}
}




