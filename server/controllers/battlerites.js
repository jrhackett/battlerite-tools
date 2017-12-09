const Battlerite = require('../models/battlerite')

const controller = {}

controller.getBattlerites = function(req, res, next) {
  if( req.query ){
    Battlerite.findAll({
      where: req.query
    })
    .then(results => {
      res.status(200).send(results)
    })
    .catch(next)
  }
  else {
    Battlerite.findAll({})
    .then(results => {
      res.status(200).send(results)
    })
    .catch(next)
  }
}

controller.getBattleriteById = function(req, res, next) {
  Battlerite.findOne({
    where: { id: req.params.id }
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(next)
}

module.exports = controller
