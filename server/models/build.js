const Sequelize = require('sequelize')
const db = require('../../db')

const Build = db.define('builds', {
  name: {
    uuid: Sequelize.UUID,
    allowNull: false
  },
  build: {
  	type: Sequelize.ARRAY(Sequelize.UUID),
  }
})

module.exports = Build