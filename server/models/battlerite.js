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
  b_id: {
    type: Sequelize.INTEGER,
    using: 'gin'
  }
})

module.exports = Battlerite
