import db from '../models';

const events = db.event;

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
    const
      {
        title, date, time, type, image, description
      } = req.body;
    return events
      .create({
        userId: req.body.userId,
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
      .catch(error => res.status(400).json({
        message: error.errors[0].message
      }));
  }
}

export default Event;
