import express from 'express';
import userController from '../controller/user';
import validate from '../middleware/validation';

const router = express.Router();

router.post('/signup', validate.userSignup, userController.signup);

export default router;
