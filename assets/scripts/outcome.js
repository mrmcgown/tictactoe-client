'use strict'

const winner = function () {
  if ($('#0, #3, #6').text() === "XXX" || $('#1, #4, #7').text() === "XXX" || $('#2, #5, #8').text() === "XXX" || $('#0, #1, #2').text() === "XXX" || $('#3, #4, #5').text() === "XXX" || $('#6, #7, #8').text() === "XXX" || $('#0, #4, #8').text() === "XXX" || $('#2, #4, #6').text() === "XXX") {
    $('#message2').text('You win!')
  } else if ($('#0, #3, #6').text() === "OOO" || $('#1, #4, #7').text() === "OOO" || $('#2, #5, #8').text() === "OOO" || $('#0, #1, #2').text() === "OOO" || $('#3, #4, #5').text() === "OOO" || $('#6, #7, #8').text() === "OOO" || $('#0, #4, #8').text() === "OOO" || $('#2, #4, #6').text() === "OOO") {
    $('#message2').text('You lose!')
  }
}

module.exports = winner
