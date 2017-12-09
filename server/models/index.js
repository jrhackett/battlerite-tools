const Loadout = require('./loadout')
const Battlerite = require('./battlerite')
const Champion = require('./champion')
const Ability = require('./ability')

Champion.hasMany(Battlerite)
Champion.hasMany(Ability)

Battlerite.belongsTo(Champion) 
Loadout.hasOne(Champion)
Ability.belongsTo(Champion)

module.exports = { Loadout, Battlerite, Champion, Ability }
