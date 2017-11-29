console.log("security_questions.js loaded");

let securityQuestions = [
{question: "What's your favorite color?",
expectedAnswer:"Teal" 
},

{question: "Where were you born?",
expectedAnswer: "Cuttack"
},

{question: "Who was your first roommate?",
expectedAnswer: "Natasha"
}];

for ( i = 0; i < securityQuestions.length; i++){
	var input = prompt(securityQuestions[i].question);
	if (input !== securityQuestions[i].expectedAnswer){
		alert("That's not correct.");
		break;
	};
};

// numIterations ensures this while loop doesn't go on forever
var numIterations = 0;
while (true && numIterations < 100){
  console.log("still going!");
  numIterations++;
}
