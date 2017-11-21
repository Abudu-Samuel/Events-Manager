import db from '../models';

const centers = db.center;

/**
 * @class Center
 */
class Center {
  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} add
   * @memberOf Center
   */
  static add(req, res) {
    const {
      name, capacity, location, price, state, description, image, isAvailable
    } = req.body;
    return centers
      .create({
        name,
        capacity,
        location,
        price,
        state,
        description,
        image,
        isAvailable
      })
      .then(created => res.status(201).json({
        message: 'Center created Successfully',
        createdCenter: {
          created
        }
      }))
      .catch(error => res.status(400).json({
        message: error.errors[0].message
      }));
  }
}

export default Center;
