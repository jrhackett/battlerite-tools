'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js')

const Loadout = db.define('loadouts', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Loadout
