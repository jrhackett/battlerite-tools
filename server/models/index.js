const Loadout = require('./loadout')
const Battlerite = require('./battlerite')
const Champion = require('./champion')

Champion.hasMany(Battlerite)

Battlerite.belongsTo(Champion) 
Loadout.hasOne(Champion)


module.exports = { Loadout, Battlerite, Champion }
