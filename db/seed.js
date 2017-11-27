const db = require('../db')

const seedBattlerites = () => db.Promise.map([
  { name: 'Test Battlerite', description: 'Fedora with a feather' }
], battlerite => db.model('battlerites').create(battlerite));

const seedLoadouts = () => db.Promise.map([
  { name: 'Test Loadout', description: 'Fedora with a feather' }
], loadout => db.model('loadouts').create(loadout));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedBattlerites)
   .then(battlerites => console.log(`Seeded ${battlerites.length} battlerites OK`))
   .then(seedLoadouts)
   .then(loadouts => console.log(`Seeded ${loadouts.length} loadouts OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
