var time = 20;

var game = {
  question1: {
    ask: "What breed of dog is Ein?",
    correctAnswer: "Welsh Corgi",
    wrongAnswerOne: "Miniature Schnauzer",
    wrongAnswerTwo: "Norwich Terrier",
    wrongAnswerThree: "Scottish Terrier"
  },
  question2: {
    ask: "What is the name of the mysterious woman Spike is looking for?",
    wrongAnswerOne: "Miranda",
    wrongAnswerTwo: "Helena",
    correctAnswer: "Julia",
    wrongAnswerThree: "Faye"
  },
  question3: {
    ask: "The nomadic Native American, Laughing Bull, calls Jet what upon meeting him?",
    wrongAnswerOne: "Spirit Bear",
    wrongAnswerTwo: "Falling Leaf",
    correctAnswer: "Running Rock",
    wrongAnswerThree: "Gentle Breeze"
  },
  question4: {
    ask: "When creating Cowboy Bebop, from what anime did director Shinichirō Watanabe draw much of his inspiration?",
    wrongAnswerOne: "Detective Conan",
    correctAnswer: "Lupin III",
    wrongAnswerTwo: "Yu Yu Hakuksho",
    wrongAnswerThree: "Lupin VIII"
  },
  question5: {
    ask: "In episode 1, Asteroid Blues, what is the name of the drug used by Asimov Solensan?",
    wrongAnswerOne: "Ambrosia",
    correctAnswer: "Red Eye",
    wrongAnswerTwo: "Ether",
    wrongAnswerThree: "Soma"
  },
  ready: function() {

    $("document").ready(function() {

      $("#question").html(game.question1.ask);
      $("#a1").html(game.question1.correctAnswer);
      $("#a2").html(game.question1.wrongAnswerOne);
      $("#a3").html(game.question1.wrongAnswerTwo);
      $("#a4").html(game.question1.wrongAnswerThree);

      game.timer();

    });

  },
  timer: function() {

    counter = setInterval(game.decrement, 1000);

  },
  decrement: function() {
    time--;

    $("#timer").html(time);

    if (time === 0) {

      console.log("done");
      clearInterval(counter);

    }
  }

};


console.log(game.question1.ask);
console.log(game.question2.correctAnswer);
console.log(game.question3.wrongAnswerOne);
console.log(game.question4.correctAnswer);
console.log(game.question5.wrongAnswerThree);

game.ready();
