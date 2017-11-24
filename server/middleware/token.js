import jwt from 'jsonwebtoken';

const dotEnv = require('dotenv');

dotEnv.config();

/**
 * @class Token
 */
class Token {
  /**
   * @static
   * @param {any} payLoad
   * @returns {object} payload
   * @memberOf Token
   */
  static generateToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.secret);
    return token;
  }

  /**
   * @static
   * @param {any} tokenObject
   * @returns {object} payload
   * @memberOf Token
   */
  static decodeToken(tokenObject) {
    let decodedToken;
    if (tokenObject) {
      decodedToken = jwt.verify(tokenObject, process.env.secret);
    } else {
      decodedToken = 'no token';
    }
    return decodedToken;
  }
}

export default Token;
