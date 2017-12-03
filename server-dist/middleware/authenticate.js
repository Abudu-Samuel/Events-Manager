'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _token = require('../middleware/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = _models2.default.user;

/**
 * @class Authenticate
 */

var Authenticate = function () {
  function Authenticate() {
    _classCallCheck(this, Authenticate);
  }

  _createClass(Authenticate, null, [{
    key: 'authenticated',

    /**
     * @static
     * @param {any} req
     * @param {any} res
     * @param {any} next
     * @returns {object} Authenticate
     * @memberOf Authenticate
     */
    value: function authenticated(req, res, next) {
      var token = req.headers['x-access-token'] || req.body.token;
      var decoded = _token2.default.decodeToken(token);

      if (decoded === 'no token') {
        return res.status(401).send({
          message: 'Access denied you are not authourized..'
        });
      }
      return users.findOne({
        where: {
          id: parseInt(decoded.userId, 10)
        }
      }).then(function (found) {
        req.decoded = decoded;
        next();
      }).catch(function () {
        return res.status(500).send({
          message: 'Authentication failed...'
        });
      });
    }
  }]);

  return Authenticate;
}();

exports.default = Authenticate;