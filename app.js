let secretNumber = generateRandomNumber()
function showTextoOnScreen(tag, text) {
  let field = document.querySelector(tag)
  field.innerHTML = text
}

showTextoOnScreen('h1', 'SECRET NUMBER GAME')
showTextoOnScreen('p', 'Pick a number between 1 and 10')

function checkGuess() {
  console.log('Guess button pressed')
  console.log(`Secret number: ${secretNumber}`)
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1)
}
