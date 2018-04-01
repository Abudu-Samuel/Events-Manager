import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.post('/', auth.authenticated, validate.addEvent, eventController.addEvent);
router.get('/latest/events', eventController.latestEvents);
router.get('/user/events', auth.authenticated, eventController.getUserEvent);
router.put('/:eventId', auth.authenticated, validate.eventId, validate.addEvent, eventController.modifyEvent);
router.get('/:eventId', auth.authenticated, validate.eventId, eventController.getSingleEvent);
router.get('/', auth.authenticated, eventController.getAllEvents);
router.delete('/:eventId', auth.authenticated, validate.eventId, eventController.deleteEvent);

export default router;
