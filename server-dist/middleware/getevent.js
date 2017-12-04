'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var events = _models2.default.event;

/**
 * @class Getevent
 */

var Getevent = function () {
  function Getevent() {
    _classCallCheck(this, Getevent);
  }

  _createClass(Getevent, null, [{
    key: 'event',

    /**
     * @param {object} req
     * @param {object} res
     * @param {object} next
     * @returns {object} add
     * @memberOf Event
     */
    value: function event(req, res, next) {
      return events.findById(req.params.eventId).then(function (eventFound) {
        if (!eventFound) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        req.eventFound = eventFound;
        next();
      });
    }
  }]);

  return Getevent;
}();

exports.default = Getevent;