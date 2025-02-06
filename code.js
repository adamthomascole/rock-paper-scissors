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

function getHumanChoice() {
    let input = prompt("Rock, Paper, Scissors!\nWhat do you choose?");
    let choice = formatText(input);
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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let numOfRounds = 5

    for (let i = 1; i <= numOfRounds; i++) {

        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        function playRound(humanChoice, computerChoice) {

            switch (humanChoice + "-" + computerChoice) {
                case "Rock-Scissors":
                case "Scissors-Paper":
                case "Paper-Rock":
                    humanScore++;
                    return `You Win, Computer played ${computerChoice}!`;
                case "Scissors-Rock":
                case "Paper-Scissors":
                case "rock-Paper":
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

        console.log(`Round ${i}: ${playRound(humanSelection, computerSelection)}`);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } 
    else if (humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    } 
    else {
        console.log("It's a tie!");
    }
}

playGame()