import db from '../models';

const events = db.event;

/**
 * @class Getevent
 */
class Getevent {
  /**
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} add
   * @memberOf Event
   */
  static event(req, res, next) {
    return events
      .findById(req.params.eventId)
      .then((eventFound) => {
        if (!eventFound) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        req.eventFound = eventFound;
        next();
      });
  }
}

export default Getevent;
