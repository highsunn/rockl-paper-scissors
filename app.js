function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    if (choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper";
    } else if (choice === 3){
        return "scissors";
    } else if (choice === 0){   
    }
}

function getUserChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors:");
    return choice;
}

// Make a variable named playRound
// If value of users choice is rock and computers value choice is scissors, return console.log("Rock beats scissors! You win!")
// If value of users choice is paper and computers value choice is scissors, return console.log("Scissors beats paper! You lose!") 
// If value of users choice is scissors and computers value choice is scissors, return console.log("Scissors on scissors is a draw!")
// If value of users choice is rock and computers value choice is scissors, return console.log("Rock beats scissors! You win!")
// If the value of users 

function playRound(uc, cc){
    let playerWin = null;
    let matchDraw = false;
    if (uc === "Rock" || uc === "rock" || uc === "ROCK"){
        if (cc === "rock") {
            console.log("Rock on Rock is a draw!");
            matchDraw = true;
        }
        if (cc === "paper") {
            console.log("Paper beats Rock! You lose!");
            playerWin = false;
        }
        if (cc === "scissors") {
            console.log("Rock beats Scissors! You win!");
            playerWin = true;
        }
    }
    if (uc === "Paper" || uc === "paper" || uc === "PAPER"){
        if (cc === "rock") {
            console.log("Paper beats Rock! You win!");
            playerWin = true;
        }
        if (cc === "paper") {
            console.log("Paper on Paper is a draw!");
            matchDraw = true;
        }
        if (cc === "scissors") {
            console.log("Scissors beats Paper! You lose!");
            playerWin = false;
        }
    }
    if (uc === "Scissors" || uc === "scissors" || uc === "SCISSORS"){
        if (cc === "rock") {
            console.log("Rock beats Scissors! You lose!");
            playerWin = false;
        }
        if (cc === "paper") {
            console.log("Scissors beats Paper! You win!");
            playerWin = true;
        }
        if (cc === "scissors") {
            console.log("Scissors on scissors is a draw!");
            matchDraw = true;
        }
    }

    if (playerWin === true){
        return ++userScore;
    } else{
        return ++computerScore;
    }
}
const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

let userScore = 0;

let computerScore = 0;


playRound(userSelection, computerSelection);
console.log(userScore);
console.log(computerScore);
