var container = document.querySelector('.container');
var questions = document.querySelectorAll('.question');
var next = document.querySelector('#next');
var start = document.querySelector('#startButton');
var quiz = document.querySelector('.quizContainer');
var highScores = document.querySelector('.highScores');
var timer = document.querySelector('.countdown');
var gameOver = document.querySelector('.gameOver');
var initials = "";

var secondsLeft = 75;
var answers = ["a", "b", "a", "c", "b", "d"]
var cursor = 0;

var advance = function (event) {
  var element = event.target;
  if (element.matches('.start button')) {
      cursor ++;
      countdown();
      hideStart();
  }

  displayNextQuestion();
  displayGameOver();
};

var hideStart = function () {
  console.log(advance);
  if (start.dataset.index != cursor) {
      start.style.display = 'none';
  } else {
      start.style.display = 'flex';
  }
};

function displayTime() {
  var label = "seconds";
  if (secondsLeft === 1) {
      label = "second";
  }
  timer.textContent = secondsLeft + " " + label + " left on the clock!";
}

function countdown() {
  displayTime(secondsLeft);
  var timeInterval = setInterval(function () {
      secondsLeft--;
      displayTime(secondsLeft);

      if (secondsLeft === 0) {
          clearInterval(timeInterval);
          cursor = 7;
          displayNextQuestion();
          if (gameOver.style.display != 'block') {
              displayGameOver();
          }
      }
  }, 1000);
}