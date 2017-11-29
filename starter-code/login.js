console.log("login.js loaded");

var userLogin = {
	userName: "Jims", 
	userPassword: "abcd"
};

var loggedIn = false;

	for (var i = 0; i <3; i++) {
		var passwordInput = prompt("Enter password for user " + userLogin.userName + ".");
		if (passwordInput != userLogin.userPassword){
			console.log("Passwords do not match. Try Again!");
	} else {
		loggedIn = true;
		console.log("Passwords match!");
		break;
	}
}
