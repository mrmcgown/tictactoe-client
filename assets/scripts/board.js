'use strict'

const winner = require('./outcome.js')

const board = function () {
  let boolstuff = false
  $('#board td').on('click', (event) => {
    if (event.target.innerText === '') {
      boolstuff = !boolstuff
      if (boolstuff) {
        event.target.innerText = 'X'
      } else {
        event.target.innerText = 'O'
      }
    } winner()
  })
}

module.exports = board
