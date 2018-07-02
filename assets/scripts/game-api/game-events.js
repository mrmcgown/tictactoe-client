'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./game-api')
const ui = require('./game-ui')

// const onCreateBook = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   booksApi.create(data)
//     .then(booksUi.onCreateSuccess)
//     .catch(booksUi.onError)
// }

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

// const onUpdateBook = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const book = data.book
//   if (book.title === '') {
//     // alert('title required')
//     $('#content').html('<p>Title is required</p>')
//     $('#content').css('background-color', 'red')
//     return false
//   }
// }

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

const onViewGameHistory = function (event) {
  event.preventDefault()
  console.log('game history ran')

  const data = getFormFields(this)

  api.viewGameHistory(data)
    .then(ui.viewGameHistorySuccess)
    .catch(ui.viewGameHistoryFailure)
}

const onViewCurrentGames = function (event) {
  event.preventDefault()
  console.log('game history ran')

  const data = getFormFields(this)

  api.viewCurrentGames(data)
    .then(ui.viewCurrentGamesSuccess)
    .catch(ui.viewCurrentGamesFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
  $('#game-move').on('submit', onGameMove)
  $('#game-history').on('submit', onViewGameHistory)
  $('#view-current-games').on('submit', onViewCurrentGames)
}

module.exports = {
  addHandlers
}
