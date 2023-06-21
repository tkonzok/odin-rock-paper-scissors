console.log("Hello World");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomPickIndex = Math.floor(Math.random() * choices.length);
    return choices[randomPickIndex].toString();
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `You both selected ${computerSelection}, it's a tie.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You selected ${playerSelection} while the computer selected ${computerSelection}, you win!`;
    } else {
        return `You selected ${playerSelection} while the computer selected ${computerSelection}, you lose!`;
    }
}

console.log(playRound(playerSelection, computerSelection));