import express from 'express';
import centerController from '../controller/center';
import validate from '../middleware/validation';
import auth from '../middleware/authenticate';

const router = express.Router();

router.post('/', auth.authenticated, validate.addCenter, centerController.add);
router.get('/', auth.authenticated, centerController.getAll);
router.get('/trend', centerController.getTrendingCenters);
router.get('/:centerId', auth.authenticated, validate.centerId, centerController.retrieve);
router.put('/:centerId', auth.authenticated, validate.centerId, validate.addCenter, centerController.modify);


export default router;
