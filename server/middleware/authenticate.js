import db from '../models';
import Token from '../middleware/token';

const users = db.user;

/**
 * @class Authenticate
 */
class Authenticate {
  /**
   * @static
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {object} Authenticate
   * @memberOf Authenticate
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
      })
      // .catch(() => res.status(500).send({
      //   message: 'Authentication failed...'
      // }));
  }
}

export default Authenticate;
