// Iteration 5: Store the player score and display it on the game over screen
const scoreBoard= document.getElementById("score-board")

const again = document.querySelector("#play-again-button")
scoreBoard.innerText = localStorage.getItem("score")

again.addEventListener('click', function(){
        window.location.href = "index.html"
});