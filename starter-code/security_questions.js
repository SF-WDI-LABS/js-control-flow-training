console.log("security_questions.js loaded");
security_questions = [
  {
    question: "What town were you born in?",
    expectedAnswer: "San Francisco"
  },
  {
    question: "What is your pet's name?",
    expectedAnswer: "Milo"
  },
  {
    question: "What year were you born?",
    expectedAnswer: 1985
  }
]


var answer = ""


for (var i = 0; i < security_questions.length; i++) {
  answer = prompt(security_questions[i].question);
  if (answer == security_questions[i].expectedAnswer) {
    alert("It's a match!");
    break;
  } else {
    alert("Try again!");
  };
};
