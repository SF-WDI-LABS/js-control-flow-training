console.log("login.js loaded");
var userLogin = {userName: "Ryantran", Password: "Tranvannhan1"}

var passwordInput;
var loggedIn = false;
while (!loggedIn){
	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.Password){
		console.log ("correct!!!");
	loggedIn = true
	}else {
		console.log("Try again");
	}
}