
var readlineSync = require('readline-sync');

let score = 0;
var userName = readlineSync.question("What's Your Name ?");
console.log("welcome " + userName + " Let's see how much you know about Human Body!")

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer");
    score++;
  }
  else {
    console.log("Wrong Answer");
  }
  console.log("score : ", score);
}
var questions = [
  {
    question: `The weight of the human body is mainly made up of ?
(a) Bones
(b) Skin
(c) Body parts
(d) Water`,
    answer: "d"
  },
  {
    question: `How much percent of water is present in the human body? 
(a) 25%
(b) 56%
(c) 67%
(d) 45%`,
    answer: "c"
  },
  {
    question: `How many bones are found in the adult human body? 
(a) 208
(b) 308
(c) 108
(d) 206`,
    answer: "d"
  },
  {
    question: `Name the smallest bone in the human body?
(a) Incus
(b) Malleus
(c) Vomer
(d) Stapes`,
    answer: "d"
  },
  {
    question: `In which part of the human body does the smallest bone is found?
(a) Nose
(b) Foot
(c) Ear
(d) Forehead`,
    answer: "c"
  },
  {
    question: `How many pairs of ribs are present in the human body?
(a) 11
(b) 12
(c) 13
(d) 14`,
    answer: "b"
  },
  {
    question: `The memory power of the human brain is found in?
(a) Cerebrum
(b) Brain cavity
(c) Cerebellum
(d) None of these`,
    answer: "a"
  },
  {
    question: `What is the name of the breastbone?
(a) Sternum
(b) Clavicle
(c) Patella
(d) Scapula`,
    answer: "a"
  },
  {
    question: `The strongest part of the human body?
(a) Bone
(b) Enamel
(c) Cementum
(d) Dentin`,
    answer: "b"
  },
  {
    question: `Name the salts which are found in maximum quantity in our human body.
(a) Calcium Phosphate
(b) Calcium Carbonate
(c) Sodium Chloride
(d) Magnesium Chloride`,
    answer: "a"
  },
];
for (let i = 0; i < questions.length; i++) {
  var ques = questions[i];
  play(ques.question, ques.answer);
}

console.log("Your total score is: ", score);

var highScore = [{
  name: "ruhina",
  highscore: 10
},
{
  name: "tohid",
  highscore: 9
}];
console.log("Send the Screenshot of your score");
console.log("High Score :")
for (let i = 0; i < highScore.length; i++) {
  console.log(` ${highScore[i].name} ${highScore[i].highscore}`)
}
if (score === highScore.highscore) {
  console.log("You have broken the record");
}
else {
  console.log("you have not broken the record, Try One More Time!")
}