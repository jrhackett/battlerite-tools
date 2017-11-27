const db = require('../db')

const seedLoadouts = () => db.Promise.map([
  { name: 'Test Loadout', description: 'Fedora with a feather' }
], loadout => db.model('loadouts').create(loadout))

const seedBattlerites = () => db.Promise.map([
  { name: 'Test Battlerite', description: 'Fedora with a feather', loadout_id: 1 }
], battlerite => db.model('battlerites').create(battlerite))

 db.didSync
  .then(() => db.sync({force: true}))
  .then(seedLoadouts)
  .then(loadouts => console.log(`Seeded ${loadouts.length} loadouts OK`))
  .then(seedBattlerites)
  .then(battlerites => console.log(`Seeded ${battlerites.length} battlerites OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
