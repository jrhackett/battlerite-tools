const Sequelize = require('sequelize')
const db = require('../../db')

const Loadout = db.define('loadouts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  uuid: {
  	type: Sequelize.UUID
  }
})

module.exports = Loadout
