const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config()

const PORT = process.env.NODE_ENV === 'test' ? process.env.SERVER_TEST_PORT : process.env.SERVER_PORT

const app = express()

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '..', 'build')))

const routes = require('./routes')
app.use('/api', routes)

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`App listening on port ${ PORT }!`)
})

module.exports = app
