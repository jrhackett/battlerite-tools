const Sequelize = require('sequelize')
const db = require('../../db')

const Loadout = db.define('loadouts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  owner: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  uuid: {
  	type: Sequelize.UUID
  },
  build: {
  	type: Sequelize.UUID
  }

})

module.exports = Loadout
