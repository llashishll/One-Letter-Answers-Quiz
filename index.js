var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

// data of high score
var highScores = [
  {
    name: "Ashish",
    score: 7,
  },

  {
    name: "Dhruv",
    score: 6,
  },
]

// array of objects
var questions1 = [{

  question: "Level:1 Question:1 - Which vitamin can body create from direct sunlight? ",
  answer: "D",
}, {
  question: "Level:1 Question:2 - Which letter is used by Samsung to name their high-end flagship models in the Galaxy range of devices? ",
  answer: "S"
},
{

  question: "Level:1 Question:3 - Which letter represents the chemical element potassium in the periodic table? ",
  answer: "K",
},
{
  question: "Level:1 Question:4 - Which letter is commonly used to refer to the vertical axis on a coordinate graph? ",
  answer: "Y"

},
{
  question: "Level:1 Question:5: - Which letter refers to the demographic population who was born between 1997 and 2012? ",
  answer: "Z"
}];
var questions2 = [
  {
    question: "Level:2 Question:1 - In the 1997 movie “Men in Black”, Will Smith plays a role as Agent? ",
    answer: "J"
  },
  {
    question: "Level:2 Question:2 - The lowercase of which letter is used to denote a mathematical constant that is approximately equal to 2.71828? ",
    answer: "E"
  },
  {
    question: "Level:2 Question:3 - In James Bond movies, what is the name of the head of research and development division (R&D) of the British Secret Service? ",

    answer: "Q",

  },
  {
    question: "Level:2 Question:4 - Which letter denotes a number that measures how quickly a virus is spreading in the population during a pandemic? ",

    answer: "R"
  },
  {
    question: "Level:2 Question:5 - First produced in 2015, which Tesla car model is known for using falcon-wing doors for passenger access? ",
    answer: "X"
  }

]



function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + chalk.green(userName) + " to 'One Letter Quiz' As the name suggest all the following questions have single letter answers. Good Luck!  ");
  console.log("");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("Right Answer :)"));
    score = score + 1;

  } else {
    console.log(chalk.red("Wrong Answer :("));

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions1.length; i++) {
    var currentQuestion = questions1[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  if (score > 3) {
    console.log(chalk.blue("Congrats! You have qualified for level 2"))
    console.log("-----------------------------------------------------")

    for (var i = 0; i < questions2.length; i++) {
      var currentQuestion = questions2[i];
      play(currentQuestion.question, currentQuestion.answer)
    }
  }
}

function showScores() {
  console.log(chalk.blue("Your Final Score is : ", score));

  console.log(chalk.blue("Check out the high scores, if you should be there ping me and I'll update it"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();
