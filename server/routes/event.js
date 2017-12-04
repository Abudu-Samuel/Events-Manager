import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';
import getEvent from '../middleware/getevent';

const router = express.Router();

router.post('/', auth.authenticated, validate.addEvent, eventController.add);
router.put('/:eventId', auth.authenticated, validate.eventId, getEvent.event, validate.addEvent, eventController.modify);
router.get('/:eventId', auth.authenticated, validate.eventId, eventController.get);
router.get('/', eventController.getAll);
router.delete('/:eventId', auth.authenticated, validate.eventId, eventController.delete);

export default router;
