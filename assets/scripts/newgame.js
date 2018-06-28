'use strict'
const winner = require('./board.js')

const newGame = function () {
  $('#new-game').on('click', () => {
    $('#board td').text('')
    $('#message2').text("It's new-game time. Good luck!")
    winner()
  })
}

module.exports = newGame
