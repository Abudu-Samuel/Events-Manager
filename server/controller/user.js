import bcrypt from 'bcrypt';
import db from '../models';
import Token from '../middleware/token';


const users = db.user;

/**
 * @class User
 */
class User {
  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} signup
   * @memberOf User
   */
  static signup(req, res) {
    const {
      username, email, password, firstname, lastname,
    } = req.body;
    users.find({
      where: {
        $or: [
          { email },
          { username }
        ]
      }
    })
      .then((found) => {
        let emailError;
        let usernameError;
        if (found) {
          if (found.email === email && found.username === username) {
            emailError = 'Email already in use';
            usernameError = 'Username already taken';
          } else if (found.email === email) {
            emailError = 'Email already in use';
          } else if (found.username === username) {
            usernameError = 'Username already taken';
          }
          return res.status(400).json({
            message: {
              emailError,
              usernameError
            }
          });
        }
      });
    return users
      .create({
        username,
        email,
        firstname,
        lastname,
        password: bcrypt.hashSync(password, 10),
      })
      .then(register => res.status(201).json({
        responseData: {
          newUser: 'Account Created',
          username: register.username,
          email: register.email,
          firstname: register.firstname,
          lastname: register.lastname,
        }
      }))
      .catch(error => res.status(400).json({
        message: error.errors[0].message
      }))
      .catch(() => res.status(500).json({
        message: 'Some error occured!'
      }));
  }

  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns{object} signin
   * @memberOf User
   */
  static signin(req, res) {
    const { username, password } = req.body;
    return users
      .findOne({
        where: {
          username
        }
      })
      .then((found) => {
        if (!found) {
          return res.status(400).json({
            message: 'Incorrect signin credentials'
          });
        }
        const hashedPassword = bcrypt.compareSync(password, found.password);
        if (hashedPassword) {
          const payLoad = {
            userIdkey: found.id, emailKey: found.email, firstnameKey: found.firstname, lastnameKey: found.lastname, usernameKey: found.username, isAdminKey: found.isAdmin
          };
          const token = Token.generateToken(payLoad);
          return res.status(200).json({
            message: 'Sign in Successful!',
            token
          });
        }
        return res.status(400).json({
          message: 'invalid username or password'
        });
      })
      .catch(() => res.status(500).json({
        message: 'Sorry, some error occured!'
      }));
  }
}

export default User;

