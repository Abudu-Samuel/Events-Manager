import express from 'express';
import centerController from '../controller/Center';
import validate from '../middleware/validation';
import auth from '../middleware/Authenticate';

const router = express.Router();

router.post('/', auth.authenticated, auth.isAdmin, validate.addCenter, centerController.addCenter);
router.get('/', auth.authenticated, centerController.getAllCenters);
router.get('/latest/centers', centerController.latestCenters);
router.get('/:centerId', auth.authenticated, validate.centerId, centerController.getSingleCenter);
router.put('/:centerId', auth.authenticated, auth.isAdmin, validate.centerId, validate.addCenter, centerController.modifyCenter);


export default router;
