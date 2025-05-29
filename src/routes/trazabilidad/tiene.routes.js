import { Router } from 'express';
import * as tieneController from '../../controllers/trazabilidad/tiene.controller.js';

const router = Router();

router.get('/listar', tieneController.getAll);
router.get('/buscar/:id', tieneController.getById);
router.post('/crear', tieneController.create);
router.put('/actualizar/:id', tieneController.update);
router.delete('/eliminar/:id', tieneController.deleteTiene);

export default router;