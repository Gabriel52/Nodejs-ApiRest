import { Router } from 'express';

import photoController from '../controllers/PhotoController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/photo', adminAuth, photoController.store);

export default router;

// index - > lista um novo usuario
// store - > Cria um novo usuario
// delete - > apaga um usuario
// show - > mostra um usuario
// upate - > atualiza um usuario
