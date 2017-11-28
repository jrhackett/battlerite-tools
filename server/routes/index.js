const api = require('express').Router()
const battlerites = require('./battlerites')
const loadouts = require('./loadouts')

api.use('/battlerites', battlerites)  
  .use('/loadouts', loadouts)
  .use((req, res) => res.status(404).end())

module.exports = api
