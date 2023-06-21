console.log("Hello World");

/* List of possible choices */
const choices = ["rock", "paper", "scissors"];

/* Function picks random choice out of the list of possible choices */
function getComputerChoice() {
    let randomPickIndex = Math.floor(Math.random() * choices.length);
    return choices[randomPickIndex].toString();
}

/* Promt asks user to choose either rock, paper or scissors */
function getPlayerChoice() {
    choice = prompt("Enter rock, paper or scissors: ");
    return choice;
}

/* Simulation of one round of the game. Compares both choices and returns the winner or tie, if it's a tie */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        return "Player";
    } else {
        return "Computer";
    }
}

/* Full game. Plays as many rounds as inserted as parameter roundsToPlay */
function game(roundsToPlay) {
    let roundsPlayed = 0;
    let score = 0;
    let playerSelection = "";
    let computerSelection = "";
    let winner = "";

    while (roundsPlayed < roundsToPlay) {
        playerSelection = getPlayerChoice().toLowerCase();
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        winner = playRound(playerSelection, computerSelection);
        if (winner === "Tie") {
            alert(`You both selected ${computerSelection}, it's a tie.`);
        } else if (winner === "Player") {
            score++
            alert(`You selected ${playerSelection} while the computer selected ${computerSelection}, you win!`);
        } else {
            alert(`You selected ${playerSelection} while the computer selected ${computerSelection}, you lose!`);
        }
        roundsPlayed++;
        alert(`Current score: ${score}`);
        console.log(roundsPlayed);
    }

    alert(`Game over! You played ${roundsPlayed} rounds against the computer and won ${score} rounds of it.`);

}

/* Calling the game function. Parameter tells game how many rounds to be played. */
game(5)