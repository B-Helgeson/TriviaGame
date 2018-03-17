$(document).ready(function(){

    // Questions and Data
    var triviaQuestions = [
        {
            question: "Scuba tanks are generally made from either Aluminum or what other metal?",
            answer: "Steel",
            fakes: ["Nickel", "Cooper", "Titanium"]
        },
        {
            question: "What should you never do when SCUBA diving?",
            answer: "hold your breath",
            fakes: ["sneeze underwater", "pee in your wetsuit", "remove your mask"]
        },
        {
            question: "Which of the following is not a major air space which is affected while descending?",
            answer: "lungs",
            fakes: ["mask", "sinus", "ears"]
        },
        {
            question: "How long should you wait to take a flight after a dive?",
            answer: "24 hours",
            fakes: ["48 hours", "12 hours", "6 hours"]
        },
        {
            question: "What is the maximum recommended depth for an open water certified diver?",
            answer: "60 feet",
            fakes: ["90 feet", "120 feet", "100 feet"]
        }

    ];

//Variables for Tracking Purposes
var correctAnswers, incorrectAnswers, unanswered;

// Paint Start button on page upon load, click button to begin game
$("#start").click(function(){
    $(this).hide();
    clock.start();
// To Do: function to load questions onto page
// To Do: function to start overall game
});


// For Loop to paint questions on the page based on the list of questions above
    // Should randomly sort "fakes" and "answers" when generating forms questions need to be written into game box. use slice and splice



// time to begin counting down 30 seconds, at the end evaluate win/loss at the end



// When user clicks, save the selection, only one selection allowed per question




// Track correct answers, incorrect answers, and unanswered questions



// win/loss logic to paint results screen


// Timer Functionality for the Game below
///_______________________________________///


var clock = $('.your-clock').FlipClock(0040,{
  clockFace: 'MinuteCounter',
  autoStart: false,
});

clock.setCountdown(true),

console.log(triviaQuestions);
console.log("All Javascript Processed")

});


// Original Clock Functionality has been commented out below now that the "FlipClock has been added to this page"

// var intervalId;
// var clockRunning = false;
// var timer = {
//   time: 0,
//   reset: function() {
//     timer.time = 0;
//     $("#display").html("00:30")
//   },

//   start: function() {
//     if (!clockRunning) {
//       intervalId = setInterval(timer.count, 1000);
//       clockRunning = true;
//     }

//   },
//   stop: function() {
//     clearInterval(intervalId);
//     clockRunning = false;
//   },


//   count: function() {
//     timer.time--;
//     var converted = timer.timeConverter(timer.time);
//     $("#display").html(converted);
//   },

//     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
//   timeConverter: function(t) {
//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     return minutes + ":" + seconds;
//   }
// };