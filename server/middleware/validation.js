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
  }
};

export default validation;
