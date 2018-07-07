'use strict'

const config = require('../config')
const store = require('../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const gameMove = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const viewFinishedGames = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const viewCurrentGames = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games?over=false',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showOldGame = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newGame,
  gameMove,
  viewFinishedGames,
  viewCurrentGames,
  showOldGame
}
