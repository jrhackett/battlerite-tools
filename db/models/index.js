'use strict';

const Battlerite = require('./battlerite')
const Loadout = require('./loadout')

Loadout.hasMany(Battlerite)
Battlerite.belongsTo(Loadout)

module.exports = {Loadout, Battlerite};
