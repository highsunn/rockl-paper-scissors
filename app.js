function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1){
        return "Rock";
    } else if (choice === 2){
        return "Paper";
    } else if (choice === 3){
        return "Scissors";
    }
}

function getUserChoice(choice){
    choice = prompt("Choose Rock, Paper, or Scissors:");
    return choice;
}

console.log(getUserChoice("Paper"));