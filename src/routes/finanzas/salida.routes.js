import { Router } from 'express';
import * as salidaController from '../../controllers/finanzas/salida.controller.js';
import { validarToken } from '../../middlewares/authentication.js';
import { authorizeRoles } from '../../middlewares/authorize.js';

const router = Router();

router.get('/listar', salidaController.getAll);
router.get('/buscar/:id', salidaController.getById);
router.post('/crear', validarToken, authorizeRoles('Instructor'), salidaController.create);
router.put('/actualizar/:id', salidaController.update);
router.delete('/eliminar/:id', salidaController.deleteSalida);

export default router;