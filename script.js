console.log("Hello World");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomPickIndex = Math.floor(Math.random() * choices.length);
    return choices[randomPickIndex].toString();
}

function getPlayerChoice() {
    choice = prompt("Enter rock, paper or scissors: ");
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "Player";
    } else {
        return "Computer";
    }
}

// console.log(playRound(playerSelection, computerSelection));

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

game(5)