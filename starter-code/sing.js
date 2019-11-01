console.log("sing.js loaded");
var numBottles = prompt("how many bottles in the wall?")
var bottles = 'bottles';
while (numBottles > 0) {
	console.log(numBottles + 'bottles' + 'of beer on the wall');
	console.log(numBottles + 'bottles' + 'of beer');
	console.log("Take one down and pass it around,");
	console.log(numBottles - 1);
}