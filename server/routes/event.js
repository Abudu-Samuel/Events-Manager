import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.post('/', auth.authenticated, validate.addEvent, eventController.addEvent);
router.get('/latest', eventController.latestEvents);
router.get('/user/events', auth.authenticated, eventController.getUserEvent);
router.put('/event/:eventId', auth.authenticated, validate.eventId, validate.addEvent, eventController.modifyEvent);
router.get('/event/:eventId', validate.eventId, eventController.getSingleEvent);
router.get('/', auth.authenticated, eventController.getAllEvents);
router.delete('/event/:eventId', auth.authenticated, validate.eventId, eventController.deleteEvent);
router.get('/center/:eventId', auth.authenticated, validate.eventId, eventController.centerEvent);

export default router;
