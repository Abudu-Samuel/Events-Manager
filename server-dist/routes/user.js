'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controller/user');

var _user2 = _interopRequireDefault(_user);

var _validation = require('../middleware/validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _validation2.default.userSignup, _user2.default.signup);
router.post('/login', _validation2.default.userSignin, _user2.default.signin);

exports.default = router;