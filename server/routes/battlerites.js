const db = require('../../db')

const router = require('express').Router()

const controllers = {
  battlerites: require('../controllers/battlerites')
}

router.get('/', function(req, res) {
  controllers.battlerites.getBattlerites(req, res)
})

router.get('/:id', function(req, res) {
  controllers.battlerites.getBattleriteById(req, res)
})

module.exports = router
