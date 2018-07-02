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

const viewGameHistorySuccess = function (data) {
  $('#message').text('Accessed game history successfully!')
  $('#message').css('background-color', 'green')
  console.log('gameHistorySuccess ran. Data is :', data)
}

const viewGameHistoryFailure = function (error) {
  $('#message').text('Error on game history access attempt')
  $('#message').css('background-color', 'red')
  console.log('gameHistoryFailure ran. Error is :', error)
}

const showOldGameSuccess = function (data) {
  $('#message').text('Accessed old game successfully!')
  $('#message').css('background-color', 'green')
  console.log('showOldGameSuccess ran. Data is :', data)
}

const showOldGameFailure = function (error) {
  $('#message').text('Error on show old game attempt')
  $('#message').css('background-color', 'red')
  console.log('showOldGameFailure ran. Error is :', error)
}

const viewCurrentGamesSuccess = function (data) {
  $('#message').text('Accessed current games successfully!')
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
  viewGameHistorySuccess,
  viewGameHistoryFailure,
  showOldGameSuccess,
  showOldGameFailure,
  viewCurrentGamesSuccess,
  viewCurrentGamesFailure
}
