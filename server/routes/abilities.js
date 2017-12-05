const db = require('../../db')

const router = require('express').Router()

const controllers = {
  abilities: require('../controllers/abilities')
}

router.get('/', function(req, res, next) {
  controllers.abilities.getAbilities(req, res, next)
})

router.get('/:id', function(req, res, next) {
  controllers.abilities.getAbilitiesByChampion(req, res, next)
})

module.exports = router
