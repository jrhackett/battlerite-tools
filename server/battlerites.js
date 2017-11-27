'use strict';

module.exports = (app, config) => {

  const router = require('express').Router()
  const Battlerite = require('../db/models/battlerite')

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

};
