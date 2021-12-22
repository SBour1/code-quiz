var timeLeft = document.querySelector('#timer');
var startButton = document.querySelector('#startBtn');
var allQuestion = document.querySelector('.question');
var allAnswer = document.querySelector('.answers');
var secondsLeft = 70;
var scores = [];
var timerInterval;

function gameStart() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft + " seconds left.";
        if (secondsLeft <= 0) {
            clearAll()
            window.alert("Time's Up!");
            return gameEnd();
        }
    }, 1000);
    startButton.remove();
    questionOne();
}

function clearAll() {
    var question = document.querySelector("h3");
    var buttons = document.querySelectorAll("button");
    question.remove();
    for (let i= 0; i < buttons.length; i++) {
        buttons[i].remove();
    }
}

startButton.addEventListener('click', gameStart)

function questionOne() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button");
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

    allAnswer.addEventListener("click", function response (event) {
        if (event.target.innerHTML===choiceOne.innerHTML) {
        } else {
            secondsLeft = secondsLeft - 20;
        }
        allAnswer.removeEventListener("click", response); 
        clearAll()
        questionTwo();
    });
}

function questionTwo() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button");
    question.innerHTML = "What kind of Javascript element will return a true/false response?";
    allQuestion.appendChild(question);
    choiceOne.innerHTML = "String";
    choiceTwo.innerHTML = "Number";
    choiceThree.innerHTML = "Boolean";
    choiceFour.innerHTML = "Array";
    allAnswer.appendChild(choiceOne);
    allAnswer.appendChild(choiceTwo);
    allAnswer.appendChild(choiceThree);
    allAnswer.appendChild(choiceFour);

    allAnswer.addEventListener("click", function response (event) {
        if (event.target.innerHTML===choiceThree.innerHTML) {
        } else {
            secondsLeft = secondsLeft - 20;
        }
        allAnswer.removeEventListener("click", response); 
        clearAll()
        questionThree();
    });
}

function questionThree() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button")
    question.innerHTML = "The Flex-box element that allows items to shift to the next line when out of room is:";
    allQuestion.appendChild(question);
    choiceOne.innerHTML = "Flex-end";
    choiceTwo.innerHTML = "Flex-wrap";
    choiceThree.innerHTML = "Flex-start";
    choiceFour.innerHTML = "Align-items";
    allAnswer.appendChild(choiceOne);
    allAnswer.appendChild(choiceTwo);
    allAnswer.appendChild(choiceThree);
    allAnswer.appendChild(choiceFour);

    allAnswer.addEventListener("click", function response (event) {
        if (event.target.innerHTML===choiceTwo.innerHTML) {
        } else {
            secondsLeft = secondsLeft - 20;
        }
        allAnswer.removeEventListener("click", response); 
        clearAll()
        questionFour();
    });
}

function questionFour() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button")
    question.innerHTML = "______ is a process in which an event is captured at the innermost element and propegated out";
    allQuestion.appendChild(question);
    choiceOne.innerHTML = "Propegation";
    choiceTwo.innerHTML = "Trickling";
    choiceThree.innerHTML = "Capturing";
    choiceFour.innerHTML = "Bubbling";
    allAnswer.appendChild(choiceOne);
    allAnswer.appendChild(choiceTwo);
    allAnswer.appendChild(choiceThree);
    allAnswer.appendChild(choiceFour);

    allAnswer.addEventListener("click", function response (event) {
        if (event.target.innerHTML===choiceFour.innerHTML) {
        } else {
            secondsLeft = secondsLeft - 20;
        }
        allAnswer.removeEventListener("click", response); 
        clearAll()
        questionFive();
    });
}

function questionFive() {
    var question = document.createElement("h3");
    var choiceOne = document.createElement("button");
    var choiceTwo = document.createElement("button");
    var choiceThree = document.createElement("button");
    var choiceFour = document.createElement("button")
    question.innerHTML = "What Javascript function has the same usage as '.on' in JQuery?";
    allQuestion.appendChild(question);
    choiceOne.innerHTML = "addEventListener";
    choiceTwo.innerHTML = "createElement";
    choiceThree.innerHTML = "appendChild";
    choiceFour.innerHTML = "log";
    allAnswer.appendChild(choiceOne);
    allAnswer.appendChild(choiceTwo);
    allAnswer.appendChild(choiceThree);
    allAnswer.appendChild(choiceFour);

    allAnswer.addEventListener("click", function response (event) {
        if (event.target.innerHTML===choiceOne.innerHTML) {
        } else {
            secondsLeft = secondsLeft - 20;
        }
        allAnswer.removeEventListener("click", response); 
        clearAll()
        gameEnd();
    });
}

function gameEnd() {
    console.log("in game end")
    var score = document.createElement("h3");
    score.innerHTML = secondsLeft;
    allQuestion.appendChild(score)
    score.textContent = "You got " + secondsLeft + " points!";
    var userName = prompt("Enter Initials")
    scores.push(userName + ": " + secondsLeft)
    console.log(scores)
    localStorage.setItem("score", JSON.stringify(scores));
    var newGame = window.confirm("Would you like to play again?");
    clearInterval(timerInterval);
    if (newGame) {
        score.remove();
        secondsLeft = 70;
        gameStart();
    } 
}