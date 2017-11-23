'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _center = require('../controller/center');

var _center2 = _interopRequireDefault(_center);

var _validation = require('../middleware/validation');

var _validation2 = _interopRequireDefault(_validation);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _authenticate2.default.authenticated, _validation2.default.addCenter, _center2.default.add);
router.get('/', _authenticate2.default.authenticated, _center2.default.getAll);
router.get('/:centerId', _authenticate2.default.authenticated, _validation2.default.centerId, _center2.default.retrieve);
router.put('/:centerId', _authenticate2.default.authenticated, _validation2.default.centerId, _validation2.default.addCenter, _center2.default.modify);

exports.default = router;