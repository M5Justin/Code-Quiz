var countdown = 60;

var interval = setInterval(function()
{
    document.getElementById("timer").innerHTML = -- countdown;

    if (countdown == 0)
        clearInterval(interval);

}, 1000);



// function countdown(minutes) {
//     var seconds = 60;
//     var mins = minutes
//     function tick() {
//         //This script expects an element with an ID = "counter". You can change that to what ever you want. 
//         var counter = document.getElementById("timer");
//         var current_minutes = mins-1
//         seconds--;
//         timer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             setTimeout(function(){
//                 if(mins > 1){
//                 countdown(mins-1);
//                 }
//                 },1000);           
//             } 
//         }
    
//     tick();
// };

var questions = [
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