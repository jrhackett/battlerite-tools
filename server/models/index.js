const Loadout = require('./loadout')
const Battlerite = require('./battlerite')
const Champion = require('./champion')
const Ability = require('./ability')

Loadout.hasMany(Battlerite)
Champion.hasMany(Battlerite)
Champion.hasMany(Ability)

Battlerite.belongsTo(Champion)
Loadout.belongsTo(Champion)
Ability.belongsTo(Champion)

module.exports = { Loadout, Battlerite, Ability, Champion }
