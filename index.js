var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Ashish",
    score: 5,
  },

  {
    name: "Dhruv",
    score: 3,
  },
]

// array of objects
var questions = [{

  question: " Which vitamin can body create from direct sunlight? ",
  answer: "D",
}, {
  question: " Which letter is used by Samsung to name their high-end      flagship models in the Galaxy range of devices? ",
  answer: "S"
},
{

  question: "Which letter represents the chemical element potassium in the periodic table? ",
  answer: "K",
}, {
  question: "In James Bond movies, what is the name of the head of research and development division(R&D) of the British Secret Service.?",
  answer: "Q",

}, {

  question: "Which letter refers to the demographic population who was born between 1997 and 2012? ",
  answer: "Z"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to 'One Letter Quiz' As the name suggest all the following questions have single letter answers. Good Luck!  ");
  console.log("");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Your Final Score is : ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();
