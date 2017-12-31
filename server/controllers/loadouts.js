const Loadout = require('../models/loadout')
const Battlerite = require('../models/battlerite')
const uuidv4 = require('uuid/v4')
const helpers = require('../helpers')

const controller = {}

controller.getLoadouts = function(req, res) {
  const query = helpers.queryToParams(req.query)
  Loadout.findAll(query)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

controller.createLoadout = function(req, res) {
  Loadout.findCreateFind({
      where: {
        name: req.body.name,
        build: req.body.build.sort((a, b) => a - b).join('-'),
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

controller.updateLoadout = function(req, res) {
  // TODO filter out values in req.body that shouldn't be there, especially uuid
  Loadout.update(req.body, { where: { uuid: req.body.uuid } })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

controller.deleteLoadout = function(req, res) {
  Loadout.destroy({
      where: { uuid: req.body.uuid }
    })
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = controller
