import { Router } from 'express';
import * as almacenController from '../../controllers/finanzas/almacen.controller.js';

const router = Router();

router.get('/listar', almacenController.getAll);
router.get('/buscar/:id', almacenController.getById);
router.post('/crear', almacenController.create);
router.put('/actualizar/:id', almacenController.update);
router.delete('/eliminar/:id', almacenController.deleteAlmacen);

export default router;