import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.get('/latest', centerController.latestCenters);
router.post('/', auth.authenticated, auth.isAdmin, validate.addCenter, centerController.addCenter);
router.get('/', auth.authenticated, centerController.getAllCenters);
router.get('/center/:centerId', validate.centerId, centerController.getSingleCenter);
router.put('/center/:centerId', auth.authenticated, auth.isAdmin, validate.centerId, validate.addCenter, centerController.modifyCenter);


export default router;
