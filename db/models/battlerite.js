'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Battlerite = db.define('battlerites', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Battlerite;
