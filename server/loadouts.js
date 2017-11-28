'use strict';

const router = require('express').Router()
const Loadout = require('../db/models/loadout')
const Battlerite = require('../db/models/battlerite')

router.get('/', function(req, res, next) {
  Loadout.findAll({
    include: [Battlerite]
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(next)
});

router.get('/:id', function(req, res, next) {
  Loadout.findOne({
    where:{id:req.params.id},
    include: [Battlerite]
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(next)
})

module.exports = router
