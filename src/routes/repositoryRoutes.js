import { Router } from 'express';

import RepositoryController from '../controllers/RepositoryController';
import adminAuth from '../middlewares/authentication';

const router = new Router();

router.post('/repository', adminAuth, RepositoryController.store);
router.get('/repository', adminAuth, RepositoryController.index);
router.delete('/repository/:id', adminAuth, RepositoryController.delete);

export default router;

// index - > lista um novo usuario
// store - > Cria um novo usuario
// delete - > apaga um usuario
// show - > mostra um usuario
// upate - > atualiza um usuario
