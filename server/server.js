const express = require('express')
const app = require('./app')
const PORT = process.env.NODE_ENV === 'test' ? process.env.SERVER_TEST_PORT : process.env.SERVER_PORT

app.listen(PORT, () => {
  console.log(`App listening on port ${ PORT }!`)
})

module.exports = app
