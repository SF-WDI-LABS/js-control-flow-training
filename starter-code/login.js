console.log("login.js loaded");

let userLogin = {
  userName: "Robot",
  userPassword: "123"
};

var login = prompt("Enter password for user Robot.");

if (login === userLogin.userPassword) {
  alert('Welcome Mr. Roboto');
} else (alert('You are not Mr. Robot!'));
