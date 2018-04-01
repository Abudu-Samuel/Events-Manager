import jwt from 'jsonwebtoken';

const dotEnv = require('dotenv');

dotEnv.config();

/**ggit
 * @class Token
 */
class Token {
/**
 * @static
 *
 * @description generates token for authorised users
 *
 * @param {object} payLoad - payload object
 *
 * @returns {object} token for signed in users in the database
 *
 * @memberof Token
 */
  static generateToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.secret);
    return token;
  }
  /**
 * @static
 *
 *@description verifies token of the user

 * @param {object} tokenObject - tokenObject object
 *
 * @returns {object} verified token
 *
 * @memberof Token
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
