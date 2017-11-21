import express from 'express';
import eventController from '../controller/event';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/', validate.addEvent, eventController.add);

export default router;
