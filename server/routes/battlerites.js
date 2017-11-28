const db = require('../../db')
const Battlerite = require('../models/battlerite')

const router = require('express').Router()

const controllers = {
  battlerites: require('../controllers/battlerites')
}

router.get('/', function(req, res, next) {
  controllers.battlerites.getBattlerites(req, res, next)
})

router.get('/:id', function(req, res, next) {
  controllers.battlerites.getBattleriteById(req, res, next)
})

module.exports = router
