import { Router } from 'express';
import * as utilizaController from '../../controllers/finanzas/utiliza.controller.js';

const router = Router();

router.get('/', utilizaController.getAll);
router.get('/:id', utilizaController.getById);
router.post('/', utilizaController.create);
router.put('/:id', utilizaController.update);
router.delete('/:id', utilizaController.deleteUtiliza);

export default router;