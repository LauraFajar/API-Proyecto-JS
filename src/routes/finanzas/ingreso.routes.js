import { Router } from 'express';
import * as ingresoController from '../../controllers/finanzas/ingreso.controller.js';

const router = Router();

router.get('/listar', ingresoController.getAll);
router.get('/buscar/:id', ingresoController.getById);
router.post('/crear', ingresoController.create);
router.put('/actualizar/:id', ingresoController.update);
router.delete('/eliminar/:id', ingresoController.deleteIngreso);

export default router;