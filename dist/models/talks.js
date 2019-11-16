'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _speakers = require('./speakers');

var _speakers2 = _interopRequireDefault(_speakers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var talksModel = _connection2.default.define('talks', {
    id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    tags: {
        type: _sequelize2.default.STRING
    },
    speakerId: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    },
    time: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    createdAt: {
        type: _sequelize2.default.DATE
    },
    updatedAt: {
        type: _sequelize2.default.DATE
    }
});

talksModel.belongsTo(_speakers2.default);

exports.default = talksModel;