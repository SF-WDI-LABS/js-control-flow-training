console.log("security_questions.js loaded");
var securityQuestions = [
	{
		question: "What was your first pet's name?",expectedAnswer: "miki"
	},
	{
		question: "what is your mother name?",expectedAnswer: "Alice"
	},
	{
		question: "What is your first job?",expectedAnswer: "Architecture"
	}
]

var userAnswer = "";


for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect security question!");
    
		break;
	}
}