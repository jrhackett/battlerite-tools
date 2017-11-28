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
      where: { id:req.params.id },
      include: [Battlerite]
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = controller
