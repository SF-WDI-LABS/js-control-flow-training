console.log("security_questions.js loaded");

var securityQuestions = [
{ question: "Where was your last vacation at?", expectedAnswer: "Osaka" },
{ question: "What is was your favorite ice cream?", expectedAnswer: "Rocky Road" },
{ question: "What street do you live on?", expectedAnswer: "11th Avenue" }
];

var answer = "";
var wrongPerson = false;

// window.prompt(securityQuestions[0].question);
for (let i = 0 ; i < securityQuestions.length; i=i+1){
	let answer = window.prompt(securityQuestions[i].question);
	console.log(answer);
 if (answer !== securityQuestions[i].expectedAnswer){
	alert("Incorrect!");
    wrongPerson = true;
		break;
	}
}
if (wrongPerson){
  console.log("Stop!");
}

