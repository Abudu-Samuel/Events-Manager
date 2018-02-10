'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var centers = _models2.default.center;
var events = _models2.default.event;
/**
 * @class Center
 */

var Center = function () {
    function Center() {
        _classCallCheck(this, Center);
    }

    _createClass(Center, null, [{
        key: 'add',

        /**
        * @static
        * @param {object} req
        * @param {object} res
        * @returns {object} add
        * @memberOf Center
        */
        value: function add(req, res) {
            var _req$body = req.body,
                name = _req$body.name,
                capacity = _req$body.capacity,
                location = _req$body.location,
                price = _req$body.price,
                state = _req$body.state,
                description = _req$body.description,
                image = _req$body.image,
                isAvailable = _req$body.isAvailable;

            if (req.decoded.isAdmin) {
                return centers.create({
                    name: name,
                    capacity: capacity,
                    location: location,
                    price: price,
                    state: state,
                    description: description,
                    image: image,
                    isAvailable: isAvailable
                }).then(function (created) {
                    return res.status(201).json({
                        message: 'Center created Successfully',
                        createdCenter: {
                            created: created
                        }
                    });
                }).catch(function (error) {
                    return res.status(400).json({
                        message: error.errors[0].message
                    });
                });
            }
            return res.status(401).json({
                message: 'You are not authorized to add a center'
            });
        }

        /**
         * @description getall centers
         * 
         * @param {object} req
         * @param {object} res
         * 
         * @returns {object} getAll
         * @memberOf Center
         */

    }, {
        key: 'getAll',
        value: function getAll(req, res) {
            return centers.findAll().then(function (foundCenters) {
                return res.status(200).json({
                    message: 'Centers found',
                    foundCenters: foundCenters
                });
            }).catch(function (error) {
                return res.status(500).json(error);
            });
        }

        /**
        * @description getTrendingCenters
        * 
        * @param {object} req
        * @param {object} res
        * 
        * @returns {object} getAll
        * @memberOf Center
        */

    }, {
        key: 'getTrendingCenters',
        value: function getTrendingCenters(req, res) {
            return centers.findAll({ limit: 1, order: [['createdAt', 'DESC']] }).then(function (foundCenters) {
                return res.status(200).json({
                    message: 'Centers found',
                    foundCenters: foundCenters
                });
            }).catch(function (error) {
                return res.status(500).json(error);
            });
        }

        /**
        * @static
        * @param {object} req
        * @param {object} res
        * @returns {object} retrieve
        * @memberOf Center
        */

    }, {
        key: 'retrieve',
        value: function retrieve(req, res) {
            return centers.findById(req.params.centerId, {
                include: [{
                    model: events,
                    as: 'events'
                }]
            }).then(function (center) {
                if (!center) {
                    return res.status(404).json({
                        message: 'Center Not Found'
                    });
                }
                return res.status(200).json({
                    message: 'Center Found',
                    center: center
                });
            }).catch(function () {
                return res.status(500).json({
                    message: 'Some error occured'
                });
            });
        }

        /**
        * @static
        * @param {object} req
        * @param {object} res
        * @returns {object} retrieve
        * @memberOf Center
        */

    }, {
        key: 'modify',
        value: function modify(req, res) {
            var _req$body2 = req.body,
                name = _req$body2.name,
                capacity = _req$body2.capacity,
                location = _req$body2.location,
                price = _req$body2.price,
                state = _req$body2.state,
                description = _req$body2.description,
                image = _req$body2.image,
                isAvailable = _req$body2.isAvailable;

            return centers.findById(req.params.centerId).then(function (centerFound) {
                if (!centerFound) {
                    return res.status(400).json({
                        message: 'Center Not Found!'
                    });
                }
                if (req.decoded.isAdmin) {
                    return centerFound.update({
                        name: name,
                        capacity: capacity,
                        location: location,
                        price: price,
                        state: state,
                        description: description,
                        image: image,
                        isAvailable: isAvailable
                    }).then(function (updatedCenter) {
                        return res.status(200).json({
                            message: 'Center modification is successful',
                            updatedCenter: updatedCenter
                        });
                    }).catch(function (error) {
                        return res.status(400).json({
                            message: error.errors[0].message
                        });
                    });
                }
                return res.status(401).json({
                    message: 'You are not Authorized to edit this center!'
                });
            }).catch(function () {
                return res.status(500).json({
                    message: 'some error occured'
                });
            });
        }
    }]);

    return Center;
}();

exports.default = Center;