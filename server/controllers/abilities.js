const Ability = require('../models/ability')

const controller = {}

controller.getAbilities = function(req, res) {
  const query = req.query ? { where: req.query } : {}
  Ability.findAll(query)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = controller
