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
    startGame(); //function to start the game (needs to be defined)
});


// For Loop to paint questions on the page based on the list of questions above
    // Should randomly sort "fakes" and "answers" when generating forms questions need to be written into game box. use slice and splice

// time to begin counting down 30 seconds, at the end evaluate win/loss

// When user clicks, save the selection, only one selection allowed per question

// Track correct answers, incorrect answers, and unanswered questions


console.log("Test Functionality")



});