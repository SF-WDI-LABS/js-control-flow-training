console.log("security_questions.js loaded");

let securityQuestions = [
  {question1: "What is fun?" , expectedAnswer1: "Fun is fun."},
  {question2: "Who are you?" , expectedAnswer2: "I am Superuser."},
  {question3:  "What is the password?", expectedAnswer3: "Coconuts."},
];

var q1 = prompt(securityQuestions[0].question1);

if (q1 === securityQuestions[0].expectedAnswer1) {
  var q2 = prompt(securityQuestions[1].question2);
}
  if (q2 === securityQuestions[1].expectedAnswer2) {
    var q3 = prompt(securityQuestions[2].question3);
}
    if (q3 === securityQuestions[2].expectedAnswer3) {
}
      else (alert("You are a fake!"));;
