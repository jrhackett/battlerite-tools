const Sequelize = require('sequelize')
const db = require('../../db')

const Ability = db.define('abilities', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sub_description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Ability
