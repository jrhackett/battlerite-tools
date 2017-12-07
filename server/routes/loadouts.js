const db = require('../../db')

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

router.post('/', function(req, res, next) {
  controllers.loadouts.createLoadouts(req, res, next)
})

module.exports = router
