'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./game-api')
const ui = require('./game-ui')

let boolstuff
let gameOver = false
const winner = function () {
  if ($('#0, #3, #6').text() === "XXX" || $('#1, #4, #7').text() === "XXX" || $('#2, #5, #8').text() === "XXX" || $('#0, #1, #2').text() === "XXX" || $('#3, #4, #5').text() === "XXX" || $('#6, #7, #8').text() === "XXX" || $('#0, #4, #8').text() === "XXX" || $('#2, #4, #6').text() === "XXX") {
    gameOver = true
    $('#message2').text("Your 'toe game is on fleek! X wins!")
    $('#board td').off('click')
  } else if ($('#0, #3, #6').text() === "OOO" || $('#1, #4, #7').text() === "OOO" || $('#2, #5, #8').text() === "OOO" || $('#0, #1, #2').text() === "OOO" || $('#3, #4, #5').text() === "OOO" || $('#6, #7, #8').text() === "OOO" || $('#0, #4, #8').text() === "OOO" || $('#2, #4, #6').text() === "OOO") {
    gameOver = true
    $('#message2').text('Oh boy, O wins!')
    $('#board td').off('click')
  } else if (($('#0').text() !== "" && $('#1').text() !== "" && $('#2').text() !== "" && $('#3').text() !== "" && $('#4').text() !== "" && $('#5').text() !== "" && $('#6').text() !== "" && $('#7').text() !== "" && $('#8').text() !== "")) {
    gameOver = true
    $('#message2').text("Aw nah, it's a draw!")
  }
}

let gameMovePatch = {
  "game": {
    "cell": {
      "index": "",
      "value": ""
    },
    "over": false
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  console.log('new game started')

  $('#board td').text('')
  $('#board td').on('click', onGameMove)
  $('#message2').text("It's new-game time. X goes first. Good luck!")
  gameOver = false
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  boolstuff = false
}

const onGameMove = function (event) {
  event.preventDefault()
  console.log(gameOver)
  if (event.target.innerText === '') {
    boolstuff = !boolstuff
    if (boolstuff) {
      event.target.innerText = 'X'
      gameMovePatch.game.cell.index = event.target.dataset.cellIndex
      gameMovePatch.game.cell.value = "x"
      $('#message2').text("O's turn. Go O, go!")
      winner()
      if (gameOver === true) {
        gameMovePatch.game.over = true
        console.log(gameMovePatch)
      }
      api.gameMove(gameMovePatch)
        .then(ui.gameMoveSuccess)
        .catch(ui.gameMoveFailure)
    } else {
      event.target.innerText = 'O'
      gameMovePatch.game.cell.index = event.target.dataset.cellIndex
      gameMovePatch.game.cell.value = "o"
      $('#message2').text("X's turn. Don't mess this up!")
      winner()
      if (gameOver === true) {
        gameMovePatch.game.over = true
        console.log(gameMovePatch)
      }
      api.gameMove(gameMovePatch)
        .then(ui.gameMoveSuccess)
        .catch(ui.gameMoveFailure)
    }
  }
}

const onViewFinishedGames = function (event) {
  event.preventDefault()
  console.log('view finished games ran')

  api.viewFinishedGames()
    .then(ui.viewFinishedGamesSuccess)
    .catch(ui.viewFinishedGamesFailure)
}

const onViewCurrentGames = function (event) {
  event.preventDefault()
  console.log('view current games ran')

  api.viewCurrentGames()
    .then(ui.viewCurrentGamesSuccess)
    .catch(ui.viewCurrentGamesFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
  $('#board td').on('click', onGameMove)
  $('#view-finished-games').on('click', onViewFinishedGames)
  $('#view-current-games').on('click', onViewCurrentGames)
}

module.exports = {
  addHandlers,
  onNewGame
}
