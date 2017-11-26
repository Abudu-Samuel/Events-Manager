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
          return res.status(403).send({
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
              newUser: 'Account Created',
              username: register.username,
              email: register.email,
              firstname: register.firstname,
              lastname: register.lastname,
            }
          }))
          .catch(error => res.status(500).send({
            message: error.errors[0].message
          }));
      });
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
          return res.status(400).send({
            message: 'Incorrect signin credentials'
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
        return res.status(400).send({
          message: 'invalid username or password'
        });
      })
      .catch(() => res.status(500).send({
        message: 'Sorry, some error occured!'
      }));
  }
}

export default User;

