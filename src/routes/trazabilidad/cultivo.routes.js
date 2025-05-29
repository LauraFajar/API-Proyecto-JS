import { Router } from 'express';
import * as cultivoController from '../../controllers/trazabilidad/cultivo.controller.js';

const router = Router();

router.get('/listar', cultivoController.getAll);
router.get('/buscar/:id', cultivoController.getById);
router.post('/crear', cultivoController.create);
router.put('/actualizar/:id', cultivoController.update);
router.delete('/eliminar/:id', cultivoController.deleteCultivo);

export default router;