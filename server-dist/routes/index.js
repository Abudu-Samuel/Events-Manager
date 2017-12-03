'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _center = require('./center');

var _center2 = _interopRequireDefault(_center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(app) {
    app.use('/api/v1/users', _user2.default);
    app.use('/api/v1/events', _event2.default);
    app.use('/api/v1/centers', _center2.default);
};

exports.default = Router;