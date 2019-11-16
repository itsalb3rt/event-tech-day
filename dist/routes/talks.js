'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _talks = require('./../models/talks');

var _talks2 = _interopRequireDefault(_talks);

var _speakers = require('./../models/speakers');

var _speakers2 = _interopRequireDefault(_speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerTalks = _express2.default.Router();

routerTalks.get('/', function (req, res) {

    _talks2.default.findAll({
        include: {
            model: _speakers2.default
        }
    }).then(function (talks) {
        res.send(talks);
    }).catch(function (error) {
        res.send(error);
    });
});

routerTalks.get('/:id', function (req, res) {
    _talks2.default.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.send(error);
    });
});

routerTalks.post('/', function (req, res) {

    _talks2.default.create(req.body).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

routerTalks.put('/:id', function (req, res) {
    var updateEvent = req.body;
    updateEvent.updatedAt = Date.now();

    _talks2.default.update(updateEvent, {
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send('Error in insert new record');
    });
});

routerTalks.delete('/:id', function (req, res) {

    _talks2.default.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send('deleted');
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

exports.default = routerTalks;