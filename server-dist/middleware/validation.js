'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validation = {

  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {funct} signup
   */
  userSignup: function userSignup(req, res, next) {
    var _req$body = req.body,
        username = _req$body.username,
        email = _req$body.email,
        password = _req$body.password,
        firstname = _req$body.firstname,
        lastname = _req$body.lastname;

    if (!username && !email && !password && !firstname && !lastname) {
      return res.status(400).json({
        message: 'All Fields Required'
      });
    } else if (!username) {
      return res.status(400).json({
        message: 'Username Field Required'
      });
    } else if (!password || typeof password !== 'string') {
      return res.status(400).json({
        message: 'Please Enter Password'
      });
    } else if (!firstname || typeof firstname !== 'string') {
      return res.status(400).json({
        message: 'Please Enter First Name'
      });
    } else if (!lastname || typeof lastname !== 'string') {
      return res.status(400).json({
        message: 'Please Enter Last Name'
      });
    } else if (password.length < 6) {
      return res.status(400).json({
        message: 'Password should be 6 characters long'
      });
    }
    next();
  },


  /**
   * @returns {object} usersignin
   * @param {object} req
   * @param {object} res
   * @param {object} next
   */
  userSignin: function userSignin(req, res, next) {
    var _req$body2 = req.body,
        username = _req$body2.username,
        password = _req$body2.password;

    if (!username && !password) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    } else if (!username) {
      return res.status(400).json({
        message: 'Enter Username'
      });
    } else if (!password) {
      return res.status(400).json({
        message: 'Enter password'
      });
    }
    next();
  },


  /**
   * @returns {object} addEvent
   * @param {object} req
   * @param {object} res
   * @param {object} next
   */
  addEvent: function addEvent(req, res, next) {
    var _req$body3 = req.body,
        title = _req$body3.title,
        date = _req$body3.date,
        time = _req$body3.time,
        type = _req$body3.type,
        image = _req$body3.image,
        description = _req$body3.description,
        userId = _req$body3.userId,
        centerId = _req$body3.centerId;

    if (!title && !date && !time && !type && !image && !description && !userId && !centerId) {
      return res.status(400).json({
        message: 'All Fields are required'
      });
    } else if (!title) {
      return res.status(400).json({
        message: 'Title Field required'
      });
    } else if (!date) {
      return res.status(400).json({
        message: 'Date Field required'
      });
    } else if (!time) {
      return res.status(400).json({
        message: 'Time Field required'
      });
    } else if (!type) {
      return res.status(400).json({
        message: 'Type Field required'
      });
    } else if (!image) {
      return res.status(400).json({
        message: 'Image Field required'
      });
    } else if (!description) {
      return res.status(400).json({
        message: 'Description Field required'
      });
      // }
    } else if (!centerId) {
      return res.status(400).json({
        message: 'centerId Field required'
      });
    }
    next();
  },


  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} addCenter
   */
  addCenter: function addCenter(req, res, next) {
    var _req$body4 = req.body,
        name = _req$body4.name,
        capacity = _req$body4.capacity,
        location = _req$body4.location,
        price = _req$body4.price,
        state = _req$body4.state,
        description = _req$body4.description,
        image = _req$body4.image,
        isAvailable = _req$body4.isAvailable;

    if (!name && !capacity && !location && !price && !state && !description && !image && !isAvailable) {
      return res.status(400).json({
        message: 'All Fields are required'
      });
    } else if (!name) {
      return res.status(400).json({
        message: 'Name Field required'
      });
    } else if (!capacity) {
      return res.status(400).json({
        message: 'Capacity Field required'
      });
    } else if (!location) {
      return res.status(400).json({
        message: 'Location Field required'
      });
    } else if (!price) {
      return res.status(400).json({
        message: 'Price Field required'
      });
    } else if (!state) {
      return res.status(400).json({
        message: 'State Field required'
      });
    } else if (!description) {
      return res.status(400).json({
        message: 'Description Field required'
      });
    } else if (!image) {
      return res.status(400).json({
        message: 'Image Field required'
      });
    }
    try {
      if (typeof JSON.parse(isAvailable) !== 'boolean') {
        return res.status(400).json({
          message: 'Is Available must be a boolean'
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Is Available must be a boolean'
      });
    }
    next();
  },


  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} eventId
   */
  eventId: function eventId(req, res, next) {
    var eventId = req.params.eventId;

    if (isNaN(eventId)) {
      return res.status(400).json({
        message: 'Parameter must be a number!'
      });
    }
    next();
  },


  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} eventId
   */
  centerId: function centerId(req, res, next) {
    var centerId = req.params.centerId;

    if (isNaN(centerId)) {
      return res.status(400).json({
        message: 'Parameter must be a number!'
      });
    }
    next();
  }
};

exports.default = validation;