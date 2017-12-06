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
  return new Promise( (resolve, reject) => {
    Build.findOne({
      where: {build: build}
    })
    .then(result => {
      resolve(result.uuid)
    })
    .catch(err => {
      Build.create( build)
      .then(result => {
        resolve(result.uuid)
      })
    })
    reject("Unable to find or create build with given build. ")
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