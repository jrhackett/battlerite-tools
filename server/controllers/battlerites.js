const Battlerite = require('../models/battlerite')

const controller = {}

controller.getBattlerites = function(req, res, next) {
  if( req.query ){
    const query = { ...Object.keys(req.query.map(key => {key: query[key]} ) ) }
        Battlerite.findAll({
          where: query
        })
        .then(result => {
          res.status(200).send(result)
        })
        .catch(next)
      }
  else {
    Battlerite.findAll({})
        .then(result => {
          res.status(200).send(result)
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
