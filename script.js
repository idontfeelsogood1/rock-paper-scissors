// function that randomly returns “rock”, “paper” or “scissors”
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Write the logic to get the human choice
function getHumanChoice() {
    let userInput = prompt("Your selection:");
    return userInput;
}
console.log(getHumanChoice());

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

