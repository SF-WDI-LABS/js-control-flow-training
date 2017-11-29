console.log("login.js loaded");

var userLogin = {
  username: "kjkeaston",
  password: "Passw0rd"
}


/* var credentials = function(msg) {
  let login = prompt("enter passwword");
  if (login !== userLogin.password) {
    callPrompt("re-enter password");
  }
  return login;
} */

/*let login = prompt("Enter password for user 'kjkeaston'.");
while (login !== userLogin.password) {
  alert("Incorrect password. Please try again.");
  let retry = prompt("Try password again");
  if (retry !== userLogin.password) {
    alert("PW still wrong!");
    retry;
  }
} */

let login = prompt("Enter password for user 'kjkeaston'.");
if (login !== userLogin.password) {
  alert("Wrong password");
  let retry = prompt("Try you password again");
  if (retry !== userLogin.password) {
    alert("Still wrong...");
    let retryTwo = promopt("Please try it again...");
  }
}




 









 
