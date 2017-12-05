const Ability = require('../models/ability')

const controller = {}

controller.getAbilities = function(req, res, next) {
  Ability.findAll({})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.getAbilitiesByChampion = function(req, res, next) {
  Ability.findOne({
      where: { champion_id: req.params.champion_id }
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = controller
