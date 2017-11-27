const api = module.exports = require('express').Router()
const battlerites = require('./battlerites');
const loadouts = require('./loadouts');

api.use('/battlerites', battlerites)
  .use('/loadouts', loadouts)

api.use((req, res) => res.status(404).end())
