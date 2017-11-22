import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/', validate.addCenter, centerController.add);
router.get('/', centerController.getAll);
router.get('/:centerId', validate.centerId, centerController.retrieve);

export default router;
