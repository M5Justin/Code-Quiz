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

var displayNextQuestion = function () {
  for (var question of questions) {
      console.log(question);
      if (question.CDATA_SECTION_NODE.index != cursor) {
          question.style.display = 'none';
      } else {
          gameOver.style.display = 'block';
          var initials = prompt('Enter Initials');
          saveHiScore(initials);
          displayStoredPlayer();
      }
  }
}

var displayGameOver = function () {
  console.log(gameOver);
  if (gameOver.dataset.index != cursor) {
      gameOver.style.display = 'none';
  } else {
      gameOver.style.display = 'block';
      var initials = prompt('Enter Initials');
      saveHighScore(initials);
      displayStoredPlayer();
  }
}

var saveHighScore = function (initials) {
  var newScore = {
      playerInitials: initials,
      score: numCorrectAnswers,
  };
  localStorage.setItem('score', JSON.stringify(newScore));
}

var displayStoredPlayer = function () {
  var storedPlayer = localStorage.getItem('score');
  var playerObject = JSON.parse(storedPlayer);
  score.textContent = playerObject.playerInitials + ": score = " + playerObject.score;
}

// Events at the bottom

start.addEventListener('click', advance); {
  countdown();
  displayNextQuestion();
  var sections = document.querySelectorAll('.section');
  for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
  }
  quiz.style.display = "block";
}

buttonContainer.addEventListener('click'); {
  var element = event.target;
  if (element.matches("button")) {
      advance()
  }
};

hideStart();
displayNextQuestion();
displayGameOver();