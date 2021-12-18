var timeLeft = document.querySelector('#timer');
var startButton = document.querySelector('#startBtn');
var allQuestion = document.querySelector('.question');
var secondsLeft = 70;

function timer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft + " seconds left.";
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          alert("Time's Up!")
        }   
      }, 1000);
      
}

startButton.addEventListener('click',function gameStart() {
    console.log('access!')
    timer();
})
function questionOne(){
    var question = document.createElement(allQuestion);
    question.textContent = "What coding language creates the frame of the web page?";
}