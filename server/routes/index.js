const api = require('express').Router()
const battlerites = require('./battlerites')
const loadouts = require('./loadouts')
const champions = require('./champions')

api.use('/battlerites', battlerites)  
  .use('/loadouts', loadouts)
  .use('/champions', champions)
  .use((req, res) => res.status(404).end())

module.exports = api
