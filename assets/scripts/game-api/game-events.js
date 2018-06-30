'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./game-api')
const ui = require('./game-ui')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('new game started')

  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameMove = function (event) {
  event.preventDefault()
  console.log('game move ran')

  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  api.gameMove(data)
    .then(ui.gameMoveSuccess)
    .catch(ui.gameMoveFailure)
}

const onGameHistory = function (event) {
  event.preventDefault()
  console.log('game history ran')

  const data = getFormFields(this)

  api.gameHistory(data)
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
  $('#game-move').on('submit', onGameMove)
  $('#game-history').on('submit', onGameHistory)
}

module.exports = {
  addHandlers
}
