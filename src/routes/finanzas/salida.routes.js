import { Router } from 'express';
import * as salidaController from '../../controllers/finanzas/salida.controller.js';

const router = Router();

router.get('/listar', salidaController.getAll);
router.get('/buscar/:id', salidaController.getById);
router.post('/crear', salidaController.create);
router.put('/actualizar/:id', salidaController.update);
router.delete('/eliminar/:id', salidaController.deleteSalida);

export default router;