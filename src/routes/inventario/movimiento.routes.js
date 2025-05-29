import { Router } from 'express';
import * as movimientoController from '../../controllers/inventario/movimiento.controller.js';
const router = Router();

router.get('/listar', movimientoController.getAll);
router.get('/buscar/:id', movimientoController.getById);
router.post('/crear', movimientoController.create);
router.put('/actualizar/:id', movimientoController.update);
router.delete('/eliminar/:id', movimientoController.deleteMovimiento);
export default router;