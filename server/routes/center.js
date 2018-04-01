import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.post('/', auth.authenticated, validate.addCenter, centerController.addCenter);
router.get('/', auth.authenticated, centerController.getAllCenters);
router.get('/latest/centers', centerController.latestCenters);
router.get('/:centerId', auth.authenticated, validate.centerId, centerController.getSingleCenter);
router.put('/:centerId', auth.authenticated, validate.centerId, validate.addCenter, centerController.modifyCenter);


export default router;
