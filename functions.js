let playerScores = 0
let computerScores = 0


const btnRock = document.getElementById('rockButton');
const btnPaper = document.getElementById('paperButton');
const btnScissors = document.getElementById('scissorsButton');


const btnReset = document.createElement('button')

const divResult = document.getElementById('result');
divResult.textContent = "Choose your weapon!"  // result of the round
btnReset.textContent = 'Reset'
document.body.appendChild(btnReset)
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

    values = { rock: 3, scissors: 2, paper: 1 };
    
    const result = values[playerSelection] - values[computerChoice];
    
    
    if (result === 0) {
        return "Draw!";
      } else if (result === 1 || result === -2){
        playerScores++;
        divResult.textContent = `the score is ${playerScores} : ${computerScores} 
        You win! ${playerSelection} beats ${computerChoice}`
        game(playerScores,computerScores) 

      } else if (result === -1 || result === 2){
        computerScores++
        divResult.textContent = `the score is ${playerScores} : ${computerScores} 
        Computer win! ${computerChoice} beats ${playerSelection}`
        game(playerScores,computerScores) 
    
    
      
    }
}

function game(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            divResult.textContent = `You win! THE GAME ${playerScore} : ${computerScore}`;
            endGame()
        } else if (computerScore > playerScore) {
            divResult.textContent = `Computer win! THE GAME ${playerScore} : ${computerScore}`;
            endGame()
        }
    } else {
        return
    }
}

function endGame (){
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;


   
    
}

btnReset.addEventListener('click', () => {
    playerScores = 0;
    computerScores = 0;
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    divResult.textContent = 'Choose your weapon!'
})

btnRock.addEventListener('click', () => playRound('rock'));
btnPaper.addEventListener('click', () => playRound('paper'));
btnScissors.addEventListener('click', () => playRound('scissors'));

