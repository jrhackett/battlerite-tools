const db = require('../db')
const champions = require('./seed_data/champions')
const loadouts = require('./seed_data/loadouts')
const battlerites = require('./seed_data/battlerites')

const seedChampions = () => db.Promise.map(champions, champion => db.model('champions').create(champion))

const seedLoadouts = () => db.Promise.map(loadouts, loadout => db.model('loadouts').create(loadout))

const seedBattlerites = () => db.Promise.map(battlerites, battlerite => db.model('battlerites').create(battlerite))

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedChampions)
   .then(champions => console.log(`Seeded ${ champions.length } champions OK`))
   .then(seedLoadouts)
   .then(loadouts => console.log(`Seeded ${ loadouts.length } loadouts OK`))
   .then(seedBattlerites)
   .then(battlerites => console.log(`Seeded ${ battlerites.length } battlerites OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
