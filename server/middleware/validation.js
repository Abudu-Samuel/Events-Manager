const validation = {


  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {funct} signup
   */
  userSignup(req, res, next) {
    const {
      username, email, password, firstname, lastname, isAdmin
    } = req.body;
    if (!username && !email && !password && !firstname && !lastname && !isAdmin) {
      return res.status(400).json({
        message: 'All Fields Required'
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
    } else if (!isAdmin || typeof isAdmin !== 'string') {
      return res.status(400).json({
        message: 'Admin field required'
      });
    } else if (!username || typeof username !== 'string') {
      return res.status(400).json({
        message: 'Please Enter Username'
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
  userSignin(req, res, next) {
    const { username, password } = req.body;
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
  addEvent(req, res, next) {
    const {
      title, date, time, type, image, description, userId
    } = req.body;
    if (!title && !date && !time && !type && !image && !description) {
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
    }
    next();
  },

  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} addCenter
   */
  addCenter(req, res, next) {
    const {
      name, capacity, location, price, state, description, image, isAvailable
    } = req.body;
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
  eventId(req, res, next) {
    console.log(req.params.eventId);
    const { eventId } = req.params;
    console.log(typeof eventId);
    if  (isNaN(eventId)) {
      return res.status(400).json({
        message: 'Parameter must be a number!'
      });
    }
    next();
  }
};

export default validation;
