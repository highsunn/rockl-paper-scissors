console.log("Play rock paper scissors against the computer! First to 5 wins!");

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

function playGame(){
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    function playRound(uc, cc){
        let playerWin = false;
        let matchDraw = false;
        let computerWin = false;
        if (uc === "Rock" || uc === "rock" || uc === "ROCK"){
            if (cc === "rock") {
                alert("Rock on Rock is a draw!")
                matchDraw = true;
            }
            if (cc === "paper") {
                alert("Paper beats Rock!");
                playerWin = false;
                computerWin = true;
            }
            if (cc === "scissors") {
                alert(`Rock beats Scissors!`);
                playerWin = true;
            }
        }
        if (uc === "Paper" || uc === "paper" || uc === "PAPER"){
            if (cc === "rock") {
                alert("Paper beats Rock!");
                playerWin = true;
            }
            if (cc === "paper") {
                alert("Paper on Paper is a draw!");
                matchDraw = true;
            }
            if (cc === "scissors") {
                alert("Scissors beats Paper!");
                playerWin = false;
                computerWin = true;
            }
        }
        if (uc === "Scissors" || uc === "scissors" || uc === "SCISSORS"){
            if (cc === "rock") {
                alert("Rock beats Scissors!");
                playerWin = false;
                computerWin = true;
            }
            if (cc === "paper") {
                alert("Scissors beats Paper!");
                playerWin = true;
            }
            if (cc === "scissors") {
                alert("Scissors on scissors is a draw!");
                matchDraw = true;
            }
        }

        if (playerWin === true && !matchDraw){
            return ++userScore;
        } else if (computerWin === true && !matchDraw){
            return ++computerScore;
        }
    }
}
let userScore = 0;
let computerScore = 0;
playGame();

playGame();

playGame();

playGame();
 
playGame();


if (userScore > computerScore){
        console.log("You won the game!")
} else {
        console.log("The computer won the game! You lose!")
}