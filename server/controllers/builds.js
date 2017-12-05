const Build = require('../models/Build')

const controller = {}

controller.getBuilds = function(req, res, next) {
  Build.findAll({})
    .then(results => {
      res.status(200).send(results)
    })
    .catch(next)
}

controller.findOrCreateBuilds = function(build) {
  Build.findOne({
    where: {build: build}
  })
  .then(result => {
    return result.uuid
  })
  .catch(err => {
    Build.create(build)
    .then(result => {
      return result.uuid
    })
  })
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
