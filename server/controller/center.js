import db from '../models';

const centers = db.center;
const events = db.event;
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
        if (req.decoded.isAdmin) {
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
        return res.status(401).json({
            message: 'You are not authorized to add a center'
        });
    }

  /**
   * @description getall centers
   * 
   * @param {object} req
   * @param {object} res
   * 
   * @returns {object} getAll
   * @memberOf Center
   */
    static getAll(req, res) {
        return centers
            .findAll()
            .then(foundCenters => res.status(200).json({
                message: 'Centers found',
                foundCenters
            }))
            .catch(error => res.status(500).json(error));
    }

    /**
   * @description getTrendingCenters
   * 
   * @param {object} req
   * @param {object} res
   * 
   * @returns {object} getAll
   * @memberOf Center
   */
  static getTrendingCenters(req, res) {
    return centers
        .findAll({ limit: 1, order: [['createdAt', 'DESC']] })
        .then(foundCenters => res.status(200).json({
            message: 'Centers found',
            foundCenters
        }))
        .catch(error => res.status(500).json(error));
}

    /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} retrieve
   * @memberOf Center
   */
    static retrieve(req, res) {
        return centers
            .findById(req.params.centerId, {
                include: [{
                    model: events,
                    as: 'events'
                }]
            })
            .then((center) => {
                if (!center) {
                    return res.status(404).json({
                        message: 'Center Not Found'
                    });
                }
                return res.status(200).json({
                    message: 'Center Found',
                    center
                });
            })
            .catch(() => res.status(500).json({
                message: 'Some error occured'
            }));
    }

    /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} retrieve
   * @memberOf Center
   */
    static modify(req, res) {
        const {
            name, capacity, location, price, state, description, image, isAvailable
        } = req.body;
        return centers
            .findById(req.params.centerId)
            .then((centerFound) => {
                if (!centerFound) {
                    return res.status(400).json({
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
                        .then(updatedCenter => res.status(200).json({
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
