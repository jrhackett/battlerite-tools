const Battlerite = require('../models/battlerite')

const controller = {}

controller.getBattlerites = function(req, res) {
  const query = req.query ? { where: req.query } : {}
  Battlerite.findAll(query)
  .then(results => {
    res.status(200).send(results)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = controller
