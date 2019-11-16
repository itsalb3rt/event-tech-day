'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var speakersModel = _connection2.default.define('speakers', {
    id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    email: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    github_account: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    }
});

exports.default = speakersModel;