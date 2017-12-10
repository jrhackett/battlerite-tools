const db = require('../db')
const champions = require('./seed_data/champions')
const abilities = require('./seed_data/abilities')
const loadouts = require('./seed_data/loadouts')
const battlerites = require('./seed_data/battlerites')

const updateBattlerites = () => {
  let count = 1
  let change = 1
  battlerites.map(battlerite => {
    if(change !== battlerite.champion_id)
    {
      count = 1
      change = battlerite.champion_id
    }
    battlerite.b_id=count
    count += 1
  })
}

const seedChampions = () => db.Promise.map(champions, champion => db.model('champions').create(champion))

const seedAbilities = () => db.Promise.map(abilities, ability => db.model('abilities').create(ability))

const seedLoadouts = () => db.Promise.map(loadouts, loadout => db.model('loadouts').create(loadout))

const seedBattlerites = () => db.Promise.map(battlerites, battlerite => db.model('battlerites').create(battlerite))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedChampions)
  .then(champions => console.log(`Seeded ${ champions.length } champions OK`))
  .then(seedAbilities)
  .then(abilities => console.log(`Seeded ${ abilities.length } abilities OK`))
  .then(seedLoadouts)
  .then(loadouts => console.log(`Seeded ${ loadouts.length } loadouts OK`))
  .then(updateBattlerites)
  .then(seedBattlerites)
  .then(battlerites => console.log(`Seeded ${ battlerites.length } battlerites OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
