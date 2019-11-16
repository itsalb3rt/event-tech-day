'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _speakers = require('./../models/speakers');

var _speakers2 = _interopRequireDefault(_speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerSpeakers = _express2.default.Router();

routerSpeakers.get('/', function (req, res) {

    _speakers2.default.findAll().then(function (speakers) {
        res.send(speakers);
    }).catch(function (error) {
        res.send(error);
    });
});

routerSpeakers.get('/:id', function (req, res) {
    _speakers2.default.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.send(error);
    });
});

routerSpeakers.post('/', function (req, res) {
    var newEvent = req.body;

    _speakers2.default.create(newEvent).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

routerSpeakers.put('/:id', function (req, res) {
    var updateEvent = req.body;

    _speakers2.default.update(updateEvent, {
        where: {
            id: req.params.id
        }
    }).then(function (talk) {
        res.send(talk);
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

routerSpeakers.delete('/:id', function (req, res) {

    _speakers2.default.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send('deleted');
    }).catch(function (error) {
        res.status(400).send(error.errors);
    });
});

exports.default = routerSpeakers;