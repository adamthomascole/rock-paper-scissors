const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

const resultsDiv = document.querySelector('#resultsDiv')
const humanDiv = document.querySelector('#humanScore')
const computerDiv = document.querySelector('#cpuScore')
const gameEndDiv = document.querySelector('#gameEnd') 

let humanScore = 0;
let computerScore = 0; 
var round = 0;



function getComputerChoice() {
    var num = Math.random();
    let choice = "";
    if (num <= 0.33) {
        choice = "Rock";
        return choice;
    }
    else if (num <= 0.66) {
        choice = "Paper";
        return choice;
    }
    else if (num <= 1.00) {
        choice = "Scissors";
        return choice;
    }
    
}

function getHumanChoice(input) {
    let choice = input;
    return choice;
}

function formatText(str) {
    if (!str) return "";
    let first = str.at(0);
    first = first.toUpperCase();
    var lower = str.slice(1);
    var rest = lower.toLowerCase();
    let newStr = `${first}${rest}`;
    // console.log(newStr);
    return newStr;
}

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    round++

    switch (humanChoice + "-" + computerChoice) {
        case "Rock-Scissors":
        case "Scissors-Paper":
        case "Paper-Rock":
            humanScore++;
            return `You Win, Computer played ${computerChoice}!`;
        case "Scissors-Rock":
        case "Paper-Scissors":
        case "Rock-Paper":
            computerScore++;
            return `You Lose, Computer played ${computerChoice}!`;
        case "Rock-Rock":
        case "Paper-Paper":
        case "Scissors-Scissors":
            return "It's a tie!";
        default:
            return "Invalid choice!";
    }
}

function fivePoints() {
    if (humanScore === 5 || computerScore === 5) {
        return true;
    }
}

function getResults(hmn, cpu) {
    resultsDiv.textContent = playRound(hmn, cpu)

    humanDiv.textContent = `Your Score: ${humanScore}`;
    computerDiv.textContent = `CPU Score: ${computerScore}`;
    
    if (fivePoints()) {
        (gameEndDiv.style.opacity = '1');
        if (humanScore > computerScore) {
            gameEndDiv.textContent = "Congratulations! You won the game!";
        } 
        else if (humanScore < computerScore) {
            gameEndDiv.textContent = "You lost the game. Better luck next time!";
        } 
        else {
            gameEndDiv.textContent = "It's a draw - Play Again!";
        }

        humanScore = 0;
        computerScore = 0;
        round = 0;
    }
    else {
        (gameEndDiv.textContent = '');
        (gameEndDiv.style.opacity = '0');
    }
}



// Event Handlers
rockBtn.addEventListener('click', () => {getResults("Rock", getComputerChoice())});
paperBtn.addEventListener('click', () => {getResults("Paper", getComputerChoice())});
scissorsBtn.addEventListener('click', () => {getResults("Scissors", getComputerChoice())});



// Initialization
resultsDiv.textContent = 'Choose Wisely...';
humanDiv.textContent = `You: ${humanScore} Points`;
computerDiv.textContent = `CPU: ${computerScore} Points`;
gameEndDiv.style.opacity = '0';