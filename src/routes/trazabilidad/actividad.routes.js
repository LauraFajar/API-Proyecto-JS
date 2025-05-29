import { Router } from 'express';
import * as actividadController from '../../controllers/trazabilidad/actividad.controller.js';

const router = Router();

router.get('/listar', actividadController.getAll);
router.get('/buscar/:id', actividadController.getById);
router.post('/crear', actividadController.create);
router.put('/actualizar/:id', actividadController.update);
router.delete('/eliminar/:id', actividadController.deleteActividad);

export default router;