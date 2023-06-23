console.log("Hello World");

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

    function game() {
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');

    btnRock.addEventListener('click', () => playRound("rock", getComputerChoice()));
    btnPaper.addEventListener('click', () => playRound("paper", getComputerChoice()));
    btnScissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));
}

/* List of possible choices */
const choices = ["rock", "paper", "scissors"];

/* Function picks random choice out of the list of possible choices */
function getComputerChoice() {
    let randomPickIndex = Math.floor(Math.random() * choices.length);
    return choices[randomPickIndex].toString();
}

/* Simulation of one round of the game. Compares both choices and returns the winner or tie, if it's a tie */
function playRound(playerSelection, computerSelection) {
    document.getElementById("player_selection").innerHTML = `${playerSelection.toUpperCase()}`;
    document.getElementById("computer_selection").innerHTML = `${computerSelection.toUpperCase()}`;
    if (playerSelection === computerSelection) {
        document.querySelector("#announcement>p").innerHTML = `It's a tie.`;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        document.querySelector("#announcement>p").innerHTML = `Yay, this round is yours!`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    } else {
        document.querySelector("#announcement>p").innerHTML = `So bad. Wrong decision!`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    }
    if (playerScore === 5 || computerScore === 5) {
        gameOver(playerScore, computerScore);
    }
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        document.querySelector("#announcement>p").innerHTML = `Congratulations, you are the winner!`;
    } else {
        document.querySelector("#announcement>p").innerHTML = `Oh no, you lost the game!`;
    }
}

game()