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
        // userId: req.body.userId,
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

  /**
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} modify
   * @memberOf Event
   */
  static modify(req, res) {
    const
      {
        title, date, time, type, image, description
      } = req.body;
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          return res.status(400).json({
            message: 'Event Not Found!'
          });
        }
        return eventFound
          .update({
            title,
            date,
            time,
            type,
            image,
            description
          })
          .then(updatedEvent => res.status(200).json({
            message: 'Event modification is successful',
            updatedEvent
          }))
          .catch(error => res.status(400).json({
            message: error.errors[0].message
          }));
      })
      .catch(() => res.status(500).json({
        message: 'some error occured'
      }));
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
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        return res.status(200).json({
          message: 'Event Found',
          event
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
   * @returns {object} get
   * @memberOf Event
   */
  static delete(req, res) {
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        return eventFound
          .destroy()
          .then(() => res.status(200).json({
            message: 'Event Deleted!'
          }))
          .catch(error => res.status(400).json({
            message: error.errors[0].message
          }));
      })
      .catch(() => res.status(500).json({
        message: 'Some error occured'
      }));
  }
}

export default Event;
