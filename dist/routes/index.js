'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _talks = require('./talks');

var _talks2 = _interopRequireDefault(_talks);

var _speackers = require('./speackers');

var _speackers2 = _interopRequireDefault(_speackers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/talks', _talks2.default);
router.use('/speakers', _speackers2.default);

exports.default = router;