import { Router } from 'express';

import loginController from '../controllers/LoginController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/authentication', loginController.authentication);
router.get('/authentication', adminAuth, loginController.index);

export default router;

// index - > lista um novo usuario
// store - > Cria um novo usuario
// delete - > apaga um usuario
// show - > mostra um usuario
// upate - > atualiza um usuario
