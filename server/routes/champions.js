const db = require('../../db')

const router = require('express').Router()

const controllers = {
  champions: require('../controllers/champions')
}

router.get('/', function(req, res) {
  controllers.champions.getChampions(req, res)
})

module.exports = router
