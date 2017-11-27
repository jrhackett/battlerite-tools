'use strict';

module.exports = (app, config) => {

  const router = require('express').Router()
  const Loadout = require('../db/models/loadout')

  router.get('/', function(req, res, next) {
    Loadout.findAll({})
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
  });

  router.get('/:id', function(req, res, next) {
    Loadout.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
  });

};
