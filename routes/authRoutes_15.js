import express from 'express';
const router = express.Router();

import {
    register_15,
    login_15,
    updateUser_15,
} from '../controllers/authController_15.js';

import authenticateUser_15 from '../middleware/auth_15.js'

router.route('/register_15').post(register_15);
router.route('/login_15').post(login_15);
router.route('/updateUser_15').patch(authenticateUser_15, updateUser_15);

export default router;