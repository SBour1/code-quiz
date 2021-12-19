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
    startButton.remove();

}

startButton.addEventListener('click', function gameStart() {
    var score = [];
    timer();
    questionOne();
    // questionTwo();
    // questionThree();
    // questionFour();
    // questionFive();
    // secondsLeft = score
    localStorage.setItem("score", score);
})

function questionOne() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button")
    question.innerHTML = "What coding language creates the frame of the web page?";
    allQuestion.appendChild(question);
    choiceOne.innerHTML = "HTML";
    choiceTwo.innerHTML = "CSS";
    choiceThree.innerHTML = "Javascript";
    choiceFour.innerHTML = "Python";
    allAnswer.appendChild(choiceOne);
    allAnswer.appendChild(choiceTwo);
    allAnswer.appendChild(choiceThree);
    allAnswer.appendChild(choiceFour);

    allAnswer.addEventListener("click", function () {
        if (choiceOne) {
            console.log("correct");
        } else {
            console.log("wrong");
            secondsLeft = secondsLeft - 20;
        }
    });

}

function questionTwo() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers.innerHTML = []
    allAnswer.appendChild(answers)
}

function questionThree() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers.innerHTML = []
    allAnswer.appendChild(answers)
}

function questionFour() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers.innerHTML = []
    allAnswer.appendChild(answers)
}

function questionFive() {
    var question = document.createElement("h3");
    var answers = document.createElement("li")
    question.textContent = "";
    allQuestion.appendChild(question)
    answers.innerHTML = []
    allAnswer.appendChild(answers)
}