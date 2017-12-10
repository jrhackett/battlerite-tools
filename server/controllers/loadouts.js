const Loadout = require('../models/loadout')
const Battlerite = require('../models/battlerite')
const uuidv4 = require('uuid/v4')

const controller = {}

controller.getLoadouts = function(req, res, next) {
  Loadout.findAll({
      include: [Battlerite]
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.getLoadoutById = function(req, res, next) {
  Loadout.findOne({
      where: { id: req.params.id },
      include: [Battlerite]
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(next)
}

controller.createLoadout = function(req, res, next) {
  let buildString = req.body.build.sort().reduce((acc, i) => acc += `${ i }-`)
  buildString = buildString.slice(0, -1)

  Loadout.findOrCreate({
    where: {
      name: req.body.name,
      build: buildString,
      champion_id: req.body.champion_id
    }
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(next)

}

module.exports = controller
