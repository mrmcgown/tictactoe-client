'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game-api/game-events')
const authEvents = require('./auth/events')
// const markBoard = require('./board.js')
// const newGameButton = require('./newgame.js')

$(() => {
  gameEvents.addHandlers()
  authEvents.addHandlers()
  $('#gameElements, #sign-out, #changePassButton, #view-finished-games, #view-current-games').hide()
})
