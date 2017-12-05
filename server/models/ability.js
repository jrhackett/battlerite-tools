const Sequelize = require('sequelize')
const db = require('../../db')

const Ability = db.define('battlerites', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Ability
