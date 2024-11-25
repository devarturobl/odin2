function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3)
        return 'Rock';
    else if  (rand < 2/3)
        return 'Paper';
    else
        return 'Scissors';
}

function getHumanChoice(round, attempts = 3) {
    for (let i = 1; i <= attempts; i++) {
        let response = prompt(`Round ${round}, Select "Rock", "Paper", or "Scissors"`).toLowerCase();
        if (response === 'rock' || response === 'paper' || response === 'scissors')
            return (response[0].toUpperCase() + response.substring(1));
        else
            alert('Invalid response');
    }

    alert('Too many invalid responses, using random response');
    return getComputerChoice();
}

function playGame(rounds = 5) {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice)
            alert(`Tie, ${computerChoice} and ${humanChoice}`);
        else if (computerChoice == 'Rock' && humanChoice == 'Scissors' ||
                computerChoice == 'Paper' && humanChoice == 'Rock' ||
                computerChoice == 'Scissors' && humanChoice == 'Paper') {
            alert(`You lose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            alert(`You win, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    for (let i = 1; i <= rounds; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(i);
        playRound(computerChoice, humanChoice);
    }

    if (humanScore === computerScore)
        alert(`Tie game, ${humanScore} to ${computerScore}`);
    else if (humanScore > computerScore)
        alert(`You win, ${humanScore} to ${computerScore}, good game!`);
    else
        alert(`You lose, ${humanScore} to ${computerScore}, better luck next time...`);
}

playGame();