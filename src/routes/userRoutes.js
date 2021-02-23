import { Router } from 'express';

import userController from '../controllers/UserController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/user', userController.store);
router.get('/user', adminAuth, userController.index);
router.delete('/user/:id', adminAuth, userController.delete);
router.put('/user/:id', adminAuth, userController.update);

export default router;
