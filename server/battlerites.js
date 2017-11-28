'use strict';

const db = require('../db') //this is required
const Battlerite = require('../db/models/battlerite')

const router = require('express').Router()

router.get('/', function(req, res, next) {
  Battlerite.findAll({})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Battlerite.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router
