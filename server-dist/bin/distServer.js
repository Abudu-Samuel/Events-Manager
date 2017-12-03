'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = parseInt(process.env.PORT, 10) || 8000;

_app2.default.set('port', port);

_app2.default.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));
_app2.default.use(_express2.default.static(_path2.default.join(__dirname, '../../client-dist')));
_app2.default.get('*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, '../../client-dist/index.html'));
});

_app2.default.listen(_app2.default.get('port'), function () {
  console.log('app running on localhost:' + _app2.default.get('port'));
});