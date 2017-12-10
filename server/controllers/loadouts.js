const Loadout = require('../models/loadout')
const Battlerite = require('../models/battlerite')
const uuidv4 = require('uuid/v4')

const controller = {}

controller.getLoadouts = function(req, res) {
  Loadout.findAll({
    include: [Battlerite]
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

controller.getLoadoutById = function(req, res) {
  Loadout.findOne({
    where: { id: req.params.id },
    include: [Battlerite]
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

controller.createLoadout = function(req, res) {
  const buildString = req.body.build.sort().reduce((acc, i) => acc += `${ i }-`).slice(0, -1)

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
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = controller
