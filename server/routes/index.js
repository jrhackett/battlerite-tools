const api = require('express').Router()
const battlerites = require('./battlerites')
const loadouts = require('./loadouts')
const champions = require('./champions')
const abilities = require('./abilities')

api.use('/battlerites', battlerites)  
  .use('/loadouts', loadouts)
  .use('/champions', champions)
  .use('/abilities', abilities)
  .use((req, res) => res.status(404).end())

module.exports = api
