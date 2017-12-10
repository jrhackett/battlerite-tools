const Ability = require('../models/ability')

const controller = {}

controller.getAbilities = function(req, res) {
  Ability.findAll({
    where: req.query
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = controller
