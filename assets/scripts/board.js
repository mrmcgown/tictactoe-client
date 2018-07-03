'use strict'

const winner = require('./outcome.js')
//const api = require('./game-api')

const boardArray = ["", "", "", "", "", "", "", "", ""]

// const boardIndex = $('#board td')

const board = function () {
  let boolstuff = false
  $('#board td').on('click', (event) => {
    if (event.target.innerText === '') {
      boolstuff = !boolstuff
      if (boolstuff) {
        event.target.innerText = 'X'
        boardArray.splice(event.target.dataset.cellIndex, 1, "x")
        console.log(boardArray)
        //api.gameMove(boardArray)
      } else {
        event.target.innerText = 'O'
        boardArray.splice(event.target.dataset.cellIndex, 1, "o")
        console.log(boardArray)
        //api.gameMove(boardArray)
      }
    } winner()
  })
}

//module.exports = board
