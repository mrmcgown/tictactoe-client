'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game-api/game-events')
const authEvents = require('./auth/events')

$(() => {
  gameEvents.addHandlers()
  authEvents.addHandlers()
})

//
