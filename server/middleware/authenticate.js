import db from '../models';
import Token from '../middleware/Token';

const users = db.user;
/**
 * @class Authenticate
 *
 * @description checks for authenticated users
 */
class Authenticate {
  /**
   * @static
   *
   * @description checks if a user is authenticated or not
   *
   * @param {object} req - request object
   *
   * @param {object} res - response object
   *
   * @param {object} next - next object
   *
   * @returns {object} token if a user is authenticated
   *
   * @memberof Authenticate
   */
  static authenticated(req, res, next) {
    const token = req.headers['x-access-token'] || req.body.token;
    const decoded = Token.decodeToken(token);
    if (decoded === 'no token') {
      return res.status(401).send({
        message: 'Access denied you are not authourized..'
      });
    }
    return users
      .findOne({
        where: {
          id: parseInt(decoded.userId, 10)
        }
      })
      .then((found) => {
        req.decoded = decoded;
        next();
      });
  }
  /**
   * @static
   *
   * @description checks if user
   *
   * @param {object} req - request object
   *
   * @param {object} res - response object
   *
   * @param {object} next - next object
   *
   * @returns {object} isAdmin message if user is not an admin
   *
   * @memberof Authenticate
   */
  static isAdmin(req, res, next) {
    const token = req.headers['x-access-token'] || req.body.token;
    const decoded = Token.decodeToken(token);
    if (!decoded.isAdmin) {
      return res.status(401).send({
        message: 'You are not authorized to view this page'
      });
    }
    return next();
  }
}

export default Authenticate;
