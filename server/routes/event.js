import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';
import getEvent from '../middleware/getevent';

const router = express.Router();

router.post('/', auth.authenticated, validate.addEvent, eventController.add);
router.get('/popular', eventController.getPopularEvents);
router.get('/user/events', auth.authenticated, eventController.getUserEvent);
router.put('/:eventId', auth.authenticated, validate.eventId, validate.addEvent, eventController.modify);
router.get('/:eventId', auth.authenticated, validate.eventId, eventController.get);
router.get('/', auth.authenticated, eventController.getAll);
router.delete('/:eventId', auth.authenticated, validate.eventId, eventController.delete);

export default router;
