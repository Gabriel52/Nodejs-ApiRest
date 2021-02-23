import { Router } from 'express';

import homeController from '../controllers/HomeController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.get('/', adminAuth, homeController.show);
export default router;

// index - > lista um novo usuario
// store - > Cria um novo usuario
// delete - > apaga um usuario
// show - > mostra um usuario
// upate - > atualiza um usuario
