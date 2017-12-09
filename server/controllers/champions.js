const Champion = require('../models/champion')

const controller = {}

controller.getChampions = function(req, res, next) {
  if( req.query ){
    Champion.findAll({
      where: req.query
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
  }
  else {
    Champion.findAll({})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
  }
}

controller.getChampionById = function(req, res, next) {
  Champion.findOne({
    where: { id: req.params.id }
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(next)
}

module.exports = controller
