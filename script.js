let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = () => {
    const humanChoice = prompt("Choose one between: Rock, Paper, Scissors").toLowerCase();
    return humanChoice;
}

const playRound = (computerChoice, humanChoice) => {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);