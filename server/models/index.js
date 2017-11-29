const Loadout = require('./loadout')
const Battlerite = require('./battlerite')
const Champion = require('./champion')

Loadout.hasMany(Battlerite)
Champion.hasMany(Battlerite)

Battlerite.belongsTo(Champion)
Loadout.belongsTo(Champion)

module.exports = { Loadout, Battlerite }
