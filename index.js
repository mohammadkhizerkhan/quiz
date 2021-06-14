var readlineSync=require("readline-sync")
const chalk = require('chalk');

var username=readlineSync.question("wts your name?")

var score=0

console.log("welcome "+ username )

console.log("answer the questions in 'y' and 'n' only")


var highscores={
  name:"khizer",
  score:"5"
}


  function play(question,answer){
    var useranswer=readlineSync.question(question)

      if(useranswer===answer)
      {
        console.log(chalk.green("right"))
        score+=1
      }
      else
      {
        console.log(chalk.red("wrong"))
      }
    console.log("current score",score);
  }



var q1={
  question:"Is delhi is a capital city of india?\n",
  answer:"y"
}

var q2={
  question:"does america has prime minister?:\n",
  answer:"n"
}

var q3={
  question:"does solar system has jupiter?:\n",
  answer:"y"
}
var q4={
  question:"does flash character belongs to marvel cinematic universe?:\n",
  answer:"n"
}
var q5={
  question:"does elon musk called as an modernday ironman?:\n",
  answer:"y"
}
var q6={
  question:"is ms dhoni called as captain cool?:\n",
  answer:"y"
}
var q7={
  question:"is there any beast in avengers?:\n",
  answer:"y"
}
var q8={
  question:"did rose loved jack in titanic film?:\n",
  answer:"y"
}
var q9={
  question:"are you gay?:\n",
  answer:"y"
}

var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9]


for(var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("your final score is:",score)
if(highscores.score<score){
  console.log("congrats,you've beated the highscore")
  console.log("Now highscore is:",score)
}
else{
  console.log("you did not beated highscore\n the highscore was:",highscores.score)
}