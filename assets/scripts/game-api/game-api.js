'use strict'

const config = require('../config')
const store = require('../store')

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
