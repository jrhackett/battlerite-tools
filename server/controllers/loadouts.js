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

controller.createLoadouts = function(req, res, next) {
  const sortedArray = req.body.build.sort()
  let buildString = ""
  sortedArray.map(num=>buildString+=(num+"-"))
  buildString=buildString.slice(0,-1)

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
