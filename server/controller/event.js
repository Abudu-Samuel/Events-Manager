import db from '../models';

const events = db.event;
const centers = db.center;

/**
 * @class Event
 */
class Event {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} add
   * @memberOf Event
   */
  static add(req, res) {
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
            .status(404)
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
              console.log('====> I found an event clashing');
              return res
                .status(400)
                .json({ message: 'Center has been booked' });
            }
            // console.log('The date: ', eventFound.date, 'real date ', date
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
              .catch(error => res.status(400).json({ message: error.errors[0].message }));
          });
      });
  }

  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} modify
   * @memberOf Event
   */
  static modify(req, res) {
    const {
      title,
      date,
      time,
      type,
      image,
      description
    } = req.body;
    // console.log(req.body)
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          res.status(400).json({ message: 'Event Not Found!' });
        } else if (req.decoded.userId === eventFound.userId) {
          console.log('=====>chekcing the owner');
          if (eventFound.date !== date) {
            console.log('=====>date changes');
            events
              .findOne({
                where: {
                  date,
                  centerId: eventFound.centerId
                }
              })
              .then(eventData => {
                console.log('=====>date clashing');
                if (eventData) {
                  console.log(eventData);
                  return res
                    .status(400)
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
                    .then(updatedEvent => res.status(200).json({ message: 'Event modification is successful', updatedEvent }))
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
              .then(updatedEvent => res.status(200).json({ message: 'Event modification is successful', updatedEvent }))
              .catch(error => res.status(400).json({ message: error }));
          }
        } else {
          return res
            .status(401)
            .json({ message: 'You are not Authorized to edit this event!' });
        }
      })
      .catch((error) => res.status(500).json({ message: 'some error occured' }));
  }

  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} get
   * @memberOf Event
   */
  static get(req, res) {
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
      .catch(() => res.status(500).json({ message: 'Some error occured' }));
  }

  /**
     * @static
     * @param {any} req
     * @param {any} res
     * @return {object} getAll
     * @memberOf Event
     */
  static getAll(req, res) {
    return events
      .findAll()
      .then(foundEvents => res.status(200).send({ message: 'Events Found', foundEvents }))
      .catch(error => res.status(500).json(error));
  }

  /**
     * @static
     * @param {any} req
     * @param {any} res
     * @return {object} getUserEvent
     * @memberOf Event
     */
  static getUserEvent(req, res) {
    return events
      .findAll({
        where: {
          userId: req.decoded.userId
        }
      })
      .then((eventFound) => {
        return res
          .status(200)
          .json({ message: 'Found your Event(s)', eventFound });
        if (!eventFound) {
          return res
            .status(400)
            .json({ message: 'You have not created Event(s)!' });
        }
      })
      .catch(error => console.log(error));
  }

  /**
     * @static
     * @param {any} req
     * @param {any} res
     * @return {object} getPopularEvents
     * @memberOf Event
     */
  static getPopularEvents(req, res) {
    return events
      .findAll({
        limit: 3,
        order: [
          ['createdAt', 'DESC']
        ]
      })
      .then(foundEvents => res.status(200).send({ message: 'Events Found', foundEvents }))
      .catch(error => res.status(500).json(error));
  }

  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} get
   * @memberOf Event
   */
  static delete(req, res) {
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
            .then(() => res.status(200).json({ message: 'Event Deleted!', eventFound }));
        }
        return res
          .status(401)
          .json({ message: 'You are not Authorized to delete this event!' });
      });
  }
}

export default Event;
