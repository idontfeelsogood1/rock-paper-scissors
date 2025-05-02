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

// Write the logic to get the human choice
function getHumanChoice() {
    let userInput = prompt("Your selection:");
    return userInput;
}

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    let underCasedHumanChoice = humanChoice.toLowerCase();

    if (underCasedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    } else if (underCasedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } 

    if (underCasedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
    } else if (underCasedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    }

    if (underCasedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper");
    } else if (underCasedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats paper");
    }

    if (
        underCasedHumanChoice === "rock" && computerChoice === "rock"           || 
        underCasedHumanChoice === "paper" && computerChoice === "paper"         ||
        underCasedHumanChoice === "scissors" && computerChoice === "scissors") {
        console.log("You tied!");
    }

    return;
}

// Write the logic to play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if(computerScore > humanScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("You tied the game!")
    }
}
playGame();