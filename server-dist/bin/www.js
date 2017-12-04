'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = require('../../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack2.default)(_webpack4.default);
var port = parseInt(process.env.PORT, 10) || 8000;
_app2.default.set('port', port);

_app2.default.use((0, _webpackDevMiddleware2.default)(compiler, {
  publicPath: _webpack4.default.output.publicPath,
  noInfo: true
}));

_app2.default.use((0, _webpackHotMiddleware2.default)(compiler));
_app2.default.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));
_app2.default.use(_express2.default.static(_path2.default.resolve(__dirname, '../../client')));
_app2.default.get('*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, '../../client/index.html'));
});

_app2.default.listen(_app2.default.get('port'), function () {
  console.log('app running on localhost:' + _app2.default.get('port'));
});