// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")

var num1 = random()
var num2 = random()

function displayrandom(){
    num1 = random()
    num2 = random()
    number1.innerText = num1
    number2.innerText = num2
}

displayrandom();


function random(){
    return  Math.floor(Math.random()*99)+1
}

// Iteration 3: Make the options button functional


const button = document.getElementById("buttons")
button.addEventListener('click', (e) => {
    compare(e.target.id)
})

// comparing two numbers
var score = 0

function compare(i){
    if(i == "greater-than" && num1>num2 || i=="equal-to" && num1 == num2 || i=="lesser-than" && num1<num2 ){
        secondsLeft=5
        score++;
        displayrandom();

    }else{
        gameover()
    }
}
// Iteration 4: Build a timer for the game

var stopWatch= document.getElementById("timer");
var secondsLeft = 5;

function updateTimer() {
    stopWatch.textContent = secondsLeft; 
    secondsLeft--;
    
    if(secondsLeft<0){
        gameover()
    }
}

setInterval(updateTimer,1000)


function gameover(){
    location.href = "gameover.html"
    localStorage.setItem("score",score)
}