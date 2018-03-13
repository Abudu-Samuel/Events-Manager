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
var centers = _models2.default.center;

/**
 * @class Event
 */

var Event = function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: 'add',

    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} add
     * @memberOf Event
     */
    value: function add(req, res) {
      var _req$body = req.body,
          title = _req$body.title,
          date = _req$body.date,
          time = _req$body.time,
          type = _req$body.type,
          image = _req$body.image,
          description = _req$body.description;

      return centers.findOne({
        where: {
          id: req.body.centerId,
          isAvailable: true
        }
      }).then(function (found) {
        if (!found) {
          return res.status(404).json({
            message: 'Sorry, center is currently not available'
          });
        }
        return events.findOne({
          where: {
            centerId: req.body.centerId,
            time: time,
            date: date
          }
        }).then(function (eventFound) {
          if (eventFound) {
            return res.status(400).json({
              message: 'Center has been booked'
            });
          }
          return events.create({
            userId: req.decoded.userId,
            centerId: req.body.centerId,
            title: title,
            date: date,
            time: time,
            type: type,
            image: image,
            description: description
          }).then(function (created) {
            return res.status(201).json({
              message: 'Event Created!',
              createdEvent: {
                title: created.title,
                date: created.date,
                time: created.time,
                type: created.type,
                image: created.image,
                description: created.description
              }
            });
          }).catch(function (error) {
            return res.status(400).json({
              message: error.errors[0].message
            });
          });
        });
      });
    }

    /**
     * @static
     * @param {object} req
     * @param {object} res
     * @returns {object} modify
     * @memberOf Event
     */

  }, {
    key: 'modify',
    value: function modify(req, res) {
      var _req$body2 = req.body,
          title = _req$body2.title,
          date = _req$body2.date,
          time = _req$body2.time,
          type = _req$body2.type,
          image = _req$body2.image,
          description = _req$body2.description;

      return events.findById(req.params.eventId).then(function (eventFound) {
        if (!eventFound) {
          return res.status(400).json({
            message: 'Event Not Found!'
          });
        }
        if (req.decoded.userId === req.eventFound.userId) {
          return events.findOne({
            where: {
              centerId: req.body.centerId,
              time: time,
              date: date
            }
          }).then(function (FoundEvent) {
            if (FoundEvent) {
              return res.status(400).json({
                message: 'Center has been booked'
              });
            }
            return eventFound.update({
              userId: req.body.userId,
              centerId: req.body.centerId,
              title: title || eventFound.title,
              date: date || eventFound.date,
              time: time || eventFound.time,
              type: type || eventFound.type,
              image: image || eventFound.image,
              description: description || eventFound.description
            }).then(function (updatedEvent) {
              return res.status(200).json({
                message: 'Event modification is successful',
                updatedEvent: updatedEvent
              });
            }).catch(function (error) {
              return res.status(400).json({
                message: error.errors[0].message
              });
            });
          });
        }
        return res.status(401).json({
          message: 'You are not Authorized to edit this event!'
        });
      }).catch(function () {
        return res.status(500).json({
          message: 'some error occured'
        });
      });
    }

    /**
     * @static
     * @param {object} req
     * @param {object} res
     * @returns {object} get
     * @memberOf Event
     */

  }, {
    key: 'get',
    value: function get(req, res) {
      return events.findById(req.params.eventId).then(function (event) {
        if (!event) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        return res.status(200).json({
          message: 'Event Found',
          event: event
        });
      }).catch(function () {
        return res.status(500).json({
          message: 'Some error occured'
        });
      });
    }

    /**
       * @static
       * @param {any} req
       * @param {any} res
       * @return {object} getAll
       * @memberOf Event
       */

  }, {
    key: 'getAll',
    value: function getAll(req, res) {
      return events.findAll().then(function (foundEvents) {
        return res.status(200).send({
          message: 'Events Found',
          foundEvents: foundEvents
        });
      }).catch(function (error) {
        return res.status(500).json(error);
      });
    }

    /**
       * @static
       * @param {any} req
       * @param {any} res
       * @return {object} getUserEvent
       * @memberOf Event
       */

  }, {
    key: 'getUserEvent',
    value: function getUserEvent(req, res) {
      return events.findAll({
        where: {
          userId: req.decoded.userId
        }
      }).then(function (eventFound) {
        return res.status(200).json({
          message: 'Found your Event(s)',
          eventFound: eventFound
        });
        if (!eventFound) {
          return res.status(400).json({
            message: 'You have not created Event(s)!'
          });
        }
      }).catch(function (error) {
        return console.log(error);
      });
    }

    /**
       * @static
       * @param {any} req
       * @param {any} res
       * @return {object} getPopularEvents
       * @memberOf Event
       */

  }, {
    key: 'getPopularEvents',
    value: function getPopularEvents(req, res) {
      return events.findAll({ limit: 3, order: [['createdAt', 'DESC']] }).then(function (foundEvents) {
        return res.status(200).send({
          message: 'Events Found',
          foundEvents: foundEvents
        });
      }).catch(function (error) {
        return res.status(500).json(error);
      });
    }

    /**
     * @static
     * @param {object} req
     * @param {object} res
     * @returns {object} get
     * @memberOf Event
     */

  }, {
    key: 'delete',
    value: function _delete(req, res) {
      return events.findById(req.params.eventId).then(function (eventFound) {
        if (!eventFound) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        if (req.decoded.userId === eventFound.userId) {
          return eventFound.destroy().then(function () {
            return res.status(200).json({
              message: 'Event Deleted!'
            });
          }).catch(function (error) {
            return res.status(400).json({
              message: error.errors[0].message
            });
          });
        }
        return res.status(401).json({
          message: 'You are not Authorized to delete this event!'
        });
      }).catch(function () {
        return res.status(500).json({
          message: 'Some error occured'
        });
      });
    }
  }]);

  return Event;
}();

exports.default = Event;