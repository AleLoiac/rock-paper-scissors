const container = document.querySelector(".container");
const result = document.querySelector(".result");
const computerScoreDiv = document.querySelector(".computer-score");
const humanScoreDiv = document.querySelector(".human-score");

let computerScore = 0;
let humanScore = 0;

humanScoreDiv.textContent = `You: ${humanScore}`;
computerScoreDiv.textContent = `Computer: ${computerScore}`;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else  {
        return "scissors";
    }
}

const playRound = (computerChoice, humanChoice) => {
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        humanScoreDiv.textContent = `You: ${humanScore}`;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreDiv.textContent = `Computer: ${computerScore}`;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

container.addEventListener("click", (e) => {
    const target = e.target;

    switch (target.id) {
        case "rock":
            playRound(getComputerChoice(), "rock");
            break;
        case "paper":
            playRound(getComputerChoice(), "paper");
            break;
        case "scissors":
            playRound(getComputerChoice(), "scissors");
            break;
    }
})