import bcrypt from 'bcrypt';
import db from '../models';
import Token from '../middleware/token';


const users = db.user;
/**
 * @exports User
 *
 * @description defines UserAction for sign up and sign in
 *
 * @class User
 */
class User {
  /**
   * @static
   *
   * @description This method handles new user registration
   *
   * @param {object} req - request object
   *
   * @param {object} res - response object
   *
   * @returns {object} server
   */
  static signup(req, res) {
    const {
      username, email, password, firstname, lastname, isAdmin,
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
        if (found) {
          return res.status(409).send({
            message: 'user already exist'
          });
        }
        return users
          .create({
            username,
            email,
            firstname,
            lastname,
            isAdmin,
            password: bcrypt.hashSync(password, 10),
          })
          .then(register => res.status(201).send({
            responseData: {
              message: 'Account Created',
              id: register.id,
              username: register.username,
              email: register.email,
              firstname: register.firstname,
              lastname: register.lastname,
              updatedAt: register.updatedAt,
              createdAt: register.createdAt,
            }
          }))
          .catch(error => res.status(500).send({
            message: error.errors[0].message
          }));
      });
  }

  /**
 * @static
 *
 * @description This method signs in a registred user

* @param {object} req - request object
 *
 * @param {any} res - response object
 *
 * @returns { object } user data with token
 *
 * @memberof User
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
          return res.status(401).send({
            message: 'Invalid username or password'
          });
        }
        const hashedPassword = bcrypt.compareSync(password, found.password);
        if (hashedPassword) {
          const payLoad = {
            userId: found.id, email: found.email, firstname: found.firstname, lastname: found.lastname, username: found.username, isAdmin: found.isAdmin
          };
          const token = Token.generateToken(payLoad);
          return res.status(200).send({
            message: 'Sign in Successful!',
            token
          });
        }
        return res.status(401).send({
          message: 'Invalid username or password'
        });
      })
      .catch(() => res.status(500).send({
        message: 'Sorry, some error occured!'
      }));
  }
}

export default User;

