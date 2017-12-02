const Build = require('../models/Build')

const controller = {}

controller.getBuilds = function(req, res, next) {
  Build.findAll({})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.getBuildById = function(req, res, next) {
  Build.findOne({
      where: { id: req.params.id }
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = controller
