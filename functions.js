let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)

    switch(randomNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerChoice){
    computerChoice = getComputerChoice()
    playerSelection = prompt("Rock,Paper,Scissors")
    values = { rock: 3, scissors: 2, paper: 1 };
    
    const result = values[playerSelection] - values[computerChoice];
    
    if (result === 0) {
        return "Draw!";
      } else if (result === 1 || result === -2) {
        playerScore++;
        console.log(`the score is ${playerScore} : ${computerScore}`)
        return `You win! ${playerSelection} beats ${computerChoice}`;
      } else {
        computerScore++
        console.log(`the score is ${playerScore} : ${computerScore}`)
        return `Computer win! ${computerChoice} beats ${playerSelection}`;
      }
      
      
}

function game(playerSelect){
    let roundResult = playRound(playerSelection,computerChoice)

 
    console.log(`the score is ${playerScore} : ${computerScore}`)

    if (playerScore == 5 || computerScore == 5) {
        }if(playerScore>computerScore){
            console.log(`You win! with ${playerScore} : ${computerScore}`)
        }else if (computerScore>playerScore){ 
            console.log(`Computer win! with ${playerScore} : ${computerScore}`)
        }else{
            console.log("DRAW")
        }
    }
