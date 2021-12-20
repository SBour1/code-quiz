var highScores = document.getElementById("highScores");
var localScores = JSON.parse(localStorage.getItem("score"));
// highScores.appendChild(highScore).textContent = localStorage.getItem("score");
for (let i = 0; i < localScores.length; i++) {
    var highScore = document.createElement("li");
    highScores.appendChild(highScore).textContent = localScores[i];
}