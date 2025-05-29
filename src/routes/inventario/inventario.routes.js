import { Router } from 'express';
import * as inventarioController from '../../controllers/inventario/inventario.controller.js';

const router = Router();

router.get('/listar', inventarioController.getAll);
router.get('/buscar/:id', inventarioController.getById);
router.post('/crear', inventarioController.create);
router.put('/actualizar/:id', inventarioController.update);
router.delete('/eliminar/:id', inventarioController.deleteInventario);


export default router;