var time = 20;
var questionsCorrect = 0;

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

      clearInterval(counter);

    }
  },
  selectAnswer: function() {

    $(".answer").on("click", function() {

      var chosenAnswer = $(this).html();

      var rightAnswer = game.question1.correctAnswer;

      console.log(chosenAnswer);
      console.log(rightAnswer);

      if (chosenAnswer == rightAnswer) {

        $("#right-wrong").html("CORRECT!");
        questionsCorrect++;
        game.nextQuestion();

      }
      else {

        $("#right-wrong").html("WRONG!");
        game.nextQuestion();

      }

    });

  },
  nextQuestion: function() {

    $("#right-wrong").empty();
    $("#question").html(game.question2.ask);
    $("#a1").html(game.question2.wrongAnswerOne);
    $("#a2").html(game.question2.wrongAnswerTwo);
    $("#a3").html(game.question2.correctAnswer);
    $("#a4").html(game.question2.wrongAnswerThree);

  }

};

game.ready();

game.selectAnswer();
