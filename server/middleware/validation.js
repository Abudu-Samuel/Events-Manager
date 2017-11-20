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
    }
    next();
  }
};

export default validation;
