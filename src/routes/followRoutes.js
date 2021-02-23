import { Router } from 'express';

import followController from '../controllers/FollowController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/follower', adminAuth, followController.store);
router.get('/follower', adminAuth, followController.index);
router.get('/following', adminAuth, followController.show);
router.delete('/follower', adminAuth, followController.delete);

export default router;

// index - > lista um novo usuario
// store - > Cria um novo usuario
// delete - > apaga um usuario
// show - > mostra um usuario
// upate - > atualiza um usuario
