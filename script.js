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

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }

    if (humanScore === computerScore) {
        console.log(`It's a tied! You both scored ${humanScore} points`);
    } else if (humanScore > computerScore) {
        console.log(`You won the game! You scored ${humanScore} points`);
    } else {
        console.log(`Computer won the game! It scored ${computerScore} points`);
    }
}

playGame();