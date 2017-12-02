const Loadout = require('./loadout')
const Battlerite = require('./battlerite')
const Champion = require('./champion')
const Build = require('./build')

Build.hasMany(Battlerite)
Champion.hasMany(Battlerite)

Loadout.hasOne(Build)


Battlerite.belongsTo(Champion)
Loadout.belongsTo(Champion)

module.exports = { Loadout, Battlerite }
