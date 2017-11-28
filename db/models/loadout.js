'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js')

const Loadout = db.define('loadouts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Loadout
