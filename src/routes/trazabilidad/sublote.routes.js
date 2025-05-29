import { Router } from 'express';
import * as subloteController from '../../controllers/trazabilidad/sublote.controller.js';

const router = Router();

router.get('/listar', subloteController.getAll);
router.get('/buscar/:id', subloteController.getById);
router.post('/crear', subloteController.create);
router.put('/actualizar/:id', subloteController.update);
router.delete('/eliminar/:id', subloteController.deleteSublote);

export default router;