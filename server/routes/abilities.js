const db = require('../../db')

const router = require('express').Router()

const controllers = {
  abilities: require('../controllers/abilities')
}

router.get('/', function(req, res) {
  controllers.abilities.getAbilities(req, res)
})

module.exports = router
