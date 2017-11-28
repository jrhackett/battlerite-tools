const Loadout = require('./loadout')
const Battlerite = require('./battlerite')

Loadout.hasMany(Battlerite)

module.exports = { Loadout, Battlerite }
