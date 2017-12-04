import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.post('/', auth.authenticated, validate.addCenter, centerController.add);
router.get('/', centerController.getAll);
router.get('/:centerId', auth.authenticated, validate.centerId, centerController.retrieve);
router.put('/:centerId', auth.authenticated, validate.centerId, validate.addCenter, centerController.modify);


export default router;
