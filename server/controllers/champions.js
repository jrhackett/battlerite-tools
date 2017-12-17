const Champion = require('../models/champion')

const controller = {}

controller.getChampions = function(req, res) {
  const query = req.query ? { where: req.query } : {}
  Champion.findAll(query)
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = controller
