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
    document.getElementById("player_selection").innerHTML = `<img src="./images/${playerSelection}.svg" />`;
    document.getElementById("computer_selection").innerHTML = `<img src="./images/${computerSelection}.svg" />`;
    if (playerSelection === computerSelection) {
        document.querySelector("#announcement>p").innerHTML = `<span class="tie">It's a tie.</span>`;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        document.querySelector("#announcement>p").innerHTML = `<span class="win">Yay, this round is yours!</span>`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    } else {
        document.querySelector("#announcement>p").innerHTML = `<span class="lose">So bad. Wrong decision!</span>`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    }
    if (playerScore === 3 || computerScore === 3) {
        gameOver(playerScore);
    }
}

function gameOver(playerScore) {
    const body = document.querySelector('body');
    const restartDiv = document.createElement('div');
    restartDiv.classList.add('restart-div');
    body.appendChild(restartDiv);
    
    let message = document.createElement('p');
    if (playerScore === 3) {
        message.textContent = "Congratulations, you are the winner! Play again?";
    } else {
        message.textContent = "Oh no, you lost the game! Play again?"
    }
    restartDiv.appendChild(message);

    let btn = document.createElement('button');
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "restart-btn");
    btn.textContent = "RESTART";
    restartDiv.appendChild(btn);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload()
    })
}

game()