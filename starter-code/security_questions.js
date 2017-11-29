console.log("security_questions.js loaded");

var securityQuestions = [
      {
     	question: "What was your first pet's name?", 
        expectedAnswer: "dog" 
      },
      {
        question: "What is your mother's first name?",
        expectedAnswer: "Susan"
      },
      { question: "What is your dad's first name?",
        expectedAnswer: "Sam"

      }
      ]

var anserInput = "";

    for (var i = 0; i < securityQuestions.length; i++) {
    	anserInput = prompt(securityQuestions[i].question);
    	if (anserInput !== securityQuestions[i].expectedAnswer) {
           alert("It is a incorrect answer!");
           break; 
          
       };
   };


    	
    
  



