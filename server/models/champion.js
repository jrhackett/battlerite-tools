const Sequelize = require('sequelize')
const db = require('../../db')

const Champion = db.define('champions', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Champion
