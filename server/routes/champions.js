const db = require('../../db')

const router = require('express').Router()

const controllers = {
  champions: require('../controllers/champions')
}

router.get('/', function(req, res, next) {
  controllers.champions.getChampions(req, res, next)
})

router.get('/:id', function(req, res, next) {
  controllers.champions.getChampionById(req, res, next)
})

module.exports = router
