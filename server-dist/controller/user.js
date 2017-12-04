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
          lastname = _req$body.lastname,
          isAdmin = _req$body.isAdmin;

      users.find({
        where: {
          $or: [{ email: email }, { username: username }]
        }
      }).then(function (found) {
        if (found) {
          return res.status(403).send({
            message: 'user already exist'
          });
        }
        return users.create({
          username: username,
          email: email,
          firstname: firstname,
          lastname: lastname,
          isAdmin: isAdmin,
          password: _bcrypt2.default.hashSync(password, 10)
        }).then(function (register) {
          return res.status(201).send({
            responseData: {
              newUser: 'Account Created',
              username: register.username,
              email: register.email,
              firstname: register.firstname,
              lastname: register.lastname
            }
          });
        }).catch(function (error) {
          return res.status(500).send({
            message: error.errors[0].message
          });
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
          return res.status(400).send({
            message: 'Incorrect signin credentials'
          });
        }
        var hashedPassword = _bcrypt2.default.compareSync(password, found.password);
        if (hashedPassword) {
          var payLoad = {
            userId: found.id, email: found.email, firstname: found.firstname, lastname: found.lastname, username: found.username, isAdmin: found.isAdmin
          };
          var token = _token2.default.generateToken(payLoad);
          return res.status(200).send({
            message: 'Sign in Successful!',
            token: token
          });
        }
        return res.status(400).send({
          message: 'invalid username or password'
        });
      }).catch(function () {
        return res.status(500).send({
          message: 'Sorry, some error occured!'
        });
      });
    }
  }]);

  return User;
}();

exports.default = User;