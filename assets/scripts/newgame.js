'use strict'

const newGame = function () {
  $('#new-game').on('click', () => {
    $('#board td').text('')
    $('#message2').text('')
  })
}

module.exports = newGame
