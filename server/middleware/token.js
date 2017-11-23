import jwt from 'jsonwebtoken';
import code from '../../code';

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
    const token = jwt.sign(payLoad, code.secret);
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
      decodedToken = jwt.verify(tokenObject, code.secret);
    } else {
      decodedToken = 'no token';
    }
    return decodedToken;
  }
}

export default Token;
