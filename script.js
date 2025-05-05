// Function that randomly returns “rock”, “paper” or “scissors”
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

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    let underCasedHumanChoice = humanChoice.toLowerCase();
    if (humanScore === 5 && computerScore === 5) {
        document.querySelector(".score").innerText = `You tied!`;
        return;
    }
    else if (humanScore === 5) {
        document.querySelector(".score").innerText = `You won!`;
        return;
    }
    else if (computerScore === 5) {
        document.querySelector(".score").innerText = `You lost!`;
        return;
    };
    
    if (underCasedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    } else if (underCasedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    } 

    if (underCasedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
    } else if (underCasedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
    }

    if (underCasedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
    } else if (underCasedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
    }

    if (humanScore === 5 && computerScore === 5) {
        document.querySelector(".score").innerText = `You tied!`;
        return;
    }
    else if (humanScore === 5) {
        document.querySelector(".score").innerText = `You won!`;
        return;
    }
    else if (computerScore === 5) {
        document.querySelector(".score").innerText = `You lost!`;
        return;
    };

    div = document.querySelector(".score");
    div.innerText = `Your score: ${humanScore}
                     Computer score: ${computerScore}`;

    return;
}

// Event listener for the buttons 
buttonContainer = document.querySelector(".btnContainer")
buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.className) {
        case 'rock':
            playRound(document.querySelector(".rock").innerText, getComputerChoice())
            break;
        case 'paper':
            playRound(document.querySelector(".paper").innerText, getComputerChoice())
            break;
        case 'scissors':
            playRound(document.querySelector(".scissors").innerText, getComputerChoice())
            break;;
    }
})


