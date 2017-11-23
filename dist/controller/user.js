'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _token = require('../middleware/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = _models2.default.user;

/**
 * @class User
 */

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: 'signup',

    /**
     * @static
     * @param {object} req
     * @param {object} res
     * @returns {object} signup
     * @memberOf User
     */
    value: function signup(req, res) {
      var _req$body = req.body,
          username = _req$body.username,
          email = _req$body.email,
          password = _req$body.password,
          firstname = _req$body.firstname,
          lastname = _req$body.lastname;

      users.find({
        where: {
          $or: [{ email: email }, { username: username }]
        }
      }).then(function (found) {
        var emailError = void 0;
        var usernameError = void 0;
        if (found) {
          if (found.email === email && found.username === username) {
            emailError = 'Email already in use';
            usernameError = 'Username already taken';
          } else if (found.email === email) {
            emailError = 'Email already in use';
          } else if (found.username === username) {
            usernameError = 'Username already taken';
          }
          return res.status(400).json({
            message: {
              emailError: emailError,
              usernameError: usernameError
            }
          });
        }
      });
      return users.create({
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: _bcrypt2.default.hashSync(password, 10)
      }).then(function (register) {
        return res.status(201).json({
          responseData: {
            newUser: 'Account Created',
            username: register.username,
            email: register.email,
            firstname: register.firstname,
            lastname: register.lastname
          }
        });
      }).catch(function (error) {
        return res.status(400).json({
          message: error.errors[0].message
        });
      }).catch(function () {
        return res.status(500).json({
          message: 'Some error occured!'
        });
      });
    }

    /**
     * @static
     * @param {object} req
     * @param {object} res
     * @returns{object} signin
     * @memberOf User
     */

  }, {
    key: 'signin',
    value: function signin(req, res) {
      var _req$body2 = req.body,
          username = _req$body2.username,
          password = _req$body2.password;

      return users.findOne({
        where: {
          username: username
        }
      }).then(function (found) {
        if (!found) {
          return res.status(400).json({
            message: 'Incorrect signin credentials'
          });
        }
        var hashedPassword = _bcrypt2.default.compareSync(password, found.password);
        if (hashedPassword) {
          var payLoad = {
            userIdkey: found.id, emailKey: found.email, firstnameKey: found.firstname, lastnameKey: found.lastname, usernameKey: found.username, isAdminKey: found.isAdmin
          };
          var token = _token2.default.generateToken(payLoad);
          return res.status(200).json({
            message: 'Sign in Successful!',
            token: token
          });
        }
        return res.status(400).json({
          message: 'invalid username or password'
        });
      }).catch(function () {
        return res.status(500).json({
          message: 'Sorry, some error occured!'
        });
      });
    }
  }]);

  return User;
}();

exports.default = User;