const Battlerite = require('../models/battlerite')

const controller = {}

controller.getBattlerites = function(req, res) {
  if( req.query ){
    Battlerite.findAll({
      where: req.query
    })
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
  else {
    Battlerite.findAll({})
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}

controller.getBattleriteById = function(req, res) {
  Battlerite.findOne({
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
