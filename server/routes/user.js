import express from 'express';
import userController from '../controller/User';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/', validate.userSignup, userController.signup);
router.post('/login', validate.userSignin, userController.signin);

export default router;
