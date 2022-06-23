let player1Score = 0
let player2Score = 0
let player1Turn = true

const message = document.querySelector('#message')
const player1Dice = document.querySelector('#player1Dice')
const player2Dice = document.querySelector('#player2Dice')
const score1Board = document.querySelector('#player1Scoreboard')
const score2Board = document.querySelector('#player2Scoreboard')
const rollBtn = document.querySelector('#rollBtn')
const resetBtn = document.querySelector('#resetBtn')

function showDisplay() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function reset() {
    message.textContent = "Player 1 Turn"
    score1Board.textContent = 0
    score2Board.textContent = 0
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Turn = true
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')

}

resetBtn.addEventListener('click', reset)


rollBtn.addEventListener('click', function() {
    const randomNumb = Math.floor(Math.random() * 6) + 1

if (player1Turn) {
    player1Score += randomNumb
    score1Board.textContent = player1Score
    player1Dice.innerHTML = `<img class="img" src="images/${randomNumb}.png">`
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
    message.textContent = "Player 2 Turn"

} else {
    player2Score += randomNumb
    score2Board.textContent = player2Score
    player2Dice.innerHTML = `<img class="img" src="images/${randomNumb}.png">`
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    message.textContent = "Player 1 Turn"

}
// if (player1Turn) {
//     player1Turn = false
// } else {
//     player1Turn = true
// }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        showDisplay()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🥳"
        showDisplay()      
    }

    player1Turn = !player1Turn

})


