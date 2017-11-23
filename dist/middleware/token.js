'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _code = require('../../code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Token
 */
var Token = function () {
  function Token() {
    _classCallCheck(this, Token);
  }

  _createClass(Token, null, [{
    key: 'generateToken',

    /**
     * @static
     * @param {any} payLoad
     * @returns {object} payload
     * @memberOf Token
     */
    value: function generateToken(payLoad) {
      var token = _jsonwebtoken2.default.sign(payLoad, _code2.default.secret);
      return token;
    }

    /**
     * @static
     * @param {any} tokenObject
     * @returns {object} payload
     * @memberOf Token
     */

  }, {
    key: 'decodeToken',
    value: function decodeToken(tokenObject) {
      var decodedToken = void 0;
      if (tokenObject) {
        decodedToken = _jsonwebtoken2.default.verify(tokenObject, _code2.default.secret);
      } else {
        decodedToken = 'no token';
      }
      return decodedToken;
    }
  }]);

  return Token;
}();

exports.default = Token;