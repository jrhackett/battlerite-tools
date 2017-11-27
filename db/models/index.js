'use strict' 

const Loadout = require('./loadout')
const Battlerite = require('./battlerite')

Loadout.hasMany(Battlerite, { as: 'battlerites' })

module.exports = { Battlerite, Loadout }
