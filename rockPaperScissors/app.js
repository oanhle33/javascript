const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
        return userInput;
    return 'Error!';
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0)
        return 'rock';
    else if (randomNumber === 1)
        return 'paper';
    return 'scissors';
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb')
        return 'The user won.'
    if (userChoice === computerChoice)
        return 'The game was a tie.';
    else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper')
                return 'The comoputer won.';
            return 'The user won.';
        } else if (userChoice === 'paper') {
            if (computerChoice === 'scissors')
                return 'The comoputer won.';
            return 'The user won.';
        } else {
            if (computerChoice === 'rock')
                return 'The comoputer won.';
            return 'The user won.';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    console.log('You threw: ' + userChoice);
    const computerChoice = getComputerChoice();
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();