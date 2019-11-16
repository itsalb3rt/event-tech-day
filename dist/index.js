'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
//middleware
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)({
    origin: '*'
}));
app.use('/api', _routes2.default);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    return console.log('Example app listening on port ' + port + '! http://localhost:' + port + '/');
});