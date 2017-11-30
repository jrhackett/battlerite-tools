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
  uuid: {
  	Sequelize.UUID,
  	allowNull: false
  }
})

module.exports = Battlerite
