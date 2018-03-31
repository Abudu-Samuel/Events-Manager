import db from '../models';

const events = db.event;
const centers = db.center;

/**
 * @description creates event controller
 *
 * @class Event
 */
class Event {
  /**
   * @static
   *
   * @description Adds a new event to the database
   *
   * @param {any} req - request object
   *
   * @param {any} res - response object
   *
   * @returns {object} add event message and event as payload
   *
   * @memberof Event
   */
  static addEvent(req, res) {
    const {
      title,
      date,
      time,
      type,
      image,
      description
    } = req.body;
    return centers
      .findOne({
        where: {
          id: req.body.centerId,
          isAvailable: true
        }
      })
      .then((found) => {
        if (!found) {
          return res
            .status(403)
            .json({ message: 'Sorry, center is currently not available' });
        }
        return events
          .findOne({
            where: {
              centerId: req.body.centerId,
              date
            }
          })
          .then((eventFound) => {
            if (eventFound) {
              return res
                .status(409)
                .json({ message: 'Center has been booked' });
            }
            return events
              .create({
                userId: req.decoded.userId,
                centerId: req.body.centerId,
                title,
                date,
                time,
                type,
                image,
                description
              })
              .then(created => res.status(201).json({
                message: 'Event Created!',
                createdEvent: {
                  title: created.title,
                  date: created.date,
                  time: created.time,
                  type: created.type,
                  image: created.image,
                  description: created.description
                }
              }))
              .catch(error => res
                .status(400)
                .json({ message: error.errors[0].message }));
          });
      });
  }
  /**
 * @static
 *
 * @description Modify event in the database
 *
 * @param {object} req - request object
 *
 * @param {object} res - respond object
 *
 * @returns {object} modified event message and modified event as payload
 *
 * @memberof Event
 */
  static modifyEvent(req, res) {
    const {
      title,
      date,
      time,
      type,
      image,
      description
    } = req.body;
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          res
            .status(404)
            .json({ message: 'Event Not Found!' });
        } else if (req.decoded.userId === eventFound.userId) {
          if (eventFound.date !== date) {
            events
              .findOne({
                where: {
                  date,
                  centerId: eventFound.centerId
                }
              })
              .then(eventData => {
                if (eventData) {
                  return res
                    .status(409)
                    .json({ message: 'center has been booked' });
                } else {
                  eventFound.update({
                    userId: req.decoded.userId,
                    centerId: req.body.centerId,
                    title: title || eventFound.title,
                    date: date || eventFound.date,
                    time: time || eventFound.time,
                    type: type || eventFound.type,
                    image: image || eventFound.image,
                    description: description || eventFound.description
                  })
                    .then(updatedEvent => res
                      .status(200)
                      .json({ message: 'Event modification is successful', updatedEvent }))
                    .catch(error => res.status(400).json({ message: error }));
                }
              });
          } else {
            eventFound.update({
              userId: req.decoded.userId,
              centerId: req.body.centerId,
              title: title || eventFound.title,
              date: date || eventFound.date,
              time: time || eventFound.time,
              type: type || eventFound.type,
              image: image || eventFound.image,
              description: description || eventFound.description
            })
              .then(updatedEvent => res
                .status(200)
                .json({ message: 'Event modification is successful', updatedEvent }))
              .catch(error => res.status(400).json({ message: error }));
          }
        } else {
          return res
            .status(422)
            .json({ message: 'You are not Authorized to edit this event!' });
        }
      })
      .catch((error) => res
        .status(500)
        .json({ message: 'some error occured' }));
  }
  /**
 * @static
 *
 * @description Gets single event by it's Id
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} Get single event message and get single event payload
 *
 * @memberof Event
 */
  static getSingleEvent(req, res) {
    return events
      .findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res
            .status(404)
            .json({ message: 'Event Not Found' });
        }
        return res
          .status(200)
          .json({ message: 'Event Found', event });
      })
      .catch(() => res
        .status(500)
        .json({ message: 'Some error occured' }));
  }
  /**
 * @static
 *
 * @description Gets all events in the database
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} get all events message and get all events as payload
 *
 * @memberof Event
 */
  static getAllEvents(req, res) {
    return events
      .findAll()
      .then(foundEvents => res
        .status(200)
        .send({ message: 'Events Found', foundEvents }))
      .catch(error => res
        .status(500)
        .json(error));
  }
  /**
 * @static
 *
 * @description Gets all events in the database created by a single user
 *
 * @param {object} req - request object
 *
 * @param {object} res - respond object
 *
 * @returns {object} gets all user events message and get all user events as payload
 *
 * @memberof Event
 */
  static getUserEvent(req, res) {
    return events
      .findAll({
        where: {
          userId: req.decoded.userId
        }
      })
      .then((eventFound) => res
        .status(200)
        .json({ message: 'Found your Event(s)', eventFound }))
      .catch(error => res.status(500).json(error));
  }
  /**
 * @static
 *
 * @description Gets the three newest events in the database
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} gets three newest events message and three newest events as payload
 *
 * @memberof Event
 */
  static latestEvents(req, res) {
    return events
      .findAll({
        limit: 3,
        order: [
          ['createdAt', 'DESC']
        ]
      })
      .then(foundEvents => res
        .status(200)
        .send({ message: 'Events Found', foundEvents }))
      .catch(error => res.status(500).json(error));
  }

  /**
 * @static
 *
 * @description Deletes event from the database by it's Id
 *
 * @param {object} req - request object
 *
 * @param {object} res - response object
 *
 * @returns {object} delete event message
 *
 * @memberof Event
 */
  static deleteEvent(req, res) {
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          return res
            .status(404)
            .json({ message: 'Event Not Found' });
        }
        if (req.decoded.userId === eventFound.userId) {
          return eventFound
            .destroy()
            .then(() => res
              .status(200)
              .json({ message: 'Event Deleted!', eventFound }));
        }
        return res
          .status(422)
          .json({ message: 'You are not Authorized to delete this event!' });
      });
  }
}

export default Event;
