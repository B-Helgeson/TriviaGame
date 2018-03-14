$(document).ready(function(){

    
    // Questions and Data
    var triviaQuestions = [
        {
            question: "Q1?",
            answer: "A1",
            fakes: ["A2", "A3", "A4"]
        },
        {
            question: "Q2?",
            answer: "A1",
            fakes: ["A2", "A3", "A4"]
        },
        {
            question: "Q3?",
            answer: "A1",
            fakes: ["A2", "A3", "A4"]
        },
        {
            question: "Q4?",
            answer: "A1",
            fakes: ["A2", "A3", "A4"]
        },
        {
            question: "Q5?",
            answer: "A1",
            fakes: ["A2", "A3", "A4"]
        }

    ];

//Variables for Tracking Purposes
var correctAnswers, incorrectAnswers, unanswered;

// Paint Start button on page upon load, click button to begin game
$("#start").click(function(){
    $(this).hide();
    timer.start; //function to start the timer
// startGame(); //function to start the game (needs to be defined)
});


// For Loop to paint questions on the page based on the list of questions above
    // Should randomly sort "fakes" and "answers" when generating forms questions need to be written into game box. use slice and splice

// time to begin counting down 30 seconds, at the end evaluate win/loss

// When user clicks, save the selection, only one selection allowed per question

// Track correct answers, incorrect answers, and unanswered questions


  //  Click events are done for us:
//   $("#stop").click(timer.stop);
//   $("#reset").click(timer.reset); 
//   $("#start").click(timer.start);

var intervalId;
var clockRunning = false;
var timer = {
  time: 0,
  reset: function() {
    timer.time = 0;
    $("#display").html("00:30")
  },

  start: function() {
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }

  },
  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },


  count: function() {
    timer.time--;
    var converted = timer.timeConverter(timer.time);
    $("#display").html(converted);
  },

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};


console.log("All Javascript Processed")

});