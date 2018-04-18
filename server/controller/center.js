import db from '../models';

const events = db.event;
const centers = db.center;

/**
* @description creates center controller
 *
 * @class Center
 */
class Center {
  /**
   * @static
   *
   * @description Adds a new center to the database
   *
   * @param {any} req - request object
   *
   * @param {any} res - response object
   *
   * @returns {object} add center message and center as payload
   *
   * @memberof Center
   */
  static addCenter(req, res) {
    const {
      name,
      capacity,
      location,
      price,
      state,
      description,
      image,
      isAvailable
    } = req.body;
    if (req.decoded.isAdmin) {
      return centers.create({
        name,
        capacity,
        location,
        price,
        state,
        description,
        image,
        isAvailable
      })
        .then(created =>
          res
            .status(201)
            .json({
              message: 'Center created Successfully',
              created
            }))
        .catch(error => res
          .status(400)
          .json({
            message: error.message
          }));
    }
    return res
      .status(401)
      .json({
        message: 'You are not authorized to add a center'
      });
  }
  /**
 * @static
 *
 * @description Gets all centers in the database
 *
 * @param {object} req - request object
 *
 * @param {any} res - response object
 *
 * @returns {object} get all centers message and get all centers as payload
 *
 * @memberof Center
 */
  static getAllCenters(req, res) {
    let limit = 6;
    let offset = 0;
    return centers
      .findAndCountAll()
      .then((allCenters) => {
        const { page } = req.params;
        const pages = Math.ceil(allCenters.count / limit);
        offset = limit * (page -1 );

        centers.findAll({
          limit,
          offset,
        }).then((center) => {
          res.status(200).json({
            center,
            pages
          });
        })
      }).catch(error => res.status(400).json({
        message: error.errors[0].message
      }));
  }
  /**
 * @static
 *
 * @description Gets the three newest centers in the database
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} gets three newest centers message and three newest centers as payload
 *
 * @memberof Center
 */
  static latestCenters(req, res) {
    return centers
      .findAll({ limit: 3, order: [['createdAt', 'DESC']] }, {
        include: [{ model: events }]
      })
      .then(foundCenters => res
        .status(200)
        .json({
          message: 'Centers found',
          foundCenters
        }))
      .catch(error => res.status(500).json(error));
  }
  /**
 * @static
 *
 * @description Gets single center by it's Id
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} Get single center message and get single center payload
 *
 * @memberof Center
 */
  static getSingleCenter(req, res) {
    return centers
      .findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res
            .status(404)
            .json({
              message: 'Center Not Found'
            });
        }
        return res.status(200).json({
          message: 'Center Found',
          center
        });
      })
      .catch(() => res
        .status(500)
        .json({
          message: 'Some error occured'
        }));
  }
  /**
* @static
 *
 * @description Modify center in the database
 *
 * @param {object} req - request object
 *
 * @param {object} res - respond object
 *
 * @returns {object} modified center message and modified center as payload
 *
 * @memberof Center
 */
  static modifyCenter(req, res) {
    const {
      name, capacity, location, price, state, description, image, isAvailable
    } = req.body;
    return centers
      .findById(req.params.centerId)
      .then((centerFound) => {
        if (!centerFound) {
          return res
            .status(400)
            .json({
              message: 'Center Not Found!'
            });
        }
        if (req.decoded.isAdmin) {
          return centerFound
            .update({
              name,
              capacity,
              location,
              price,
              state,
              description,
              image,
              isAvailable
            })
            .then(updatedCenter => res
              .status(200)
              .json({
                message: 'Center modification is successful',
                updatedCenter
              }))
            .catch(error => res.status(400).json({
              message: error.errors[0].message
            }));
        }
        return res.status(401).json({
          message: 'You are not Authorized to edit this center!'
        });
      })
      .catch(() => res.status(500).json({
        message: 'some error occured'
      }));
  }
}

export default Center;
