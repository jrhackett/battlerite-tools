const db = require('../../db')
const Loadout = require('../../db/models/loadout')

const router = require('express').Router()

const controllers = {
  loadouts: require('../controllers/loadouts')
}

router.get('/', function(req, res, next) {
  controllers.loadouts.getLoadouts(req, res, next)
})

router.get('/:id', function(req, res, next) {
  controllers.loadouts.getLoadoutById(req, res, next)
})

module.exports = router

