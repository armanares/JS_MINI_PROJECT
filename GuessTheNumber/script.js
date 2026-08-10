
let randomNumber = Math.floor(Math.random()*(75 - 1 + 1) + 1);

const form = document.querySelector('form')

const submit = document.querySelector('#submitGuess')
const userInput  = document.querySelector('#guessFeild')
const guessSlot = document.querySelector('.guesses')
const remGuesses = document.querySelector('.remainingGuesses')
const startOver = document.querySelector('.resultParas')
const lowOrHigh = document.querySelector('.lowOrHi')

let p = document.createElement('p');


let prevGuess = []
let numGuess = 0 ;
 
let playGame = true;

if(playGame) {
  //submit.addEventListener() both are correct
  submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    
    validateGuess(guess);
  })
}

function validateGuess(guess) {
    if(isNaN(guess) || guess < 1 || guess > 75) {
      alert('please enter valid number')  
    } 
    else {
      prevGuess.push(guess)
      displayGuess(guess)
      if(numGuess === 10) {
        displayMessage(`GAME OVER ! random number was ${randomNumber}`)
        endGame();
      }else {
        checkGuess(guess)
      }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
      displayMessage(` yooooo !!  your guessed  it right ! 🏆`)
      endGame();
    }
    else if( guess < randomNumber) {
      displayMessage(` your guess in tooo LOW  `)
    }
    else if( guess > randomNumber) {
      displayMessage(` your guess in tooo HIGH`)
    }
}


function displayGuess(guess) {
   numGuess++;
   userInput.value = ''
   guessSlot.innerHTML +=`${ guess}  `
   remGuesses.innerHTML=`${10 - numGuess}`

}

function displayMessage(msg) {
    lowOrHigh.innerHTML =`${msg}`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled' , '')
  document.querySelector('p')
  p.innerHTML =`<h2 id="newGame" >START NEW GAME</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame() {
  
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , (e) => {

  randomNumber = Math.floor(Math.random()*(75 - 1 + 1) + 1);

  prevGuess = []
  numGuess = 0
  remGuesses.innerHTML=`${10 - numGuess}`
  guessSlot.innerHTML ='' 
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true
  })
}



