'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _event = require('../controller/event');

var _event2 = _interopRequireDefault(_event);

var _validation = require('../middleware/validation');

var _validation2 = _interopRequireDefault(_validation);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _getevent = require('../middleware/getevent');

var _getevent2 = _interopRequireDefault(_getevent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _authenticate2.default.authenticated, _validation2.default.addEvent, _event2.default.add);
router.get('/popular', _event2.default.getPopularEvents);
router.put('/:eventId', _authenticate2.default.authenticated, _validation2.default.eventId, _getevent2.default.event, _validation2.default.addEvent, _event2.default.modify);
router.get('/:eventId', _authenticate2.default.authenticated, _validation2.default.eventId, _event2.default.get);
router.get('/', _event2.default.getAll);
router.delete('/:eventId', _authenticate2.default.authenticated, _validation2.default.eventId, _event2.default.delete);

exports.default = router;