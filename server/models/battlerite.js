const Sequelize = require('sequelize')
const db = require('../../db')

const Battlerite = db.define('battlerites', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  version: {
  	type: Sequelize.STRING
  },
  uuid: {
  	type: Sequelize.UUID
  }
})

module.exports = Battlerite
