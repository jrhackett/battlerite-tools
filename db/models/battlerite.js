'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js')

const Battlerite = db.define('battlerites', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Battlerite
