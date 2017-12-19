const sequelize = require('sequelize')
const Ability = require('../models/ability')

const controller = {}

controller.getAbilities = function(req, res) {
  let params = {
    order: sequelize.col('id')
  }

  if(req.query)
    params = { ...params, where: req.query }
  Ability.findAll(params)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = controller
