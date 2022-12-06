

var timerEl = document.getElementById('timer');
var directionsEl = document.getElementById("directions");

function displayTime(seconds) {
  var label = "seconds";
  if (seconds === 1) {
    label = "second";
  }
  timerEl.textContent = seconds + " " + label;
}

function countdown() {
  var timeLeft = 5;
  displayTime(timeLeft);
  
  var timeInterval = setInterval(function () {
    timeLeft--;
    displayTime(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      startQuiz();
      timerEl.textContent = "Expired";

    }
  }, 1000);
};


function startquiz() {
  let questions = [
    {
      headline: "Question 1",
      answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4", 
      },
      correct: "a",
    },
    {
      headline: "Question 2",
      answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4", 
      },
      correct: "b",
    },
    {
    headline: "Question 1",
    answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4", 
     },
    correct: "a",
    },
    {
    headline: "Question 2",
    answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4", 
    },
    correct: "b",
    },   
    
  ]; 
  for(i=0; i < questions.length; i++) {
    directions.
  };

};