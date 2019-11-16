'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var host = process.env.HOST || 'localhost';
var user = process.env.USERNAME || 'root';
var password = process.env.PASSWORD || '';

console.log("========================");
console.log(host, user, password);

var sequelize = new _sequelize2.default('event_tech_day', user, password, {
    host: host,
    dialect: 'mariadb'
});

exports.default = sequelize;