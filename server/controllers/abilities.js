const Ability = require('../models/ability')

const controller = {}

controller.getAbilities = function(req, res, next) {
  Ability.findAll({
      where: req.query
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

module.exports = controller
