console.log("login.js loaded");


var userObject = {userName: "Batman", password: "Gotham"}

var enterPassword;

var loggedIn = false;

while (!loggedIn){
	enterPassword = prompt("Enter password for user " + userObject.userName + ".");
	if (enterPassword === userObject.password){
	console.log("Welcome Back");
	loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}





