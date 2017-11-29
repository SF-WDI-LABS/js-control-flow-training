console.log("security_questions.js loaded");

// numIterations ensures this while loop doesn't go on forever
var numIterations = 0;
while (true && numIterations < 100){
  console.log("still going!");
  numIterations++;
}

secrityQuestions = [
  {
    question: "What was your the color of your first car?",
    expectedAnswer: "red"
  },
  {
    question: "In what city were you born?",
    expectedAnswer: "Fort Wayne"
  },
  {
    question: "What is your favorite winter sport?",
    expectedAnswer: "skiing"
  }
];

  for (var i = 0; i < secrityQuestions.length; i++) {
    let answer = prompt(secrityQuestions[i].question);
    if (answer !== secrityQuestions[i].expectedAnswer) {
      alert("Wrong answer!");
      break; 
      }
    }








