'use strict'

const store = require('../store')

const newGameSuccess = function (data) {
  $('#message').text('Started a new game successfully!')
  $('#message').css('background-color', 'green')
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

const gameHistorySuccess = function (data) {
  $('#message').text('Accessed game history successfully!')
  $('#message').css('background-color', 'green')
  console.log('gameHistorySuccess ran. Data is :', data)
}

const gameHistoryFailure = function (error) {
  $('#message').text('Error on game history access attempt')
  $('#message').css('background-color', 'red')
  console.log('gameHistoryFailure ran. Error is :', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameMoveSuccess,
  gameMoveFailure,
  gameHistorySuccess,
  gameHistoryFailure
}
