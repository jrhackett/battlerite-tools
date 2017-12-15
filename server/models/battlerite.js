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
  	type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  b_id: {
    type: Sequelize.INTEGER,
    using: 'gin'
  }
})

module.exports = Battlerite
