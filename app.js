let secretNumber = generateRandomNumber()
console.log(`Secret number: ${secretNumber}`)

// function  to update tag text on HTML
function showTextOnScreen(tag, text) {
  let field = document.querySelector(tag)
  field.innerHTML = text
}

showTextOnScreen('h1', 'SECRET NUMBER GAME')
showTextOnScreen('p', 'Pick a number between 1 and 10')

// function to check if guess is correct and show response
function checkGuess() {
  let guess = document.querySelector('input').value

  // case guess is correct, show response
  if(guess == secretNumber) {
    showTextOnScreen('h1', 'Guess correct!')
    showTextOnScreen('p', 'You guessed the secret number!')
  }

  // case guess is not correct, show hints to user
  else {
    // case guess is greater than the secret number
    if(guess > secretNumber) {
      showTextOnScreen('p', 'The secret number is less than your guess.')
    }

    // case guess is less than the secret number
    else {
      showTextOnScreen('p', 'The secret number is greater than your guess.')
    }
  }
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1)
}
