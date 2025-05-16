import { Router } from 'express';
import * as ingresoController from '../../controllers/finanzas/ingreso.controller.js';
import { validarToken } from '../../middlewares/authentication.js';
import { authorizeRoles } from '../../middlewares/authorize.js';

const router = Router();

router.get('/listar', ingresoController.getAll);
router.get('/buscar/:id', ingresoController.getById);
router.post('/crear', validarToken, authorizeRoles('Instructor'), ingresoController.create);
router.put('/actualizar/:id', ingresoController.update);
router.delete('/eliminar/:id', ingresoController.deleteIngreso);

export default router;