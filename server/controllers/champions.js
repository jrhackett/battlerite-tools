const sequelize = require('sequelize')
const Champion = require('../models/champion')

const controller = {}

controller.getChampions = function(req, res) {
  let params = {
    order: sequelize.col('name')
  }

  if(req.query)
    params = { ...params, where: req.query }

  Champion.findAll(params)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = controller
