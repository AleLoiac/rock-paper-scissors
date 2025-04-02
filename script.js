const humanScore = 0;
const computerScore = 0;

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
