'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'green')
  $('#signUp').modal('hide')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'green')
  $('#sign-out, #changePassButton, #gameElements, #view-finished-games, #view-current-games').show()
  $('#message2').text('Click New Game to begin playing.').fadeIn()
  $('#signUpButton, #signInButton').hide()
  $('#signIn').modal('hide')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'green')
  $('#sign-out, #changePassButton, #gameElements, #view-finished-games, #view-current-games').hide()
  $('#signUpButton, #signInButton').show()
  console.log('signOutSuccess ran. Data is :')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out').show().delay(2000).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
