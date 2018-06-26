'use strict'

const winner = function () {
  if ($('#0, #3, #6').text() === "XXX" || $('#1, #4, #7').text() === "XXX" || $('#2, #5, #8').text() === "XXX" || $('#0, #1, #2').text() === "XXX" || $('#3, #4, #5').text() === "XXX" || $('#6, #7, #8').text() === "XXX" || $('#0, #4, #8').text() === "XXX" || $('#2, #4, #6').text() === "XXX") {
    $('#message2').text('X wins!')
    //$('#rubyJesus').attr('src', 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/12301686_10105042560430320_7821927534870385159_n.jpg?_nc_cat=0&oh=12aa5e92482fbe7b7fa464b9ebc823c7&oe=5BE493E5')
  } else if ($('#0, #3, #6').text() === "OOO" || $('#1, #4, #7').text() === "OOO" || $('#2, #5, #8').text() === "OOO" || $('#0, #1, #2').text() === "OOO" || $('#3, #4, #5').text() === "OOO" || $('#6, #7, #8').text() === "OOO" || $('#0, #4, #8').text() === "OOO" || $('#2, #4, #6').text() === "OOO") {
    $('#message2').text('O wins!')
  }
}

module.exports = winner
