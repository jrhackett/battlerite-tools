const Champion = require('../models/champion')

const controller = {}

controller.getChampions = function(req, res) {
  if( req.query ){
    Champion.findAll({
      where: req.query
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
  else {
    Champion.findAll({})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}

controller.getChampionById = function(req, res) {
  Champion.findOne({
    where: { id: req.params.id }
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = controller
