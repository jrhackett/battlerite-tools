const api = require('express').Router()
const battlerites = require('./battlerites')
const loadouts = require('./loadouts')
const champions = require('./champions')
const abilities = require('./abilities')

api.use('/battlerites', battlerites)  
  .use('/loadouts', loadouts)
  .use('/champions', champions)
  .use('/abilities', abilities)
  .use((req, res) => {
    res.status(200).send({
      version: '0.0.1',
      game_version: '1.2.0'
    })
  })

module.exports = api
