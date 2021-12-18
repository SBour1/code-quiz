var timeLeft = document.querySelector('#timer');
var startButton = document.querySelector('#startBtn');
var allQuestion = document.querySelector('.question');
var allAnswer = document.querySelector('.answers');
var secondsLeft = 70;

function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft + " seconds left.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up!")
        }
    }, 1000);

}

startButton.addEventListener('click', function gameStart() {
    timer();
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
})

function questionOne() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "What coding language creates the frame of the web page?";
    allQuestion.appendChild(question)
    answers = ["HTML", "CSS", "Javascript", "Python"]
    allAnswer.appendChild(answers)
}

function questionTwo() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers = []
    allAnswer.appendChild(answers)
}

function questionThree() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers = []
    allAnswer.appendChild(answers)
}

function questionFour() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers = []
    allAnswer.appendChild(answers)
}

function questionFive() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers = []
    allAnswer.appendChild(answers)
}