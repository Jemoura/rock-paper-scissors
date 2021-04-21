let playerScore = 0;
let computerScore = 0;
let invalidChoice = false;

//Computador escolhe a jogada
function computerPlay() {
    const computerChoice = ["rock", "paper", "scissors"];
    let selectedIndex = Math.floor(Math.random()*3);
    return computerChoice[selectedIndex];
}

//Turno de jogo
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase(); 
    if(playerChoice === computerSelection) {
        playerScore += 1;
        computerScore +=1;
        return "Tie";
    } else if (playerChoice === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        return "You win! Rock beats Scissors :)";
    } else if (playerChoice === "rock" && computerSelection === "paper"){
        computerScore +=1;
        return "You lose! Paper beats Rock :(";
    } else if (playerChoice === "paper" && computerSelection === "rock"){
        playerScore += 1;
        return "You win! Paper beats Rock :)";
    } else if (playerChoice === "paper" && computerSelection === "scissors"){
        computerScore +=1;
        return "You lose! Scissors beats Paper :(";
    } else if (playerChoice === "scissors" && computerSelection === "rock"){
        computerScore +=1;
        return "You lose! Rock beats Scissors :(";
    } else if (playerChoice === "scissors" && computerSelection === "paper"){
        playerScore += 1;
        return "You win! Scissors beats Paper";
    } else {
        invalidChoice = true;
        return "You entered an invalid choice.";
    }

}

//Lógica do jogo
function game() {    
    let turns = 5;

    while (turns >= 1){
        const playerSelection = prompt("Type \"rock\", \"paper\" or \"scissors\"");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));        
        if(!invalidChoice) {
            turns--;
        } else {
            invalidChoice = false;
        }
    }   
    
    console.log(`You scored ${playerScore} points.\nThe computer scored ${computerScore} points.`);
        
    if (playerScore > computerScore) {
        console.log("You win the game! :D");
    } else if (playerScore < computerScore) {
        console.log("You lose the game. :(");
    } else {
        console.log("It's a tie.");
    }

}

//Iniciar jogo
game();

