const db = require('../../db')

const router = require('express').Router()

const controllers = {
  loadouts: require('../controllers/loadouts'),
  builds: require('../controllers/builds')
}

router.get('/', function(req, res, next) {
  controllers.loadouts.getLoadouts(req, res, next)
})

router.get('/:id', function(req, res, next) {
  controllers.loadouts.getLoadoutById(req, res, next)
})

router.post('/', function(req, res, next) {
console.log("before\n")
	let p1 = new Promise(
		(resolve, reject) => {
			resolve(controllers.builds.findOrCreateBuilds(req.body.build))
		})
	p1.then( build_id => {
			controllers.loadouts.createLoadouts(req, res, next, build_id)
		})
})

module.exports = router
