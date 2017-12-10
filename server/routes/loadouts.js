const db = require('../../db')

const router = require('express').Router()

const controllers = {
  loadouts: require('../controllers/loadouts')
}

router.get('/', function(req, res) {
  controllers.loadouts.getLoadouts(req, res)
})

router.get('/:id', function(req, res) {
  controllers.loadouts.getLoadoutById(req, res)
})

router.post('/', function(req, res) {
  controllers.loadouts.createLoadout(req, res)
})

module.exports = router
