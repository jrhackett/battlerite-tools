const Sequelize = require('sequelize')
const db = require('../../db')

const Build = db.define('builds', {
  uuid: {
    type: Sequelize.UUID,
  	defaultValue: Sequelize.UUIDV4,
  	primaryKey: true
  },
  build: {
  	type: Sequelize.ARRAY(Sequelize.UUID),
  }
})

module.exports = Build