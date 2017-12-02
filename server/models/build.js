const Sequelize = require('sequelize')
const db = require('../../db')

const Build = db.define('builds', {
  name: {
    uuid: Sequelize.UUID,
    allowNull: false
  }
})

module.exports = Build