'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

var _event = require('./routes/event');

var _event2 = _interopRequireDefault(_event);

var _center = require('./routes/center');

var _center2 = _interopRequireDefault(_center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// Set up express app
var app = (0, _express2.default)();
// Log requests to the console
app.use((0, _morgan2.default)('dev'));

// Parse incoming requests data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Routes
(0, _index2.default)(app);
// app.use('/api/v1/users', user);
// app.use('/api/v1/events/', event);
// app.use('/api/v1/centers', center);

// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to Events Manager API'
// }));


// Handle routes that doesn't match
app.use(function (req, res, next) {
  var err = res.status(404).send({
    message: '404: Sorry Page Not Found!'
  });
  next(err);
});

exports.default = app;