import { Router } from 'express';
import * as alertaController from '../../controllers/iot/alerta.controller.js';

const router = Router();

router.get('/listar', alertaController.getAll);
router.get('/buscar/:id', alertaController.getById);
router.post('/crear', alertaController.create);
router.put('/actualizar/:id', alertaController.update);
router.delete('/eliminar/:id', alertaController.deleteAlerta);

export default router;