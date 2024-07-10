let secretNumber = generateRandomNumber()
console.log(`Secret number: ${secretNumber}`)
let tries = 1

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

    let triesWord = tries > 1 ? 'tries' : 'try'
    let successMessage = `You guessed the secret number with ${tries} ${triesWord}!`
    showTextOnScreen('p', successMessage)
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
    tries++
  }
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1)
}
