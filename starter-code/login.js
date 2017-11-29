console.log("login.js loaded");

var userLogin = {userName: "admin", password: "abcd1234"};

for (i = 0; i < 3; i++) {
  var userPassword = prompt("Enter password for " + userLogin.userName);
  if (userPassword == userLogin.password) {
    alert("It's a match!");
    break;
  } else {
    alert("Try again!");
  };
};
