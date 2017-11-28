const Battlerite = require('../../db/models/battlerite')

const controller = {}

controller.getBattlerites = function(req, res, next) {
  Battlerite.findAll({})
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.getBattleriteById = function(req, res, next) {
  Battlerite.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
}

module.exports = controller
