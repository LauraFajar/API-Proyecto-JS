import { Router } from 'express';
import * as loteController from '../../controllers/trazabilidad/lote.controller.js';

const router = Router();

router.get('/listar', loteController.getAll);
router.get('/buscar/:id', loteController.getById);
router.post('/crear', loteController.create);
router.put('/actualizar/:id', loteController.update);
router.delete('/eliminar/:id', loteController.deleteLote);

export default router;