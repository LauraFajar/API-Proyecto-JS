import { Router } from 'express';
import * as insumoController from '../../controllers/finanzas/insumo.controller.js';

const router = Router();

router.get('/listar', insumoController.getAll);
router.get('/buscar/:id', insumoController.getById);
router.post('/crear', insumoController.create);
router.put('/actualizar/:id', insumoController.update);
router.delete('/eliminar/:id', insumoController.deleteInsumo);

export default router;