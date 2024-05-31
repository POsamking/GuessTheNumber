let randomNumber = Math.floor(Math.random() * 2) + 1;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    let resultElement = document.getElementById('result');

    if(userGuess == randomNumber) {
        resultElement.style.color = 'green';
        resultElement.textContent = 'Congratulations! You guessed the number.';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Sorry, that\'  s not correct. Try again.';
    }
}

document.getElementById ('resetButton').addEventListener('click', function() {
resetGame();
});

function resetGame () {
    randomNumber = Math, floor(math.random()* 10)+1;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent ='';
}