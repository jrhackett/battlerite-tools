const db = require('../../db')

const router = require('express').Router()

const controllers = {
  loadouts: require('../controllers/loadouts')
}

router.get('/', function(req, res) {
  controllers.loadouts.getLoadouts(req, res)
})

router.post('/', function(req, res) {
  controllers.loadouts.createLoadout(req, res)
})

router.put('/', function(req, res) {
  controllers.loadouts.updateLoadout(req, res)
})

router.delete('/', function(req, res) {
  controllers.loadouts.deleteLoadout(req, res)
})

module.exports = router
