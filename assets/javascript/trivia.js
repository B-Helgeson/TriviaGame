$(document).ready(function(){

    // Questions and Data
    var triviaQuestions = [
        {
            question: "Scuba tanks are generally made from either Aluminum or what other metal?",
            answer: "Steel",
            options: ["Nickel", "Steel", "Cooper", "Titanium"]
        },
        {
            question: "What should you never do when SCUBA diving?",
            answer: "Hold your breath",
            options: ["Sneeze underwater", "Pee in your wetsuit", "Hold your breath", "Remove your mask"]
        },
        {
            question: "Which of the following is not a major air space which is affected while descending?",
            answer: "Lungs",
            options: ["Lungs", "Mask", "Sinus", "Ears"]
        },
        {
            question: "How long should you wait to take a flight after a dive?",
            answer: "24 hours",
            options: ["48 hours", "12 hours", "6 hours", "24 hours"]
        },
        {
            question: "What is the maximum recommended depth for an open water certified diver?",
            answer: "60 feet",
            options: ["60 feet", "90 feet", "120 feet", "100 feet"]
        }

    ];

//Variables for Tracking Purposes
var correctAnswers = 0, 
    incorrectAnswers = 0, 
    unansweredQuestions = 0;

// Once start button is clicked, hide the start button, start the clock, and run the function to show the questions
$("#start").click(function(){
    $("#start").hide();
    clock.start();
    showQuestions();
});

// for loop to create question divs and buttons based on the trivia questions array
function showQuestions() {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $("#gameBox").append(
            '<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">' + triviaQuestions[i].question + '</h3></div>' +
            '<div class="panel-body"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">'+ triviaQuestions[i].options[0] + '</label>' +
            '<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">' + triviaQuestions[i].options[1] + '</label>' +
            '<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">' + triviaQuestions[i].options[2] + '</label>' +
            '<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">' + triviaQuestions[i].options[3] + '</label></div></div>'

        );
    }
    $("#gameBox").append('<button id="submit" type="button" class="btn btn-primary btn-lg info" data-toggle="modal" data-target="#myModal"> Submit Quiz </button>')
}


// Modal Functionality
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })


// Submit Button Logic
$("#submit").click(function(){
    clock.stop();
})




// time to begin counting down 30 seconds, at the end evaluate win/loss at the end



// When user clicks, save the selection




// Track correct answers, incorrect answers, and unanswered questions



// win/loss logic to paint results screen


// Timer Functionality for the Game below

var clock = $('.your-clock').FlipClock(0040,{
  clockFace: 'MinuteCounter',
  autoStart: false,
  time: 30
});

clock.setCountdown(true);

var myTime = FlipClock.time 

if (myTime == 0){alert("you lose")}

console.log("Questions and Answers");
console.log(triviaQuestions);
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