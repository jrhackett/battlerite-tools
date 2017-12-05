const Loadout = require('../models/loadout')
const Battlerite = require('../models/battlerite')

const controller = {}

controller.getLoadouts = function(req, res, next) {
  Loadout.findAll({
      include: [Battlerite]
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.getLoadoutById = function(req, res, next) {
  Loadout.findOne({
      where: { id: req.params.id },
      include: [Battlerite]
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.createLoadouts = function(req, res, next, build_id) {
  const validAttributes = { ...req.body }
  delete validAttributes['build']
  validAttributes.build_id = build_id

  console.log("validAttributes: %j", validAttributes)
  
  Loadout.create(validAttributes)
  .then(results => {
    res.status(200).send(results)
  })
}

module.exports = controller
