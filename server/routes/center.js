import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/', validate.addCenter, centerController.add);

export default router;
