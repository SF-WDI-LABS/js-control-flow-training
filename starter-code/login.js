console.log("login.js loaded");

let userLogin = {userName: "tinaparija", userPW: "password"};

var input = prompt("Enter password for " + userLogin.userName);

if (input == userLogin.userPW) {
	alert ("login successful");  
} 
else {
	alert ("incorrect password!");
	location.reload();
};

