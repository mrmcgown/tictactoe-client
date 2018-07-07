'use strict'

const store = require('../store')

const newGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('Started a new game successfully!')
  $('#message').css('background-color', 'green')
  $('#board').show()
  console.log('newGameSuccess ran. Data is :', data)
}

const newGameFailure = function (error) {
  $('#message').text('Error on new game creation')
  $('#message').css('background-color', 'red')
  console.log('newGameFailure ran. Error is :', error)
}

const gameMoveSuccess = function (data) {
  $('#message').text('game move successful!')
  $('#message').css('background-color', 'green')
  console.log('gameMoveSuccess ran. Data is :', data)
}

const gameMoveFailure = function (error) {
  $('#message').text('Error on game move attempt')
  $('#message').css('background-color', 'red')
  console.log('gameMoveFailure ran. Error is :', error)
}

const viewFinishedGamesSuccess = function (data) {
  $('#message').text('Accessed game history successfully!')
  for (let index = 0; index < data.games.length; index++) {
    $('#message3').append(`<p>Game ${data.games[index].id} | Cells --> ${JSON.stringify(data.games[index].cells)}</p>`)
  }
  $('#message').css('background-color', 'green')
  console.log('viewFinishedGamesSuccess ran. Data is :', data)
}

const viewFinishedGamesFailure = function (error) {
  $('#message').text('Error on view finished games attempt')
  $('#message').css('background-color', 'red')
  console.log('viewFinishedGamesFailure ran. Error is :', error)
}

const viewCurrentGamesSuccess = function (data) {
  $('#message').text('Accessed current games successfully!')
  for (let index = 0; index < data.games.length; index++) {
    $('#message4').append(`<p>Game ${data.games[index].id} | Cells --> ${JSON.stringify(data.games[index].cells)}</p>`)
  }
  $('#message').css('background-color', 'green')
  console.log('viewCurrentGamesSuccess ran. Data is :', data)
}

const viewCurrentGamesFailure = function (error) {
  $('#message').text('Error accessing current games')
  $('#message').css('background-color', 'red')
  console.log('viewCurrentGamesFailure ran. Error is :', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameMoveSuccess,
  gameMoveFailure,
  viewFinishedGamesSuccess,
  viewFinishedGamesFailure,
  viewCurrentGamesSuccess,
  viewCurrentGamesFailure
}
