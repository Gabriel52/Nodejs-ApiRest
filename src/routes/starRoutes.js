import { Router } from 'express';

import starController from '../controllers/StarController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/star', adminAuth, starController.store);
router.get('/star', adminAuth, starController.index);
router.delete('/star/:id', adminAuth, starController.delete);

export default router;
