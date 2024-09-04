let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#button')
const privousGuess = document.querySelector('.guesses')
const remaningGuess = document.querySelector('.lastResullt')
const result = document.querySelector('.result')
const resultShow = document.querySelector('.resultPara')

const p = document.createElement('p');
let arr = []
let count = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        
        valid(guess);
    })
}
function valid(guess){
    if(isNaN(guess)){
        alert(`Enter a Valid Number`)
    }
    else if(guess > 100){
        alert(`Enter a Number less than 100`)
    }
    else if (guess < 1){
        alert(`Enter a Number Greater than 0`)
    }
    else {
        arr.push(guess);
        if(count == 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess)
            cheak(guess)
        }
    }
}
function cheak(guess){
    if(guess === randomNumber) {
        displayMessage(`You Won!!`)
        endGame();
    }
    else if(guess > randomNumber){
        displayMessage(`Number is to Big`)
    }
    else if(guess < randomNumber){
        displayMessage(`Number is to Small`)
    }
}
function displayGuess(guess){
    userInput.value = '';
    privousGuess.innerHTML += `${guess}  `
    count ++;
    remaningGuess.innerHTML = `${11 - count}`

}
function displayMessage(message){
    result.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.valid = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`;
    resultShow.append(p)
    playGame = false;
    startGame();
}
function startGame(){
   const newGameButton =  document.querySelector('#newGame')
   newGameButton.addEventListener('click' , function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    arr = [];
    count = 1;
    privousGuess.innerHTML = ''
    remaningGuess.innerHTML = `${11 - count}`
    userInput.removeAttribute('disabled');
    resultShow.removeChild(p);
    playGame = true;
   })
}
