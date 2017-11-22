import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/', validate.addEvent, eventController.add);
router.put('/:eventId', validate.addEvent, eventController.modify);
router.get('/:eventId', validate.eventId, eventController.get);
router.delete('/:eventId', validate.eventId, eventController.delete);

export default router;
